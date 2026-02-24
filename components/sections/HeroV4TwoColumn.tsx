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
import { ArrowRight, CheckCircle2, MessageSquare, Users, Mail, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import Image from "next/image";
import { useState, useEffect } from "react";

const STEPS = [
  { num: "1", text: "On sollicite les déménageurs disponibles", bold: false },
  { num: "2", text: "On contrôle prix et fiabilité", bold: false },
  { num: "3", text: "Vous choisissez sereinement", bold: true },
] as const;

// ULTRA APPLE MORPHING ANIMATION - Liquid Blobs + Logo Formation
function MorphingUIAnimation() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 5);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const stages = [
    { id: 0, label: "Envoi", count: "1", color: "#6366F1", gradient: "linear-gradient(135deg, #818CF8 0%, #6366F1 100%)" },
    { id: 1, label: "Contact", count: "12", color: "#0EA5A6", gradient: "linear-gradient(135deg, #14B8A6 0%, #0EA5A6 100%)" },
    { id: 2, label: "Réception", count: "7", color: "#F59E0B", gradient: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)" },
    { id: 3, label: "Sélection", count: "3", color: "#10B981", gradient: "linear-gradient(135deg, #34D399 0%, #10B981 100%)" },
    { id: 4, label: "Validation", count: "✓", color: "#0EA5A6", gradient: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)" },
  ];

  const currentStage = stages[stage];

  return (
    <div 
      className="relative h-full w-full overflow-hidden flex items-center justify-center"
      style={{ 
        background: "linear-gradient(180deg, #000000 0%, #0F172A 100%)"
      }}
    >
      {/* Animated Blobs Background - Apple Style */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{ filter: "blur(60px)" }}
      >
        <motion.div
          className="absolute w-48 h-48 rounded-full"
          style={{ background: currentStage.gradient }}
          animate={{
            x: ["-10%", "110%", "-10%"],
            y: ["0%", "80%", "0%"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full"
          style={{ background: currentStage.gradient }}
          animate={{
            x: ["100%", "-10%", "100%"],
            y: ["70%", "10%", "70%"],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col p-4">
        {/* Logo Moverz qui se forme progressivement */}
        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            animate={{
              filter: [
                "blur(0px) brightness(1)",
                "blur(2px) brightness(1.2)",
                "blur(0px) brightness(1)",
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image 
              src="/logo-ui.png" 
              alt="Moverz" 
              width={70} 
              height={24}
              className="h-5 w-auto brightness-0 invert"
              style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))" }}
            />
          </motion.div>
        </motion.div>

        {/* Center Morphing Area - Liquid Glass Effect */}
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotateX: 15 }}
              transition={{ 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              {/* Glassmorphism Card */}
              <motion.div
                className="relative rounded-3xl p-8 backdrop-blur-xl border"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: `0 20px 60px ${currentStage.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
                }}
                animate={{
                  boxShadow: [
                    `0 20px 60px ${currentStage.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
                    `0 30px 80px ${currentStage.color}60, inset 0 1px 0 rgba(255,255,255,0.3)`,
                    `0 20px 60px ${currentStage.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Animated Ring/Orbit */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl border-2"
                  style={{ borderColor: currentStage.color }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity },
                    opacity: { duration: 2, repeat: Infinity }
                  }}
                />

                {/* Central Number/Icon - Morphing */}
                <motion.div
                  className="relative z-10 text-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.2
                  }}
                >
                  <motion.div
                    className="text-7xl font-bold mb-2"
                    style={{
                      background: currentStage.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {currentStage.count}
                  </motion.div>
                  
                  <motion.p
                    className="text-sm font-semibold tracking-wide uppercase"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentStage.label}
                  </motion.p>
                </motion.div>

                {/* Particles/Dots Effect */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ background: currentStage.color }}
                    animate={{
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Progress - Liquid Bar */}
        <motion.div className="mt-6">
          <div className="flex justify-center gap-2 mb-3">
            {stages.map((s, i) => (
              <motion.div
                key={s.id}
                className="h-1 rounded-full"
                style={{
                  width: i === stage ? "32px" : "8px",
                  background: i === stage ? currentStage.gradient : "rgba(255,255,255,0.2)",
                }}
                animate={{
                  opacity: i <= stage ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
          <motion.p
            key={stage}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-[10px] font-medium"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Paris → Lyon • 15 mars 2026
          </motion.p>
        </motion.div>
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
