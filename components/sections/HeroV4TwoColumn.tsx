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
  { num: "1", text: "On sollicite les pros disponibles" },
  { num: "2", text: "On contrôle prix et fiabilité" },
  { num: "3", text: "Vous choisissez sereinement", bold: true },
] as const;

export function HeroV4TwoColumn() {
  const quoteUrl = buildTunnelUrl({ from: "homepage-hero" });

  return (
    <section
      className="relative pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden"
      style={{ 
        background: "linear-gradient(to bottom, #F0FDFA 0%, #E0F2FE 50%, #F9FAFB 100%)"
      }}
    >
      {/* Grain texture - Premium feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* Vignette sur les bords */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.03) 100%)",
        }}
      />

      {/* Halo teal + orange dramatique */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[600px] w-[800px] rounded-full blur-[160px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(14,165,166,0.3), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[700px] rounded-full blur-[140px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.25), transparent 70%)",
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
            Vous déménagez ?
            <br />
            <span style={{ color: "var(--color-accent)" }}>
              On sélectionne le top 3 pour vous.
            </span>
          </motion.h1>

          {/* Steps compacts - Minimaliste avec animation */}
          <motion.div variants={staggerItem} className="mt-7 mx-auto max-w-md space-y-2">
            {STEPS.map(({ num, text, bold }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex items-start gap-2.5 text-left"
              >
                <motion.span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold mt-0.5"
                  style={{
                    background: bold ? "var(--color-accent)" : "var(--color-border-light)",
                    color: bold ? "#fff" : "var(--color-text-secondary)",
                  }}
                  animate={bold ? {
                    scale: [1, 1.05, 1],
                  } : {}}
                  transition={bold ? {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  } : {}}
                >
                  {num}
                </motion.span>
                <p
                  className={`text-sm leading-snug ${bold ? "font-semibold" : ""}`}
                  style={{
                    color: bold ? "var(--color-text)" : "var(--color-text-secondary)",
                  }}
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA mobile - Direct après stepper pour max conversion */}
          <motion.div variants={staggerItem} className="mt-6">
            <a
              href={quoteUrl}
              onClick={() => trackEvent("Lead_clic_home", { source: "hero-cta" })}
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(14,165,166,0.3)] active:scale-[0.98]"
              style={{ 
                background: "var(--color-accent)",
                boxShadow: "0 4px 16px rgba(14,165,166,0.24)"
              }}
            >
              Recevoir ma sélection
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
          {/* COLONNE GAUCHE : Texte + CTA (col-span-6) */}
          <motion.div variants={staggerItem} className="lg:col-span-6 max-w-[580px]">
            {/* H1 - Specs Ramp exactes */}
            <h1
              className="font-heading text-[68px] leading-[0.95] font-semibold tracking-[-0.03em] mb-8"
              style={{ color: "#111827" }}
            >
              Vous déménagez ?
              <br />
              <span style={{ color: "#0EA5A6" }}>
                On sélectionne le top 3 pour vous.
              </span>
            </h1>

            {/* Steps ultra-compacts - Minimaliste Ramp avec animation */}
            <div className="space-y-1.5 mb-8">
              {STEPS.map(({ num, text, bold }, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="flex items-start gap-2.5 text-left"
                >
                  <motion.span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold mt-0.5"
                    style={{
                      background: bold ? "#0EA5A6" : "#E5E7EB",
                      color: bold ? "#fff" : "#6B7280",
                    }}
                    animate={bold ? {
                      scale: [1, 1.05, 1],
                    } : {}}
                    transition={bold ? {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    } : {}}
                  >
                    {num}
                  </motion.span>
                  <p
                    className={`text-[17px] leading-[1.45] ${bold ? "font-semibold" : ""}`}
                    style={{
                      color: bold ? "#111827" : "#6B7280",
                    }}
                  >
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA desktop - Pure conversion */}
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
                Recevoir ma sélection
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
            <div className="relative w-full max-w-[560px]" style={{ perspective: "1200px" }}>
              {/* Halo dramatique 2x plus fort */}
              <div
                className="absolute inset-0 rounded-[60px] blur-[120px] opacity-40"
                style={{ 
                  background: "radial-gradient(ellipse, rgba(14,165,166,0.4) 0%, rgba(245,158,11,0.2) 50%, transparent 70%)"
                }}
              />

              {/* Ombre de contact au sol (elliptique) */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-8 rounded-full blur-2xl opacity-30"
                style={{ background: "#000" }}
              />
              
              {/* Stack effect - 2 cartes floutées derrière = "3 meilleurs" visuel */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[48px] opacity-20 blur-sm" style={{ background: "#CBD5E1", transform: "rotateY(-2deg) rotateX(1deg) translateZ(-40px)" }} />
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[48px] opacity-30 blur-[2px]" style={{ background: "#94A3B8", transform: "rotateY(-1deg) rotateX(0.5deg) translateZ(-20px)" }} />

              {/* Phone mockup principal avec perspective */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ 
                  transform: "rotateY(-3deg) rotateX(2deg)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Device frame - Style iPhone moderne - Ultra-compact */}
                <div
                  className="relative rounded-[48px] border-[8px] overflow-hidden"
                  style={{
                    borderColor: "#1F2937",
                    background: "#F9FAFB",
                    aspectRatio: "9/16.5",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.2), 0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 rounded-b-3xl z-20"
                    style={{ background: "#1F2937" }}
                  />

                  {/* Screen content - Mockup ULTRA-RÉALISTE de la vraie landing client */}
                  <div className="relative h-full w-full p-3 pt-11 pb-4 overflow-y-auto" style={{ background: "#F9FAFB" }}>
                    {/* Stack de 3 cards pour montrer "3 offres" */}
                    <div className="relative">
                      {/* Card 3 - Très en arrière (la plus floutée) */}
                      <div 
                        className="absolute inset-0 translate-y-2.5 translate-x-1.5 rounded-2xl border opacity-25 blur-[1.5px] pointer-events-none"
                        style={{
                          borderColor: "#CBD5E1",
                          background: "white",
                          height: "96%",
                        }}
                      />
                      
                      {/* Card 2 - Moyennement en arrière */}
                      <div 
                        className="absolute inset-0 translate-y-1.5 translate-x-1 rounded-2xl border opacity-40 blur-[0.8px] pointer-events-none"
                        style={{
                          borderColor: "#94A3B8",
                          background: "white",
                          height: "98%",
                        }}
                      />
                      
                      {/* Card 1 - Principale (top 1) */}
                      <div
                        className="relative rounded-2xl border p-4 shadow-md space-y-2.5"
                        style={{
                          borderColor: "#0EA5A6",
                          borderWidth: "2px",
                          background: "white",
                        }}
                      >
                      {/* Badge "Meilleure offre" - Teal comme sur le vrai */}
                      <div className="flex items-center justify-center py-1.5 rounded-lg" style={{ background: "#0EA5A6" }}>
                        <span className="text-xs font-semibold text-white">
                          ✦ Meilleure offre
                        </span>
                      </div>

                      {/* Nom déménageur */}
                      <h3 className="text-lg font-bold text-slate-900">
                        Déménageur B
                      </h3>

                      {/* Trust badges ligne */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: "#0EA5A6" }} />
                        <span>Prix cohérent · Fiabilité vérifiée · Avis positifs</span>
                      </div>

                      {/* Prix */}
                      <div className="py-1.5">
                        <p className="text-4xl font-bold text-slate-900">1150 €</p>
                        <p className="text-xs text-slate-500 mt-1">Prix proposé TTC · 18/05/2026</p>
                      </div>

                      {/* Score circulaire + label */}
                      <div className="flex items-center gap-4 py-1.5">
                        <div className="relative h-16 w-16">
                          <svg className="h-16 w-16 -rotate-90">
                            <circle cx="32" cy="32" r="28" fill="none" stroke="#E5E7EB" strokeWidth="4" />
                            <circle 
                              cx="32" cy="32" r="28" fill="none" 
                              stroke="#0EA5A6" 
                              strokeWidth="4"
                              strokeDasharray={`${28 * 2 * Math.PI * 0.84} ${28 * 2 * Math.PI}`}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl font-bold text-slate-900">84</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "#0EA5A6" }}>Excellent</p>
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm text-slate-600">Score</p>
                            <Image src="/logo.png" alt="Moverz" width={16} height={16} className="h-4 w-4" />
                            <p className="text-sm font-bold" style={{ color: "#0EA5A6" }}>Moverz</p>
                          </div>
                        </div>
                      </div>

                      {/* 5 barres de score détaillées */}
                      <div className="space-y-1.5 py-1.5">
                        {[
                          { label: "Financier", value: 50, color: "#DC2626" },
                          { label: "Juridique", value: 100, color: "#0EA5A6" },
                          { label: "Google", value: 100, color: "#0EA5A6" },
                          { label: "Réputation", value: 95, color: "#0EA5A6" },
                          { label: "Vigilance", value: 100, color: "#0EA5A6" },
                        ].map(({ label, value, color }) => (
                          <div key={label} className="flex items-center justify-between text-xs">
                            <span className="text-slate-600 w-20">{label}</span>
                            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden mx-2">
                              <div 
                                className="h-full rounded-full" 
                                style={{ width: `${value}%`, background: color }}
                              />
                            </div>
                            <span className="font-semibold text-slate-900 w-8 text-right">{value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Avis Google */}
                      <div className="flex items-center gap-2 py-1">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className="h-3.5 w-3.5 fill-amber-400" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-bold text-slate-900">5.0</span>
                      </div>
                      <p className="text-xs text-slate-500">65 avis vérifiés</p>

                      {/* Ancienneté */}
                      <div className="text-xs text-slate-600 space-y-0.5">
                        <p className="font-semibold">5 ans</p>
                        <p>Site internet</p>
                      </div>

                      {/* Boutons CTA */}
                      <div className="space-y-2 pt-1">
                        <button
                          className="w-full rounded-lg px-4 py-2.5 text-xs font-semibold border-2 transition-all"
                          style={{ borderColor: "#0EA5A6", color: "#0EA5A6", background: "white" }}
                        >
                          Voir le détail →
                        </button>
                        <button
                          className="w-full rounded-lg px-4 py-3 text-xs font-semibold text-white transition-all"
                          style={{ background: "#0EA5A6" }}
                        >
                          Je choisis cette offre →
                        </button>
                      </div>

                      {/* Texte engagement */}
                       <p className="text-xs text-slate-500 text-center pt-1">
                         Mise en relation simple, sans engagement
                       </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Badge flottant avec orange accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-8 -left-8 rounded-2xl px-6 py-3.5 text-base font-semibold shadow-2xl backdrop-blur-md border"
                style={{ 
                  background: "rgba(255,255,255,0.95)", 
                  borderColor: "rgba(245,158,11,0.2)",
                  color: "#111827" 
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-2.5 w-2.5 rounded-full animate-pulse" style={{ background: "#F59E0B" }} />
                  <span><strong style={{ color: "#F59E0B" }}>3</strong> offres retenues sur 7</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
