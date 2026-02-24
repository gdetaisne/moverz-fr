"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

export default function CreditsafeScoring() {
  return (
    <section
      className="relative py-12 md:py-24 overflow-hidden"
      style={{ background: "#FFFFFF" }}
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
          {/* Left: Explications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-text)] mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Exclusivité Moverz
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="font-heading text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-6 leading-tight tracking-[-0.02em]"
            >
              3 analyses de risque. Notées /100.
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-lg text-[var(--color-text-secondary)]/70 leading-relaxed mb-8"
            >
              Le prix ne fait pas tout. Nous évaluons chaque déménageur selon{" "}
              <strong className="text-[var(--color-text)]">
                3 axes de risque
              </strong>{" "}
              (expérience client, financier, juridique) via Creditsafe, Pappers
              et l'analyse des avis Google.
            </motion.p>

            <div className="space-y-5">
              {/* Reco A */}
              <motion.div
                variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200"
              >
                <CheckCircle
                  className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-1">
                    ✓ Déménageur A
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Google 82/100 · Financier 85/100 · Juridique 91/100 · Aucune
                    alerte → Le plus fiable
                  </p>
                </div>
              </motion.div>

              {/* Attention B */}
              <motion.div
                variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-200"
              >
                <AlertCircle
                  className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-1">
                    ⚠ Déménageur B
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Google 61/100 (patterns retards) · Financier 52/100 (↓ ratio
                    cash/dettes) → Fragile, négociez les conditions
                  </p>
                </div>
              </motion.div>

              {/* Exclu C */}
              <motion.div
                variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-200"
              >
                <XCircle
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-1">
                    ✕ Déménageur C — Exclu automatiquement
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Alerte cash (ratio cash/dettes critique) + alerte juridique
                    (condamnation 2023) → Non présenté dans vos devis
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.p
              variants={staggerItem}
              className="text-sm text-[var(--color-text-secondary)]/60 mt-6 text-center lg:text-left"
            >
              Sources : Google, Creditsafe, Pappers • Analyses automatiques •
              Exemple illustratif
            </motion.p>
          </motion.div>

          {/* Right: Mockup scoring app */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-[var(--color-border)]">
                {/* Header */}
                <div className="bg-gradient-to-br from-[var(--color-bg-dark)] to-[var(--color-bg-dark)] px-6 py-5 text-white">
                  <p className="text-xs font-semibold opacity-70 mb-1">
                    3 analyses de risque /100
                  </p>
                  <p className="text-lg font-bold">3 déménageurs évalués</p>
                </div>

                {/* Scores */}
                <div className="p-6 space-y-4">
                  {/* A - Green */}
                  <div className="p-4 rounded-xl bg-green-50 border-2 border-green-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-[var(--color-text)]">
                        Déménageur A
                      </p>
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-green-600">
                        85
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                            style={{ width: "85%" }}
                          />
                        </div>
                        <p className="text-xs text-green-900 mt-1">
                          Financier 85 · Google 82 · Juridique 91
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs font-medium bg-green-100 text-green-900 px-2 py-1 rounded">
                        0 alerte
                      </span>
                      <span className="text-xs font-medium bg-green-100 text-green-900 px-2 py-1 rounded">
                        Présenté
                      </span>
                    </div>
                  </div>

                  {/* B - Orange */}
                  <div className="p-4 rounded-xl bg-orange-50 border-2 border-orange-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-[var(--color-text)]">
                        Déménageur B
                      </p>
                      <TrendingDown className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-orange-600">
                        52
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                          <div
                            className="h-full bg-orange-500 rounded-full"
                            style={{ width: "52%" }}
                          />
                        </div>
                        <p className="text-xs text-orange-900 mt-1">
                          Financier 52 (↓) · Google 61 · Juridique 74
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs font-medium bg-orange-100 text-orange-900 px-2 py-1 rounded">
                        Ratio cash/dettes faible
                      </span>
                    </div>
                  </div>

                  {/* C - Red / Exclu */}
                  <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-[var(--color-text)]">
                        Déménageur C
                      </p>
                      <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-red-600">
                        Exclu
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-red-900 mt-1">
                          Alerte cash + alerte juridique
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs font-medium bg-red-100 text-red-900 px-2 py-1 rounded">
                        Non présenté
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[var(--color-border)]">
            <p className="text-sm font-semibold text-[var(--color-text)] mb-2">
              Pourquoi personne d'autre ne le fait ?
            </p>
            <p className="text-[var(--color-text-secondary)]/70 text-sm">
              Coût élevé (Creditsafe + Pappers + accès juridique), complexité
              d'analyse, et conflit d'intérêt : difficile de noter
              financièrement un client qui vous paie.
            </p>
            <a
              href="/verifications-partenaires/"
              className="inline-block mt-4 text-[var(--color-accent)] text-sm font-medium hover:text-[var(--color-text)] transition-colors"
            >
              → Voir le détail de nos 3 analyses de risque
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
