/**
 * 151 FILE — Belt (Team) Page Logic
 * 遵循 pokemon-web-project-plan.md §4.5 与 AGENTS.md
 * - 键名固定：file151.belt (最长 6)
 * - 槽内拖拽换序
 * - 移除与一键清空
 * - 空槽直链 Dex
 */

document.addEventListener("DOMContentLoaded", () => {
  const slotsEl = document.getElementById("slots");
  const clearBtn = document.getElementById("clear");

  const load = () => window.store.belt();
  const save = (ids) => window.store.setBelt(ids);

  function art(id) {
    return window.pokeApi
      ? window.pokeApi.artUrl(id)
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
  }

  function getName(id) {
    if (window.getSpeciesById) {
      const spec = window.getSpeciesById(id);
      if (spec) return spec.name;
    }
    return `#${id}`;
  }

  let ids = load();
  let fromIndex = null;

  async function render() {
    ids = load();
    const mons = await Promise.all(ids.map(id => window.pokeApi ? window.pokeApi.getPokemon(id).catch(() => null) : null));
    const cells = [];
    for (let i = 0; i < 6; i++) {
      const id = ids[i];
      const m = mons[i];
      if (!id || !m) {
        cells.push(`<a class="slot empty" href="pokedex.html" title="Open Pokédex to add a Pokémon">+ Empty slot<br><span style="font-size:0.75rem; font-weight:400; color:var(--ink-soft)">Open Dex</span></a>`);
        continue;
      }
      const speed = (m.stats?.find(s => s.name === "speed") || {}).value || 0;
      cells.push(`
        <article class="slot" draggable="true" data-i="${i}">
          <a href="pokemon.html?id=${id}" title="Open #${id} ${m.name}">
            <img src="${art(id)}" alt="${m.name} 3D Model" loading="lazy" />
          </a>
          <span class="id">#${String(id).padStart(3, "0")}</span>
          <p class="name">${m.name}</p>
          <p class="types-row" style="font-size:0.75rem; color:var(--ink-soft); margin:0.2rem 0; font-weight:700; text-transform:uppercase;">${(m.types || []).join(" · ")}</p>
          <p class="speed-row" style="font-size:0.75rem; font-family:var(--font-num); color:var(--ink-soft); margin-bottom:0.4rem;">spe ${speed}</p>
          <div class="slot-tools">
            <button class="mv" type="button" data-mv="-1" data-i="${i}" aria-label="Move ${m.name} left" ${i === 0 ? "disabled" : ""}>◀</button>
            <button class="rm" type="button" data-rm="${i}" title="Remove ${m.name} from belt">Remove</button>
            <button class="mv" type="button" data-mv="1" data-i="${i}" aria-label="Move ${m.name} right" ${i === ids.length - 1 ? "disabled" : ""}>▶</button>
          </div>
        </article>
      `);
    }

    if (slotsEl) {
      slotsEl.innerHTML = cells.join("");
      bindDragAndDrop();
    }

    const live = mons.filter(Boolean);
    const summaryLine = document.getElementById("belt-summary");
    if (summaryLine) {
      if (live.length < 6) {
        summaryLine.hidden = true;
      } else {
        const counts = {};
        live.forEach(m => (m.types || []).forEach(t => counts[t] = (counts[t] || 0) + 1));
        const dups = Object.entries(counts).filter(([, n]) => n >= 2).map(([t]) => t);
        const getSpe = (m) => (m.stats?.find(s => s.name === "speed") || {}).value || 0;
        const fast = live.reduce((a, b) => getSpe(a) >= getSpe(b) ? a : b);
        const slow = live.reduce((a, b) => getSpe(a) <= getSpe(b) ? a : b);
        summaryLine.hidden = false;
        summaryLine.textContent = [
          dups.length ? `Repeat: ${dups.join(", ")}` : "No repeat type",
          `Fastest ${fast.name} (${getSpe(fast)})`,
          `Slowest ${slow.name} (${getSpe(slow)})`
        ].join(" · ");
      }
    }

    const analysisEl = document.getElementById("team-analysis");
    if (analysisEl) {
      if (live.length < 6) {
        analysisEl.hidden = true;
      } else {
        analysisEl.hidden = false;
        renderRadar(live);
        renderHeatmap(live);
      }
    }
  }

  function renderRadar(live) {
    const canvas = document.getElementById("radar-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const center = { x: w / 2, y: h / 2 };
    const maxR = 105;
    const labels = ["HP", "ATK", "DEF", "SPE", "SPD", "SPA"];
    const keys = ["hp", "attack", "defense", "speed", "special-defense", "special-attack"];
    const totalAxes = labels.length;

    // 1. Draw web grid (3 rings)
    for (let level = 1; level <= 3; level++) {
      const r = (maxR / 3) * level;
      ctx.beginPath();
      for (let i = 0; i < totalAxes; i++) {
        const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
        const x = center.x + r * Math.cos(angle);
        const y = center.y + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(42, 69, 94, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 2. Draw axis lines & labels
    ctx.font = "600 11px var(--font-num, sans-serif)";
    ctx.fillStyle = "#A8C2D8";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < totalAxes; i++) {
      const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
      const x = center.x + maxR * Math.cos(angle);
      const y = center.y + maxR * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "rgba(42, 69, 94, 0.4)";
      ctx.stroke();

      const labelX = center.x + (maxR + 20) * Math.cos(angle);
      const labelY = center.y + (maxR + 15) * Math.sin(angle);
      ctx.fillText(labels[i], labelX, labelY);
    }

    // 3. Compute team average stats
    const avgStats = keys.map(k => {
      const sum = live.reduce((acc, m) => {
        const st = (m.stats || []).find(s => s.name === k);
        return acc + (st ? (st.value ?? st.base_stat ?? 0) : 0);
      }, 0);
      return Math.round(sum / live.length);
    });

    // 4. Draw polygon
    ctx.beginPath();
    for (let i = 0; i < totalAxes; i++) {
      const val = avgStats[i];
      const ratio = Math.min(1, Math.max(0.1, val / 150));
      const r = maxR * ratio;
      const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
      const x = center.x + r * Math.cos(angle);
      const y = center.y + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 203, 5, 0.25)";
    ctx.fill();
    ctx.strokeStyle = "#FFCB05";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Point dots
    for (let i = 0; i < totalAxes; i++) {
      const val = avgStats[i];
      const ratio = Math.min(1, Math.max(0.1, val / 150));
      const r = maxR * ratio;
      const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
      const x = center.x + r * Math.cos(angle);
      const y = center.y + r * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#FFCB05";
      ctx.fill();
    }
  }

  function renderHeatmap(live) {
    const container = document.getElementById("defense-heatmap");
    if (!container || !window.TYPES_CHART) return;
    const tc = window.TYPES_CHART;
    const TYPES = tc.TYPES || [
      "normal", "fire", "water", "electric", "grass", "ice",
      "fighting", "poison", "ground", "flying", "psychic", "bug",
      "rock", "ghost", "dragon", "dark", "steel", "fairy"
    ];

    const html = TYPES.map(atkType => {
      const mults = live.map(m => tc.getDefensiveMultiplier(atkType, m.types || []));
      const best = Math.min(...mults);

      let color = "#7EB6D9";
      let tag = "1.0× Even";
      if (best === 0) { color = "#78C850"; tag = "0× Immune"; }
      else if (best <= 0.25) { color = "#78C850"; tag = "0.25× Quad"; }
      else if (best <= 0.5) { color = "#78C850"; tag = "0.5× Resist"; }
      else if (best >= 2) { color = "#EE1515"; tag = `${best}× Weak`; }

      const typeStyle = tc.getTypeStyle ? tc.getTypeStyle(atkType) : "background:#2A455E; color:#fff;";

      return `
        <div style="display:flex; align-items:center; justify-content:space-between; background:var(--sky-deep); border:1px solid var(--line); border-radius:3px; padding:0.35rem 0.5rem; font-family:var(--font-num); font-size:0.75rem;">
          <span class="chip" style="${typeStyle} font-size:0.6875rem; padding:0.1rem 0.35rem;">${atkType}</span>
          <span style="color:${color}; font-weight:700;">${tag}</span>
        </div>
      `;
    }).join("");

    container.innerHTML = html;
  }

  function bindDragAndDrop() {
    const items = document.querySelectorAll(".slot[draggable]");
    items.forEach(el => {
      el.addEventListener("dragstart", () => {
        fromIndex = Number(el.dataset.i);
        el.classList.add("drag");
      });

      el.addEventListener("dragend", () => {
        fromIndex = null;
        el.classList.remove("drag");
      });

      el.addEventListener("dragover", e => {
        e.preventDefault();
      });

      el.addEventListener("drop", e => {
        e.preventDefault();
        const toIndex = Number(el.dataset.i);
        if (fromIndex == null || fromIndex === toIndex) return;

        const next = ids.slice();
        const [moved] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, moved);
        ids = next;
        save(ids);
        render();
      });
    });
  }

  // 槽位事件监听（移除单只 / 左右挪动）。挪动按钮同时解决手机上 HTML5 拖拽无效和键盘无法换序。
  slotsEl?.addEventListener("click", e => {
    const mv = e.target.closest("[data-mv]");
    if (mv && !mv.disabled) {
      const from = Number(mv.dataset.i);
      const to = from + Number(mv.dataset.mv);
      if (to < 0 || to >= ids.length) return;
      const next = ids.slice();
      [next[from], next[to]] = [next[to], next[from]];
      ids = next;
      save(ids);
      render();
      // 重画后把焦点放回同一只的同方向按钮，方便连续按
      slotsEl.querySelector(`[data-mv="${mv.dataset.mv}"][data-i="${to}"]`)?.focus();
      return;
    }
    const btn = e.target.closest("[data-rm]");
    if (!btn) return;
    const idx = Number(btn.dataset.rm);
    ids.splice(idx, 1);
    save(ids);
    render();
  });

  // 清空整条腰带
  clearBtn?.addEventListener("click", () => {
    if (ids.length === 0) return;
    ids = [];
    save(ids);
    render();
  });

  render();
});
