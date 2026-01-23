"use client";
import React, { useEffect, useState } from "react";
import HeroMockup from "./HeroMockup";
import WhatsAppCTA from "./WhatsAppCTA";

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

            {/* CTAs WhatsApp-first (device-based) */}
            <div 
              className="mt-8"
              style={{
                animation: mounted ? 'fadeInUp 1.2s ease-out 0.3s both' : 'none',
              }}
            >
              <WhatsAppCTA source="home" />
            </div>

            {/* Preuves de réassurance sous CTA */}
            <div
              className="mt-6 space-y-2"
              style={{
                animation: mounted ? "fadeInUp 1.2s ease-out 0.4s both" : "none",
              }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-[#1E293B]/80">
                <svg className="w-5 h-5 text-[#6BCFCF] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Numéro masqué jusqu'au choix</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-[#1E293B]/80">
                <svg className="w-5 h-5 text-[#6BCFCF] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Aucun démarchage · Aucun appel</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-[#1E293B]/80">
                <svg className="w-5 h-5 text-[#6BCFCF] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Entreprises vérifiées (assurance + licence + solvabilité)</span>
              </div>
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

