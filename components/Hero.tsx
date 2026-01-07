"use client";
import React, { useEffect, useState } from "react";
import { LiveStatsWidget } from "./LiveStatsWidget";
import QuoteWidgetShell from "./QuoteWidgetShell";

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
              Service gratuit • Déménageurs vérifiés
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
              L’IA fiabilise le volume grâce aux photos, pour des devis comparables. Vous choisissez le bon prix, sans stress.
            </p>

            {/* CTA principal navy */}
            <div 
              className="mt-8"
              style={{
                animation: mounted ? 'fadeInUp 1.2s ease-out 0.3s both' : 'none',
              }}
            >
              <a
                href="https://devis.moverz.fr/?source=moverz.fr&from=/&devis_range=3-5"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgba(15,23,42,0.3)] hover:shadow-[0_12px_50px_rgba(15,23,42,0.4)] hover:scale-105 transition-all duration-300"
                aria-label="Obtenir mes devis gratuits"
              >
                <span>Recevoir 3 à 5 devis gratuits</span>
                <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <p className="mt-3 text-sm text-[#1E293B]/80 font-medium">
                Téléphone masqué · 0 spam · Les photos rendent les devis plus justes
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                {[
                  "2–3 min",
                  "3 à 5 devis",
                  "Dossier anonyme",
                  "Sans engagement",
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full bg-white/70 backdrop-blur-sm border border-white/70 px-3 py-1 text-xs font-semibold text-[#0F172A]"
                  >
                    {label}
                  </span>
                ))}
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
          <QuoteWidgetShell source="moverz.fr" from="/" />
        </div>
        </div>
      </div>
    </section>
  );
}

