"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  TrendingDown,
  Building2,
  Shield,
  Star,
  Gavel,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

export default function MarketRisks() {
  return (
    <section
      className="relative py-12 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #FAFBFC 100%)" }}
    >
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
        }}
      />

      <div className="container relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mockup dashboard alertes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 border border-[var(--color-border)]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-border)]">
                  <div>
                    <p className="text-xs text-[var(--color-text-secondary)]/60 font-medium">
                      Secteur déménagement
                    </p>
                    <p className="text-lg font-bold text-[var(--color-text)]">
                      Analyse des risques
                    </p>
                  </div>
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>

                {/* Stat cards */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-red-900 uppercase">
                        Anomalies DGCCRF
                      </p>
                      <div className="px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold">
                        Élevé
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-red-600 mb-1">64%</p>
                    <p className="text-xs text-red-900/70">
                      des entreprises contrôlées
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)]/50 mt-2">
                      Source : DGCCRF 2023
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-orange-900 uppercase">
                        Faillites
                      </p>
                      <TrendingDown className="w-4 h-4 text-orange-600" />
                    </div>
                    <p className="text-4xl font-bold text-orange-600 mb-1">
                      257
                    </p>
                    <p className="text-xs text-orange-900/70">
                      sur ~1 300 établissements (2024)
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)]/50 mt-2">
                      Source : CSD 2024
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-[var(--color-text)] uppercase">
                        Structure du marché
                      </p>
                      <Building2 className="w-4 h-4 text-[var(--color-text-secondary)]" />
                    </div>
                    <p className="text-4xl font-bold text-[var(--color-text)] mb-1">
                      90%
                    </p>
                    <p className="text-xs text-[var(--color-text)]/70">
                      &lt; 20 salariés (difficile à évaluer)
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)]/50 mt-2">
                      Source : Étude marché
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Explications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-text)] mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Les chiffres du secteur
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="font-heading text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-6 leading-tight tracking-[-0.02em]"
            >
              Un marché <span className="text-red-500">à risque</span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-lg text-[var(--color-text-secondary)]/70 leading-relaxed mb-8"
            >
              Le déménagement est l'un des secteurs les plus problématiques pour
              les consommateurs. Voici pourquoi.
            </motion.p>

            <div className="space-y-6 mb-10">
              <motion.div variants={staggerItem} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                  <AlertTriangle
                    className="w-5 h-5 text-red-600"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-1">
                    64% d'anomalies détectées
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Enquête DGCCRF 2023 : plus de 6 entreprises sur 10
                    présentent des problèmes.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
                  <TrendingDown
                    className="w-5 h-5 text-orange-600"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-1">
                    257 faillites en 2024
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Comment savoir si votre déménageur sera encore là le jour J ?
                  </p>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-border-light)]">
                  <Building2
                    className="w-5 h-5 text-[var(--color-text-secondary)]"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-1">
                    90% de petites structures
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Moins de 20 salariés, difficile d'évaluer leur fiabilité.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Protection card */}
            <motion.div
              variants={staggerItem}
              className="p-6 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent)]/5 border border-[var(--color-accent)]/30"
            >
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-[var(--color-text)]" />
                <p className="font-bold text-[var(--color-text)]">
                  Moverz vous protège — 3 analyses de risque /100
                </p>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)]/70 mb-3">
                Chaque déménageur est évalué automatiquement. Alertes
                financières ou juridiques = exclusion immédiate.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium text-[var(--color-text)] bg-white px-3 py-1 rounded-full">
                  <Star className="w-3 h-3 inline mr-1" />
                  Avis Google analysés
                </span>
                <span className="text-xs font-medium text-[var(--color-text)] bg-white px-3 py-1 rounded-full">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Creditsafe + Pappers
                </span>
                <span className="text-xs font-medium text-[var(--color-text)] bg-white px-3 py-1 rounded-full">
                  <Gavel className="w-3 h-3 inline mr-1" />
                  Décisions de justice
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
