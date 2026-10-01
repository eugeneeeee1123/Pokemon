/**
 * 151 FILE — Dex Page Logic (Spine + Ledger + Stage + Film & Visual Cards Grid)
 * 遵循 pokemon-web-project-plan.md §4.2 与 §7
 * 支持全部 1025 只宝可梦全局浏览与 10 官方地区切卷
 * 支持双展示模式：1. Ledger 档案台座模式  2. Grid 全景卡片网格模式
 */

// 地区预置数据引用
const KANTO_PRESET = (typeof window !== "undefined" && window.getRegionPokemon ? window.getRegionPokemon("kanto") : []) || [];

// 属性色票与字色统一来自 types-chart.js（这里不再维护第二份，之前漏了 dark）
const tc = window.TYPES_CHART;
const typeStyle = (t) => (tc ? tc.getTypeStyle(t) : "background:#3A6A88; color:#ffffff;");

// URL 查询参数
const params = new URLSearchParams(location.search);
const initialRegionSlug = params.get("region") || "all";
const currentRegion = window.getRegionBySlug ? window.getRegionBySlug(initialRegionSlug) : { slug: "all", name: "National", start: 1, end: 1025, offset: 0, limit: 1025 };

// 当前地区的 50 序号一段书脊分段
let SPINES = window.getRegionSpines ? window.getRegionSpines(currentRegion.start, currentRegion.end) : [[1, 50], [51, 100], [101, 151]];

// 记忆展示模式 (优先读 URL ?view=，其次 localStorage，默认 ledger)
const savedView = typeof localStorage !== "undefined" ? localStorage.getItem("file151.dex_view") : null;
const initialView = params.get("view") || savedView || "ledger";

// 响应式应用状态
const state = {
  displayMode: (initialView === "grid") ? "grid" : "ledger",
  region: currentRegion,
  type: params.get("type"),
  resist: params.get("resist"),
  q: params.get("q") || "",
  rawList: [],    // 当前地区拉取到的全部名单
  list: [],       // 经筛选后的当前展示名单
  i: 0,
  range: SPINES[0] || [1, 50],
  listRev: 0      // 每次 state.list 重新计算就 +1，用来决定要不要重画胶片和网格
};
let filmRev = -1;
let gridRev = -1;

// 方便测试与控制台交互
if (typeof window !== "undefined") {
  window.__dexState = state;
}

// 本地存储统一走 store.js（隐私模式下会抛错，那里已经处理）
const seen = () => window.store.seen();
const belt = () => window.store.belt();
const markSeen = (id) => window.store.markSeen(id);

// 把当前筛选写回地址栏，方便复制链接
function syncUrl() {
  const u = new URL(location.href);
  const set = (k, v) => (v ? u.searchParams.set(k, v) : u.searchParams.delete(k));
  set("region", state.region.slug === "all" ? "" : state.region.slug);
  set("type", state.type);
  set("resist", state.resist);
  set("q", state.q);
  history.replaceState(null, "", u.toString());
}

function current() {
  return state.list[state.i] || null;
}

// 过滤列表计算（当前地区 ∩ 当前筛选）。名录里已有 types，不需要再请求 /type/{name}。
function applyFilter() {
  const keepId = current()?.id;

  state.list = state.rawList.filter(p => {
    if (state.type && !p.types.includes(state.type)) return false;

    // 抗性过滤 (?resist=)：只留下对该属性防御倍率 ≤ 0.5 的
    if (state.resist && tc) {
      if (tc.getDefensiveMultiplier(state.resist, p.types) > 0.5) return false;
    }

    // 搜索过滤：名称包含或编号相等
    if (state.q) {
      const q = state.q.toLowerCase().trim();
      const matchName = p.name.toLowerCase().includes(q);
      const matchId = String(p.id) === q || String(p.id).padStart(3, "0") === q;
      if (!matchName && !matchId) return false;
    }

    return true;
  });

  state.listRev++;
  const keep = state.list.findIndex(p => p.id === keepId);
  state.i = keep >= 0 ? keep : 0;
}

