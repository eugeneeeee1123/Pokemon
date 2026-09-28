/**
 * 151 FILE — PokeAPI Client & Data Access
 * 遵循 pokemon-web-project-plan.md §7 与 AGENTS.md 约束
 * - getList(limit, offset)
 * - getPokemon(idOrName)
 * - 内存 Map + localStorage 列表与详情缓存
 * - 切地区换 offset，禁止一次性并发拉取 1025 条详情
 */

(function (window) {
  const API_BASE = "https://pokeapi.co/api/v2";

  // 内存缓存
  const listMemoryCache = new Map();
  const pokemonMemoryCache = new Map();
  const typeIdsMemoryCache = new Map();

  const api = {
    /**
     * 3D HOME 渲染图 URL (512x512)
     */
    artUrl(id) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    },

    /**
     * 原生叫声音频 URL
     */
    cryUrl(id) {
      return `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
    },

    /**
     * 播放叫声 (音量 0.35)
     */
    playCry(id, volume = 0.35) {
      try {
        const audio = new Audio(this.cryUrl(id));
        audio.volume = volume;
        audio.play().catch(() => {});
      } catch (_) {}
    },

    /**
     * 拉取指定地区/区间的列表 (limit, offset)
     * 优先走内存与 localStorage 缓存
     */
    async getList(limit = 151, offset = 0) {
      const cacheKey = `file151.list_${offset}_${limit}`;

      // 1. 检查内存缓存
      if (listMemoryCache.has(cacheKey)) {
        return listMemoryCache.get(cacheKey);
      }

      // 2. 检查本地全量 10 世代预置
      if (typeof window !== "undefined" && window.ALL_SPECIES && window.ALL_SPECIES.length === 1025) {
        const slice = window.ALL_SPECIES.slice(offset, offset + limit);
        if (slice.length > 0) {
          listMemoryCache.set(cacheKey, slice);
          return slice;
        }
      }

      // 3. 检查 localStorage
      try {
        const local = localStorage.getItem(cacheKey);
        if (local) {
          const parsed = JSON.parse(local);
          listMemoryCache.set(cacheKey, parsed);
          return parsed;
        }
      } catch (_) {}

      // 3. 网络请求
      const resp = await fetch(`${API_BASE}/pokemon?limit=${limit}&offset=${offset}`);
      if (!resp.ok) {
        throw new Error(`Failed to fetch pokemon list: ${resp.status}`);
      }
      const data = await resp.json();

      const results = data.results.map((item) => {
        const parts = item.url.split("/").filter(Boolean);
        const id = parseInt(parts[parts.length - 1], 10);
        const name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        return {
          id,
          name,
          types: [] // 初始为空，由单独详情或 type 映射补充
        };
      });

      // 存入内存与本地存储
      listMemoryCache.set(cacheKey, results);
      try {
        localStorage.setItem(cacheKey, JSON.stringify(results));
      } catch (_) {}

      return results;
    },

    /**
     * 获取单个宝可梦详情 (id 或英文名)
     * 包含 types, stats, height, weight
     */
    async getPokemon(idOrName) {
      if (!idOrName) return null;
      const key = String(idOrName).toLowerCase();
      const cacheKey = `file151.p_${key}`;

      // 1. 检查内存缓存
      if (pokemonMemoryCache.has(key)) {
        return pokemonMemoryCache.get(key);
      }

      // 2. 检查 localStorage
      try {
        const local = localStorage.getItem(cacheKey);
        if (local) {
          const parsed = JSON.parse(local);
          pokemonMemoryCache.set(key, parsed);
          return parsed;
        }
      } catch (_) {}

      // 3. 网络请求
      const resp = await fetch(`${API_BASE}/pokemon/${key}`);
      if (!resp.ok) {
        throw new Error(`Pokemon not found: ${idOrName}`);
      }
      const data = await resp.json();

      const result = {
        id: data.id,
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        types: data.types.sort((a, b) => a.slot - b.slot).map((t) => t.type.name),
        height: data.height / 10, // 分米转米
        weight: data.weight / 10, // 百克转千克
        stats: data.stats.map((s) => ({
          name: s.stat.name,
          value: s.base_stat
        })),
        abilities: data.abilities.map((a) => ({
          name: a.ability.name,
          is_hidden: a.is_hidden
        }))
      };

      // 存入内存与本地存储
      pokemonMemoryCache.set(key, result);
      pokemonMemoryCache.set(String(result.id), result);
      try {
        localStorage.setItem(`file151.p_${result.id}`, JSON.stringify(result));
      } catch (_) {}

      return result;
    },

    /**
     * 单次请求拉取某种属性包含的所有宝可梦 ID 集合
     * 用于跨地区即时过滤属性，无需并发打全区详情
     */
    async getTypePokemonIds(type) {
      if (!type) return null;
      const tKey = type.toLowerCase();
      if (typeIdsMemoryCache.has(tKey)) {
        return typeIdsMemoryCache.get(tKey);
      }

      try {
        const resp = await fetch(`${API_BASE}/type/${tKey}`);
        if (!resp.ok) return null;
        const data = await resp.json();
        const idSet = new Set(
          data.pokemon.map((p) => {
            const parts = p.pokemon.url.split("/").filter(Boolean);
            return parseInt(parts[parts.length - 1], 10);
          })
        );
        typeIdsMemoryCache.set(tKey, idSet);
        return idSet;
      } catch (_) {
        return null;
      }
    }
  };

  window.pokeApi = api;
})(window);
