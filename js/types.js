/**
 * 151 FILE — Types Page UI Logic
 * 渲染 18 属性芯片与 18×18 克制矩阵，支持十字聚焦高亮
 */

document.addEventListener("DOMContentLoaded", () => {
  const tc = window.TYPES_CHART;
  if (!tc) return;

  const wallEl = document.getElementById("wall");
  const chartEl = document.getElementById("chart");

  // 1. 渲染顶部 18 属性色票芯片
  if (wallEl) {
    wallEl.innerHTML = tc.TYPES.map(t => {
      const isWhite = tc.WHITE_TEXT_TYPES.has(t);
      const bg = tc.TYPE_COLORS[t];
      return `<a class="chip ${isWhite ? 'w' : ''}" style="background:${bg}" href="pokedex.html?type=${t}" title="Filter Dex by ${t}">${t}</a>`;
    }).join("");
  }

  // 2. 渲染 18×18 攻击/防御克制表
  if (chartEl) {
    let html = `<thead><tr><th><span class="sr-only">Attacking type (rows) against defending type (columns)</span></th>${tc.TYPES.map((t, j) => `<th data-c="${j}" title="Defending: ${t}">${t.slice(0, 3)}</th>`).join("")}</tr></thead><tbody>`;

    tc.TYPES.forEach((atk, i) => {
      html += `<tr data-r="${i}"><th data-r="${i}" title="Attacking: ${atk}">${atk.slice(0, 3)}</th>`;
      tc.TYPES.forEach((def, j) => {
        const m = tc.getEffectiveness(atk, def);
        const cls = tc.getMultiplierClass(m);
        const lbl = tc.getMultiplierLabel(m);
        html += `<td class="${cls}" data-r="${i}" data-c="${j}"><a href="pokedex.html?type=${def}" title="${atk} -> ${def}: ${m}×">${lbl}</a></td>`;
      });
      html += `</tr>`;
    });

    html += `</tbody>`;
    chartEl.innerHTML = html;

    // 3. 十字聚焦高亮交互 (行与列)
    chartEl.addEventListener("mouseover", e => {
      const cell = e.target.closest("[data-r],[data-c]");
      if (!cell) return;
      chartEl.querySelectorAll(".hi").forEach(n => n.classList.remove("hi"));
      const r = cell.dataset.r;
      const c = cell.dataset.c;
      if (r !== undefined) {
        chartEl.querySelector(`tr[data-r="${r}"]`)?.classList.add("hi");
        chartEl.querySelectorAll(`th[data-r="${r}"]`).forEach(n => n.classList.add("hi"));
      }
      if (c !== undefined) {
        chartEl.querySelectorAll(`[data-c="${c}"]`).forEach(n => n.classList.add("hi"));
      }
    });

    chartEl.addEventListener("mouseleave", () => {
      chartEl.querySelectorAll(".hi").forEach(n => n.classList.remove("hi"));
    });

    // 4. 点击行/列头触发 Belt vs Type 推演
    chartEl.addEventListener("click", e => {
      const th = e.target.closest("th[data-r], th[data-c]");
      if (th) {
        const r = th.dataset.r;
        const c = th.dataset.c;
        const t = r !== undefined ? tc.TYPES[Number(r)] : tc.TYPES[Number(c)];
        if (t) beltVsType(t);
      }
    });
  }

  // 5. 点击属性色票触发 Belt vs Type 推演
  if (wallEl) {
    wallEl.addEventListener("click", e => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      e.preventDefault();
      const t = chip.textContent.trim().toLowerCase();
      beltVsType(t);
    });
  }

  // 计算本站腰带对目标属性的克制与弱点 (Belt vs Type)
  async function beltVsType(atk) {
    const box = document.getElementById("belt-vs-box");
    if (!box) return;
    const ids = window.store ? window.store.belt() : [];
    if (!ids.length) {
      box.innerHTML = `<div class="belt-vs-card"><p class="soft">Belt empty. <a class="link-action" href="pokedex.html">Open the dex</a> to add Pokémon to your belt.</p></div>`;
      return;
    }
    box.innerHTML = `<div class="belt-vs-card"><p class="soft">Checking belt vs ${atk}…</p></div>`;
    const mons = await Promise.all(ids.map(id => window.pokeApi ? window.pokeApi.getPokemon(id).catch(() => null) : null));
    const validMons = mons.filter(Boolean);
    const beats = validMons.filter(m => m.types.some(t => tc.getEffectiveness(t, atk) === 2));
    const fears = validMons.filter(m => tc.getDefensiveMultiplier(atk, m.types) >= 2);
    box.innerHTML = `
      <div class="belt-vs-card">
        <h3 style="margin:0 0 0.5rem; font-size:1rem; font-family:var(--font-ui); color:var(--ink);">
          Belt vs <span style="text-transform:capitalize;">${atk}</span>
          <a class="chip" style="${tc.getTypeStyle ? tc.getTypeStyle(atk) : ''} font-size:0.75rem; margin-left:0.5rem; text-decoration:none;" href="pokedex.html?type=${atk}">Dex: ${atk}</a>
        </h3>
        <p style="margin:0.25rem 0; font-size:0.875rem;">Hits ${atk} for 2×: ${beats.map(m => `<a href="pokemon.html?id=${m.id}" style="color:var(--ink); font-weight:700;">${m.name}</a>`).join(", ") || "None"}</p>
        <p style="margin:0.25rem 0; font-size:0.875rem; color:var(--ink-soft);">Takes 2× or more from ${atk}: ${fears.map(m => `<a href="pokemon.html?id=${m.id}" style="color:var(--ink); font-weight:700;">${m.name}</a>`).join(", ") || "None"}</p>
      </div>
    `;
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});
