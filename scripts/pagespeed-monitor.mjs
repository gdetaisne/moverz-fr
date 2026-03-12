#!/usr/bin/env node
/**
 * pagespeed-monitor.mjs — Health check des pages GSC pour Moverz SEO
 *
 * Usage:
 *   node scripts/pagespeed-monitor.mjs              # vérifie toutes les pages avec impressions
 *   node scripts/pagespeed-monitor.mjs --limit 50   # limite à 50 pages (pour test)
 *   node scripts/pagespeed-monitor.mjs --no-psi     # skip PageSpeed Insights (HTTP + sitemap seulement)
 *
 * Ce que le script fait :
 *   1. Récupère les URLs distinctes avec impressions > 0 depuis le dernier GscSnapshot
 *   2. Fetch tous les sitemaps (/sitemap.xml + sous-sitemaps) pour construire la liste des URLs connues
 *   3. Pour chaque URL (batches parallèles de 5) :
 *      a. fetch HEAD → statut HTTP
 *      b. vérifie la présence dans le sitemap
 *      c. appelle l'API PageSpeed Insights → LCP, CLS, INP, scores mobile + desktop
 *   4. Stocke les résultats dans PagespeedResult (Neon DB, schema seo)
 *
 * Variables d'env :
 *   DATABASE_URL   — Neon PostgreSQL (requis)
 *   PSI_API_KEY    — Clé API Google PageSpeed Insights (optionnel, mais recommandé)
 *   SITE_URL       — URL de base du site (défaut : https://moverz.fr)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

// ─── Config ───────────────────────────────────────────────────────────────────
const SITE_URL = process.env.SITE_URL ?? "https://moverz.fr";
const PSI_BASE = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const BATCH_SIZE = 5;        // URLs en parallèle
const TIMEOUT_MS = 15_000;   // timeout par requête
const SITEMAP_INDEX = `${SITE_URL}/sitemap.xml`;

// ─── Helpers env ──────────────────────────────────────────────────────────────
function loadEnv() {
  try {
    const content = fs.readFileSync(path.join(ROOT, ".env"), "utf-8");
    for (const line of content.split(/\r?\n/)) {
      const idx = line.indexOf("=");
      if (idx === -1 || line.startsWith("#")) continue;
      const key = line.slice(0, idx).trim();
      const val = line.slice(idx + 1).trim();
      if (!process.env[key]) process.env[key] = val;
    }
  } catch { /* .env absent — on continue avec les vars existantes */ }
}

// ─── Parse XML naïf (pas de dépendances externes) ────────────────────────────
function extractXmlTags(xml, tag) {
  const results = [];
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "gi");
  let m;
  while ((m = re.exec(xml)) !== null) {
    results.push(m[1].trim());
  }
  return results;
}

