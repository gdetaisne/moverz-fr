"use client";
import { useState, useEffect } from "react";
import { buildTunnelUrl } from "@/lib/tunnel-url";

export default function FinalCTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#A8E8E8]/20">
      <div 
        className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
        }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-2 text-sm font-semibold text-v4-text mb-8">
          <span className="h-2 w-2 rounded-full bg-v4-accent animate-pulse" />
          Gratuit · Sans démarchage · 0 engagement
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-v4-text mb-6 leading-[1.1]">
          Prêt à déménager
          <br />
          sans stress ?
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-[#1E293B]/60 mb-12 font-light max-w-2xl mx-auto">
          1 200+ personnes ont déjà simplifié leur déménagement.
        </p>

        {/* CTA principal */}
        <div className="max-w-md mx-auto">
          <a
            href={buildTunnelUrl({ from: "final-cta", devisRange: "3-5" })}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-v4-text px-8 py-4 text-base font-semibold text-white shadow-[0_10px_40px_rgba(15,23,42,0.25)] hover:shadow-[0_14px_60px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
              <span>Comparer mes devis</span>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-[#1E293B]/60">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-v4-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>3 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-v4-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>100% gratuit</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-v4-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>des devis comparables</span>
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
