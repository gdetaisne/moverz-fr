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
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import Image from "next/image";
import { useState, useEffect } from "react";

const STEPS = [
  { num: "1", text: "On sollicite les déménageurs disponibles", bold: false },
  { num: "2", text: "On contrôle prix et fiabilité", bold: false },
  { num: "3", text: "Vous choisissez sereinement", bold: true },
] as const;

// Morphing UI Animation Component - ULTRA 2026
function MorphingUIAnimation() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const stages = [0, 1, 2, 3, 4];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % stages.length;
      setStage(stages[currentIndex]);
    }, 2500); // Change stage every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative h-full w-full overflow-hidden flex items-center justify-center"
      style={{ 
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)"
      }}
    >
      {/* Gradient mesh background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(14,165,166,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(245,158,11,0.15) 0%, transparent 50%)",
        }}
      />

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(14,165,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,166,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />

      {/* Main morphing container */}
      <div className="relative z-10 w-full max-w-[200px]">
        <AnimatePresence mode="wait">
          {/* Stage 0: Circle */}
          {stage === 0 && (
            <motion.div
              key="circle"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <motion.div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)",
                  boxShadow: "0 0 40px rgba(14,165,166,0.4)"
                }}
                animate={{ 
                  boxShadow: ["0 0 40px rgba(14,165,166,0.4)", "0 0 60px rgba(14,165,166,0.6)", "0 0 40px rgba(14,165,166,0.4)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-3xl font-bold text-white">3</span>
              </motion.div>
              <p className="text-xs text-white/60 mt-3 text-center">Formulaire en 3 min</p>
            </motion.div>
          )}

          {/* Stage 1: Form inputs */}
          {stage === 1 && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-3 p-4"
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="h-8 rounded-lg backdrop-blur-sm"
                  style={{ 
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(14,165,166,0.3)"
                  }}
                />
              ))}
              <p className="text-xs text-white/60 text-center mt-4">Détails du déménagement</p>
            </motion.div>
          )}

          {/* Stage 2: Grid of cards (devis) */}
          {stage === 2 && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-2 p-4"
            >
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="aspect-square rounded-lg backdrop-blur-sm"
                  style={{ 
                    background: i < 3 ? "rgba(14,165,166,0.3)" : "rgba(255,255,255,0.1)",
                    border: i < 3 ? "1px solid rgba(14,165,166,0.5)" : "1px solid rgba(255,255,255,0.2)"
                  }}
                />
              ))}
              <p className="col-span-3 text-xs text-white/60 text-center mt-2">12 devis → 3 retenus</p>
            </motion.div>
          )}

          {/* Stage 3: Score circle */}
          {stage === 3 && (
            <motion.div
              key="score"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center p-4"
            >
              <div className="relative w-28 h-28">
                <svg className="w-28 h-28 -rotate-90">
                  <circle 
                    cx="56" 
                    cy="56" 
                    r="50" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="4" 
                  />
                  <motion.circle 
                    cx="56" 
                    cy="56" 
                    r="50" 
                    fill="none" 
                    stroke="#0EA5A6" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 314" }}
                    animate={{ strokeDasharray: "264 314" }} // 84% of 314
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span 
                    className="text-4xl font-bold text-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    84
                  </motion.span>
                  <span className="text-xs text-white/60">/100</span>
                </div>
              </div>
              <p className="text-xs text-white/60 mt-3 text-center">Score Moverz</p>
            </motion.div>
          )}

          {/* Stage 4: Big checkmark */}
          {stage === 4 && (
            <motion.div
              key="check"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="flex flex-col items-center p-4"
            >
              <motion.div
                className="w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)",
                  boxShadow: "0 0 60px rgba(14,165,166,0.6)"
                }}
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <CheckCircle2 className="w-16 h-16 text-white" strokeWidth={2.5} />
              </motion.div>
              <p className="text-xs text-white/60 mt-3 text-center font-semibold">Prêt à comparer</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom indicator dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full"
            style={{
              width: stage === i ? "16px" : "4px",
              background: stage === i ? "#0EA5A6" : "rgba(255,255,255,0.3)"
            }}
            animate={{ width: stage === i ? "16px" : "4px" }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}

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

                  {/* Screen content - MORPHING UI ANIMATION ULTRA 2026 */}
                  <MorphingUIAnimation />
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
