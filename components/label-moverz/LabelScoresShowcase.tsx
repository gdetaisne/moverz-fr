"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, MessageSquare, Gavel, Check, Shield } from "lucide-react";

const scores = [
  {
    icon: Building2,
    title: "Risque Financier",
    score: 91,
    color: "var(--color-accent)",
    sources: ["Creditsafe", "Pappers", "Analyse interne"],
    checks: [
      "Trésorerie saine",
      "Pas de dettes critiques",
      "Bilans positifs",
    ],
  },
  {
    icon: Gavel,
    title: "Risque Juridique",
    score: 88,
    color: "#16A34A",
    sources: ["BODACC", "Pappers Décisions", "Infogreffe"],
    checks: [
      "Aucune procédure",
      "Pas de litiges graves",
      "Dirigeants propres",
    ],
  },
  {
    icon: MessageSquare,
    title: "Expérience Client",
    score: 82,
    color: "#F59E0B",
    sources: ["Avis Google", "Analyse patterns", "Récence"],
    checks: [
      "Avis majoritairement positifs",
      "Pas de patterns récurrents",
      "Service fiable",
    ],
  },
];

export function LabelScoresShowcase() {
  return (
    <section className="section section-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Voir en 10 secondes ce qui prend
            <br />
            <span style={{ color: "var(--color-accent)" }}>
              normalement 3 heures
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Chaque déménageur Label Moverz affiche ses 3 scores en toute transparence
          </p>
        </div>

        {/* Mockup Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "white",
              border: "1px solid var(--color-border)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="flex items-center gap-3 mb-6 pb-6" style={{ borderBottom: "1px solid var(--color-border)" }}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(14, 165, 166, 0.1)" }}
              >
                <Shield className="w-6 h-6" style={{ color: "var(--color-accent)" }} />
              </div>
              <div>
                <div className="font-semibold text-lg" style={{ color: "var(--color-text)" }}>
                  Label Moverz Certifié
                </div>
                <div className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  Vérifié le 26 février 2026
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {scores.map((score, i) => (
                <ScoreCircle key={i} {...score} delay={i * 0.2} />
              ))}
            </div>

            <div className="mt-6 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
              <div className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--color-success)" }} />
                <span>
                  Aucune alerte financière ou juridique détectée · Licence transport valide · Assurance RC Pro 1,5 M€
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scores.map((score, i) => (
            <DetailCard key={i} {...score} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScoreCircle({
  icon: Icon,
  title,
  score,
  color,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  score: number;
  color: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1000;
      const startTime = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        start = Math.round(eased * score);
        setDisplayed(start);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, score, delay]);

  const size = 80;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (displayed / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative mb-3" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-border-light)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="w-5 h-5 mb-1" style={{ color }} />
          <span className="text-xl font-bold tabular-nums" style={{ color }}>
            {displayed}
          </span>
        </div>
      </div>
      <div className="text-sm font-semibold text-center" style={{ color: "var(--color-text)" }}>
        {title}
      </div>
    </div>
  );
}

function DetailCard({
  icon: Icon,
  title,
  score,
  color,
  sources,
  checks,
}: {
  icon: React.ElementType;
  title: string;
  score: number;
  color: string;
  sources: string[];
  checks: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-xl"
      style={{
        background: "white",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${color}15` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div>
          <div className="font-semibold" style={{ color: "var(--color-text)" }}>
            {title}
          </div>
          <div className="text-2xl font-bold tabular-nums" style={{ color }}>
            {score}/100
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-xs font-semibold mb-2" style={{ color: "var(--color-text-secondary)" }}>
          SOURCES
        </div>
        <div className="flex flex-wrap gap-1">
          {sources.map((source, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text-secondary)",
              }}
            >
              {source}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {checks.map((check, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 shrink-0" style={{ color }} />
            <span style={{ color: "var(--color-text-secondary)" }}>{check}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