// 切换选中的宝可梦索引
function selectIndex(i) {
  if (!state.list.length) { render(); return; }
  state.i = Math.max(0, Math.min(state.list.length - 1, i));
  const id = current().id;
  const spine = SPINES.find(([a, b]) => id >= a && id <= b) || state.range;
  state.range = spine;
  render();
}

// 加入腰带 (最多 6 只)
function addBelt(id) {
  if (!window.store.addBelt(id)) return;
  render();
}

const pad3 = (n) => String(n).padStart(3, "0");
const artOf = (id) => window.pokeApi.artUrl(id);
// 列表/网格只显示 ~96px：优先用本地 192px 缩略图（scripts/make-thumbs.mjs 生成），缺失时回退到远程大图
const thumbOf = (id) => `assets/thumbs/${id}.webp`;
// 注意：api.js 的全局兜底已占用 data-fallback，这里用 data-full；且只处理“缩略图”失败，别截断它的兜底链
document.addEventListener("error", (e) => {
  const img = e.target;
  if (img.tagName !== "IMG" || !img.dataset.full) return;
  if (!(img.getAttribute("src") || "").startsWith("assets/thumbs/")) return;
  img.src = img.dataset.full;
}, true);

// 网格里的“看过 / 在腰带上”标记就地更新，不重画 1025 张卡
function syncGridMarks() {
  const gridEl = document.getElementById("dex-grid-view");
  if (!gridEl) return;
  const onBelt = new Set(belt());
  const saw = new Set(seen());
  gridEl.querySelectorAll(".dex-card").forEach(card => {
    const id = Number(card.dataset.id);
    const on = onBelt.has(id);
    const hasSeen = saw.has(id);
    card.classList.toggle("seen", hasSeen);
    card.classList.toggle("on-belt", on);

    // 角落点：已看过点 (navy)、腰带点 (ball red)
    let dots = card.querySelector(".card-dots");
    if (!dots) {
      card.insertAdjacentHTML("afterbegin", '<div class="card-dots"><i class="dot seen" title="seen"></i><i class="dot belt" title="belt"></i></div>');
      dots = card.querySelector(".card-dots");
    }
    const dotSeen = dots.querySelector(".dot.seen");
    const dotBelt = dots.querySelector(".dot.belt");
    if (dotSeen) dotSeen.style.display = hasSeen ? "inline-block" : "none";
    if (dotBelt) dotBelt.style.display = on ? "inline-block" : "none";

    const badge = card.querySelector(".belt-badge");
    if (on && !badge) card.insertAdjacentHTML("afterbegin", '<span class="belt-badge" title="On the belt"></span>');
    if (!on && badge) badge.remove();
    const btn = card.querySelector(".card-belt-btn");
    if (btn) {
      btn.classList.toggle("on", on);
      btn.disabled = on;
      btn.textContent = on ? "On belt" : "+ Belt";
    }
  });
}

function renderFilm(p) {
  const filmEl = document.getElementById("film");
  if (!filmEl) return;
  // 列表没变就只切换当前格，不重建 1025 个按钮
  if (filmRev !== state.listRev) {
    filmEl.innerHTML = state.list.map(m =>
      `<button type="button" tabindex="-1" data-id="${m.id}" title="${m.name} (#${m.id})" aria-label="${m.name} #${m.id}"><img src="${thumbOf(m.id)}" data-full="${artOf(m.id)}" alt="" loading="lazy" /><span class="id">#${m.id}</span></button>`
    ).join("");
    filmRev = state.listRev;
  }
  const prevCell = filmEl.querySelector("[data-on]");
  prevCell?.removeAttribute("data-on");
  prevCell?.removeAttribute("aria-current");
  prevCell?.setAttribute("tabindex", "-1");
  const cell = p ? filmEl.querySelector(`[data-id="${p.id}"]`) : filmEl.firstElementChild;
  cell?.setAttribute("tabindex", "0"); // 1025 个按钮只留一个 Tab 停靠点，其余靠方向键
  if (p) {
    cell?.setAttribute("data-on", "");
    cell?.setAttribute("aria-current", "true");
    cell?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }
}

