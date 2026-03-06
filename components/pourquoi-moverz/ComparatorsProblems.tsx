"use client";

import { motion } from "framer-motion";
import { FileText, Video, Building2, AlertTriangle } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

const GRAIN = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

const PROBLEMS = [
  {
    icon: FileText,
    label: "Lead-gen",
    share: "45–50% du marché",
    desc: "Formulaire → vos données vendues. Aucune comparaison réelle.",
  },
  {
    icon: Video,
    label: "Courtiers visio",
    share: "25–30% du marché",
    desc: "RDV obligatoire, délais longs, friction élevée.",
  },
  {
    icon: Building2,
    label: "Réseaux fermés",
    share: "15–20% du marché",
    desc: "Limité à leurs membres. Pas neutre par définition.",
  },
];

export default function ComparatorsProblems() {
  return (
    <section
      className="relative py-12 md:py-24 overflow-hidden"
      style={{ background: "#0B0F14" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{ backgroundImage: GRAIN }} />
      <div className="pointer-events-none absolute left-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full blur-[120px] opacity-10"
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
                  <p className="text-xs font-semibold text-white/40 mb-1">Analyse du marché</p>
                  <p className="text-lg font-bold text-white">Types de comparateurs</p>
                </div>

                <div className="p-6 space-y-4">
                  {PROBLEMS.map(({ icon: Icon, label, share, desc }) => (
                    <div key={label} className="p-4 rounded-xl border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                          <Icon className="w-4 h-4 text-white/50" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-white">{label}</p>
                          <p className="text-xs text-white/30">{share}</p>
                        </div>
                        <AlertTriangle className="w-4 h-4 text-white/20" />
                      </div>
                      <p className="text-xs text-white/40">{desc}</p>
                    </div>
                  ))}
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
              Le constat
            </motion.div>

            <motion.h2 variants={staggerItem}
              className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-[-0.02em]"
            >
              Le vrai problème des{" "}
              <span className="text-white/40">comparateurs</span>
            </motion.h2>

            <motion.p variants={staggerItem} className="text-lg text-white/50 leading-relaxed mb-8">
              Sur les 20–30 premiers résultats Google,{" "}
              <strong className="text-white">la plupart des comparateurs ne comparent rien</strong>.
              Ils revendent vos coordonnées.
            </motion.p>

            <div className="space-y-6 mb-10">
              {PROBLEMS.map(({ icon: Icon, label, desc }) => (
                <motion.div key={label} variants={staggerItem} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                    <Icon className="w-5 h-5 text-white/50" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{label}</h3>
                    <p className="text-white/50 text-sm">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Conséquence card */}
            <motion.div variants={staggerItem}
              className="p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-white/40" />
                <p className="font-bold text-white">Conséquence</p>
              </div>
              <p className="text-sm text-white/50">
                Le devis <strong className="text-white">le moins cher</strong> n'est pas nécessairement{" "}
                <strong className="text-white">le moins risqué</strong>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
