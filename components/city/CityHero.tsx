"use client";

import type { CityInfo } from "@/lib/cities";
import { useEffect, useState } from "react";
import Image from "next/image";

type CityHeroProps = {
  city: CityInfo;
  quoteUrl: string;
};

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
          <div
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-4 py-2 text-sm font-semibold text-[var(--color-text)] mb-8">
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "var(--color-accent)" }} />
              <span>{city.nameCapitalized}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-[1.1] text-[var(--color-text)]">
              Déménager à{" "}
              <span style={{ color: "var(--color-accent)" }}>{city.nameCapitalized}</span> ?
              <br />
              3 min, des devis.
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[var(--color-text-secondary)] mb-10 leading-relaxed">
              Des déménageurs locaux vérifiés. Des devis comparables. Sans démarchage.
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
              Conseil : précisez le type de logement et les contraintes d'accès pour des devis plus justes.
            </p>
          </div>

          {/* Right: Mockup WhatsApp simple */}
          <div
            className="relative order-first lg:order-last"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
            }}
          >
            <div className="relative w-full max-w-[360px] mx-auto">
              {/* iPhone mockup simple */}
              <div className="relative bg-white rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.4)] p-3 border-[12px] border-[#0F172A]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[var(--color-bg-dark)] rounded-b-2xl z-10" />
                
                {/* Screen */}
                <div className="relative bg-[#ECE5DD] rounded-[2.3rem] overflow-hidden" style={{ height: '600px' }}>
                  {/* WhatsApp header */}
                  <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <Image src="/logo.png" alt="Moverz" width={24} height={24} className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Moverz</p>
                      <p className="text-white/70 text-xs">en ligne</p>
                    </div>
                  </div>

                  {/* Conversation */}
                  <div className="p-4 space-y-3">
                    {/* Message from Moverz */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[85%] shadow-sm">
                        <p className="text-[var(--color-text)] text-sm leading-relaxed">
                          Bonjour ! Pour votre déménagement à <strong>{city.nameCapitalized}</strong>, donnez-moi 4 infos (départ, arrivée, date, type de logement) et je lance la comparaison.
                        </p>
                        <p className="text-[var(--color-text)]/50 text-xs mt-1">10:24</p>
                      </div>
                    </div>

                    {/* User response (green bubble) */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm p-3 max-w-[75%] shadow-sm">
                        <p className="text-[var(--color-text)] text-sm">Paris → {city.nameCapitalized} • 15/03 • T2 (2e, sans ascenseur)</p>
                        <p className="text-[var(--color-text)]/50 text-xs mt-1 text-right">10:26</p>
                      </div>
                    </div>

                    {/* Response from Moverz */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[85%] shadow-sm">
                        <p className="text-[var(--color-text)] text-sm leading-relaxed">
                          Parfait ! Vous recevrez <strong>des devis</strong> de déménageurs locaux à {city.nameCapitalized} dans les prochains jours.
                        </p>
                        <p className="text-[var(--color-text)]/50 text-xs mt-1">10:27</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-20 rounded-xl shadow-xl px-3 py-2 rotate-6 bg-white border border-[var(--color-accent)]/30">
                <p className="text-xs font-bold text-[var(--color-text)]">Locaux</p>
                <p className="text-xs text-[var(--color-text-secondary)]">Vérifiés</p>
              </div>

              <div className="absolute -left-4 bottom-32 rounded-xl shadow-xl px-3 py-2 -rotate-6 bg-white border border-[var(--color-accent)]/30">
                <p className="text-xs font-bold text-[var(--color-text)]">Sans démarchage</p>
                <p className="text-xs text-[var(--color-text-secondary)]">Gratuit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
  );
}
