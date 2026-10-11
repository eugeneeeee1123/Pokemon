import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const POSTERS = [
  // 8 Animated Series
  { id: "series-01", url: "https://media.kitsu.app/anime/486/poster_image/medium-25e3d01f2d2f0a81dc139e4993ed74d8.jpeg" },
  { id: "series-02", url: "https://media.kitsu.app/anime/poster_images/1404/medium.jpg" },
  { id: "series-03", url: "https://media.kitsu.app/anime/poster_images/1405/medium.jpg" },
  { id: "series-04", url: "https://media.kitsu.app/anime/poster_images/5605/medium.jpg" },
  { id: "series-05", url: "https://media.kitsu.app/anime/poster_images/7850/medium.jpg" },
  { id: "series-06", url: "https://media.kitsu.app/anime/poster_images/12533/medium.jpg" },
  { id: "series-07", url: "https://media.kitsu.app/anime/poster_images/42534/medium.jpg" },
  { id: "series-08", url: "https://media.kitsu.app/anime/46859/poster_image/medium-2d23c0195d27ee7308bb6f0e83b2b808.jpeg" },

  // 23 Theatrical Movies
  { id: "movie-01", url: "https://media.kitsu.app/anime/poster_images/487/original.jpg" },
  { id: "movie-02", url: "https://media.kitsu.app/anime/poster_images/1001/original.jpg" },
  { id: "movie-03", url: "https://media.kitsu.app/anime/poster_images/1002/original.jpg" },
  { id: "movie-04", url: "https://media.kitsu.app/anime/poster_images/1003/original.jpg" },
  { id: "movie-05", url: "https://media.kitsu.app/anime/poster_images/1004/original.jpg" },
  { id: "movie-06", url: "https://media.kitsu.app/anime/poster_images/1005/original.jpg" },
  { id: "movie-07", url: "https://media.kitsu.app/anime/poster_images/1006/original.jpg" },
  { id: "movie-08", url: "https://media.kitsu.app/anime/poster_images/1368/original.jpg" },
  { id: "movie-09", url: "https://media.kitsu.app/anime/poster_images/1992/original.jpg" },
  { id: "movie-10", url: "https://media.kitsu.app/anime/poster_images/2597/original.jpg" },
  { id: "movie-11", url: "https://media.kitsu.app/anime/poster_images/3419/original.jpg" },
  { id: "movie-12", url: "https://media.kitsu.app/anime/poster_images/4460/original.jpg" },
  { id: "movie-13", url: "https://media.kitsu.app/anime/poster_images/5083/original.jpg" },
  { id: "movie-14", url: "https://media.kitsu.app/anime/poster_images/6327/original.jpg" },
  { id: "movie-15", url: "https://media.kitsu.app/anime/poster_images/6786/original.jpg" },
  { id: "movie-16", url: "https://media.kitsu.app/anime/poster_images/7489/original.jpg" },
  { id: "movie-17", url: "https://media.kitsu.app/anime/poster_images/8149/original.jpg" },
  { id: "movie-18", url: "https://media.kitsu.app/anime/poster_images/8903/original.png" },
  { id: "movie-19", url: "https://media.kitsu.app/anime/poster_images/11202/large.jpg" },
  { id: "movie-20", url: "https://media.kitsu.app/anime/poster_images/12941/original.jpg" },
  { id: "movie-21", url: "https://media.kitsu.app/anime/poster_images/41413/original.jpg" },
  { id: "movie-22", url: "https://media.kitsu.app/anime/41871/poster_image/3eadcf949282d8782ed3a60922f91760.png" },
  { id: "movie-23", url: "https://media.kitsu.app/anime/poster_images/43025/original.jpg" }
];

const OUT_DIR = "assets/posters/";
const WIDTH = 480;
const HEIGHT = 720;
const QUALITY = 82;

await mkdir(OUT_DIR, { recursive: true });

async function fetchBuffer(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "151File/1.0 (Fan Archive; https://github.com/eugeneeeee1123/Pokemon)"
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
