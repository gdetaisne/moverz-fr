import { getClusterBreakdown, getGscPageCountByCluster } from "@/lib/seo/db";
import { DetailTable } from "./DetailTable";

function fmtN(n: number) {
  return n.toLocaleString("fr-FR");
}

export async function DetailPanel({
  snapshotId,
  cluster,
  range,
}: {
  snapshotId: string;
  cluster: string;
  range?: { from?: Date; to?: Date };
}) {
  const [breakdown, gscCounts] = await Promise.all([
    getClusterBreakdown(snapshotId, range),
    getGscPageCountByCluster(snapshotId, range),
  ]);

  const rows = breakdown
    .filter((r) => r.cluster === cluster)
    .map((r) => ({
      attribution2: r.attribution2 || "—",
      clicks: r._sum.clicks ?? 0,
      impressions: r._sum.impressions ?? 0,
      ctr: r._avg.ctr ?? 0,
      position: r._avg.position ?? 0,
    }))
    .sort((a, b) => b.impressions - a.impressions);

  const totalClicks = rows.reduce((s, r) => s + r.clicks, 0);
  const totalImpressions = rows.reduce((s, r) => s + r.impressions, 0);
  const gscTotal = gscCounts[cluster] ?? 0;

  if (rows.length === 0) {
    return (
      <div className="bg-white border border-v4-border rounded-xl px-5 py-6 font-sans text-sm text-v4-text-muted">
        Aucune donnée pour <strong className="text-v4-text">{cluster}</strong>.
        <br />
        <span className="text-xs">
          Relancer <code className="bg-gray-100 px-1 rounded font-mono">gsc-monitor.mjs</code> pour calculer Attribution 2.
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white border border-v4-border rounded-xl overflow-hidden">
      <div className="px-5 py-3 border-b border-v4-border-light">
        <h3 className="font-sans text-sm font-700 text-v4-text">{cluster}</h3>
        <p className="font-sans text-xs text-v4-text-muted mt-0.5">
          {fmtN(gscTotal)} pages GSC · {fmtN(totalImpressions)} impressions · {fmtN(totalClicks)} clics
        </p>
      </div>
      <DetailTable rows={rows} totalClicks={totalClicks} totalImpressions={totalImpressions} />
    </div>
  );
}
