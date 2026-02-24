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

// 3 déménageurs avec données réalistes (5 barres de scoring)
const MOVERS = [
  {
    id: 1,
    name: "Déménageur B",
    price: 1150,
    score: 84,
    scoreLabel: "Excellent",
    scoreColor: "#0EA5A6",
    recommended: true,
    financier: 50,
    juridique: 100,
    google: 100,
    reputation: 95,
    vigilance: 100,
    googleRating: 5.0,
    reviewCount: 65,
    yearsInBusiness: 5,
    hasWebsite: true,
  },
  {
    id: 2,
    name: "Déménageur D",
    price: 1300,
    score: 84,
    scoreLabel: "Excellent",
    scoreColor: "#0EA5A6",
    recommended: false,
    financier: 50,
    juridique: 100,
    google: 100,
    reputation: 95,
    vigilance: 100,
    googleRating: 4.5,
    reviewCount: 639,
    yearsInBusiness: 5,
    hasWebsite: true,
  },
  {
    id: 3,
    name: "Déménageur C",
    price: 1320,
    score: 76,
    scoreLabel: "Bon",
    scoreColor: "#0EA5A6",
    recommended: false,
    financier: 22,
    juridique: 100,
    google: 100,
    reputation: 95,
    vigilance: 100,
    googleRating: 4.9,
    reviewCount: 80,
    yearsInBusiness: 6,
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
      className="w-full rounded-2xl border-2 p-5 bg-white shadow-sm mx-2"
      style={{
        borderColor: mover.recommended ? "#0EA5A6" : "#E5E7EB",
      }}
    >
      {/* Badge Recommandé */}
      {mover.recommended && (
        <div
          className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full mb-4 -mt-1"
          style={{ background: "#0EA5A6" }}
        >
          <Image src="/logo.png" alt="Moverz" width={14} height={14} className="h-3.5 w-3.5" />
          <span className="text-xs font-semibold text-white">Meilleure offre</span>
        </div>
      )}

      {/* Nom + Prix */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{mover.name}</h3>
        <div>
          <p className="text-3xl font-bold text-slate-900">{mover.price.toLocaleString()} €</p>
          <p className="text-xs text-slate-500 mt-0.5">Prix proposé TTC · 18/05/2026</p>
        </div>
      </div>

      {/* Score circulaire + Logo Moverz */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200">
        <div className="relative h-16 w-16">
          <svg className="h-16 w-16 -rotate-90">
            <circle cx="32" cy="32" r="28" fill="none" stroke="#E5E7EB" strokeWidth="3" />
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke={mover.scoreColor}
              strokeWidth="3"
              strokeDasharray={`${28 * 2 * Math.PI * (mover.score / 100)} ${28 * 2 * Math.PI}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-slate-900">{mover.score}</span>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-base font-semibold" style={{ color: mover.scoreColor }}>
            {mover.scoreLabel}
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="relative">
              <Image src="/logo.png" alt="Moverz" width={20} height={20} className="h-5 w-5" />
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
            </div>
            <span className="text-sm font-bold text-slate-900">Moverz</span>
          </div>
        </div>
      </div>

      {/* 5 barres de scoring détaillées */}
      <div className="space-y-2 mb-4">
        {[
          { label: "Financier", value: mover.financier },
          { label: "Juridique", value: mover.juridique },
          { label: "Google", value: mover.google },
          { label: "Réputation", value: mover.reputation },
          { label: "Vigilance", value: mover.vigilance },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-2">
            <span className="text-xs text-slate-600 w-20">{item.label}</span>
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-full rounded-full"
                style={{ background: getBarColor(item.value) }}
              />
            </div>
            <span className="text-xs font-semibold text-slate-900 w-8 text-right">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Étoiles Google */}
      <div className="flex items-center gap-1.5 mb-1">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < Math.floor(mover.googleRating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-slate-900">{mover.googleRating}</span>
      </div>
      <p className="text-xs text-slate-500 mb-3">{mover.reviewCount} avis vérifiés</p>

      {/* Ancienneté + Site */}
      <div className="flex items-center gap-2 text-xs text-slate-600 mb-4 pb-4 border-b border-slate-200">
        <span className="font-semibold">{mover.yearsInBusiness} ans</span>
        {mover.hasWebsite && (
          <>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              <span>Site internet</span>
            </div>
          </>
        )}
      </div>

      {/* CTA */}
      <button
        className="w-full rounded-lg px-4 py-3 text-sm font-semibold border-2 transition-all hover:opacity-80"
        style={{
          borderColor: "#0EA5A6",
          color: "#0EA5A6",
          background: "white",
        }}
      >
        Voir le détail →
      </button>

      {/* Checkbox */}
      <label className="flex items-center gap-2 mt-3 text-xs text-slate-600 cursor-pointer">
        <input type="checkbox" className="h-3.5 w-3.5 rounded border-slate-300" />
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
                  className="relative rounded-[38px] border-[7px] overflow-hidden bg-white"
                  style={{
                    borderColor: "#1F2937",
                    width: "280px",
                    height: "600px",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.1)",
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
                    {/* Navigation dots mobile (inside screen, top) */}
                    <div className="absolute top-10 left-0 right-0 z-20 flex items-center justify-center gap-2 lg:hidden">
                      {MOVERS.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setDirection(i > currentIndex ? 1 : -1);
                            setCurrentIndex(i);
                          }}
                          className="h-1.5 rounded-full transition-all"
                          style={{
                            width: i === currentIndex ? "16px" : "6px",
                            background: i === currentIndex ? "#0EA5A6" : "#CBD5E1",
                          }}
                        />
                      ))}
                    </div>

                    {/* Carousel container (inside phone) with enhanced stack effect */}
                    <div className="relative h-full pt-24 pb-4 px-3 overflow-hidden">
                      {/* Card #3 - Très en arrière (la plus floue) */}
                      {currentIndex < MOVERS.length - 2 && (
                        <div className="absolute inset-0 pt-24 pb-4 px-3 pointer-events-none">
                          <div
                            className="absolute inset-x-3 top-24 bottom-4"
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
                        <div className="absolute inset-0 pt-24 pb-4 px-3 pointer-events-none">
                          <div
                            className="absolute inset-x-3 top-24 bottom-4"
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
