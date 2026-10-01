document.addEventListener("DOMContentLoaded", () => {
  const tc = window.TYPES_CHART;
  const typeStyle = (t) => (tc ? tc.getTypeStyle(t) : "background:#3A6A88; color:#ffffff;");

  const state = {
    left: null,
    right: null
  };

  function stat(mon, name) {
    if (!mon || !mon.stats) return 0;
    const found = mon.stats.find(s => s.name === name);
    return found ? (found.value ?? found.base_stat ?? 0) : 0;
  }

  function bst(mon) {
    if (!mon || !mon.stats) return 0;
    return mon.stats.reduce((acc, s) => acc + (s.value ?? s.base_stat ?? 0), 0);
  }

  async function loadPokemon(side, value) {
    if (!value) return;
    const cardEl = document.getElementById(`battle-${side}-card`);
    if (cardEl) {
      cardEl.innerHTML = `<p class="soft" style="font-size:0.875rem; color:var(--ink-soft); padding:1rem 0;">Loading specimen #${value}...</p>`;
    }

    try {
      const mon = await window.pokeApi.getPokemon(value);
      if (!mon) {
        if (cardEl) cardEl.innerHTML = `<p class="soft" style="color:var(--mark); padding:1rem 0;">Specimen not found: "${value}".</p>`;
        return;
      }
      state[side] = mon;
      render();
    } catch (_) {
      if (cardEl) cardEl.innerHTML = `<p class="soft" style="color:var(--mark); padding:1rem 0;">Error loading specimen.</p>`;
    }
  }

  function renderCard(mon) {
    if (!mon) {
      return `<p class="soft" style="font-size:0.875rem; color:var(--ink-soft); padding:1rem 0;">Search or load a specimen.</p>`;
    }

    const hp = stat(mon, "hp");
    const atk = stat(mon, "attack");
    const def = stat(mon, "defense");
    const spa = stat(mon, "special-attack");
    const spd = stat(mon, "special-defense");
    const spe = stat(mon, "speed");
    const total = bst(mon);

    return `
      <article class="dex-card" style="padding:1rem; margin-top:0.75rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <span class="id-badge">#${String(mon.id).padStart(3, "0")}</span>
          <span style="font-family:var(--font-num); color:var(--ink-soft); font-size:0.8125rem;">BST ${total}</span>
        </div>

        <div style="text-align:center; margin-bottom:0.5rem;">
          <img src="${window.pokeApi.artUrl(mon.id)}" width="140" height="140" alt="${mon.name}" style="object-fit:contain; filter:drop-shadow(0 6px 8px rgba(0,0,0,0.4));">
          <h2 style="font-family:var(--font-ui); font-size:1.35rem; font-weight:700; color:var(--ink); text-transform:capitalize; margin:0.4rem 0 0.2rem;">${mon.name}</h2>
          <div style="display:flex; justify-content:center; gap:0.4rem; margin-bottom:0.75rem;">
            ${mon.types.map(t => `<span class="chip" style="${typeStyle(t)} font-size:0.75rem;">${t}</span>`).join("")}
          </div>
        </div>

        <div style="border-top:1px solid var(--line); padding-top:0.5rem; font-family:var(--font-num); font-size:0.8125rem; line-height:1.6;">
          <div style="display:flex; justify-content:space-between;"><span>HP</span><strong>${hp}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Attack</span><strong>${atk}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Defense</span><strong>${def}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Sp. Atk</span><strong>${spa}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Sp. Def</span><strong>${spd}</strong></div>
          <div style="display:flex; justify-content:space-between; color:var(--mark);"><span>Speed</span><strong>${spe}</strong></div>
        </div>
      </article>
    `;
  }

  function calculateSTABMatchups(attacker, defender) {
    if (!attacker || !defender || !tc) return [];
    return attacker.types.map(atkType => {
      const mult = tc.getDefensiveMultiplier(atkType, defender.types);
      return { atkType, mult };
    });
  }

  function renderResult() {
    const root = document.getElementById("battle-result");
    if (!root) return;

    if (!state.left || !state.right) {
      root.innerHTML = "";
      return;
    }

    const a = state.left;
    const b = state.right;

    const aSpeed = stat(a, "speed");
    const bSpeed = stat(b, "speed");
    const speedWinner = aSpeed > bSpeed ? a.name : bSpeed > aSpeed ? b.name : null;

    const aToB = calculateSTABMatchups(a, b);
    const bToA = calculateSTABMatchups(b, a);

    const aMaxMult = aToB.length ? Math.max(...aToB.map(x => x.mult)) : 1;
    const bMaxMult = bToA.length ? Math.max(...bToA.map(x => x.mult)) : 1;

    root.innerHTML = `
      <div class="file-block" style="background:var(--paper); border:1px solid var(--line); border-radius:4px; padding:1.5rem;">
        <h2 style="font-family:var(--font-ui); font-size:1.4rem; color:var(--ink); margin:0 0 1rem; border-bottom:1px solid var(--line); padding-bottom:0.5rem;">
          Matchup Diagnostics
        </h2>

        <!-- 速度比对 -->
        <div style="margin-bottom:1.5rem;">
          <h3 style="font-family:var(--font-num); font-size:0.875rem; color:var(--ink-soft); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem;">
            Speed Priority
          </h3>
          <p style="font-size:1rem; margin:0 0 0.35rem; color:var(--ink);">
            <strong>${a.name}</strong> (${aSpeed}) vs <strong>${b.name}</strong> (${bSpeed})
          </p>
          <p class="soft" style="font-size:0.875rem; color:var(--ink-soft);">
            ${speedWinner
              ? `<span style="color:var(--mark); font-weight:700;">${speedWinner.toUpperCase()}</span> holds the initiative with a higher base speed.`
              : "Both specimens have equal speed (Speed tie)."}
          </p>
        </div>

        <!-- 属性打击面推演 -->
        <div>
          <h3 style="font-family:var(--font-num); font-size:0.875rem; color:var(--ink-soft); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem;">
            STAB Type Advantage
          </h3>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(18rem, 1fr)); gap:1.25rem;">
            <!-- A attacking B -->
            <div style="background:var(--sky-deep); border:1px solid var(--line); padding:1rem; border-radius:4px;">
              <p style="font-family:var(--font-ui); font-size:0.9375rem; font-weight:700; color:var(--ink); text-transform:capitalize; margin:0 0 0.5rem;">
                ${a.name} → ${b.name}
              </p>
              ${aToB.map(m => `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem; font-family:var(--font-num); font-size:0.875rem;">
                  <span class="chip" style="${typeStyle(m.atkType)} font-size:0.75rem;">${m.atkType}</span>
                  <span style="font-weight:700; color:${m.mult >= 2 ? 'var(--mark)' : m.mult < 1 ? 'var(--ink-soft)' : 'var(--ink)'};">
                    ${m.mult}×
                  </span>
                </div>
              `).join("")}
              <p style="font-size:0.8125rem; color:var(--ink-soft); margin-top:0.5rem; border-top:1px solid var(--line); padding-top:0.4rem;">
                Peak STAB: <strong>${aMaxMult}×</strong> ${aMaxMult >= 2 ? '(Super Effective)' : aMaxMult === 0 ? '(No Effect)' : aMaxMult < 1 ? '(Not Very Effective)' : '(Standard)'}
              </p>
            </div>

            <!-- B attacking A -->
            <div style="background:var(--sky-deep); border:1px solid var(--line); padding:1rem; border-radius:4px;">
              <p style="font-family:var(--font-ui); font-size:0.9375rem; font-weight:700; color:var(--ink); text-transform:capitalize; margin:0 0 0.5rem;">
                ${b.name} → ${a.name}
              </p>
              ${bToA.map(m => `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem; font-family:var(--font-num); font-size:0.875rem;">
                  <span class="chip" style="${typeStyle(m.atkType)} font-size:0.75rem;">${m.atkType}</span>
                  <span style="font-weight:700; color:${m.mult >= 2 ? 'var(--mark)' : m.mult < 1 ? 'var(--ink-soft)' : 'var(--ink)'};">
                    ${m.mult}×
                  </span>
                </div>
              `).join("")}
              <p style="font-size:0.8125rem; color:var(--ink-soft); margin-top:0.5rem; border-top:1px solid var(--line); padding-top:0.4rem;">
                Peak STAB: <strong>${bMaxMult}×</strong> ${bMaxMult >= 2 ? '(Super Effective)' : bMaxMult === 0 ? '(No Effect)' : bMaxMult < 1 ? '(Not Very Effective)' : '(Standard)'}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function render() {
    const leftCard = document.getElementById("battle-left-card");
    const rightCard = document.getElementById("battle-right-card");
    if (leftCard) leftCard.innerHTML = renderCard(state.left);
    if (rightCard) rightCard.innerHTML = renderCard(state.right);
    renderResult();
  }

  const leftInput = document.getElementById("battle-left");
  leftInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      loadPokemon("left", e.target.value.trim());
    }
  });
  leftInput?.addEventListener("change", (e) => {
    loadPokemon("left", e.target.value.trim());
  });

  const rightInput = document.getElementById("battle-right");
  rightInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      loadPokemon("right", e.target.value.trim());
    }
  });
  rightInput?.addEventListener("change", (e) => {
    loadPokemon("right", e.target.value.trim());
  });

  // URL search params: ?left=...&right=... or ?a=...&b=...
  const q = new URLSearchParams(location.search);
  const paramLeft = q.get("left") || q.get("a") || "25";
  const paramRight = q.get("right") || q.get("b") || "6";

  if (leftInput && paramLeft) leftInput.value = paramLeft;
  if (rightInput && paramRight) rightInput.value = paramRight;

  loadPokemon("left", paramLeft);
  loadPokemon("right", paramRight);
});
