"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, History } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────

interface Dimension {
  id: string;
  label: string;
  weight: number;
  score: number | null;
}

interface RecentScore {
  historyId: string;
  moverId: string;
  companyName: string;
  city: string;
  postalCode: string;
  globalScore: number | null;
  globalScoreLabel: string | null;
  computedAt: string;
  dimensions: Dimension[];
}

// ─── Helpers (identiques à ScoringChecker) ───────────────────────

function scoreColor(score: number | null): string {
  if (score == null) return "#9CA3AF";
  if (score >= 70) return "#16A34A";
  if (score >= 50) return "#D97706";
  if (score >= 30) return "#EA580C";
  return "#DC2626";
}

function relativeTime(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 60) return `il y a ${mins} min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `il y a ${hours}h`;
  const days = Math.floor(hours / 24);
  return `il y a ${days} j`;
}

// ─── ScoreRing (version compacte) ────────────────────────────────

function ScoreRingSmall({ score }: { score: number | null }) {
  const size = 64;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = score != null ? (score / 100) * circumference : 0;
  const color = scoreColor(score);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--color-border-light, #E5E7EB)" strokeWidth={strokeWidth} />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={circumference - progress} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-base font-extrabold tabular-nums leading-none" style={{ color }}>{score ?? "—"}</span>
        <span className="text-[9px] font-medium" style={{ color: "var(--color-text-muted, #9CA3AF)" }}>/100</span>
      </div>
    </div>
  );
}

// ─── Card individuelle ────────────────────────────────────────────

function RecentScoreCard({ entry, delay }: { entry: RecentScore; delay: number }) {
  const color = scoreColor(entry.globalScore);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="p-5 rounded-2xl"
      style={{ background: "white", border: "1px solid var(--color-border)" }}
    >
      {/* En-tête : score ring + nom */}
      <div className="flex items-start gap-4 mb-4">
        <ScoreRingSmall score={entry.globalScore} />
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm leading-tight truncate" style={{ color: "var(--color-text)" }}>
            {entry.companyName}
          </div>
          <div className="flex items-center gap-1 mt-1 text-xs" style={{ color: "var(--color-text-secondary)" }}>
            <MapPin className="w-3 h-3 shrink-0" />
            {entry.city} ({entry.postalCode})
          </div>
          <div
            className="mt-1.5 text-xs font-semibold px-2 py-0.5 rounded-full inline-block"
            style={{ background: `${color}12`, color }}
          >
            {entry.globalScoreLabel ?? "—"}
          </div>
        </div>
      </div>

      {/* Barres dimensions */}
      <div className="space-y-2 mb-3">
        {entry.dimensions.map((dim) => {
          const c = scoreColor(dim.score);
          const pct = dim.score ?? 0;
          return (
            <div key={dim.id} className="flex items-center gap-2">
              <span className="text-[10px] w-24 shrink-0 truncate" style={{ color: "var(--color-text-muted, #9CA3AF)" }}>
                {dim.label}
              </span>
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-border-light, #E5E7EB)" }}>
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: c }} />
              </div>
              <span className="text-[10px] font-bold w-6 text-right tabular-nums shrink-0" style={{ color: c }}>
                {dim.score ?? "—"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Date */}
      <div className="flex items-center gap-1 text-[10px]" style={{ color: "var(--color-text-muted, #9CA3AF)" }}>
        <Clock className="w-3 h-3 shrink-0" />
        {relativeTime(entry.computedAt)}
      </div>
    </motion.div>
  );
}

// ─── Composant principal ─────────────────────────────────────────

export function RecentScores() {
  const [scores, setScores] = useState<RecentScore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/scoring-check/recent-scores")
      .then((r) => r.json())
      .then((data: { results?: RecentScore[] }) => setScores(data.results ?? []))
      .catch(() => { /* silencieux */ })
      .finally(() => setLoading(false));
  }, []);

  if (!loading && scores.length === 0) return null;

  return (
    <section className="section section-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(14,165,166,0.1)", color: "var(--color-accent)", border: "1px solid rgba(14,165,166,0.2)" }}
          >
            <History className="w-4 h-4" />
            Analyses en temps réel
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
            Derniers déménageurs analysés
          </h2>
          <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
            Les 10 scores les plus récemment calculés par notre système automatique.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-48 rounded-2xl animate-pulse" style={{ background: "var(--color-border)" }} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {scores.map((entry, i) => (
              <RecentScoreCard key={entry.historyId} entry={entry} delay={i * 0.06} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
