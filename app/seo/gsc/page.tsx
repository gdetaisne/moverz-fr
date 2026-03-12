import { Suspense } from "react";
import {
  getLatestSnapshot,
  getTopPages,
  getTopQueries,
  getDailyTrend,
  getClusterBreakdown,
  getGscPageCountByCluster,
  getDateRange,
  getKpis,
} from "@/lib/seo/db";
import { ClusterTable } from "./ClusterTable";
import { DetailPanel } from "./DetailPanel";
import { DateFilter } from "./DateFilter";

// Nombre de pages statiques (fichiers page.tsx) dans le code par cluster.
// null = pages générées dynamiquement (nb réel inconnu sans sitemap — voir Pages GSC).
const SITE_PAGE_COUNT: Record<string, number | null> = {
  "Homepage":               1,
  "Standalone":             24,   // 24 pages racine statiques (faq, cgv, contact, etc.)
  "Villes":                 99,   // 11 hubs × 8 services = 88 + 11 hubs = 99 pages statiques
                                  // + [slug] dynamique (reste des villes)
  "Corridors":              43,   // 43 pages statiques xxx-vers-yyy
                                  // + corridor/[from]/[to] dynamique
  "Blog - Transactionnel":  null, // [slug] dynamique
  "Blog - Informationnel":  null, // [slug] dynamique
  "Quartiers":              7,    // 7 hubs statiques quartiers-xxx
                                  // + quartiers/[slug] dynamique
  "Blog":                   6,    // index + 5 pages de catégories
};

function fmtN(n: number) {
  return n.toLocaleString("fr-FR");
}

const CLUSTER_ORDER = [
  "Homepage",
  "Standalone",
  "Villes",
  "Corridors",
  "Blog - Transactionnel",
  "Blog - Informationnel",
  "Blog",
  "Quartiers",
  "Autres",
];

