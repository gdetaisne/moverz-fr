"use client";
import { useEffect, useState } from "react";
import { ClipboardList, MessageSquare, CheckCircle } from "lucide-react";

export default function HowItWorksHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div 
        className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        style={{
          animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
        }}
      >
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-white/60">
            <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
            <li>/</li>
            <li className="text-white">Comment ça marche</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 text-sm font-bold mb-8 shadow-lg shadow-cyan-500/10">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
              Processus en 3 étapes
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
              Comment <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">ça marche</span> ?
            </h1>

            <p className="text-xl text-white/90 mb-10 leading-relaxed font-normal">
              En 3 minutes, vous complétez un dossier guidé et recevez des devis comparables. Simple, rapide, sans démarchage.
            </p>

            {/* CTA moderne */}
            <a
              href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=comment-ca-marche&devis_range=3-5"
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_12px_40px_rgba(6,182,212,0.4)] hover:shadow-[0_16px_56px_rgba(6,182,212,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden min-h-[48px]"
            >
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10">Comparer mes devis</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Right: Quick steps icons */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_4px_16px_rgba(107,207,207,0.05)] hover:shadow-[0_8px_32px_rgba(107,207,207,0.15)] md:hover:scale-[1.02] transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#A8E8E8]/10 shadow-sm">
                <MessageSquare className="w-6 h-6 text-[#6BCFCF]" strokeWidth={2} />
              </div>
              <div>
                <p className="font-semibold text-white">1. Décrivez</p>
                <p className="text-sm text-white/60">Ville, date, type de logement</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_4px_16px_rgba(107,207,207,0.05)] hover:shadow-[0_8px_32px_rgba(107,207,207,0.15)] md:hover:scale-[1.02] transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#A78BFA]/10 shadow-sm">
                <ClipboardList className="w-6 h-6 text-[#8B5CF6]" strokeWidth={2} />
              </div>
              <div>
                <p className="font-semibold text-white">2. Complétez le dossier</p>
                <p className="text-sm text-white/60">Infos standardisées → devis comparables</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_4px_16px_rgba(107,207,207,0.05)] hover:shadow-[0_8px_32px_rgba(107,207,207,0.15)] md:hover:scale-[1.02] transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981]/10 to-[#34D399]/10 shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#10B981]" strokeWidth={2} />
              </div>
              <div>
                <p className="font-semibold text-white">3. Comparez</p>
                <p className="text-sm text-white/60">des devis comparables</p>
              </div>
            </div>
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

