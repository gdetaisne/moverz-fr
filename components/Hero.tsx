"use client";
import React, { useEffect, useState } from "react";
import { LiveStatsWidget } from "./LiveStatsWidget";
import MoverzWidgetEmbed from "./MoverzWidgetEmbed";

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
    <section className="relative overflow-hidden font-sans bg-[#A8E8E8]">

      {/* Spacing uniforme */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* ========== COLONNE GAUCHE – TEXTE ========== */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            {/* Badge lumineux */}
            <div 
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-[#0F172A] shadow-md backdrop-blur-sm border border-[#6BCFCF]/30"
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
              L'IA analyse vos photos, compare les devis, vous déménagez sans stress.
            </p>

            {/* CTA principal navy */}
            <div 
              className="mt-8"
              style={{
                animation: mounted ? 'fadeInUp 1.2s ease-out 0.3s both' : 'none',
              }}
            >
              <a
                href="https://devis.moverz.fr/?source=moverz.fr&from=/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgba(15,23,42,0.3)] hover:shadow-[0_12px_50px_rgba(15,23,42,0.4)] hover:scale-105 transition-all duration-300"
                aria-label="Obtenir mes devis gratuits"
              >
                <span>Obtenir mes devis gratuits</span>
                <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <p className="mt-3 text-sm text-[#1E293B]/80 font-medium">
                Téléphone masqué · 0 spam · Les photos rendent les devis plus justes
              </p>
            </div>
          </div>

        {/* ========== COLONNE DROITE – CTA DIRECT ========== */}
        <div 
          className="relative mx-auto w-full max-w-[560px] lg:mx-0"
          style={{
            animation: mounted ? 'fadeInUp 1s ease-out 0.4s both' : 'none',
          }}
        >
          {/* CTA Card temporaire */}
          <div className="rounded-2xl bg-white p-8 md:p-10 shadow-lg border border-[#E3E5E8] text-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#6BCFCF]/10 mx-auto">
                <svg className="w-8 h-8 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-2">
                  Prêt à commencer ?
                </h3>
                <p className="text-base text-[#1E293B]/70">
                  Ajoutez quelques photos de vos pièces,<br />
                  l'IA calcule votre volume en 3 minutes.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="https://devis.moverz.fr/?source=moverz.fr&from=/"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] px-8 py-4 text-base font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 w-full"
              >
                <span>Démarrer mon devis gratuit</span>
                <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <p className="text-xs text-[#1E293B]/60">
                Gratuit · 3 min · Sans engagement
              </p>
            </div>

            <div className="pt-4 border-t border-[#E3E5E8]">
              <div className="flex items-center justify-center gap-4 text-xs text-[#1E293B]/60">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>0 spam</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>5+ devis comparables</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

