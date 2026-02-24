"use client";

/**
 * HERO V4 TWO COLUMN - LICORNE EDITION 🦄
 * Version ultra-premium inspirée Ramp/Botify
 * - Fond dramatique avec grain + gradient
 * - Téléphone avec perspective + stack effect
 * - Trust row repositionnée
 * - Specs typo Ramp exactes
 * - Touches orange + teal
 */

import { buildTunnelUrl } from "@/lib/tunnel-url";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import Image from "next/image";

const STEPS = [
  { num: "1", text: "On sollicite les déménageurs disponibles", bold: false },
  { num: "2", text: "On contrôle prix et fiabilité", bold: false },
  { num: "3", text: "Vous choisissez sereinement", bold: true },
] as const;

export function HeroV4TwoColumn() {
  const quoteUrl = buildTunnelUrl({ from: "homepage-hero" });

  return (
    <section
      className="relative pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden"
      style={{ 
        background: "#FAFBFC"
      }}
    >
      {/* Grain texture - Premium feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* UN SEUL halo subtil derrière le téléphone */}
      <div
        className="pointer-events-none absolute right-1/3 top-1/4 h-[500px] w-[500px] rounded-full blur-[120px] opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(14,165,166,0.4), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6">
        {/* MOBILE : Centré comme avant */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center lg:hidden"
        >
          {/* H1 */}
          <motion.h1
            variants={staggerItem}
            className="font-heading text-[clamp(32px,7vw,56px)] leading-[1.1] font-bold tracking-[-0.02em]"
            style={{ color: "var(--color-text)" }}
          >
            Vous déménagez&nbsp;?
            <br />
            On sélectionne <span style={{ color: "var(--color-accent)" }}>le top 3 des déménageurs</span> pour vous.
          </motion.h1>

          {/* CTA mobile - Direct sous le H1 */}
          <motion.div variants={staggerItem} className="mt-8">
            <a
              href={quoteUrl}
              onClick={() => trackEvent("Lead_clic_home", { source: "hero-cta" })}
              className="inline-flex items-center justify-center gap-2 w-full max-w-md rounded-xl px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(14,165,166,0.3)] active:scale-[0.98]"
              style={{ 
                background: "var(--color-accent)",
                boxShadow: "0 4px 16px rgba(14,165,166,0.24)"
              }}
            >
              Voir mes 3 meilleurs devis
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-2.5 text-xs" style={{ color: "var(--color-text-muted)" }}>
              Gratuit · 3 min · Sans engagement
            </p>
          </motion.div>
        </motion.div>

        {/* DESKTOP : 2 COLONNES LICORNE 🦄 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="hidden lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center"
        >
          {/* COLONNE GAUCHE : Texte + CTA */}
          <motion.div variants={staggerItem} className="lg:col-span-6 max-w-[580px]">
            {/* H1 - Size optimisé */}
            <h1
              className="font-heading text-[56px] leading-[0.95] font-semibold tracking-[-0.03em] mb-8"
              style={{ color: "#111827" }}
            >
              Vous déménagez&nbsp;?
              <br />
              On sélectionne <span style={{ color: "#0EA5A6" }}>le top 3 des déménageurs</span> pour vous.
            </h1>

            {/* CTA desktop - Direct sous H1 */}
            <div className="space-y-3">
              <a
                href={quoteUrl}
                onClick={() => trackEvent("Lead_clic_home", { source: "hero-cta" })}
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-[16px] font-semibold text-white transition-all duration-200 hover:shadow-[0_16px_48px_rgba(14,165,166,0.4)] hover:-translate-y-1 active:scale-[0.98] group"
                style={{ 
                  background: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)",
                  boxShadow: "0 4px 16px rgba(14,165,166,0.25)"
                }}
              >
                Voir mes 3 meilleurs devis
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <p className="text-[13px]" style={{ color: "#9CA3AF" }}>
                Gratuit · 3 min · Sans engagement
              </p>
            </div>
          </motion.div>

          {/* COLONNE DROITE : MOCK TÉLÉPHONE - MISE EN SCÈNE RAMP 🎬 */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[300px]">
              {/* Gradient doux derrière (très subtil) */}
              <div
                className="absolute inset-0 rounded-[44px] blur-3xl opacity-20"
                style={{ 
                  background: "radial-gradient(ellipse, rgba(14,165,166,0.3) 0%, transparent 70%)"
                }}
              />

              {/* Device frame minimal - Style Linear */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ 
                  transform: "rotate(-2deg)",
                }}
              >
                {/* Phone container */}
                <div
                  className="relative rounded-[40px] border-[2px] overflow-hidden bg-white"
                  style={{
                    borderColor: "#1F2937",
                    aspectRatio: "9/19",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Notch discret */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 rounded-b-2xl z-20"
                    style={{ background: "#1F2937" }}
                  />

                  {/* Screen content */}
                  <div className="relative h-full w-full p-3 pt-9 pb-4 overflow-y-auto" style={{ background: "#F9FAFB" }}>
                    
                    {/* STEPPER MINIATURE dans le phone */}
                    <div className="mb-4 px-2">
                      <div className="space-y-2">
                        {STEPS.map(({ num, text }, i) => (
                          <div key={num} className="flex items-center gap-2">
                            <div 
                              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                              style={{
                                background: i === 2 ? "#0EA5A6" : "#FFFFFF",
                                color: i === 2 ? "#fff" : "#6B7280",
                                border: "2px solid",
                                borderColor: i === 2 ? "#0EA5A6" : "#E5E7EB"
                              }}
                            >
                              {num}
                            </div>
                            <p className="text-[10px] leading-tight" style={{ color: i === 2 ? "#111827" : "#6B7280" }}>
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="h-px bg-slate-200 mt-3 mb-3" />
                    </div>

                    {/* Stack de 3 cards avec effet de profondeur */}
                    <div className="relative">
                      {/* Card C - Très en arrière (la plus floutée) */}
                      <div 
                        className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl border bg-white opacity-50 blur-[1.5px] pointer-events-none"
                        style={{
                          borderColor: "#CBD5E1",
                          height: "96%",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                        }}
                      >
                        <div className="p-3 space-y-2">
                          <div className="h-6 bg-slate-200 rounded" />
                          <div className="h-4 bg-slate-100 rounded w-3/4" />
                          <div className="h-3 bg-slate-100 rounded w-1/2" />
                        </div>
                      </div>
                      
                      {/* Card A - Moyennement en arrière */}
                      <div 
                        className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl border bg-white opacity-70 blur-[0.8px] pointer-events-none"
                        style={{
                          borderColor: "#94A3B8",
                          height: "98%",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
                        }}
                      >
                        <div className="p-3 space-y-2">
                          <div className="h-6 bg-slate-200 rounded" />
                          <div className="h-4 bg-slate-100 rounded w-2/3" />
                        </div>
                      </div>
                      
                      {/* Card B - Principale (Meilleure offre) - NETTE */}
                      <div
                        className="relative rounded-xl border-2 p-4 shadow-sm space-y-2.5 bg-white"
                        style={{
                          borderColor: "#E5E7EB",
                        }}
                      >
                      {/* Badge "Meilleure offre" */}
                      <div className="flex items-center justify-center py-1.5 rounded-lg" style={{ background: "#0EA5A6" }}>
                        <span className="text-xs font-semibold text-white">
                          Meilleure offre
                        </span>
                      </div>

                      {/* Nom déménageur */}
                      <h3 className="text-base font-bold text-slate-900">
                        Déménageur B
                      </h3>

                      {/* Trust badges */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: "#0EA5A6" }} />
                        <span>Vérifié · Avis positifs</span>
                      </div>

                      {/* Prix */}
                      <div className="py-1">
                        <p className="text-3xl font-bold text-slate-900">1150 €</p>
                        <p className="text-xs text-slate-500 mt-0.5">TTC · 18/05/2026</p>
                      </div>

                      {/* Score */}
                      <div className="flex items-center gap-3 py-1">
                        <div className="relative h-14 w-14">
                          <svg className="h-14 w-14 -rotate-90">
                            <circle cx="28" cy="28" r="24" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                            <circle 
                              cx="28" cy="28" r="24" fill="none" 
                              stroke="#10B981" 
                              strokeWidth="3"
                              strokeDasharray={`${24 * 2 * Math.PI * 0.84} ${24 * 2 * Math.PI}`}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold text-slate-900">84</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "#10B981" }}>Excellent</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <div className="relative">
                              <Image src="/logo.png" alt="Moverz" width={16} height={16} className="h-4 w-4" />
                              <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full flex items-center justify-center" style={{ background: "#10B981" }}>
                                <svg className="h-1.5 w-1.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                              </div>
                            </div>
                            <span className="text-xs font-semibold text-slate-900">Moverz</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        className="w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all"
                        style={{ background: "#0EA5A6" }}
                      >
                        Je choisis cette offre →
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              
              {/* Badge flottant minimaliste */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 rounded-xl px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur-sm border"
                style={{ 
                  background: "rgba(255,255,255,0.95)", 
                  borderColor: "rgba(14,165,166,0.15)",
                  color: "#111827" 
                }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#1F2937" }} />
                  <span><strong style={{ color: "#0EA5A6" }}>3</strong> offres retenues</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
