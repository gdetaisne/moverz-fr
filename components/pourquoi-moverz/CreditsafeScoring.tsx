"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

const GRAIN = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

export default function CreditsafeScoring() {
  return (
    <section
      className="relative py-12 md:py-24 overflow-hidden"
      style={{ background: "#0B0F14" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{ backgroundImage: GRAIN }} />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(circle, rgba(14,165,166,0.4), transparent 70%)" }} />

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
            <motion.div variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
              style={{ background: "rgba(14,165,166,0.12)", border: "1px solid rgba(14,165,166,0.2)", color: "#0EA5A6" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: "#0EA5A6" }} />
              Exclusivité Moverz
            </motion.div>

            <motion.h2 variants={staggerItem}
              className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-[-0.02em]"
            >
              3 analyses de risque.{" "}
              <span className="text-white/40">Notées /100.</span>
            </motion.h2>

            <motion.p variants={staggerItem} className="text-lg text-white/50 leading-relaxed mb-8">
              Le prix ne fait pas tout. Nous évaluons chaque déménageur selon{" "}
              <strong className="text-white">3 axes de risque</strong>{" "}
              (expérience client, financier, juridique) via Creditsafe, Pappers et l'analyse des avis Google.
            </motion.p>

            <div className="space-y-4">
              {/* A */}
              <motion.div variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <CheckCircle className="w-5 h-5 text-[#0EA5A6] flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <h3 className="font-semibold text-white mb-1">✓ Déménageur A</h3>
                  <p className="text-white/50 text-sm">Google 82/100 · Financier 85/100 · Juridique 91/100 · Aucune alerte → Le plus fiable</p>
                </div>
              </motion.div>

              {/* B */}
              <motion.div variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <AlertCircle className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <h3 className="font-semibold text-white mb-1">⚠ Déménageur B</h3>
                  <p className="text-white/50 text-sm">Google 61/100 (patterns retards) · Financier 52/100 (↓ ratio cash/dettes) → Fragile, négociez les conditions</p>
                </div>
              </motion.div>

              {/* C */}
              <motion.div variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <XCircle className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <h3 className="font-semibold text-white/50 mb-1">✕ Déménageur C — Exclu automatiquement</h3>
                  <p className="text-white/40 text-sm">Alerte cash + alerte juridique → Non présenté dans vos devis</p>
                </div>
              </motion.div>
            </div>

            <motion.p variants={staggerItem} className="text-xs text-white/25 mt-6 text-center lg:text-left">
              Sources : Google, Creditsafe, Pappers • Analyses automatiques • Exemple illustratif
            </motion.p>
          </motion.div>

          {/* Right: Mockup scoring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="rounded-3xl overflow-hidden border border-white/10" style={{ background: "#111820" }}>
                {/* Header */}
                <div className="px-6 py-5 border-b border-white/10">
                  <p className="text-xs font-semibold text-white/40 mb-1">3 analyses de risque /100</p>
                  <p className="text-lg font-bold text-white">3 déménageurs évalués</p>
                </div>

                <div className="p-6 space-y-4">
                  {/* A - accepted */}
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-white">Déménageur A</p>
                      <TrendingUp className="w-5 h-5" style={{ color: "#0EA5A6" }} />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold" style={{ color: "#0EA5A6" }}>85</div>
                      <div className="flex-1">
                        <div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
                          <div className="h-full rounded-full" style={{ width: "85%", background: "#0EA5A6" }} />
                        </div>
                        <p className="text-xs text-white/40 mt-1">Financier 85 · Google 82 · Juridique 91</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs font-medium text-white/60 bg-white/10 px-2 py-1 rounded">0 alerte</span>
                      <span className="text-xs font-medium px-2 py-1 rounded" style={{ background: "rgba(14,165,166,0.15)", color: "#0EA5A6" }}>Présenté</span>
                    </div>
                  </div>

                  {/* B - warning */}
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-white">Déménageur B</p>
                      <TrendingDown className="w-5 h-5 text-white/30" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-white/60">52</div>
                      <div className="flex-1">
                        <div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
                          <div className="h-full rounded-full bg-white/30" style={{ width: "52%" }} />
                        </div>
                        <p className="text-xs text-white/40 mt-1">Financier 52 (↓) · Google 61 · Juridique 74</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-xs font-medium text-white/40 bg-white/10 px-2 py-1 rounded">Ratio cash/dettes faible</span>
                    </div>
                  </div>

                  {/* C - excluded */}
                  <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] opacity-60">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-white/50">Déménageur C</p>
                      <XCircle className="w-5 h-5 text-white/20" />
                    </div>
                    <p className="text-sm font-bold text-white/30">Exclu</p>
                    <p className="text-xs text-white/30 mt-1">Alerte cash + alerte juridique</p>
                    <div className="mt-3">
                      <span className="text-xs font-medium text-white/30 bg-white/5 px-2 py-1 rounded">Non présenté</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mt-16"
        >
          <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
            <p className="text-sm font-semibold text-white mb-2">Pourquoi personne d'autre ne le fait ?</p>
            <p className="text-white/40 text-sm">
              Coût élevé (Creditsafe + Pappers + accès juridique), complexité d'analyse, et conflit d'intérêt : difficile de noter financièrement un client qui vous paie.
            </p>
            <a href="/verifications-partenaires/" className="inline-block mt-4 text-sm font-medium hover:text-white transition-colors" style={{ color: "#0EA5A6" }}>
              → Voir le détail de nos 3 analyses de risque
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
