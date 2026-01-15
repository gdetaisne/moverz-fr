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

            {/* Pro CTA (visible dès la fold, sans parasiter le CTA principal) */}
            <div
              className="mt-5 flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
              style={{
                animation: mounted ? "fadeInUp 1.2s ease-out 0.38s both" : "none",
              }}
            >
              <span className="text-sm font-medium text-[#0F172A]/70">
                Vous êtes déménageur ?
              </span>
              <a
                href="/pro/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0F172A]/15 bg-white/70 px-4 py-2 text-sm font-semibold text-[#0F172A] shadow-sm backdrop-blur-sm transition-all hover:border-[#6BCFCF]/50 hover:bg-white hover:shadow-[0_10px_30px_rgba(107,207,207,0.18)] active:scale-[0.98]"
                aria-label="Découvrir l'offre Moverz Pro"
              >
                Découvrir Moverz Pro <span aria-hidden="true">→</span>
              </a>
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