// ─── Fetch avec timeout ───────────────────────────────────────────────────────
async function fetchWithTimeout(url, opts = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...opts, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

// ─── Sitemaps ─────────────────────────────────────────────────────────────────
async function fetchSitemapUrls() {
  const urls = new Set();

  async function parseSitemap(xmlUrl) {
    try {
      const res = await fetchWithTimeout(xmlUrl);
      if (!res.ok) return;
      const xml = await res.text();

      // Sitemap index → sous-sitemaps
      const subSitemaps = extractXmlTags(xml, "sitemap").flatMap(() => {
        return extractXmlTags(xml, "loc");
      });

      // On différencie sitemap index (contient <sitemap>) vs urlset (contient <url>)
      const locs = extractXmlTags(xml, "loc");
      const isSitemapIndex = xml.includes("<sitemapindex");

      if (isSitemapIndex) {
        // Récupère les locs qui sont des sitemap
        for (const loc of locs) {
          if (loc.includes("sitemap") || loc.endsWith(".xml")) {
            await parseSitemap(loc);
          }
        }
      } else {
        // urlset → collecter les URLs
        for (const loc of locs) {
          urls.add(loc.trim());
        }
      }
    } catch (e) {
      console.warn(`  ⚠️  Sitemap inaccessible: ${xmlUrl} (${e.message})`);
    }
  }

  await parseSitemap(SITEMAP_INDEX);
  return urls;
}

// ─── HTTP check ───────────────────────────────────────────────────────────────
async function checkHttp(url) {
  try {
    const res = await fetchWithTimeout(url, { method: "HEAD", redirect: "manual" });
    return res.status;
  } catch {
    return null; // timeout ou erreur réseau
  }
}

// ─── PageSpeed Insights ───────────────────────────────────────────────────────
async function checkPSI(url, apiKey) {
  const buildUrl = (strategy) => {
    const u = new URL(PSI_BASE);
    u.searchParams.set("url", url);
    u.searchParams.set("strategy", strategy);
    u.searchParams.set("category", "performance");
    if (apiKey) u.searchParams.set("key", apiKey);
    return u.toString();
  };

  async function fetchPSI(strategy) {
    try {
      const res = await fetchWithTimeout(buildUrl(strategy));
      if (!res.ok) {
        const txt = await res.text().catch(() => res.statusText);
        return { error: `HTTP ${res.status}: ${txt.slice(0, 200)}` };
      }
      return await res.json();
    } catch (e) {
      return { error: e.message };
    }
  }

  const [mobile, desktop] = await Promise.all([
    fetchPSI("mobile"),
    fetchPSI("desktop"),
  ]);

  const extractScore = (data) => {
    if (data?.error) return null;
    const cat = data?.lighthouseResult?.categories?.performance;
    return cat ? Math.round(cat.score * 100) : null;
  };

  const extractAudit = (data, auditId) => {
    if (data?.error) return null;
    return data?.lighthouseResult?.audits?.[auditId]?.numericValue ?? null;
  };

  const scoreMobile = extractScore(mobile);
  const scoreDesktop = extractScore(desktop);
  const lcpMobile = extractAudit(mobile, "largest-contentful-paint");   // ms → on garde ms, on divise par 1000 en base
  const clsMobile = extractAudit(mobile, "cumulative-layout-shift");
  const inpMobile = extractAudit(mobile, "interaction-to-next-paint");  // ms

  const psiError = mobile?.error || desktop?.error
    ? [mobile?.error, desktop?.error].filter(Boolean).join(" | ").slice(0, 500)
    : null;

  return {
    scoreMobile,
    scoreDesktop,
    lcpMobile: lcpMobile != null ? lcpMobile / 1000 : null,  // ms → secondes
    clsMobile,
    inpMobile,
    psiError,
  };
}

// ─── Prisma ───────────────────────────────────────────────────────────────────
async function getPrisma() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.warn("[DB] DATABASE_URL manquant — persistance ignorée");
    return null;
  }
  const { PrismaClient } = await import("@prisma/client");
  const { PrismaPg } = await import("@prisma/adapter-pg");
  const { Pool } = await import("pg");
  const pool = new Pool({ connectionString: dbUrl });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

// ─── Pages GSC depuis la DB ───────────────────────────────────────────────────
async function getPagesFromGSC(prisma) {
  // Récupère le dernier snapshot
  const snapshot = await prisma.gscSnapshot.findFirst({
    orderBy: { fetchedAt: "desc" },
    select: { id: true, fetchedAt: true, periodStart: true, periodEnd: true },
  });

  if (!snapshot) {
    console.warn("  ⚠️  Aucun snapshot GSC en base. Lance d'abord gsc-monitor.mjs");
    return [];
  }

  console.log(`  Snapshot GSC : ${snapshot.periodStart.toISOString().slice(0, 10)} → ${snapshot.periodEnd.toISOString().slice(0, 10)}`);

  // Agréger les impressions par URL sur ce snapshot
  const rows = await prisma.gscPageMetric.groupBy({
    by: ["url"],
    where: { snapshotId: snapshot.id },
    _sum: { impressions: true },
    orderBy: { _sum: { impressions: "desc" } },
  });

  return rows
    .filter((r) => (r._sum.impressions ?? 0) > 0)
    .map((r) => ({ url: r.url, impressions: r._sum.impressions ?? 0 }));
}

