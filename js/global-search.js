/**
 * 151 FILE — Global Quick Search (Command Palette)
 * 全局即时快捷搜索：按 / 打开，Esc 关闭，↑↓ 切换，Enter 直达
 * 同时检索 Pokémon、Moves、Abilities
 */
(function () {
  let pokemonCache = null;
  let movesCache = null;
  let abilitiesCache = null;
  let activeIndex = -1;
  let currentResults = [];

  function createSearchDOM() {
    if (document.getElementById("search-overlay")) return;

    const overlay = document.createElement("div");
    overlay.className = "search-overlay";
    overlay.id = "search-overlay";
    overlay.hidden = true;

    overlay.innerHTML = `
      <div class="search-panel" role="dialog" aria-modal="true" aria-label="Global Search">
        <div class="search-panel-header">
          <span style="font-family:var(--font-num); color:var(--mark); font-weight:700; font-size:1.1rem; padding-left:0.5rem;">/</span>
          <input id="global-search-input" type="search" placeholder="Search Pokémon, moves, abilities..." autocomplete="off">
          <button class="search-close-btn" id="search-close-btn" type="button" aria-label="Close search">✕</button>
        </div>
        <ul id="global-search-results" class="search-results-list"></ul>
        <div class="search-panel-footer">
          <span><kbd>/</kbd> Open · <kbd>Esc</kbd> Close · <kbd>↑</kbd><kbd>↓</kbd> Select · <kbd>Enter</kbd> Jump</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const input = document.getElementById("global-search-input");
    const closeBtn = document.getElementById("search-close-btn");

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeSearch();
    });

    closeBtn.addEventListener("click", closeSearch);

    input.addEventListener("input", handleSearch);
    input.addEventListener("keydown", handleKeyNavigation);
  }

  async function loadData() {
    if (!pokemonCache) {
      if (window.ALL_SPECIES && window.ALL_SPECIES.length === 1025) {
        pokemonCache = window.ALL_SPECIES;
      } else {
        try {
          const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
          const data = await resp.json();
          pokemonCache = (data.results || []).map((p, idx) => ({ id: idx + 1, name: p.name }));
        } catch (_) {
          pokemonCache = [];
        }
      }
    }

    if (!movesCache) {
      try {
        const resp = await fetch("https://pokeapi.co/api/v2/move?limit=950");
        const data = await resp.json();
        movesCache = (data.results || []).map(m => m.name);
      } catch (_) {
        movesCache = [];
      }
    }

    if (!abilitiesCache) {
      try {
        const resp = await fetch("https://pokeapi.co/api/v2/ability?limit=400");
        const data = await resp.json();
        abilitiesCache = (data.results || []).map(a => a.name);
      } catch (_) {
        abilitiesCache = [];
      }
    }
  }

  function openSearch() {
    createSearchDOM();
    const overlay = document.getElementById("search-overlay");
    const input = document.getElementById("global-search-input");
    if (!overlay || !input) return;

    overlay.hidden = false;
    input.value = "";
    input.focus();
    renderResults([]);
    loadData();
  }

  function closeSearch() {
    const overlay = document.getElementById("search-overlay");
    if (overlay) overlay.hidden = true;
    activeIndex = -1;
  }

  function handleSearch(e) {
    const q = e.target.value.trim().toLowerCase();
    if (q.length < 2) {
      renderResults([]);
      return;
    }

    const results = [];

    // 1. Pokémon (max 4)
    if (pokemonCache) {
      const pMatches = pokemonCache.filter(p => {
        const cleanName = p.name.toLowerCase();
        return cleanName.includes(q) || String(p.id) === q;
      }).slice(0, 4);

      pMatches.forEach(p => {
        results.push({
          type: "Pokémon",
          title: `#${String(p.id).padStart(3, "0")} ${p.name.replace(/-/g, " ")}`,
          url: `pokemon.html?id=${p.id}`,
          tag: "SPECIMEN"
        });
      });
    }

    // 2. Moves (max 3)
    if (movesCache) {
      const mMatches = movesCache.filter(m => m.toLowerCase().includes(q)).slice(0, 3);
      mMatches.forEach(m => {
        results.push({
          type: "Move",
          title: m.replace(/-/g, " "),
          url: `moves.html?q=${encodeURIComponent(m)}`,
          tag: "MOVE"
        });
      });
    }

    // 3. Abilities (max 3)
    if (abilitiesCache) {
      const aMatches = abilitiesCache.filter(a => a.toLowerCase().includes(q)).slice(0, 3);
      aMatches.forEach(a => {
        results.push({
          type: "Ability",
          title: a.replace(/-/g, " "),
          url: `abilities.html?q=${encodeURIComponent(a)}`,
          tag: "ABILITY"
        });
      });
    }

    renderResults(results);
  }

  function renderResults(results) {
    currentResults = results;
    activeIndex = results.length > 0 ? 0 : -1;
    const list = document.getElementById("global-search-results");
    if (!list) return;

    if (results.length === 0) {
      list.innerHTML = `<li class="search-empty">No matching records found.</li>`;
      return;
    }

    list.innerHTML = results.map((item, idx) => `
      <li class="search-item ${idx === activeIndex ? 'active' : ''}" data-idx="${idx}">
        <span class="search-item-title">${item.title}</span>
        <span class="search-item-tag ${item.type.toLowerCase()}">${item.tag}</span>
      </li>
    `).join("");

    list.querySelectorAll(".search-item").forEach(el => {
      el.addEventListener("click", () => {
        const idx = Number(el.dataset.idx);
        navigate(currentResults[idx]);
      });
    });
  }

  function handleKeyNavigation(e) {
    if (e.key === "Escape") {
      closeSearch();
      return;
    }

    if (currentResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % currentResults.length;
      updateActiveItem();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + currentResults.length) % currentResults.length;
      updateActiveItem();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < currentResults.length) {
        navigate(currentResults[activeIndex]);
      }
    }
  }

  function updateActiveItem() {
    const list = document.getElementById("global-search-results");
    if (!list) return;
    const items = list.querySelectorAll(".search-item");
    items.forEach((el, idx) => {
      el.classList.toggle("active", idx === activeIndex);
      if (idx === activeIndex) el.scrollIntoView({ block: "nearest" });
    });
  }

  function navigate(item) {
    if (!item || !item.url) return;
    closeSearch();
    location.href = item.url;
  }

  // Global hotkey
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });

  window.openGlobalSearch = openSearch;
  window.closeGlobalSearch = closeSearch;
})();
