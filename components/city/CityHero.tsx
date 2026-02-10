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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF] animate-pulse" />
              <span>{city.nameCapitalized}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
              Déménager à{" "}
              <span className="text-[#6BCFCF]">{city.nameCapitalized}</span> ?
              <br />
              <span className="text-white">3 min, 3 devis minimum.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Des déménageurs locaux contrôlés. Des devis comparables. Sans démarchage.
            </p>

            {/* CTA */}
            <a
              href={quoteUrl}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#0F172A] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Comparer mes devis</span>
            </a>

            <p className="text-sm text-white/50 mt-6">
              Conseil : précisez le type de logement et les contraintes d’accès pour des devis plus justes.
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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0F172A] rounded-b-2xl z-10" />
                
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
                        <p className="text-[#1F2937] text-sm leading-relaxed">
                          Bonjour ! Pour votre déménagement à <strong>{city.nameCapitalized}</strong>, donnez-moi 4 infos (départ, arrivée, date, type de logement) et je lance la comparaison.
                        </p>
                        <p className="text-[#1F2937]/50 text-xs mt-1">10:24</p>
                      </div>
                    </div>

                    {/* User response (green bubble) */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm p-3 max-w-[75%] shadow-sm">
                        <p className="text-[#1F2937] text-sm">Paris → {city.nameCapitalized} • 15/03 • T2 (2e, sans ascenseur)</p>
                        <p className="text-[#1F2937]/50 text-xs mt-1 text-right">10:26</p>
                      </div>
                    </div>

                    {/* Response from Moverz */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[85%] shadow-sm">
                        <p className="text-[#1F2937] text-sm leading-relaxed">
                          Parfait ! Vous recevrez <strong>3 devis minimum</strong> de déménageurs locaux à {city.nameCapitalized} dans les prochains jours ✨
                        </p>
                        <p className="text-[#1F2937]/50 text-xs mt-1">10:27</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-20 bg-white rounded-xl shadow-xl px-3 py-2 rotate-6 border border-[#6BCFCF]/30">
                <p className="text-xs font-bold text-[#0F172A]">Locaux</p>
                <p className="text-xs text-[#1E293B]/60">Contrôlés</p>
              </div>

              <div className="absolute -left-4 bottom-32 bg-white rounded-xl shadow-xl px-3 py-2 -rotate-6 border border-[#6BCFCF]/30">
                <p className="text-xs font-bold text-[#0F172A]">Sans démarchage</p>
                <p className="text-xs text-[#1E293B]/60">Gratuit</p>
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
