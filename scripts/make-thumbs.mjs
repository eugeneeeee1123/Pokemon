// 生成 Dex 列表 / 网格 / 胶片尺用的 192px WebP 缩略图。
//
// 为什么：卡片只显示 ~96px，却在加载 512×512 的 HOME 大图（平均 ~116 KB）。
// 缩到 192px（2× 屏够用）后平均 ~8 KB，约小 14 倍；全集 1025 张约 8 MB。
//
// 用法（在仓库根目录）：
//   npm i --no-save sharp
//   node scripts/make-thumbs.mjs            # 全部 1..1025，已存在的会跳过
//   node scripts/make-thumbs.mjs 1 151      # 只生成 #1–#151
//
// 输出：assets/thumbs/{id}.webp（缺失时页面会自动回退到远程大图，不会坏）

import { mkdir, access, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const OUT_DIR = fileURLToPath(new URL("../assets/thumbs/", import.meta.url));
const SRC = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

const SIZE = 192;
const QUALITY = 80;
const CONCURRENCY = 8;
const RETRIES = 2;

const [from = 1, to = 1025] = process.argv.slice(2).map(Number);
if (!Number.isInteger(from) || !Number.isInteger(to) || from < 1 || to < from) {
  console.error("用法: node scripts/make-thumbs.mjs [起始id] [结束id]");
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });

const exists = (p) => access(p).then(() => true, () => false);

async function fetchBuffer(url) {
  let lastErr;
  for (let i = 0; i <= RETRIES; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, 400 * (i + 1)));
    }
  }
  throw lastErr;
}

const stats = { made: 0, skipped: 0, failed: [], bytes: 0 };

async function one(id) {
  const file = `${OUT_DIR}${id}.webp`;
  if (await exists(file)) {
    stats.skipped++;
    return;
  }
  try {
    const png = await fetchBuffer(SRC(id));
    const webp = await sharp(png)
      .resize(SIZE, SIZE, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toBuffer();
    await writeFile(file, webp);
    stats.made++;
    stats.bytes += webp.length;
  } catch (err) {
    stats.failed.push(`${id} (${err.message})`);
  }
}

const ids = Array.from({ length: to - from + 1 }, (_, i) => from + i);
let cursor = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (cursor < ids.length) await one(ids[cursor++]);
  })
);

const kb = (n) => (n / 1024).toFixed(1);
console.log(
  `done: made ${stats.made}, skipped ${stats.skipped}, failed ${stats.failed.length}` +
    (stats.made ? `, avg ${kb(stats.bytes / stats.made)} KB, total ${kb(stats.bytes)} KB` : "")
);
if (stats.failed.length) {
  console.log("failed ids:", stats.failed.join(", "));
  process.exitCode = 1;
}
