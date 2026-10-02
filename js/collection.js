document.addEventListener("DOMContentLoaded", () => {
  const seen = window.store?.seen?.() || [];
  const favorites = window.store?.favoriteIds?.() || [];
  const belt = window.store?.belt?.() || [];

  const seenCount = seen.length;

  const seenEl = document.getElementById("seen-count");
  if (seenEl) seenEl.textContent = seenCount;

  const favEl = document.getElementById("favorite-count");
  if (favEl) favEl.textContent = favorites.length;

  const beltEl = document.getElementById("belt-count");
  if (beltEl) beltEl.textContent = belt.length;

  const percent = Math.min(100, (seenCount / 1025) * 100).toFixed(1);

  const natProg = document.getElementById("national-progress");
  if (natProg) natProg.style.width = `${percent}%`;

  const natText = document.getElementById("national-text");
  if (natText) natText.textContent = `${seenCount} / 1025 Pokémon seen (${percent}%)`;

  const regionRoot = document.getElementById("region-progress");
  if (!regionRoot || !window.REGIONS) return;

  const REGION_CODES = ["KTO-01", "JTO-02", "HOE-03", "SIN-04", "UNV-05", "KAL-06", "ALO-07", "GAL-08", "HIS-09", "PAL-10"];

  regionRoot.innerHTML = window.REGIONS.map((region, idx) => {
    const count = seen.filter(id => id >= region.start && id <= region.end).length;
    const percentage = region.count ? Math.min(100, (count / region.count) * 100).toFixed(1) : 0;
    const code = REGION_CODES[idx] || `REG-${idx + 1}`;
    const mascotUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${region.preview}.png`;
    const spec = window.getSpeciesById ? window.getSpeciesById(region.preview) : null;
    const mascotName = spec ? spec.name : region.name;

    return `
      <article class="collection-region">
        <div class="region-card-top">
          <div>
            <span class="region-meta-tag">${code}</span>
            <h3 class="region-title"><a href="pokedex.html?region=${region.slug}" class="region-title-link">${region.name}</a></h3>
          </div>
          <img src="${mascotUrl}" alt="${mascotName}" class="region-mascot-art" loading="lazy" width="50" height="50">
        </div>
        <div class="region-data-row">
          <span class="region-stat">${count} / ${region.count}</span>
          <span class="region-rate">${percentage}% LOGGED</span>
        </div>
        <div class="progress calibrated-gauge" style="height:6px;">
          <div style="width:${percentage}%"></div>
        </div>
      </article>
    `;
  }).join("");

  // Belt Expedition Squad Showcase
  const beltGrid = document.getElementById("belt-roster-grid");
  if (beltGrid) {
    const beltCells = [];
    for (let i = 0; i < 6; i++) {
      const id = belt[i];
      if (id) {
        const spec = window.getSpeciesById ? window.getSpeciesById(id) : null;
        const name = spec ? spec.name : `#${id}`;
        const types = spec && spec.types ? spec.types.join(" · ") : "";
        const art = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
        beltCells.push(`
          <a href="pokemon.html?id=${id}" class="belt-specimen-card" title="Open #${id} ${name}">
            <span class="belt-slot-tag">SLOT 0${i + 1}</span>
            <div class="belt-art-wrap">
              <img src="${art}" alt="${name}" loading="lazy" class="belt-art">
            </div>
            <strong class="belt-specimen-name">${name}</strong>
            <span class="belt-specimen-num">#${String(id).padStart(3, "0")}</span>
            <span class="belt-specimen-type">${types}</span>
          </a>
        `);
      } else {
        beltCells.push(`
          <a href="pokedex.html" class="belt-specimen-card empty-slot" title="Deploy specimen from Dex">
            <span class="belt-slot-tag">SLOT 0${i + 1}</span>
            <div class="belt-art-wrap">
              <img src="assets/pokeball.png" alt="" class="empty-ball-ghost">
            </div>
            <strong class="belt-empty-title">+ Empty</strong>
            <span class="belt-empty-sub">Open Dex</span>
          </a>
        `);
      }
    }
    beltGrid.innerHTML = beltCells.join("");
  }

  // Priority Field Favorites Gallery
  const favGrid = document.getElementById("favorites-specimen-gallery");
  const favIndicator = document.getElementById("fav-count-indicator");
  if (favGrid) {
    if (favIndicator) {
      favIndicator.textContent = `${favorites.length} PINNED`;
    }
    if (favorites.length === 0) {
      favGrid.innerHTML = `
        <div class="favorites-empty-shelf">
          <div class="empty-shelf-ghosts">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png" alt="" class="ghost-mascot">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png" alt="" class="ghost-mascot">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png" alt="" class="ghost-mascot">
          </div>
          <div class="empty-shelf-copy">
            <strong>No Priority Specimens Flagged</strong>
            <p>Star key specimens in the Pokédex to pin them onto this master research board.</p>
          </div>
          <a href="pokedex.html" class="button" style="text-decoration:none;">Open Dex Archive</a>
        </div>
      `;
    } else {
      favGrid.innerHTML = favorites.map(id => {
        const spec = window.getSpeciesById ? window.getSpeciesById(id) : null;
        const name = spec ? spec.name : `#${id}`;
        const art = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
        return `
          <a href="pokemon.html?id=${id}" class="fav-specimen-card" title="Open #${id} ${name}">
            <div class="fav-art-wrap">
              <img src="${art}" alt="${name}" loading="lazy" class="fav-art">
            </div>
            <strong class="fav-specimen-name">${name}</strong>
            <span class="fav-specimen-num">#${String(id).padStart(3, "0")}</span>
          </a>
        `;
      }).join("");
    }
  }

  // Field Proficiency Seals System (Dossier Technical Seals)
  const BADGES = [
    {
      id: "first_seen",
      code: "SEAL-01",
      name: "First Contact",
      desc: "Log first observed specimen in the archive ledger.",
      test: (c) => c.seen >= 1
    },
    {
      id: "ten_seen",
      code: "SEAL-10",
      name: "Field Surveyor",
      desc: "Catalog 10 distinct specimens in wild observation.",
      test: (c) => c.seen >= 10
    },
    {
      id: "fifty_seen",
      code: "SEAL-50",
      name: "Ecology Biologist",
      desc: "Record 50 specimen entries into the archive ledger.",
      test: (c) => c.seen >= 50
    },
    {
      id: "hundred_seen",
      code: "SEAL-100",
      name: "Centurion Scout",
      desc: "Catalog 100 specimens across surveyed territories.",
      test: (c) => c.seen >= 100
    },
    {
      id: "kanto_complete",
      code: "SEAL-KTO",
      name: "Kanto Complete",
      desc: "Register all 151 original Kanto specimens (#001–#151).",
      test: (c) => c.kantoSeen >= 151
    },
    {
      id: "all_seen",
      code: "SEAL-NAT",
      name: "Grand Archivist",
      desc: "Complete master record of 1,025 cataloged specimens.",
      test: (c) => c.seen >= 1025
    },
    {
      id: "first_fav",
      code: "SEAL-FAV1",
      name: "Field Marker",
      desc: "Star first priority specimen for targeted monitoring.",
      test: (c) => c.favorites >= 1
    },
    {
      id: "ten_favs",
      code: "SEAL-FAV10",
      name: "Archive Curator",
      desc: "Maintain 10 active priority specimens in the showcase.",
      test: (c) => c.favorites >= 10
    },
    {
      id: "belt_full",
      code: "SEAL-BLT6",
      name: "Equipped Squad",
      desc: "Prepare 6 active specimens on the tactical field belt.",
      test: (c) => c.belt >= 6
    },
    {
      id: "all_types_seen",
      code: "SEAL-TYP18",
      name: "Elemental Scope",
      desc: "Encounter specimens across all 18 elemental affinities.",
      test: (c) => c.seen >= 18
    },
    {
      id: "quiz_streak_5",
      code: "SEAL-SIL5",
      name: "Silhouette Adept",
      desc: "Identify 5 consecutive silhouette specimens in field quiz.",
      test: (c) => c.quizBest >= 5
    },
    {
      id: "quiz_streak_10",
      code: "SEAL-SIL10",
      name: "Master Examiner",
      desc: "Identify 10 consecutive silhouette specimens in field quiz.",
      test: (c) => c.quizBest >= 10
    }
  ];

  const badgeGrid = document.getElementById("badge-grid");
  const summaryBadgeEl = document.getElementById("badge-unlocked-summary");
  if (badgeGrid) {
    const kantoCount = seen.filter(id => id >= 1 && id <= 151).length;
    const quizBest = window.store?.quizBest?.() || 0;
    const ctx = {
      seen: seenCount,
      favorites: favorites.length,
      belt: belt.length,
      kantoSeen: kantoCount,
      quizBest: quizBest
    };

    let unlockedCount = 0;
    badgeGrid.innerHTML = BADGES.map(b => {
      const unlocked = b.test(ctx);
      if (unlocked) unlockedCount++;
      return `
        <article class="seal-card ${unlocked ? 'sealed' : 'unsealed'}">
          <div class="seal-mark">
            <span class="seal-serial">${b.code}</span>
            <span class="seal-status-icon">${unlocked ? '★' : '○'}</span>
          </div>
          <div class="seal-content">
            <h4 class="seal-title">${b.name}</h4>
            <p class="seal-desc">${b.desc}</p>
          </div>
          <div class="seal-verdict">
            ${unlocked ? 'VALIDATED & SEALED' : 'PENDING FIELD RECORD'}
          </div>
        </article>
      `;
    }).join("");

    if (summaryBadgeEl) {
      summaryBadgeEl.textContent = `${unlockedCount} / ${BADGES.length} VALIDATED`;
    }
  }
});
