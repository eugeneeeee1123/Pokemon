/**
 * 151 FILE — Dex Page Logic (Spine + Ledger + Stage + Film & Visual Cards Grid)
 * 遵循 pokemon-web-project-plan.md §4.2 与 §7
 * 支持全部 1025 只宝可梦全局浏览与 10 官方地区切卷
 * 支持双展示模式：1. Ledger 档案台座模式  2. Grid 全景卡片网格模式
 */

// 地区预置数据引用
const KANTO_PRESET = (typeof window !== "undefined" && window.getRegionPokemon ? window.getRegionPokemon("kanto") : []) || [];

// 属性色票对照表
const TYPE_COLORS = {
  normal: '#A8A878', fire: '#F08030', water: '#6890F0', electric: '#F8D030',
  grass: '#78C850', ice: '#98D8D8', fighting: '#C03028', poison: '#A040A0',
  ground: '#E0C068', flying: '#A890F0', psychic: '#F85888', bug: '#A8B820',
  rock: '#B8A038', ghost: '#705898', dragon: '#7038F8', steel: '#B8B8D0', fairy: '#EE99AC'
};

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
  typeFilterIdSet: null // 当使用属性芯片过滤时的 ID 集合
};

// 方便测试与控制台交互
if (typeof window !== "undefined") {
  window.__dexState = state;
}

// 本地存储读取辅助函数
const seen = () => JSON.parse(localStorage.getItem("file151.seen") || "[]");
const belt = () => JSON.parse(localStorage.getItem("file151.belt") || "[]");

function markSeen(id) {
  const s = seen();
  if (!s.includes(id)) {
    localStorage.setItem("file151.seen", JSON.stringify(s.concat(id)));
  }
}

function current() {
  return state.list[state.i] || null;
}

// 过滤列表计算（当前地区 ∩ 当前筛选）
async function applyFilter() {
  const keepId = current()?.id;

  // 如果有属性筛选，且尚未获取对应属性的全局 ID 集合，则单次拉取
  if (state.type && !state.typeFilterIdSet) {
    if (window.pokeApi) {
      state.typeFilterIdSet = await window.pokeApi.getTypePokemonIds(state.type);
    }
  }

  state.list = state.rawList.filter(p => {
    // 属性过滤：若已具备 types 字段直接比对，否则利用 typeFilterIdSet
    if (state.type) {
      if (p.types && p.types.length > 0) {
        if (!p.types.includes(state.type)) return false;
      } else if (state.typeFilterIdSet) {
        if (!state.typeFilterIdSet.has(p.id)) return false;
      }
    }

    // 弱点/抗性过滤 (?resist=)
    if (state.resist && window.TYPES_CHART) {
      const defMul = window.TYPES_CHART.getDefensiveMultiplier(state.resist, p.types);
      if (defMul > 0.5) return false;
    }

    // 搜索过滤：名称前缀/包含或编号相等
    if (state.q) {
      const q = state.q.toLowerCase().trim();
      const matchName = p.name.toLowerCase().includes(q);
      const matchId = String(p.id) === q || String(p.id).padStart(3, "0") === q;
      if (!matchName && !matchId) return false;
    }

    return true;
  });

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
  const b = belt();
  if (b.includes(id) || b.length >= 6) return;
  localStorage.setItem("file151.belt", JSON.stringify(b.concat(id)));
  render();
}

