"use client";
import { useEffect, useState } from "react";
import { Check, Shield, Clock } from "lucide-react";

export default function WhatYouReceive() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#A8E8E8]/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mockup des devis */}
          <div 
            className="relative order-2 lg:order-1"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            {/* Phone mockup with devis list */}
            <div className="relative w-full max-w-[380px] mx-auto">
              {/* iPhone frame */}
              <div className="relative bg-white rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-3 border-[12px] border-[#1F2937]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1F2937] rounded-b-3xl z-10" />

                {/* Screen content */}
                <div className="relative bg-[#F8F9FA] rounded-[36px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                  {/* Header */}
                  <div className="bg-[#0F172A] px-4 py-4 text-white">
                    <p className="text-xs font-medium opacity-70">Vos devis</p>
                    <h3 className="text-lg font-bold mt-1">Paris → Lyon</h3>
                    <p className="text-xs opacity-80 mt-1">T3 • 60m² • 3ᵉ étage avec ascenseur</p>
                  </div>

                  {/* Devis cards */}
                  <div className="p-4 space-y-3">
                    {/* Devis 1 */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E3E5E8]">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-[#0F172A] text-sm">Déménagements Martin</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-xs text-yellow-600">★★★★★</span>
                            <span className="text-xs text-[#1E293B]/60">(487 avis)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-[#0F172A]">1 850€</p>
                          <p className="text-xs text-[#1E293B]/60">TTC</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <Check className="w-4 h-4 text-green-600" />
                        <p className="text-xs text-[#1E293B]/80">Assurance tous risques incluse</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <p className="text-xs text-[#1E293B]/80">Disponible le 15 mars</p>
                      </div>
                    </div>

                    {/* Devis 2 */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E3E5E8]">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-[#0F172A] text-sm">Express Déménagement</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-xs text-yellow-600">★★★★☆</span>
                            <span className="text-xs text-[#1E293B]/60">(312 avis)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-[#0F172A]">1 950€</p>
                          <p className="text-xs text-[#1E293B]/60">TTC</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <Check className="w-4 h-4 text-green-600" />
                        <p className="text-xs text-[#1E293B]/80">Protection standard incluse</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <p className="text-xs text-[#1E293B]/80">Disponible le 12 mars</p>
                      </div>
                    </div>

                    {/* Devis 3 */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E3E5E8]">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-[#0F172A] text-sm">Lyon Trans Services</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-xs text-yellow-600">★★★★★</span>
                            <span className="text-xs text-[#1E293B]/60">(653 avis)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-[#0F172A]">2 100€</p>
                          <p className="text-xs text-[#1E293B]/60">TTC</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <Shield className="w-4 h-4 text-purple-600" />
                        <p className="text-xs text-[#1E293B]/80">Assurance premium incluse</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <p className="text-xs text-[#1E293B]/80">Disponible le 10 mars</p>
                      </div>
                    </div>

                    {/* Badge "2 autres devis" */}
                    <div className="text-center py-3">
                      <p className="text-xs font-medium text-[#1E293B]/60">+ 2 autres devis disponibles</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-[#6BCFCF]/30">
                <p className="text-2xl font-bold text-[#0F172A]">3+ devis</p>
                <p className="text-xs text-[#1E293B]/70">comparables</p>
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
              Ce que vous recevez
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              Des devis détaillés et comparables
            </h2>

            <p className="text-lg text-[#1E293B]/70 leading-relaxed mb-8">
              Grâce aux infos que vous partagez, chaque déménageur reçoit{" "}
              <strong className="text-[#0F172A]">exactement les mêmes informations</strong>.
            </p>

            {/* Verified movers card */}
            <div className="rounded-2xl border border-[#E3E5E8] bg-white p-5 md:p-6 shadow-sm mb-8">
              <h3 className="text-sm font-bold text-[#0F172A] mb-3">Déménageurs sélectionnés</h3>
              <ul className="space-y-2 text-sm text-[#1E293B]/75">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                  Engagés contractuellement sur la légalité (SIRET, licences)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                  Assurance RC Pro et marchandises maintenues à jour
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                  Qualité de service et transparence (devis clairs, délais respectés)
                </li>
              </ul>
              <div className="mt-4 rounded-xl bg-[#A8E8E8]/20 border border-[#6BCFCF]/25 px-4 py-3 text-xs">
                <span className="font-semibold text-[#0F172A]">Objectif : <span className="font-bold">au moins 3 devis</span> rapidement (sous 5 jours, selon disponibilité).</span>
                <br />
                <a href="/verifications-partenaires/" className="text-[#0F172A] hover:text-[#6BCFCF] font-medium underline underline-offset-2">
                  Voir nos critères de sélection →
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10">
                  <Check className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">Même volume, même accès</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Tous les déménageurs estiment sur la base des mêmes informations.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10">
                  <Shield className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">Pros sélectionnés</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Chaque déménageur s'engage contractuellement sur la légalité, l'assurance et la qualité de service.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10">
                  <Clock className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">3 devis minimum comparables</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Vous comparez prix, options et conditions sur un format standardisé.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom reassurance */}
            <div className="mt-8 p-4 rounded-xl bg-[#A8E8E8]/20 border border-[#6BCFCF]/30">
              <p className="text-sm font-medium text-[#0F172A]">
                💬 Votre téléphone reste masqué jusqu'à ce que vous choisissiez un déménageur.
              </p>
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

