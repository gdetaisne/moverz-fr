"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Building2, Shield, Star, Gavel } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

const GRAIN = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

export default function MarketRisks() {
  return (
    <section
      className="relative py-12 md:py-24 overflow-hidden"
      style={{ background: "#0B0F14" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{ backgroundImage: GRAIN }} />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(circle, rgba(14,165,166,0.4), transparent 70%)" }} />

      <div className="container relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Mockup dark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="rounded-3xl overflow-hidden border border-white/10" style={{ background: "#111820" }}>
                {/* Header */}
                <div className="px-6 py-5 border-b border-white/10">
                  <p className="text-xs font-semibold text-white/40 mb-1">Secteur déménagement</p>
                  <p className="text-lg font-bold text-white">Analyse des risques</p>
                </div>

                <div className="p-6 space-y-4">
                  {/* Stat 1 */}
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wide">Anomalies DGCCRF</p>
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: "rgba(239,68,68,0.25)", border: "1px solid rgba(239,68,68,0.4)" }}>Élevé</span>
                    </div>
                    <p className="text-4xl font-bold text-white mb-1">64%</p>
                    <p className="text-xs text-white/40">des entreprises contrôlées</p>
                    <p className="text-xs text-white/25 mt-1">Source : DGCCRF 2023</p>
                  </div>

                  {/* Stat 2 */}
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wide">Faillites</p>
                      <TrendingDown className="w-4 h-4 text-white/30" />
                    </div>
                    <p className="text-4xl font-bold text-white mb-1">257</p>
                    <p className="text-xs text-white/40">sur ~1 300 établissements (2024)</p>
                    <p className="text-xs text-white/25 mt-1">Source : CSD 2024</p>
                  </div>

                  {/* Stat 3 */}
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wide">Structure du marché</p>
                      <Building2 className="w-4 h-4 text-white/30" />
                    </div>
                    <p className="text-4xl font-bold text-white mb-1">90%</p>
                    <p className="text-xs text-white/40">&lt; 20 salariés (difficile à évaluer)</p>
                    <p className="text-xs text-white/25 mt-1">Source : Étude marché</p>
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
            <motion.div variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
              style={{ background: "rgba(14,165,166,0.12)", border: "1px solid rgba(14,165,166,0.2)", color: "#0EA5A6" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: "#0EA5A6" }} />
              Les chiffres du secteur
            </motion.div>

            <motion.h2 variants={staggerItem}
              className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-[-0.02em]"
            >
              Un marché{" "}
              <span className="text-white/40">à risque</span>
            </motion.h2>

            <motion.p variants={staggerItem}
              className="text-lg text-white/50 leading-relaxed mb-8"
            >
              Le déménagement est l'un des secteurs les plus problématiques pour les consommateurs. Voici pourquoi.
            </motion.p>

            <div className="space-y-6 mb-10">
              {[
                { icon: AlertTriangle, title: "64% d'anomalies détectées", desc: "Enquête DGCCRF 2023 : plus de 6 entreprises sur 10 présentent des problèmes." },
                { icon: TrendingDown, title: "257 faillites en 2024", desc: "Comment savoir si votre déménageur sera encore là le jour J ?" },
                { icon: Building2, title: "90% de petites structures", desc: "Moins de 20 salariés, difficile d'évaluer leur fiabilité." },
              ].map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={staggerItem} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                    <Icon className="w-5 h-5 text-white/50" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{title}</h3>
                    <p className="text-white/50 text-sm">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Protection card */}
            <motion.div variants={staggerItem}
              className="p-6 rounded-2xl border"
              style={{ background: "rgba(14,165,166,0.08)", borderColor: "rgba(14,165,166,0.2)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5" style={{ color: "#0EA5A6" }} />
                <p className="font-bold text-white">Moverz vous protège — 3 analyses de risque /100</p>
              </div>
              <p className="text-sm text-white/50 mb-3">
                Chaque déménageur est évalué automatiquement. Alertes financières ou juridiques = exclusion immédiate.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Star, label: "Avis Google analysés" },
                  { icon: Shield, label: "Pappers" },
                  { icon: Gavel, label: "Décisions de justice" },
                ].map(({ icon: I, label }) => (
                  <span key={label} className="inline-flex items-center gap-1 text-xs font-medium text-white/70 bg-white/10 px-3 py-1 rounded-full">
                    <I className="w-3 h-3" />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
