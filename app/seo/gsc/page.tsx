import {
  getLatestSnapshot,
  getTopPages,
  getTopQueries,
  getDailyTrend,
  getClusterStats,
} from "@/lib/seo/db";

function deltaClass(n: number, higherIsBetter = true) {
  if (n === 0) return "text-gray-400";
  return (higherIsBetter ? n > 0 : n < 0) ? "text-emerald-600" : "text-red-500";
}

function fmtPct(n: number | null) {
  if (n === null || n === undefined) return null;
  return (n > 0 ? "+" : "") + n.toFixed(1) + "%";
}

export default async function GscPage() {
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

  const { totals, alerts } = snapshot;

  const [topPages, topQueries, dailyTrend, clusterStats] = await Promise.all([
    getTopPages(snapshot.id, 20),
    getTopQueries(snapshot.id, 30),
    getDailyTrend(snapshot.id),
    getClusterStats(snapshot.id),
  ]);

  const syncDate = snapshot.fetchedAt.toLocaleDateString("fr-FR", {
    day: "2-digit", month: "long", year: "numeric",
  });
  const periodLabel = `${snapshot.periodStart.toISOString().slice(0, 10)} → ${snapshot.periodEnd.toISOString().slice(0, 10)}`;
  const prevLabel = `${snapshot.prevStart.toISOString().slice(0, 10)} → ${snapshot.prevEnd.toISOString().slice(0, 10)}`;

  const maxClicks = Math.max(...dailyTrend.map((d) => d._sum.clicks ?? 0), 1);

  return (
    <div className="max-w-4xl space-y-8">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-800 text-v4-text">Google Search Console</h1>
          <p className="font-sans text-sm text-v4-text-muted mt-1">
            Période : {periodLabel} — comparé à {prevLabel}
          </p>
        </div>
        <span className="font-sans text-xs text-v4-text-muted bg-gray-100 px-3 py-1.5 rounded-full flex-shrink-0">
          Sync : {syncDate}
        </span>
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
      {totals && (
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Clics", cur: totals.clicks, delta: totals.clicksDelta, pct: totals.clicksPct, good: true },
            { label: "Impressions", cur: totals.impressions, delta: totals.impressionsDelta, pct: totals.impressionsPct, good: true },
            { label: "CTR", cur: (totals.ctr * 100).toFixed(2) + "%", delta: null, pct: null, good: true },
          ].map((k) => (
            <div key={k.label} className="bg-white border border-v4-border rounded-xl px-5 py-4">
              <p className="font-sans text-xs text-v4-text-muted font-600 uppercase tracking-wide mb-1">{k.label}</p>
              <p className="font-heading text-3xl font-800 text-v4-text">{k.cur}</p>
              {k.delta !== null && (
                <p className={`font-sans text-sm font-600 mt-1 ${deltaClass(k.delta, k.good)}`}>
                  {k.delta > 0 ? "+" : ""}{k.delta}
                  {k.pct !== null && <span className="ml-1">({fmtPct(k.pct)})</span>}
                  <span className="text-v4-text-muted font-400 ml-1">vs préc.</span>
                </p>
              )}
            </div>
          ))}
        </div>
      )}

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
                    {clicks} clics
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Clusters */}
      {clusterStats.length > 0 && (
        <div className="bg-white border border-v4-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-v4-border-light">
            <h2 className="font-sans text-sm font-700 text-v4-text">Performance par cluster</h2>
          </div>
          <table className="w-full font-sans text-sm">
            <thead>
              <tr className="text-left text-xs text-v4-text-muted bg-gray-50 border-b border-v4-border-light">
                <th className="px-5 py-2 font-600">Cluster</th>
                <th className="px-3 py-2 font-600 text-right">Clics</th>
                <th className="px-3 py-2 font-600 text-right">Impr.</th>
                <th className="px-3 py-2 font-600 text-right">CTR moy.</th>
                <th className="px-5 py-2 font-600 text-right">Pos. moy.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-v4-border-light">
              {clusterStats.map((c) => (
                <tr key={c.cluster} className="hover:bg-gray-50">
                  <td className="px-5 py-2.5 text-v4-text font-500">{c.cluster}</td>
                  <td className="px-3 py-2.5 text-right font-600 text-v4-text">{c._sum.clicks ?? 0}</td>
                  <td className="px-3 py-2.5 text-right text-v4-text-secondary">{c._sum.impressions ?? 0}</td>
                  <td className="px-3 py-2.5 text-right text-v4-text-secondary">
                    {((c._avg.ctr ?? 0) * 100).toFixed(1)}%
                  </td>
                  <td className="px-5 py-2.5 text-right text-v4-text-secondary">
                    {c._avg.position ? c._avg.position.toFixed(1) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

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
                  <td className="px-3 py-2 text-right font-600 text-v4-text">{p._sum.clicks ?? 0}</td>
                  <td className="px-3 py-2 text-right text-v4-text-secondary">{p._sum.impressions ?? 0}</td>
                  <td className="px-3 py-2 text-right text-v4-text-secondary">
                    {((p._avg.ctr ?? 0) * 100).toFixed(1)}%
                  </td>
                  <td className="px-5 py-2 text-right text-v4-text-secondary">
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
                  <td className="px-3 py-2 text-right font-600 text-v4-text">{q._sum.clicks ?? 0}</td>
                  <td className="px-3 py-2 text-right text-v4-text-secondary">{q._sum.impressions ?? 0}</td>
                  <td className="px-3 py-2 text-right text-v4-text-secondary">
                    {((q._avg.ctr ?? 0) * 100).toFixed(1)}%
                  </td>
                  <td className="px-5 py-2 text-right text-v4-text-secondary">
                    {q._avg.position ? q._avg.position.toFixed(1) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="font-sans text-xs text-v4-text-muted">
        Sync : <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">node scripts/gsc-monitor.mjs --days 7</code>
      </p>
    </div>
  );
}
