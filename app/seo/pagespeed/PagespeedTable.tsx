"use client";

import { useState } from "react";
import type { PagespeedResult } from "@prisma/client";

type Filter = "all" | "errors" | "no-sitemap" | "slow";

const FILTER_LABELS: Record<Filter, string> = {
  all: "Toutes",
  errors: "Erreurs HTTP",
  "no-sitemap": "Hors sitemap",
  slow: "LCP > 4s",
};

function ScoreBadge({ score }: { score: number | null }) {
  if (score == null) return <span className="text-v4-text-muted">—</span>;
  const cls =
    score >= 90
      ? "bg-emerald-100 text-emerald-700"
      : score >= 50
      ? "bg-orange-100 text-orange-700"
      : "bg-red-100 text-red-700";
  return (
    <span className={`inline-block px-2 py-0.5 rounded font-mono text-xs font-600 ${cls}`}>
      {score}
    </span>
  );
}

function HttpBadge({ status }: { status: number | null }) {
  if (status == null)
    return (
      <span className="inline-block px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-mono text-xs">
        ?
      </span>
    );
  const cls =
    status === 200
      ? "bg-emerald-100 text-emerald-700"
      : status < 400
      ? "bg-blue-100 text-blue-700"
      : "bg-red-100 text-red-700";
  return (
    <span className={`inline-block px-2 py-0.5 rounded font-mono text-xs font-600 ${cls}`}>
      {status}
    </span>
  );
}

function LcpValue({ lcp }: { lcp: number | null }) {
  if (lcp == null) return <span className="text-v4-text-muted">—</span>;
  const cls = lcp <= 2.5 ? "text-emerald-600" : lcp <= 4 ? "text-orange-500" : "text-red-600 font-600";
  return <span className={`font-mono text-xs ${cls}`}>{lcp.toFixed(1)}s</span>;
}

export function PagespeedTable({ results }: { results: PagespeedResult[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const filtered = results.filter((r) => {
    if (filter === "errors" && (!r.httpStatus || r.httpStatus === 200 || r.httpStatus === 301)) return false;
    if (filter === "no-sitemap" && r.inSitemap) return false;
    if (filter === "slow" && (r.lcpMobile == null || r.lcpMobile <= 4)) return false;
    if (search && !r.url.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Filtres + recherche */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
          {(Object.keys(FILTER_LABELS) as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg font-sans text-xs font-600 transition-colors ${
                filter === f
                  ? "bg-white text-v4-text shadow-sm"
                  : "text-v4-text-muted hover:text-v4-text"
              }`}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Filtrer par URL…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-48 max-w-sm border border-v4-border rounded-xl px-3 py-1.5 font-sans text-sm text-v4-text placeholder:text-v4-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
        <span className="font-sans text-xs text-v4-text-muted ml-auto">
          {filtered.length} / {results.length} pages
        </span>
      </div>

      {/* Tableau */}
      <div className="bg-white border border-v4-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full font-sans text-sm min-w-[800px]">
            <thead>
              <tr className="text-left text-xs text-v4-text-muted bg-gray-50 border-b border-v4-border-light">
                <th className="px-5 py-2.5 font-600">Page</th>
                <th className="px-3 py-2.5 font-600 text-right">Impr.</th>
                <th className="px-3 py-2.5 font-600 text-center">HTTP</th>
                <th className="px-3 py-2.5 font-600 text-center">Sitemap</th>
                <th className="px-3 py-2.5 font-600 text-center">Mobile</th>
                <th className="px-3 py-2.5 font-600 text-center">Desktop</th>
                <th className="px-3 py-2.5 font-600 text-center">LCP</th>
                <th className="px-3 py-2.5 font-600 text-center">CLS</th>
                <th className="px-5 py-2.5 font-600 text-center">INP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-v4-border-light">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-5 py-8 text-center text-v4-text-muted font-sans text-sm">
                    Aucune page ne correspond au filtre.
                  </td>
                </tr>
              )}
              {filtered.map((r) => {
                const isCritical = r.httpStatus != null && r.httpStatus >= 400 && r.impressions > 50;
                return (
                  <tr
                    key={r.id}
                    className={`hover:bg-gray-50 ${isCritical ? "bg-red-50/40" : ""}`}
                  >
                    <td className="px-5 py-2 max-w-xs">
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-v4-text-secondary hover:text-accent truncate block"
                        title={r.url}
                      >
                        {r.url.replace("https://moverz.fr", "") || "/"}
                      </a>
                      {r.psiError && (
                        <span className="font-sans text-xs text-red-500 block mt-0.5 truncate" title={r.psiError}>
                          {r.psiError.slice(0, 60)}
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-2 text-right font-600 text-v4-text text-xs">{r.impressions}</td>
                    <td className="px-3 py-2 text-center">
                      <HttpBadge status={r.httpStatus} />
                    </td>
                    <td className="px-3 py-2 text-center">
                      {r.inSitemap ? (
                        <span className="text-emerald-600 text-xs font-600">✓</span>
                      ) : (
                        <span className="text-red-400 text-xs font-600">✗</span>
                      )}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <ScoreBadge score={r.scoreMobile} />
                    </td>
                    <td className="px-3 py-2 text-center">
                      <ScoreBadge score={r.scoreDesktop} />
                    </td>
                    <td className="px-3 py-2 text-center">
                      <LcpValue lcp={r.lcpMobile} />
                    </td>
                    <td className="px-3 py-2 text-center font-mono text-xs text-v4-text-secondary">
                      {r.clsMobile != null ? r.clsMobile.toFixed(3) : "—"}
                    </td>
                    <td className="px-5 py-2 text-center font-mono text-xs text-v4-text-secondary">
                      {r.inpMobile != null ? `${Math.round(r.inpMobile)}ms` : "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
