"use client";

import { useRouter, useSearchParams } from "next/navigation";

type ClusterRow = {
  cluster: string;
  siteCount: number | null;
  gscCount: number;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
};

function fmtN(n: number) {
  return n.toLocaleString("fr-FR");
}

export function ClusterTable({ rows }: { rows: ClusterRow[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selected = searchParams.get("cluster");

  function select(cluster: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("cluster") === cluster) {
      params.delete("cluster");
    } else {
      params.set("cluster", cluster);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="bg-white border border-v4-border rounded-xl overflow-hidden">
      <div className="px-5 py-3 border-b border-v4-border-light">
        <h2 className="font-sans text-sm font-700 text-v4-text">Synthèse par cluster</h2>
      </div>
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="text-left text-xs text-v4-text-muted bg-gray-50 border-b border-v4-border-light">
            <th className="px-5 py-2.5 font-600">Cluster</th>
            <th className="px-3 py-2.5 font-600 text-right whitespace-nowrap">Pages site</th>
            <th className="px-3 py-2.5 font-600 text-right whitespace-nowrap">Pages GSC</th>
            <th className="px-3 py-2.5 font-600 text-right">Impressions</th>
            <th className="px-3 py-2.5 font-600 text-right">Clics</th>
            <th className="px-3 py-2.5 font-600 text-right">CTR moy.</th>
            <th className="px-5 py-2.5 font-600 text-right">Pos. moy.</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-v4-border-light">
          {rows.map((r) => {
            const isSelected = selected === r.cluster;
            return (
              <tr
                key={r.cluster}
                onClick={() => select(r.cluster)}
                className={`cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-accent/5 border-l-2 border-l-accent"
                    : "hover:bg-gray-50"
                }`}
              >
                <td className={`px-5 py-2.5 font-600 ${isSelected ? "text-accent" : "text-v4-text"}`}>
                  {r.cluster}
                  {isSelected && (
                    <span className="ml-2 text-xs font-400 text-accent opacity-70">▶</span>
                  )}
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums">
                  {r.siteCount != null ? (
                    <span className="text-v4-text-secondary">{fmtN(r.siteCount)}</span>
                  ) : (
                    <span className="text-v4-text-muted text-xs">—</span>
                  )}
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums">
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="font-600 text-v4-text">{fmtN(r.gscCount)}</span>
                    {r.gscCount > 0 && r.siteCount != null && r.siteCount > 0 && (
                      <span className={`text-xs ${
                        r.gscCount / r.siteCount >= 0.5 ? "text-emerald-600" : "text-amber-600"
                      }`}>
                        {Math.round((r.gscCount / r.siteCount) * 100)}%
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-3 py-2.5 text-right text-v4-text-secondary tabular-nums">
                  {fmtN(r.impressions)}
                </td>
                <td className="px-3 py-2.5 text-right font-600 text-v4-text tabular-nums">
                  {fmtN(r.clicks)}
                </td>
                <td className="px-3 py-2.5 text-right text-v4-text-secondary tabular-nums">
                  {(r.ctr * 100).toFixed(1)}%
                </td>
                <td className="px-5 py-2.5 text-right text-v4-text-secondary tabular-nums">
                  {r.position > 0 ? r.position.toFixed(1) : "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="px-5 py-2.5 border-t border-v4-border-light bg-gray-50">
        <p className="font-sans text-xs text-v4-text-muted">
          Cliquer sur un cluster pour voir le détail par sous-catégorie · "Pages site" = statiques dans le code
        </p>
      </div>
    </div>
  );
}