// ─── Traitement par batch ─────────────────────────────────────────────────────
async function processBatch(urls, sitemapUrls, skipPsi, apiKey) {
  return Promise.all(
    urls.map(async ({ url, impressions }) => {
      const httpStatus = await checkHttp(url);
      const inSitemap = sitemapUrls.has(url);

      let psiData = { scoreMobile: null, scoreDesktop: null, lcpMobile: null, clsMobile: null, inpMobile: null, psiError: null };
      if (!skipPsi && httpStatus === 200) {
        psiData = await checkPSI(url, apiKey);
      } else if (!skipPsi && httpStatus !== 200) {
        psiData.psiError = httpStatus ? `Page returns HTTP ${httpStatus}` : "Page unreachable";
      }

      return { url, impressions, httpStatus, inSitemap, ...psiData };
    })
  );
}

// ─── Rapport console ──────────────────────────────────────────────────────────
function printReport(results) {
  const total = results.length;
  const ok = results.filter((r) => r.httpStatus === 200).length;
  const errors = results.filter((r) => r.httpStatus && r.httpStatus !== 200 && r.httpStatus !== 301).length;
  const notInSitemap = results.filter((r) => !r.inSitemap).length;
  const critical = results.filter((r) => r.httpStatus && r.httpStatus >= 400 && r.impressions > 50).length;

  console.log("\n" + "═".repeat(70));
  console.log("  RÉSUMÉ HEALTH CHECK");
  console.log("═".repeat(70));
  console.log(`  Pages vérifiées  : ${total}`);
  console.log(`  HTTP 200         : ${ok} (${pct(ok, total)})`);
  console.log(`  Erreurs (4xx/5xx): ${errors}`);
  console.log(`  Hors sitemap     : ${notInSitemap} (${pct(notInSitemap, total)})`);
  console.log(`  Pages critiques* : ${critical} (${pct(critical, total)}) — >50 impr/mois + erreur`);
  console.log("  * critique = erreur HTTP + impressions > 50");

  if (critical > 0) {
    console.log("\n🚨 PAGES CRITIQUES :");
    for (const r of results.filter((r) => r.httpStatus && r.httpStatus >= 400 && r.impressions > 50)) {
      console.log(`  HTTP ${r.httpStatus} | ${r.impressions} impr | ${r.url}`);
    }
  }

  const slowPages = results.filter((r) => r.lcpMobile != null && r.lcpMobile > 4);
  if (slowPages.length > 0) {
    console.log("\n🐌 PAGES LENTES (LCP mobile > 4s) :");
    for (const r of slowPages.sort((a, b) => (b.lcpMobile ?? 0) - (a.lcpMobile ?? 0)).slice(0, 10)) {
      console.log(`  LCP ${r.lcpMobile?.toFixed(1)}s | Score ${r.scoreMobile ?? "—"} | ${r.url.replace(SITE_URL, "")}`);
    }
  }

  if (notInSitemap > 0) {
    console.log("\n📭 TOP PAGES HORS SITEMAP (par impressions) :");
    for (const r of results.filter((r) => !r.inSitemap).sort((a, b) => b.impressions - a.impressions).slice(0, 10)) {
      console.log(`  ${r.impressions} impr | HTTP ${r.httpStatus ?? "?"} | ${r.url.replace(SITE_URL, "")}`);
    }
  }

  console.log("\n" + "═".repeat(70) + "\n");
}

