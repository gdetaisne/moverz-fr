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

// CAROUSEL DE SCREENSHOTS - RAMP STYLE (Smooth & Premium)
function MorphingUIAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const screenshots = [
    {
      id: 0,
      title: "Dossier complété",
      subtitle: "Informations envoyées",
      badge: "Étape 1",
      color: "#6366F1",
      accentColor: "#818CF8"
    },
    {
      id: 1,
      title: "12 déménageurs",
      subtitle: "Mise en concurrence",
      badge: "Étape 2",
      color: "#0EA5A6",
      accentColor: "#14B8A6"
    },
    {
      id: 2,
      title: "7 offres reçues",
      subtitle: "Analyse en cours",
      badge: "Étape 3",
      color: "#F59E0B",
      accentColor: "#FBBF24"
    },
    {
      id: 3,
      title: "3 offres validées",
      subtitle: "Top 3 par Moverz",
      badge: "Étape 4",
      color: "#10B981",
      accentColor: "#34D399"
    },
  ];

  return (
    <div 
      className="relative h-full w-full overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(180deg, #FAFBFC 0%, #F8FAFC 100%)" }}
    >
      {/* Header avec logo */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <Image 
            src="/logo-ui.png" 
            alt="Moverz" 
            width={60} 
            height={20}
            className="h-4 w-auto opacity-50"
          />
          <div className="text-[9px] font-medium text-slate-400">
            Paris → Lyon
          </div>
        </div>
      </div>

      {/* Carousel Container - Style Ramp */}
      <div className="flex-1 relative px-4 py-4">
        <div className="relative h-full">
          {/* Cards Stack Effect */}
          {screenshots.map((screen, index) => {
            const offset = index - activeIndex;
            const isActive = index === activeIndex;
            const isPrev = offset === -1 || offset === 3;
            const isNext = offset === 1 || offset === -3;

            return (
              <motion.div
                key={screen.id}
                className="absolute inset-0 rounded-2xl border shadow-lg overflow-hidden"
                style={{
                  background: "white",
                  borderColor: isActive ? screen.color + "30" : "#E2E8F0",
                }}
                animate={{
                  scale: isActive ? 1 : isPrev ? 0.92 : 0.88,
                  opacity: isActive ? 1 : isPrev ? 0.6 : 0,
                  x: isActive ? 0 : isPrev ? "-8%" : isNext ? "8%" : 0,
                  zIndex: isActive ? 10 : isPrev ? 5 : 0,
                  rotateY: isActive ? 0 : isPrev ? 4 : isNext ? -4 : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Card Content */}
                <div className="h-full flex flex-col p-5">
                  {/* Badge + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="px-2.5 py-1 rounded-full text-[9px] font-bold"
                      style={{
                        background: screen.color + "15",
                        color: screen.color,
                      }}
                      animate={{
                        scale: isActive ? [1, 1.05, 1] : 1,
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {screen.badge}
                    </motion.div>
                    
                    <motion.div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: screen.color + "10" }}
                      animate={{
                        rotate: isActive ? [0, 5, 0] : 0,
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <CheckCircle2 
                        className="w-4 h-4" 
                        style={{ color: screen.color }}
                        strokeWidth={2.5}
                      />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <h3 
                          className="text-2xl font-bold mb-1"
                          style={{ color: screen.color }}
                        >
                          {screen.title}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {screen.subtitle}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Visual bars - Ramp style */}
                  <div className="mt-auto space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-2 rounded-full overflow-hidden"
                        style={{ background: "#F1F5F9" }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: isActive ? 1 : 0.3,
                          x: 0 
                        }}
                        transition={{ delay: isActive ? 0.2 + i * 0.08 : 0 }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${screen.color} 0%, ${screen.accentColor} 100%)`,
                          }}
                          initial={{ width: "0%" }}
                          animate={{ 
                            width: isActive ? `${70 - i * 15}%` : "0%" 
                          }}
                          transition={{ 
                            duration: 1.2, 
                            delay: isActive ? 0.3 + i * 0.08 : 0,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Glow effect on active card */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: `0 0 40px ${screen.color}20, inset 0 1px 0 rgba(255,255,255,0.5)`
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Dots - Ramp style */}
      <div className="p-4 pt-2">
        <div className="flex items-center justify-center gap-2">
          {screenshots.map((screen, i) => (
            <motion.button
              key={screen.id}
              className="relative rounded-full transition-all"
              style={{
                width: i === activeIndex ? "28px" : "6px",
                height: "6px",
                background: i === activeIndex ? screen.color : "#CBD5E1",
              }}
              animate={{
                opacity: i === activeIndex ? 1 : 0.4,
              }}
              onClick={() => setActiveIndex(i)}
            >
              {i === activeIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: screen.color }}
                  layoutId="activeDot"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {/* Subtitle minimal */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-center text-[10px] text-slate-400 mt-2"
          >
            {screenshots[activeIndex].subtitle}
          </motion.p>
        </AnimatePresence>
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
