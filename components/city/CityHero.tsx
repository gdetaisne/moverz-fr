"use client";

import type { CityInfo } from "@/lib/cities";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Globe, Clock, Shield, CheckCircle2 } from "lucide-react";

type CityHeroProps = {
  city: CityInfo;
  quoteUrl: string;
};

// Déménageur exemple pour la ville
const EXAMPLE_MOVER = {
  name: "Déménageur A",
  price: 1340,
  score: 92,
  scoreLabel: "Excellent",
  scoreColor: "#0EA5A6",
  solidite: 90,
  experience: 95,
  vigilance: 90,
  googleRating: 4.8,
  reviewCount: 234,
  yearsInBusiness: 12,
  hasWebsite: true,
};

function getBarColor(value: number): string {
  if (value >= 80) return "#0EA5A6";
  if (value >= 70) return "#FB923C";
  return "#DC2626";
}

export function CityHero({ city, quoteUrl }: CityHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="relative overflow-hidden py-16 md:py-24" 
      style={{ 
        background: "linear-gradient(to bottom, #F0FDFA 0%, #E0F2FE 50%, #F9FAFB 100%)" 
      }}
    >
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* Vignette effect */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.05) 100%)"
        }}
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-4 py-2 text-sm font-semibold text-[var(--color-text)] mb-8">
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "var(--color-accent)" }} />
              <span>{city.nameCapitalized}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-[1.1] text-[var(--color-text)]">
              Déménager à{" "}
              <span style={{ color: "var(--color-accent)" }}>{city.nameCapitalized}</span>&nbsp;?
              <br />
              3 min, des devis.
            </h1>

            {/* Subtitle - One-liner punchy */}
            <p className="text-xl text-[var(--color-text-secondary)] mb-10 leading-relaxed font-medium">
              3 devis vérifiés · 5-7 jours · 0 démarchage
            </p>

            {/* CTA */}
            <a
              href={quoteUrl}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{ 
                background: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)"
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Voir mes 3 meilleurs devis</span>
            </a>

            <p className="text-sm text-[var(--color-text-secondary)] mt-6">
              Gratuit · Sans engagement · Réponse rapide
            </p>
          </motion.div>

          {/* Right: Mockup iPhone Premium avec carte déménageur */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[240px] md:max-w-[280px] mx-auto">
              {/* Premium glow effect turquoise */}
              <div
                className="absolute inset-0 blur-3xl opacity-40"
                style={{ 
                  background: "radial-gradient(circle, rgba(14,165,166,0.6) 0%, rgba(14,165,166,0.3) 40%, transparent 70%)",
                  animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                }}
              />

              {/* Phone frame - Responsive */}
              <div
                className="relative rounded-[32px] md:rounded-[38px] border-[2px] overflow-hidden bg-white w-full"
                style={{
                  borderColor: "#1F2937",
                  aspectRatio: "280/600",
                  maxWidth: "280px",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.08)",
                }}
              >
                {/* Dynamic Island */}
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 h-[28px] w-[115px] rounded-full z-30"
                  style={{ background: "#000000" }}
                >
                  <div
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[45px] h-[4px] rounded-full"
                    style={{ background: "#1a1a1a" }}
                  />
                </div>

                {/* Screen content avec carte déménageur */}
                <div className="relative h-full w-full overflow-hidden pt-10" style={{ background: "#F9FAFB" }}>
                  <div className="h-full pt-6 pb-3 px-2.5 overflow-y-auto">
                    {/* Carte déménageur détaillée */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="w-full rounded-xl p-3 bg-white relative"
                      style={{
                        border: "2px solid #0EA5A6",
                        boxShadow: "0 4px 16px rgba(14,165,166,0.25), 0 0 0 1px rgba(14,165,166,0.1)"
                      }}
                    >
                      {/* Badge Meilleure offre */}
                      <div
                        className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full mb-3 -mt-1 relative overflow-hidden"
                        style={{ 
                          background: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)",
                          boxShadow: "0 4px 12px rgba(14,165,166,0.4)"
                        }}
                      >
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
                      </div>

                      {/* Nom + Prix */}
                      <div className="mb-2">
                        <h3 className="text-base font-bold text-slate-900 mb-0.5">{EXAMPLE_MOVER.name}</h3>
                        <div>
                          <p className="text-2xl font-bold text-slate-900">{EXAMPLE_MOVER.price.toLocaleString()} €</p>
                          <p className="text-[10px] text-slate-500 mt-0.5">Prix proposé TTC · 18/05/2026</p>
                        </div>
                      </div>

                      {/* Score circulaire + Logo Moverz */}
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                        <div className="relative h-12 w-12 shrink-0">
                          <svg className="h-12 w-12 -rotate-90">
                            <circle cx="24" cy="24" r="20" fill="none" stroke="#E5E7EB" strokeWidth="2.5" />
                            <motion.circle
                              cx="24"
                              cy="24"
                              r="20"
                              fill="none"
                              stroke={EXAMPLE_MOVER.scoreColor}
                              strokeWidth="2.5"
                              strokeDasharray={`${20 * 2 * Math.PI}`}
                              strokeDashoffset={`${20 * 2 * Math.PI * (1 - EXAMPLE_MOVER.score / 100)}`}
                              strokeLinecap="round"
                              initial={{ strokeDashoffset: `${20 * 2 * Math.PI}` }}
                              animate={{ strokeDashoffset: `${20 * 2 * Math.PI * (1 - EXAMPLE_MOVER.score / 100)}` }}
                              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-base font-bold text-slate-900">{EXAMPLE_MOVER.score}</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <div className="relative shrink-0">
                              <Image src="/logo.png" alt="Moverz" width={20} height={20} className="h-5 w-5" />
                              <div
                                className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full flex items-center justify-center"
                                style={{ background: "#10B981" }}
                              >
                                <svg className="h-1.5 w-1.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-900">Moverz</p>
                              <p className="text-[10px] font-medium" style={{ color: EXAMPLE_MOVER.scoreColor }}>
                                {EXAMPLE_MOVER.scoreLabel}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3 barres de scoring */}
                      <div className="space-y-1.5 mb-3">
                        {[
                          { label: "Solidité", value: EXAMPLE_MOVER.solidite },
                          { label: "Expérience", value: EXAMPLE_MOVER.experience },
                          { label: "Vigilance", value: EXAMPLE_MOVER.vigilance },
                        ].map((item, idx) => (
                          <div key={item.label} className="flex items-center justify-between gap-1.5">
                            <span className="text-[10px] text-slate-600 w-16">{item.label}</span>
                            <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.value}%` }}
                                transition={{ duration: 0.8, delay: 0.8 + idx * 0.1 }}
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
                                i < Math.floor(EXAMPLE_MOVER.googleRating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-slate-900">{EXAMPLE_MOVER.googleRating}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mb-2">{EXAMPLE_MOVER.reviewCount} avis vérifiés</p>

                      {/* Ancienneté + Site */}
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-600 mb-2 pb-2 border-b border-slate-200">
                        <span className="font-semibold">{EXAMPLE_MOVER.yearsInBusiness} ans</span>
                        <span>·</span>
                        <div className="flex items-center gap-0.5">
                          <Globe className="h-2.5 w-2.5" />
                          <span>Site internet</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        className="w-full rounded-lg px-3 py-2 text-xs font-semibold border-2 transition-all"
                        style={{
                          borderColor: "#0EA5A6",
                          color: "#0EA5A6",
                          background: "white",
                        }}
                      >
                        Voir le détail →
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Stats badges modernes - Glassmorphism - MASQUÉS SUR MOBILE */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="hidden lg:block absolute -right-6 top-20 rounded-xl px-3 py-2.5 backdrop-blur-xl"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(14,165,166,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                }}
              >
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[var(--color-accent)]" />
                  <div>
                    <p className="text-[10px] font-bold text-[var(--color-text)]">5-7 jours</p>
                    <p className="text-[9px] text-[var(--color-text-secondary)]">Réponse</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="hidden lg:block absolute -left-6 top-1/2 rounded-xl px-3 py-2.5 backdrop-blur-xl"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(14,165,166,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[var(--color-accent)]" />
                  <div>
                    <p className="text-[10px] font-bold text-[var(--color-text)]">100% vérifié</p>
                    <p className="text-[9px] text-[var(--color-text-secondary)]">Garantie</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="hidden lg:block absolute -right-6 bottom-32 rounded-xl px-3 py-2.5 backdrop-blur-xl"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(14,165,166,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-accent)]" />
                  <div>
                    <p className="text-[10px] font-bold text-[var(--color-text)]">0 démarchage</p>
                    <p className="text-[9px] text-[var(--color-text-secondary)]">Anonyme</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