function renderGrid(gridViewEl) {
  if (gridRev !== state.listRev) {
    if (!state.list.length) {
      gridViewEl.innerHTML = `<p class="empty" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">No Pokémon found in this filter.</p>`;
    } else {
      const onBelt = new Set(belt());
      const saw = new Set(seen());
      gridViewEl.innerHTML = state.list.map(m => {
        const typesHtml = m.types.map(t => `<span class="dex-card-type" style="${typeStyle(t)}">${t}</span>`).join("");
        const hasSeen = saw.has(m.id);
        const on = onBelt.has(m.id);
        return `
          <article class="dex-card" data-id="${m.id}">
            <div class="card-dots">
              <i class="dot seen" title="seen" style="${hasSeen ? '' : 'display:none;'}"></i>
              <i class="dot belt" title="belt" style="${on ? '' : 'display:none;'}"></i>
            </div>
            <span class="dex-card-id">#${pad3(m.id)}</span>
            <div class="dex-card-thumb">
              <img src="${thumbOf(m.id)}" data-full="${artOf(m.id)}" alt="" loading="lazy" width="96" height="96" />
            </div>
            <p class="dex-card-name"><a class="dex-card-link" href="pokemon.html?id=${m.id}">${m.name}</a></p>
            <div class="dex-card-types">${typesHtml}</div>
            <button class="card-belt-btn" type="button" data-belt-id="${m.id}">+ Belt</button>
          </article>`;
      }).join("");
    }
    gridRev = state.listRev;
  }
  syncGridMarks();
}

