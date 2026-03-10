"use client";

/**
 * LabelMoverzTeaser — Mini-section DARK de découverte du Label Moverz
 * Compact, punchy, avec lien vers l'article dédié
 */

import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/components/motion";

const CHECKS = [
  "Fiabilité légale 25% (santé financière + casier juridique Pappers)",
  "Satisfaction clients 40% (tous les avis 12 mois analysés automatiquement)",
  "Alertes 35% (6 catégories de risques détectées automatiquement)",
];

export function LabelMoverzTeaser() {
  return (
    <section
      className="relative py-12 md:py-20 overflow-hidden"
      style={{ background: "#0B0F14" }}
    >
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      {/* Halo subtil */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full blur-[100px] opacity-10"
        style={{ background: "radial-gradient(circle, rgba(14,165,166,0.6), transparent 70%)" }}
      />

      <div className="container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
        >
          {/* LEFT */}
          <motion.div variants={staggerItem} className="space-y-6">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(14,165,166,0.12)",
                border: "1px solid rgba(14,165,166,0.2)",
                color: "#0EA5A6",
              }}
            >
              <Image src="/logo.png" alt="Moverz" width={14} height={14} className="h-3.5 w-3.5" />
              <Shield className="h-3 w-3" />
              <span>Label Moverz</span>
            </div>

            <h2 className="font-heading text-[clamp(24px,4vw,40px)] font-bold tracking-[-0.02em] leading-[1.1] text-white">
              Seuls les déménageurs avec un score{" "}
              <span style={{ color: "#0EA5A6" }}>&gt; 50/100 peuvent vous faire une offre.</span>
            </h2>

            <p className="text-base text-white/50 leading-relaxed max-w-lg">
              Score calculé automatiquement à partir de 3 dimensions (fiabilité légale, satisfaction clients, alertes). 18% des déménageurs sont exclus automatiquement.
            </p>

            <a
              href="/blog/label-moverz-certification-demenageurs/"
              className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "#0EA5A6" }}
            >
              Découvrir le Label Moverz
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* RIGHT — 3 checks */}
          <motion.div variants={staggerItem} className="space-y-3">
            {CHECKS.map((check, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-xl px-5 py-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(14,165,166,0.15)" }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#0EA5A6" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-white/80">{check}</p>
              </motion.div>
            ))}

            {/* Stat 57% */}
            <div
              className="flex items-center justify-between rounded-xl px-5 py-4 mt-2"
              style={{
                background: "rgba(14,165,166,0.07)",
                border: "1px solid rgba(14,165,166,0.15)",
              }}
            >
              <p className="text-sm text-white/50">Candidats refusés chaque année</p>
              <p className="text-2xl font-bold tabular-nums" style={{ color: "#0EA5A6" }}>57%</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
