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
              {/* Premium glow effect turquoise */}
              <div
                className="absolute inset-0 blur-3xl opacity-40 animate-pulse"
                style={{ 
                  background: "radial-gradient(circle, rgba(14,165,166,0.6) 0%, rgba(14,165,166,0.3) 40%, transparent 70%)",
                  animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                }}
              />

              {/* Device frame minimal - Style Linear avec animation premium */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
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

                  {/* Screen content - FULL SCREEN STEPPER ANIMÉ */}
                  <div className="relative h-full w-full overflow-hidden" style={{ background: "linear-gradient(180deg, #F0FDFA 0%, #F9FAFB 100%)" }}>
                    {/* Subtle pattern background */}
                    <div 
                      className="absolute inset-0 opacity-[0.02]"
                      style={{ 
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230EA5A6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundSize: "30px 30px"
                      }}
                    />

                    {/* Container centré verticalement */}
                    <div className="relative h-full flex flex-col justify-center px-6 py-12">
                      {/* Logo Moverz en haut */}
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8 flex justify-center"
                      >
                        <Image src="/logo.png" alt="Moverz" width={32} height={32} className="h-8 w-8" />
                      </motion.div>

                      {/* Steps animés - GRANDE TAILLE */}
                      <div className="space-y-8">
                        {STEPS.map(({ num, text }, i) => (
                          <motion.div
                            key={num}
                            initial={{ opacity: 0, x: -20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: 0.2 + i * 0.3,
                              ease: [0.16, 1, 0.3, 1]
                            }}
                            className="relative"
                          >
                            {/* Ligne connectrice animée */}
                            {i < STEPS.length - 1 && (
                              <motion.div 
                                className="absolute left-[19px] top-12 w-[2px] h-8"
                                style={{ 
                                  background: i === 1 
                                    ? "linear-gradient(to bottom, #CBD5E1 0%, #0EA5A6 100%)" 
                                    : "rgba(226,232,240,0.5)"
                                }}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "32px", opacity: 1 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: 0.6 + i * 0.3,
                                  ease: [0.16, 1, 0.3, 1]
                                }}
                              />
                            )}

                            <div className="flex items-start gap-4">
                              {/* Gros cercle avec numéro */}
                              <motion.div
                                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-bold"
                                style={{
                                  background: i === 2 
                                    ? "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)" 
                                    : "#FFFFFF",
                                  color: i === 2 ? "#FFFFFF" : "#94A3B8",
                                  border: i === 2 ? "none" : "2px solid #E2E8F0",
                                  boxShadow: i === 2 
                                    ? "0 4px 16px rgba(14,165,166,0.3)" 
                                    : "0 2px 4px rgba(0,0,0,0.04)"
                                }}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ 
                                  duration: 0.5, 
                                  delay: 0.3 + i * 0.3,
                                  type: "spring",
                                  stiffness: 200,
                                  damping: 15
                                }}
                              >
                                {num}
                                
                                {/* Pulse ring pour l'étape active */}
                                {i === 2 && (
                                  <motion.div
                                    className="absolute inset-0 rounded-full"
                                    style={{ border: "2px solid #0EA5A6" }}
                                    initial={{ scale: 1, opacity: 0.6 }}
                                    animate={{ scale: 1.5, opacity: 0 }}
                                    transition={{ 
                                      duration: 1.5, 
                                      repeat: Infinity,
                                      ease: "easeOut"
                                    }}
                                  />
                                )}
                              </motion.div>

                              {/* Texte */}
                              <div className="flex-1 pt-1">
                                <motion.p
                                  className="text-[13px] leading-[1.5] font-medium"
                                  style={{ 
                                    color: i === 2 ? "#111827" : "#64748B",
                                    fontWeight: i === 2 ? 600 : 500
                                  }}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: 0.5 + i * 0.3
                                  }}
                                >
                                  {text}
                                </motion.p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Message de fin avec icône */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1.8,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="mt-8 text-center"
                      >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(14,165,166,0.1)" }}>
                          <CheckCircle2 className="h-4 w-4" style={{ color: "#0EA5A6" }} />
                          <span className="text-xs font-semibold" style={{ color: "#0EA5A6" }}>
                            Prêt à comparer
                          </span>
                        </div>
                      </motion.div>
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
