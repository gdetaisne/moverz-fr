"use client";

/**
 * ComparableQuotesMockScrolly - Carousel 3 Cards
 * Affiche 3 offres de déménageurs détaillées avec carousel swipable
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Star, Globe } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";
import Image from "next/image";

const AUTOPLAY_DURATION = 5000; // 5 secondes par card

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
        background: "rgba(255,255,255,0.95)",
        border: mover.recommended ? "2px solid #0EA5A6" : "1px solid rgba(255,255,255,0.3)",
        boxShadow: mover.recommended 
          ? "0 4px 16px rgba(14,165,166,0.3)" 
          : "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      {/* Badge Recommandé - PREMIUM */}
      {mover.recommended && (
        <div
          className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full mb-3 -mt-1 relative overflow-hidden"
          style={{ 
            background: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)",
            boxShadow: "0 4px 12px rgba(14,165,166,0.4), 0 0 0 1px rgba(14,165,166,0.2)"
          }}
        >
          {/* Checkmark */}
          <svg 
            className="h-3.5 w-3.5 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-[11px] font-bold text-white tracking-wide">MEILLEURE OFFRE</span>
          
          {/* Subtle shimmer effect */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)"
            }}
          />
        </div>
      )}

      {/* Nom + Prix */}
      <div className="mb-2">
        <h3 className="text-base font-bold text-slate-900 mb-0.5">{mover.name}</h3>
        <div>
          <p className="text-2xl font-bold text-slate-900">{mover.price.toLocaleString()} €</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Prix proposé TTC · 18/05/2026</p>
        </div>
      </div>

      {/* Score circulaire + Logo Moverz */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
        <div className="relative h-12 w-12 shrink-0">
          <svg className="h-12 w-12 -rotate-90">
            <circle cx="24" cy="24" r="20" fill="none" stroke="#E5E7EB" strokeWidth="2.5" />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke={mover.scoreColor}
              strokeWidth="2.5"
              strokeDasharray={`${20 * 2 * Math.PI * (mover.score / 100)} ${20 * 2 * Math.PI}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-base font-bold text-slate-900">{mover.score}</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          {/* Logo Moverz avec checkmark pour tous les scores */}
          <div className="flex items-center gap-1.5">
            <div className="relative shrink-0">
              <Image src="/logo.png" alt="Moverz" width={20} height={20} className="h-5 w-5" />
              {mover.score >= 80 && (
                <div
                  className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full flex items-center justify-center"
                  style={{ background: "#10B981" }}
                >
                  <svg className="h-1.5 w-1.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Moverz</p>
              <p className="text-[10px] font-medium" style={{ color: mover.scoreColor }}>
                {mover.scoreLabel}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 barres de scoring détaillées */}
      <div className="space-y-1.5 mb-3">
        {[
          { label: "Solidité", value: mover.solidite },
          { label: "Expérience", value: mover.experience },
          { label: "Vigilance", value: mover.vigilance },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-1.5">
            <span className="text-[10px] text-slate-600 w-16">{item.label}</span>
            <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-full rounded-full"
                style={{ background: getBarColor(item.value) }}
              />
            </div>
            <span className="text-[10px] font-semibold text-slate-900 w-6 text-right">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Étoiles Google */}
      <div className="flex items-center gap-1 mb-0.5">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-2.5 w-2.5 ${
                i < Math.floor(mover.googleRating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-semibold text-slate-900">{mover.googleRating}</span>
      </div>
      <p className="text-[10px] text-slate-500 mb-2">{mover.reviewCount} avis vérifiés</p>

      {/* Ancienneté + Site */}
      <div className="flex items-center gap-1.5 text-[10px] text-slate-600 mb-2 pb-2 border-b border-slate-200">
        <span className="font-semibold">{mover.yearsInBusiness} ans</span>
        {mover.hasWebsite && (
          <>
            <span>·</span>
            <div className="flex items-center gap-0.5">
              <Globe className="h-2.5 w-2.5" />
              <span>Site internet</span>
            </div>
          </>
        )}
      </div>

      {/* CTA */}
      <button
        className="w-full rounded-lg px-3 py-2 text-xs font-semibold border-2 transition-all hover:opacity-80"
        style={{
          borderColor: "#0EA5A6",
          color: "#0EA5A6",
          background: "white",
        }}
      >
        Voir le détail →
      </button>

      {/* Checkbox */}
      <label className="flex items-center gap-1.5 mt-2 text-[10px] text-slate-600 cursor-pointer">
        <input type="checkbox" className="h-3 w-3 rounded border-slate-300" />
        <span>Comparer dans le détail</span>
      </label>
    </div>
  );
}

export function ComparableQuotesMockScrolly() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % MOVERS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + MOVERS.length) % MOVERS.length);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      handlePrev();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
  };

  // Autoplay (simple)
  useEffect(() => {
    // Clear existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Auto advance to next slide
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % MOVERS.length);
    }, AUTOPLAY_DURATION);

    // Cleanup
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]); // Re-run when currentIndex changes

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-12 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* LEFT — Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Eyebrow badge */}
            <motion.div variants={staggerItem}>
              <div 
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" 
                style={{ 
                  background: "rgba(14,165,166,0.1)", 
                  border: "1px solid rgba(14,165,166,0.2)" 
                }}>
                <div 
                  className="h-2 w-2 rounded-full animate-pulse" 
                  style={{ background: "#0EA5A6" }} 
                />
                <span className="text-sm font-semibold" style={{ color: "#0EA5A6" }}>
                  Ce que vous recevez
                </span>
              </div>
            </motion.div>

            {/* Header */}
            <motion.div variants={staggerItem} className="space-y-4">
              <h2
                className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] leading-[1.1]"
                style={{ color: "var(--color-text)" }}
              >
                Nous avons mis le marché en concurrence{" "}
                <span style={{ color: "var(--color-accent)" }}>pour votre dossier.</span>
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed max-w-lg"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Seules les entreprises fiables, disponibles à vos dates et cohérentes en prix vous sont présentées.
              </p>
            </motion.div>

            {/* Comment ça fonctionne - Timeline simplifiée */}
            <motion.div variants={staggerItem} className="space-y-5">
              <h3
                className="font-heading text-sm font-semibold uppercase tracking-wide"
                style={{ color: "var(--color-text-muted)" }}
              >
                Comment ça fonctionne
              </h3>
              
              <div className="relative space-y-0">
                {/* Ligne verticale background */}
                <div 
                  className="absolute left-3 top-3 bottom-3 w-[2px]"
                  style={{ background: "rgba(14,165,166,0.15)" }}
                />
                
                {/* Ligne verticale animée */}
                <motion.div 
                  className="absolute left-3 top-3 w-[2px]"
                  style={{ background: "#0EA5A6" }}
                  initial={{ height: 0 }}
                  whileInView={{ height: "calc(100% - 24px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                />
                
                {[
                  "Nous analysons votre dossier",
                  "Nous mettons le marché en concurrence",
                  "Nous éliminons les offres à risque",
                  "Nous retenons les meilleures",
                  "Vous choisissez en toute confiance",
                ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-4 pb-6 last:pb-0 relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                  >
                    {/* Cercle avec checkmark permanent */}
                    <motion.div
                      className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full z-10"
                      style={{ background: "white", border: "2px solid #0EA5A6" }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                    >
                      {/* Checkmark directement visible */}
                      <motion.svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                        style={{ color: "#0EA5A6" }}
                        initial={{ opacity: 0, pathLength: 0 }}
                        whileInView={{ opacity: 1, pathLength: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.2 + i * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </motion.svg>
                    </motion.div>
                    
                    {/* Texte */}
                    <p className="text-base font-medium pt-0.5" style={{ color: "var(--color-text)" }}>
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA en fin de section */}
            <motion.div 
              variants={staggerItem}
              className="mt-8 pt-8 border-t"
              style={{ borderColor: "rgba(14,165,166,0.15)" }}>
              <a
                href="https://devis.moverz.fr/devis-gratuits"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
                style={{ 
                  background: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)",
                  boxShadow: "0 4px 16px rgba(14,165,166,0.25)"
                }}>
                Obtenir mes devis
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Gratuit · 3 min · Sans engagement
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — iPhone Mockup with Carousel */}
          <div className="relative flex justify-center items-center">
            {/* iPhone Frame */}
            <div className="relative w-full max-w-[280px]">
              {/* Premium glow effect turquoise */}
              <div
                className="absolute inset-0 blur-3xl opacity-40 animate-pulse"
                style={{ 
                  background: "radial-gradient(circle, rgba(14,165,166,0.6) 0%, rgba(14,165,166,0.3) 40%, transparent 70%)",
                  animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                }}
              />

              {/* Device container avec animation premium */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative"
                style={{ transform: "rotate(-2deg)" }}
              >
                {/* Phone frame - Compact & realistic proportions */}
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

                  {/* Screen content with carousel - Fond marine comme l'ancienne version */}
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
                            <strong style={{ color: "#0EA5A6" }}>3</strong>/12 offres
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
          </div>
        </div>
      </div>
    </section>
  );
}
