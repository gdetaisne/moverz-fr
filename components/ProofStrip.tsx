"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number | null = null;
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(startValue + (end - startValue) * easeProgress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);
  
  return count;
}

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

export default function ProofStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.3);
  
  const stats = [
    {
      value: 1200,
      suffix: "+",
      label: "Clients ont comparé",
      caption: "Déménagements accompagnés depuis 2022",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      value: 4.9,
      suffix: "/5",
      label: "Note moyenne",
      caption: "Avis vérifiés sur dossiers réels",
      isDecimal: true,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      value: 5,
      suffix: "+",
      label: "Devis comparables",
      caption: "Tous basés sur le même volume",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      highlight: true,
    },
    {
      value: 100,
      suffix: "%",
      label: "Service gratuit",
      caption: "Sans engagement, sans frais cachés, sans spam",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <div 
      ref={sectionRef}
      className="relative overflow-hidden space-y-10 rounded-3xl bg-gradient-to-br from-white via-[#F8F9FA] to-[#F0F4F8] p-8 md:p-12 lg:p-16 text-[var(--color-text)] shadow-[0_32px_90px_rgba(0,0,0,0.08)] border border-[var(--color-border)]"
    >
      {/* Halos lumineux subtils (version claire) */}
      <div 
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,207,207,0.12),_transparent_70%)] blur-3xl transition-transform duration-1000"
        style={{ transform: isInView ? 'translate(0, 0)' : 'translate(20px, -20px)' }}
      />
      <div 
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.08),_transparent_70%)] blur-3xl transition-transform duration-1000"
        style={{ transform: isInView ? 'translate(0, 0)' : 'translate(-20px, 20px)' }}
      />
      
      {/* Header simplifié et centré */}
      <div className="relative text-center space-y-4">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-turquoise">
          Pourquoi Moverz
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] leading-tight">
          Pourquoi des milliers de déménagements passent par Moverz
        </h2>
        <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto font-light">
          Quelques chiffres issus de dossiers réellement comparés en France.
        </p>
      </div>

      {/* Stats cards avec counter animations + pictogrammes */}
      <div className="relative grid gap-6 md:grid-cols-4 md:gap-6">
        {stats.map((stat, index) => {
          const count = useCountUp(
            stat.isDecimal ? Math.round(stat.value * 10) : Math.abs(stat.value),
            2000,
            isInView
          );
          
          const displayValue = stat.isDecimal 
            ? (count / 10).toFixed(1).replace('.', ',')
            : stat.value < 0 
              ? `-${count}`
              : count;
          
          return (
            <div
              key={stat.label}
              className={`group relative rounded-3xl border p-6 md:p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] motion-safe:animate-fade-up-soft ${
                stat.highlight 
                  ? 'border-brand-turquoise/40 bg-brand-turquoise/5 hover:border-brand-turquoise/60 hover:shadow-[0_20px_60px_rgba(107,207,207,0.25)]' 
                  : 'border-[var(--color-border)] bg-white hover:border-brand-turquoise/30'
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Glow effect au hover */}
              <div className="absolute inset-0 rounded-3xl bg-brand-turquoise/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
              
              <div className="relative space-y-4">
                {/* Pictogramme SVG */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                  stat.highlight
                    ? 'bg-brand-turquoise/20 border-brand-turquoise/40 text-brand-turquoise group-hover:shadow-[0_0_20px_rgba(107,207,207,0.4)]'
                    : 'bg-[#F8F9FA] border-[var(--color-border)] text-[var(--color-text-secondary)] group-hover:border-brand-turquoise/40'
                }`}>
                  {stat.icon}
      </div>

                <div className="space-y-2">
                  <div className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">
              {stat.label}
            </div>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl md:text-5xl font-bold leading-none transition-all duration-300 ${
                      stat.highlight 
                        ? 'text-brand-turquoise'
                        : 'text-[var(--color-text)] group-hover:text-brand-turquoise'
                    }`}>
                      {displayValue}
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-[var(--color-text-secondary)] leading-none">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{stat.caption}</p>
                </div>
              </div>
            </div>
          );
        })}
          </div>
      
      {/* Pills réassurance en bas */}
      <div className="relative flex flex-wrap items-center justify-center gap-3 pt-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2.5 text-xs md:text-sm font-semibold text-[var(--color-text)] shadow-sm hover:border-brand-turquoise/40 hover:bg-[#F8F9FA] transition-all duration-300">
          <span className="h-2 w-2 rounded-full bg-brand-turquoise animate-pulse" />
          Déménageurs contrôlés
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2.5 text-xs md:text-sm font-semibold text-[var(--color-text)] shadow-sm hover:border-brand-turquoise/40 hover:bg-[#F8F9FA] transition-all duration-300">
          <span className="h-2 w-2 rounded-full bg-brand-turquoise animate-pulse" />
          Dossier anonyme
        </span>
      </div>
    </div>
  );
}

