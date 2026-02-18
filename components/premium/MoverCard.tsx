"use client";

import { Star, Globe, Sparkles } from "lucide-react";
import { MockQuote } from "@/lib/utils/mockQuotes";
import { MoverScoreCircle } from "./MoverScoreCircle";
import { ScoreBar } from "./ScoreBar";

interface MoverCardProps {
  quote: MockQuote;
  isFirst?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

export function MoverCard({ quote, isFirst = false, selected = false, onSelect }: MoverCardProps) {
  const scoreEntries: { label: string; key: keyof typeof quote.scores }[] = [
    { label: "Solidité", key: "solidite" },
    { label: "Expérience", key: "experience" },
    { label: "Vigilance", key: "vigilance" },
  ];

  return (
    <div
      className="relative flex w-[260px] shrink-0 flex-col rounded-xl bg-white p-5"
      style={{
        border: isFirst ? "2px solid var(--color-accent)" : "1px solid var(--color-border)",
        boxShadow: isFirst
          ? "0 0 0 3px rgba(14,165,166,0.15), 0 4px 16px rgba(0,0,0,0.08)"
          : "var(--shadow-sm)",
        marginTop: isFirst ? 8 : 0,
      }}
    >
      {/* Recommended badge */}
      {isFirst && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-md"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          Recommandé par Moverz
        </div>
      )}

      {/* Provider name */}
      <h3
        className="mb-1 text-sm font-semibold"
        style={{ color: "var(--color-text)", marginTop: isFirst ? 8 : 0 }}
      >
        {quote.providerName}
      </h3>

      {/* Price */}
      <div className="mb-4">
        <p className="text-2xl font-bold tabular-nums" style={{ color: "var(--color-text)" }}>
          {quote.totalPrice.toLocaleString("fr-FR")} €
        </p>
        <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
          Prix proposé TTC
        </p>
      </div>

      {/* Score circle */}
      <div className="mb-4">
        <MoverScoreCircle score={quote.scoreMoverz} label={quote.scoreLabel} />
      </div>

      {/* Score bars */}
      <div className="mb-4 space-y-2">
        {scoreEntries.map(({ label, key }) => (
          <ScoreBar key={key} label={label} value={quote.scores[key]} />
        ))}
      </div>

      {/* Stars + reviews */}
      <div className="mb-1 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5"
            fill={i < Math.floor(quote.starRating) ? "#FBBF24" : "none"}
            stroke={i < Math.floor(quote.starRating) ? "#FBBF24" : "#D1D5DB"}
            strokeWidth={1.5}
          />
        ))}
        <span className="ml-1 text-sm font-semibold tabular-nums" style={{ color: "var(--color-text)" }}>
          {quote.starRating.toFixed(1)}
        </span>
      </div>
      <p className="mb-3 text-xs" style={{ color: "var(--color-text-muted)" }}>
        {quote.reviewCount} avis vérifiés
      </p>

      {/* Years + website */}
      <div className="mb-4 space-y-1 text-xs" style={{ color: "var(--color-text-secondary)" }}>
        <p className="font-semibold">{quote.yearsInBusiness}&nbsp;an{quote.yearsInBusiness > 1 ? "s" : ""}</p>
        {quote.hasWebsite && (
          <p className="flex items-center gap-1">
            <Globe className="h-3 w-3" />
            Site internet
          </p>
        )}
      </div>

      {/* CTA */}
      <button
        className="mb-2 w-full rounded-lg border py-2 text-sm font-medium transition-colors"
        style={{
          borderColor: "var(--color-accent)",
          color: "var(--color-accent)",
          background: "transparent",
        }}
      >
        Voir le détail →
      </button>

      {/* Compare checkbox */}
      <label className="flex cursor-pointer items-center gap-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
        <input
          type="checkbox"
          checked={selected}
          onChange={onSelect}
          className="h-4 w-4 rounded border-gray-300 accent-[#0EA5A6]"
        />
        {selected ? (
          <span className="font-medium" style={{ color: "var(--color-accent)" }}>
            Déménageur sélectionné
          </span>
        ) : (
          "Comparer dans le détail"
        )}
      </label>
    </div>
  );
}
