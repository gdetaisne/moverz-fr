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
      className="w-full rounded-xl border-2 p-3 bg-white shadow-sm"
      style={{
        borderColor: mover.recommended ? "#0EA5A6" : "#E5E7EB",
      }}
    >
      {/* Badge Recommandé */}
      {mover.recommended && (
        <div
          className="flex items-center justify-center gap-1 py-1 px-2 rounded-full mb-2 -mt-0.5"
          style={{ background: "#0EA5A6" }}
        >
          <Image src="/logo.png" alt="Moverz" width={12} height={12} className="h-3 w-3" />
          <span className="text-[10px] font-semibold text-white">Meilleure offre</span>
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
          <p className="text-sm font-semibold" style={{ color: mover.scoreColor }}>
            {mover.scoreLabel}
          </p>
          {/* Logo Moverz approved UNIQUEMENT pour les bons scores (>= 80) */}
          {mover.score >= 80 && (
            <div className="flex items-center gap-1 mt-0.5">
              <div className="relative shrink-0">
                <Image src="/logo.png" alt="Moverz" width={16} height={16} className="h-4 w-4" />
                <div
                  className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full flex items-center justify-center"
                  style={{ background: "#10B981" }}
                >
                  <svg className="h-1 w-1 text-white" fill="currentColor" viewBox="0 0 12 12">
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
              </div>
              <span className="text-xs font-bold text-slate-900">Moverz</span>
            </div>
          )}
          {/* Message pour les scores moyens/faibles */}
          {mover.score < 80 && (
            <p className="text-[10px] text-slate-500 mt-0.5">Score Moverz</p>
          )}
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

            {/* Comment ça fonctionne - Avec animation timeline */}
            <motion.div variants={staggerItem} className="space-y-5">
              <h3
                className="font-heading text-sm font-semibold uppercase tracking-wide"
                style={{ color: "var(--color-text-muted)" }}
              >
                Comment ça fonctionne
              </h3>
              
              <div className="relative space-y-0">
                {/* Ligne verticale background (grise) */}
                <div 
                  className="absolute left-3 top-3 bottom-3 w-[2px]"
                  style={{ background: "rgba(14,165,166,0.15)" }}
                />
                
                {/* Ligne verticale animée (turquoise) qui se remplit */}
                <motion.div 
                  className="absolute left-3 top-3 w-[2px]"
                  style={{ background: "#0EA5A6" }}
                  initial={{ height: 0 }}
                  whileInView={{ height: "calc(100% - 24px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
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
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: i * 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Cercle avec numéro qui devient checkmark */}
                    <motion.div
                      className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full z-10"
                      style={{ background: "white", border: "2px solid #0EA5A6" }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: i * 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                    >
                      {/* Numéro */}
                      <motion.span
                        className="text-xs font-bold absolute"
                        style={{ color: "#0EA5A6" }}
                        initial={{ opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 0, scale: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 1.2 + i * 0.3,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                      >
                        {i + 1}
                      </motion.span>
                      
                      {/* Checkmark qui apparaît */}
                      <motion.svg
                        className="h-3.5 w-3.5 absolute"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                        style={{ color: "#0EA5A6" }}
                        initial={{ opacity: 0, scale: 0, rotate: -90 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1.5 + i * 0.3,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
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
          </motion.div>

          {/* RIGHT — iPhone Mockup with Carousel */}
          <div className="relative flex justify-center items-center">
            {/* iPhone Frame */}
            <div className="relative w-full max-w-[280px]">
              {/* Subtle glow */}
              <div
                className="absolute inset-0 rounded-[38px] blur-3xl opacity-20"
                style={{ background: "radial-gradient(ellipse, rgba(14,165,166,0.3) 0%, transparent 70%)" }}
              />

              {/* Device container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
                style={{ transform: "rotate(-2deg)" }}
              >
                {/* Phone frame - Compact & realistic proportions */}
                <div
                  className="relative rounded-[38px] border-[2px] overflow-hidden bg-white"
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

                  {/* Screen content with carousel */}
                  <div className="relative h-full w-full overflow-hidden" style={{ background: "#F9FAFB" }}>
                    {/* Carousel container (inside phone) with enhanced stack effect */}
                    <div className="relative h-full pt-16 pb-3 px-2 overflow-hidden">
                      {/* Card #3 - Très en arrière (la plus floue) */}
                      {currentIndex < MOVERS.length - 2 && (
                        <div className="absolute inset-0 pt-16 pb-3 px-2 pointer-events-none">
                          <div
                            className="absolute inset-x-2 top-16 bottom-3"
                            style={{
                              transform: "translateX(16px) translateY(16px) scale(0.92) rotate(1deg)",
                              opacity: 0.25,
                              filter: "blur(2.5px)",
                            }}
                          >
                            <MoverCardDetailed mover={MOVERS[currentIndex + 2]} index={currentIndex + 2} />
                          </div>
                        </div>
                      )}

                      {/* Card #2 - Moyennement en arrière */}
                      {currentIndex < MOVERS.length - 1 && (
                        <div className="absolute inset-0 pt-16 pb-3 px-2 pointer-events-none">
                          <div
                            className="absolute inset-x-2 top-16 bottom-3"
                            style={{
                              transform: "translateX(10px) translateY(10px) scale(0.96) rotate(0.5deg)",
                              opacity: 0.5,
                              filter: "blur(1.2px)",
                            }}
                          >
                            <MoverCardDetailed mover={MOVERS[currentIndex + 1]} index={currentIndex + 1} />
                          </div>
                        </div>
                      )}

                      {/* Card #1 - Principale (nette) */}
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

              {/* Badge flottant sur le CÔTÉ DROIT du téléphone */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute top-1/2 -translate-y-1/2 -right-4 rounded-2xl px-4 py-3 text-[11px] font-semibold backdrop-blur-xl"
                style={{ 
                  background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(240,253,250,0.95) 100%)",
                  border: "1px solid rgba(14,165,166,0.2)",
                  boxShadow: "0 8px 24px rgba(14,165,166,0.12), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
                  color: "#111827" 
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  {/* Icône checkmark dans cercle turquoise */}
                  <div 
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(14,165,166,0.15)" }}
                  >
                    <svg 
                      className="h-2.5 w-2.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      style={{ color: "#0EA5A6" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-tight">
                    <strong style={{ color: "#0EA5A6", fontWeight: 700 }}>3</strong> offres retenues{" "}
                    <span style={{ color: "#9CA3AF" }}>sur</span>{" "}
                    <strong style={{ fontWeight: 600 }}>12</strong> devis reçus
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