// 渲染视图主逻辑
function render() {
  const saw = seen();
  const onBelt = belt();
  const p = current();

  // 1. 同步顶部工具栏状态 (地区下拉框、模式按键、数量标记、抗性芯片)
  const regSelect = document.getElementById("region-select");
  if (regSelect && regSelect.value !== state.region.slug) {
    regSelect.value = state.region.slug;
  }

  const countBadge = document.getElementById("count-badge");
  if (countBadge) {
    countBadge.textContent = `${state.list.length} files`;
  }

  const btnLedger = document.getElementById("btn-view-ledger");
  const btnGrid = document.getElementById("btn-view-grid");
  if (btnLedger && btnGrid) {
    btnLedger.classList.toggle("is-active", state.displayMode === "ledger");
    btnGrid.classList.toggle("is-active", state.displayMode === "grid");
  }

  const resistChip = document.getElementById("resist-chip");
  if (resistChip) {
    resistChip.hidden = !state.resist;
    resistChip.textContent = state.resist ? `resist ${state.resist} ✕` : "";
    resistChip.setAttribute("aria-label", state.resist ? `Remove resist ${state.resist} filter` : "");
  }

  const ledgerViewEl = document.getElementById("dex-ledger-view");
  const gridViewEl = document.getElementById("dex-grid-view");

  if (ledgerViewEl) ledgerViewEl.hidden = (state.displayMode !== "ledger");
  if (gridViewEl) gridViewEl.hidden = (state.displayMode !== "grid");

  // =========================================================================
  // 模式 1：Ledger & Stage (台座名录四区)
  // =========================================================================
  if (state.displayMode === "ledger") {
    const [a, b] = state.range;
    const rows = state.list.filter(m => m.id >= a && m.id <= b);

    // 1.1 左脊 (Spines)
    document.getElementById("spines").innerHTML = SPINES.map(([x, y]) => {
      const n = state.list.filter(m => m.id >= x && m.id <= y).length;
      return `<button type="button" data-a="${x}" data-b="${y}" ${x === a ? 'data-on' : ''} ${n ? '' : 'disabled'}>${pad3(x)}–${y}</button>`;
    }).join("");

    // 1.2 中名录 (Ledger)
    const ledgerEl = document.getElementById("ledger");
    const ledgerHadFocus = ledgerEl.contains(document.activeElement); // 重绘会销毁焦点元素，先记下来
    const tabStopId = rows.some(m => m.id === p?.id) ? p.id : rows[0]?.id; // 只有一个 Tab 停靠点（roving tabindex）
    ledgerEl.innerHTML = rows.length
      ? rows.map(m => {
          const typeNames = (m.types || []).join(" · ");
          return `<li class="${m.id === p?.id ? 'is-on' : ''} ${saw.includes(m.id) ? 'seen' : ''}" data-id="${m.id}" role="option" aria-selected="${m.id === p?.id}" aria-label="#${pad3(m.id)} ${m.name}${typeNames ? ", " + typeNames : ""}" tabindex="${m.id === tabStopId ? 0 : -1}"><span class="id">#${pad3(m.id)}</span><span class="ledger-name">${m.name}</span>${typeNames ? `<span class="ledger-types">${typeNames}</span>` : ""}</li>`;
        }).join("")
      : `<li class="empty" role="option" aria-disabled="true">No file in this spine.</li>`;
    if (ledgerHadFocus) ledgerEl.querySelector('li[tabindex="0"]')?.focus();
    // 只滚名录自己，避免方向键把整页拽下去
    const onRow = ledgerEl.querySelector("li.is-on");
    if (onRow) {
      const pane = ledgerEl.getBoundingClientRect();
      const row = onRow.getBoundingClientRect();
      if (row.top < pane.top) ledgerEl.scrollTop -= pane.top - row.top;
      else if (row.bottom > pane.bottom) ledgerEl.scrollTop += row.bottom - pane.bottom;
    }

    // 1.3 右台座 (Stage)
    const stageEl = document.getElementById("stage");
    if (!p) {
      stageEl.innerHTML = `<p class="empty">No file in this filter.</p>`;
    } else {
      const full = onBelt.length >= window.store.MAX_BELT;
      const has = onBelt.includes(p.id);

      stageEl.innerHTML = `
        <div class="stage-img-box" id="stageImgBox" title="Tap Pokémon to hear official Cry">
          <img src="${artOf(p.id)}" alt="${p.name} 3D Model" width="240" height="240" />
        </div>
        <p><span class="id">#${pad3(p.id)}</span></p>
        <p class="name">${p.name}</p>
        <p id="stageTypes">${p.types.map(t => `<span class="type" style="${typeStyle(t)}">${t}</span>`).join("")}</p>
        <div class="stage-meta" id="stageMeta"><p class="soft" style="font-size:0.8125rem;">#${pad3(p.id)}</p></div>
        <div class="actions">
          ${full && !has ? `<span class="empty">Belt full (6/6)</span>` : `<button class="btn btn-primary" id="add" ${has ? 'disabled' : ''}>${has ? 'On the belt' : 'Add to belt'}</button>`}
          <a class="btn btn-paper" href="pokemon.html?id=${p.id}">Open #${pad3(p.id)}</a>
        </div>`;

      // 异步加载当前只的三行死数据：种属、身高体重、本区编号
      (async () => {
        const curId = p.id;
        try {
          const [mon, spec] = await Promise.all([
            window.pokeApi ? window.pokeApi.getPokemon(curId).catch(() => null) : null,
            window.pokeApi ? window.pokeApi.getSpecies(curId).catch(() => null) : null
          ]);
          const metaBox = document.getElementById("stageMeta");
          if (!metaBox || current()?.id !== curId) return;
          const h = mon?.height != null ? `${Number(mon.height).toFixed(1)} m` : "";
          const w = mon?.weight != null ? `${Number(mon.weight).toFixed(1)} kg` : "";
          const hw = [h, w].filter(Boolean).join(" · ");
          metaBox.innerHTML = `
            ${spec?.genus ? `<p class="stage-genus" style="font-size:0.875rem; margin:0.15rem 0;">${spec.genus}</p>` : ""}
            ${hw ? `<p class="soft" style="font-size:0.8125rem; font-family:var(--font-num); color:var(--ink-soft); margin:0.15rem 0;">${hw}</p>` : ""}
            <p class="soft" style="font-size:0.8125rem; font-family:var(--font-num); color:var(--ink-soft); margin:0.15rem 0;">${state.region.name} #${pad3(curId)}</p>
          `;
        } catch (_) {}
      })();

      document.getElementById("add")?.addEventListener("click", () => addBelt(p.id));
      document.getElementById("stageImgBox")?.addEventListener("click", () => {
        window.pokeApi.playCry(p.id); // 用户主动点击，不受声音开关限制
      });
    }

    // 1.4 底胶片尺 (Film Strip)
    renderFilm(p);
  }

  // =========================================================================
  // 模式 2：Visual Cards Grid (全景 3D 卡片网格)
  // =========================================================================
  if (state.displayMode === "grid" && gridViewEl) {
    renderGrid(gridViewEl);
  }

  // 同步搜索框与属性芯片高亮
  const qEl = document.getElementById("q");
  if (qEl && qEl.value !== state.q) qEl.value = state.q;
  document.querySelectorAll(".chip[data-type]").forEach(c => {
    c.toggleAttribute("data-on", (c.dataset.type || "") === (state.type || ""));
  });
}

