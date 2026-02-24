"use client";

/**
 * WhyMoverz - Version alignée sur CreditsafeChapter
 * Design compact avec animations de progression
 * Couleurs: Turquoise uniquement (arguments positifs Moverz)
 */

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Tag, Shield, Clock } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

const arguments_ = [
  {
    icon: Tag,
    title: "Prix justes",
    subtitle: "Appel d'offres réel, pas d'estimation vague",
    score: 450,
    scoreLabel: "€ économisés",
    color: "#0EA5A6", // Turquoise
  },
  {
    icon: Shield,
    title: "Partenaires vérifiés",
    subtitle: "Entreprises assurées, offres à risque écartées",
    score: 43,
    scoreLabel: "% retenues",
    color: "#0EA5A6", // Turquoise
  },
  {
    icon: Clock,
    title: "Décision rapide",
    subtitle: "Minimum 3 devis vérifiés sous 5 jours",
    score: 48,
    scoreLabel: "h max",
    color: "#0EA5A6", // Turquoise
  },
];

// Score animé (comme CreditsafeChapter)
function AnimatedScore({ score, delay = 0, suffix = "", color }: { score: number; delay?: number; suffix?: string; color: string }) {
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

  return (
    <div ref={ref} className="flex items-baseline gap-1">
      <span className="text-4xl font-bold tabular-nums" style={{ color }}>
        {displayed}
      </span>
      <span className="text-sm text-white/40">
        {suffix}
      </span>
    </div>
  );
}

export function WhyMoverz() {
  return (
    <section 
      className="relative py-12 md:py-24 overflow-hidden"
      style={{ background: "#0B0F14" }}
    >
      {/* Texture grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      <div className="container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Header - Style CreditsafeChapter (aligné gauche) */}
          <motion.div variants={staggerItem} className="mb-10 md:mb-14 max-w-2xl">
            <h2
              className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] leading-[1.1]"
            >
              <span className="text-white">On révolutionne le déménagement</span>
              <span className="text-white/40">, ensemble.</span>
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-white/50 max-w-lg leading-relaxed">
              3 garanties concrètes. Des offres vérifiées. Un choix serein.
            </p>
          </motion.div>

          {/* 3 cards - Style CreditsafeChapter - Horizontal sur mobile */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {arguments_.map((arg, i) => {
              const Icon = arg.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="rounded-xl border p-5 md:p-6 transition-all duration-300"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Icon + Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ background: `${arg.color}15` }}
                      >
                        <Icon className="h-4.5 w-4.5" style={{ color: arg.color }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{arg.title}</p>
                        <p className="text-xs text-white/40 mt-0.5">{arg.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Barre de progression animée (comme Creditsafe) */}
                  <div className="mb-4">
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: arg.color }}
                      />
                    </div>
                  </div>

                  {/* Score animé */}
                  <div className="flex items-center justify-between">
                    <AnimatedScore 
                      score={arg.score} 
                      delay={i * 200} 
                      suffix={arg.scoreLabel}
                      color={arg.color}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
