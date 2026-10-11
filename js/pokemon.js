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
  const legacyAnimatedSpriteUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  const staticModel3dUrl = (id) => `https://raw.githubusercontent.com/Pokemon-3D-api/assets/main/models/opt/regular/${id}.glb`;
  const model3dUrl = (id) => {
    if (id >= 1 && id <= 151) {
      return `https://raw.githubusercontent.com/06wj/pokemon/master/public/models/${String(id).padStart(3, "0")}/model.glb`;
    }
    return staticModel3dUrl(id);
  };

  // Bulbagarden Archives lists these official animation files for every Kanto ID.
  // The filenames follow the ID + species name + AG convention, with these archive spellings.
  const animeNameOverrides = { 29: "Nidoran", 32: "Nidoran", 83: "Farfetch'd" };
  const animeArtById = Object.fromEntries((window.ALL_SPECIES || [])
    .filter(species => species.id >= 1 && species.id <= 151)
    .map(({ id, name }) => {
      const fileName = animeNameOverrides[id] || name;
      const suffix = id === 52 ? " anime.png" : " AG anime.png";
      return [id, {
        file: `${String(id).padStart(3, "0")}${fileName}${suffix}`,
        series: id === 52 ? "DP+XY" : id === 151 ? "AG+XY" : "AG"
      }];
    }));
  const animeSeriesNames = {
    AG: "Pokémon the Series: Ruby and Sapphire",
    XY: "Pokémon the Series: XY",
    "DP+XY": "Pokémon the Series: Diamond and Pearl · Pokémon the Series: XY",
    "AG+XY": "Pokémon the Series: Ruby and Sapphire · Pokémon the Series: XY"
  };
  const animeArtUrl = (asset) => `https://archives.bulbagarden.net/wiki/Special:FilePath/${encodeURIComponent(asset.file)}`;
  const animeFilePageUrl = (asset) => `https://archives.bulbagarden.net/wiki/File:${encodeURIComponent(asset.file).replace(/%20/g, "_")}`;

  let isShiny = false;
  let isAnimeArt = false;
  let isLegacySprite = false;
  let stageModeController = null;

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

  // 闪光切换：换图片和文字（如果是 3D 模式切到闪光 2D 图）
  function setShiny(mon, on) {
    isShiny = on;
    isAnimeArt = false;
    isLegacySprite = false;
    const art = document.getElementById("art");
    const poke3d = document.getElementById("poke-3d");
    const btn = document.getElementById("shiny");
    const btn3d = document.getElementById("btn-mode-3d");
    const btn2d = document.getElementById("btn-mode-2d");

    if (art) {
      art.src = on ? shinyArt(mon.id) : defaultArt(mon.id);
      art.alt = `${mon.name} official artwork`;
      if (on) {
        art.style.display = "block";
        if (poke3d) poke3d.style.display = "none";
        btn2d?.classList.add("is-active");
        btn3d?.classList.remove("is-active");
      }
    }
    stageModeController?.("2d");
    if (btn) btn.textContent = on ? "Show default" : "Show shiny";
  }

  function formatEvoCondition(details) {
    const choices = Array.isArray(details) ? details.filter(Boolean) : [];
    const preferred = choices.filter(d => d.is_default !== false);
    const rows = preferred.length ? preferred : choices;
    if (!rows.length) return "xxx";
    const refName = (ref) => ref?.name ? ref.name.replace(/-/g, " ") : "";
    const times = { day: "Day", night: "Night", dusk: "Dusk", dawn: "Dawn" };
    const relativeStats = { "-1": "Attack < Defense", "0": "Attack = Defense", "1": "Attack > Defense" };
    const labels = rows.map(d => {
      const parts = [];
      const time = times[d.time_of_day] || refName({ name: d.time_of_day });
      if (d.min_level != null) parts.push(`Lv. ${d.min_level}`);
      if (d.item?.name) parts.push(`Use ${refName(d.item)}`);
      if (d.trigger?.name === "trade") {
        if (d.held_item?.name) parts.push(`Trade holding ${refName(d.held_item)}`);
        else if (d.trade_species?.name) parts.push(`Trade with ${refName(d.trade_species)}`);
        else parts.push("Trade");
      }
      if (d.held_item?.name && d.trigger?.name !== "trade") parts.push(`Hold ${refName(d.held_item)}`);
      if (d.min_happiness != null) parts.push(time ? `Friendship (${time})` : "Friendship");
      if (d.min_affection != null) parts.push("Affection");
      if (d.min_beauty != null) parts.push(`Beauty ${d.min_beauty}`);
      if (d.gender === 1) parts.push("Female");
      if (d.gender === 2) parts.push("Male");
      if (d.known_move?.name) parts.push(`Know ${refName(d.known_move)}`);
      if (d.known_move_type?.name) parts.push(`${refName(d.known_move_type)} move`);
      if (d.location?.name) parts.push(`At ${refName(d.location)}`);
      if (d.party_species?.name) parts.push(`Party with ${refName(d.party_species)}`);
      if (d.party_type?.name) parts.push(`Party type ${refName(d.party_type)}`);
      if (relativeStats[String(d.relative_physical_stats)]) parts.push(relativeStats[String(d.relative_physical_stats)]);
      if (time && d.min_happiness == null) parts.push(time);
      if (d.needs_overworld_rain) parts.push("Rain");
      if (d.turn_upside_down) parts.push("Upside down");
      if (d.trigger?.name === "shed") parts.push("Empty slot");
      if (!parts.length && d.trigger?.name && d.trigger.name !== "level-up") parts.push(refName(d.trigger));
      return parts.join(", ") || "xxx";
    });
    return [...new Set(labels)].filter(Boolean).join(" OR ") || "xxx";
  }

  async function getEvoSteps(evoUrl) {
    if (!evoUrl) return null;
    const cacheKey = `file151.v3.evosteps_${encodeURIComponent(evoUrl)}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) return JSON.parse(cached);
    } catch (_) {}
    try {
      const data = await window.pokeApi.getEvoTree(evoUrl);
      if (!data) return null;
      const steps = [];
      function traverse(node) {
        const parentId = node.species?.id || 0;
        for (const child of (node.evolves_to || [])) {
          const childId = child.species?.id || 0;
          if (childId) {
            steps.push({
              fromId: parentId,
              toId: childId,
              condition: formatEvoCondition(child.evolution_details)
            });
          }
          traverse(child);
        }
      }
      traverse(data);
      const result = { rootId: data.species?.id || 0, steps };
      try {
        localStorage.setItem(cacheKey, JSON.stringify(result));
      } catch (_) {}
      return result;
    } catch (_) {
      return null;
    }
  }

  function formatFormName(rawName) {
    return rawName
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function renderFormsHtml(forms, mon) {
    return `
      <div class="forms-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:0.75rem;">
        ${forms.map(f => {
          const total = (f.stats || []).reduce((sum, s) => sum + s.value, 0);
          const isCurrent = f.id === mon.id || (f.isDefault && mon.id <= 1025);
          return `
            <div class="form-card" style="border:1px solid ${isCurrent ? 'var(--blue)' : 'var(--line)'}; border-radius:4px; padding:0.75rem; background:var(--paper); display:flex; flex-direction:column; gap:0.5rem; ${isCurrent ? 'box-shadow:0 0 0 1px var(--blue);' : ''}">
              <div style="display:flex; align-items:center; gap:0.6rem;">
                <img src="${defaultArt(f.id)}" alt="${esc(f.name)}" width="52" height="52" loading="lazy" style="object-fit:contain; flex-shrink:0;">
                <div style="min-width:0;">
                  <h4 style="margin:0 0 0.25rem; font-size:0.9rem; font-family:var(--font-ui); color:var(--ink); word-break:break-word;">${esc(formatFormName(f.name))}</h4>
                  <div style="display:flex; gap:0.25rem; flex-wrap:wrap;">
                    ${f.types.map(t => `<span class="chip" style="${typeStyle(t)} font-size:0.6875rem; padding:0.1rem 0.35rem;">${t}</span>`).join("")}
                  </div>
                </div>
              </div>
              <div style="font-family:var(--font-num); font-size:0.75rem; color:var(--ink-soft); display:grid; grid-template-columns:repeat(3, 1fr); gap:0.2rem 0.4rem; padding-top:0.35rem; border-top:1px dashed var(--line);">
                ${(f.stats || []).map(s => `
                  <div><span style="color:var(--ink); font-weight:700;">${s.value}</span> <span style="font-size:0.6875rem;">${s.name.replace("special-", "sp.").replace("attack", "atk").replace("defense", "def")}</span></div>
                `).join("")}
                <div style="grid-column:1 / -1; margin-top:0.2rem; font-weight:700; color:var(--navy);">Total: ${total}</div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  async function getForms(varieties, defaultMon) {
    if (!Array.isArray(varieties) || varieties.length <= 1) return [];
    const speciesId = defaultMon?.id || varieties.find(v => v.id)?.id;
    if (!speciesId) return [];
    const cacheKey = `file151.v3.forms_${speciesId}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) return JSON.parse(cached);
    } catch (_) {}
    try {
      const loaded = await Promise.all(
        varieties.map(async (v) => {
          try {
            const formMon = v.id === defaultMon?.id
              ? defaultMon
              : await window.pokeApi.getPokemon(v.id || v.name);
            if (!formMon) return null;
            return {
              name: v.name || formMon.name,
              isDefault: Boolean(v.isDefault),
              id: formMon.id,
              types: formMon.types || [],
              stats: formMon.stats || []
            };
          } catch (_) {
            return null;
          }
        })
      );
      const valid = loaded.filter(Boolean);
      try {
        localStorage.setItem(cacheKey, JSON.stringify(valid));
      } catch (_) {}
      return valid;
    } catch (_) {
      return [];
    }
  }

  async function render(mon) {
    const region = getRegion(mon.id);
    const spec = await window.pokeApi.getSpecies(mon.id).catch(() => null);
    const [abilityTexts, evoSteps] = await Promise.all([
      Promise.all((mon.abilities || []).map(a => window.pokeApi.getAbilityText(a.name))),
      spec?.evoUrl ? getEvoSteps(spec.evoUrl).catch(() => null) : Promise.resolve(null)
    ]);
    const evoIds = evoSteps
      ? [...new Set([evoSteps.rootId, ...evoSteps.steps.reduce((ids, step) => ids.concat(step.fromId, step.toId), [])].filter(Boolean))]
      : [];

    const statFields = [
      { key: "hp", label: "HP" },
      { key: "attack", label: "Attack" },
      { key: "defense", label: "Defense" },
      { key: "special-attack", label: "Sp. Atk" },
      { key: "special-defense", label: "Sp. Def" },
      { key: "speed", label: "Speed" }
    ];

    const has3D = mon.id >= 1 && mon.id <= 1025;
    const animeArtwork = mon.id <= 151 ? animeArtById[mon.id] : null;
    const hasLegacyAnimatedSprite = mon.id >= 1 && mon.id <= 649;

    root.innerHTML = `
      <div class="detail">
        <div class="detail-stage-box" style="display:flex; flex-direction:column; align-items:center; width:100%;">
          <div class="stage-ball is-open">
            <div class="stage-viewer-wrap" id="stage-viewer-wrap" style="width:100%; height:100%; z-index:1;">
            ${has3D ? `
              <model-viewer
                id="poke-3d"
                src="${model3dUrl(mon.id)}"
                alt="${esc(mon.name)} ${mon.id > 151 ? "Static 3D Preview" : "3D Model Preview"}"
                camera-controls
                touch-action="pan-y"
                interaction-prompt="none"
                shadow-intensity="1.0"
                shadow-softness="0.8"
                environment-image="neutral"
                tone-mapping="neutral"
                exposure="1.15"
                camera-orbit="0deg 75deg 105%"
                min-camera-orbit="auto auto 40%"
                max-camera-orbit="auto auto 250%"
                loading="eager"
              >
                <div slot="poster" style="display:flex; align-items:center; justify-content:center; width:100%; height:100%;">
                  <img src="${defaultArt(mon.id)}" alt="${esc(mon.name)}" style="position:static; left:auto; top:auto; z-index:auto; width:85%; height:85%; object-fit:contain; filter:drop-shadow(0 12px 24px rgba(0,0,0,0.45));" />
                </div>
              </model-viewer>
            ` : ""}
              <img id="art" src="${isShiny ? shinyArt(mon.id) : defaultArt(mon.id)}" alt="${esc(mon.name)}" style="${has3D ? 'display:none;' : 'display:block;'} position:static; left:auto; top:auto; z-index:auto; width:76%; height:76%; object-fit:contain; filter:drop-shadow(0 12px 24px rgba(0,0,0,0.45));" />
              <div id="heart-burst" class="stage-burst-container" aria-hidden="true"></div>
            </div>
            <span class="lid-t" aria-hidden="true"></span>
            <span class="lid-b" aria-hidden="true"></span>
            <span class="lid-band" aria-hidden="true"></span>
            <button class="lid-btn" id="well" type="button" aria-label="Close Poké Ball" aria-expanded="true" aria-controls="stage-viewer-wrap" disabled aria-hidden="true"></button>
          </div>

          <div class="stage-controls" id="stage-controls">
            <button class="btn btn-sm btn-paper btn-mode ${has3D ? "is-active" : ""}" id="btn-mode-3d" type="button" title="Switch to 3D Mode" aria-pressed="${has3D}" ${has3D ? "" : "disabled"}>3D</button>
            <button class="btn btn-sm btn-paper btn-mode ${has3D ? "" : "is-active"}" id="btn-mode-2d" type="button" title="Switch to 2D Art" aria-pressed="${!has3D}">2D</button>
            ${mon.id <= 151 ? `
              <button class="btn btn-sm btn-paper btn-mode" id="btn-mode-anime" type="button" title="${animeArtwork ? "Show verified official animation artwork" : "No verified official animation artwork is mapped for this Pokémon"}" aria-label="Anime 2D mode${animeArtwork ? "" : " unavailable: no verified official animation artwork"}" aria-pressed="false" ${animeArtwork ? "" : "disabled"}>${animeArtwork ? "Anime 2D" : "Anime unavailable"}</button>
            ` : ""}
            ${hasLegacyAnimatedSprite ? `
              <button class="btn btn-sm btn-paper btn-mode" id="btn-mode-pixel" type="button" title="Show Pokémon Black and White animated pixel sprite" aria-label="Pixel GIF mode" aria-pressed="false">Pixel GIF</button>
            ` : ""}
            <button class="btn btn-sm btn-paper" id="close-ball" type="button" disabled aria-hidden="true">Close Poké Ball</button>
            ${has3D ? `
              <span id="stage-camera-controls" style="display:inline-flex; gap:0.35rem; flex-wrap:wrap; align-items:center; border-left:1px solid var(--line); padding-left:0.5rem;">
                <button class="btn btn-sm btn-paper" id="btn-rotate" type="button" title="${reduce ? "Automatic rotation is disabled by your reduced-motion preference" : "Toggle automatic rotation"}" aria-pressed="false" ${reduce ? "disabled" : ""}>Rotate</button>
                <button class="btn btn-sm btn-paper" id="btn-zoom-in" type="button" title="Zoom in" aria-label="Zoom in" disabled>Zoom +</button>
                <button class="btn btn-sm btn-paper" id="btn-zoom-out" type="button" title="Zoom out" aria-label="Zoom out" disabled>Zoom −</button>
              </span>
              <span id="stage-base-actions" style="display:inline-flex; gap:0.35rem; flex-wrap:wrap; align-items:center; border-left:1px solid var(--line); padding-left:0.5rem;">
                <button class="btn btn-sm btn-paper" id="btn-cry-stage" type="button" title="Play cry">Cry</button>
                <button class="btn btn-sm btn-paper" id="btn-react-stage" type="button" title="Show a reaction">React</button>
                <span id="stage-feedback" role="status" aria-live="polite" style="font-family:var(--font-num); font-size:0.75rem; color:var(--mark);"></span>
              </span>
            ` : ""}
            <span id="stage-actions" aria-label="Optional model animations" style="display:none; gap:0.35rem; flex-basis:100%; flex-wrap:wrap; align-items:center; justify-content:center; border-top:1px solid var(--line); padding-top:0.5rem;"></span>
          </div>

          <p id="art-caption" style="color:var(--ink-soft); font-size:0.75rem; font-family:var(--font-num); margin-top:0.4rem; text-align:center;">
            ${has3D ? (mon.id <= 151 ? "Loading 3D model…" : "Loading static 3D preview…") : "Default Form (2D Art)"}
          </p>
        </div>

        <div class="fields">
          ${mon.isOffline ? `
            <div style="margin-bottom:0.75rem; padding:0.5rem 0.75rem; background:rgba(238,21,21,0.08); border:1px solid rgba(238,21,21,0.25); border-radius:4px; font-size:0.75rem; color:var(--ink); display:flex; justify-content:space-between; align-items:center;">
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
                <span style="display:block; margin-top:0.35rem; font-family:var(--font-num); font-weight:700; font-size:0.875rem; color:var(--ink-soft);">
                  ${Number(mon.height).toFixed(1)} m · ${Number(mon.weight).toFixed(1)} kg
                </span>
                <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-top:0.45rem;">
                  ${mon.types.map(t =>
                    `<a class="chip" style="${typeStyle(t)}" href="pokedex.html?type=${t}" title="Filter Dex by ${t}">${t}</a>`
                  ).join("")}
                </div>
              </div>
            </div>
            ${spec?.flavor ? `<p class="flavor" style="margin:0; padding:0.4rem 0 0; border:0;">${esc(spec.flavor)}</p>` : ""}
            <div class="detail-actions" style="margin-top:0.75rem;">
              <span id="belt-ctl">${beltControl(mon)}</span>
              <button class="btn btn-paper" id="favorite" type="button" aria-pressed="${store.isFavorite(mon.id)}">${store.isFavorite(mon.id) ? "★ Favorited" : "☆ Favorite"}</button>
            </div>
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

              ${evoSteps && evoSteps.steps.length > 0 ? `
                <div>
                  <p class="field-title">Evolution Line &amp; Conditions</p>
                  ${(() => {
                    const isLinear = evoSteps.steps.every((s, i) => i === 0 || s.fromId === evoSteps.steps[i - 1].toId);
                    if (isLinear) {
                      return `
                        <div class="evo-row" style="align-items:center; flex-wrap:wrap; gap:0.4rem;">
                          <a class="evo-link ${evoSteps.rootId === mon.id ? 'current' : ''}" href="pokemon.html?id=${evoSteps.rootId}" title="#${evoSteps.rootId}">
                            <img src="${defaultArt(evoSteps.rootId)}" alt="#${evoSteps.rootId}" width="44" height="44" loading="lazy">
                            <span>#${String(evoSteps.rootId).padStart(3, "0")}</span>
                          </a>
                          ${evoSteps.steps.map(s => `
                            <div style="display:inline-flex; flex-direction:column; align-items:center; padding:0 0.15rem; min-width:3.2rem;">
                              <span style="font-family:var(--font-num); font-size:0.625rem; color:var(--mark); white-space:normal; max-width:18rem; text-align:center; overflow-wrap:anywhere; font-weight:700; background:rgba(238,21,21,0.08); padding:0.1rem 0.35rem; border-radius:3px; border:1px solid rgba(238,21,21,0.2);">${esc(s.condition)}</span>
                              <span style="color:var(--ink-soft); font-size:0.875rem; line-height:1; margin-top:0.15rem;">&rarr;</span>
                            </div>
                            <a class="evo-link ${s.toId === mon.id ? 'current' : ''}" href="pokemon.html?id=${s.toId}" title="#${s.toId}">
                              <img src="${defaultArt(s.toId)}" alt="#${s.toId}" width="44" height="44" loading="lazy">
                              <span>#${String(s.toId).padStart(3, "0")}</span>
                            </a>
                          `).join("")}
                        </div>
                      `;
                    }
                    return `
                      <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.35rem;">
                        ${evoSteps.steps.map(s => `
                          <div style="display:grid; grid-template-columns:max-content minmax(0,1fr) max-content; align-items:center; gap:0.45rem; width:100%;">
                            <a class="evo-link ${s.fromId === mon.id ? 'current' : ''}" style="justify-self:center;" href="pokemon.html?id=${s.fromId}" title="#${s.fromId}">
                              <img src="${defaultArt(s.fromId)}" alt="#${s.fromId}" width="38" height="38" loading="lazy">
                              <span>#${String(s.fromId).padStart(3, "0")}</span>
                            </a>
                            <div style="display:inline-flex; flex-direction:column; align-items:center; justify-self:stretch; width:100%; padding:0 0.15rem; min-width:0;">
                              <span style="font-family:var(--font-num); font-size:0.625rem; color:var(--mark); white-space:normal; max-width:18rem; text-align:center; overflow-wrap:anywhere; font-weight:700; background:rgba(238,21,21,0.08); padding:0.1rem 0.35rem; border-radius:3px; border:1px solid rgba(238,21,21,0.2);">${esc(s.condition)}</span>
                              <span style="color:var(--ink-soft); font-size:0.875rem; line-height:1; margin-top:0.15rem;">&rarr;</span>
                            </div>
                            <a class="evo-link ${s.toId === mon.id ? 'current' : ''}" style="justify-self:center;" href="pokemon.html?id=${s.toId}" title="#${s.toId}">
                              <img src="${defaultArt(s.toId)}" alt="#${s.toId}" width="38" height="38" loading="lazy">
                              <span>#${String(s.toId).padStart(3, "0")}</span>
                            </a>
                          </div>
                        `).join("")}
                      </div>
                    `;
                  })()}
                </div>
              ` : (evoIds.length > 1 ? `
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
              ` : "")}
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

          ${spec?.varieties?.length > 1 ? `
            <details class="forms-comparison" id="forms-comparison" style="margin:1.25rem 0 0.5rem; padding-top:1rem; border-top:1px solid var(--line);">
              <summary class="field-title" style="margin-bottom:0.75rem; cursor:pointer;">Available Forms &amp; Variations (${spec.varieties.length})</summary>
              <div id="forms-content"><p class="soft">Open to load form comparison.</p></div>
            </details>
          ` : ""}

          <div class="fields-bottom">
            <p style="color:var(--ink-soft); font-family:var(--font-num); font-size:0.8125rem; margin:0 0 0.4rem 0; padding:0; border:0;">
              ${region.name} #${region.start}–${region.end}
            </p>

            <div class="detail-actions">
              <button class="btn btn-paper" id="cry" type="button">Play cry</button>
              <button class="btn btn-paper" id="shiny" type="button">${isShiny ? "Show default" : "Show shiny"}</button>
              <a class="btn btn-paper" href="battle-lab.html?left=${mon.id}">Battle Lab</a>
              <a class="btn btn-paper" href="lineup.html?a=${mon.id}">Compare in lineup</a>
              <button class="btn btn-paper" id="copy" type="button">Copy link</button>
              <a class="btn btn-paper" href="pokedex.html?region=${region.slug}">Close file</a>
            </div>
            <p id="copy-feedback" role="status" aria-live="polite" hidden style="margin:0.5rem 0; color:var(--ink-soft);"></p>
            <label id="copy-fallback-wrap" hidden style="display:block; margin-top:0.5rem;">
              Copy this link manually
              <input id="copy-fallback" type="text" readonly value="${esc(location.href)}" aria-label="Link to copy manually" style="display:block; width:100%; margin-top:0.25rem;">
            </label>
          </div>
        </div>
      </div>
    `;

    const formsDisclosure = document.getElementById("forms-comparison");
    formsDisclosure?.addEventListener("toggle", async () => {
      if (!formsDisclosure.open || formsDisclosure.dataset.loaded === "true" || formsDisclosure.dataset.loading === "true") return;
      const content = document.getElementById("forms-content");
      if (!content) return;
      formsDisclosure.dataset.loading = "true";
      content.textContent = "Loading form comparison…";
      const forms = await getForms(spec?.varieties, mon).catch(() => []);
      content.innerHTML = forms.length > 1
        ? renderFormsHtml(forms, mon)
        : `<p class="soft" role="status">Form comparison is unavailable right now.</p>`;
      formsDisclosure.dataset.loaded = "true";
      formsDisclosure.dataset.loading = "false";
    });

    if (has3D) {
      const poke3d = document.getElementById("poke-3d");
      const artImg = document.getElementById("art");
      const btn3d = document.getElementById("btn-mode-3d");
      const btn2d = document.getElementById("btn-mode-2d");
      const animeBtn = document.getElementById("btn-mode-anime");
      const legacyBtn = document.getElementById("btn-mode-pixel");
      const caption = document.getElementById("art-caption");
      const burst = document.getElementById("heart-burst");
      const cameraControls = document.getElementById("stage-camera-controls");
      const baseActions = document.getElementById("stage-base-actions");
      const actionsBox = document.getElementById("stage-actions");
      const rotateBtn = document.getElementById("btn-rotate");
      const zoomInBtn = document.getElementById("btn-zoom-in");
      const zoomOutBtn = document.getElementById("btn-zoom-out");
      const feedback = document.getElementById("stage-feedback");

      let animTimer = null;
      let sourceReady = false;
      let fallbackAttempted = false;
      let usingFallback = false;
      let modelFailed = false;
      let activeMode = "3d";
      let animeFailed = false;
      let legacySpriteFailed = false;
      let resolvedClips = new Map();

      const isStaticSource = () => mon.id > 151 || usingFallback;

      function syncStageMode(mode = activeMode) {
        if (mode === "3d" && modelFailed) mode = "2d";
        if (mode === "anime" && (!animeArtwork || animeFailed || isShiny)) mode = "2d";
        if (mode === "legacy" && (!hasLegacyAnimatedSprite || legacySpriteFailed || isShiny)) mode = "2d";
        activeMode = mode;
        const show3d = mode === "3d" && !isShiny;
        const showAnime = mode === "anime" && !isShiny;
        const showLegacy = mode === "legacy" && !isShiny;
        if (poke3d) poke3d.style.display = show3d ? "block" : "none";
        if (artImg) artImg.style.display = show3d ? "none" : "block";
        if (btn3d) {
          btn3d.classList.toggle("is-active", show3d);
          btn3d.setAttribute("aria-pressed", String(show3d));
        }
        if (btn2d) {
          btn2d.classList.toggle("is-active", mode === "2d");
          btn2d.setAttribute("aria-pressed", String(mode === "2d"));
        }
        if (animeBtn) {
          animeBtn.classList.toggle("is-active", showAnime);
          animeBtn.setAttribute("aria-pressed", String(showAnime));
          animeBtn.disabled = isShiny || animeFailed || !animeArtwork;
          animeBtn.textContent = animeFailed || !animeArtwork ? "Anime unavailable" : "Anime 2D";
          if (isShiny && animeArtwork && !animeFailed) {
            animeBtn.title = "Turn off Shiny to view official animation artwork";
            animeBtn.setAttribute("aria-label", "Anime 2D mode unavailable while Shiny is on");
          } else if (animeFailed) {
            animeBtn.title = "Official animation artwork could not be loaded for this Pokémon";
            animeBtn.setAttribute("aria-label", "Anime 2D mode unavailable: official animation artwork could not be loaded");
          } else if (animeArtwork) {
            animeBtn.title = "Show verified official animation artwork";
            animeBtn.setAttribute("aria-label", "Anime 2D mode");
          }
        }
        if (legacyBtn) {
          legacyBtn.classList.toggle("is-active", showLegacy);
          legacyBtn.setAttribute("aria-pressed", String(showLegacy));
          legacyBtn.disabled = isShiny || legacySpriteFailed;
          legacyBtn.textContent = legacySpriteFailed ? "Pixel unavailable" : "Pixel GIF";
          if (isShiny && !legacySpriteFailed) {
            legacyBtn.title = "Turn off Shiny to view the animated pixel sprite";
            legacyBtn.setAttribute("aria-label", "Pixel GIF mode unavailable while Shiny is on");
          } else if (legacySpriteFailed) {
            legacyBtn.title = "The animated pixel sprite could not be loaded for this Pokémon";
            legacyBtn.setAttribute("aria-label", "Pixel GIF mode unavailable: sprite could not be loaded");
          } else {
            legacyBtn.title = "Show Pokémon Black and White animated pixel sprite";
            legacyBtn.setAttribute("aria-label", "Pixel GIF mode");
          }
        }
        if (cameraControls) cameraControls.style.display = show3d ? "inline-flex" : "none";
        if (baseActions) baseActions.style.display = "inline-flex";
        if (actionsBox) actionsBox.style.display = show3d && !isStaticSource() && resolvedClips.size ? "inline-flex" : "none";
        if (zoomInBtn) zoomInBtn.disabled = !sourceReady || modelFailed;
        if (zoomOutBtn) zoomOutBtn.disabled = !sourceReady || modelFailed;
        if (rotateBtn) rotateBtn.disabled = reduce || !sourceReady || modelFailed;
        if (!show3d) {
          clearTimeout(animTimer);
          poke3d?.removeAttribute("auto-rotate");
          rotateBtn?.setAttribute("aria-pressed", "false");
          poke3d?.pause?.();
          if (burst) burst.replaceChildren();
          if (feedback) feedback.textContent = "";
        }
        if (caption) {
          if (show3d) {
            caption.textContent = !sourceReady
              ? (usingFallback ? "Loading static 3D fallback preview…" : mon.id > 151 ? "Loading static 3D preview…" : "Loading 3D model…")
              : usingFallback ? "Static 3D Preview (fallback) · Drag to rotate · Scroll/pinch to zoom" : mon.id > 151 ? "Static 3D Preview · Drag to rotate · Scroll/pinch to zoom" : "3D Model · Drag to rotate · Scroll/pinch to zoom";
          } else if (showAnime) {
            caption.textContent = `Official animation artwork · ${animeSeriesNames[animeArtwork.series] || "Pokémon animation"} · `;
            const source = document.createElement("a");
            source.href = animeFilePageUrl(animeArtwork);
            source.target = "_blank";
            source.rel = "noopener noreferrer";
            source.textContent = "Bulbagarden Archives source";
            caption.append(source);
          } else if (showLegacy) {
            caption.textContent = "Pokémon Black and White animated pixel sprite (Gen V)";
          } else {
            caption.textContent = isShiny
              ? "Shiny Form (standard 2D art) · Turn Shiny off to use Anime 2D"
              : animeFailed && mode === "2d"
                ? "Official anime art could not be loaded. Showing standard 2D art."
                : modelFailed ? "Default Form (2D Fallback)" : "Default Form (2D Art)";
          }
        }
      }

      stageModeController = syncStageMode;

      function getMatchingClip(pattern) {
        const available = poke3d?.availableAnimations || [];
        return available.find(a => pattern.test(a)) || null;
      }

      function getIdleClip() {
        return resolvedClips.get("idle") || null;
      }

      function playAction(actionName, duration = 2000) {
        if (!poke3d) return;
        clearTimeout(animTimer);
        const available = poke3d.availableAnimations || [];
        const clipKey = actionName === "pet" || actionName === "react" ? "happy" : actionName;
        const clip = resolvedClips.get(clipKey);
        if (!clip || !available.includes(clip) || isStaticSource() || activeMode !== "3d" || isShiny || modelFailed) return;
        const oneShot = ["attack", "happy", "pet", "react"].includes(actionName);
        if (clip) {
          try {
            poke3d.animationName = clip;
            poke3d.currentTime = 0;
            if (oneShot || reduce) poke3d.play({ repetitions: 1 });
            else poke3d.play();
          } catch (_) {}
        }
        if (oneShot && !reduce) {
          const idle = getIdleClip();
          if (!idle) return;
          animTimer = setTimeout(() => {
            if (activeMode !== "3d" || isShiny || modelFailed) return;
            try {
              poke3d.animationName = idle;
              poke3d.play();
            } catch (_) {}
          }, duration);
        }
      }

      function triggerHearts(e) {
        if (feedback) feedback.textContent = "Reacted ♥";
        if (reduce) return;
        if (!burst) return;
        const rect = burst.getBoundingClientRect();
        const x = e && e.clientX ? e.clientX - rect.left : rect.width / 2;
        const y = e && e.clientY ? e.clientY - rect.top : rect.height / 2;
        for (let i = 0; i < 4; i++) {
          const h = document.createElement("span");
          h.className = "heart-particle";
          h.style.left = `${x + (Math.random() * 60 - 30)}px`;
          h.style.top = `${y + (Math.random() * 40 - 20)}px`;
          burst.appendChild(h);
          setTimeout(() => h.remove(), 1200);
        }
      }

      function updateActionButtons() {
        const actionsBox = document.getElementById("stage-actions");
        if (!actionsBox || !poke3d) return;
        const available = poke3d.availableAnimations || [];
        if (available.length === 0) {
          actionsBox.replaceChildren();
          resolvedClips.clear();
          syncStageMode();
          return;
        }
        if (isStaticSource()) {
          resolvedClips.clear();
          actionsBox.replaceChildren();
          syncStageMode();
          return;
        }

        // Standard action set. Match each available clip once and retain its exact full name.
        const standardActions = [
          { key: "attack", label: "Attack", pattern: /attack|fight|strike|roar/i },
          { key: "happy", label: "Pet", pattern: /happy|glad|refresh|notice/i },
          { key: "walk", label: "Walk", pattern: /walk/i },
          { key: "run", label: "Run", pattern: /run/i },
          { key: "sleep", label: "Sleep", pattern: /sleep/i },
          { key: "idle", label: "Idle", pattern: /idle|wait|stand|loop/i }
        ];

        const matched = standardActions.filter(act => available.some(a => act.pattern.test(a)));
        resolvedClips = new Map(matched.map(act => [act.key, getMatchingClip(act.pattern)]));
        const idle = getIdleClip();
        if (!reduce && idle && activeMode === "3d" && !isShiny) {
          try {
            poke3d.animationName = idle;
            poke3d.play();
          } catch (_) {}
        }
        if (matched.length > 0) {
          actionsBox.innerHTML = `<span style="font-family:var(--font-num); font-size:0.75rem; color:var(--ink-soft);">Animations</span>${matched.map(act =>
            `<button class="btn btn-sm btn-paper btn-action" data-action="${act.key}" type="button">${act.label}</button>`
          ).join("")}`;
        } else {
          actionsBox.innerHTML = "";
        }

        actionsBox.querySelectorAll(".btn-action").forEach(btn => {
          btn.addEventListener("click", (e) => {
            const act = btn.dataset.action;
            if (act === "happy") triggerHearts(e);
            playAction(act, 2000);
          });
        });
        if (btn2d?.classList.contains("is-active")) {
          actionsBox.style.display = "none";
        }
        syncStageMode();
      }

      function handleModelLoad() {
        sourceReady = true;
        modelFailed = false;
        if (isStaticSource()) {
          resolvedClips.clear();
          if (actionsBox) actionsBox.replaceChildren();
          poke3d?.pause?.();
        }
        syncStageMode();
      }

      poke3d?.addEventListener("load", updateActionButtons);
      poke3d?.addEventListener("load", handleModelLoad);
      if (poke3d?.loaded) {
        updateActionButtons();
        handleModelLoad();
      }

      document.getElementById("btn-cry-stage")?.addEventListener("click", () => window.pokeApi.playCry(mon.id));
      document.getElementById("btn-react-stage")?.addEventListener("click", () => {
        triggerHearts();
        playAction("react", 1800);
      });
      rotateBtn?.addEventListener("click", () => {
        const rotating = rotateBtn.getAttribute("aria-pressed") !== "true";
        rotateBtn.setAttribute("aria-pressed", String(rotating));
        if (rotating) poke3d?.setAttribute("auto-rotate", "");
        else poke3d?.removeAttribute("auto-rotate");
      });

      function adjustZoom(direction) {
        if (!sourceReady || modelFailed || !poke3d?.getCameraOrbit) return;
        const { theta, phi, radius } = poke3d.getCameraOrbit();
        if (![theta, phi, radius].every(Number.isFinite) || radius <= 0) return;
        const nextRadius = radius * (direction < 0 ? 1.2 : 1 / 1.2);
        poke3d.cameraOrbit = `${theta}rad ${phi}rad ${nextRadius}m`;
        poke3d.jumpCameraToGoal?.();
      }
      zoomInBtn?.addEventListener("click", () => adjustZoom(1));
      zoomOutBtn?.addEventListener("click", () => adjustZoom(-1));

      // 切换 3D / 2D
      btn3d?.addEventListener("click", () => {
        if (isShiny) setShiny(mon, false);
        isAnimeArt = false;
        isLegacySprite = false;
        if (artImg) {
          artImg.src = defaultArt(mon.id);
          artImg.alt = `${mon.name} official artwork`;
        }
        if (poke3d) poke3d.style.display = "block";
        if (artImg) artImg.style.display = "none";
        btn3d.classList.add("is-active");
        btn2d?.classList.remove("is-active");
        const actionsBox = document.getElementById("stage-actions");
        if (actionsBox) actionsBox.style.display = "inline-flex";
        syncStageMode("3d");
      });

      btn2d?.addEventListener("click", () => {
        isAnimeArt = false;
        isLegacySprite = false;
        if (artImg) {
          artImg.src = isShiny ? shinyArt(mon.id) : defaultArt(mon.id);
          artImg.alt = `${mon.name} official artwork`;
        }
        syncStageMode("2d");
      });

      animeBtn?.addEventListener("click", () => {
        if (!animeArtwork || animeFailed || isShiny || !artImg) return;
        isAnimeArt = true;
        isLegacySprite = false;
        artImg.alt = `${mon.name} official animation artwork`;
        artImg.src = animeArtUrl(animeArtwork);
        syncStageMode("anime");
      });

      legacyBtn?.addEventListener("click", () => {
        if (!hasLegacyAnimatedSprite || legacySpriteFailed || isShiny || !artImg) return;
        isAnimeArt = false;
        isLegacySprite = true;
        artImg.alt = `${mon.name} animated pixel sprite from Pokémon Black and White`;
        artImg.src = legacyAnimatedSpriteUrl(mon.id);
        syncStageMode("legacy");
      });

      artImg?.addEventListener("error", () => {
        if (isAnimeArt && artImg.src === animeArtUrl(animeArtwork)) {
          isAnimeArt = false;
          animeFailed = true;
          animeBtn.disabled = true;
          animeBtn.title = "Official animation artwork could not be loaded for this Pokémon";
          animeBtn.setAttribute("aria-label", "Anime 2D mode unavailable: official animation artwork could not be loaded");
          animeBtn.setAttribute("aria-pressed", "false");
          artImg.alt = `${mon.name} official artwork`;
          artImg.src = defaultArt(mon.id);
          syncStageMode("2d");
          return;
        }
        if (isLegacySprite && artImg.src === legacyAnimatedSpriteUrl(mon.id)) {
          isLegacySprite = false;
          legacySpriteFailed = true;
          artImg.alt = `${mon.name} official artwork`;
          artImg.src = defaultArt(mon.id);
          syncStageMode("2d");
        }
      });

      // Fall back once to a static preview for Kanto, then keep the 2D art available.
      poke3d?.addEventListener("error", () => {
        sourceReady = false;
        clearTimeout(animTimer);
        poke3d.pause?.();
        poke3d.removeAttribute("auto-rotate");
        rotateBtn?.setAttribute("aria-pressed", "false");
        if (burst) burst.replaceChildren();
        if (feedback) feedback.textContent = "";
        resolvedClips.clear();
        if (actionsBox) {
          actionsBox.replaceChildren();
          actionsBox.style.display = "none";
        }
        if (mon.id <= 151 && !fallbackAttempted) {
          fallbackAttempted = true;
          usingFallback = true;
          poke3d.alt = `${mon.name} Static 3D Preview (fallback)`;
          poke3d.removeAttribute("autoplay");
          poke3d.removeAttribute("animation-name");
          poke3d.src = staticModel3dUrl(mon.id);
          syncStageMode();
          return;
        }
        modelFailed = true;
        if (poke3d) poke3d.style.display = "none";
        if (artImg) artImg.style.display = "block";
        if (btn3d) btn3d.disabled = true;
        btn2d?.classList.add("is-active");
        if (actionsBox) actionsBox.style.display = "none";
        syncStageMode("2d");
      });

      syncStageMode();
    }

    const well = document.getElementById("well");
    const closeBall = document.getElementById("close-ball");
    function setBallOpen(isOpen, isUserAction = false) {
      if (!well || well.disabled) return;
      const ball = well.closest(".stage-ball");
      const viewer = document.getElementById("stage-viewer-wrap");
      ball?.classList.toggle("is-open", isOpen);
      well.setAttribute("aria-expanded", String(isOpen));
      well.setAttribute("aria-label", isOpen ? "Close Poké Ball" : "Open Poké Ball");
      viewer?.toggleAttribute("inert", !isOpen);
      viewer?.setAttribute("aria-hidden", String(!isOpen));
      if (closeBall) closeBall.hidden = !isOpen;
      if (isOpen) {
        if (isUserAction) window.pokeApi.playCry(mon.id);
        else window.pokeApi.playCryAuto(mon.id);
      } else {
        well.focus();
      }
    }

    well?.addEventListener("click", (e) => {
      e.stopPropagation();
      setBallOpen(well.getAttribute("aria-expanded") !== "true", true);
    });
    const ballContainer = well?.closest(".stage-ball");
    ballContainer?.addEventListener("click", () => {
      if (!ballContainer.classList.contains("is-open")) {
        setBallOpen(true, true);
      }
    });
    closeBall?.addEventListener("click", () => setBallOpen(false, true));

    // Keep the plain viewer open; the disabled, hidden well makes this a no-op.
    setBallOpen(true, false);

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
        const feedback = document.getElementById("copy-feedback");
        const fallback = document.getElementById("copy-fallback-wrap");
        if (feedback) {
          feedback.hidden = false;
          feedback.textContent = "Page link copied.";
        }
        if (fallback) fallback.hidden = true;
        const copyBtn = document.getElementById("copy");
        if (copyBtn) {
          copyBtn.textContent = "Copied!";
          setTimeout(() => { copyBtn.textContent = "Copy link"; }, 1500);
        }
      } catch (_) {
        const feedback = document.getElementById("copy-feedback");
        const fallback = document.getElementById("copy-fallback-wrap");
        const input = document.getElementById("copy-fallback");
        if (feedback) {
          feedback.hidden = false;
          feedback.textContent = "Clipboard access is unavailable. Copy the link below.";
        }
        if (fallback) fallback.hidden = false;
        if (input) {
          input.value = location.href;
          input.focus();
          input.select();
        }
      }
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
    root.innerHTML = `
      <h1 class="sr-only">Pokémon file</h1>
      <div style="text-align:center; padding:4rem 1rem;">
        <p class="empty" role="alert" style="margin-bottom:1rem;">${html}</p>
      </div>`;
  }

  // 页面主入口
  if (!key) {
    showMessage(`No Pokémon file specified. <a class="link-action" href="pokedex.html">Return to Dex</a>.`);
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
      ? `Could not load Pokémon file from PokeAPI. <a class="link-action" href="${esc(location.href)}">Retry loading</a> or <a class="link-action" href="pokedex.html">Return to Dex</a>.`
      : `No Pokémon matches that number or name (valid range is 1 to 1025). <a class="link-action" href="pokedex.html">Return to Dex</a>.`);
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
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    const activeDialog = Array.from(document.querySelectorAll("dialog[open], [role='dialog'][aria-modal='true']"))
      .some(dialog => !dialog.closest("[hidden]"));
    if (activeDialog) return;

    const region = getRegion(mon.id);
    if (e.key === "Escape") {
      e.preventDefault();
      const openBall = document.querySelector(".stage-ball.is-open");
      if (openBall && !document.getElementById("well")?.disabled) {
        const closeButton = document.getElementById("close-ball");
        if (closeButton && !closeButton.hidden && !closeButton.disabled) {
          closeButton.click();
        } else {
          const well = document.getElementById("well");
          if (well) {
            well.disabled = false;
            well.click();
          }
        }
        return;
      }
      location.href = `pokedex.html?region=${region.slug}`;
      return;
    }

    const target = e.target;
    if (target?.isContentEditable || target?.closest?.("input, textarea, select, button, a, [contenteditable='true'], [role='button'], [role='textbox'], [role='combobox']")) return;
    if (e.key === "ArrowRight" && mon.id < region.end) {
      e.preventDefault();
      location.href = `pokemon.html?id=${mon.id + 1}`;
    }
    if (e.key === "ArrowLeft" && mon.id > region.start) {
      e.preventDefault();
      location.href = `pokemon.html?id=${mon.id - 1}`;
    }
    if (e.key.toLowerCase() === "f") {
      e.preventDefault();
      document.getElementById("copy")?.click();
    }
  });
});
