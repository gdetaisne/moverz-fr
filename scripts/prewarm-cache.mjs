#!/usr/bin/env node
/**
 * Script de prewarm du cache Cloudflare après déploiement CapRover
 * 
 * Usage :
 *   node scripts/prewarm-cache.mjs
 *   node scripts/prewarm-cache.mjs --purge   (purge CF avant prewarm, nécessite CF_API_TOKEN + CF_ZONE_ID)
 * 
 * Variables d'env optionnelles pour la purge Cloudflare :
 *   CF_API_TOKEN=xxx
 *   CF_ZONE_ID=xxx
 */

const BASE_URL = process.env.SITE_URL || 'https://moverz.fr';
const CONCURRENCY = 5; // Parallélisme — ne pas DDoS son propre VPS
const DELAY_MS = 200;  // Délai entre batches

// ─── Pages stratégiques P0 (toujours préchauffer) ────────────────────────────
const PRIORITY_URLS = [
  '/',
  '/comparateur-demenageurs/',
  '/label-moverz/',
  '/comment-ca-marche/',
  '/pourquoi-moverz/',
  '/blog/',
  '/villes/',
  // Pages ville core (les plus importantes GSC)
  '/demenagement/bordeaux/',
  '/demenagement/lyon/',
  '/demenagement/marseille/',
  '/demenagement/toulouse/',
  '/demenagement/lille/',
  '/demenagement/nice/',
  '/demenagement/nantes/',
  '/demenagement/strasbourg/',
  '/demenagement/rennes/',
  '/demenagement/montpellier/',
  '/demenagement/paris/',
  '/demenagement/rouen/',
  // Articles blog à trafic prouvé (GA_TRAFFIC_SLUGS issus de blog/[slug]/page.tsx)
  '/blog/eviter-arnaques-demenagement/',
  '/blog/prix-demenageur-rouen-2025/',
  '/blog/demenagement-piano-nantes-prix/',
  '/blog/prix-garde-meuble-montpellier-2025/',
  '/blog/meilleur-demenageur-rennes-2025/',
  '/blog/meilleurs-demenageurs-lyon/',
  '/blog/shurgard-lyon-sites-tarifs/',
  '/blog/comparatif-formules-economiques-demenagement-nantes/',
  '/blog/comparer-plateformes-devis-demenagement-2026/',
  '/blog/comment-verifier-demenageur-fiable/',
  '/blog/label-moverz-certification-demenageurs/',
  '/blog/comparatif-prix-demenageurs-economiques-montpellier/',
  '/blog/estimation-prix-demenagement-bordeaux-methode-simple/',
  '/blog/tarif-horaire-demenageur-rennes/',
  '/blog/devis-demenagement-lille-obtenir-comparer/',
  // Corridors premium
  '/paris-vers-lyon/',
  '/paris-vers-bordeaux/',
  '/paris-vers-marseille/',
  '/lyon-vers-paris/',
  '/bordeaux-vers-paris/',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUrl(url) {
  const start = Date.now();
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Moverz-Prewarm/1.0 (+https://moverz.fr)' },
      signal: AbortSignal.timeout(10000),
    });
    const ttfb = Date.now() - start;
    const cacheStatus = res.headers.get('cf-cache-status') || res.headers.get('x-cache') || 'unknown';
    const status = res.status;
    console.log(`${status === 200 ? '✓' : '✗'} [${status}] ${ttfb}ms [${cacheStatus}] ${url}`);
    return { url, status, ttfb, cacheStatus, ok: res.ok };
  } catch (err) {
    console.log(`✗ [ERR] ${url} — ${err.message}`);
    return { url, status: 0, ttfb: 0, cacheStatus: 'error', ok: false };
  }
}

async function purgeCloudflareCacheIfConfigured() {
  const token = process.env.CF_API_TOKEN;
  const zoneId = process.env.CF_ZONE_ID;

  if (!token || !zoneId) {
    console.log('ℹ  CF_API_TOKEN / CF_ZONE_ID non définis → purge CF ignorée');
    return;
  }

  console.log('⟳  Purge cache Cloudflare en cours...');
  try {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ purge_everything: true }),
      }
    );
    const data = await res.json();
    if (data.success) {
      console.log('✓  Cache Cloudflare purgé');
    } else {
      console.log('✗  Purge CF échouée :', JSON.stringify(data.errors));
    }
  } catch (err) {
    console.log('✗  Purge CF erreur :', err.message);
  }
}

async function runBatch(urls) {
  const results = await Promise.all(urls.map(u => fetchUrl(`${BASE_URL}${u}`)));
  return results;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const shouldPurge = process.argv.includes('--purge');
  const startTime = Date.now();

  console.log(`\n🚀 Prewarm cache — ${BASE_URL}`);
  console.log(`   ${PRIORITY_URLS.length} URLs | concurrence ${CONCURRENCY} | délai ${DELAY_MS}ms\n`);

  // 1. Purge CF si demandé
  if (shouldPurge) {
    await purgeCloudflareCacheIfConfigured();
    console.log('   Attente 2s après purge...\n');
    await sleep(2000);
  }

  // 2. Prewarm en batches
  const allResults = [];
  for (let i = 0; i < PRIORITY_URLS.length; i += CONCURRENCY) {
    const batch = PRIORITY_URLS.slice(i, i + CONCURRENCY);
    const results = await runBatch(batch);
    allResults.push(...results);
    if (i + CONCURRENCY < PRIORITY_URLS.length) {
      await sleep(DELAY_MS);
    }
  }

  // 3. Rapport final
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  const ok = allResults.filter(r => r.ok).length;
  const errors = allResults.filter(r => !r.ok).length;
  const avgTtfb = Math.round(allResults.filter(r => r.ttfb > 0).reduce((s, r) => s + r.ttfb, 0) / allResults.filter(r => r.ttfb > 0).length);
  const cacheHits = allResults.filter(r => r.cacheStatus === 'HIT').length;

  console.log(`\n${'─'.repeat(50)}`);
  console.log(`✓ ${ok} OK  ✗ ${errors} erreurs  ⏱ ${elapsed}s`);
  console.log(`TTFB moyen : ${avgTtfb}ms`);
  console.log(`Cache HIT  : ${cacheHits}/${allResults.length} (${Math.round(cacheHits/allResults.length*100)}%)`);
  if (errors > 0) {
    console.log('\nURLs en erreur :');
    allResults.filter(r => !r.ok).forEach(r => console.log(`  - ${r.url}`));
  }
  console.log('');
}

main().catch(err => {
  console.error('Erreur fatale :', err);
  process.exit(1);
});
