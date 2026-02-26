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
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { ArrowRight, CheckCircle2, MessageSquare, Users, Mail, ShieldCheck, Star, PhoneOff, BadgeCheck, Globe } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import Image from "next/image";
import { useState, useEffect } from "react";

const AUTOPLAY_DURATION = 3000; // 3 secondes par card

// 3 déménageurs avec scores variés (bon, moyen, mauvais)
const MOVERS = [
  {
    id: 1,
    name: "Déménageur A",
    price: 1340,
    score: 92,
    scoreLabel: "Excellent",
    scoreColor: "#0EA5A6",
    recommended: true, // ✅ MEILLEUR SCORE (92) + MOINS CHER (1340€)
    solidite: 90,
    experience: 95,
    vigilance: 90,
    googleRating: 4.8,
    reviewCount: 234,
    yearsInBusiness: 12,
    hasWebsite: true,
  },
  {
    id: 2,
    name: "Déménageur B",
    price: 1540,
    score: 88,
    scoreLabel: "Excellent",
    scoreColor: "#0EA5A6",
    recommended: false,
    solidite: 85,
    experience: 90,
    vigilance: 88,
    googleRating: 4.7,
    reviewCount: 189,
    yearsInBusiness: 9,
    hasWebsite: true,
  },
  {
    id: 3,
    name: "Déménageur C",
    price: 1210,
    score: 58,
    scoreLabel: "Moyen",
    scoreColor: "#DC2626",
    recommended: false,
    solidite: 78,
    experience: 72,
    vigilance: 35,
    googleRating: 4.2,
    reviewCount: 45,
    yearsInBusiness: 5,
    hasWebsite: true,
  },
];

function getBarColor(value: number): string {
  if (value >= 80) return "#0EA5A6"; // turquoise Moverz
  if (value >= 70) return "#FB923C"; // orange
  return "#DC2626"; // rouge
}

