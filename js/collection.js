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

  regionRoot.innerHTML = window.REGIONS.map(region => {
    const count = seen.filter(id => id >= region.start && id <= region.end).length;
    const percentage = region.count ? Math.min(100, (count / region.count) * 100).toFixed(1) : 0;

    return `
      <article class="collection-region">
        <div class="region-head">
          <a href="pokedex.html?region=${region.slug}" style="color:var(--ink); font-weight:700; text-decoration:none;">${region.name}</a>
          <span style="color:var(--mark); font-variant-numeric: tabular-nums;">
            ${count} / ${region.count} (${percentage}%)
          </span>
        </div>
        <div class="progress">
          <div style="width:${percentage}%"></div>
        </div>
      </article>
    `;
  }).join("");

  // Achievements Badge System
  const BADGES = [
    {
      id: "first_seen",
      name: "First Contact",
      icon: "👁",
      desc: "Register your first specimen in the seen archive.",
      test: (c) => c.seen >= 1
    },
    {
      id: "ten_seen",
      name: "Curious Researcher",
      icon: "🔬",
      desc: "Observe and register 10 unique Pokémon specimens.",
      test: (c) => c.seen >= 10
    },
    {
      id: "fifty_seen",
      name: "Field Biologist",
      icon: "📋",
      desc: "Expand your catalog to 50 observed specimens.",
      test: (c) => c.seen >= 50
    },
    {
      id: "hundred_seen",
      name: "Centurion",
      icon: "💯",
      desc: "Catalog 100 Pokémon across any regional territories.",
      test: (c) => c.seen >= 100
    },
    {
      id: "kanto_complete",
      name: "Kanto Master",
      icon: "🏆",
      desc: "Catalog all original 151 Kanto specimens (#001–#151).",
      test: (c) => c.kantoSeen >= 151
    },
    {
      id: "all_seen",
      name: "National Archivist",
      icon: "🌟",
      desc: "Complete the master national archive of 1,025 specimens.",
      test: (c) => c.seen >= 1025
    },
    {
      id: "first_fav",
      name: "First Favorite",
      icon: "⭐",
      desc: "Star your very first favorite specimen.",
      test: (c) => c.favorites >= 1
    },
    {
      id: "ten_favs",
      name: "Curator",
      icon: "🎖",
      desc: "Curate a showcase of 10 or more favorited specimens.",
      test: (c) => c.favorites >= 10
    },
    {
      id: "belt_full",
      name: "Full Belt",
      icon: "🎒",
      desc: "Equip a full team of 6 battle-ready specimens on your belt.",
      test: (c) => c.belt >= 6
    },
    {
      id: "all_types_seen",
      name: "Type Collector",
      icon: "🌈",
      desc: "Encounter and register at least 18 diverse specimens.",
      test: (c) => c.seen >= 18
    },
    {
      id: "quiz_streak_5",
      name: "Quiz Ace",
      icon: "🧠",
      desc: "Achieve a silhouette quiz streak of 5 correct guesses.",
      test: (c) => c.quizBest >= 5
    },
    {
      id: "quiz_streak_10",
      name: "Quiz Master",
      icon: "👑",
      desc: "Achieve a silhouette quiz streak of 10 correct guesses.",
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
        <article class="badge-card ${unlocked ? 'earned' : 'locked'}">
          <div style="font-size:2rem; line-height:1; margin-bottom:0.5rem;">${unlocked ? b.icon : '🔒'}</div>
          <h4 style="font-family:var(--font-ui); font-size:1rem; font-weight:700; color:${unlocked ? 'var(--ink)' : 'var(--ink-soft)'}; margin:0 0 0.25rem;">
            ${unlocked ? b.name : 'Locked Badge'}
          </h4>
          <p style="font-size:0.8125rem; color:var(--ink-soft); margin:0; line-height:1.4;">
            ${b.desc}
          </p>
          <div style="margin-top:0.6rem; font-family:var(--font-num); font-size:0.6875rem; text-transform:uppercase; letter-spacing:0.04em; color:${unlocked ? 'var(--mark)' : 'var(--line)'}; font-weight:700;">
            ${unlocked ? '✓ UNLOCKED' : 'LOCKED'}
          </div>
        </article>
      `;
    }).join("");

    if (summaryBadgeEl) {
      summaryBadgeEl.textContent = `${unlockedCount} / ${BADGES.length} UNLOCKED`;
    }
  }
});
