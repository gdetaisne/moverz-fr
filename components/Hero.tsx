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
      {/* Background ultra-profond avec halos multiples */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-hero" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1929]/95 via-[#04141f]/90 to-[#0b3b46]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-transparent to-white/4" />
        
        {/* Halos lumineux multiples (comme Stripe) avec parallax */}
        <div 
          className="pointer-events-none absolute -top-32 right-[-180px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,207,207,0.35),_transparent_70%)] blur-3xl transition-transform duration-100"
          style={{ transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.1}px)` }}
        />
        <div 
          className="pointer-events-none absolute top-1/2 left-[-120px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.15),_transparent_70%)] blur-3xl transition-transform duration-100"
          style={{ transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.08}px)` }}
        />
      </div>

      {/* Espacement généreux (Stripe-like) */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          
          {/* ========== COLONNE GAUCHE – TEXTE ========== */}
          <div
            className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left motion-safe:animate-fade-up-soft"
            style={{ animationDelay: "60ms" }}
          >
            {/* Badge avec shimmer subtil */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm shadow-lg shadow-black/20 hover:border-white/20 hover:bg-white/8 transition-all duration-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse shadow-[0_0_8px_rgba(110,231,183,0.6)]" />
              Processus anti-arnaque
            </div>

            {/* Titre massif avec gradient text (Stripe-style) */}
            <h1 className="mt-6 text-5xl font-bold tracking-tight leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl">
              Comparez enfin des devis de déménageurs
              <span className="block mt-2 bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] bg-clip-text text-transparent">
                comparables
              </span>
            </h1>

            {/* Sous-titre aéré */}
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Un seul dossier, des déménageurs contrôlés, des devis comparables.
            </p>

            {/* CTA avec gradient + glow (Stripe-style) */}
            <div className="mt-10 flex flex-col items-center justify-center sm:flex-row lg:justify-start">
              <a
                href="https://devis.moverz.fr/?source=moverz.fr&from=/"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-lg md:text-xl font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                aria-label="Comparez 5+ devis gratuitement"
              >
                {/* Shimmer effect au hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Comparez 5+ devis gratuitement</span>
                <span className="relative text-2xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* ========== COLONNE DROITE – BÉNÉFICES VISUELS (STRIPE-LIKE) ========== */}
          <div
            className="relative mx-auto w-full max-w-[520px] lg:mx-0 motion-safe:animate-fade-up-soft"
            style={{ animationDelay: "180ms" }}
          >
            {/* Halo ultra-profond derrière la carte (Stripe signature) */}
            <div className="absolute -inset-12 hidden rounded-3xl bg-gradient-radial from-[#6BCFCF]/25 via-[#4FB8B8]/10 to-transparent blur-3xl lg:block" />
            
            {/* Carte produit épurée - Focus bénéfices */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-b from-white/98 via-white/95 to-[#F5FBFB]/95 p-6 md:p-8 shadow-[0_32px_90px_rgba(15,23,42,0.6)] text-[#04163a] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_120px_rgba(15,23,42,0.75)] hover:border-white/12">
              
              {/* Filament lumineux en haut (Stripe-style) */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#6BCFCF] via-[#4f46e5] to-[#22c55e] opacity-90" />
              
              {/* Header */}
              <div className="relative mb-6 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0A1929] px-4 py-2 text-xs font-bold text-white/90 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  3 étapes · 0 spam · 5+ devis fiables
                </span>
              </div>

              {/* 4 bénéfices clés avec pictogrammes SVG + animations */}
              <div className="space-y-3">
                {/* Bénéfice 1 : Comparabilité */}
                <div 
                  className="group/item flex items-start gap-4 rounded-2xl border border-[#E3E5E8] bg-white p-4 hover:border-[#6BCFCF]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  style={{ animationDelay: "400ms" }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20 border border-[#6BCFCF]/20 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                    <svg className="h-5 w-5 text-[#2B7A78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[#0E0E0E]">Devis comparables</div>
                    <div className="mt-1 text-xs text-[#4b5c6b] leading-relaxed">
                      Même volume, mêmes options pour tous
                    </div>
                  </div>
                </div>

                {/* Bénéfice 2 : 0 spam */}
                <div 
                  className="group/item flex items-start gap-4 rounded-2xl border border-[#E3E5E8] bg-white p-4 hover:border-[#6BCFCF]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  style={{ animationDelay: "500ms" }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20 border border-[#6BCFCF]/20 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                    <svg className="h-5 w-5 text-[#2B7A78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[#0E0E0E]">Dossier anonyme</div>
                    <div className="mt-1 text-xs text-[#4b5c6b] leading-relaxed">
                      Vous décidez qui vous contacte
                    </div>
                  </div>
                </div>

                {/* Bénéfice 3 : Pros contrôlés */}
                <div 
                  className="group/item flex items-start gap-4 rounded-2xl border border-[#E3E5E8] bg-white p-4 hover:border-[#6BCFCF]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  style={{ animationDelay: "600ms" }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20 border border-[#6BCFCF]/20 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                    <svg className="h-5 w-5 text-[#2B7A78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[#0E0E0E]">Pros contrôlés</div>
                    <div className="mt-1 text-xs text-[#4b5c6b] leading-relaxed">
                      Assurances, avis, 0 litige
                    </div>
                  </div>
                </div>

                {/* Bénéfice 4 : Gratuité */}
                <div 
                  className="group/item flex items-start gap-4 rounded-2xl border border-[#E3E5E8] bg-white p-4 hover:border-[#6BCFCF]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  style={{ animationDelay: "700ms" }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20 border border-[#6BCFCF]/20 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                    <svg className="h-5 w-5 text-[#2B7A78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                      </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[#0E0E0E]">100% gratuit</div>
                    <div className="mt-1 text-xs text-[#4b5c6b] leading-relaxed">
                      5+ devis fiables sans aucun frais
                    </div>
                  </div>
                </div>
              </div>

              {/* Objectif (badge final) */}
              <div className="mt-6 flex justify-center">
                <div className="group/badge inline-flex items-center gap-2 rounded-full border border-[#E3E5E8] bg-gradient-to-r from-[#E6FFFA] to-white px-4 py-2.5 text-xs md:text-sm text-[#04163a] shadow-sm hover:shadow-md hover:border-[#6BCFCF]/40 hover:scale-105 transition-all duration-300">
                  <svg className="h-4 w-4 text-[#2B7A78] group-hover/badge:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-semibold">Comparer, pas se faire rappeler 10 fois</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

