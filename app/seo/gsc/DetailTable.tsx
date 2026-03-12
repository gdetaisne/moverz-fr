"use client";

import { useState } from "react";

type Row = {
  attribution2: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

function fmtN(n: number) {
  return n.toLocaleString("fr-FR");
}

const ATTR2_COLOR: Record<string, string> = {
  "statique": "bg-emerald-50 text-emerald-700",
  "dynamique": "bg-blue-50 text-blue-700",
  "hub": "bg-violet-50 text-violet-700",
  "service": "bg-sky-50 text-sky-700",
  "prix": "bg-orange-50 text-orange-700",
  "déménagement par ville": "bg-teal-50 text-teal-700",
  "checklists": "bg-amber-50 text-amber-700",
  "conseils": "bg-lime-50 text-lime-700",
  "pro": "bg-pink-50 text-pink-700",
};

function attr2Class(val: string) {
  const lower = val.toLowerCase();
  for (const [key, cls] of Object.entries(ATTR2_COLOR)) {
    if (lower.includes(key)) return cls;
  }
  return "bg-gray-100 text-gray-600";
}

const PAGE_SIZE = 10;

export function DetailTable({
  rows,
  totalClicks,
  totalImpressions,
}: {
  rows: Row[];
  totalClicks: number;
  totalImpressions: number;
}) {
  const [limit, setLimit] = useState(PAGE_SIZE);
  const visible = rows.slice(0, limit);
  const remaining = rows.length - limit;

  return (
    <table className="w-full font-sans text-sm">
      <thead>
        <tr className="text-left text-xs text-v4-text-muted bg-gray-50 border-b border-v4-border-light">
          <th className="px-5 py-2 font-600">Sous-catégorie</th>
          <th className="px-3 py-2 font-600 text-right">Impressions</th>
          <th className="px-3 py-2 font-600 text-right">Clics</th>
          <th className="px-3 py-2 font-600 text-right">CTR</th>
          <th className="px-5 py-2 font-600 text-right">Pos.</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-v4-border-light">
        {visible.map((r) => (
          <tr key={r.attribution2} className="hover:bg-gray-50">
            <td className="px-5 py-2.5">
              {r.attribution2 === "—" ? (
                <span className="text-v4-text-muted text-xs italic">—</span>
              ) : (
                <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-500 ${attr2Class(r.attribution2)}`}>
                  {r.attribution2}
                </span>
              )}
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
        ))}
      </tbody>
      <tfoot>
        {remaining > 0 && (
          <tr className="border-t border-v4-border-light">
            <td colSpan={5} className="px-5 py-2.5 text-center">
              <button
                onClick={() => setLimit((l) => l + PAGE_SIZE)}
                className="font-sans text-xs text-accent font-600 hover:underline"
              >
                Afficher {Math.min(remaining, PAGE_SIZE)} de plus
                <span className="text-v4-text-muted font-400 ml-1">({remaining} restants)</span>
              </button>
            </td>
          </tr>
        )}
        <tr className="bg-gray-50 border-t border-v4-border-light text-xs font-600">
          <td className="px-5 py-2 text-v4-text-muted">
            Total
            {rows.length > PAGE_SIZE && (
              <span className="font-400 ml-1">({fmtN(rows.length)} entrées)</span>
            )}
          </td>
          <td className="px-3 py-2 text-right text-v4-text tabular-nums">{fmtN(totalImpressions)}</td>
          <td className="px-3 py-2 text-right text-v4-text tabular-nums">{fmtN(totalClicks)}</td>
          <td className="px-3 py-2 text-right text-v4-text-muted tabular-nums">
            {totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(1) : "—"}%
          </td>
          <td className="px-5 py-2" />
        </tr>
      </tfoot>
    </table>
  );
}
