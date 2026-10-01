document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("move-grid");
  const search = document.getElementById("move-search");
  const typeSelect = document.getElementById("move-type");
  const categorySelect = document.getElementById("move-category");
  const statusEl = document.getElementById("move-status");
  const paginationEl = document.getElementById("move-pagination");
  const tc = window.TYPES_CHART;

  const typeStyle = (t) => (tc ? tc.getTypeStyle(t) : "background:#3A6A88; color:#ffffff;");

  const TYPES = [
    "normal", "fire", "water", "grass", "electric", "ice",
    "fighting", "poison", "ground", "flying", "psychic", "bug",
    "rock", "ghost", "dragon", "steel", "dark", "fairy"
  ];

  TYPES.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t.toUpperCase();
    typeSelect.appendChild(opt);
  });

  let allMoveEntries = [];
  let currentPage = 1;
  const PAGE_SIZE = 36;

  try {
    const listResp = await fetch("https://pokeapi.co/api/v2/move?limit=950");
    if (!listResp.ok) throw new Error("Failed to load moves list");
    const data = await listResp.json();
    allMoveEntries = data.results || [];
    statusEl.textContent = `Indexed ${allMoveEntries.length} moves.`;

    const urlQ = new URLSearchParams(location.search).get("q");
    if (urlQ && search) search.value = urlQ;
  } catch (err) {
    statusEl.textContent = "Unable to load moves list. Please check your network.";
    return;
  }

  async function render() {
    statusEl.textContent = "Filtering and loading move details...";
    const q = search.value.trim().toLowerCase();
    const selectedType = typeSelect.value;
    const selectedCat = categorySelect.value;

    let matched = allMoveEntries.filter(m => {
      if (q && !m.name.includes(q)) return false;
      return true;
    });

    const totalMatched = matched.length;
    const totalPages = Math.ceil(totalMatched / PAGE_SIZE) || 1;
    if (currentPage > totalPages) currentPage = 1;

    const pageSlice = matched.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    // Fetch details for the current slice
    const moveDetails = await Promise.all(
      pageSlice.map(item => window.pokeApi.getMove(item.name))
    );

    // Filter by type / category if selected
    let displayed = moveDetails.filter(m => {
      if (!m) return false;
      if (selectedType && m.type !== selectedType) return false;
      if (selectedCat && m.category !== selectedCat) return false;
      return true;
    });

    statusEl.textContent = `Showing ${displayed.length} of ${totalMatched} moves (Page ${currentPage}/${totalPages}).`;

    grid.innerHTML = displayed.map(m => `
      <article class="dex-card" style="display:flex; flex-direction:column; justify-content:space-between; min-height:12rem;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <span class="id-badge">#${String(m.id).padStart(3, "0")}</span>
            <span class="chip" style="${typeStyle(m.type)} font-size:0.75rem;">${m.type}</span>
          </div>

          <h3 style="font-family:var(--font-ui); font-size:1.1rem; font-weight:700; color:var(--ink); text-transform:capitalize; margin:0 0 0.35rem;">
            ${m.name.replace(/-/g, " ")}
          </h3>

          <div style="display:flex; gap:0.4rem; margin-bottom:0.5rem; font-size:0.75rem;">
            <span style="background:var(--sky-deep); color:var(--ink-soft); padding:0.1rem 0.35rem; border-radius:2px; text-transform:capitalize; border:1px solid var(--line);">
              ${m.category || "status"}
            </span>
          </div>

          <p class="soft" style="font-size:0.8125rem; line-height:1.4; color:var(--ink-soft); margin-bottom:0.5rem;">
            ${m.description ? m.description.replace(/\n/g, " ") : "No description available."}
          </p>
        </div>

        <div style="font-family:var(--font-num); font-size:0.8125rem; color:var(--ink); padding-top:0.4rem; border-top:1px solid var(--line); display:flex; justify-content:space-between;">
          <span>PWR: <strong>${m.power ?? "—"}</strong></span>
          <span>ACC: <strong>${m.accuracy ? m.accuracy + "%" : "—"}</strong></span>
          <span>PP: <strong>${m.pp ?? "—"}</strong></span>
        </div>
      </article>
    `).join("");

    // Render pagination buttons
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

  typeSelect.addEventListener("change", () => {
    currentPage = 1;
    render();
  });

  categorySelect.addEventListener("change", () => {
    currentPage = 1;
    render();
  });

  render();
});
