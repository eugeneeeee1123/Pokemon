document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("ability-grid");
  const search = document.getElementById("ability-search");
  const statusEl = document.getElementById("ability-status");
  const paginationEl = document.getElementById("ability-pagination");

  let allAbilities = [];
  let currentPage = 1;
  const PAGE_SIZE = 24;

  try {
    const listResp = await fetch("https://pokeapi.co/api/v2/ability?limit=400");
    if (!listResp.ok) throw new Error("Failed to load abilities");
    const data = await listResp.json();
    allAbilities = data.results || [];
    statusEl.textContent = `Indexed ${allAbilities.length} abilities.`;

    const urlQ = new URLSearchParams(location.search).get("q");
    if (urlQ && search) search.value = urlQ;
  } catch (err) {
    statusEl.textContent = "Unable to load abilities list. Please check your network.";
    return;
  }

  function getPokemonIdFromUrl(url) {
    const m = url.match(/\/pokemon\/(\d+)\//);
    return m ? m[1] : null;
  }

  async function render() {
    statusEl.textContent = "Filtering and loading ability details...";
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

    statusEl.textContent = `Showing ${details.filter(Boolean).length} of ${totalMatched} abilities (Page ${currentPage}/${totalPages}).`;

    grid.innerHTML = details.filter(Boolean).map(a => {
      const pokeList = a.pokemon || [];
      const previewList = pokeList.slice(0, 12);
      const remaining = pokeList.length - previewList.length;

      return `
        <article class="dex-card" style="display:flex; flex-direction:column; justify-content:space-between; min-height:14rem;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
              <span class="id-badge">#${String(a.id).padStart(3, "0")}</span>
              <span style="font-family:var(--font-num); color:var(--ink-soft); font-size:0.75rem;">${pokeList.length} Pokémon</span>
            </div>

            <h3 style="font-family:var(--font-ui); font-size:1.15rem; font-weight:700; color:var(--ink); text-transform:capitalize; margin:0 0 0.4rem;">
              ${a.name.replace(/-/g, " ")}
            </h3>

            <p class="soft" style="font-size:0.8125rem; line-height:1.45; color:var(--ink-soft); margin-bottom:0.75rem;">
              ${a.description ? a.description.replace(/\n/g, " ") : "No description available."}
            </p>
          </div>

          <div>
            <p style="font-family:var(--font-ui); font-size:0.75rem; font-weight:700; color:var(--ink); margin:0 0 0.35rem; text-transform:uppercase; letter-spacing:0.04em;">
              Specimens
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:0.3rem;">
              ${previewList.map(p => {
                const pId = getPokemonIdFromUrl(p.url);
                return `
                  <a href="pokemon.html?${pId ? 'id=' + pId : 'name=' + p.name}"
                     class="chip"
                     style="font-size:0.75rem; text-decoration:none; text-transform:capitalize; padding:0.15rem 0.4rem;"
                     title="${p.name}">
                    ${p.name.replace(/-/g, " ")}
                  </a>
                `;
              }).join("")}
              ${remaining > 0 ? `<span style="font-size:0.75rem; color:var(--ink-soft); align-self:center;">+${remaining} more</span>` : ""}
            </div>
          </div>
        </article>
      `;
    }).join("");

    if (totalPages > 1) {
      paginationEl.innerHTML = `
        <div style="display:inline-flex; gap:0.5rem; align-items:center;">
          <button class="btn btn-paper" id="prev-page" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
          <span style="font-family:var(--font-num); color:var(--ink-soft); font-size:0.875rem;">Page ${currentPage} of ${totalPages}</span>
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
