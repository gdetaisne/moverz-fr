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

          {/* Right: Mockup iPhone Premium (style ComparableQuotesMockScrolly) */}
          <div
            className="relative order-first lg:order-last"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
            }}
          >
            <div className="relative w-full max-w-[280px] mx-auto">
              {/* Premium glow effect turquoise */}
              <div
                className="absolute inset-0 blur-3xl opacity-40 animate-pulse"
                style={{ 
                  background: "radial-gradient(circle, rgba(14,165,166,0.6) 0%, rgba(14,165,166,0.3) 40%, transparent 70%)",
                  animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                }}
              />

              {/* Phone frame - Compact & realistic proportions */}
              <div
                className="relative rounded-[38px] border-[2px] overflow-hidden bg-white"
                style={{
                  borderColor: "#1F2937",
                  width: "280px",
                  height: "600px",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.08)",
                }}
              >
                {/* Dynamic Island (iPhone 14 Pro style) */}
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 h-[28px] w-[115px] rounded-full z-30"
                  style={{ background: "#000000" }}
                >
                  {/* Speaker grill inside island */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[45px] h-[4px] rounded-full"
                    style={{ background: "#1a1a1a" }}
                  />
                </div>

                {/* Screen content */}
                <div className="relative h-full w-full overflow-hidden pt-10" style={{ background: "#ECE5DD" }}>
                  {/* WhatsApp header */}
                  <div className="bg-[#075E54] px-3 py-2.5 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                      <Image src="/logo.png" alt="Moverz" width={20} height={20} className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-xs">Moverz</p>
                      <p className="text-white/70 text-[10px]">en ligne</p>
                    </div>
                  </div>

                  {/* Conversation */}
                  <div className="p-3 space-y-2">
                    {/* Message from Moverz */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-xl rounded-tl-sm p-2.5 max-w-[90%] shadow-sm">
                        <p className="text-[var(--color-text)] text-[11px] leading-relaxed">
                          Bonjour ! Pour votre déménagement à <strong>{city.nameCapitalized}</strong>, donnez-moi 4 infos (départ, arrivée, date, type de logement) et je lance la comparaison.
                        </p>
                        <p className="text-[var(--color-text)]/50 text-[9px] mt-1">10:24</p>
                      </div>
                    </div>

                    {/* User response (green bubble) */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm p-2.5 max-w-[85%] shadow-sm">
                        <p className="text-[var(--color-text)] text-[11px]">Paris → {city.nameCapitalized} • 15/03 • T2 (2e, sans ascenseur)</p>
                        <p className="text-[var(--color-text)]/50 text-[9px] mt-1 text-right">10:26</p>
                      </div>
                    </div>

                    {/* Response from Moverz */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-xl rounded-tl-sm p-2.5 max-w-[90%] shadow-sm">
                        <p className="text-[var(--color-text)] text-[11px] leading-relaxed">
                          Parfait ! Vous recevrez <strong>des devis</strong> de déménageurs locaux à {city.nameCapitalized} dans les prochains jours.
                        </p>
                        <p className="text-[var(--color-text)]/50 text-[9px] mt-1">10:27</p>
                      </div>
                    </div>
                  </div>
                </div>
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
