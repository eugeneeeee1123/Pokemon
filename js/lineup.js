/**
 * 151 FILE — Lineup Page Logic (Coverage + Holes + Side-by-side comparison)
 * 遵循 pokemon-web-project-plan.md §4.4 与 AGENTS.md 约束
 * - 腰带键名固定：file151.belt (id 数组，最长 6)
 * - 纯种族属性相克推演，不含招式
 * - 左右并排比对：URL 参数 ?a= & ?b=
 * - Holes 链接使用 ?resist=，禁止复用 ?type=
 */

(function () {
  const tc = window.TYPES_CHART;
  const api = window.pokeApi;

  const q = new URLSearchParams(location.search);
  let leftId = q.get("a") ? Number(q.get("a")) || q.get("a") : null;
  let rightId = q.get("b") ? Number(q.get("b")) || q.get("b") : null;
  let pickSide = "left";

  let leftMon = null;
  let rightMon = null;

  // 读取本地腰带
  function getBeltIds() {
    return window.store.belt();
  }

  // 获取宝可梦数据。请求失败时返回 null，页面明确显示“没拿到数据”，
  // 不再用 50/50/50 的假数据冒充（之前离线时会把 6 项能力都显示成 50）。
  async function fetchPokemon(idOrName) {
    if (!idOrName || !api) return null;
    try {
      const mon = await api.getPokemon(String(idOrName).trim());
      if (!mon) return null;
      const statsMap = {};
      mon.stats.forEach(s => { statsMap[s.name] = s.value; });
      return { id: mon.id, name: mon.name, types: mon.types, stats: statsMap, art: api.artUrl(mon.id) };
    } catch (_) {
      return null;
    }
  }

  // 渲染属性色票芯片
  function renderChips(list, makeHref) {
    if (!list || list.length === 0) {
      return `<span class="lineup-empty">None</span>`;
    }
    return list.map(t => {
      const bg = tc ? tc.TYPE_COLORS[t] || '#3A6A88' : '#3A6A88';
      const isWhite = tc ? tc.WHITE_TEXT_TYPES.has(t) : false;
      return `<a class="chip ${isWhite ? 'w' : ''}" style="background:${bg}" href="${makeHref(t)}">${t}</a>`;
    }).join("");
  }

  // 计算腰带覆盖度与盲点
  function calculateCoverage(mons) {
    const cover = [];
    const holes = [];
    const resists = [];
    const validMons = mons.filter(Boolean);
    if (validMons.length === 0 || !tc) return { cover, holes, resists };

    tc.TYPES.forEach(t => {
      // 进攻覆盖面 (Coverage)：队伍中有任一宝可梦的原生属性克制目标防御属性 (2×)
      const canHit = validMons.some(m => m.types.some(st => tc.getEffectiveness(st, t) === 2));
      if (canHit) cover.push(t);

      // 防御盲点 (Holes)：当该属性进攻时，队伍中受到最高伤害的宝可梦受到 >= 2× 伤害
      const worstDef = Math.max(...validMons.map(m => tc.getDefensiveMultiplier(t, m.types)));
      if (worstDef >= 2) holes.push(t);

      // 抵抗覆盖 (Resists)：当该属性进攻时，队伍中至少有一只宝可梦可以抵抗 (<= 0.5×)
      const bestDef = Math.min(...validMons.map(m => tc.getDefensiveMultiplier(t, m.types)));
      if (bestDef <= 0.5) resists.push(t);
    });

    return { cover, holes, resists };
  }

  // 更新当前 URL 查询参数
  function updateUrl() {
    if (typeof location === "undefined" || !location.href) return;
    try {
      const u = new URL(location.href);
      if (leftId) u.searchParams.set("a", leftId); else u.searchParams.delete("a");
      if (rightId) u.searchParams.set("b", rightId); else u.searchParams.delete("b");
      if (typeof history !== "undefined" && history.replaceState) {
        history.replaceState(null, "", u.toString());
      }
    } catch (_) {}
  }

  // 渲染单侧对比面板
  function renderPaneHtml(side, mon, other, requested) {
    if (!mon) {
      const msg = requested
        ? "No data for that Pokémon. Check the name or number, or try again if PokeAPI is down."
        : "Empty side. Search above or tap a Pokémon on the belt.";
      return `
        <input data-side="${side}" placeholder="Search name or #..." aria-label="${side} Pokemon search" />
        <p class="lineup-empty" ${requested ? 'role="alert"' : ""} style="text-align:center; padding: 2rem 0;">${msg}</p>
      `;
    }

    const statFields = [
      { key: "hp", label: "HP" },
      { key: "attack", label: "Attack" },
      { key: "defense", label: "Defense" },
      { key: "special-attack", label: "Sp. Atk" },
      { key: "special-defense", label: "Sp. Def" },
      { key: "speed", label: "Speed" }
    ];

    const typesText = (mon.types || []).join(" · ");

    return `
      <input data-side="${side}" value="${mon.name} (#${mon.id})" aria-label="${side} Pokemon: ${mon.name}" />
      <img src="${mon.art}" alt="${mon.name} 3D Model" />
      <p class="types-tag">${typesText}</p>
      <div class="lineup-stats">
        ${statFields.map(s => {
          const v = mon.stats?.[s.key] || 0;
          const ov = other?.stats?.[s.key];
          const hasLead = ov != null && v > ov;
          const isFaster = s.key === "speed" && ov != null && v > ov;
          const pct = Math.min(100, Math.round((v / 255) * 100));

          return `
            <div class="lineup-stat">
              <span class="stat-name">${s.label}</span>
              <div class="bar">
                <span class="${hasLead ? 'stat-lead' : ''}" style="width: ${pct}%"></span>
              </div>
              <span class="stat-val ${isFaster ? 'faster' : ''}">${v}${isFaster ? ' ★' : ''}</span>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  // 全量渲染主函数
  async function render() {
    const beltIds = getBeltIds();
    const beltBox = document.getElementById("belt");
    const emptyBox = document.getElementById("belt-empty");

    if (!beltIds.length) {
      if (beltBox) beltBox.innerHTML = "";
      if (emptyBox) {
        emptyBox.hidden = false;
        emptyBox.innerHTML = `Belt is empty. <a class="link-action" href="pokedex.html">Open the dex</a> and add up to 6.`;
      }
      document.getElementById("coverage").innerHTML = `<span class="lineup-empty">None</span>`;
      document.getElementById("holes").innerHTML = `<span class="lineup-empty">None</span>`;
      document.getElementById("resists").innerHTML = `<span class="lineup-empty">None</span>`;
      document.getElementById("dupes").textContent = "";
    } else {
      if (emptyBox) emptyBox.hidden = true;

      // 并发拉取腰带 6 只数据
      const beltMons = await Promise.all(beltIds.map(fetchPokemon));
      const validBelt = beltMons.filter(Boolean);
      if (validBelt.length < beltIds.length && emptyBox) {
        emptyBox.hidden = false;
        emptyBox.textContent = "Some belt Pokémon could not load. Coverage below only counts the ones that did.";
      }

      // 渲染腰带缩略图
      if (beltBox) {
        beltBox.innerHTML = validBelt.map(m => {
          const isOn = (leftId === m.id || rightId === m.id);
          return `
            <button class="mini" type="button" data-id="${m.id}" ${isOn ? 'data-on' : ''} title="${m.name} (#${m.id})">
              <img src="${m.art}" alt="${m.name}" loading="lazy" />
            </button>
          `;
        }).join("");
      }

      // 计算并渲染覆盖面、弱点与抵抗
      const { cover, holes, resists } = calculateCoverage(validBelt);
      document.getElementById("coverage").innerHTML = renderChips(cover, t => `pokedex.html?type=${t}`);
      document.getElementById("holes").innerHTML = renderChips(holes, t => `pokedex.html?resist=${t}`);
      document.getElementById("resists").innerHTML = renderChips(resists, t => `pokedex.html?resist=${t}`);

      // 重复属性统计
      const typeCounts = {};
      validBelt.forEach(m => {
        m.types.forEach(t => { typeCounts[t] = (typeCounts[t] || 0) + 1; });
      });
      const dupTypes = Object.entries(typeCounts).filter(([, count]) => count >= 2).map(([t, count]) => `${t} (×${count})`);
      document.getElementById("dupes").textContent = dupTypes.length ? "Repeated types: " + dupTypes.join(", ") : "";
    }

    // 左右并排比对
    leftMon = leftId ? await fetchPokemon(leftId) : null;
    rightMon = rightId ? await fetchPokemon(rightId) : null;

    const leftPane = document.getElementById("left");
    const rightPane = document.getElementById("right");
    if (leftPane) leftPane.innerHTML = renderPaneHtml("left", leftMon, rightMon, leftId);
    if (rightPane) rightPane.innerHTML = renderPaneHtml("right", rightMon, leftMon, rightId);

    renderVerdict();
    updateUrl();
  }

  let focusType = null;

  function renderVerdict() {
    const verdictEl = document.getElementById("lineup-verdict");
    if (!verdictEl) return;
    if (!leftMon || !rightMon) {
      verdictEl.hidden = true;
      verdictEl.innerHTML = "";
      return;
    }

    const aSpe = leftMon.stats?.speed ?? 0;
    const bSpe = rightMon.stats?.speed ?? 0;
    const faster = aSpe === bSpe
      ? "Both have the same speed"
      : (aSpe > bSpe ? `${leftMon.name} is faster (${aSpe} vs ${bSpe})` : `${rightMon.name} is faster (${bSpe} vs ${aSpe})`);

    let tank = "";
    if (focusType && tc) {
      const la = tc.getDefensiveMultiplier(focusType, leftMon.types);
      const lb = tc.getDefensiveMultiplier(focusType, rightMon.types);
      tank = la === lb
        ? `Both take ${la}× from ${focusType}`
        : (la < lb ? `${leftMon.name} resists ${focusType} better (${la}× vs ${lb}×)` : `${rightMon.name} resists ${focusType} better (${lb}× vs ${la}×)`);
    } else {
      tank = "Pick an attack type below to compare resistance";
    }

    const verdictText = `${faster}. ${tank}.`;

    verdictEl.hidden = false;
    verdictEl.innerHTML = `
      <p style="margin:0 0 0.5rem; font-size:1rem; color:var(--ink); font-weight:700;">${verdictText}</p>
      <div style="display:flex; gap:0.3rem; flex-wrap:wrap; align-items:center;">
        <span style="font-size:0.75rem; color:var(--ink-soft); font-family:var(--font-num);">Compare vs attack:</span>
        ${tc ? tc.TYPES.map(t => `<button type="button" class="chip ${t === focusType ? 'is-focus' : ''}" data-focus="${t}" style="${tc.getTypeStyle(t)} font-size:0.7rem; border:${t === focusType ? '2px solid var(--ink)' : 'none'}; cursor:pointer; padding:0.15rem 0.4rem; border-radius:3px;">${t}</button>`).join("") : ""}
      </div>
    `;
  }

  // 事件监听与委托
  document.addEventListener("DOMContentLoaded", () => {
    // 1. 点击腰带迷你球
    document.getElementById("belt")?.addEventListener("click", e => {
      const btn = e.target.closest("[data-id]");
      if (!btn) return;
      const id = Number(btn.dataset.id);

      if (!leftId) {
        leftId = id;
      } else if (!rightId) {
        rightId = id;
      } else {
        if (pickSide === "left") {
          leftId = id;
          pickSide = "right";
        } else {
          rightId = id;
          pickSide = "left";
        }
      }
      render();
    });

    // 2. 左右两侧搜索输入 (Enter 确认)
    document.querySelector(".lineup-pair")?.addEventListener("keydown", async e => {
      if (e.key !== "Enter") return;
      const targetInput = e.target;
      const side = targetInput.dataset.side;
      if (!side) return;

      const val = targetInput.value.replace(/^#/, "").replace(/\(.*?\)/, "").trim();
      if (!val) return;

      const found = await fetchPokemon(val);
      if (found) {
        if (side === "left") leftId = found.id;
        else rightId = found.id;
        render();
      } else {
        targetInput.style.borderColor = "var(--ball)";
        setTimeout(() => { targetInput.style.borderColor = ""; }, 1200);
      }
    });

    // 3. 交换两侧
    document.getElementById("swap")?.addEventListener("click", () => {
      const temp = leftId;
      leftId = rightId;
      rightId = temp;
      render();
    });

    // 4. 清除单侧
    document.getElementById("cl")?.addEventListener("click", () => {
      leftId = null;
      render();
    });

    document.getElementById("cr")?.addEventListener("click", () => {
      rightId = null;
      render();
    });

    // 5. 复制链接
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

    // 6. 点击对比攻击属性
    document.getElementById("lineup-verdict")?.addEventListener("click", e => {
      const btn = e.target.closest("[data-focus]");
      if (!btn) return;
      const t = btn.dataset.focus;
      focusType = (focusType === t) ? null : t;
      renderVerdict();
    });

    // 初始化渲染
    render();
  });
})();
