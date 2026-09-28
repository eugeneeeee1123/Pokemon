/**
 * 151 FILE — Pokemon Detail Page Logic
 * 遵循 pokemon-web-project-plan.md §4.3 与 AGENTS.md
 * - 开合球动画与原生叫声
 * - 3D HOME 立绘与 Shiny 闪光形态一键切换
 * - 6 项能力值条与属性、体态、特性
 * - 腰带加入、Lineup 阵容比对入口、复制链接、键盘左右切只
 */

document.addEventListener("DOMContentLoaded", async () => {
  const TYPE_COLORS = {
    normal: '#A8A878', fire: '#F08030', water: '#6890F0', electric: '#F8D030',
    grass: '#78C850', ice: '#98D8D8', fighting: '#C03028', poison: '#A040A0',
    ground: '#E0C068', flying: '#A890F0', psychic: '#F85888', bug: '#A8B820',
    rock: '#B8A038', ghost: '#705898', dragon: '#7038F8', steel: '#B8B8D0', fairy: '#EE99AC'
  };

  const q = new URLSearchParams(location.search);
  const key = q.get("id") || q.get("name");
  const root = document.getElementById("file");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function barColor(v) {
    if (v >= 150) return "#EE1515";
    if (v >= 100) return "#7EB6D9";
    if (v >= 60) return "#3D7DCA";
    return "#1E3A55";
  }

  function getBelt() {
    try {
      const b = JSON.parse(localStorage.getItem("file151.belt") || "[]");
      return Array.isArray(b) ? b.map(Number) : [];
    } catch (_) {
      return [];
    }
  }

  function addBelt(id) {
    const b = getBelt();
    if (b.includes(id) || b.length >= 6) return;
    localStorage.setItem("file151.belt", JSON.stringify(b.concat(id)));
  }

  function markSeen(id) {
    try {
      const s = JSON.parse(localStorage.getItem("file151.seen") || "[]");
      if (!s.includes(id)) {
        localStorage.setItem("file151.seen", JSON.stringify(s.concat(id)));
      }
    } catch (_) {}
  }

  function getRegion(id) {
    if (window.REGIONS) {
      const found = window.REGIONS.find(r => id >= r.start && id <= r.end);
      if (found) return found;
    }
    return { name: "National", start: 1, end: 1025, slug: "all" };
  }

  let currentMon = null;
  let isShiny = false;

  function render(mon, shiny) {
    currentMon = mon;
    isShiny = shiny;

    const b = getBelt();
    const on = b.includes(mon.id);
    const full = b.length >= 6 && !on;
    const region = getRegion(mon.id);
    const defaultArt = window.pokeApi ? window.pokeApi.artUrl(mon.id) : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${mon.id}.png`;
    const shinyArt = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${mon.id}.png`;
    const src = shiny ? shinyArt : defaultArt;

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
          <button class="stage-ball ${reduce ? "is-open" : ""}" id="well" type="button" aria-label="Toggle Pokeball / Play Cry" title="Tap to toggle Pokéball or hear official cry">
            <div class="lid-t"></div>
            <div class="lid-band"></div>
            <div class="lid-b"></div>
            <div class="lid-btn"></div>
            <img id="art" src="${src}" alt="${mon.name} 3D Model" />
          </button>
          <p style="color:var(--ink-soft); font-size:0.75rem; font-family:var(--font-num); margin-top:0.75rem;">
            ${shiny ? "★ Shiny Form (HOME 3D)" : "Default Form (HOME 3D)"}
          </p>
        </div>

        <div class="fields">
          <p><span class="id-badge">#${String(mon.id).padStart(3, "0")}</span></p>
          <p>
            <h1 style="font-family:var(--font-ui); font-size:1.85rem; font-weight:700; margin:0 0 0.4rem; letter-spacing:-0.02em; color:var(--ink);">${mon.name}</h1>
          </p>
          <p>
            ${(mon.types || []).map(t => {
              const bg = TYPE_COLORS[t] || '#3A6A88';
              const color = (t === 'electric' || t === 'ice' || t === 'normal' || t === 'ground') ? '#071422' : '#ffffff';
              return `<a class="chip" style="background:${bg}; color:${color}; margin-right:0.4rem;" href="pokedex.html?type=${t}" title="Filter Dex by ${t}">${t}</a>`;
            }).join("")}
          </p>
          <p style="font-family:var(--font-num); font-weight:700; font-size:0.9rem; color:var(--ink-soft);">
            ${Number(mon.height || 0).toFixed(1)} m · ${Number(mon.weight || 0).toFixed(1)} kg
          </p>
          <p style="font-family:var(--font-ui); font-size:0.9375rem; color:var(--ink);">
            <strong>Abilities:</strong> ${(mon.abilities || []).map(a => `<span style="text-transform:capitalize;">${a.name.replace('-', ' ')}</span>${a.is_hidden ? ' (hidden)' : ''}`).join(" · ") || 'None'}
          </p>

          <div style="padding: 0.75rem 0; border-bottom: 1px solid var(--line);">
            ${statFields.map(s => {
              const statObj = Array.isArray(mon.stats) ? mon.stats.find(st => st.name === s.key) : null;
              const v = statObj ? statObj.value : (mon.stats?.[s.key] || 50);
              const pct = Math.min(100, Math.round((v / 255) * 100));
              return `
                <div class="stat">
                  <span>${s.label}</span>
                  <div class="bar">
                    <i style="width:${pct}%; background:${barColor(v)}"></i>
                  </div>
                  <span>${v}</span>
                </div>
              `;
            }).join("")}
          </div>

          <p style="color:var(--ink-soft); font-family:var(--font-num); font-size:0.8125rem;">
            ${region.name} #${region.start}–${region.end}
          </p>

          <div class="detail-actions">
            ${full
              ? `<span class="empty" style="align-self:center; font-family:var(--font-num); font-weight:700;">Belt full (6/6)</span>`
              : `<button class="btn btn-primary" id="add" ${on ? "disabled" : ""}>${on ? "On the belt" : "Add to belt"}</button>`
            }
            <button class="btn btn-mark" id="shiny" type="button">${shiny ? "Show default" : "Show shiny"}</button>
            <a class="btn btn-paper" href="lineup.html?a=${mon.id}">Compare in lineup</a>
            <button class="btn btn-paper" id="copy" type="button">Copy link</button>
            <a class="btn btn-paper" href="pokedex.html?region=${region.slug}">Close file</a>
          </div>
        </div>
      </div>
    `;

    const well = document.getElementById("well");
    if (!reduce && well) {
      setTimeout(() => { well.classList.add("is-open"); }, 60);
    } else if (well) {
      well.classList.add("is-open");
    }

    well?.addEventListener("click", () => {
      well.classList.toggle("is-open");
      if (window.pokeApi) window.pokeApi.playCry(mon.id);
    });

    document.getElementById("add")?.addEventListener("click", () => {
      addBelt(mon.id);
      render(mon, shiny);
    });

    document.getElementById("shiny")?.addEventListener("click", () => {
      render(mon, !shiny);
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
  }

  // 页面主入口
  if (!key) {
    root.innerHTML = `<p class="empty" style="text-align:center; padding:4rem;">No Pokémon file specified. <a class="link-action" href="pokedex.html">Open the dex</a>.</p>`;
    return;
  }

  root.innerHTML = `<p class="empty" style="text-align:center; padding:4rem;">Opening file #${key}…</p>`;

  try {
    let mon = null;
    if (window.pokeApi) {
      try {
        mon = await window.pokeApi.getPokemon(key);
      } catch (_) {}
    }

    if (!mon && window.getSpeciesById) {
      const num = parseInt(key, 10);
      const spec = num ? window.getSpeciesById(num) : (window.ALL_SPECIES || []).find(s => s.name.toLowerCase() === key.toLowerCase());
      if (spec) {
        mon = {
          id: spec.id,
          name: spec.name,
          types: spec.types || [],
          height: 1.0,
          weight: 20.0,
          abilities: [{ name: "Standard", is_hidden: false }],
          stats: [
            { name: "hp", value: 65 }, { name: "attack", value: 65 }, { name: "defense", value: 65 },
            { name: "special-attack", value: 65 }, { name: "special-defense", value: 65 }, { name: "speed", value: 65 }
          ]
        };
      }
    }

    if (!mon) {
      root.innerHTML = `<p class="empty" style="text-align:center; padding:4rem;">Could not open that file. Check the name or number. <a class="link-action" href="pokedex.html">Open the dex</a>.</p>`;
      return;
    }

    markSeen(mon.id);
    history.replaceState(null, "", `pokemon.html?id=${mon.id}`);
    render(mon, false);

    // 播放进场原生叫声
    if (window.pokeApi) {
      window.pokeApi.playCry(mon.id);
    }

    // 键盘快捷导航 (左右切换编号，Esc 返回图鉴)
    document.addEventListener("keydown", e => {
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      if (e.key === "ArrowRight" && mon.id < 1025) {
        location.href = `pokemon.html?id=${mon.id + 1}`;
      }
      if (e.key === "ArrowLeft" && mon.id > 1) {
        location.href = `pokemon.html?id=${mon.id - 1}`;
      }
      if (e.key === "Escape") {
        const reg = getRegion(mon.id);
        location.href = `pokedex.html?region=${reg.slug}`;
      }
    });

  } catch (err) {
    root.innerHTML = `<p class="empty" style="text-align:center; padding:4rem;">Failed to load file. <a class="link-action" href="pokedex.html">Open the dex</a>.</p>`;
  }
});
