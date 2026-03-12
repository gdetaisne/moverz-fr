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

// ─── Top pages (agrégé sur la période du dernier snapshot) ───────────────────

export async function getTopPages(snapshotId: string, limit = 20) {
  return prisma.gscPageMetric.groupBy({
    by: ["url", "cluster"],
    where: { snapshotId },
    _sum: { clicks: true, impressions: true },
    _avg: { position: true, ctr: true },
    orderBy: { _sum: { clicks: "desc" } },
    take: limit,
  });
}

// ─── Top requêtes ────────────────────────────────────────────────────────────

export async function getTopQueries(snapshotId: string, limit = 30) {
  return prisma.gscQueryMetric.groupBy({
    by: ["query"],
    where: { snapshotId },
    _sum: { clicks: true, impressions: true },
    _avg: { position: true, ctr: true },
    orderBy: { _sum: { clicks: "desc" } },
    take: limit,
  });
}

// ─── Tendance quotidienne ─────────────────────────────────────────────────────

export async function getDailyTrend(snapshotId: string) {
  return prisma.gscPageMetric.groupBy({
    by: ["date"],
    where: { snapshotId },
    _sum: { clicks: true, impressions: true },
    orderBy: { date: "asc" },
  });
}

// ─── Performance par cluster ──────────────────────────────────────────────────

export async function getClusterStats(snapshotId: string) {
  return prisma.gscPageMetric.groupBy({
    by: ["cluster"],
    where: { snapshotId },
    _sum: { clicks: true, impressions: true },
    _avg: { position: true, ctr: true },
    orderBy: { _sum: { clicks: "desc" } },
  });
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
