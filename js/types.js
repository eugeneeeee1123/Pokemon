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
    let html = `<thead><tr><th><span class="sr-only">Attacking type (rows) against defending type (columns)</span></th>${tc.TYPES.map((t, j) => `<th data-c="${j}" title="Defending: ${t}"><a href="pokedex.html?type=${t}" aria-label="Filter Dex by defending type ${t}">${t.slice(0, 3)}</a></th>`).join("")}</tr></thead><tbody>`;

    tc.TYPES.forEach((atk, i) => {
      html += `<tr data-r="${i}"><th data-r="${i}" title="Attacking: ${atk}"><a href="pokedex.html?type=${atk}" aria-label="Filter Dex by attacking type ${atk}">${atk.slice(0, 3)}</a></th>`;
      tc.TYPES.forEach((def, j) => {
        const m = tc.getEffectiveness(atk, def);
        const cls = tc.getMultiplierClass(m);
        const lbl = tc.getMultiplierLabel(m);
        html += `<td class="${cls}" data-r="${i}" data-c="${j}"><a href="pokedex.html?type=${def}" title="${atk} -> ${def}: ${m}×" aria-label="${atk} attacking ${def}: ${m}× effectiveness">${lbl}</a></td>`;
      });
      html += `</tr>`;
    });

    html += `</tbody>`;
    chartEl.innerHTML = html;

    // 3. 十字聚焦高亮交互 (行与列)
    let hoveredCell = null;
    let focusedCell = null;
    const highlightCross = cell => {
      chartEl.querySelectorAll(".hi").forEach(n => n.classList.remove("hi"));
      if (!cell) return;
      const r = cell.dataset.r;
      const c = cell.dataset.c;
      if (r !== undefined) {
        chartEl.querySelector(`tr[data-r="${r}"]`)?.classList.add("hi");
        chartEl.querySelectorAll(`th[data-r="${r}"]`).forEach(n => n.classList.add("hi"));
      }
      if (c !== undefined) {
        chartEl.querySelectorAll(`[data-c="${c}"]`).forEach(n => n.classList.add("hi"));
      }
    };

    chartEl.addEventListener("mouseover", e => {
      const cell = e.target.closest("[data-r],[data-c]");
      if (!cell) return;
      hoveredCell = cell;
      highlightCross(cell);
    });

    chartEl.addEventListener("focusin", e => {
      const cell = e.target.closest("[data-r],[data-c]");
      if (!cell) return;
      focusedCell = cell;
      highlightCross(cell);
    });

    chartEl.addEventListener("focusout", e => {
      if (chartEl.contains(e.relatedTarget)) return;
      focusedCell = null;
      highlightCross(hoveredCell);
    });

    chartEl.addEventListener("mouseleave", () => {
      hoveredCell = null;
      highlightCross(focusedCell);
    });

  }
});
