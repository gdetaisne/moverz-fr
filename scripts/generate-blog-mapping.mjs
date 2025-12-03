#!/usr/bin/env node

/**
 * Génère BLOG-EXPORT-WITH-MAPPING.csv à partir de BLOG-EXPORT-RAW.csv
 *
 * - Détecte les doublons multi-sites via le slug de l'URL (`/blog/.../{slug}/`)
 * - Choisit un slug canonique par groupe
 * - Construit :
 *   - new_slug
 *   - new_url (`https://moverz.fr/blog/{new_slug}/`)
 *   - city_slug (si ville clairement détectée)
 *   - keep_as_is (TRUE pour la ligne canonique, FALSE pour les autres)
 *   - merge_into_slug (slug cible si keep_as_is = FALSE)
 *
 * Usage :
 *   node scripts/generate-blog-mapping.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RAW_PATH = path.join(__dirname, "..", "BLOG-EXPORT-RAW.csv");
const OUT_PATH = path.join(__dirname, "..", "BLOG-EXPORT-WITH-MAPPING.csv");

if (!fs.existsSync(RAW_PATH)) {
  console.error(`❌ Fichier introuvable : ${RAW_PATH}`);
  process.exit(1);
}

// Liste des villes connues (slugs moverz.fr)
const CITY_SLUGS = [
  "nice",
  "lyon",
  "marseille",
  "toulouse",
  "bordeaux",
  "lille",
  "strasbourg",
  "nantes",
  "rennes",
  "rouen",
  "montpellier",
  "paris",
  "ile-de-france",
  "grenoble",
  "toulon",
  "dijon",
  "angers",
  "clermont-ferrand",
  "tours",
  "reims",
  "le-havre",
];

/**
 * Parse une ligne CSV simple avec gestion des guillemets.
 */
function parseCsvLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      // Toggle les guillemets, mais gérer les doubles "" comme un "
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // skip next
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

/**
 * Retourne le slug (dernier segment) de l'URL d'article.
 */
function getSlugFromOldUrl(oldUrl) {
  try {
    const u = new URL(oldUrl);
    const segments = u.pathname.split("/").filter(Boolean);
    if (segments.length === 0) return "";
    let slug = segments[segments.length - 1];
    if (!slug && segments.length > 1) {
      slug = segments[segments.length - 2];
    }
    return slug.toLowerCase();
  } catch {
    return "";
  }
}

/**
 * Détecte un city_slug à partir du titre ou du slug d’URL.
 */
function detectCitySlug({ title, oldUrl }) {
  const lowerTitle = (title || "").toLowerCase();
  const slug = getSlugFromOldUrl(oldUrl);
  const lowerSlug = slug.toLowerCase();

  for (const city of CITY_SLUGS) {
    const normalizedCity = city.replace(/-/g, " ");
    if (
      lowerTitle.includes(normalizedCity) ||
      lowerTitle.includes(city) ||
      lowerSlug.includes(city) ||
      lowerSlug.includes(normalizedCity.replace(/ /g, "-"))
    ) {
      return city;
    }
  }
  return "";
}

/**
 * Lit le CSV brut et renvoie un tableau d’objets.
 */
function readRawCsv() {
  const raw = fs.readFileSync(RAW_PATH, "utf8");
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

/**
 * Construit les mappings par groupe de slug (multi-sites).
 */
function buildMappings(rows) {
  const groups = new Map(); // slug -> rows[]

  for (const row of rows) {
    const slugFromUrl = getSlugFromOldUrl(row.old_url || row.oldUrl);
    if (!slugFromUrl) continue;
    if (!groups.has(slugFromUrl)) {
      groups.set(slugFromUrl, []);
    }
    groups.get(slugFromUrl).push(row);
  }

  const outputRows = [];

  for (const [slug, groupRows] of groups.entries()) {
    // Choix du slug canonique : on garde tel quel
    const newSlug = slug;
    const newUrl = `https://moverz.fr/blog/${newSlug}/`;

    // City slug basé sur la première ligne du groupe
    const citySlug = detectCitySlug({
      title: groupRows[0].title,
      oldUrl: groupRows[0].old_url,
    });

    // Première ligne = canonique
    groupRows.forEach((row, index) => {
      const isCanonical = index === 0;
      outputRows.push({
        source_domain: row.source_domain,
        old_url: row.old_url,
        title: row.title,
        published_at: row.published_at,
        word_count: row.word_count,
        new_slug: newSlug,
        new_url: newUrl,
        city_slug: citySlug,
        keep_as_is: isCanonical ? "TRUE" : "FALSE",
        merge_into_slug: isCanonical ? "" : newSlug,
      });
    });
  }

  return outputRows;
}

function escapeCsvValue(value) {
  const str = value == null ? "" : String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function writeOutputCsv(rows) {
  const header = [
    "source_domain",
    "old_url",
    "title",
    "published_at",
    "word_count",
    "new_slug",
    "new_url",
    "city_slug",
    "keep_as_is",
    "merge_into_slug",
  ];

  const lines = [];
  lines.push(header.join(","));

  for (const row of rows) {
    const line = header
      .map((key) => escapeCsvValue(row[key]))
      .join(",");
    lines.push(line);
  }

  fs.writeFileSync(OUT_PATH, lines.join("\n"), "utf8");
}

// Exécution
console.log(`📄 Lecture de ${RAW_PATH}...`);
const rawRows = readRawCsv();
console.log(`➡️  ${rawRows.length} lignes lues (hors en-tête).`);

console.log("🔁 Construction des mappings...");
const mappedRows = buildMappings(rawRows);

console.log(`💾 Écriture de ${OUT_PATH}...`);
writeOutputCsv(mappedRows);

console.log("✅ Terminé. Tu peux maintenant ouvrir BLOG-EXPORT-WITH-MAPPING.csv dans Sheets/Excel pour affiner les cas particuliers.");


