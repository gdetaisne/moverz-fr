"use client";
import { buildTunnelUrl } from "@/lib/tunnel-url";
import { useState, useEffect } from "react";
import { Clock, Gift, FileCheck } from "lucide-react";

export default function FinalCTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--color-bg)" }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      
      <div 
        className="relative container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
        }}
      >
        {/* Badge moderne */}
        <div className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-5 py-2.5 text-sm font-semibold mb-8 shadow-sm" style={{ background: "rgba(14,165,166,0.1)", border: "1px solid rgba(14,165,166,0.2)", color: "var(--color-text)" }}>
          <span className="relative inline-flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--color-accent)" }} />
            <span className="relative inline-flex rounded-full h-2 w-2 shadow-[0_0_12px_rgba(14,165,166,0.8)]" style={{ background: "var(--color-accent)" }} />
          </span>
          Gratuit · Sans démarchage · 0 engagement
        </div>

        {/* Title avec gradient */}
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-[1.1]">
          <span className="block" style={{ color: "var(--color-text)" }}>Prêt à déménager</span>
          <span className="block mt-2" style={{ color: "var(--color-accent)" }}>
            sans stress ?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl mb-12 font-normal max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
          1 200+ personnes ont déjà simplifié leur déménagement.
        </p>

        {/* CTA principal moderne */}
        <div className="max-w-md mx-auto mb-12">
          <a
            href={buildTunnelUrl({ from: "final-cta", devisRange: "3-5" })}
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-5 text-base font-bold text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
            style={{ background: "var(--color-accent)", boxShadow: "0 4px 16px rgba(14,165,166,0.3)" }}
          >
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="relative z-10">Comparer mes devis</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ background: "var(--color-surface)" }} />
          </a>
        </div>

        {/* Trust indicators — Pills modernes */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300" style={{ background: "rgba(255,255,255,0.8)", border: "1px solid var(--color-border)" }}>
            <Clock className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: "var(--color-accent)" }} />
            <span className="font-medium" style={{ color: "var(--color-text)" }}>3 minutes</span>
          </div>
          <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300" style={{ background: "rgba(255,255,255,0.8)", border: "1px solid var(--color-border)" }}>
            <Gift className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: "var(--color-accent)" }} />
            <span className="font-medium" style={{ color: "var(--color-text)" }}>100% gratuit</span>
          </div>
          <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300" style={{ background: "rgba(255,255,255,0.8)", border: "1px solid var(--color-border)" }}>
            <FileCheck className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: "var(--color-accent)" }} />
            <span className="font-medium" style={{ color: "var(--color-text)" }}>Devis comparables</span>
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
