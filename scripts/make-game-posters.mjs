import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const POSTERS = [
  { id: "game-kanto", url: "https://upload.wikimedia.org/wikipedia/en/a/af/Pok%C3%A9mon_Red_and_Blue_cover_art.webp" },
  { id: "game-johto", url: "https://upload.wikimedia.org/wikipedia/en/4/4c/Pok%C3%A9mon_box_art_-_Gold_Version.png" },
  { id: "game-hoenn", url: "https://upload.wikimedia.org/wikipedia/en/b/be/PokemonRubySapphireBox.jpg" },
  { id: "game-sinnoh", url: "https://upload.wikimedia.org/wikipedia/en/2/2e/PokemonDiamondPearlBoxArt.jpg" },
  { id: "game-unova", url: "https://upload.wikimedia.org/wikipedia/en/e/e1/Pokemon_Black_Box_Artwork.jpg" },
  { id: "game-kalos", url: "https://upload.wikimedia.org/wikipedia/en/d/dc/Pokemon_X_and_Y_box_art.jpg" },
  { id: "game-alola", url: "https://upload.wikimedia.org/wikipedia/en/b/ba/Pokemon_Sun_Boxart.jpg" },
  { id: "game-galar", url: "https://upload.wikimedia.org/wikipedia/en/f/fa/Pok%C3%A9mon_Sword_and_Shield.jpg" },
  { id: "game-paldea", url: "https://upload.wikimedia.org/wikipedia/en/0/00/Pok%C3%A9mon_Scarlet_and_Violet_banner.png" }
];

const OUT_DIR = "assets/posters/";
const WIDTH = 600;
const HEIGHT = 300;
const QUALITY = 85;

await mkdir(OUT_DIR, { recursive: true });

async function fetchBuffer(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "151FileArchive/1.0 (Fan Archive; contact: yijuntee@gmail.com)"
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      if (i === 2) throw err;
      await new Promise(r => setTimeout(r, 600 * (i + 1)));
    }
  }
}

let done = 0;
let errors = [];

for (const item of POSTERS) {
  const target = `${OUT_DIR}${item.id}.webp`;
  try {
    const raw = await fetchBuffer(item.url);
    const webp = await sharp(raw)
      .resize(WIDTH, HEIGHT, { fit: "cover", position: "center" })
      .webp({ quality: QUALITY, effort: 6 })
      .toBuffer();
    await writeFile(target, webp);
    done++;
    console.log(`[${done}/${POSTERS.length}] saved ${target} (${(webp.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`Failed ${item.id}:`, err.message);
    errors.push(item.id);
  }
}

console.log(`Finished: ${done} succeeded, ${errors.length} failed.`);
if (errors.length) process.exit(1);
