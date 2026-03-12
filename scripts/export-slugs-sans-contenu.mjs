#!/usr/bin/env node

/**
 * Exporte les 256 slugs sans contenu avec leurs métadonnées (title, description, city, category)
 * pour planifier la création de contenu SEO/E-A-A-T.
 */

import { readFileSync, readdirSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Parser blog-data.ts : extraire { slug, title, description, citySlug, category } pour chaque entrée
const blogDataPath = join(root, "lib/blog-data.ts");
const content = readFileSync(blogDataPath, "utf-8");

const entries = [];
const blockRe = /\{\s*slug:\s*["']([^"']+)["'],\s*title:\s*["']([^"']*(?:\\.[^"']*)*)["'],\s*description:\s*["']([^"']*(?:\\.[^"']*)*)["'][\s\S]*?category:\s*["']?([^"',\s]+)["']?[\s\S]*?(?:citySlug:\s*["']([^"']*)["'])?[\s\S]*?readingTimeMinutes:\s*(\d+)/g;

// Fallback: parse bloc par bloc
const blocks = content.split(/\},\s*\{/).map((b) => "{" + b.replace(/^\s*\{/, "") + "}");
for (const block of blocks) {
  const slug = block.match(/slug:\s*["']([^"']+)["']/)?.[1];
  if (!slug) continue;
  const title = block.match(/title:\s*["']([^"']*(?:\\.[^"']*)*)["']/)?.[1]?.replace(/\\"/g, '"') ?? "";
  const desc = block.match(/description:\s*["']([^"']*(?:\\.[^"']*)*)["']/)?.[1]?.replace(/\\"/g, '"') ?? "";
  const category = block.match(/category:\s*["']?([^"',\n]+)["']?/)?.[1]?.trim() ?? "";
  const citySlug = block.match(/citySlug:\s*["']([^"']*)["']/)?.[1] ?? null;
  const readingTime = parseInt(block.match(/readingTimeMinutes:\s*(\d+)/)?.[1] ?? "8", 10);
  entries.push({ slug, title, description: desc, category, citySlug, readingTimeMinutes: readingTime });
}

// Charger les slugs canoniques (même logique que investigate)
function extractSlugsFromFile(filePath) {
  try {
    const c = readFileSync(filePath, "utf-8");
    const slugs = new Set();
    let m;
    const re = /slug:\s*["']([^"']+)["']/g;
    while ((m = re.exec(c)) !== null) slugs.add(m[1]);
    return slugs;
  } catch {
    return new Set();
  }
}

const canonicalFiles = [
  "lib/blog-canonique.ts",
  "lib/blog-nouveaux-2026.ts",
  "lib/blog-markdown-posts.ts",
  "lib/blog-longtail.ts",
  "lib/blog-longtail-pack2.ts",
  "lib/blog-arnaques.ts",
  "lib/blog-pro-canonique.ts",
];

const canonicalSlugs = new Set();
for (const rel of canonicalFiles) {
  extractSlugsFromFile(join(root, rel)).forEach((s) => canonicalSlugs.add(s));
}

try {
  readdirSync(join(root, "content/blog")).forEach((f) => {
    if (f.endsWith(".md")) {
      const c = readFileSync(join(root, "content/blog", f), "utf-8");
      const fm = c.match(/slug:\s*["']?([^\s"'\n]+)["']?/m);
      if (fm) canonicalSlugs.add(fm[1]);
    }
  });
} catch {}

const metaBySlug = new Map(entries.map((e) => [e.slug, e]));
const sansContenu = entries.filter((e) => !canonicalSlugs.has(e.slug));

// Filtrer slugs invalides (encodés, internes, listes)
const EXCLUS = ["liste-complete", "pilier-03", "pilier-09", "rapport-final", "articles-pilier"];
const slugsValides = sansContenu.filter(
  (e) =>
    !e.slug.includes("%") &&
    !EXCLUS.some((x) => e.slug.includes(x)) &&
    e.slug.length > 3
);

const output = {
  generatedAt: new Date().toISOString(),
  total: slugsValides.length,
  slugs: slugsValides.map((e) => ({
    slug: e.slug,
    title: e.title,
    description: e.description,
    category: e.category,
    citySlug: e.citySlug,
    readingTimeMinutes: e.readingTimeMinutes,
  })),
};

const outPath = join(root, "SLUGS-A-REDIGER.json");
writeFileSync(outPath, JSON.stringify(output, null, 2), "utf-8");
console.log(`✅ Exporté ${slugsValides.length} slugs vers ${outPath}`);
