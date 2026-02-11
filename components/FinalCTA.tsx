"use client";
import { useState, useEffect } from "react";
import { Clock, Gift, FileCheck } from "lucide-react";

export default function FinalCTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
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
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-700 to-blue-700 px-8 py-5 text-base font-bold text-white shadow-[0_12px_40px_rgba(6,182,212,0.35)] hover:shadow-[0_16px_60px_rgba(6,182,212,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
          >
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="relative z-10">Comparer mes devis</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Trust indicators — Pills modernes */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-100/50 transition-all duration-300">
            <Clock className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-[#0F172A]">3 minutes</span>
          </div>
          <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-100/50 transition-all duration-300">
            <Gift className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-[#0F172A]">100% gratuit</span>
          </div>
          <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-100/50 transition-all duration-300">
            <FileCheck className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-[#0F172A]">Devis comparables</span>
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
