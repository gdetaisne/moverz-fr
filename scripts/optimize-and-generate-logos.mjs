#!/usr/bin/env node
/**
 * Optimise tous les logos + génère favicons depuis logo.png
 * Usage: node scripts/optimize-and-generate-logos.mjs
 */

import sharp from "sharp";
import { readFile, writeFile, stat } from "fs/promises";
import { join } from "path";

const publicDir = join(process.cwd(), "public");

// Seul logo.png est optimisé (les autres sont déjà optimisés)
const LOGOS = ["logo.png"];

const FAVICON_SIZES = [
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-96x96.png", size: 96 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "web-app-manifest-192x192.png", size: 192 },
  { name: "web-app-manifest-512x512.png", size: 512 },
];

async function optimizeLogo(filepath, name) {
  try {
    const s = await stat(filepath);
    const beforeKB = Math.round(s.size / 1024);
    console.log(`   Avant: ${beforeKB} KB`);

    const buf = await sharp(filepath)
      .png({ compressionLevel: 9 })
      .toBuffer();
    await writeFile(filepath, buf);

    const s2 = await stat(filepath);
    const afterKB = Math.round(s2.size / 1024);
    const pct = Math.round(((beforeKB - afterKB) / beforeKB) * 100);
    console.log(`   Après: ${afterKB} KB (-${pct}%)\n`);
    return true;
  } catch (e) {
    console.error(`   Erreur: ${e}`);
    return false;
  }
}

async function generateFavicons(logoPath) {
  const name = logoPath.includes("logo-transparent") ? "logo-transparent.png" : logoPath.includes("logo-ui") ? "logo-ui.png" : "logo.png";
  console.log(`\n📌 Génération des favicons depuis ${name}...\n`);

  for (const { name, size } of FAVICON_SIZES) {
    const outPath = join(publicDir, name);
    const buf = await sharp(logoPath)
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toBuffer();
    await writeFile(outPath, buf);
    console.log(`   ${name} (${size}x${size})`);
  }

  const favicon32 = await readFile(join(publicDir, "favicon-32x32.png"));
  await writeFile(join(publicDir, "favicon.ico"), favicon32);
  console.log(`   favicon.ico (32x32)`);
}

async function main() {
  console.log("⚡ Optimisation logos + génération favicons Moverz\n");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  for (const name of LOGOS) {
    const path = join(publicDir, name);
    try {
      await stat(path);
      console.log(`🖼️  ${name}`);
      await optimizeLogo(path, name);
    } catch {
      console.log(`⚠️  ${name} non trouvé, ignoré.\n`);
    }
  }

  // Favicons : logo-transparent.png (fond transparent) > logo.png
  const transparentPath = join(publicDir, "logo-transparent.png");
  const logoPath = join(publicDir, "logo.png");
  const faviconSource = (await stat(transparentPath).then(() => transparentPath).catch(() => null))
    ?? (await stat(logoPath).then(() => logoPath).catch(() => null));
  if (faviconSource) {
    await generateFavicons(faviconSource);
  } else {
    console.log("⚠️  logo-transparent.png et logo.png absents, favicons non générés.");
  }

  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("✅ Terminé. Logo, favicons et variantes optimisés.\n");
}

main().catch(console.error);
