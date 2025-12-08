 "use client";

import { useState, useEffect } from "react";

export default function FlowAndIA() {
  const steps = [
    {
      id: 0,
      title: "Décrivez",
      subtitle: "votre déménagement",
      time: "30 sec",
      text: "Adresses, date, type de logement.",
      ia: "L'IA comprend le contexte : distance, contraintes, volume probable.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 1,
      title: "Envoyez",
      subtitle: "vos photos",
      time: "1 min",
      text: "Quelques photos de vos pièces.",
      ia: "L'IA lit les photos, repère ce qui prend de la place, calcule le volume.",
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
      time: "1 min",
      text: "Devis comparables, même volume.",
      ia: "L'IA prépare un dossier clair pour tous les déménageurs. Même base, même prix.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
  ];

  const [activeId, setActiveId] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const activeStep = steps.find((s) => s.id === activeId) ?? steps[0];

  // Auto-play avec cycle de 4 secondes par étape
  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2; // Incrémente de 2% toutes les 80ms = 4s pour 100%
      });
    }, 80);

    return () => clearInterval(progressInterval);
  }, [isPaused]);

  useEffect(() => {
    if (isPaused) return;
    if (progress >= 100) {
      setActiveId((prev) => (prev + 1) % steps.length);
      setProgress(0);
    }
  }, [progress, isPaused, steps.length]);

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

        {/* Timeline avec auto-play */}
        <div 
          className="relative mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ligne de fond */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-[#E5E7EB] rounded-full" />
          
          {/* Ligne de progression */}
          <div 
            className="hidden md:block absolute top-6 left-0 h-1 bg-[#6BCFCF] rounded-full transition-all duration-300"
            style={{ 
              width: `${(activeId / (steps.length - 1)) * 100 + (progress / (steps.length - 1))}%` 
            }}
          />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step) => {
              const isActive = step.id === activeId;
              const isPassed = step.id < activeId;
              
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => {
                    setActiveId(step.id);
                    setProgress(0);
                  }}
                  className="group text-center focus:outline-none"
                >
                  {/* Icône avec animation */}
                  <div className={`inline-flex items-center justify-center h-14 w-14 rounded-full mb-4 transition-all duration-500 ${
                    isActive
                      ? "bg-[#6BCFCF] text-white scale-110 shadow-lg shadow-[#6BCFCF]/30"
                      : isPassed
                      ? "bg-[#6BCFCF]/20 text-[#6BCFCF] border-2 border-[#6BCFCF]"
                      : "bg-white border-2 border-[#E5E7EB] text-[#6B7280] group-hover:border-[#6BCFCF] group-hover:text-[#6BCFCF]"
                  }`}>
                    {step.icon}
                    
                    {/* Progress ring pour l'étape active */}
                    {isActive && (
                      <svg className="absolute inset-0 h-14 w-14 -rotate-90">
                        <circle
                          cx="28"
                          cy="28"
                          r="26"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeDasharray={`${2 * Math.PI * 26}`}
                          strokeDashoffset={`${2 * Math.PI * 26 * (1 - progress / 100)}`}
                          className="transition-all duration-100"
                          opacity="0.3"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Titre */}
                  <h3 className={`text-base md:text-lg font-bold mb-3 transition-colors ${
                    isActive ? "text-[#0F172A]" : "text-[#6B7280]"
                  }`}>
                    {step.title} <span className="font-normal">{step.subtitle}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6B7280]">
                    {step.text}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bloc IA avec transition */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 md:p-8 text-center relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6BCFCF]/0 via-[#6BCFCF]/10 to-[#6BCFCF]/0" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#6BCFCF]">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm md:text-base text-white leading-relaxed">
                <span className="font-bold text-[#6BCFCF]">IA Moverz :</span>{" "}
                <span key={activeId} className="inline-block animate-fade-in">
                  {activeStep.ia}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Pause indicator */}
        {isPaused && (
          <p className="text-center text-xs text-[#6B7280] mt-4">
            Animation en pause · Cliquez sur une étape pour naviguer
          </p>
        )}
      </div>
    </section>
  );
}


