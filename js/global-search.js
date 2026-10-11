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
  let dataLoadPromise = null;
  let dataLoadState = "idle";
  let dataLoadFailures = [];
  let returnFocusTo = null;
  let backgroundInertState = [];

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
          <label class="search-field">
            <span class="search-input-label">Search</span>
            <input id="global-search-input" type="search" placeholder="Search Pokémon, moves, abilities..." autocomplete="off" aria-describedby="global-search-status">
          </label>
          <button class="search-close-btn" id="search-close-btn" type="button" aria-label="Close search">✕</button>
        </div>
        <ul id="global-search-results" class="search-results-list"></ul>
        <p id="global-search-status" class="search-empty" role="status" aria-live="polite"></p>
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
    overlay.addEventListener("keydown", handleDialogKeydown);
    overlay.querySelector("#global-search-status").addEventListener("click", e => {
      if (e.target.closest("#global-search-retry")) {
        input.focus();
        loadData();
        renderSearchQuery();
      }
    });
  }

  function showSearchStatus(message, retry = false) {
    const status = document.getElementById("global-search-status");
    if (!status) return;
    status.replaceChildren(document.createTextNode(message));
    if (retry) {
      const button = document.createElement("button");
      button.id = "global-search-retry";
      button.className = "btn btn-paper";
      button.type = "button";
      button.textContent = "Retry";
      status.append(" ", button);
    }
  }

  function loadData() {
    if (dataLoadPromise) return dataLoadPromise;
    if (dataLoadState === "ready") return Promise.resolve([]);

    dataLoadState = "loading";
    const loaders = [
      async () => {
        if (pokemonCache) return;
        if (window.ALL_SPECIES && window.ALL_SPECIES.length === 1025) {
          pokemonCache = window.ALL_SPECIES;
          return;
        }
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
        if (!resp.ok) throw new Error("Pokémon index unavailable");
        const data = await resp.json();
        pokemonCache = (data.results || []).map((p, idx) => ({ id: idx + 1, name: p.name }));
      },
      async () => {
        if (movesCache) return;
        const resp = await fetch("https://pokeapi.co/api/v2/move?limit=950");
        if (!resp.ok) throw new Error("Move index unavailable");
        const data = await resp.json();
        movesCache = (data.results || []).map(m => m.name);
      },
      async () => {
        if (abilitiesCache) return;
        const resp = await fetch("https://pokeapi.co/api/v2/ability?limit=400");
        if (!resp.ok) throw new Error("Ability index unavailable");
        const data = await resp.json();
        abilitiesCache = (data.results || []).map(a => a.name);
      }
    ];

    showSearchStatus("Loading search records…");
    dataLoadPromise = Promise.all(loaders.map(async (loader, idx) => {
      try {
        await loader();
        return null;
      } catch (_) {
        return ["Pokémon", "moves", "abilities"][idx];
      }
    })).then(failures => {
      dataLoadFailures = failures.filter(Boolean);
      dataLoadState = dataLoadFailures.length ? "partial" : "ready";
      if (document.getElementById("search-overlay") && !document.getElementById("search-overlay").hidden) {
        renderSearchQuery();
      }
      return dataLoadFailures;
    }).finally(() => {
      dataLoadPromise = null;
    });
    return dataLoadPromise;
  }

  function openSearch() {
    createSearchDOM();
    const overlay = document.getElementById("search-overlay");
    const input = document.getElementById("global-search-input");
    if (!overlay || !input) return;

    if (!overlay.hidden) return;
    returnFocusTo = document.activeElement;
    overlay.hidden = false;
    setBackgroundInert(true);
    input.value = "";
    input.focus();
    renderResults([]);
    loadData();
    renderSearchQuery();
  }

  function closeSearch() {
    const overlay = document.getElementById("search-overlay");
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    activeIndex = -1;
    currentResults = [];
    setBackgroundInert(false);
    const focusTarget = returnFocusTo;
    returnFocusTo = null;
    if (focusTarget?.isConnected && typeof focusTarget.focus === "function") focusTarget.focus();
  }

  function setBackgroundInert(inert) {
    const overlay = document.getElementById("search-overlay");
    if (inert) {
      backgroundInertState = [...document.body.children]
        .filter(node => node !== overlay)
        .map(node => ({ node, wasInert: node.inert }));
      backgroundInertState.forEach(({ node }) => { node.inert = true; });
      return;
    }
    backgroundInertState.forEach(({ node, wasInert }) => {
      if (node.isConnected) node.inert = wasInert;
    });
    backgroundInertState = [];
  }

  function handleDialogKeydown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      closeSearch();
      return;
    }
    if (e.key !== "Tab") return;

    const overlay = document.getElementById("search-overlay");
    const focusable = [...overlay.querySelectorAll('input:not([disabled]), button:not([disabled]), a[href]')];
    if (!focusable.length) {
      e.preventDefault();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && (document.activeElement === first || !overlay.contains(document.activeElement))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && (document.activeElement === last || !overlay.contains(document.activeElement))) {
      e.preventDefault();
      first.focus();
    }
  }

  function handleSearch() {
    renderSearchQuery();
  }

  function renderSearchQuery() {
    const q = document.getElementById("global-search-input")?.value.trim().toLowerCase() || "";
    if (q.length < 2) {
      renderResults([]);
      showSearchStatus("Enter at least 2 characters to search.");
      return;
    }

    if (dataLoadState === "loading" || dataLoadState === "idle") {
      renderResults([]);
      showSearchStatus("Loading search records…");
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
    if (results.length) {
      showSearchStatus(
        `${results.length} results. ${dataLoadFailures.length ? "Some search records could not be loaded." : ""}`.trim(),
        dataLoadFailures.length > 0
      );
    } else if (dataLoadFailures.length) {
      showSearchStatus("Search is incomplete because some records could not be loaded.", true);
    } else {
      showSearchStatus("No matching records found.");
    }
  }

  function renderResults(results) {
    currentResults = results;
    activeIndex = results.length > 0 ? 0 : -1;
    const list = document.getElementById("global-search-results");
    if (!list) return;
    if (list.contains(document.activeElement)) {
      document.getElementById("global-search-input")?.focus();
    }

    list.innerHTML = results.map((item, idx) => `
      <li><a class="search-item ${idx === activeIndex ? 'active' : ''}" data-idx="${idx}" href="${item.url}" ${idx === activeIndex ? 'aria-current="true"' : ""}>
        <span class="search-item-title">${item.title}</span>
        <span class="search-item-tag ${item.type.toLowerCase()}">${item.tag}</span>
      </a></li>
    `).join("");
  }

  function handleKeyNavigation(e) {
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
      if (idx === activeIndex) {
        el.setAttribute("aria-current", "true");
        const listBox = list.getBoundingClientRect();
        const itemBox = el.getBoundingClientRect();
        if (itemBox.top < listBox.top) list.scrollTop -= listBox.top - itemBox.top;
        else if (itemBox.bottom > listBox.bottom) list.scrollTop += itemBox.bottom - listBox.bottom;
      } else {
        el.removeAttribute("aria-current");
      }
    });
    const active = currentResults[activeIndex];
    if (active) {
      const notice = `Result ${activeIndex + 1} of ${currentResults.length}: ${active.title}.`;
      showSearchStatus(
        `${notice} ${dataLoadFailures.length ? "Some search records could not be loaded." : ""}`.trim(),
        dataLoadFailures.length > 0
      );
    }
  }

  function navigate(item) {
    if (!item || !item.url) return;
    closeSearch();
    location.href = item.url;
  }

  // Global hotkey
  document.addEventListener("keydown", (e) => {
    if (e.defaultPrevented) return;
    const overlay = document.getElementById("search-overlay");
    if (overlay && !overlay.hidden) return;
    const otherModalOpen = [...document.querySelectorAll('dialog[open], [role="dialog"][aria-modal="true"]')]
      .some(modal => modal !== overlay && !modal.hidden && modal.getAttribute("aria-hidden") !== "true");
    if (otherModalOpen) return;
    if (/(?:^|\/)(?:pokedex|lineup)\.html$/.test(location.pathname)) return;
    if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });

  function revealCurrentNavLink() {
    const current = document.querySelector(".site-bar nav [aria-current='page']");
    const nav = current?.closest("nav");
    if (!current || !nav) return;
    const navBox = nav.getBoundingClientRect();
    const linkBox = current.getBoundingClientRect();
    if (linkBox.left < navBox.left) nav.scrollLeft -= navBox.left - linkBox.left;
    else if (linkBox.right > navBox.right) nav.scrollLeft += linkBox.right - navBox.right;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", revealCurrentNavLink, { once: true });
  } else {
    revealCurrentNavLink();
  }

  window.openGlobalSearch = openSearch;
  window.closeGlobalSearch = closeSearch;
})();
