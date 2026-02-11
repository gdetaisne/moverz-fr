"use client";
import { useEffect, useState } from "react";
import { MessageSquare, ClipboardList, CheckCircle } from "lucide-react";

  const steps = [
    {
    number: "1",
    icon: MessageSquare,
      title: "Décrivez votre déménagement",
    description: "Ville de départ/arrivée, date, type de logement (T2, T3…)",
  },
  {
    number: "2",
    icon: ClipboardList,
      title: "Complétez le dossier",
    description: "Infos standardisées (accès, options…) pour des devis comparables",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Recevez des devis",
    description: "Devis comparables rapidement (sous 5 jours). Vous choisissez le meilleur.",
  },
];

export default function FlowAndIA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Couleurs par étape pour les icônes
  const stepColors = ["text-cyan-600", "text-blue-600", "text-cyan-700"];
  const stepBgColors = ["from-cyan-100 to-cyan-50", "from-blue-100 to-blue-50", "from-cyan-100 to-blue-50"];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-cyan-50/30 to-white overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      
      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-center">
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
                <div className="relative bg-gradient-to-b from-[#F1F5F9] to-[#F8FAFC] rounded-[36px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
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
                        <p className="text-sm font-semibold text-[#0F172A]">Dossier complété</p>
                        <p className="text-xs text-[#1E293B]/60 mt-1">Base identique envoyée à tous</p>
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
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-200/50 backdrop-blur-sm px-5 py-2 text-sm font-bold text-[#0F172A] mb-6">
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
              Comment ça marche
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="block text-[#0F172A]">3 étapes,</span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-600 via-cyan-700 to-blue-700 bg-clip-text text-transparent">
                3 minutes
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10 font-normal">
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
                      <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stepBgColors[index]}`}>
                        <Icon className={`w-7 h-7 ${stepColors[index]}`} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -top-2 -left-2 flex items-center justify-center w-6 h-6 rounded-full bg-[#0F172A] text-white text-xs font-bold shadow-lg">
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
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200/50 backdrop-blur-sm shadow-[0_4px_16px_rgba(6,182,212,0.1)]">
              <p className="text-sm font-bold text-[#0F172A] leading-relaxed">
                Un dossier clair et standardisé pour tous les déménageurs, pour comparer sans surprises.
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
