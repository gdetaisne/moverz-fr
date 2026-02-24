"use client";

/**
 * WhyMoverz - Version Premium avec stats
 * Design impactant pour servir de buffer entre Hero et Scrollytelling
 * Style cohérent avec CreditsafeChapter
 */

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { Tag, Shield, Clock, ArrowRight } from "lucide-react";

const arguments_ = [
  {
    icon: Tag,
    number: "01",
    title: "Déménagez au juste prix",
    description: "Appel d'offres réel sur votre dossier précis.",
    highlight: "Pas de devis d'appel. Pas d'estimation vague.",
    stat: "450€",
    statLabel: "économisés en moyenne",
  },
  {
    icon: Shield,
    number: "02",
    title: "Choisissez un partenaire de confiance",
    description: "Entreprises assurées, vérifiées, sélectionnées.",
    highlight: "Les offres à risque sont écartées.",
    stat: "3/7",
    statLabel: "offres retenues en moyenne",
  },
  {
    icon: Clock,
    number: "03",
    title: "Décidez en quelques minutes",
    description: "Un seul dossier. Des offres comparables.",
    highlight: "Une décision simple.",
    stat: "48h",
    statLabel: "pour recevoir vos offres",
  },
];

export function WhyMoverz() {
  return (
    <section 
      className="relative py-16 md:py-32 overflow-hidden"
      style={{ 
        background: "linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface) 100%)"
      }}
    >
      {/* Glow subtil en haut */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full blur-[120px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(14,165,166,0.3), transparent 70%)",
        }}
      />

      <div className="container relative max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center space-y-4 max-w-3xl mx-auto">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full"
              style={{ 
                background: "rgba(14,165,166,0.1)", 
                color: "var(--color-accent)",
                border: "1px solid rgba(14,165,166,0.2)"
              }}
            >
              Notre approche
            </span>
            <h2
              className="font-heading text-[clamp(32px,5vw,52px)] font-bold tracking-[-0.02em] leading-[1.1]"
              style={{ color: "var(--color-text)" }}
            >
              Pourquoi passer par nous ?
            </h2>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Un seul dossier. Des offres vérifiées. Un choix serein.
            </p>
          </motion.div>

          {/* 3 arguments - Premium cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {arguments_.map((arg, i) => {
              const Icon = arg.icon;
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl border p-8 space-y-6 transition-all duration-300"
                  style={{
                    borderColor: "var(--color-border)",
                    background: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Number badge - top right */}
                  <div 
                    className="absolute top-6 right-6 text-6xl font-bold opacity-5 font-heading"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {arg.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(14,165,166,0.1)" }}
                  >
                    <Icon className="h-7 w-7" style={{ color: "var(--color-accent)" }} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3
                      className="text-xl font-bold leading-tight"
                      style={{ color: "var(--color-text)" }}
                    >
                      {arg.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {arg.description}
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {arg.highlight}
                    </p>
                  </div>

                  {/* Stat au bas */}
                  <div 
                    className="pt-4 border-t"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div className="flex items-baseline gap-2">
                      <span 
                        className="text-3xl font-bold tabular-nums"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {arg.stat}
                      </span>
                      <span 
                        className="text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {arg.statLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom tagline */}
          <motion.div 
            variants={staggerItem}
            className="text-center pt-8"
          >
            <p
              className="text-base font-medium"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Découvrez comment nous filtrons les offres pour vous ↓
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
