#!/usr/bin/env node
/**
 * Génère logo-transparent.png depuis logo.png (fond blanc → transparent)
 * Usage: node scripts/make-logo-transparent.mjs
 */

import sharp from "sharp";
import { writeFile, stat } from "fs/promises";
import { join } from "path";

const publicDir = join(process.cwd(), "public");
const inputPath = join(publicDir, "logo.png");
const outputPath = join(publicDir, "logo-transparent.png");

// Seuil : pixels plus clairs que ça deviennent transparents (0-255)
const WHITE_THRESHOLD = 248;

async function main() {
  console.log("🔄 Génération logo-transparent.png (fond blanc → transparent)...\n");
  try {
    await stat(inputPath);
  } catch {
    console.error("❌ logo.png introuvable");
    process.exit(1);
  }

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Blanc ou quasi-blanc → transparent
    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
      data[i + 3] = 0;
    }
  }

  await sharp(Buffer.from(data), { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  const s = await stat(outputPath);
  console.log(`   ✅ logo-transparent.png créé (${Math.round(s.size / 1024)} KB)\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
