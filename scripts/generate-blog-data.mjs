#!/usr/bin/env node

/**
 * Génère `lib/blog-data.ts` à partir de `moverz_clean_articles.csv`.
 *
 * - Lit les colonnes : title, new_slug, new_url, word_count, city_slug
 * - Ajoute :
 *   - publishedAt : vide (à compléter plus tard si besoin)
 *   - readingTimeMinutes : word_count / 200 arrondi
 *   - description : même que le title par défaut (à raffiner ensuite)
 *   - category : déduite automatiquement selon l’architecture éditoriale
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CSV_PATH = path.join(__dirname, "..", "moverz_clean_articles.csv");
const OUT_PATH = path.join(__dirname, "..", "lib", "blog-data.ts");

if (!fs.existsSync(CSV_PATH)) {
  console.error(`❌ Fichier introuvable : ${CSV_PATH}`);
  process.exit(1);
}

function parseCsvLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

function readCleanCsv() {
  const raw = fs.readFileSync(CSV_PATH, "utf8");
  const lines = raw.split(/\r?\n/).filter((l) => l.trim().length > 0);
  const header = parseCsvLine(lines[0]);

  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i]);
    if (cols.length === 0) continue;
    const row = {};
    header.forEach((h, idx) => {
      row[h] = cols[idx] ?? "";
    });
    rows.push(row);
  }
  return rows;
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function detectCategory(row) {
  const title = (row.title || "").toLowerCase();
  const slug = (row.new_slug || "").toLowerCase();
  const citySlug = (row.city_slug || "").toLowerCase();

  // 4) Articles géolocalisés
  if (citySlug) {
    return "demenagement-par-ville";
  }

  const text = `${title} ${slug}`;
  const has = (keyword) => text.includes(keyword);

  // 2) Prix & devis
  if (
    has("prix") ||
    has("tarif") ||
    has("coût") ||
    has("cout") ||
    has("devis") ||
    has("budget") ||
    has("facture") ||
    has("financ") || // financier, financement
    has("caf") ||
    has("apl") ||
    has("aide") && has("demenagement") ||
    has("subvention") ||
    has("credit d impôt") ||
    has("crédit d impôt") ||
    has("remboursement") ||
    has("frais") ||
    has("combien") ||
    has("combien coute") ||
    has("co\u00fbt")
  ) {
    return "prix-et-devis";
  }

  // 3) Checklists & guides "à garder"
  if (
    has("checklist") ||
    has("check-list") ||
    has("guide complet") ||
    has("guide du") ||
    has("guide de") ||
    has("guide pour") ||
    has("le guide") ||
    has("guide pratique") ||
    has("tutoriel") ||
    has("pas a pas") ||
    has("pas \u00e0 pas") ||
    has("etapes") && has("demenagement") ||
    has("etapes") && has("d\u00e9m\u00e9nagement")
  ) {
    return "checklists-et-guides";
  }

  // 1) Conseils généraux (fallback)
  return "conseils-demenagement";
}

console.log(`📄 Lecture de ${CSV_PATH}...`);
const rows = readCleanCsv();
console.log(`➡️  ${rows.length} articles.`);

const objects = rows.map((row) => {
  const wordCount = toNumber(row.word_count);
  const readingTimeMinutes = wordCount ? Math.max(1, Math.round(wordCount / 200)) : undefined;
  const category = detectCategory(row);

  return {
    slug: row.new_slug,
    title: row.title,
    description: row.title,
    publishedAt: "", // à compléter éventuellement plus tard
    category,
    citySlug: row.city_slug || "",
    readingTimeMinutes,
  };
});

const header = `// AUTO-GENERATED FILE - ne pas éditer à la main
// Généré depuis moverz_clean_articles.csv via scripts/generate-blog-data.mjs

import type { BlogPostMeta } from "./blog";

export const BLOG_DATA: BlogPostMeta[] = [
`;

const lines = objects.map((post) => {
  const fields = [
    `  slug: ${JSON.stringify(post.slug)}`,
    `  title: ${JSON.stringify(post.title)}`,
    `  description: ${JSON.stringify(post.description)}`,
    `  publishedAt: ${JSON.stringify(post.publishedAt)}`,
    `  category: ${JSON.stringify(post.category)}`,
    post.citySlug ? `  citySlug: ${JSON.stringify(post.citySlug)}` : "",
    post.readingTimeMinutes ? `  readingTimeMinutes: ${post.readingTimeMinutes}` : "",
  ].filter(Boolean);

  return `  {\n${fields.join(",\n")}\n  }`;
});

const footer = `];
`;

fs.writeFileSync(OUT_PATH, header + lines.join(",\n") + "\n" + footer, "utf8");

console.log(`💾 Fichier généré : ${OUT_PATH}`);


