#!/usr/bin/env node
/**
 * gsc-monitor.mjs — Automated GSC monitoring for Moverz SEO
 *
 * Usage:
 *   node scripts/gsc-monitor.mjs              # default: last 28 days vs previous 28 days
 *   node scripts/gsc-monitor.mjs --days 7     # last 7 days vs previous 7 days
 *   node scripts/gsc-monitor.mjs --days 14    # last 14 days vs previous 14 days
 *
 * Requires GOOGLE_SERVICE_ACCOUNT_JSON in .env (project root)
 *
 * Output:
 *   - Console summary
 *   - reports/gsc-monitor-YYYY-MM-DD.json  (full data)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { google } from "googleapis";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

// ─── Config ──────────────────────────────────────────────────────────────────
const SITE_URL = "sc-domain:moverz.fr";
const SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"];

// Content clusters for grouping
const CLUSTERS = [
  { name: "Villes (core)", pattern: /^\/demenagement\/[a-z-]+\/$/ },
  { name: "Guides villes", pattern: /^\/demenagement\/[a-z-]+\/guide\/$/ },
  { name: "Services villes", pattern: /^\/demenagement\/[a-z-]+\/[a-z-]+\/$/ },
  { name: "Blog", pattern: /^\/blog\// },
  { name: "Corridors", pattern: /^\/demenagement-[a-z]+-[a-z]+\// },
  { name: "Quartiers", pattern: /^\/quartiers-/ },
  { name: "Pages statiques", pattern: /^\/(villes|comment-ca-marche|a-propos|mentions-legales|prix-demenagement|pro)\/?$/ },
  { name: "Homepage", pattern: /^\/$/ },
];

function classifyUrl(pageUrl) {
  try {
    const u = new URL(pageUrl);
    const p = u.pathname;
    for (const c of CLUSTERS) {
      if (c.pattern.test(p)) return c.name;
    }
  } catch {
    // ignore
  }
  return "Autres";
}

// ─── Auth ────────────────────────────────────────────────────────────────────
function loadServiceAccountKey() {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) {
    throw new Error("❌ .env not found at project root. Add GOOGLE_SERVICE_ACCOUNT_JSON.");
  }

  const envContent = fs.readFileSync(envPath, "utf-8");
  const lines = envContent.split("\n");
  let raw = "";
  for (const line of lines) {
    const idx = line.indexOf("=");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    if (key === "GOOGLE_SERVICE_ACCOUNT_JSON") {
      raw = line.slice(idx + 1).trim();
      // Remove surrounding quotes if present
      if ((raw.startsWith("'") && raw.endsWith("'")) || (raw.startsWith('"') && raw.endsWith('"'))) {
        raw = raw.slice(1, -1);
      }
      break;
    }
  }

  if (!raw) throw new Error("❌ GOOGLE_SERVICE_ACCOUNT_JSON not found in .env");

  return JSON.parse(raw);
}

async function getAuthClient() {
  const creds = loadServiceAccountKey();
  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: SCOPES,
  });
  return auth;
}

// ─── Date helpers ────────────────────────────────────────────────────────────
function fmtDate(d) {
  return d.toISOString().slice(0, 10);
}

function addDays(d, n) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

// ─── GSC queries ─────────────────────────────────────────────────────────────
async function queryPerformance(searchconsole, startDate, endDate, dimensions = ["page"]) {
  const rows = [];
  let startRow = 0;
  const BATCH = 25000;

  while (true) {
    const res = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions,
        rowLimit: BATCH,
        startRow,
      },
    });

    const batch = res.data.rows || [];
    rows.push(...batch);
    if (batch.length < BATCH) break;
    startRow += BATCH;
  }

  return rows;
}

async function queryTopQueries(searchconsole, startDate, endDate, limit = 50) {
  const res = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate,
      endDate,
      dimensions: ["query"],
      rowLimit: limit,
    },
  });
  return res.data.rows || [];
}

async function queryDailyTotals(searchconsole, startDate, endDate) {
  const res = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate,
      endDate,
      dimensions: ["date"],
      rowLimit: 500,
    },
  });
  return res.data.rows || [];
}

// ─── Analysis ────────────────────────────────────────────────────────────────
function aggregateByCluster(rows) {
  const clusters = {};
  for (const row of rows) {
    const page = row.keys[0];
    const cluster = classifyUrl(page);
    if (!clusters[cluster]) {
      clusters[cluster] = { clicks: 0, impressions: 0, ctr: 0, position: 0, pages: 0 };
    }
    clusters[cluster].clicks += row.clicks;
    clusters[cluster].impressions += row.impressions;
    clusters[cluster].pages += 1;
  }

  // Compute weighted averages
  for (const c of Object.values(clusters)) {
    c.ctr = c.impressions > 0 ? c.clicks / c.impressions : 0;
    c.position = 0; // Will compute below
  }

  // Weighted average position per cluster
  for (const row of rows) {
    const page = row.keys[0];
    const cluster = classifyUrl(page);
    if (clusters[cluster].impressions > 0) {
      clusters[cluster].position += row.position * (row.impressions / clusters[cluster].impressions);
    }
  }

  return clusters;
}

function computeDelta(current, previous) {
  const delta = {};
  const allKeys = new Set([...Object.keys(current), ...Object.keys(previous)]);

  for (const key of allKeys) {
    const cur = current[key] || { clicks: 0, impressions: 0, ctr: 0, position: 0, pages: 0 };
    const prev = previous[key] || { clicks: 0, impressions: 0, ctr: 0, position: 0, pages: 0 };

    delta[key] = {
      clicks: { current: cur.clicks, previous: prev.clicks, delta: cur.clicks - prev.clicks, pct: prev.clicks > 0 ? ((cur.clicks - prev.clicks) / prev.clicks) * 100 : null },
      impressions: { current: cur.impressions, previous: prev.impressions, delta: cur.impressions - prev.impressions, pct: prev.impressions > 0 ? ((cur.impressions - prev.impressions) / prev.impressions) * 100 : null },
      ctr: { current: cur.ctr, previous: prev.ctr, delta: cur.ctr - prev.ctr },
      position: { current: cur.position, previous: prev.position, delta: cur.position - prev.position },
      pages: { current: cur.pages, previous: prev.pages },
    };
  }

  return delta;
}

function computeTotals(rows) {
  let clicks = 0, impressions = 0;
  for (const r of rows) {
    clicks += r.clicks;
    impressions += r.impressions;
  }
  return {
    clicks,
    impressions,
    ctr: impressions > 0 ? clicks / impressions : 0,
  };
}

// ─── Alerts ──────────────────────────────────────────────────────────────────
function generateAlerts(delta, totals) {
  const alerts = [];

  // Check overall clicks decline
  const totalClicksCur = Object.values(delta).reduce((s, d) => s + d.clicks.current, 0);
  const totalClicksPrev = Object.values(delta).reduce((s, d) => s + d.clicks.previous, 0);
  if (totalClicksPrev > 0) {
    const pct = ((totalClicksCur - totalClicksPrev) / totalClicksPrev) * 100;
    if (pct < -20) {
      alerts.push({ level: "🔴 CRITICAL", message: `Clicks totaux: ${pct.toFixed(1)}% (${totalClicksCur} vs ${totalClicksPrev})` });
    } else if (pct < -10) {
      alerts.push({ level: "🟠 WARNING", message: `Clicks totaux: ${pct.toFixed(1)}% (${totalClicksCur} vs ${totalClicksPrev})` });
    }
  }

  // Check per-cluster decline
  for (const [cluster, d] of Object.entries(delta)) {
    if (d.clicks.previous > 20 && d.clicks.pct !== null && d.clicks.pct < -30) {
      alerts.push({ level: "🟠 WARNING", message: `${cluster}: clicks ${d.clicks.pct.toFixed(1)}% (${d.clicks.current} vs ${d.clicks.previous})` });
    }
    if (d.impressions.previous > 100 && d.impressions.pct !== null && d.impressions.pct < -30) {
      alerts.push({ level: "🟡 INFO", message: `${cluster}: impressions ${d.impressions.pct.toFixed(1)}% (${d.impressions.current} vs ${d.impressions.previous})` });
    }
  }

  // Check position degradation
  for (const [cluster, d] of Object.entries(delta)) {
    if (d.position.previous > 0 && d.position.current > 0) {
      const posDelta = d.position.current - d.position.previous;
      if (posDelta > 5) {
        alerts.push({ level: "🟠 WARNING", message: `${cluster}: position moyenne ${d.position.previous.toFixed(1)} → ${d.position.current.toFixed(1)} (+${posDelta.toFixed(1)})` });
      }
    }
  }

  return alerts;
}

// ─── Top losers / winners ────────────────────────────────────────────────────
function findMovers(currentRows, previousRows, topN = 10) {
  const curMap = new Map();
  const prevMap = new Map();

  for (const r of currentRows) curMap.set(r.keys[0], r);
  for (const r of previousRows) prevMap.set(r.keys[0], r);

  const allPages = new Set([...curMap.keys(), ...prevMap.keys()]);
  const deltas = [];

  for (const page of allPages) {
    const cur = curMap.get(page) || { clicks: 0, impressions: 0 };
    const prev = prevMap.get(page) || { clicks: 0, impressions: 0 };
    deltas.push({
      page,
      clicksCurrent: cur.clicks,
      clicksPrevious: prev.clicks,
      clicksDelta: cur.clicks - prev.clicks,
      impressionsDelta: cur.impressions - prev.impressions,
    });
  }

  deltas.sort((a, b) => a.clicksDelta - b.clicksDelta);

  return {
    losers: deltas.slice(0, topN),
    winners: deltas.slice(-topN).reverse(),
  };
}

// ─── Display ─────────────────────────────────────────────────────────────────
function pct(n) {
  if (n === null || n === undefined) return "N/A";
  const sign = n >= 0 ? "+" : "";
  return `${sign}${n.toFixed(1)}%`;
}

function arrow(n) {
  if (n > 0) return "↑";
  if (n < 0) return "↓";
  return "→";
}

function printReport(report) {
  const { period, alerts, delta, topQueries, movers, dailyTrend } = report;

  console.log("\n" + "═".repeat(70));
  console.log("  📊 GSC MONITORING REPORT — moverz.fr");
  console.log("═".repeat(70));
  console.log(`  Période : ${period.current.start} → ${period.current.end}`);
  console.log(`  Compare : ${period.previous.start} → ${period.previous.end}`);
  console.log("─".repeat(70));

  // Alerts
  if (alerts.length > 0) {
    console.log("\n⚠️  ALERTES :");
    for (const a of alerts) {
      console.log(`  ${a.level} ${a.message}`);
    }
  } else {
    console.log("\n✅ Aucune alerte — tout semble normal.");
  }

  // Cluster breakdown
  console.log("\n📁 PERFORMANCE PAR CLUSTER :\n");
  console.log("  Cluster                 │ Clicks (Δ)         │ Impressions (Δ)     │ CTR      │ Pos.");
  console.log("  ─────────────────────── │ ────────────────── │ ─────────────────── │ ──────── │ ─────");

  const sortedClusters = Object.entries(delta).sort((a, b) => b[1].clicks.current - a[1].clicks.current);
  for (const [cluster, d] of sortedClusters) {
    const cl = cluster.padEnd(24);
    const clicks = `${d.clicks.current} (${pct(d.clicks.pct)})`.padEnd(19);
    const impr = `${d.impressions.current} (${pct(d.impressions.pct)})`.padEnd(20);
    const ctr = `${(d.ctr.current * 100).toFixed(1)}%`.padEnd(9);
    const pos = d.position.current > 0 ? d.position.current.toFixed(1) : "—";
    console.log(`  ${cl}│ ${clicks}│ ${impr}│ ${ctr}│ ${pos}`);
  }

  // Top queries
  if (topQueries.current.length > 0) {
    console.log("\n🔍 TOP 20 REQUÊTES (période actuelle) :\n");
    console.log("  #   │ Requête                                 │ Clicks │ Impr.  │ CTR    │ Pos.");
    console.log("  ─── │ ─────────────────────────────────────── │ ────── │ ────── │ ────── │ ─────");
    topQueries.current.slice(0, 20).forEach((q, i) => {
      const num = String(i + 1).padStart(3);
      const query = q.keys[0].slice(0, 40).padEnd(40);
      const clicks = String(q.clicks).padStart(6);
      const impr = String(q.impressions).padStart(6);
      const ctr = `${(q.ctr * 100).toFixed(1)}%`.padStart(6);
      const pos = q.position.toFixed(1).padStart(5);
      console.log(`  ${num} │ ${query}│ ${clicks} │ ${impr} │ ${ctr} │ ${pos}`);
    });
  }

  // Top movers
  if (movers.losers.length > 0) {
    console.log("\n📉 TOP PAGES EN BAISSE (clicks) :\n");
    for (const m of movers.losers.filter(m => m.clicksDelta < 0).slice(0, 10)) {
      const url = m.page.replace("https://moverz.fr", "");
      console.log(`  ${m.clicksDelta > 0 ? "+" : ""}${m.clicksDelta} clicks │ ${url} │ (${m.clicksPrevious} → ${m.clicksCurrent})`);
    }
  }

  if (movers.winners.length > 0) {
    console.log("\n📈 TOP PAGES EN HAUSSE (clicks) :\n");
    for (const m of movers.winners.filter(m => m.clicksDelta > 0).slice(0, 10)) {
      const url = m.page.replace("https://moverz.fr", "");
      console.log(`  +${m.clicksDelta} clicks │ ${url} │ (${m.clicksPrevious} → ${m.clicksCurrent})`);
    }
  }

  // Daily trend (last 7 days)
  if (dailyTrend.length > 0) {
    console.log("\n📅 TENDANCE QUOTIDIENNE (derniers jours) :\n");
    const last7 = dailyTrend.slice(-7);
    for (const d of last7) {
      const bar = "█".repeat(Math.min(50, Math.round(d.clicks / (Math.max(...last7.map(x => x.clicks)) || 1) * 40)));
      console.log(`  ${d.keys[0]} │ ${String(d.clicks).padStart(4)} clicks │ ${bar}`);
    }
  }

  console.log("\n" + "═".repeat(70));
  console.log(`  Rapport sauvegardé → ${report.outputFile}`);
  console.log("═".repeat(70) + "\n");
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  // Parse args
  const args = process.argv.slice(2);
  let days = 28;
  const daysIdx = args.indexOf("--days");
  if (daysIdx !== -1 && args[daysIdx + 1]) {
    days = parseInt(args[daysIdx + 1], 10);
    if (isNaN(days) || days < 1 || days > 90) {
      console.error("❌ --days must be between 1 and 90");
      process.exit(1);
    }
  }

  console.log(`\n🔄 Connecting to GSC (période: ${days} jours)...`);

  const auth = await getAuthClient();
  const searchconsole = google.searchconsole({ version: "v1", auth });

  // GSC data has ~3 day lag
  const today = new Date();
  const endDate = addDays(today, -3);
  const startDate = addDays(endDate, -days);
  const prevEndDate = addDays(startDate, -1);
  const prevStartDate = addDays(prevEndDate, -days);

  const period = {
    current: { start: fmtDate(startDate), end: fmtDate(endDate) },
    previous: { start: fmtDate(prevStartDate), end: fmtDate(prevEndDate) },
  };

  console.log(`  Actuelle  : ${period.current.start} → ${period.current.end}`);
  console.log(`  Précédente: ${period.previous.start} → ${period.previous.end}`);

  // Fetch data in parallel
  console.log("\n📥 Fetching GSC data...");
  const [
    currentPages,
    previousPages,
    currentQueries,
    previousQueries,
    dailyTrend,
  ] = await Promise.all([
    queryPerformance(searchconsole, period.current.start, period.current.end, ["page"]),
    queryPerformance(searchconsole, period.previous.start, period.previous.end, ["page"]),
    queryTopQueries(searchconsole, period.current.start, period.current.end, 50),
    queryTopQueries(searchconsole, period.previous.start, period.previous.end, 50),
    queryDailyTotals(searchconsole, period.current.start, period.current.end),
  ]);

  console.log(`  ✅ Pages: ${currentPages.length} (actuel), ${previousPages.length} (précédent)`);
  console.log(`  ✅ Requêtes: ${currentQueries.length} (actuel)`);
  console.log(`  ✅ Jours: ${dailyTrend.length}`);

  // Analyze
  const currentClusters = aggregateByCluster(currentPages);
  const previousClusters = aggregateByCluster(previousPages);
  const delta = computeDelta(currentClusters, previousClusters);
  const currentTotals = computeTotals(currentPages);
  const previousTotals = computeTotals(previousPages);
  const alerts = generateAlerts(delta, { current: currentTotals, previous: previousTotals });
  const movers = findMovers(currentPages, previousPages, 15);

  // Build report
  const report = {
    generatedAt: new Date().toISOString(),
    period,
    days,
    totals: {
      current: currentTotals,
      previous: previousTotals,
      clicksDelta: currentTotals.clicks - previousTotals.clicks,
      clicksPct: previousTotals.clicks > 0 ? ((currentTotals.clicks - previousTotals.clicks) / previousTotals.clicks) * 100 : null,
      impressionsDelta: currentTotals.impressions - previousTotals.impressions,
      impressionsPct: previousTotals.impressions > 0 ? ((currentTotals.impressions - previousTotals.impressions) / previousTotals.impressions) * 100 : null,
    },
    alerts,
    delta,
    topQueries: {
      current: currentQueries.map((r) => ({ ...r })),
      previous: previousQueries.map((r) => ({ ...r })),
    },
    movers,
    dailyTrend: dailyTrend.map((r) => ({ ...r })),
    outputFile: "",
  };

  // Save report
  const reportsDir = path.join(ROOT, "reports");
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  const outputFile = path.join(reportsDir, `gsc-monitor-${fmtDate(today)}.json`);
  report.outputFile = path.relative(ROOT, outputFile);
  fs.writeFileSync(outputFile, JSON.stringify(report, null, 2), "utf-8");

  // Display
  printReport(report);

  // Exit code: 1 if critical alerts
  const hasCritical = alerts.some((a) => a.level.includes("CRITICAL"));
  process.exit(hasCritical ? 1 : 0);
}

main().catch((err) => {
  console.error("❌ GSC Monitor error:", err.message || err);
  process.exit(2);
});
