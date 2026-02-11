"use client";
import { useState, useEffect } from "react";
import { Clock, Gift, FileCheck } from "lucide-react";

export default function FinalCTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="section relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      
      <div 
        className="relative container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
        }}
      >
        {/* Badge moderne */}
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-200/50 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-[#0F172A] mb-8 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
          Gratuit · Sans démarchage · 0 engagement
        </div>

        {/* Title avec gradient */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
          <span className="block text-[#0F172A]">Prêt à déménager</span>
          <span className="block mt-2 bg-gradient-to-r from-cyan-600 via-cyan-700 to-blue-700 bg-clip-text text-transparent">
            sans stress ?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-12 font-normal max-w-2xl mx-auto">
          1 200+ personnes ont déjà simplifié leur déménagement.
        </p>

        {/* CTA principal moderne */}
        <div className="max-w-md mx-auto mb-12">
          <a
            href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=final-cta&devis_range=3-5"
            className="btn-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Obtenir mes devis
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Trust indicators — Pills uniformes */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="pill">
            <Clock className="w-4 h-4" />
            3 minutes
          </span>
          <span className="pill">
            <Gift className="w-4 h-4" />
            100% gratuit
          </span>
          <span className="pill">
            <FileCheck className="w-4 h-4" />
            Devis comparables
          </span>
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
