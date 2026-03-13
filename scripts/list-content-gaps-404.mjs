#!/usr/bin/env node
/**
 * Liste les slugs blog en 404 qui n'ont PAS de contenu canonique.
 * Ces slugs sont des opportunités : créer du contenu plutôt que rediriger vers un hub.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const reportPath = path.join(root, "GSC-404-REPORT.json");
if (!fs.existsSync(reportPath)) {
  console.error("❌ GSC-404-REPORT.json introuvable. Lancez d'abord node scripts/analyze-gsc-404.mjs");
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));

function loadCanonicalSlugs() {
  const canonicalFiles = [
    "lib/blog-nouveaux-2026.ts",
    "lib/blog-content-gaps-404.ts",
    "lib/blog-canonique.ts",
    "lib/blog-markdown-posts.ts",
    "lib/blog-longtail.ts",
    "lib/blog-longtail-pack2.ts",
    "lib/blog-longtail-links.ts",
    "lib/blog-arnaques.ts",
    "lib/blog-extra.ts",
    "lib/blog-content-gaps-404.ts",
  ];
  const slugs = new Set();
  const slugRe = /slug:\s*["']([^"']+)["']/g;
  for (const rel of canonicalFiles) {
    const fp = path.join(root, rel);
    if (fs.existsSync(fp)) {
      const content = fs.readFileSync(fp, "utf8");
      let m;
      while ((m = slugRe.exec(content)) !== null) slugs.add(m[1]);
    }
  }
  return slugs;
}

const CANONICAL_SLUGS = loadCanonicalSlugs();

function pathFromUrl(url) {
  return url.replace(/^https?:\/\/moverz\.fr/, "").replace(/\/$/, "") || "/";
}

// Slug effectif : blog/parent/child → child ; blog/slug → slug
function effectiveSlugFromPath(p) {
  if (!p.startsWith("/blog/")) return null;
  const blogPath = p.replace(/^\//, "").replace(/\/$/, "");
  const slug = blogPath.replace("blog/", "");
  return slug.includes("/") ? slug.split("/").pop() : slug;
}

const gaps = new Map(); // slug -> { urls: [], flatUrl }

for (const url of report.categories.blog.urls) {
  const p = pathFromUrl(url);
  const effectiveSlug = effectiveSlugFromPath(p);
  if (!effectiveSlug) continue;
  if (effectiveSlug.startsWith("$") || effectiveSlug.length < 4) continue; // slugs invalides
  if (CANONICAL_SLUGS.has(effectiveSlug)) continue; // a du contenu, on ignore

  if (!gaps.has(effectiveSlug)) {
    gaps.set(effectiveSlug, { slug: effectiveSlug, urls: [], flatUrl: `/blog/${effectiveSlug}` });
  }
  gaps.get(effectiveSlug).urls.push(url);
}

const list = Array.from(gaps.values())
  .sort((a, b) => a.slug.localeCompare(b.slug))
  .map(({ slug, urls, flatUrl }) => ({ slug, flatUrl, urls: urls.length }));

const outPath = path.join(root, "CONTENT-GAPS-404.json");
fs.writeFileSync(outPath, JSON.stringify({ count: list.length, slugs: list }, null, 2), "utf8");

console.log(`✅ ${list.length} slugs sans contenu (opportunités de création)`);
console.log(`   Exporté dans ${outPath}`);
