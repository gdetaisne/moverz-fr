"use client";

import { motion } from "framer-motion";
import {
  Check,
  X,
  Smartphone,
  Shield,
  TrendingUp,
  Star,
  Gavel,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

export default function MoverzVsOthers() {
  return (
    <section
      className="relative py-12 md:py-24 overflow-hidden"
      style={{ background: "#0B0F14" }}
    >
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* Halo subtil turquoise */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full blur-[120px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(14,165,166,0.4), transparent 70%)",
        }}
      />

      <div className="container relative max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            Comparaison
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-[-0.02em] text-white"
          >
            <span className="text-[var(--color-accent)]">Moverz</span> vs les
            autres
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mockup comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[480px] mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[var(--color-accent)] to-[#0D9B9B] px-6 py-5 text-[var(--color-text)]">
                  <p className="text-xs font-semibold opacity-70 mb-1">
                    Comparaison complète
                  </p>
                  <p className="text-lg font-bold">Moverz vs Comparateurs</p>
                </div>

                {/* Comparison items */}
                <div className="p-6 space-y-3">
                  {/* Analyse avis Google */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)]">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-[var(--color-text)]" />
                      <span className="text-sm font-bold text-[var(--color-text)]">
                        Analyse avis Google /100
                      </span>
                    </div>
                    <Check
                      className="w-5 h-5 text-green-600"
                      strokeWidth={3}
                    />
                  </div>

                  {/* Risque financier */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)]">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-[var(--color-text)]" />
                      <span className="text-sm font-bold text-[var(--color-text)]">
                        Risque financier /100 (Creditsafe + Pappers)
                      </span>
                    </div>
                    <Check
                      className="w-5 h-5 text-green-600"
                      strokeWidth={3}
                    />
                  </div>

                  {/* Risque juridique */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)]">
                    <div className="flex items-center gap-3">
                      <Gavel className="w-5 h-5 text-[var(--color-text)]" />
                      <span className="text-sm font-bold text-[var(--color-text)]">
                        Risque juridique /100 (Pappers Décisions)
                      </span>
                    </div>
                    <Check
                      className="w-5 h-5 text-green-600"
                      strokeWidth={3}
                    />
                  </div>

                  {/* Exclusion alertes */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)]">
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-[var(--color-text)]" />
                      <span className="text-sm font-bold text-[var(--color-text)]">
                        Exclusion automatique (alertes)
                      </span>
                    </div>
                    <Check
                      className="w-5 h-5 text-green-600"
                      strokeWidth={3}
                    />
                  </div>

                  {/* Dossier standardisé */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-bg)]">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-[var(--color-accent)]" />
                      <span className="text-sm font-medium text-[var(--color-text)]">
                        Dossier standardisé (volume IA)
                      </span>
                    </div>
                    <Check
                      className="w-5 h-5 text-green-600"
                      strokeWidth={3}
                    />
                  </div>

                  {/* Multi-canal */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-bg)]">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-[var(--color-accent)]" />
                      <span className="text-sm font-medium text-[var(--color-text)]">
                        Multi-canal & dossier anonyme
                      </span>
                    </div>
                    <Check
                      className="w-5 h-5 text-green-600"
                      strokeWidth={3}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-center">
                    <p className="text-sm font-bold text-green-900">
                      ✓ Moverz = 3 analyses de risque /100 + devis comparables
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
            <div className="space-y-6">
              {/* Feature 1 */}
              <motion.div variants={staggerItem} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]">
                  <Star
                    className="w-6 h-6 text-[var(--color-accent)]"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">
                    Analyse des avis Google
                  </h3>
                  <p className="text-white/70 text-sm">
                    20 derniers avis analysés + détection de patterns dans les
                    mauvais avis (retards, casse, comportement). Deux notes /100
                    distinctes.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div variants={staggerItem} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]">
                  <Shield
                    className="w-6 h-6 text-[var(--color-accent)]"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">
                    Risque financier consolidé
                  </h3>
                  <p className="text-white/70 text-sm">
                    <strong className="text-white">Creditsafe + Pappers</strong>{" "}
                    + analyse interne (ratio cash/dettes). Alerte cash =
                    exclusion automatique.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div variants={staggerItem} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]">
                  <Gavel
                    className="w-6 h-6 text-[var(--color-accent)]"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">
                    Risque juridique analysé
                  </h3>
                  <p className="text-white/70 text-sm">
                    <strong className="text-white">
                      Pappers Décisions + scoring non-financier
                    </strong>
                    . Décisions de justice, sanctions, litiges passés/en cours.
                    Alerte juridique = exclusion automatique.
                  </p>
                </div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div variants={staggerItem} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                  <Check
                    className="w-6 h-6 text-[var(--color-accent)]"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">
                    Transparence pour tous
                  </h3>
                  <p className="text-white/70 text-sm">
                    Chaque indicateur est expliqué au client. Les déménageurs ont
                    accès à leur scoring et peuvent enrichir leur dossier.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
