"use client";

/**
 * WhyMoverz - Version DARK Premium
 * Style cohérent avec CreditsafeChapter
 * Alternance visuelle light/dark sur la homepage
 */

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { Tag, Shield, Clock } from "lucide-react";

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
      style={{ background: "#0B0F14" }}
    >
      {/* Texture grain subtile (comme CreditsafeChapter) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      {/* Glow accent en haut */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full blur-[100px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(14,165,166,0.4), transparent 70%)",
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
                background: "rgba(14,165,166,0.15)", 
                color: "#0EA5A6",
                border: "1px solid rgba(14,165,166,0.3)"
              }}
            >
              Notre approche
            </span>
            <h2
              className="font-heading text-[clamp(32px,5vw,52px)] font-bold tracking-[-0.02em] leading-[1.1] text-white"
            >
              Pourquoi passer par nous ?
            </h2>
            <p 
              className="text-lg leading-relaxed text-white/60"
            >
              Un seul dossier. Des offres vérifiées. Un choix serein.
            </p>
          </motion.div>

          {/* 3 arguments - Dark cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {arguments_.map((arg, i) => {
              const Icon = arg.icon;
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl border p-8 space-y-6 transition-all duration-300"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Number badge - top right */}
                  <div 
                    className="absolute top-6 right-6 text-6xl font-bold opacity-[0.03] font-heading text-white"
                  >
                    {arg.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(14,165,166,0.15)" }}
                  >
                    <Icon className="h-7 w-7" style={{ color: "#0EA5A6" }} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3
                      className="text-xl font-bold leading-tight text-white"
                    >
                      {arg.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed text-white/60"
                    >
                      {arg.description}
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#0EA5A6" }}
                    >
                      {arg.highlight}
                    </p>
                  </div>

                  {/* Stat au bas avec animation */}
                  <div 
                    className="pt-4 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex items-baseline gap-2">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        className="text-3xl font-bold tabular-nums"
                        style={{ color: "#0EA5A6" }}
                      >
                        {arg.stat}
                      </motion.span>
                      <span 
                        className="text-sm text-white/40"
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
              className="text-base font-medium text-white/50"
            >
              Découvrez comment nous filtrons les offres pour vous ↓
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
