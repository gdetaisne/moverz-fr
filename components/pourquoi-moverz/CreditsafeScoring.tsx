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
              Score global.{" "}
              <span className="text-white/40">3 dimensions /100.</span>
            </motion.h2>

            <motion.p variants={staggerItem} className="text-lg text-white/50 leading-relaxed mb-8">
              Chaque déménageur reçoit un score de 0 à 100 basé sur{" "}
              <strong className="text-white">3 dimensions</strong>{" "}
              (fiabilité légale 25%, satisfaction clients 40%, alertes 35%) calculées à partir de 5 sous-scores indépendants via Pappers, Google Places et analyse IA.
            </motion.p>

            <div className="space-y-4">
              {/* A */}
              <motion.div variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <CheckCircle className="w-5 h-5 text-[#0EA5A6] flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <h3 className="font-semibold text-white mb-1">✓ Déménageur A — Score 85/100</h3>
                  <p className="text-white/50 text-sm">Fiabilité légale 88/100 · Satisfaction clients 84/100 · Alertes 83/100 → Excellent profil</p>
                </div>
              </motion.div>

              {/* B */}
              <motion.div variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <AlertCircle className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <h3 className="font-semibold text-white mb-1">⚠ Déménageur B — Score 58/100</h3>
                  <p className="text-white/50 text-sm">Fiabilité légale 52/100 (trésorerie faible) · Satisfaction 61/100 · Alertes 60/100 → Profil correct, à surveiller</p>
                </div>
              </motion.div>

              {/* C */}
              <motion.div variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <XCircle className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <h3 className="font-semibold text-white/50 mb-1">✕ Déménageur C — Score 24/100 — Exclu</h3>
                  <p className="text-white/40 text-sm">Alertes critiques détectées (>3% avis signalent casses) → Non présenté dans vos devis</p>
                </div>
              </motion.div>
            </div>

            <motion.p variants={staggerItem} className="text-xs text-white/25 mt-6 text-center lg:text-left">
              Sources : Pappers, Google Places API, SearchAPI.io • Analyses automatiques • Exemples illustratifs
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
                  <p className="text-xs font-semibold text-white/40 mb-1">Score Moverz /100</p>
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
                        <p className="text-xs text-white/40 mt-1">Fiabilité 88 · Satisfaction 84 · Alertes 83</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs font-medium text-white/60 bg-white/10 px-2 py-1 rounded">Excellent</span>
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
                      <div className="text-3xl font-bold text-white/60">58</div>
                      <div className="flex-1">
                        <div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
                          <div className="h-full rounded-full bg-white/30" style={{ width: "58%" }} />
                        </div>
                        <p className="text-xs text-white/40 mt-1">Fiabilité 52 · Satisfaction 61 · Alertes 60</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-xs font-medium text-white/40 bg-white/10 px-2 py-1 rounded">Correct · Trésorerie faible</span>
                    </div>
                  </div>

                  {/* C - excluded */}
                  <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] opacity-60">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-white/50">Déménageur C</p>
                      <XCircle className="w-5 h-5 text-white/20" />
                    </div>
                    <p className="text-sm font-bold text-white/30">Score 24/100 — Exclu</p>
                    <p className="text-xs text-white/30 mt-1">Alertes critiques détectées (>3% avis signalent casses)</p>
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
              Coût élevé (Pappers Pro + SearchAPI + analyse IA + Google Places API), complexité technique (agrégation de 5 sous-scores), et conflit d'intérêt : difficile de noter financièrement un client qui vous paie.
            </p>
            <a href="/verifications-partenaires/" className="inline-block mt-4 text-sm font-medium hover:text-white transition-colors" style={{ color: "#0EA5A6" }}>
              → Voir le détail de nos 3 dimensions de scoring
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