function MoverCardDetailed({ mover, index }: { mover: typeof MOVERS[0]; index: number }) {
  return (
    <div
      className="w-full rounded-xl p-3 relative"
      style={{
        background: "rgba(255,255,255,0.98)",
        border: mover.recommended ? "2.5px solid #0EA5A6" : "1px solid rgba(0,0,0,0.08)",
        boxShadow: mover.recommended 
          ? "0 6px 20px rgba(14,165,166,0.35)" 
          : "0 2px 8px rgba(0,0,0,0.08)"
      }}
    >
      {/* Badge Recommandé - PREMIUM */}
      {mover.recommended && (
        <div
          className="flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-full mb-3 -mt-1 relative overflow-hidden"
          style={{ 
            background: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)",
            boxShadow: "0 4px 14px rgba(14,165,166,0.45), 0 0 0 1px rgba(14,165,166,0.3)"
          }}
        >
          {/* Checkmark */}
          <svg 
            className="h-4 w-4 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-[12px] font-bold text-white tracking-wide">MEILLEURE OFFRE</span>
          {/* Subtle shimmer effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)"
            }}
          />
        </div>
      )}

      {/* Header card: Name + Price */}
      <div className="flex items-start justify-between mb-2.5">
        <div className="flex-1">
          <h3 className="text-sm font-bold text-slate-900 mb-0.5">{mover.name}</h3>
          {/* Google rating + review count */}
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-2.5 w-2.5 ${
                    i < Math.floor(mover.googleRating) ? "fill-amber-400 text-amber-400" : "fill-slate-300 text-slate-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] font-medium text-slate-600">
              {mover.googleRating} ({mover.reviewCount})
            </span>
          </div>
        </div>
        {/* Prix à droite */}
        <div className="text-right">
          <div className="text-2xl font-bold text-slate-900">{mover.price}€</div>
          <div className="text-[9px] text-slate-500">TTC</div>
        </div>
      </div>

      {/* Score Moverz - Gros score en badge turquoise */}
      <div className="mb-3">
        <div 
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{ 
            background: mover.scoreColor === "#DC2626" ? "rgba(220, 38, 38, 0.1)" : "rgba(14,165,166,0.1)",
            border: `1px solid ${mover.scoreColor}40`
          }}
        >
          <span className="text-xs font-bold" style={{ color: mover.scoreColor }}>
            {mover.score}/100
          </span>
          <span className="text-[10px] font-medium text-slate-600">{mover.scoreLabel}</span>
        </div>
      </div>

      {/* Critères Moverz avec barres horizontales */}
      <div className="space-y-2 mb-3">
        {[
          { label: "Solidité financière", value: mover.solidite },
          { label: "Expérience", value: mover.experience },
          { label: "Vigilance", value: mover.vigilance },
        ].map((crit, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[10px] font-medium text-slate-700">{crit.label}</span>
              <span className="text-[10px] font-bold text-slate-900">{crit.value}/100</span>
            </div>
            <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: "#E5E7EB" }}>
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{ 
                  width: `${crit.value}%`,
                  background: getBarColor(crit.value)
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tags entreprise (années, website) */}
      <div className="flex flex-wrap gap-1.5">
        <div 
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-medium"
          style={{ background: "rgba(14,165,166,0.08)", color: "#0EA5A6" }}
        >
          <span>{mover.yearsInBusiness} ans d'expérience</span>
        </div>
        {mover.hasWebsite && (
          <div 
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-medium"
            style={{ background: "rgba(14,165,166,0.08)", color: "#0EA5A6" }}
          >
            <Globe className="h-2.5 w-2.5" />
            <span>Site web</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function HeroV4TwoColumn() {
  const quoteUrl = buildTunnelUrl({ from: "homepage-hero" });
  
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % MOVERS.length);
    }, AUTOPLAY_DURATION);
    return () => clearInterval(timer);
  }, []);

  // Swipe handlers
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    } else if (info.offset.x < -swipeThreshold && currentIndex < MOVERS.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden"
      style={{ 
        background: "linear-gradient(to bottom, rgba(14,165,166,0.35) 0%, rgba(14,165,166,0.18) 40%, rgba(14,165,166,0.08) 70%, #FFFFFF 100%)"
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
          {/* Badges au-dessus du H1 */}
          <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-xl transition-all duration-300" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(14,165,166,0.15)", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
              <PhoneOff className="w-4 h-4" style={{ color: "#0EA5A6" }} />
              <span className="text-xs font-semibold text-slate-800">Zéro harcèlement</span>
            </div>
            
            <div className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-xl transition-all duration-300" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(14,165,166,0.15)", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
              <BadgeCheck className="w-4 h-4" style={{ color: "#0EA5A6" }} />
              <span className="text-xs font-semibold text-slate-800">Entreprises vérifiées</span>
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={staggerItem}
            className="font-heading text-[clamp(40px,8vw,72px)] leading-[1.05] font-bold tracking-[-0.02em]"
            style={{ color: "var(--color-text)" }}
          >
            Vous déménagez.
            <br />
            <span style={{ color: "var(--color-accent)" }}>On compare.</span>
          </motion.h1>

          {/* Subtitle principal */}
          <motion.p 
            variants={staggerItem}
            className="mt-6 text-base font-medium"
            style={{ color: "var(--color-text-secondary)" }}
          >
            3+ devis fiables sous 5 jours · 100% gratuit
          </motion.p>

          {/* CTA mobile */}
          <motion.div variants={staggerItem} className="mt-8">
            <a
              href={quoteUrl}
              onClick={() => trackEvent("Lead_clic_home", { source: "hero-cta" })}
              className="inline-flex items-center justify-center gap-2 w-full max-w-md rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] hover:animate-pulse-subtle"
              style={{ 
                background: "#F59E0B",
                boxShadow: "0 4px 12px rgba(245,158,11,0.2)"
              }}
            >
              Obtenir mes devis
            </a>
            <p className="text-xs text-slate-500 mt-3 font-medium">1000+ déménageurs contrôlés</p>
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
            {/* Badges au-dessus du H1 */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-xl transition-all duration-300" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(14,165,166,0.15)", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
                <PhoneOff className="w-4 h-4" style={{ color: "#0EA5A6" }} />
                <span className="text-xs font-semibold text-slate-800">zéro harcèlement</span>
              </div>
              
              <div className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-xl transition-all duration-300" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(14,165,166,0.15)", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
                <BadgeCheck className="w-4 h-4" style={{ color: "#0EA5A6" }} />
                <span className="text-xs font-semibold text-slate-800">Entreprises vérifiées</span>
              </div>
            </div>

            {/* H1 */}
            <h1
              className="font-heading text-[72px] leading-[0.95] font-semibold tracking-[-0.03em] mb-6"
              style={{ color: "#111827" }}
            >
              Vous déménagez.
              <br />
              <span style={{ color: "#0EA5A6" }}>On compare.</span>
            </h1>

            {/* Subtitle principal */}
            <p className="text-lg font-medium mb-8" style={{ color: "#475569" }}>
              3+ devis fiables sous 5 jours · 100% gratuit
            </p>

            {/* CTA desktop */}
            <div className="space-y-6">
              <a
                href={quoteUrl}
                onClick={() => trackEvent("Lead_clic_home", { source: "hero-cta" })}
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-[16px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] hover:animate-pulse-subtle"
                style={{ 
                  background: "#F59E0B",
                  boxShadow: "0 4px 12px rgba(245,158,11,0.2)"
                }}
              >
                Obtenir mes devis
              </a>

              {/* Note Google - Plus discrète */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.google.com/maps/place/Moverz/@46.881154,3.0417412,6z/data=!3m1!4b1!4m6!3m5!1s0x65777ea3ad50b1c1:0xdcc12b2e04254f4!8m2!3d46.881154!4d3.0417412!16s%2Fg%2F11ylmz4jk6?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
                >
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-900">4,5+</span>
                  <span className="text-xs text-slate-500">sur Google</span>
                </a>
                <p className="text-xs text-slate-500">1000+ déménageurs contrôlés</p>
              </div>
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
                  className="relative rounded-[38px] border-[5px] overflow-hidden bg-white"
                  style={{
                    borderColor: "#1F2937",
                    width: "280px",
                    height: "600px",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Dynamic Island (iPhone 14 Pro style) */}
                  <div
                    className="absolute top-2 left-1/2 -translate-x-1/2 h-[28px] w-[115px] rounded-full z-30"
                    style={{ background: "#000000" }}
                  >
                    {/* Speaker grill inside island */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[45px] h-[4px] rounded-full"
                      style={{ background: "#1a1a1a" }}
                    />
                  </div>

                  {/* Screen content with carousel - Fond clair */}
                  <div className="relative h-full w-full overflow-hidden" style={{ background: "linear-gradient(180deg, #F9FAFB 0%, #F3F4F6 100%)" }}>
                    {/* Header du téléphone avec infos dossier */}
                    <div className="absolute top-10 left-0 right-0 px-4 py-3 z-40" style={{ background: "linear-gradient(180deg, #F9FAFB 100%, transparent 100%)" }}>
                      <div className="flex items-center justify-between mb-2">
                        <Image 
                          src="/logo-ui.png" 
                          alt="Moverz" 
                          width={70} 
                          height={24}
                          className="h-5 w-auto"
                        />
                        <div 
                          className="px-2.5 py-0.5 rounded-full text-[9px] font-bold"
                          style={{ background: "rgba(14,165,166,0.1)", color: "#0EA5A6" }}
                        >
                          5 devis comparés
                        </div>
                      </div>
                      <p className="text-slate-900 text-[11px] font-medium mb-0.5">Votre déménagement</p>
                      <p className="text-slate-500 text-[9px]">
                        Paris → Lyon • 60m² • 3e étage
                      </p>
                    </div>

                    {/* Carousel container (inside phone) - Simplified: one card only */}
                    <div className="relative h-full pt-32 pb-3 px-2 overflow-hidden">
                      {/* Card principale (nette) - Pas de cartes floues en arrière-plan */}
                      <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                          key={currentIndex}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                          }}
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.2}
                          onDragEnd={handleDragEnd}
                          className="touch-pan-y h-full overflow-y-auto relative z-10"
                        >
                          <MoverCardDetailed mover={MOVERS[currentIndex]} index={currentIndex} />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Badge subtil en bas de l'écran */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      className="absolute bottom-8 left-2 right-2 z-20"
                    >
                      <div 
                        className="rounded-full px-3 py-1.5 text-[10px] font-medium backdrop-blur-xl"
                        style={{ 
                          background: "rgba(255,255,255,0.9)",
                          border: "1px solid rgba(14,165,166,0.1)",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                        }}>
                        <div className="flex items-center justify-center gap-1.5">
                          <div className="h-1 w-1 rounded-full" 
                            style={{ background: "#0EA5A6" }} />
                          <span className="text-slate-700">
                            <strong style={{ color: "#0EA5A6" }}>3</strong>/5 offres
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Navigation dots - EN BAS DE L'ÉCRAN du téléphone */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      className="absolute bottom-4 left-0 right-0 z-30 flex items-center justify-center gap-1.5"
                    >
                      {MOVERS.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setDirection(i > currentIndex ? 1 : -1);
                            setCurrentIndex(i);
                          }}
                          className="h-1 rounded-full transition-all duration-300"
                          style={{
                            width: i === currentIndex ? "16px" : "4px",
                            background: i === currentIndex ? "#0EA5A6" : "#CBD5E1",
                          }}
                          aria-label={`Voir offre ${i + 1}`}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
