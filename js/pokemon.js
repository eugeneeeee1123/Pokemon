/**
 * 151 FILE — Pokemon Detail Page Logic
 * 遵循 pokemon-web-project-plan.md §4.3 与 AGENTS.md
 * - 开合球动画与原生叫声
 * - 3D HOME 立绘与 Shiny 闪光形态一键切换
 * - 6 项能力值条与属性、体态、特性
 * - 腰带加入、Lineup 阵容比对入口、复制链接、键盘左右切只
 */

document.addEventListener("DOMContentLoaded", async () => {
  const tc = window.TYPES_CHART;
  const store = window.store;

  const q = new URLSearchParams(location.search);
  const key = q.get("id") || q.get("name");
  const root = document.getElementById("file");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 属性色与字色统一来自 types-chart.js
  const typeStyle = (t) => (tc ? tc.getTypeStyle(t) : "background:#3A6A88; color:#ffffff;");

  // 页面里所有由 URL 或 API 带来的文本先转义再放进 innerHTML
  function esc(text) {
    return String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function barColor(v) {
    if (v >= 150) return "#EE1515";
    if (v >= 100) return "#7EB6D9";
    if (v >= 60) return "#3D7DCA";
    return "#1E3A55";
  }

  function getRegion(id) {
    if (window.REGIONS) {
      const found = window.REGIONS.find(r => id >= r.start && id <= r.end);
      if (found) return found;
    }
    return { name: "National", start: 1, end: 1025, slug: "all" };
  }

  const defaultArt = (id) => window.pokeApi.artUrl(id);
  const shinyArt = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`;

  let isShiny = false;

  // 腰带按钮区：加入后只刷新这一小块，不重画整页（否则开球动画会重播）
  function beltControl(mon) {
    const b = store.belt();
    const on = b.includes(mon.id);
    const full = b.length >= store.MAX_BELT && !on;
    return full
      ? `<span class="empty" style="align-self:center; font-family:var(--font-num); font-weight:700;">Belt full (6/6)</span>`
      : `<button class="btn btn-primary" id="add" type="button" ${on ? "disabled" : ""}>${on ? "On the belt" : "Add to belt"}</button>`;
  }

  function bindBeltControl(mon) {
    document.getElementById("add")?.addEventListener("click", () => {
      if (!store.addBelt(mon.id)) return;
      document.getElementById("belt-ctl").innerHTML = beltControl(mon);
    });
  }

  // 闪光切换：只换图片和文字
  function setShiny(mon, on) {
    isShiny = on;
    const art = document.getElementById("art");
    const cap = document.getElementById("art-caption");
    const btn = document.getElementById("shiny");
    if (art) art.src = on ? shinyArt(mon.id) : defaultArt(mon.id);
    if (cap) cap.textContent = on ? "★ Shiny Form (HOME 3D)" : "Default Form (HOME 3D)";
    if (btn) btn.textContent = on ? "Show default" : "Show shiny";
  }

  async function render(mon) {
    const region = getRegion(mon.id);
    const spec = await window.pokeApi.getSpecies(mon.id).catch(() => null);
    const abilityTexts = await Promise.all((mon.abilities || []).map(a => window.pokeApi.getAbilityText(a.name)));
    const evoIds = spec?.evoUrl ? await window.pokeApi.getEvoIds(spec.evoUrl).catch(() => []) : [];

    const statFields = [
      { key: "hp", label: "HP" },
      { key: "attack", label: "Attack" },
      { key: "defense", label: "Defense" },
      { key: "special-attack", label: "Sp. Atk" },
      { key: "special-defense", label: "Sp. Def" },
      { key: "speed", label: "Speed" }
    ];

    root.innerHTML = `
      <div class="detail">
        <div style="display:flex; flex-direction:column; align-items:center;">
          <button class="detail-art-stage" id="well" type="button" aria-label="Play Cry" title="Tap to play official cry">
            <img id="art" src="${defaultArt(mon.id)}" alt="${esc(mon.name)} 3D Model" />
          </button>
          <p id="art-caption" style="color:var(--ink-soft); font-size:0.75rem; font-family:var(--font-num); margin-top:0.75rem;">Default Form (HOME 3D)</p>
        </div>

        <div class="fields">
          ${mon.isOffline ? `
            <div style="margin-bottom:0.75rem; padding:0.5rem 0.75rem; background:rgba(238,21,21,0.08); border:1px solid rgba(238,21,21,0.25); border-radius:4px; font-size:0.75rem; color:var(--paper); display:flex; justify-content:space-between; align-items:center;">
              <span style="font-family:var(--font-num); font-weight:700; letter-spacing:0.04em;">[OFFLINE ARCHIVE] Live PokeAPI sync failed</span>
              <button class="btn btn-sm btn-paper" id="retry-sync" type="button">Retry sync</button>
            </div>
          ` : ""}

          <div class="fields-top">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.4rem;">
              <div>
                <span class="id-badge">#${String(mon.id).padStart(3, "0")}</span>
                <h1 style="font-family:var(--font-ui); font-size:1.85rem; font-weight:700; margin:0.25rem 0 0.1rem; letter-spacing:-0.02em; color:var(--ink);">${esc(mon.name)}</h1>
                ${spec?.genus ? `<span class="soft" style="font-size:0.875rem; color:var(--ink-soft);">${esc(spec.genus)}</span>` : ""}
              </div>
              <div style="display:flex; flex-direction:column; align-items:flex-end; gap:0.35rem;">
                <div>
                  ${mon.types.map(t =>
                    `<a class="chip" style="${typeStyle(t)} margin-left:0.4rem;" href="pokedex.html?type=${t}" title="Filter Dex by ${t}">${t}</a>`
                  ).join("")}
                </div>
                <span style="font-family:var(--font-num); font-weight:700; font-size:0.875rem; color:var(--ink-soft);">
                  ${Number(mon.height).toFixed(1)} m · ${Number(mon.weight).toFixed(1)} kg
                </span>
              </div>
            </div>
            ${spec?.flavor ? `<p class="flavor" style="margin:0; padding:0.4rem 0 0; border:0;">${esc(spec.flavor)}</p>` : ""}
          </div>

          <div class="fields-grid">
            <div class="fields-col">
              <div style="margin-bottom: 0.85rem;">
                <p class="field-title">Abilities</p>
                <ul class="abilities-list">
                  ${mon.abilities.map((a, i) =>
                    `<li><b>${esc(a.name.replace(/-/g, " "))}</b>${a.is_hidden ? ' <span class="hidden-tag">(hidden)</span>' : ""} — ${esc(abilityTexts[i] || "No description")}</li>`
                  ).join("")}
                </ul>
              </div>

              ${evoIds.length > 1 ? `
                <div>
                  <p class="field-title">Evolution Line</p>
                  <div class="evo-row">
                    ${evoIds.map(eid => `
                      <a class="evo-link ${eid === mon.id ? 'current' : ''}" href="pokemon.html?id=${eid}" title="#${eid}">
                        <img src="${defaultArt(eid)}" alt="#${eid}" width="48" height="48" loading="lazy">
                        <span>#${String(eid).padStart(3, "0")}</span>
                      </a>
                    `).join("")}
                  </div>
                </div>
              ` : ""}
            </div>

            <div class="fields-col">
              <p class="field-title">Base Stats</p>
              <div class="stats-list">
                ${statFields.map(s => {
                  const statObj = mon.stats.find(st => st.name === s.key);
                  const v = statObj ? statObj.value : 0;
                  const pct = Math.min(100, Math.round((v / 255) * 100));
                  return `
                    <div class="stat">
                      <span>${s.label}</span>
                      <div class="bar"><i style="width:${pct}%; background:${barColor(v)}"></i></div>
                      <span>${v}</span>
                    </div>`;
                }).join("")}
              </div>
            </div>
          </div>

          <div class="fields-bottom">
            <p style="color:var(--ink-soft); font-family:var(--font-num); font-size:0.8125rem; margin:0 0 0.4rem 0; padding:0; border:0;">
              ${region.name} #${region.start}–${region.end}
            </p>

            <div class="detail-actions">
              <span id="belt-ctl">${beltControl(mon)}</span>
              <button class="btn btn-paper" id="favorite" type="button" aria-pressed="${store.isFavorite(mon.id)}">${store.isFavorite(mon.id) ? "★ Favorited" : "☆ Favorite"}</button>
              <button class="btn btn-paper" id="cry" type="button">Play cry</button>
              <button class="btn btn-paper" id="shiny" type="button">Show shiny</button>
              <a class="btn btn-paper" href="battle-lab.html?left=${mon.id}">Battle Lab</a>
              <a class="btn btn-paper" href="lineup.html?a=${mon.id}">Compare in lineup</a>
              <button class="btn btn-paper" id="copy" type="button">Copy link</button>
              <a class="btn btn-paper" href="pokedex.html?region=${region.slug}">Close file</a>
            </div>
          </div>
        </div>
      </div>
    `;

    const well = document.getElementById("well");
    well?.addEventListener("click", () => {
      window.pokeApi.playCry(mon.id);
    });

    bindBeltControl(mon);

    const favBtn = document.getElementById("favorite");
    favBtn?.addEventListener("click", () => {
      const active = store.toggleFavorite(mon.id);
      favBtn.textContent = active ? "★ Favorited" : "☆ Favorite";
      favBtn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.getElementById("cry")?.addEventListener("click", () => {
      window.pokeApi.playCry(mon.id);
    });

    const shinyBtn = document.getElementById("shiny");
    shinyBtn?.addEventListener("click", () => setShiny(mon, !isShiny));

    // 该只没有闪光图：退回普通图并禁用按钮，不悄悄显示普通图冒充闪光
    document.getElementById("art")?.addEventListener("error", () => {
      if (!isShiny) return;
      setShiny(mon, false);
      shinyBtn.disabled = true;
      shinyBtn.textContent = "No shiny art";
    });

    document.getElementById("copy")?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        const copyBtn = document.getElementById("copy");
        if (copyBtn) {
          copyBtn.textContent = "Copied!";
          setTimeout(() => { copyBtn.textContent = "Copy link"; }, 1500);
        }
      } catch (_) {}
    });

    document.getElementById("retry-sync")?.addEventListener("click", () => {
      location.reload();
    });

    // 如果是离线名录降级模式，后台静默重试 1 次拉取实时数据，拉到后无缝更新
    if (mon.isOffline) {
      setTimeout(async () => {
        try {
          const fresh = await window.pokeApi.getPokemon(mon.id);
          if (fresh && !fresh.isOffline) {
            await render(fresh);
          }
        } catch (_) {}
      }, 2500);
    }
  }

  function showMessage(html) {
    root.innerHTML = `<h1 class="sr-only">Pokémon file</h1><p class="empty" role="alert" style="text-align:center; padding:4rem;">${html}</p>`;
  }

  // 页面主入口
  if (!key) {
    showMessage(`No Pokémon file specified. <a class="link-action" href="pokedex.html">Open the dex</a>.`);
    return;
  }

  showMessage("Opening file…");

  let mon = null;
  try {
    mon = await window.pokeApi.getPokemon(key);
  } catch (_) {}

  if (!mon) {
    // 编号或名字在本地名录里，说明是网络问题；否则是输入有误
    const known = /^\d+$/.test(key)
      ? window.getSpeciesById && window.getSpeciesById(Number(key))
      : (window.ALL_SPECIES || []).some(s => s.name.toLowerCase() === key.toLowerCase());
    showMessage(known
      ? `PokeAPI did not answer. <a class="link-action" href="${esc(location.href)}">Open this page again</a>.`
      : `No file matches that name or number. <a class="link-action" href="pokedex.html">Open the dex</a>.`);
    return;
  }

  store.markSeen(mon.id);
  store.setLast(mon.id);
  document.title = `#${String(mon.id).padStart(3, "0")} ${mon.name} — 151 File`;
  history.replaceState(null, "", `pokemon.html?id=${mon.id}`);
  await render(mon);

  // 进场叫声：只在声音开关打开时自动播放
  window.pokeApi.playCryAuto(mon.id);

  // 键盘快捷导航 (左右切换编号，Esc 返回图鉴)
  document.addEventListener("keydown", e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === "ArrowRight" && mon.id < 1025) {
      location.href = `pokemon.html?id=${mon.id + 1}`;
    }
    if (e.key === "ArrowLeft" && mon.id > 1) {
      location.href = `pokemon.html?id=${mon.id - 1}`;
    }
    if (e.key === "Escape") {
      location.href = `pokedex.html?region=${getRegion(mon.id).slug}`;
    }
  });
});
