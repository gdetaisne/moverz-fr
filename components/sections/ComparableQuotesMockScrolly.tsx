"use client";

/**
 * ComparableQuotesMockScrolly - Carousel 3 Cards
 * Affiche 3 offres de déménageurs détaillées avec carousel swipable
 */

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Globe, Sparkles } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";
import Image from "next/image";

// 3 déménageurs avec données réalistes
const MOVERS = [
  {
    id: 1,
    name: "Déménageur A",
    price: 1340,
    score: 92,
    scoreLabel: "Excellent",
    scoreColor: "#10B981",
    recommended: true,
    solidite: 90,
    experience: 95,
    vigilance: 92,
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
  if (value >= 90) return "#10B981"; // vert
  if (value >= 80) return "#0EA5A6"; // teal
  if (value >= 70) return "#FB923C"; // orange
  return "#DC2626"; // rouge
}

function MoverCardDetailed({ mover, index }: { mover: typeof MOVERS[0]; index: number }) {
  return (
    <div
      className="w-full max-w-md mx-auto rounded-3xl border-2 p-6 md:p-8 bg-white shadow-xl"
      style={{
        borderColor: mover.recommended ? "#0EA5A6" : "#E5E7EB",
      }}
    >
      {/* Badge Recommandé */}
      {mover.recommended && (
        <div
          className="flex items-center justify-center gap-2 py-2 px-4 rounded-full mb-6 -mt-2"
          style={{ background: "#0EA5A6" }}
        >
          <Sparkles className="h-4 w-4 text-white" />
          <span className="text-sm font-semibold text-white">Recommandé par Moverz</span>
        </div>
      )}

      {/* Nom + Prix */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{mover.name}</h3>
        <div>
          <p className="text-4xl font-bold text-slate-900">{mover.price.toLocaleString()} €</p>
          <p className="text-sm text-slate-500 mt-1">Prix proposé TTC</p>
        </div>
      </div>

      {/* Score circulaire + Logo Moverz */}
      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
        <div className="relative h-20 w-20">
          <svg className="h-20 w-20 -rotate-90">
            <circle cx="40" cy="40" r="36" fill="none" stroke="#E5E7EB" strokeWidth="4" />
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke={mover.scoreColor}
              strokeWidth="4"
              strokeDasharray={`${36 * 2 * Math.PI * (mover.score / 100)} ${36 * 2 * Math.PI}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-slate-900">{mover.score}</span>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-lg font-semibold" style={{ color: mover.scoreColor }}>
            {mover.scoreLabel}
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="relative">
              <Image src="/logo.png" alt="Moverz" width={18} height={18} className="h-4.5 w-4.5" />
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
            <span className="text-sm font-semibold text-slate-900">Score Moverz</span>
          </div>
        </div>
      </div>

      {/* 3 barres de scoring */}
      <div className="space-y-3 mb-6">
        {[
          { label: "Solidité", value: mover.solidite },
          { label: "Expérience", value: mover.experience },
          { label: "Vigilance", value: mover.vigilance },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-3">
            <span className="text-sm text-slate-600 w-24">{item.label}</span>
            <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-full rounded-full"
                style={{ background: getBarColor(item.value) }}
              />
            </div>
            <span className="text-sm font-semibold text-slate-900 w-10 text-right">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Étoiles Google */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(mover.googleRating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-slate-900">{mover.googleRating}</span>
      </div>
      <p className="text-xs text-slate-500 mb-4">{mover.reviewCount} avis vérifiés</p>

      {/* Ancienneté + Site */}
      <div className="flex items-center gap-3 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-200">
        <span className="font-semibold">{mover.yearsInBusiness} ans</span>
        {mover.hasWebsite && (
          <>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Globe className="h-3.5 w-3.5" />
              <span>Site internet</span>
            </div>
          </>
        )}
      </div>

      {/* CTA */}
      <button
        className="w-full rounded-xl px-6 py-3.5 text-base font-semibold border-2 transition-all hover:opacity-80"
        style={{
          borderColor: "#0EA5A6",
          color: "#0EA5A6",
          background: "white",
        }}
      >
        Voir le détail →
      </button>

      {/* Checkbox */}
      <label className="flex items-center gap-2 mt-4 text-sm text-slate-600 cursor-pointer">
        <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
        <span>Comparer dans le détail</span>
      </label>
    </div>
  );
}

export function ComparableQuotesMockScrolly() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

            {/* Stats badge */}
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border"
              style={{
                background: "rgba(14,165,166,0.05)",
                borderColor: "rgba(14,165,166,0.2)",
              }}
            >
              <span className="text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
                <strong>{MOVERS.length}</strong> offres retenues sur 7 réponses reçues
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Carousel */}
          <div className="relative">
            {/* Navigation mobile */}
            <div className="flex items-center justify-center gap-4 mb-6 lg:hidden">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm hover:bg-slate-50 transition-colors"
                style={{ borderColor: "#E5E7EB" }}
              >
                <ChevronLeft className="h-5 w-5 text-slate-600" />
              </button>

              <div className="flex items-center gap-2">
                {MOVERS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                    }}
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: i === currentIndex ? "24px" : "8px",
                      background: i === currentIndex ? "#0EA5A6" : "#CBD5E1",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm hover:bg-slate-50 transition-colors"
                style={{ borderColor: "#E5E7EB" }}
              >
                <ChevronRight className="h-5 w-5 text-slate-600" />
              </button>
            </div>

            {/* Carousel container */}
            <div className="relative overflow-hidden">
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
                  className="touch-pan-y"
                >
                  <MoverCardDetailed mover={MOVERS[currentIndex]} index={currentIndex} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation desktop (flèches latérales) */}
            <div className="hidden lg:flex absolute inset-y-0 -left-16 items-center">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-lg hover:bg-slate-50 transition-all hover:scale-105"
                style={{ borderColor: "#E5E7EB" }}
              >
                <ChevronLeft className="h-6 w-6 text-slate-600" />
              </button>
            </div>

            <div className="hidden lg:flex absolute inset-y-0 -right-16 items-center">
              <button
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-lg hover:bg-slate-50 transition-all hover:scale-105"
                style={{ borderColor: "#E5E7EB" }}
              >
                <ChevronRight className="h-6 w-6 text-slate-600" />
              </button>
            </div>

            {/* Dots desktop */}
            <div className="hidden lg:flex items-center justify-center gap-2 mt-8">
              {MOVERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: i === currentIndex ? "32px" : "8px",
                    background: i === currentIndex ? "#0EA5A6" : "#CBD5E1",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
