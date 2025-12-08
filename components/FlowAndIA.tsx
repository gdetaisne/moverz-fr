 "use client";

import { useState } from "react";

export default function FlowAndIA() {
  const steps = [
    {
      id: 0,
      title: "Décrivez",
      subtitle: "Votre déménagement",
      text: "Adresses, date, type de logement. 30 secondes.",
      ia: "L'IA Moverz comprend le contexte de votre déménagement (distance, contraintes, volume probable).",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 1,
      title: "Envoyez",
      subtitle: "Vos photos",
      text: "Quelques photos de vos pièces avec votre téléphone. 1 minute.",
      ia: "Elle lit vos photos, repère ce qui prend de la place et affine l'estimation de volumétrie.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Comparez",
      subtitle: "5+ devis",
      text: "Des devis enfin comparables, basés sur le même volume. 1 minute.",
      ia: "Elle prépare un dossier clair que tous les déménageurs utilisent pour chiffrer sur la même base.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
  ];

  const [activeId, setActiveId] = useState(0);
  const activeStep = steps.find((s) => s.id === activeId) ?? steps[0];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white">
      <div className="container max-w-6xl relative">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            Comment ça marche
          </div>
          <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-[#0F172A]">
            3 minutes pour simplifier<br />
            tout votre déménagement
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
            L'IA fait le travail ennuyeux. Vous gardez le contrôle.
          </p>
        </div>

        {/* Timeline horizontale épurée */}
        <div className="relative mb-12">
          {/* Ligne de connexion */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-[#E5E7EB]" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveId(step.id)}
                className="group text-center focus:outline-none"
              >
                {/* Numéro / Icône */}
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-full mb-4 transition-all ${
                  step.id === activeId
                    ? "bg-[#6BCFCF] text-white scale-110"
                    : "bg-white border-2 border-[#E5E7EB] text-[#6B7280] group-hover:border-[#6BCFCF] group-hover:text-[#6BCFCF]"
                }`}>
                  {step.icon}
                </div>

                {/* Titre */}
                <h3 className={`text-lg md:text-xl font-bold mb-2 transition-colors ${
                  step.id === activeId ? "text-[#0F172A]" : "text-[#6B7280] group-hover:text-[#0F172A]"
                }`}>
                  {step.title} {step.subtitle}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B7280]">
                  {step.text}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Bloc IA - Version simplifiée */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] px-6 py-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#6BCFCF]">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-sm md:text-base text-[#0F172A]">
              <span className="font-semibold">IA Moverz :</span> {activeStep.ia}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


