"use client";

import { useEffect, useState } from "react";
import { Clock, Check, DollarSign, Sparkles } from "lucide-react";

type CityStatsProps = {
  cityName: string;
};

export function CityStats({ cityName }: CityStatsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mockup dashboard */}
          <div 
            className="relative order-2 lg:order-1"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 border border-[#E3E5E8]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E3E5E8]">
                  <div>
                    <p className="text-xs text-[#1E293B]/60 font-medium">Votre déménagement</p>
                    <p className="text-lg font-bold text-[#0F172A]">Paris → {cityName}</p>
                  </div>
                  <Sparkles className="w-6 h-6 text-[#6BCFCF]" />
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#1E293B]/70 font-medium">Progression</span>
                    <span className="text-[#0F172A] font-bold">66%</span>
                  </div>
                  <div className="w-full h-2 bg-[#F8F9FA] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#6BCFCF] to-[#A8E8E8] rounded-full" style={{ width: '66%' }} />
                  </div>
                  <p className="text-xs text-[#1E293B]/60 mt-1">3 étapes</p>
                </div>

                {/* Info grid */}
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-[#F8F9FA]">
                    <p className="text-xs text-[#1E293B]/60 mb-1">Infos envoyées</p>
                    <p className="text-sm font-semibold text-[#0F172A]">T3 • 60m² • 3ᵉ étage</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8F9FA]">
                    <p className="text-xs text-[#1E293B]/60 mb-1">Dossier complété</p>
                    <p className="text-sm font-semibold text-[#0F172A]">Base identique envoyée à tous</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8F9FA]">
                    <p className="text-xs text-[#1E293B]/60 mb-1">5 déménageurs contactés</p>
                    <p className="text-sm font-semibold text-[#0F172A]">Réponse sous 48-72h</p>
                  </div>
                </div>

                {/* CTA button */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#A8E8E8]/10 border border-[#6BCFCF]/30 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                    <p className="text-sm font-bold text-green-900">Dossier envoyé</p>
                  </div>
                  <p className="text-xs text-[#1E293B]/70">Vous serez notifié par WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Explications */}
          <div 
            className="order-1 lg:order-2"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-sm font-semibold text-[#0F172A] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
              Moverz à {cityName}
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              Ça marche à{" "}
              <span className="text-[#6BCFCF]">{cityName}</span> aussi
            </h2>

            <p className="text-lg text-[#1E293B]/70 leading-relaxed mb-8">
              Même processus, mêmes garanties, déménageurs locaux vérifiés.
            </p>

            <div className="space-y-5">
              {/* Stat 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10">
                  <Clock className="w-6 h-6 text-[#0F172A]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">5 jours</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Temps moyen de réponse pour recevoir vos devis
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#6BCFCF]/10 border border-[#6BCFCF]/30">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#0F172A]">
                  <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">des devis comparables</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Tous basés sur le même dossier (infos + détails)
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10">
                  <DollarSign className="w-6 h-6 text-[#0F172A]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">0€</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Gratuit pour vous, payé par les déménageurs
                  </p>
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
