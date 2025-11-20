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
      title: "Créez votre dossier unique",
      description: "Quelques infos clés, un seul dossier pour tous les déménageurs.",
    },
    {
      number: "2", 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      ),
      title: "Nous filtrons les déménageurs",
      description: "Seuls les pros fiables, bien notés et assurés reçoivent votre demande.",
    },
    {
      number: "3",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Vous comparez 5+ devis fiables",
      description: "Même volume, mêmes options : des devis comparables, sans spam.",
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="relative overflow-hidden space-y-10 rounded-3xl bg-gradient-to-br from-white via-[#F8F9FA] to-[#F0F4F8] p-8 md:p-12 lg:p-16 text-[#04163a] shadow-[0_32px_90px_rgba(0,0,0,0.08)] border border-[#E3E5E8]"
    >
      {/* Halos lumineux subtils (version claire) */}
      <div 
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,207,207,0.12),_transparent_70%)] blur-3xl transition-transform duration-1000"
        style={{ transform: isInView ? 'translate(-50%, 0)' : 'translate(-50%, -30px)' }}
      />
      <div 
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.08),_transparent_70%)] blur-3xl transition-transform duration-1000"
        style={{ transform: isInView ? 'translate(0, 0)' : 'translate(30px, 30px)' }}
      />
      
      {/* Header avec espacement généreux */}
      <div className="relative space-y-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2B7A78]">
          Processus en 3 étapes
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#04163a] leading-tight">
          Comment fonctionne le comparateur ?
      </h2>
        <p className="text-base md:text-lg lg:text-xl text-[#4b5c6b] leading-relaxed max-w-2xl mx-auto font-light">
          Un dossier unique, des pros filtrés, des devis enfin comparables.
        </p>
      </div>

      {/* Cards avec hover lift + animations staggered */}
      <div className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="group relative flex flex-col gap-4 rounded-3xl border border-[#E3E5E8] bg-white p-6 md:p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-[#6BCFCF]/40 motion-safe:animate-fade-up-soft"
            style={{ animationDelay: `${index * 100 + 400}ms` }}
          >
            {/* Glow effect au hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6BCFCF]/0 to-[#4FB8B8]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
            
            <div className="relative flex flex-col items-center gap-4">
              {/* Numéro + Pictogramme combinés */}
              <div className="relative">
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6BCFCF]/20 to-[#4FB8B8]/30 border-2 border-[#6BCFCF]/30 text-[#2B7A78] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(107,207,207,0.4)]"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'scale(1)' : 'scale(0.8)',
                    transitionDelay: `${index * 150 + 600}ms`
                  }}
                >
                  {step.icon}
                </div>
                {/* Badge numéro */}
                <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#2B7A78] text-xs font-bold text-white shadow-lg">
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
      
      {/* CTAs avec espacement généreux */}
      <div className="relative mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-center">
        <a
          href="/choisir-ville/"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-base md:text-lg font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          aria-label="Recevez 5+ devis fiables gratuitement"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          <span className="relative">Recevez 5+ devis fiables gratuitement</span>
        </a>
        <a 
          href="/comment-ca-marche/" 
          className="group inline-flex items-center gap-2 rounded-2xl border-2 border-[#E3E5E8] bg-white px-6 py-3 text-sm md:text-base font-medium text-[#04163a] hover:bg-[#F8F9FA] hover:border-[#6BCFCF]/40 transition-all duration-300"
        >
          <span>Voir le détail du fonctionnement</span>
          <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
}

