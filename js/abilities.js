document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("ability-grid");
  const search = document.getElementById("ability-search");
  const statusEl = document.getElementById("ability-status");
  const paginationEl = document.getElementById("ability-pagination");
  statusEl.setAttribute("aria-live", "polite");
  const htmlEntities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => htmlEntities[char]);

  let allAbilities = [];
  let currentPage = 1;
  let renderRevision = 0;
  const PAGE_SIZE = 18;

  try {
    const listResp = await fetch("https://pokeapi.co/api/v2/ability?limit=400");
    if (!listResp.ok) throw new Error("Failed to load abilities");
    const data = await listResp.json();
    allAbilities = data.results || [];

    const urlQ = new URLSearchParams(location.search).get("q");
    if (urlQ && search) search.value = urlQ;
  } catch (err) {
    statusEl.textContent = "Abilities unavailable.";
    return;
  }

  function getPokemonIdFromUrl(url) {
    const m = url.match(/\/pokemon\/(\d+)\//);
    return m ? m[1] : null;
  }

  async function render() {
    const revision = ++renderRevision;
    statusEl.textContent = "Loading…";
    const q = search.value.trim().toLowerCase();

    const matched = allAbilities.filter(a => {
      if (q && !a.name.includes(q)) return false;
      return true;
    });

    const totalMatched = matched.length;
    const totalPages = Math.ceil(totalMatched / PAGE_SIZE) || 1;
    if (currentPage > totalPages) currentPage = 1;

    const pageSlice = matched.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    const details = await Promise.all(
      pageSlice.map(item => window.pokeApi.getAbility(item.name))
    );
    if (revision !== renderRevision) return;

    const availableDetails = details.filter(Boolean);
    statusEl.textContent = availableDetails.length ? `${availableDetails.length} shown` : "No matches";

    grid.innerHTML = availableDetails.map(a => {
      const pokeList = a.pokemon || [];
      const previewList = pokeList.slice(0, 3);
      const remainingList = pokeList.slice(previewList.length);
      const description = a.description ? a.description.replace(/\n/g, " ") : "No description available.";
      const excerptLimit = 132;
      const excerptEnd = description.length > excerptLimit
        ? description.lastIndexOf(" ", excerptLimit)
        : description.length;
      const excerpt = description.length > excerptLimit
        ? `${description.slice(0, excerptEnd > 0 ? excerptEnd : excerptLimit).trim()}…`
        : description;
      const safeDescription = escapeHTML(description);
      const safeExcerpt = escapeHTML(excerpt);
      const visualPokemon = pokeList.find(p => {
        const id = Number(getPokemonIdFromUrl(p.url));
        return id > 0 && id <= 1025;
      });
      const visualId = visualPokemon ? getPokemonIdFromUrl(visualPokemon.url) : null;
      const specimenLink = p => {
        const pId = getPokemonIdFromUrl(p.url);
        const href = pId ? `pokemon.html?id=${pId}` : `pokemon.html?name=${encodeURIComponent(p.name)}`;
        return `
          <a href="${escapeHTML(href)}"
             class="ability-specimen-chip"
             title="${escapeHTML(p.name)}">
            ${escapeHTML(p.name.replace(/-/g, " "))}
          </a>
        `;
      };

      return `
        <article class="dex-card ability-card">
          <div class="ability-visual" aria-hidden="true">
            ${visualId
              ? `<img class="ability-visual-pokemon" src="assets/thumbs/${visualId}.webp" alt="" loading="lazy" decoding="async">`
              : `<span class="ability-visual-placeholder">✦</span>`}
            <span class="ability-visual-label">Specimen</span>
          </div>
          <div class="ability-card-body">
            <div class="ability-meta">
              <span class="id-badge">#${escapeHTML(String(a.id).padStart(3, "0"))}</span>
              <span class="ability-count">${pokeList.length} Pokémon</span>
            </div>
            <h2 class="ability-name">${escapeHTML(a.name.replace(/-/g, " "))}</h2>
            <p class="ability-effect">${safeExcerpt}</p>
            ${description.length > excerpt.length ? `
              <details class="ability-full-effect">
                <summary>Full effect</summary>
                <p>${safeDescription}</p>
              </details>
            ` : ""}
            <div class="ability-roster">
              <p class="ability-roster-heading">Specimens</p>
              <div class="ability-specimen-list">
                ${previewList.length
                  ? previewList.map(specimenLink).join("")
                  : `<span class="ability-no-specimens">No linked Pokémon</span>`}
              </div>
              ${remainingList.length ? `
                <details class="ability-more-specimens">
                  <summary>${remainingList.length} more Pokémon</summary>
                  <div class="ability-specimen-list ability-specimen-list-extra">
                    ${remainingList.map(specimenLink).join("")}
                  </div>
                </details>
              ` : ""}
            </div>
          </div>
        </article>
      `;
    }).join("");

    if (totalPages > 1) {
      paginationEl.innerHTML = `
        <div class="ability-pagination-inner">
          <button class="btn btn-paper" id="prev-page" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
          <span>Page ${currentPage} of ${totalPages}</span>
          <button class="btn btn-paper" id="next-page" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
        </div>
      `;
      document.getElementById("prev-page")?.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      document.getElementById("next-page")?.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    } else {
      paginationEl.innerHTML = "";
    }
  }

  let debounceTimer = null;
  search.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentPage = 1;
      render();
    }, 250);
  });

  render();
});
