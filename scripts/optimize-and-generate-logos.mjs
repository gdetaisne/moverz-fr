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
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-48x48.png", size: 48 },
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
  const srcName = logoPath.includes("logo-transparent") ? "logo-transparent.png" : "logo.png";
  console.log(`\n📌 Génération des favicons depuis ${srcName} (logo plus grand + variantes light/dark)...\n`);

  const bgTransparent = { r: 0, g: 0, b: 0, alpha: 0 };
  const bgLight = { r: 248, g: 250, b: 252, alpha: 1 }; // #f8fafc contraste fond clair

  for (const entry of FAVICON_SIZES) {
    // Version dark (transparent) — onglets mode sombre
    const trimmed = await sharp(logoPath).trim({ threshold: 3 }).toBuffer();
    const bufDark = await sharp(trimmed)
      .resize(entry.size, entry.size, { fit: "cover", position: "center", background: bgTransparent })
      .png({ compressionLevel: 9 })
      .toBuffer();
    const darkPath = join(publicDir, entry.name.replace(".png", "-dark.png"));
    await writeFile(darkPath, bufDark);
    console.log(`   ${entry.name.replace(".png", "-dark.png")} (transparent)`);

    // Version light (fond clair) — onglets mode clair, meilleur contraste
    const bufLight = await sharp(trimmed)
      .resize(entry.size, entry.size, { fit: "cover", position: "center", background: bgLight })
      .png({ compressionLevel: 9 })
      .toBuffer();
    const lightPath = join(publicDir, entry.name.replace(".png", "-light.png"));
    await writeFile(lightPath, bufLight);
    console.log(`   ${entry.name.replace(".png", "-light.png")} (fond clair)`);

    // Copie par défaut = dark (pour compat)
    await writeFile(join(publicDir, entry.name), bufDark);
  }

  const favicon32Dark = await readFile(join(publicDir, "favicon-32x32.png"));
  const favicon32Light = await readFile(join(publicDir, "favicon-32x32-light.png"));
  await writeFile(join(publicDir, "favicon.ico"), favicon32Light);
  await writeFile(join(publicDir, "favicon-dark.ico"), favicon32Dark);
  console.log(`   favicon.ico (32x32, default = light pour majorité utilisateurs)`);
  console.log(`   favicon-dark.ico (32x32, fond transparent)`);
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
