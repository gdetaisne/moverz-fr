"use client";
import React, { useEffect, useState } from "react";
import { LiveStatsWidget } from "./LiveStatsWidget";

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
    <section className="relative overflow-hidden text-white font-sans">
      {/* Background gradient (style /pro) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
      
      {/* Animated blobs (style /pro) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />

      {/* Espacement généreux */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* ========== COLONNE GAUCHE – TEXTE ========== */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            {/* Badge (style /pro) */}
            <div 
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
              style={{
                animation: mounted ? 'fadeInUp 0.6s ease-out' : 'none',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
              Service gratuit • Déménageurs vérifiés
            </div>

            {/* Titre émotionnel */}
            <h1 
              className="mt-6 text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                animation: mounted ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none',
              }}
            >
              Vous déménagez.<br />
              <span className="text-[#6BCFCF]">
                On compare.
              </span>
            </h1>

            {/* Sous-titre clair */}
            <p 
              className="mt-6 text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{
                animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
              }}
            >
              L'IA analyse vos photos, compare les devis, vous déménagez sans stress.
            </p>

            {/* CTA principal (style /pro) */}
            <div 
              className="mt-8"
              style={{
                animation: mounted ? 'fadeInUp 1.2s ease-out 0.3s both' : 'none',
              }}
            >
              <a
                href="https://devis.moverz.fr/?source=moverz.fr&from=/"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0F172A] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                aria-label="Obtenir mes devis gratuits"
              >
                <span>Obtenir mes devis gratuits</span>
                <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <p className="mt-3 text-sm text-white/70">
                Téléphone masqué · 0 spam · Les photos rendent les devis plus justes
              </p>
            </div>
          </div>

        {/* ========== COLONNE DROITE – WIDGET PHOTOS ========== */}
        <div 
          className="relative mx-auto w-full max-w-[560px] lg:mx-0"
          style={{
            animation: mounted ? 'fadeInUp 1s ease-out 0.4s both' : 'none',
          }}
        >
          {/* Widget externe - prend toute la place */}
          <div id="moverz-widget-root" className="min-h-[450px] md:min-h-[500px] w-full"></div>
        </div>
        </div>
      </div>
    </section>
  );
}