function pct(n, total) {
  if (!total) return "0%";
  return `${Math.round((n / total) * 100)}%`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  loadEnv();

  const args = process.argv.slice(2);
  const skipPsi = args.includes("--no-psi");
  const limitIdx = args.indexOf("--limit");
  const limit = limitIdx !== -1 ? parseInt(args[limitIdx + 1], 10) : null;
  const apiKey = process.env.PSI_API_KEY ?? null;

  console.log("\n🔍 PageSpeed Monitor — moverz.fr");
  if (skipPsi) console.log("  Mode: HTTP + sitemap uniquement (--no-psi)");
  else console.log(`  Mode: HTTP + sitemap + PSI${apiKey ? " (avec clé API)" : " (sans clé API)"}`);
  if (limit) console.log(`  Limite: ${limit} pages`);

  const prisma = await getPrisma();
  if (!prisma) {
    console.error("❌ Impossible de se connecter à la DB");
    process.exit(2);
  }

  // 1. Pages depuis GSC
  console.log("\n📋 Récupération des pages GSC...");
  let pages = await getPagesFromGSC(prisma);
  console.log(`  ${pages.length} pages avec impressions > 0`);

  if (limit) pages = pages.slice(0, limit);

  // 2. Sitemaps
  console.log("\n🗺️  Lecture des sitemaps...");
  const sitemapUrls = await fetchSitemapUrls();
  console.log(`  ${sitemapUrls.size} URLs dans les sitemaps`);

  if (pages.length === 0) {
    console.log("  Aucune page à vérifier. Fin.");
    process.exit(0);
  }

  // 3. Vérification par batches
  console.log(`\n⚙️  Vérification de ${pages.length} pages (batch de ${BATCH_SIZE})...`);
  const results = [];
  for (let i = 0; i < pages.length; i += BATCH_SIZE) {
    const batch = pages.slice(i, i + BATCH_SIZE);
    const batchResults = await processBatch(batch, sitemapUrls, skipPsi, apiKey);
    results.push(...batchResults);

    const done = Math.min(i + BATCH_SIZE, pages.length);
    const statusLine = batchResults.map((r) => {
      const httpIcon = r.httpStatus === 200 ? "✓" : r.httpStatus ? `${r.httpStatus}` : "?";
      const sitemapIcon = r.inSitemap ? "S" : "·";
      const scoreIcon = r.scoreMobile != null ? `P${r.scoreMobile}` : "";
      return `${httpIcon}${sitemapIcon}${scoreIcon}`;
    }).join(" ");
    process.stdout.write(`  [${done}/${pages.length}] ${statusLine}\n`);
  }

  // 4. Rapport console
  printReport(results);

  // 5. Persistance en DB (delete all, puis insert)
  console.log("💾 Sauvegarde en base...");
  const checkedAt = new Date();

  // Supprime les anciennes vérifications (on garde uniquement la dernière passe)
  await prisma.pagespeedResult.deleteMany({});

  const BATCH_DB = 100;
  for (let i = 0; i < results.length; i += BATCH_DB) {
    await prisma.pagespeedResult.createMany({
      data: results.slice(i, i + BATCH_DB).map((r) => ({
        checkedAt,
        url: r.url,
        impressions: r.impressions,
        httpStatus: r.httpStatus,
        inSitemap: r.inSitemap,
        scoreMobile: r.scoreMobile,
        scoreDesktop: r.scoreDesktop,
        lcpMobile: r.lcpMobile,
        clsMobile: r.clsMobile,
        inpMobile: r.inpMobile,
        psiError: r.psiError,
      })),
    });
  }

  console.log(`  ✅ ${results.length} résultats sauvegardés`);

  await prisma.$disconnect();

  // Exit code selon les problèmes détectés
  const critical = results.filter((r) => r.httpStatus && r.httpStatus >= 400 && r.impressions > 50).length;
  if (critical > 0) {
    console.log(`\n🚨 ${critical} page(s) critique(s) — exit code 1`);
    process.exit(1);
  }

  process.exit(0);
}

main().catch((e) => {
  console.error("\n❌ Erreur fatale:", e.message);
  if (process.env.NODE_ENV !== "production") console.error(e.stack);
  process.exit(2);
});
