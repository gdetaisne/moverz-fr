"use client";

/**
 * CreditsafeChapter — "Pourquoi Moverz" (USP) + Label Moverz avec scores
 * Fond LIGHT — 3 piliers USP fun + scores animés Label Moverz
 */

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, PhoneOff, UserCheck, ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";
import Image from "next/image";
import { buildTunnelUrl } from "@/lib/tunnel-url";

const USP_PILLARS = [
  {
    num: "01",
    icon: PhoneOff,
    title: "Zéro arnaque,\nzéro démarchage",
    body: "Votre anonymat est préservé. Aucun déménageur ne vous contacte directement.",
    accent: "#0EA5A6",
  },
  {
    num: "02",
    icon: UserCheck,
    title: "Un agent dédié\njusqu'à votre décision",
    body: "Un seul interlocuteur de A à Z. Pas de transfert, pas de répétition.",
    accent: "#0EA5A6",
  },
  {
    num: "03",
    icon: Shield,
    title: "1 000+ déménageurs\nvraiment vérifiés",
    body: "Solidité financière, assurance, avis analysés. Seuls les meilleurs vous sont présentés.",
    accent: "#0EA5A6",
  },
];

const LABEL_CRITERIA = [
  { label: "Fiabilité légale", score: 88, weight: 0.25, color: "#16A34A" },
  { label: "Satisfaction clients", score: 76, weight: 0.40, color: "#16A34A" },
  { label: "Alertes", score: 72, weight: 0.35, color: "#D97706" },
];

function AnimatedBar({ score, color, delay = 0 }: { score: number; color: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      setWidth(score);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, score, delay]);

  return (
    <div ref={ref} className="h-2 w-full rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.07)" }}>
      <div
        className="h-full rounded-full"
        style={{
          width: `${width}%`,
          background: color,
          transition: "width 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}

export function CreditsafeChapter() {
  const quoteUrl = buildTunnelUrl({ from: "why-moverz" });

  return (
    <section
      className="relative py-12 md:py-28 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Grain léger */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-2xl mb-14"
        >
          <motion.div variants={staggerItem}>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{ background: "rgba(14,165,166,0.08)", border: "1px solid rgba(14,165,166,0.18)" }}
            >
              <div className="h-2 w-2 rounded-full" style={{ background: "#0EA5A6" }} />
              <span className="text-sm font-semibold" style={{ color: "#0EA5A6" }}>Pourquoi Moverz</span>
            </div>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--color-text)" }}
          >
            On révolutionne le marché du déménagement,{" "}
            <span style={{ color: "#0EA5A6" }}>ensemble.</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-base md:text-lg max-w-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Zéro arnaque. Zéro démarchage. Un seul interlocuteur. Et des déménageurs vraiment vérifiés.
          </motion.p>
        </motion.div>

        {/* 3 piliers USP — cartes fun avec numéros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {USP_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative rounded-2xl p-6 overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid rgba(14,165,166,0.12)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(14,165,166,0.06)",
                }}
              >
                {/* Numéro en fond décoratif */}
                <span
                  className="absolute top-3 right-4 font-heading font-bold select-none pointer-events-none"
                  style={{ fontSize: "72px", lineHeight: 1, color: "rgba(14,165,166,0.06)" }}
                >
                  {pillar.num}
                </span>

                {/* Barre accent en haut */}
                <div
                  className="absolute top-0 left-6 h-[3px] w-10 rounded-b-full"
                  style={{ background: pillar.accent }}
                />

                {/* Icon */}
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl mb-5"
                  style={{ background: "rgba(14,165,166,0.08)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "#0EA5A6" }} />
                </div>

                {/* Titre sur 2 lignes avec retour à la ligne intentionnel */}
                <p className="text-base font-bold mb-2 leading-snug whitespace-pre-line" style={{ color: "var(--color-text)" }}>
                  {pillar.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {pillar.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Label Moverz — 2 colonnes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
        >
          {/* LEFT */}
          <motion.div variants={staggerItem} className="space-y-5">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(14,165,166,0.08)",
                border: "1px solid rgba(14,165,166,0.18)",
                color: "#0EA5A6",
              }}
            >
              <Image src="/logo-label-moverz.png" alt="Label Moverz" width={21} height={14} className="h-3.5" />
              <span>Label Moverz</span>
            </div>

            <h3 className="font-heading text-[clamp(22px,3.5vw,36px)] font-bold tracking-[-0.02em] leading-[1.1]" style={{ color: "var(--color-text)" }}>
              Chaque déménageur reçoit un score{" "}
              <span style={{ color: "#0EA5A6" }}>/100 automatique.</span>
            </h3>

            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              3 dimensions (fiabilité légale, satisfaction clients, alertes) calculées à partir de 5 sous-scores indépendants. Score &lt; 50/100 = exclusion automatique.
            </p>

            <div className="flex items-center gap-4">
              <a
                href={quoteUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                style={{ background: "#0EA5A6", boxShadow: "0 4px 16px rgba(14,165,166,0.25)" }}
              >
                Obtenir mes devis
              </a>
              <a
                href="/label-moverz/"
                className="group inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: "#0EA5A6" }}
              >
                En savoir plus
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — scores animés */}
          <motion.div variants={staggerItem}>
            <div
              className="rounded-2xl p-6 space-y-5"
              style={{
                background: "white",
                border: "1px solid rgba(14,165,166,0.12)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(14,165,166,0.06)",
              }}
            >
              {/* Titre de la carte */}
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(14,165,166,0.7)" }}>
                  Exemple d&apos;analyse Moverz
                </p>
              </div>

              {LABEL_CRITERIA.map((criterion, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>{criterion.label}</span>
                    <span className="text-sm font-bold tabular-nums" style={{ color: criterion.color }}>
                      {criterion.score}/100
                    </span>
                  </div>
                  <AnimatedBar score={criterion.score} color={criterion.color} delay={i * 150} />
                </div>
              ))}

              {/* Score global */}
              <div
                className="flex items-center justify-between rounded-xl px-4 py-3 mt-2"
                style={{ background: "rgba(14,165,166,0.06)", border: "1px solid rgba(14,165,166,0.12)" }}
              >
                <span className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>Score global Moverz</span>
                <span className="text-xl font-bold tabular-nums" style={{ color: "#0EA5A6" }}>
                  {Math.round(88 * 0.25 + 76 * 0.40 + 72 * 0.35)}/100
                </span>
              </div>

              <p className="text-xs text-center" style={{ color: "var(--color-text-muted)" }}>
                Score calculé automatiquement · Monitoring continu 7 jours
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
