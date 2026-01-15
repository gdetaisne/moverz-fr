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
              className="mt-6 flex justify-center lg:justify-start"
              style={{
                animation: mounted ? "fadeInUp 1.2s ease-out 0.38s both" : "none",
              }}
            >
              <div className="w-full max-w-xl rounded-2xl border border-[#6BCFCF]/20 bg-white/70 p-4 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold text-[#0F172A]">
                      Vous êtes déménageur ?
                    </p>
                    <p className="mt-1 text-sm text-[#0F172A]/70">
                      Dossiers complets (photos + IA + volume) pour chiffrer plus vite.
                    </p>
                  </div>
                  <a
                    href="/pro/"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#6BCFCF] px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-[0_12px_35px_rgba(107,207,207,0.35)] transition-all hover:shadow-[0_16px_45px_rgba(107,207,207,0.45)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6BCFCF] focus-visible:ring-offset-2"
                    aria-label="Découvrir l'offre Moverz Pro"
                  >
                    Découvrir Moverz Pro
                    <span
                      className="text-base transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </div>
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

