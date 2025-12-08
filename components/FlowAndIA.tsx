"use client";

import { useState, useEffect } from "react";

export default function FlowAndIA() {
  const steps = [
    {
      id: 0,
      title: "Décrivez votre déménagement",
      description: "Adresses, date, type de logement.",
      ia: "L'IA comprend le contexte : distance, contraintes, volume probable.",
    },
    {
      id: 1,
      title: "Envoyez vos photos",
      description: "Quelques photos de vos pièces.",
      ia: "L'IA lit les photos, repère ce qui prend de la place, calcule le volume.",
    },
    {
      id: 2,
      title: "Comparez 5+ devis",
      description: "Devis comparables, même volume.",
      ia: "L'IA prépare un dossier clair pour tous les déménageurs. Même base, même prix.",
    },
  ];

  const [activeId, setActiveId] = useState(0);

  const activeStep = steps.find((s) => s.id === activeId) ?? steps[0];

  // Auto-cycle every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="relative py-20 md:py-32 bg-white">
      <div className="container max-w-5xl">
        {/* Header minimal */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
            Comment ça marche
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-[#0F172A]">
            3 étapes, 3 minutes
          </h2>
          <p className="text-lg text-[#6B7280]">
            L'IA fait le travail. Vous gardez le contrôle.
          </p>
        </div>

        {/* Steps - Design premium */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {steps.map((step) => {
            const isActive = step.id === activeId;
            
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveId(step.id)}
                className="group text-left focus:outline-none"
              >
                <div className="space-y-4">
                  {/* Step number - Clean and minimal */}
                  <div className="flex items-center gap-4">
                    <div 
                      className={`flex items-center justify-center h-12 w-12 rounded-full border-2 transition-all duration-500 ${
                        isActive
                          ? "bg-[#0F172A] border-[#0F172A] text-white scale-110"
                          : "bg-white border-[#E5E7EB] text-[#6B7280] group-hover:border-[#0F172A] group-hover:text-[#0F172A]"
                      }`}
                    >
                      <span className="text-base font-semibold">{step.id + 1}</span>
                    </div>
                    
                    {/* Animated progress line (only for active) */}
                    {isActive && (
                      <div className="flex-1 h-px bg-[#E5E7EB] overflow-hidden">
                        <div 
                          className="h-full bg-[#0F172A]"
                          style={{
                            animation: 'progressLine 4s linear infinite',
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      isActive ? "text-[#0F172A]" : "text-[#6B7280] group-hover:text-[#0F172A]"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* IA explanation - Ultra minimal */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-8 text-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                Sous le capot
              </p>
              <div 
                key={activeId}
                className="transition-opacity duration-300"
              >
                <p className="text-base text-[#0F172A] leading-relaxed">
                  {activeStep.ia}
                </p>
              </div>
              
              {/* Step indicators */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveId(step.id)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      step.id === activeId
                        ? "w-8 bg-[#0F172A]"
                        : "w-1.5 bg-[#E5E7EB] hover:bg-[#6B7280]"
                    }`}
                    aria-label={`Aller à l'étape ${step.id + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