// 渲染视图主逻辑
async function render() {
  const saw = seen();
  const onBelt = belt();
  const p = current();

  // 1. 同步顶部工具栏状态 (地区下拉框、模式按键、数量标记)
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
      return `<button type="button" data-a="${x}" data-b="${y}" ${x === a ? 'data-on' : ''} ${n ? '' : 'disabled'}>${String(x).padStart(3, "0")}–${y}</button>`;
    }).join("");

    // 1.2 中名录 (Ledger)
    document.getElementById("ledger").innerHTML = rows.length
      ? rows.map(m => `<li class="${m.id === p?.id ? 'is-on' : ''} ${saw.includes(m.id) ? 'seen' : ''}" data-id="${m.id}"><span class="id">#${String(m.id).padStart(3, "0")}</span>${m.name}</li>`).join("")
      : `<li class="empty">No file in this spine.</li>`;

    // 1.3 右台座 (Stage)
    const stageEl = document.getElementById("stage");
    if (!p) {
      stageEl.innerHTML = `<p class="empty">No file in this filter.</p>`;
    } else {
      const full = onBelt.length >= 6;
      const has = onBelt.includes(p.id);
      const artUrl = window.pokeApi ? window.pokeApi.artUrl(p.id) : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${p.id}.png`;

      stageEl.innerHTML = `
        <div class="stage-img-box" id="stageImgBox" title="Tap Pokémon to hear official Cry">
          <img src="${artUrl}" alt="${p.name} 3D Model" width="240" height="240" />
        </div>
        <p><span class="id">#${String(p.id).padStart(3, "0")}</span></p>
        <p class="name">${p.name}</p>
        <p id="stageTypes">${(p.types || []).map(t => {
          const bg = TYPE_COLORS[t] || '#3A6A88';
          const color = (t === 'electric' || t === 'ice' || t === 'normal' || t === 'ground') ? '#071422' : '#ffffff';
          return `<span class="type" style="background:${bg}; color:${color};">${t}</span>`;
        }).join("")}</p>
        <div class="actions">
          ${full && !has ? `<span class="empty">Belt full (6/6)</span>` : `<button class="btn-primary" id="add" ${has ? 'disabled' : ''}>${has ? 'On the belt' : 'Add to belt'}</button>`}
          <a class="btn-paper" href="pokemon.html?id=${p.id}">Open #${String(p.id).padStart(3, "0")}</a>
        </div>`;

      document.getElementById("add")?.addEventListener("click", () => addBelt(p.id));
      document.getElementById("stageImgBox")?.addEventListener("click", () => {
        if (window.pokeApi) window.pokeApi.playCry(p.id);
      });
    }

    // 1.4 底胶片尺 (Film Strip)
    document.getElementById("film").innerHTML = state.list.map(m => {
      const artUrl = window.pokeApi ? window.pokeApi.artUrl(m.id) : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${m.id}.png`;
      return `<button type="button" data-id="${m.id}" ${m.id === p?.id ? 'data-on' : ''} title="${m.name} (#${m.id})"><img src="${artUrl}" alt="" loading="lazy" /><span class="id">#${m.id}</span></button>`;
    }).join("");
    document.querySelector("#film [data-on]")?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }

  // =========================================================================
  // 模式 2：Visual Cards Grid (全景 3D 卡片网格)
  // =========================================================================
  if (state.displayMode === "grid" && gridViewEl) {
    if (!state.list.length) {
      gridViewEl.innerHTML = `<p class="empty" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">No Pokémon found in this filter.</p>`;
    } else {
      gridViewEl.innerHTML = state.list.map(m => {
        const isSeen = saw.includes(m.id);
        const isOnBelt = onBelt.includes(m.id);
        const artUrl = window.pokeApi ? window.pokeApi.artUrl(m.id) : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${m.id}.png`;
        const typesHtml = (m.types || []).map(t => {
          const bg = TYPE_COLORS[t] || '#3A6A88';
          const color = (t === 'electric' || t === 'ice' || t === 'normal' || t === 'ground') ? '#071422' : '#ffffff';
          return `<span class="dex-card-type" style="background:${bg}; color:${color};">${t}</span>`;
        }).join("");

        return `
          <article class="dex-card ${isSeen ? 'seen' : ''} ${isOnBelt ? 'on-belt' : ''}" data-id="${m.id}" title="Open #${m.id} ${m.name}">
            ${isOnBelt ? '<span class="belt-badge" title="On the belt"></span>' : ''}
            <span class="dex-card-id">#${String(m.id).padStart(3, "0")}</span>
            <div class="dex-card-thumb">
              <img src="${artUrl}" alt="${m.name}" loading="lazy" width="96" height="96" />
            </div>
            <p class="dex-card-name">${m.name}</p>
            <div class="dex-card-types">${typesHtml}</div>
            <button class="card-belt-btn ${isOnBelt ? 'on' : ''}" type="button" data-belt-id="${m.id}" ${isOnBelt ? 'disabled' : ''}>
              ${isOnBelt ? 'On belt' : '+ Belt'}
            </button>
          </article>
        `;
      }).join("");
    }
  }

  // 同步搜索框与属性芯片高亮
  document.getElementById("q").value = state.q;
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
  await applyFilter();

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
  document.getElementById("region-select")?.addEventListener("change", async e => {
    const slug = e.target.value;
    state.region = window.getRegionBySlug ? window.getRegionBySlug(slug) : { slug, name: "National", start: 1, end: 1025 };
    SPINES = window.getRegionSpines ? window.getRegionSpines(state.region.start, state.region.end) : [[1, 50]];
    state.range = SPINES[0] || [1, 50];

    if (window.getRegionPokemon) {
      state.rawList = window.getRegionPokemon(state.region.slug) || [];
    }
    await applyFilter();
    render();

    const u = new URL(location.href);
    if (slug === "all") u.searchParams.delete("region");
    else u.searchParams.set("region", slug);
    history.replaceState(null, "", u.toString());
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

    const card = e.target.closest(".dex-card[data-id]");
    if (card) {
      const id = Number(card.dataset.id);
      markSeen(id);
      if (window.pokeApi) window.pokeApi.playCry(id);
      location.href = `pokemon.html?id=${id}`;
    }
  });

  // 7. 搜索输入
  document.getElementById("q")?.addEventListener("input", async e => {
    state.q = e.target.value.trim();
    await applyFilter();
    render();
  });

  document.getElementById("q")?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      if (state.list.length === 1) {
        location.href = `pokemon.html?id=${state.list[0].id}`;
      } else {
        const num = parseInt(state.q, 10);
        if (num >= 1 && num <= 1025) {
          location.href = `pokemon.html?id=${num}`;
        }
      }
    }
  });

  // 8. 属性芯片点击
  document.querySelectorAll(".chip[data-type]").forEach(c => {
    c.addEventListener("click", async () => {
      const clickedType = c.dataset.type || null;
      state.type = (state.type === clickedType) ? null : clickedType;
      state.typeFilterIdSet = null; // 重置属性集合缓存
      await applyFilter();
      render();
    });
  });

  // 9. 随机抽取
  document.getElementById("draw")?.addEventListener("click", () => {
    if (!state.list.length) return;
    const randIdx = Math.floor(Math.random() * state.list.length);
    selectIndex(randIdx);
    const picked = state.list[randIdx];
    if (picked && window.pokeApi) window.pokeApi.playCry(picked.id);
  });

  // 10. 全局快捷键导航
  document.addEventListener("keydown", e => {
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) {
      if (e.key === "Escape") {
        state.q = "";
        applyFilter().then(render);
        document.getElementById("q")?.blur();
      }
      return;
    }
    if (e.key === "/") {
      e.preventDefault();
      document.getElementById("q")?.focus();
    }
    if (state.displayMode === "ledger") {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") selectIndex(state.i + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") selectIndex(state.i - 1);
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
