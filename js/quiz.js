// ==========================================================================
// TCG BOOSTER PACK LAB (Physical 10-card pack simulator & collection binder)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // DOM References
  const setSelect = document.getElementById("pack-set-select");
  const openTriggerBtn = document.getElementById("pack-open-trigger-btn");
  const packStage = document.getElementById("pack-stage");
  const sealedView = document.getElementById("pack-sealed-view");
  const openedView = document.getElementById("pack-opened-view");
  const foilPack = document.getElementById("pack-foil-pack");
  const cardsGrid = document.getElementById("pack-cards-grid");
  const loadingOverlay = document.getElementById("pack-loading-overlay");
  const loadingMsg = document.getElementById("pack-loading-msg");

  const statPacksOpened = document.getElementById("stat-packs-opened");
  const statCardsCollected = document.getElementById("stat-cards-collected");
  const packSetMeta = document.getElementById("pack-set-meta");
  const featuredChipsWrap = document.getElementById("pack-featured-chips");

  const packCoverImg = document.getElementById("pack-cover-img");
  const foilSeriesTag = document.getElementById("foil-series-tag");
  const foilLogoImg = document.getElementById("foil-logo-img");
  const foilMascotImg = document.getElementById("foil-mascot-img");
  const foilSymbolImg = document.getElementById("foil-symbol-img");
  const foilTitle = document.getElementById("foil-title");
  const foilGraphicImg = document.getElementById("foil-graphic-img");

  const packAgainBtn = document.getElementById("pack-again-btn");
  const packRevealAllBtn = document.getElementById("pack-reveal-all-btn");
  const packToggleBinderBtn = document.getElementById("pack-toggle-binder-btn");

  const binderSection = document.getElementById("pack-binder-section");
  const binderHeader = document.getElementById("pack-binder-header");
  const binderCountBadge = document.getElementById("binder-count-badge");
  const binderGrid = document.getElementById("pack-binder-grid");
  const binderFilters = document.querySelectorAll(".pack-binder-filters .chip");

  const tcgModal = document.getElementById("tcg-modal");
  const tcgModalImg = document.getElementById("tcg-modal-img");
  const tcgModalName = document.getElementById("tcg-modal-name");
  const tcgModalMeta = document.getElementById("tcg-modal-meta");
  const tcgModalCloseBtn = document.getElementById("tcg-modal-close-btn");

  // In-memory cache for fetched card sets
  const cardSetCache = new Map();

  // Known metadata for featured sets
  const SET_PRESETS = {
    "me55": {
      name: "30th Celebration",
      series: "Mega Evolution",
      logo: "https://images.scrydex.com/pokemon/me55-logo/logo",
      symbol: "https://images.scrydex.com/pokemon/me55-symbol/symbol",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      color: "linear-gradient(180deg, #18283d 0%, #111f30 40%, #0a1420 100%)",
      total: 161,
      tag: "30th ANNIV · 2026"
    },
    "me55c": {
      name: "30th Celebration: Classic",
      series: "Mega Evolution",
      logo: "https://images.scrydex.com/pokemon/me55-logo/logo",
      symbol: "https://images.scrydex.com/pokemon/me55-symbol/symbol",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      color: "linear-gradient(180deg, #3d1c1c 0%, #2a1212 40%, #160808 100%)",
      total: 30,
      tag: "CLASSIC"
    },
    "sv3pt5": {
      name: "Pokémon 151",
      series: "Scarlet & Violet",
      logo: "https://images.pokemontcg.io/sv3pt5/logo.png",
      symbol: "https://images.pokemontcg.io/sv3pt5/symbol.png",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      color: "linear-gradient(180deg, #173852 0%, #10293d 40%, #0a1a26 100%)",
      total: 207,
      tag: "151 FILE"
    },
    "base1": {
      name: "Base Set (1999)",
      series: "Base",
      logo: "https://images.pokemontcg.io/base1/logo.png",
      symbol: "https://images.pokemontcg.io/base1/symbol.png",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      color: "linear-gradient(180deg, #1e3a54 0%, #142a3d 40%, #0c1a26 100%)",
      total: 102,
      tag: "VINTAGE"
    },
    "sv8pt5": {
      name: "Prismatic Evolutions",
      series: "Scarlet & Violet",
      logo: "https://images.pokemontcg.io/sv8pt5/logo.png",
      symbol: "https://images.pokemontcg.io/sv8pt5/symbol.png",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
      color: "linear-gradient(180deg, #351a44 0%, #251230 40%, #160a1c 100%)",
      total: 180,
      tag: "EEVEE"
    },
    "swsh7": {
      name: "Evolving Skies",
      series: "Sword & Shield",
      logo: "https://images.pokemontcg.io/swsh7/logo.png",
      symbol: "https://images.pokemontcg.io/swsh7/symbol.png",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
      color: "linear-gradient(180deg, #193e32 0%, #122c24 40%, #0a1a15 100%)",
      total: 237,
      tag: "DRAGONS"
    }
  };

  // State
  let currentSetId = localStorage.getItem("file151.tcg_current_set") || "me55";
  let currentPackCards = [];
  let isTearing = false;

  // Sound Synth Helpers (AudioContext)
  function playSynthSound(type) {
    const isSoundOn = localStorage.getItem("file151.sound") === "on";
    if (!isSoundOn) return;

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      if (type === "tear") {
        // White noise burst for foil tear
        const bufferSize = ctx.sampleRate * 0.25;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = 1800;
        noise.connect(filter);
        filter.connect(ctx.destination);
        noise.start();
      } else if (type === "flip") {
        // Soft paper card flip click
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(480, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === "hit") {
        // High rare shimmer chime
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
          gain.gain.setValueAtTime(0.15, ctx.currentTime + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.4);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.08);
          osc.stop(ctx.currentTime + idx * 0.08 + 0.4);
        });
      }
    } catch (_) {}
  }

  // LocalStorage Binder Store
  function getBinder() {
    try {
      return JSON.parse(localStorage.getItem("file151.tcg_binder") || "{}");
    } catch (_) {
      return {};
    }
  }

  function saveBinderCard(card) {
    const binder = getBinder();
    if (!binder[card.id]) {
      binder[card.id] = {
        id: card.id,
        name: card.name,
        number: card.number,
        rarity: card.rarity || "Common",
        setId: currentSetId,
        imageSmall: getCardImage(card, "small"),
        imageLarge: getCardImage(card, "large"),
        count: 1
      };
    } else {
      binder[card.id].count = (binder[card.id].count || 1) + 1;
    }
    localStorage.setItem("file151.tcg_binder", JSON.stringify(binder));
    return binder;
  }

  function getStats() {
    try {
      return JSON.parse(localStorage.getItem("file151.tcg_stats") || '{"packsOpened":0}');
    } catch (_) {
      return { packsOpened: 0 };
    }
  }

  function incrementPacksOpened() {
    const stats = getStats();
    stats.packsOpened = (stats.packsOpened || 0) + 1;
    localStorage.setItem("file151.tcg_stats", JSON.stringify(stats));
    updateStatsDisplay();
  }

  function updateStatsDisplay() {
    const stats = getStats();
    const binder = getBinder();
    const uniqueCount = Object.keys(binder).length;

    if (statPacksOpened) statPacksOpened.textContent = stats.packsOpened || 0;
    if (statCardsCollected) statCardsCollected.textContent = uniqueCount;
    if (binderCountBadge) binderCountBadge.textContent = `${uniqueCount} Specimens`;
  }

  // Resolves image CDN reliably for both older pokemontcg.io and newer scrydex.com sets
  function getCardImage(card, size = "small") {
    if (card.images) {
      if (size === "large" && card.images.large) return card.images.large;
      if (card.images.small) return card.images.small;
    }
    // Fallback template
    return `https://images.pokemontcg.io/${currentSetId}/${card.number}.png`;
  }

  // Fetch or retrieve card set from memory cache / GitHub
  async function loadSetData(setId, isBackground = false) {
    if (cardSetCache.has(setId)) {
      return cardSetCache.get(setId);
    }

    if (!isBackground) {
      if (loadingOverlay) loadingOverlay.classList.add("is-active");
      if (loadingMsg) loadingMsg.textContent = `Fetching ${setId.toUpperCase()} expansion ledger...`;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);
      const url = `https://raw.githubusercontent.com/PokemonTCG/pokemon-tcg-data/master/cards/en/${setId}.json`;
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const cards = await res.json();
      cardSetCache.set(setId, cards);
      return cards;
    } catch (err) {
      console.warn("Failed to load set data:", err);
      // Minimal fallback so app never breaks
      const dummyCards = Array.from({ length: 50 }, (_, i) => ({
        id: `${setId}-${i + 1}`,
        number: String(i + 1),
        name: `Specimen #${i + 1}`,
        rarity: i < 30 ? "Common" : i < 45 ? "Uncommon" : "Rare",
        images: {
          small: `https://images.pokemontcg.io/${setId}/${i + 1}.png`,
          large: `https://images.pokemontcg.io/${setId}/${i + 1}_hires.png`
        }
      }));
      cardSetCache.set(setId, dummyCards);
      return dummyCards;
    } finally {
      if (!isBackground && loadingOverlay) {
        loadingOverlay.classList.remove("is-active");
      }
    }
  }

  // Authentic Physical Booster Pack Packaging artwork map
  const PACK_ART_MAP = {
    "me55": "assets/packs/me55.jpg",
    "me55c": "assets/packs/me55.jpg",
    "sv3pt5": "assets/packs/sv3pt5.jpg",
    "base1": "assets/packs/base1.jpg",
    "sv8pt5": "assets/packs/sv8pt5.jpg",
    "swsh7": "assets/packs/swsh7.jpg",
    "sv1": "assets/packs/sv1.jpg",
    "sv6": "assets/packs/sv6.jpg",
    "sv4pt5": "assets/packs/sv4pt5.jpg",
    "swsh12pt5": "assets/packs/swsh12pt5.jpg",
    "base2": "assets/packs/base2.jpg",
    "base3": "assets/packs/base3.jpg"
  };

  function getPackCoverArt(setId) {
    return PACK_ART_MAP[setId] || "assets/packs/sv3pt5.jpg";
  }

  // Update pack wrapper visual appearance based on selected set
  function updatePackAppearance(setId) {
    currentSetId = setId;
    localStorage.setItem("file151.tcg_current_set", setId);

    const preset = SET_PRESETS[setId] || {
      name: setId.toUpperCase(),
      series: "EXPANSION",
      symbol: "https://images.pokemontcg.io/sv3pt5/symbol.png",
      color: "linear-gradient(135deg, #1b354f 0%, #0d1e30 50%, #204163 100%)",
      total: "---"
    };

    if (packCoverImg) {
      packCoverImg.src = getPackCoverArt(setId);
      packCoverImg.alt = `${preset.name} Official Booster Pack Packaging`;
    }

    if (foilSeriesTag) foilSeriesTag.textContent = preset.series;
    if (foilTitle) foilTitle.textContent = preset.name;
    if (foilLogoImg && preset.logo) {
      foilLogoImg.src = preset.logo;
      foilLogoImg.alt = `${preset.name} Logo`;
    }
    if (foilMascotImg && preset.coverArt) {
      foilMascotImg.src = preset.coverArt;
      foilMascotImg.alt = `${preset.name} Mascot`;
    }
    if (foilSymbolImg && preset.symbol) {
      foilSymbolImg.src = preset.symbol;
      foilSymbolImg.alt = `${preset.name} Symbol`;
    }
    if (foilGraphicImg && preset.symbol) foilGraphicImg.src = preset.symbol;

    const foilBody = document.querySelector(".pack-foil-body");
    if (foilBody && preset.color) {
      foilBody.style.background = preset.color;
    }

    if (packSetMeta) {
      packSetMeta.textContent = `${preset.name} · ${preset.total} Cards`;
    }

    // Update select element if different
    if (setSelect && setSelect.value !== setId) {
      setSelect.value = setId;
    }

    // Update featured chip active states using native [data-on]
    document.querySelectorAll("#pack-featured-chips .chip").forEach(btn => {
      if (btn.dataset.setId === setId) {
        btn.setAttribute("data-on", "");
      } else {
        btn.removeAttribute("data-on");
      }
    });

    const statTotal = document.getElementById("pack-set-meta-total");
    const statName = document.getElementById("pack-set-meta-name");
    if (statTotal) statTotal.textContent = preset.total;
    if (statName) statName.textContent = preset.name.toUpperCase();

    renderBinderGrid();
    // Prefetch set data silently in background
    loadSetData(setId, true).catch(() => {});
  }

  // Physical 10-card slot distribution algorithm
  function generatePack(cards) {
    if (!cards || cards.length === 0) return [];

    // Bucket cards by rarity category
    const buckets = {
      common: [],
      uncommon: [],
      rare: [],
      holoDouble: [],
      illustration: [],
      ultra: [],
      sar: [],
      hyper: []
    };

    cards.forEach(card => {
      const r = (card.rarity || "").toLowerCase();
      if (r.includes("special illustration") || r.includes("sar")) {
        buckets.sar.push(card);
      } else if (r.includes("hyper") || r.includes("futuristic") || r.includes("gold")) {
        buckets.hyper.push(card);
      } else if (r.includes("ultra") || r.includes("secret") || r.includes("ex") || r.includes("vmax") || r.includes("vstar")) {
        buckets.ultra.push(card);
      } else if (r.includes("illustration rare")) {
        buckets.illustration.push(card);
      } else if (r.includes("double rare") || r.includes("pikachu rare") || r.includes("holo")) {
        buckets.holoDouble.push(card);
      } else if (r.includes("rare")) {
        buckets.rare.push(card);
      } else if (r.includes("uncommon")) {
        buckets.uncommon.push(card);
      } else {
        buckets.common.push(card);
      }
    });

    // Track card appearances to prevent excessive duplicates (max 2 copies per card)
    const cardCountMap = new Map();

    function pickCapped(pool, fallbackPool = cards, maxCap = 2) {
      const primary = (pool && pool.length > 0) ? pool : fallbackPool;
      const eligible = primary.filter(c => (cardCountMap.get(c.id) || 0) < maxCap);

      let chosen = null;
      if (eligible.length > 0) {
        chosen = eligible[Math.floor(Math.random() * eligible.length)];
      } else {
        const fallbackEligible = fallbackPool.filter(c => (cardCountMap.get(c.id) || 0) < maxCap);
        if (fallbackEligible.length > 0) {
          chosen = fallbackEligible[Math.floor(Math.random() * fallbackEligible.length)];
        } else {
          chosen = primary[Math.floor(Math.random() * primary.length)];
        }
      }

      if (chosen && chosen.id) {
        cardCountMap.set(chosen.id, (cardCountMap.get(chosen.id) || 0) + 1);
      }
      return chosen;
    }

    const pack = [];

    // Slot 1-5: 5 Common Cards
    for (let i = 0; i < 5; i++) {
      pack.push({ card: pickCapped(buckets.common, cards), foilType: "normal", slot: i + 1 });
    }

    // Slot 6-8: 3 Uncommon Cards
    for (let i = 0; i < 3; i++) {
      pack.push({ card: pickCapped(buckets.uncommon, buckets.common), foilType: "normal", slot: i + 6 });
    }

    // Slot 9: Reverse Holo / Foil Slot (70% UC foil, 25% Rare foil, 5% Illustration Rare)
    const roll9 = Math.random() * 100;
    if (roll9 < 70) {
      pack.push({ card: pickCapped(buckets.uncommon, cards), foilType: "reverse-foil", slot: 9 });
    } else if (roll9 < 95) {
      pack.push({ card: pickCapped(buckets.rare, buckets.uncommon), foilType: "reverse-foil", slot: 9 });
    } else {
      pack.push({ card: pickCapped(buckets.illustration, buckets.rare), foilType: "illustration", slot: 9 });
    }

    // Slot 10: HIT SLOT (Guaranteed Rare / Ultra / SAR)
    const roll10 = Math.random() * 100;
    let hitCard = null;
    let hitFoil = "rare";

    if (roll10 < 50 && buckets.rare.length > 0) {
      hitCard = pickCapped(buckets.rare);
      hitFoil = "rare";
    } else if (roll10 < 70 && (buckets.holoDouble.length > 0 || buckets.rare.length > 0)) {
      hitCard = pickCapped(buckets.holoDouble, buckets.rare);
      hitFoil = "holo";
    } else if (roll10 < 85 && (buckets.illustration.length > 0 || buckets.rare.length > 0)) {
      hitCard = pickCapped(buckets.illustration, buckets.rare);
      hitFoil = "illustration";
    } else if (roll10 < 95 && (buckets.ultra.length > 0 || buckets.rare.length > 0)) {
      hitCard = pickCapped(buckets.ultra, buckets.rare);
      hitFoil = "ultra";
    } else if (roll10 < 99 && (buckets.sar.length > 0 || buckets.ultra.length > 0)) {
      hitCard = pickCapped(buckets.sar, buckets.ultra);
      hitFoil = "sar";
    } else {
      // Hyper Rare / Jackpot
      hitCard = pickCapped(buckets.hyper, buckets.sar);
      hitFoil = "hyper";
    }

    pack.push({ card: hitCard || pickCapped(cards), foilType: hitFoil, slot: 10 });

    return pack;
  }

  // Tearing and opening flow
  async function openBoosterPack() {
    if (isTearing) return;
    isTearing = true;

    // Start tear animation on the pack
    if (foilPack) {
      foilPack.classList.add("is-tearing");
      playSynthSound("tear");
    }

    // Load cards in parallel
    const cards = await loadSetData(currentSetId);
    currentPackCards = generatePack(cards);

    incrementPacksOpened();

    // After tear animation finishes, switch views
    setTimeout(() => {
      if (sealedView) sealedView.style.display = "none";
      if (openedView) openedView.style.display = "block";
      if (foilPack) foilPack.classList.remove("is-tearing");
      isTearing = false;

      renderCardsGrid(currentPackCards);
    }, 600);
  }

  // Render the 10 cards in grid
  function renderCardsGrid(packItems) {
    if (!cardsGrid) return;
    cardsGrid.innerHTML = "";

    packItems.forEach((item, index) => {
      const card = item.card;
      const foilType = item.foilType;

      const cardEl = document.createElement("div");
      cardEl.className = "tcg-card-item";
      cardEl.dataset.index = index;

      // Glow highlights for big hits
      if (foilType === "sar" || foilType === "hyper") {
        cardEl.classList.add("hit-glow-rainbow");
      } else if (foilType === "ultra" || foilType === "illustration") {
        cardEl.classList.add("hit-glow-gold");
      }

      // Rarity badge
      let badgeHtml = "";
      const rarity = card.rarity || "";
      if (rarity.toLowerCase().includes("special illustration") || rarity.toLowerCase().includes("sar")) {
        badgeHtml = `<span class="tcg-card-badge badge-sar">SAR</span>`;
      } else if (rarity.toLowerCase().includes("ultra") || rarity.toLowerCase().includes("ex")) {
        badgeHtml = `<span class="tcg-card-badge badge-ultra">ULTRA</span>`;
      } else if (rarity.toLowerCase().includes("illustration")) {
        badgeHtml = `<span class="tcg-card-badge badge-ultra">IR</span>`;
      } else if (rarity.toLowerCase().includes("rare")) {
        badgeHtml = `<span class="tcg-card-badge badge-rare">RARE</span>`;
      }

      const imgUrl = getCardImage(card, "small");

      cardEl.innerHTML = `
        <div class="tcg-card-inner">
          <div class="tcg-card-back">
            <img src="assets/card-back.jpg" class="card-back-img" alt="Pokémon Card Back">
            <span class="card-slot-num">#${item.slot}</span>
          </div>
          <div class="tcg-card-front">
            ${badgeHtml}
            <img src="${imgUrl}" alt="${card.name}" loading="lazy">
          </div>
        </div>
      `;

      // Flip on click
      cardEl.addEventListener("click", () => {
        flipCard(cardEl, item);
      });

      cardsGrid.appendChild(cardEl);
    });
  }

  // Flip an individual card
  function flipCard(cardEl, item) {
    if (cardEl.classList.contains("is-flipped")) {
      // If already flipped, clicking opens high-res preview modal
      openCardModal(item.card);
      return;
    }

    cardEl.classList.add("is-flipped");
    playSynthSound("flip");

    if (item.foilType === "sar" || item.foilType === "hyper" || item.foilType === "ultra") {
      playSynthSound("hit");
    }

    // Save to collection binder
    saveBinderCard(item.card);
    updateStatsDisplay();
  }

  // Reveal all cards with staggering
  function revealAllCards() {
    const cardEls = document.querySelectorAll(".tcg-card-item:not(.is-flipped)");
    cardEls.forEach((cardEl, idx) => {
      setTimeout(() => {
        const itemIdx = parseInt(cardEl.dataset.index, 10);
        const item = currentPackCards[itemIdx];
        if (item && !cardEl.classList.contains("is-flipped")) {
          flipCard(cardEl, item);
        }
      }, idx * 100);
    });
  }

  // Reset stage to sealed pack view
  function resetToSealedPack() {
    if (openedView) openedView.style.display = "none";
    if (sealedView) sealedView.style.display = "flex";
    if (cardsGrid) cardsGrid.innerHTML = "";
    currentPackCards = [];
  }

  // Card detail high-res modal
  function openCardModal(card) {
    if (!tcgModal || !card) return;
    const hiresUrl = getCardImage(card, "large");
    if (tcgModalImg) {
      tcgModalImg.src = hiresUrl;
      tcgModalImg.alt = card.name;
    }
    if (tcgModalName) tcgModalName.textContent = card.name;
    if (tcgModalMeta) {
      tcgModalMeta.textContent = `#${card.number} · ${card.rarity || "Standard"} · ${card.artist || "Official"}`;
    }
    tcgModal.classList.add("is-active");
  }

  function closeCardModal() {
    if (tcgModal) tcgModal.classList.remove("is-active");
  }

  // Binder Grid rendering with filters
  function renderBinderGrid(filter = "all") {
    if (!binderGrid) return;
    const binder = getBinder();
    const cards = Object.values(binder).filter(c => c.setId === currentSetId);

    binderGrid.innerHTML = "";

    if (cards.length === 0) {
      binderGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 2rem; text-align: center; color: var(--ink-soft); font-family: var(--font-num);">
          No specimens collected from this expansion yet. Tear open a pack to begin your ledger!
        </div>
      `;
      return;
    }

    const filtered = cards.filter(c => {
      if (filter === "all") return true;
      const r = (c.rarity || "").toLowerCase();
      if (filter === "sar") return r.includes("special illustration") || r.includes("sar");
      if (filter === "ultra") return r.includes("ultra") || r.includes("ex") || r.includes("vmax");
      if (filter === "rare") return r.includes("rare");
      if (filter === "uncommon") return r.includes("uncommon");
      if (filter === "common") return r.includes("common");
      return true;
    });

    filtered.forEach(c => {
      const itemEl = document.createElement("div");
      itemEl.className = "binder-thumb-item";
      itemEl.title = `${c.name} (#${c.number}) - Owned: x${c.count || 1}`;
      itemEl.innerHTML = `
        <img src="${c.imageSmall || getCardImage(c, 'small')}" alt="${c.name}" loading="lazy">
        <span class="binder-thumb-count">x${c.count || 1}</span>
      `;
      itemEl.addEventListener("click", () => {
        openCardModal(c);
      });
      binderGrid.appendChild(itemEl);
    });
  }

  // Event Listeners
  if (foilPack) {
    foilPack.addEventListener("click", openBoosterPack);
  }

  if (openTriggerBtn) {
    openTriggerBtn.addEventListener("click", openBoosterPack);
  }

  if (packAgainBtn) {
    packAgainBtn.addEventListener("click", () => {
      resetToSealedPack();
      openBoosterPack();
    });
  }

  if (packRevealAllBtn) {
    packRevealAllBtn.addEventListener("click", revealAllCards);
  }

  if (packToggleBinderBtn) {
    packToggleBinderBtn.addEventListener("click", () => {
      if (binderSection) {
        binderSection.classList.add("is-open");
        binderSection.scrollIntoView({ behavior: "smooth" });
        renderBinderGrid();
      }
    });
  }

  if (binderHeader) {
    binderHeader.addEventListener("click", () => {
      if (binderSection) {
        binderSection.classList.toggle("is-open");
        if (binderSection.classList.contains("is-open")) {
          renderBinderGrid();
        }
      }
    });
  }

  // Filter chips in binder
  binderFilters.forEach(chip => {
    chip.addEventListener("click", () => {
      binderFilters.forEach(c => c.removeAttribute("data-on"));
      chip.setAttribute("data-on", "");
      renderBinderGrid(chip.dataset.filter);
    });
  });

  // Featured Chips
  if (featuredChipsWrap) {
    featuredChipsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      const setId = btn.dataset.setId;
      if (setId && setId !== currentSetId) {
        resetToSealedPack();
        updatePackAppearance(setId);
      }
    });
  }

  // Select dropdown change
  if (setSelect) {
    setSelect.addEventListener("change", () => {
      const setId = setSelect.value;
      if (setId && setId !== currentSetId) {
        resetToSealedPack();
        updatePackAppearance(setId);
      }
    });
  }

  // Modal close handlers
  if (tcgModalCloseBtn) {
    tcgModalCloseBtn.addEventListener("click", closeCardModal);
  }
  if (tcgModal) {
    tcgModal.addEventListener("click", (e) => {
      if (e.target === tcgModal) closeCardModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && tcgModal?.classList.contains("is-active")) {
      closeCardModal();
    }
  });

  // Initial Load
  updateStatsDisplay();
  updatePackAppearance(currentSetId);
  loadSetData(currentSetId, true).catch(() => {});
});
