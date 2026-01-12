"use client";
import { useEffect, useRef, useState } from "react";

function useInView(ref: React.RefObject<HTMLDivElement | null>, threshold: number = 0.3) {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold }
    );
    
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold, isInView]);
  
  return isInView;
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.3);
  
  const steps = [
    {
      number: "1",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Vous décrivez votre déménagement",
      description: "Adresses, date, type de logement : on va droit au but.",
    },
    {
      number: "2", 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      ),
      title: "Vous envoyez quelques photos",
      description: "L’IA Moverz estime le volume de votre déménagement à partir de vos photos.",
    },
    {
      number: "3",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Vous comparez 3 à 5 devis",
      description: "Même info pour tous les déménageurs : des devis enfin comparables, sans appels forcés.",
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="relative overflow-hidden space-y-10 rounded-3xl bg-white p-8 md:p-12 lg:p-16 text-[#04163a] shadow-sm border border-[#E3E5E8]"
    >
      
      {/* Header avec espacement généreux */}
      <div className="relative space-y-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2B7A78]">
          Processus en 3 étapes
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#04163a] leading-tight">
          Comment ça marche ?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-[#4b5c6b] leading-relaxed max-w-2xl mx-auto font-light">
          En 3 étapes simples, vous préparez votre déménagement sans prise de tête.
        </p>
      </div>

      {/* Cards avec hover lift + animations staggered */}
      <div className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="group relative flex flex-col gap-4 rounded-2xl border border-[#E3E5E8] bg-white p-6 md:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#6BCFCF]/40"
            style={{ animationDelay: `${index * 100 + 400}ms` }}
          >
            
            <div className="relative flex flex-col items-center gap-4">
              {/* Numéro + Pictogramme combinés */}
              <div className="relative">
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6BCFCF]/15 border-2 border-[#6BCFCF]/30 text-[#2B7A78] transition-all duration-200 group-hover:scale-105"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'scale(1)' : 'scale(0.8)',
                    transitionDelay: `${index * 150 + 600}ms`
                  }}
                >
                  {step.icon}
                </div>
                {/* Badge numéro */}
                <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0F172A] text-xs font-bold text-white shadow-sm">
                {step.number}
                </div>
              </div>
              
              <div className="space-y-2 text-center">
                <h3 className="text-lg md:text-xl font-bold text-[#04163a] leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-[#4b5c6b] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA principal */}
      <div className="relative mt-12 flex items-center justify-center text-center">
        <a
          href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=/comment-ca-marche"
          rel="nofollow"
          className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-8 py-4 text-base font-semibold text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          aria-label="Recevez 3 à 5 devis fiables gratuitement"
        >
          <span>Comparez 3 à 5 devis gratuitement</span>
          <span className="text-xl leading-none">→</span>
        </a>
      </div>
    </div>
  );
}

