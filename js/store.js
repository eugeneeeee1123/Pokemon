/**
 * 151 FILE — localStorage helpers
 * 腰带、看过、声音开关统一从这里读写。
 * 隐私模式或存储已满时 localStorage 会抛错，这里全部吞掉并回退到空值。
 */
(function (window) {
  const KEYS = { belt: "file151.belt", seen: "file151.seen", sound: "file151.sound", last: "file151.last", favorites: "file151.favorites", quizBest: "file151.quiz.best", quizTotal: "file151.quiz.total" };
  const MAX_BELT = 6;
  const MAX_ID = 1025;

  function readIds(key) {
    try {
      const raw = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(raw)
        ? raw.map(Number).filter((n) => Number.isInteger(n) && n > 0 && n <= MAX_ID)
        : [];
    } catch (_) {
      return [];
    }
  }

  function writeIds(key, ids) {
    try {
      localStorage.setItem(key, JSON.stringify(ids));
      return true;
    } catch (_) {
      return false;
    }
  }

  const store = {
    MAX_BELT,
    belt: () => readIds(KEYS.belt).slice(0, MAX_BELT),
    setBelt: (ids) => writeIds(KEYS.belt, ids.slice(0, MAX_BELT)),
    addBelt(id) {
      const b = store.belt();
      if (b.includes(id) || b.length >= MAX_BELT) return false;
      return writeIds(KEYS.belt, b.concat(id));
    },
    seen: () => readIds(KEYS.seen),
    markSeen(id) {
      const s = store.seen();
      if (!s.includes(id)) writeIds(KEYS.seen, s.concat(id));
    },
    soundOn() {
      try {
        return localStorage.getItem(KEYS.sound) === "on";
      } catch (_) {
        return false;
      }
    },
    setSound(on) {
      try {
        localStorage.setItem(KEYS.sound, on ? "on" : "off");
      } catch (_) {}
    },
    lastId() {
      try {
        const n = Number(localStorage.getItem(KEYS.last) || 0);
        return n > 0 && n <= MAX_ID ? n : null;
      } catch (_) {
        return null;
      }
    },
    setLast(id) {
      try {
        const n = Number(id);
        if (n > 0 && n <= MAX_ID) localStorage.setItem(KEYS.last, String(n));
      } catch (_) {}
    },
    favoriteIds() {
      return readIds(KEYS.favorites);
    },
    isFavorite(id) {
      return store.favoriteIds().includes(Number(id));
    },
    toggleFavorite(id) {
      const n = Number(id);
      const ids = store.favoriteIds();
      const next = ids.includes(n) ? ids.filter(x => x !== n) : [...ids, n];
      writeIds(KEYS.favorites, next);
      return next.includes(n);
    },
    quizBest() {
      try { return Number(localStorage.getItem(KEYS.quizBest) || 0); } catch (_) { return 0; }
    },
    setQuizBest(n) {
      try { localStorage.setItem(KEYS.quizBest, String(n)); } catch (_) {}
    },
    quizTotal() {
      try { return Number(localStorage.getItem(KEYS.quizTotal) || 0); } catch (_) { return 0; }
    },
    incQuizTotal() {
      try {
        const next = store.quizTotal() + 1;
        localStorage.setItem(KEYS.quizTotal, String(next));
        return next;
      } catch (_) { return 0; }
    }
  };

  window.store = store;
})(window);
