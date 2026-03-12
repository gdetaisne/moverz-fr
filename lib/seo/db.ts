/**
 * lib/seo/db.ts
 * Client Prisma + fonctions de lecture GSC pour le dashboard /seo/
 */
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

function createPrismaClient() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL manquant");
  const pool = new Pool({ connectionString: url });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// ─── Dernière snapshot ────────────────────────────────────────────────────────

export async function getLatestSnapshot() {
  return prisma.gscSnapshot.findFirst({
    orderBy: { fetchedAt: "desc" },
    include: { totals: true, alerts: true },
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

type DateRange = { from?: Date; to?: Date };

function dateFilter(snapshotId: string, range?: DateRange) {
  return {
    snapshotId,
    ...(range?.from || range?.to
      ? { date: { ...(range.from ? { gte: range.from } : {}), ...(range.to ? { lte: range.to } : {}) } }
      : {}),
  };
}

// ─── KPIs globaux calculés depuis GscPageMetric (respecte le filtre date) ─────

export async function getKpis(snapshotId: string, range?: DateRange) {
  const agg = await prisma.gscPageMetric.aggregate({
    where: dateFilter(snapshotId, range),
    _sum: { clicks: true, impressions: true },
    _avg: { ctr: true, position: true },
  });
  return {
    clicks:      agg._sum.clicks      ?? 0,
    impressions: agg._sum.impressions ?? 0,
    ctr:         agg._avg.ctr         ?? 0,
    position:    agg._avg.position    ?? 0,
  };
}



export async function getTopPages(snapshotId: string, limit = 20, range?: DateRange) {
  return prisma.gscPageMetric.groupBy({
    by: ["url", "cluster"],
    where: dateFilter(snapshotId, range),
    _sum: { clicks: true, impressions: true },
    _avg: { position: true, ctr: true },
    orderBy: { _sum: { clicks: "desc" } },
    take: limit,
  });
}

// ─── Top requêtes ────────────────────────────────────────────────────────────

export async function getTopQueries(snapshotId: string, limit = 30, range?: DateRange) {
  return prisma.gscQueryMetric.groupBy({
    by: ["query"],
    where: dateFilter(snapshotId, range),
    _sum: { clicks: true, impressions: true },
    _avg: { position: true, ctr: true },
    orderBy: { _sum: { clicks: "desc" } },
    take: limit,
  });
}

// ─── Tendance quotidienne ─────────────────────────────────────────────────────

export async function getDailyTrend(snapshotId: string, range?: DateRange) {
  return prisma.gscPageMetric.groupBy({
    by: ["date"],
    where: dateFilter(snapshotId, range),
    _sum: { clicks: true, impressions: true },
    orderBy: { date: "asc" },
  });
}

// ─── Performance par cluster ──────────────────────────────────────────────────

export async function getClusterStats(snapshotId: string, range?: DateRange) {
  return prisma.gscPageMetric.groupBy({
    by: ["cluster"],
    where: dateFilter(snapshotId, range),
    _sum: { clicks: true, impressions: true },
    _avg: { position: true, ctr: true },
    orderBy: { _sum: { clicks: "desc" } },
  });
}

// ─── Comptage URLs distinctes par cluster dans GSC ────────────────────────────

export async function getGscPageCountByCluster(snapshotId: string, range?: DateRange) {
  const rows = await prisma.gscPageMetric.findMany({
    where: dateFilter(snapshotId, range),
    select: { url: true, cluster: true },
    distinct: ["url", "cluster"],
  });
  const counts: Record<string, number> = {};
  for (const r of rows) {
    counts[r.cluster] = (counts[r.cluster] ?? 0) + 1;
  }
  return counts;
}

// ─── Breakdown cluster × attribution2 ────────────────────────────────────────

export async function getClusterBreakdown(snapshotId: string, range?: DateRange) {
  return prisma.gscPageMetric.groupBy({
    by: ["cluster", "attribution2"],
    where: dateFilter(snapshotId, range),
    _sum: { clicks: true, impressions: true },
    _avg: { position: true, ctr: true },
    orderBy: { _sum: { clicks: "desc" } },
  });
}

// ─── Plage de dates disponibles en base ───────────────────────────────────────

export async function getDateRange(snapshotId: string) {
  const [minRow, maxRow] = await Promise.all([
    prisma.gscPageMetric.findFirst({
      where: { snapshotId },
      orderBy: { date: "asc" },
      select: { date: true },
    }),
    prisma.gscPageMetric.findFirst({
      where: { snapshotId },
      orderBy: { date: "desc" },
      select: { date: true },
    }),
  ]);
  return {
    min: minRow?.date ?? new Date(),
    max: maxRow?.date ?? new Date(),
  };
}

// ─── Historique d'une URL ─────────────────────────────────────────────────────

export async function getPageHistory(url: string, days = 90) {
  const since = new Date();
  since.setDate(since.getDate() - days);
  return prisma.gscPageMetric.groupBy({
    by: ["date"],
    where: { url: { contains: url }, date: { gte: since } },
    _sum: { clicks: true, impressions: true },
    _avg: { position: true },
    orderBy: { date: "asc" },
  });
}

// ─── Alertes récentes ────────────────────────────────────────────────────────

export async function getRecentAlerts(limit = 50) {
  return prisma.gscAlert.findMany({
    orderBy: { snapshot: { fetchedAt: "desc" } },
    include: { snapshot: { select: { fetchedAt: true, periodStart: true, periodEnd: true } } },
    take: limit,
  });
}

// ─── Liste des snapshots ──────────────────────────────────────────────────────

export async function listSnapshots() {
  return prisma.gscSnapshot.findMany({
    orderBy: { fetchedAt: "desc" },
    include: {
      totals: true,
      _count: { select: { pageMetrics: true, queryMetrics: true, alerts: true } },
    },
  });
}

// ─── Tableau pages avec double attribution ────────────────────────────────────

export async function getPageTable(
  snapshotId: string,
  opts: {
    cluster?: string;
    attribution2?: string;
    limit?: number;
    offset?: number;
  } = {}
) {
  const { cluster, attribution2, limit = 200, offset = 0 } = opts;

  const where: Record<string, unknown> = { snapshotId };
  if (cluster) where.cluster = cluster;
  if (attribution2) where.attribution2 = attribution2;

  const rows = await prisma.gscPageMetric.groupBy({
    by: ["url", "cluster", "attribution2"],
    where,
    _sum: { clicks: true, impressions: true },
    _avg: { position: true, ctr: true },
    orderBy: { _sum: { clicks: "desc" } },
    take: limit,
    skip: offset,
  });

  return rows;
}

// ─── PageSpeed / Health Check ─────────────────────────────────────────────────

export async function getLatestPagespeedResults() {
  // Toutes les entrées de la dernière vérification (checkedAt max)
  const latest = await prisma.pagespeedResult.findFirst({
    orderBy: { checkedAt: "desc" },
    select: { checkedAt: true },
  });

  if (!latest) return { checkedAt: null, results: [] };

  const results = await prisma.pagespeedResult.findMany({
    where: { checkedAt: latest.checkedAt },
    orderBy: { impressions: "desc" },
  });

  return { checkedAt: latest.checkedAt, results };
}

export async function getPagespeedSummary() {
  const { checkedAt, results } = await getLatestPagespeedResults();
  if (!results.length) return null;

  const total = results.length;
  const ok = results.filter((r) => r.httpStatus === 200).length;
  const errors = results.filter(
    (r) => r.httpStatus != null && r.httpStatus !== 200 && r.httpStatus !== 301
  ).length;
  const redirects = results.filter((r) => r.httpStatus === 301 || r.httpStatus === 302).length;
  const notInSitemap = results.filter((r) => !r.inSitemap).length;
  const critical = results.filter(
    (r) => r.httpStatus != null && r.httpStatus >= 400 && r.impressions > 50
  ).length;

  const psiResults = results.filter((r) => r.scoreMobile != null);
  const avgScoreMobile =
    psiResults.length > 0
      ? Math.round(psiResults.reduce((s, r) => s + (r.scoreMobile ?? 0), 0) / psiResults.length)
      : null;

  return { checkedAt, total, ok, errors, redirects, notInSitemap, critical, avgScoreMobile };
}

// Listes des valeurs distinctes pour les filtres
export async function getPageTableFilters(snapshotId: string) {
  const [clusters, attr2s] = await Promise.all([
    prisma.gscPageMetric.findMany({
      where: { snapshotId },
      select: { cluster: true },
      distinct: ["cluster"],
      orderBy: { cluster: "asc" },
    }),
    prisma.gscPageMetric.findMany({
      where: { snapshotId },
      select: { attribution2: true },
      distinct: ["attribution2"],
      orderBy: { attribution2: "asc" },
    }),
  ]);
  return {
    clusters: clusters.map((r) => r.cluster),
    attribution2s: attr2s.map((r) => r.attribution2).filter(Boolean),
  };
}
