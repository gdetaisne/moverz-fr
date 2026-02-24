"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Star, AlertTriangle, Building2, Gavel, MessageSquare, Eye, Lock } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

interface Axis {
  icon: typeof Shield;
  title: string;
  subtitle: string;
  score: number;
  sources: string[];
  verdict: string;
}

const axes: Axis[] = [
  {
    icon: Building2,
    title: "Solidité de l\u2019entreprise",
    subtitle: "Cette entreprise est-elle fiable financièrement et juridiquement\u00a0?",
    score: 78,
    sources: ["Creditsafe", "Pappers", "Tribunaux de commerce"],
    verdict: "Aucune alerte financière ou juridique détectée",
  },
  {
    icon: MessageSquare,
    title: "Expérience client vérifiée",
    subtitle: "Que disent les vrais clients\u00a0?",
    score: 91,
    sources: ["Avis Google", "Analyse IA du contenu des avis"],
    verdict: "Avis majoritairement positifs, service fiable",
  },
  {
    icon: Eye,
    title: "Vigilance & signaux d\u2019alerte",
    subtitle: "Y a-t-il des raisons de s\u2019inquiéter\u00a0?",
    score: 70,
    sources: ["Avis négatifs analysés", "Patterns détectés"],
    verdict: "Quelques réserves mineures, globalement fiable",
  },
];

const trustPoints = [
  { icon: Lock, text: "Score automatique, impossible à modifier par le déménageur" },
  { icon: Shield, text: "Multi-sources officielles : pas seulement les avis Google" },
  { icon: AlertTriangle, text: "En dessous du seuil, le déménageur est exclu — pas juste mal noté" },
];

function getScoreColor(score: number): string {
  if (score >= 80) return "var(--color-accent)";
  if (score >= 60) return "#F59E0B"; // Warning color (keep as is)
  return "#EF4444"; // Danger color (keep as is)
}

function getScoreLabel(score: number): string {
  if (score >= 80) return "Excellent";
  if (score >= 60) return "Bon";
  return "À risque";
}

function AnimatedScore({ score, delay = 0 }: { score: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 800;
      const startTime = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        start = Math.round(eased * score);
        setDisplayed(start);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, score, delay]);

  const color = getScoreColor(score);
  const size = 80;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (displayed / 100) * circumference;

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
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
          className="transition-all"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold text-white tabular-nums">{displayed}</span>
      </div>
    </div>
  );
}

function GlobalScore() {
  const avg = Math.round(axes.reduce((s, a) => s + a.score, 0) / axes.length);
  const color = getScoreColor(avg);
  const label = getScoreLabel(avg);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * avg));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, avg]);

  const size = 120;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (displayed / 100) * circumference;

  return (
    <div ref={ref} className="flex items-center gap-5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
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
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white tabular-nums">{displayed}</span>
          <span className="text-xs text-white/40">/100</span>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold text-white">Score Global Moverz</p>
        <p className="text-sm font-semibold" style={{ color }}>{label}</p>
        <p className="text-xs text-white/40 mt-1">DéménagePro SAS — exemple</p>
      </div>
    </div>
  );
}

export function CreditsafeChapter() {
  return (
    <section
      className="relative py-12 md:py-28 overflow-hidden"
      style={{ background: "var(--color-bg-dark)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
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
          <motion.h2
            variants={staggerItem}
            className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] text-white leading-[1.1]"
          >
            Chaque déménageur est analysé{" "}
            <span className="text-white/40">avant de pouvoir vous répondre.</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-base md:text-lg text-white/50 max-w-lg leading-relaxed"
          >
            3 axes d&apos;analyse, notés /100, à partir de sources officielles.
            Un signal grave = exclusion immédiate. Pas de compromis.
          </motion.p>
        </motion.div>

        {/* Global score */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <GlobalScore />
        </motion.div>

        {/* 3 Axes */}
        <div className="grid gap-4 md:grid-cols-3 mb-10">
          {axes.map((axis, i) => {
            const Icon = axis.icon;
            const color = getScoreColor(axis.score);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="rounded-[var(--radius-md)] border p-5 md:p-6 transition-shadow duration-300"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                {/* Icon + title + score circle */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "rgba(14,165,166,0.12)" }}
                    >
                      <Icon className="h-4.5 w-4.5" style={{ color: "var(--color-accent)" }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{axis.title}</p>
                      <p className="text-xs text-white/40 mt-0.5">{axis.subtitle}</p>
                    </div>
                  </div>
                  <AnimatedScore score={axis.score} delay={i * 200} />
                </div>

                {/* Animated bar */}
                <div className="mb-4">
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${axis.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full"
                      style={{ background: color }}
                    />
                  </div>
                </div>

                {/* Verdict */}
                <p className="text-sm text-white/60 mb-4 flex items-center gap-2">
                  <Star className="h-3.5 w-3.5 shrink-0" style={{ color }} />
                  {axis.verdict}
                </p>

                {/* Sources */}
                <div className="flex flex-wrap gap-1.5">
                  {axis.sources.map((src, j) => (
                    <span
                      key={j}
                      className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium text-white/40"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      {src}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-[var(--radius-md)] border p-5 md:p-6"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {trustPoints.map(({ icon: TIcon, text }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(14,165,166,0.12)" }}
                >
                  <TIcon className="h-3.5 w-3.5" style={{ color: "var(--color-accent)" }} />
                </div>
                <p className="text-sm text-white/50 leading-snug">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/30 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            Score calculé automatiquement à partir de sources officielles. Aucun déménageur ne peut modifier sa note.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
