"use client";
import { useState, useEffect } from "react";
import WhatsAppCTA from "./WhatsAppCTA";

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
        <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-semibold text-[#0F172A] mb-8">
          <span className="h-2 w-2 rounded-full bg-[#6BCFCF] animate-pulse" />
          Gratuit · Sans démarchage · 0 engagement
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-[1.1]">
          Prêt à déménager
          <br />
          sans stress ?
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-[#1E293B]/60 mb-12 font-light max-w-2xl mx-auto">
          1 200+ personnes ont déjà simplifié leur déménagement.
        </p>

        {/* WhatsApp CTA */}
        <div className="max-w-md mx-auto">
          <WhatsAppCTA source="final-cta" />
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-[#1E293B]/60">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>3 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>100% gratuit</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>3 devis minimum comparables</span>
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
