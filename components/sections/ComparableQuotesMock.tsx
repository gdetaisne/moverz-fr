"use client";

/**
 * V4 — Section "Des devis détaillés et comparables"
 * Layout 2 colonnes : gauche mockup iPhone, droite contenu
 * Design system V4 strict : mêmes tokens, radius, shadows, typo, motion
 */

import { motion } from "framer-motion";
import { FileText, Shield, Eye, Phone } from "lucide-react";
import { staggerContainer, staggerItem, fadeUp } from "@/components/motion";

const bullets = [
  {
    icon: FileText,
    text: "Mêmes lignes de prix, mêmes unités — comparaison immédiate",
  },
  {
    icon: Shield,
    text: "Chaque déménageur est vérifié (assurance, licence, solvabilité)",
  },
  {
    icon: Eye,
    text: "Aucun frais caché, options clairement identifiées",
  },
];

export function ComparableQuotesMock() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* LEFT — iPhone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-[280px] md:w-[300px]">
              {/* Phone frame */}
              <div
                className="rounded-[28px] border-[6px] p-3 overflow-hidden"
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-surface)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                {/* Status bar */}
                <div className="flex items-center justify-between px-2 pt-1 pb-2">
                  <span className="text-[10px] font-semibold" style={{ color: "var(--color-text)" }}>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 rounded-sm" style={{ background: "var(--color-text)" }} />
                  </div>
                </div>

                {/* App header */}
                <div className="px-2 pb-3 border-b" style={{ borderColor: "var(--color-border-light)" }}>
                  <p className="text-[11px] font-semibold" style={{ color: "var(--color-accent)" }}>
                    Moverz
                  </p>
                  <p className="text-[13px] font-semibold mt-0.5" style={{ color: "var(--color-text)" }}>
                    Vos devis comparables
                  </p>
                </div>

                {/* Quote cards */}
                <div className="space-y-2.5 py-3">
                  {[
                    { name: "DéménagePro", price: "1 180 €", score: "92/100", best: true },
                    { name: "MoveFast", price: "1 340 €", score: "87/100", best: false },
                    { name: "TransportPlus", price: "1 490 €", score: "84/100", best: false },
                  ].map((q, i) => (
                    <div
                      key={i}
                      className="rounded-[var(--radius-sm)] border p-2.5"
                      style={{
                        borderColor: q.best ? "var(--color-accent)" : "var(--color-border-light)",
                        background: q.best ? "rgba(14,165,166,0.03)" : "transparent",
                      }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[12px] font-semibold" style={{ color: "var(--color-text)" }}>
                          {q.name}
                        </span>
                        {q.best && (
                          <span
                            className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full"
                            style={{ background: "rgba(14,165,166,0.1)", color: "var(--color-accent)" }}
                          >
                            Meilleur prix
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          {["Main d'œuvre", "Transport", "Cartons", "Assurance"].map((line, j) => (
                            <p key={j} className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                              {line}
                            </p>
                          ))}
                        </div>
                        <div className="text-right">
                          <p
                            className="text-[16px] font-bold tabular-nums"
                            style={{ color: q.best ? "var(--color-accent)" : "var(--color-text)" }}
                          >
                            {q.price}
                          </p>
                          <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                            Score {q.score}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div
                  className="rounded-[var(--radius-sm)] py-2 text-center text-[12px] font-semibold text-white"
                  style={{ background: "var(--color-text)" }}
                >
                  Choisir un déménageur
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Contenu */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium"
                style={{
                  background: "var(--color-border-light)",
                  color: "var(--color-text-secondary)",
                }}
              >
                Ce que vous recevez
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={staggerItem}
              className="font-heading text-[clamp(28px,5vw,44px)] font-bold tracking-[-0.02em] leading-[1.1]"
              style={{ color: "var(--color-text)" }}
            >
              Des devis détaillés et comparables
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="text-base md:text-lg max-w-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Chaque déménageur reçoit le même dossier standardisé.
              Vous recevez des devis lisibles, ligne par ligne.
            </motion.p>

            {/* Card */}
            <motion.div
              variants={staggerItem}
              className="rounded-[var(--radius-md)] border p-5"
              style={{
                borderColor: "var(--color-border)",
                background: "var(--color-bg)",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)]"
                  style={{ background: "rgba(14,165,166,0.08)" }}
                >
                  <Shield className="h-4 w-4" style={{ color: "var(--color-accent)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                    Déménageurs sélectionnés
                  </p>
                  <p className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>
                    3 à 5 devis sous 5 à 7 jours
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bullets */}
            <div className="space-y-3">
              {bullets.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-start gap-3"
                >
                  <Icon
                    className="h-4 w-4 mt-0.5 shrink-0"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Callout */}
            <motion.div
              variants={staggerItem}
              className="flex items-start gap-3 rounded-[var(--radius-sm)] border p-3.5"
              style={{
                borderColor: "var(--color-border-light)",
                background: "var(--color-bg)",
              }}
            >
              <Phone className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "var(--color-text-muted)" }} />
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Votre téléphone reste masqué. Vous choisissez qui et quand rappeler.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
