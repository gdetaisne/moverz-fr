"use client";
import { useEffect, useState } from "react";
import { MessageSquare, Camera, CheckCircle } from "lucide-react";

  const steps = [
    {
    number: "1",
    icon: MessageSquare,
      title: "Décrivez votre déménagement",
    description: "Ville de départ/arrivée, date, type de logement (T2, T3…)",
  },
  {
    number: "2",
    icon: Camera,
      title: "Envoyez vos photos",
    description: "Toutes vos pièces : l'IA analyse le volume et prépare votre dossier",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Recevez 3 à 5 devis",
    description: "Devis comparables rapidement (souvent sous 48h). Vous choisissez le meilleur.",
  },
];

export default function FlowAndIA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mockup timeline */}
          <div 
            className="relative order-2 lg:order-1"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            {/* Phone mockup with timeline */}
            <div className="relative w-full max-w-[360px] mx-auto">
              {/* iPhone frame */}
              <div className="relative bg-white rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-3 border-[12px] border-[#1F2937]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1F2937] rounded-b-3xl z-10" />

                {/* Screen content */}
                <div className="relative bg-gradient-to-b from-[#F8F9FA] to-white rounded-[36px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                  {/* Header */}
                  <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] px-5 py-6 text-white">
                    <p className="text-sm font-semibold">Votre déménagement</p>
                    <p className="text-xs opacity-70 mt-1">Paris → Lyon • 15 mars 2025</p>
                  </div>

                  {/* Timeline */}
                  <div className="p-5 space-y-5">
                    {/* Step 1 - Done */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-sm font-semibold text-[#0F172A]">Infos envoyées</p>
                        <p className="text-xs text-[#1E293B]/60 mt-1">T3 • 60m² • 3ᵉ étage</p>
                      </div>
                    </div>

                    {/* Step 2 - Done */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-sm font-semibold text-[#0F172A]">7 photos envoyées</p>
                        <p className="text-xs text-[#1E293B]/60 mt-1">IA : ~45m³ estimés</p>
                      </div>
                    </div>

                    {/* Step 3 - In progress */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#6BCFCF]/20 border-2 border-[#6BCFCF]">
                        <div className="w-2 h-2 rounded-full bg-[#6BCFCF] animate-pulse" />
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-sm font-semibold text-[#0F172A]">5 déménageurs contactés</p>
                        <p className="text-xs text-[#1E293B]/60 mt-1">Réponse sous 48-72h</p>
                      </div>
                    </div>

                    {/* Progress card */}
                    <div className="mt-6 p-4 rounded-xl bg-[#6BCFCF]/10 border border-[#6BCFCF]/30">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-semibold text-[#0F172A]">Progression</p>
                        <p className="text-xs font-semibold text-[#6BCFCF]">66%</p>
                      </div>
                      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6BCFCF] to-[#A8E8E8] rounded-full" style={{ width: '66%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-[#6BCFCF]/30">
                <p className="text-2xl font-bold text-[#0F172A]">3</p>
                <p className="text-xs text-[#1E293B]/70">étapes</p>
              </div>
            </div>
          </div>

          {/* Right: Steps */}
          <div 
            className="order-1 lg:order-2"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-sm font-semibold text-[#0F172A] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
              Comment ça marche
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
            3 étapes, 3 minutes
          </h2>

            <p className="text-lg text-[#1E293B]/70 leading-relaxed mb-10">
              L'IA fait le travail, vous gardez le contrôle.
          </p>

            {/* Steps list */}
            <div className="space-y-6">
          {steps.map((step, index) => {
                const Icon = step.icon;
            return (
                  <div key={index} className="flex items-start gap-5">
                    {/* Number + Icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#A8E8E8]/10">
                        <Icon className="w-7 h-7 text-[#0F172A]" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -top-2 -left-2 flex items-center justify-center w-6 h-6 rounded-full bg-[#0F172A] text-white text-xs font-bold">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#1E293B]/70 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
            );
          })}
        </div>

            {/* Bottom reassurance */}
            <div className="mt-8 p-4 rounded-xl bg-[#A8E8E8]/20 border border-[#6BCFCF]/30">
              <p className="text-sm font-medium text-[#0F172A]">
                🤖 L'IA analyse vos photos et prépare un dossier clair pour tous les déménageurs.
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
