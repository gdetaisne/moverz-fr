"use client";
import React, { useEffect, useState } from "react";
import HeroMockup from "./HeroMockup";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden font-sans bg-hero">

      {/* Spacing uniforme */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          
          {/* ========== COLONNE GAUCHE – TEXTE ========== */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            {/* Badge lumineux */}
            <div 
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#0F172A] shadow-sm backdrop-blur-sm border border-white/60"
              style={{
                animation: mounted ? 'fadeInUp 0.6s ease-out' : 'none',
              }}
            >
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF] animate-pulse shadow-[0_0_8px_rgba(107,207,207,0.6)]" />
              Déménageurs vérifiés
            </div>

            {/* Titre émotionnel */}
            <h1 
              className="mt-6 text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A]"
              style={{
                animation: mounted ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none',
              }}
            >
              Vous déménagez.<br />
              <span className="text-[#0F172A]">
                On compare.
              </span>
            </h1>

            {/* Sous-titre clair */}
            <p 
              className="mt-6 text-base md:text-lg lg:text-xl text-[#1E293B] leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{
                animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
              }}
            >
              3 devis minimum fiables · 3 min · 100% gratuit
            </p>

            {/* CTA principal */}
            <div 
              className="mt-8"
              style={{
                animation: mounted ? 'fadeInUp 1.2s ease-out 0.3s both' : 'none',
              }}
            >
              <a
                href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=home&devis_range=3-5"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_40px_rgba(15,23,42,0.25)] hover:shadow-[0_14px_60px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Comparer mes devis</span>
              </a>
              <p className="mt-3 text-xs font-medium text-center text-[#1E293B]/70">
                3 minutes • dossier guidé • sans appels
              </p>
            </div>

            {/* Mini-badges de réassurance (hyper scannables) */}
            <div
              className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start"
              style={{
                animation: mounted ? "fadeInUp 1.2s ease-out 0.4s both" : "none",
              }}
            >
              {[
                "✓ Numéro masqué jusqu'au choix",
                "✓ Aucun démarchage / aucun appel",
                "✓ Entreprises vérifiées (assurance + licence + solvabilité)"
              ].map((badge, i) => (
                <span 
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#E3E5E8] px-3 py-2 text-xs font-semibold text-[#0F172A] shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

        {/* ========== COLONNE DROITE – WIDGET PHOTOS ========== */}
        <div 
          className="relative mx-auto w-full max-w-[560px] lg:mx-0"
          style={{
            animation: mounted ? 'fadeInUp 1s ease-out 0.4s both' : 'none',
          }}
        >
          <HeroMockup scrollY={scrollY} />
        </div>
        </div>
      </div>
    </section>
  );
}