// 页面加载启动
async function initDex() {
  // 1. 获取当前地区名单 (优先读取 10 地区本地写死完整名录)
  if (window.getRegionPokemon) {
    state.rawList = window.getRegionPokemon(state.region.slug) || [];
  }
  if (!state.rawList || state.rawList.length === 0) {
    if (state.region.slug === "kanto" && KANTO_PRESET.length > 0) {
      state.rawList = KANTO_PRESET;
    } else if (window.pokeApi) {
      try {
        state.rawList = await window.pokeApi.getList(state.region.limit, state.region.offset);
      } catch (e) {
        console.error("Failed to load region pokemon list", e);
        state.rawList = [];
      }
    }
  }

  // 2. 应用过滤条件
  applyFilter();

  // 3. 处理 URL 传入的起始 id
  const startId = Number(params.get("id"));
  if (startId) {
    const hitIdx = state.list.findIndex(p => p.id === startId);
    if (hitIdx >= 0) {
      state.i = hitIdx;
      const spine = SPINES.find(([a, b]) => startId >= a && startId <= b);
      if (spine) state.range = spine;
    }
  }

  // 4. 初次渲染
  render();
}

// 事件委托与监听
document.addEventListener("DOMContentLoaded", () => {
  // 1. 切换展示模式 (Ledger / Grid)
  document.getElementById("btn-view-ledger")?.addEventListener("click", () => {
    if (state.displayMode === "ledger") return;
    state.displayMode = "ledger";
    localStorage.setItem("file151.dex_view", "ledger");
    render();
  });

  document.getElementById("btn-view-grid")?.addEventListener("click", () => {
    if (state.displayMode === "grid") return;
    state.displayMode = "grid";
    localStorage.setItem("file151.dex_view", "grid");
    render();
  });

  // 2. 地区选择下拉框切换
  document.getElementById("region-select")?.addEventListener("change", e => {
    const slug = e.target.value;
    state.region = window.getRegionBySlug ? window.getRegionBySlug(slug) : { slug, name: "National", start: 1, end: 1025 };
    SPINES = window.getRegionSpines ? window.getRegionSpines(state.region.start, state.region.end) : [[1, 50]];
    state.range = SPINES[0] || [1, 50];

    if (window.getRegionPokemon) {
      state.rawList = window.getRegionPokemon(state.region.slug) || [];
    }
    applyFilter();
    render();
    syncUrl();
  });

  // 3. 书脊点击
  document.getElementById("spines")?.addEventListener("click", e => {
    const b = e.target.closest("button[data-a]");
    if (!b || b.disabled) return;
    state.range = [Number(b.dataset.a), Number(b.dataset.b)];
    const hit = state.list.findIndex(p => p.id >= state.range[0] && p.id <= state.range[1]);
    if (hit >= 0) state.i = hit;
    render();
  });

  // 4. 名录行点击
  document.getElementById("ledger")?.addEventListener("click", e => {
    const row = e.target.closest("[data-id]");
    if (!row) return;
    selectIndex(state.list.findIndex(p => p.id === Number(row.dataset.id)));
  });

  // 5. 胶片尺点击
  document.getElementById("film")?.addEventListener("click", e => {
    const cell = e.target.closest("[data-id]");
    if (!cell) return;
    selectIndex(state.list.findIndex(p => p.id === Number(cell.dataset.id)));
  });

  // 6. 卡片网格点击委托 (卡片直达详情/播放叫声，按键加入腰带)
  document.getElementById("dex-grid-view")?.addEventListener("click", e => {
    const beltBtn = e.target.closest("[data-belt-id]");
    if (beltBtn) {
      e.stopPropagation();
      e.preventDefault();
      addBelt(Number(beltBtn.dataset.beltId));
      return;
    }

    // 卡片里是真链接：这里只记“看过”，跳转交给浏览器（Ctrl/中键/右键“新标签页打开”都可用）
    const card = e.target.closest(".dex-card[data-id]");
    if (card) markSeen(Number(card.dataset.id));
  });

  // 7. 搜索输入
  document.getElementById("q")?.addEventListener("input", e => {
    state.q = e.target.value.trim();
    applyFilter();
    render();
    syncUrl();
  });

  document.getElementById("q")?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      if (state.list.length === 1) {
        location.href = `pokemon.html?id=${state.list[0].id}`;
      } else if (/^\d+$/.test(state.q)) {
        const num = Number(state.q);
        if (num >= 1 && num <= 1025) location.href = `pokemon.html?id=${num}`;
      }
    }
  });

  // 8. 属性芯片点击
  document.querySelectorAll(".chip[data-type]").forEach(c => {
    c.addEventListener("click", () => {
      const clickedType = c.dataset.type || null;
      state.type = (state.type === clickedType) ? null : clickedType;
      applyFilter();
      render();
      syncUrl();
    });
  });

  // 8b. 抗性芯片：点一下取消 ?resist= 过滤
  document.getElementById("resist-chip")?.addEventListener("click", () => {
    state.resist = null;
    applyFilter();
    render();
    syncUrl();
  });

  // 8c. 键盘：名录行和网格卡片用 Enter / 空格触发，和点击一致
  ["ledger", "dex-grid-view"].forEach(id => {
    document.getElementById(id)?.addEventListener("keydown", e => {
      if (e.key !== "Enter" && e.key !== " ") return;
      if (e.target.closest("button, a")) return; // 卡片里的 + Belt 按钮和链接自己处理
      const row = e.target.closest("[data-id]");
      if (!row) return;
      e.preventDefault();
      row.click();
    });
  });

  // 9. 随机抽取
  document.getElementById("draw")?.addEventListener("click", () => {
    if (!state.list.length) return;
    const randIdx = Math.floor(Math.random() * state.list.length);
    selectIndex(randIdx);
    const picked = state.list[randIdx];
    if (picked && window.pokeApi) window.pokeApi.playCryAuto(picked.id);
  });

  // 10. 全局快捷键导航
  document.addEventListener("keydown", e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return; // 不抢浏览器和系统快捷键（Cmd+R、Ctrl+C 等）
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) {
      if (e.key === "Escape") {
        state.q = "";
        applyFilter();
        render();
        syncUrl();
        document.getElementById("q")?.blur();
      }
      return;
    }
    if (e.key === "/") {
      e.preventDefault();
      document.getElementById("q")?.focus();
    }
    if (state.displayMode === "ledger") {
      if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault(); // 否则页面会一边选中一边滚动
        selectIndex(state.i + (e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1));
      }
      if (/^[a-z]$/i.test(e.key)) {
        const [a, b] = state.range;
        const hit = state.list.find(p => p.id >= a && p.id <= b && p.name.toLowerCase().startsWith(e.key.toLowerCase()));
        if (hit) selectIndex(state.list.findIndex(p => p.id === hit.id));
      }
    }
  });

  // 启动执行
  initDex();
});
