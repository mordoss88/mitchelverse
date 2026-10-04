// Converts portrait images made in Gemini into small WebP files for the site.
// Usage: node tools/generate-portraits.mjs --convert --site <id>.png [<id>.png ...]
// Input files are read from portraits-src/ (or the path you give).
// Output goes to site/portraits/<id>.webp. Then add the id to PORTRAITS in site/index.html.
import { existsSync, mkdirSync } from "node:fs";
import { basename, extname, join, resolve } from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
if (!args.includes("--convert") || !args.includes("--site")) {
  console.error("Usage: node tools/generate-portraits.mjs --convert --site <id>.png [...]");
  process.exit(1);
}
const files = args.filter((a) => !a.startsWith("--"));
if (!files.length) {
  console.error("Give at least one image, for example: marinus.png");
  process.exit(1);
}
const root = resolve(import.meta.dirname, "..");
const outDir = join(root, "site", "portraits");
mkdirSync(outDir, { recursive: true });

for (const f of files) {
  const src = existsSync(f) ? f : join(root, "portraits-src", f);
  if (!existsSync(src)) {
    console.error(`Not found: ${f}`);
    process.exitCode = 1;
    continue;
  }
  const id = basename(src, extname(src)).toLowerCase();
  const out = join(outDir, `${id}.webp`);
  await sharp(src).resize(400, 400, { fit: "cover" }).webp({ quality: 80 }).toFile(out);
  console.log(`${src} -> site/portraits/${id}.webp`);
  console.log(`  Add to PORTRAITS: ${id}:"portraits/${id}.webp",`);
}
