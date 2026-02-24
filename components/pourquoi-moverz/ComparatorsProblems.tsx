"use client";

import { motion } from "framer-motion";
import { FileText, Video, Building2, AlertTriangle } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

export default function ComparatorsProblems() {
  return (
    <section
      className="relative py-12 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FAFBFC 0%, #FFFFFF 100%)" }}
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
          {/* Left: Mockup comparateurs */}
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
                <div className="mb-6 pb-4 border-b border-[var(--color-border)]">
                  <p className="text-xs text-[var(--color-text-secondary)]/60 font-medium">
                    Analyse du marché
                  </p>
                  <p className="text-lg font-bold text-[var(--color-text)]">
                    Types de comparateurs
                  </p>
                </div>

                {/* Problems list */}
                <div className="space-y-4">
                  {/* Lead-gen */}
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[var(--color-text)]">
                          Lead-gen
                        </p>
                        <p className="text-xs text-red-900/70">45-50% du marché</p>
                      </div>
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)]/70 mt-2">
                      Formulaire → vos données vendues. Aucune comparaison réelle.
                    </p>
                  </div>

                  {/* Courtiers visio */}
                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
                        <Video className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[var(--color-text)]">
                          Courtiers visio
                        </p>
                        <p className="text-xs text-orange-900/70">25-30% du marché</p>
                      </div>
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)]/70 mt-2">
                      RDV obligatoire, délais longs, friction élevée.
                    </p>
                  </div>

                  {/* Réseaux fermés */}
                  <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100">
                        <Building2 className="w-5 h-5 text-yellow-700" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[var(--color-text)]">
                          Réseaux fermés
                        </p>
                        <p className="text-xs text-yellow-900/70">15-20% du marché</p>
                      </div>
                      <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)]/70 mt-2">
                      Limité à leurs membres. Pas neutre par définition.
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
              Le constat
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="font-heading text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-6 leading-tight tracking-[-0.02em]"
            >
              Le vrai problème des{" "}
              <span className="text-red-500">comparateurs</span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-lg text-[var(--color-text-secondary)]/70 leading-relaxed mb-8"
            >
              Sur les 20–30 premiers résultats Google,{" "}
              <strong className="text-[var(--color-text)]">
                la plupart des comparateurs ne comparent rien
              </strong>
              . Ils revendent vos coordonnées.
            </motion.p>

            <div className="space-y-6 mb-10">
              {/* Problem 1 */}
              <motion.div variants={staggerItem} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                  <FileText
                    className="w-5 h-5 text-red-600"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-1">
                    Lead-gen (45-50%)
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Formulaire → vos données vendues aux déménageurs. Aucune
                    comparaison réelle.
                  </p>
                </div>
              </motion.div>

              {/* Problem 2 */}
              <motion.div variants={staggerItem} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
                  <Video className="w-5 h-5 text-orange-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-1">
                    Courtiers visio (25-30%)
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Rendez-vous obligatoire, délais longs, friction élevée.
                    Difficile à scaler.
                  </p>
                </div>
              </motion.div>

              {/* Problem 3 */}
              <motion.div variants={staggerItem} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100">
                  <Building2
                    className="w-5 h-5 text-yellow-700"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-1">
                    Réseaux fermés (15-20%)
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Comparaison limitée à leurs membres. Pas neutre par définition.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Conséquence card */}
            <motion.div
              variants={staggerItem}
              className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <p className="font-bold text-[var(--color-text)]">Conséquence</p>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)]/70">
                Le devis{" "}
                <strong className="text-[var(--color-text)]">le moins cher</strong>{" "}
                n'est pas nécessairement{" "}
                <strong className="text-[var(--color-text)]">
                  le moins risqué
                </strong>
                .
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