export default async function GscPage({
  searchParams,
}: {
  searchParams: Promise<{ cluster?: string; days?: string; from?: string; to?: string }>;
}) {
  const { cluster: selectedCluster, days, from, to } = await searchParams;

  const snapshot = await getLatestSnapshot().catch(() => null);

  if (!snapshot) {
    return (
      <div className="max-w-2xl space-y-4">
        <h1 className="font-heading text-2xl font-800 text-v4-text">Google Search Console</h1>
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 font-sans text-sm text-amber-800">
          <strong>Aucune donnée en base.</strong> Lancer :{" "}
          <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono">node scripts/gsc-monitor.mjs --days 7</code>
        </div>
      </div>
    );
  }

  const { alerts } = snapshot;

  // Calculer la DateRange depuis searchParams
  const dbRange = await getDateRange(snapshot.id);
  const dbMin = dbRange.min.toISOString().slice(0, 10);
  const dbMax = dbRange.max.toISOString().slice(0, 10);

  let range: { from?: Date; to?: Date } | undefined;
  if (from && to) {
    range = { from: new Date(from), to: new Date(to) };
  } else if (days) {
    const to = new Date(dbMax);
    const from = new Date(to);
    from.setDate(from.getDate() - parseInt(days) + 1);
    range = { from, to };
  }

  const [kpis, topPages, topQueries, dailyTrend, breakdown, gscPageCounts] = await Promise.all([
    getKpis(snapshot.id, range),
    getTopPages(snapshot.id, 20, range),
    getTopQueries(snapshot.id, 30, range),
    getDailyTrend(snapshot.id, range),
    getClusterBreakdown(snapshot.id, range),
    getGscPageCountByCluster(snapshot.id, range),
  ]);

  const syncDate = snapshot.fetchedAt.toLocaleDateString("fr-FR", {
    day: "2-digit", month: "long", year: "numeric",
  });
  const periodLabel = `${snapshot.periodStart.toISOString().slice(0, 10)} → ${snapshot.periodEnd.toISOString().slice(0, 10)}`;

  const maxClicks = Math.max(...dailyTrend.map((d) => d._sum.clicks ?? 0), 1);

  // Agréger les totaux par cluster depuis le breakdown
  const clusterTotals = new Map<string, { clicks: number; impressions: number; ctrSum: number; posSum: number; count: number }>();
  for (const r of breakdown) {
    const existing = clusterTotals.get(r.cluster) ?? { clicks: 0, impressions: 0, ctrSum: 0, posSum: 0, count: 0 };
    existing.clicks += r._sum.clicks ?? 0;
    existing.impressions += r._sum.impressions ?? 0;
    existing.ctrSum += r._avg.ctr ?? 0;
    existing.posSum += r._avg.position ?? 0;
    existing.count += 1;
    clusterTotals.set(r.cluster, existing);
  }

  const sortedClusters = [...clusterTotals.keys()].sort((a, b) => {
    const ia = CLUSTER_ORDER.indexOf(a);
    const ib = CLUSTER_ORDER.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });

  const clusterRows = sortedClusters.map((cluster) => {
    const ct = clusterTotals.get(cluster)!;
    return {
      cluster,
      siteCount: SITE_PAGE_COUNT[cluster] ?? null,
      gscCount: gscPageCounts[cluster] ?? 0,
      impressions: ct.impressions,
      clicks: ct.clicks,
      ctr: ct.count > 0 ? ct.ctrSum / ct.count : 0,
      position: ct.count > 0 ? ct.posSum / ct.count : 0,
    };
  });

  // Label de la période filtrée
  const periodDisplay = range?.from && range?.to
    ? `${range.from.toISOString().slice(0, 10)} → ${range.to.toISOString().slice(0, 10)}`
    : periodLabel;

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-heading text-2xl font-800 text-v4-text">Google Search Console</h1>
          <p className="font-sans text-sm text-v4-text-muted mt-1">
            Période : {periodDisplay}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Suspense fallback={null}>
            <DateFilter minDate={dbMin} maxDate={dbMax} />
          </Suspense>
          <span className="font-sans text-xs text-v4-text-muted bg-gray-100 px-3 py-1.5 rounded-full">
            Sync : {syncDate}
          </span>
        </div>
      </div>

      {/* Alertes */}
      {alerts.length > 0 && (
        <div className="space-y-2">
          {alerts.map((a) => (
            <div
              key={a.id}
              className={`rounded-xl px-4 py-3 font-sans text-sm border ${
                a.level === "CRITICAL"
                  ? "bg-red-50 border-red-200 text-red-800"
                  : a.level === "WARNING"
                  ? "bg-orange-50 border-orange-200 text-orange-800"
                  : "bg-blue-50 border-blue-200 text-blue-700"
              }`}
            >
              <strong>{a.level}</strong> — {a.message}
            </div>
          ))}
        </div>
      )}

      {/* KPIs globaux */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Clics",       value: fmtN(kpis.clicks) },
          { label: "Impressions", value: fmtN(kpis.impressions) },
          { label: "CTR moy.",    value: (kpis.ctr * 100).toFixed(2) + "%" },
          { label: "Pos. moy.",   value: kpis.position > 0 ? kpis.position.toFixed(1) : "—" },
        ].map((k) => (
          <div key={k.label} className="bg-white border border-v4-border rounded-xl px-5 py-4">
            <p className="font-sans text-xs text-v4-text-muted font-600 uppercase tracking-wide mb-1">{k.label}</p>
            <p className="font-heading text-3xl font-800 text-v4-text">{k.value}</p>
          </div>
        ))}
      </div>

      {/* Tendance quotidienne */}
      {dailyTrend.length > 0 && (
        <div className="bg-white border border-v4-border rounded-xl px-5 py-4">
          <h2 className="font-sans text-sm font-700 text-v4-text mb-4">Tendance quotidienne</h2>
          <div className="space-y-2">
            {dailyTrend.map((d) => {
              const clicks = d._sum.clicks ?? 0;
              const date = new Date(d.date).toISOString().slice(0, 10);
              return (
                <div key={date} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-v4-text-muted w-24 flex-shrink-0">{date}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-3">
                    <div
                      className="bg-accent h-3 rounded-full"
                      style={{ width: `${Math.round((clicks / maxClicks) * 100)}%` }}
                    />
                  </div>
                  <span className="font-sans text-xs font-600 text-v4-text w-16 text-right flex-shrink-0">
                    {fmtN(clicks)} clics
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tableau clusters + panneau détail côte à côte */}
      <div className={`flex gap-6 items-start ${selectedCluster ? "flex-row" : ""}`}>
        <div className={selectedCluster ? "w-1/2 flex-shrink-0" : "w-full"}>
          <Suspense fallback={
            <div className="bg-white border border-v4-border rounded-xl px-5 py-6 font-sans text-sm text-v4-text-muted">
              Chargement…
            </div>
          }>
            <ClusterTable rows={clusterRows} />
          </Suspense>
        </div>
        {selectedCluster && (
          <div className="flex-1 min-w-0">
            <Suspense fallback={
              <div className="bg-white border border-v4-border rounded-xl px-5 py-6 font-sans text-sm text-v4-text-muted">
                Chargement…
              </div>
            }>
              <DetailPanel snapshotId={snapshot.id} cluster={selectedCluster} range={range} />
            </Suspense>
          </div>
        )}
      </div>

      {/* Top pages */}
      {topPages.length > 0 && (
        <div className="bg-white border border-v4-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-v4-border-light">
            <h2 className="font-sans text-sm font-700 text-v4-text">Top 20 pages</h2>
          </div>
          <table className="w-full font-sans text-sm">
            <thead>
              <tr className="text-left text-xs text-v4-text-muted bg-gray-50 border-b border-v4-border-light">
                <th className="px-5 py-2 font-600">Page</th>
                <th className="px-3 py-2 font-600">Cluster</th>
                <th className="px-3 py-2 font-600 text-right">Clics</th>
                <th className="px-3 py-2 font-600 text-right">Impr.</th>
                <th className="px-3 py-2 font-600 text-right">CTR</th>
                <th className="px-5 py-2 font-600 text-right">Pos.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-v4-border-light">
              {topPages.map((p) => (
                <tr key={p.url} className="hover:bg-gray-50">
                  <td className="px-5 py-2 font-mono text-xs text-v4-text-secondary max-w-xs truncate" title={p.url}>
                    {p.url.replace("https://moverz.fr", "")}
                  </td>
                  <td className="px-3 py-2 text-v4-text-muted text-xs">{p.cluster}</td>
                  <td className="px-3 py-2 text-right font-600 text-v4-text tabular-nums">{fmtN(p._sum.clicks ?? 0)}</td>
                  <td className="px-3 py-2 text-right text-v4-text-secondary tabular-nums">{fmtN(p._sum.impressions ?? 0)}</td>
                  <td className="px-3 py-2 text-right text-v4-text-secondary tabular-nums">
                    {((p._avg.ctr ?? 0) * 100).toFixed(1)}%
                  </td>
                  <td className="px-5 py-2 text-right text-v4-text-secondary tabular-nums">
                    {p._avg.position ? p._avg.position.toFixed(1) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Top requêtes */}
      {topQueries.length > 0 && (
        <div className="bg-white border border-v4-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-v4-border-light">
            <h2 className="font-sans text-sm font-700 text-v4-text">Top 30 requêtes</h2>
          </div>
          <table className="w-full font-sans text-sm">
            <thead>
              <tr className="text-left text-xs text-v4-text-muted bg-gray-50 border-b border-v4-border-light">
                <th className="px-5 py-2 font-600">#</th>
                <th className="px-3 py-2 font-600">Requête</th>
                <th className="px-3 py-2 font-600 text-right">Clics</th>
                <th className="px-3 py-2 font-600 text-right">Impr.</th>
                <th className="px-3 py-2 font-600 text-right">CTR</th>
                <th className="px-5 py-2 font-600 text-right">Pos.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-v4-border-light">
              {topQueries.map((q, i) => (
                <tr key={q.query} className="hover:bg-gray-50">
                  <td className="px-5 py-2 text-v4-text-muted text-xs">{i + 1}</td>
                  <td className="px-3 py-2 text-v4-text">{q.query}</td>
                  <td className="px-3 py-2 text-right font-600 text-v4-text tabular-nums">{fmtN(q._sum.clicks ?? 0)}</td>
                  <td className="px-3 py-2 text-right text-v4-text-secondary tabular-nums">{fmtN(q._sum.impressions ?? 0)}</td>
                  <td className="px-3 py-2 text-right text-v4-text-secondary tabular-nums">
                    {((q._avg.ctr ?? 0) * 100).toFixed(1)}%
                  </td>
                  <td className="px-5 py-2 text-right text-v4-text-secondary tabular-nums">
                    {q._avg.position ? q._avg.position.toFixed(1) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="font-sans text-xs text-v4-text-muted">
        Sync : <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">node scripts/gsc-monitor.mjs --days 28</code>
      </p>
    </div>
  );
}
