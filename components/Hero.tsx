"use client";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden text-white font-sans">
      {/* Clean background - simplified */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />

      {/* Espacement généreux */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* ========== COLONNE GAUCHE – TEXTE ========== */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            {/* Badge simple */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Service gratuit • Déménageurs vérifiés
            </div>

            {/* Titre émotionnel */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl">
              Déménager ?<br />
              <span className="text-[#6BCFCF]">On gère la partie chiante.</span>
            </h1>

            {/* Sous-titre clair */}
            <p className="mt-6 text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              L'IA analyse vos photos, compare les devis, vous déménagez sans stress.
            </p>

            {/* CTA principal */}
            <div className="mt-8">
              <a
                href="https://devis.moverz.fr/?source=moverz.fr&from=/"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-[#0F172A] shadow-lg hover:bg-[#F3F4F6] transition-colors"
                aria-label="Obtenir mes devis gratuits"
              >
                <span>Obtenir mes devis gratuits</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>

          {/* ========== COLONNE DROITE – WIDGET PHOTOS ========== */}
          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
            {/* Widget externe - prend toute la place */}
            <div id="moverz-widget-root" className="min-h-[450px] md:min-h-[500px] w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

