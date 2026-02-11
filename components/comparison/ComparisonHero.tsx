"use client";
import { useEffect, useState } from "react";

export default function ComparisonHero() {
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
            <li className="text-white">Comparateur</li>
          </ol>
        </nav>

        <div className="text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-brand-turquoise" />
            Guide comparatif
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1]">
            Comparateur de Déménagement : Guide Complet 2026
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Moverz vs autres comparateurs vs contact direct : 
            <strong className="text-white"> 5 critères clés pour choisir</strong> 
            (Creditsafe, devis comparables, anonymat, IA volumétrie, gratuité).
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            {[
              "Vérifications Creditsafe",
              "Devis comparables (IA)",
              "Dossier anonyme",
              "Jusqu'à 5 devis"
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span>
                <span>{label}</span>
              </div>
            ))}
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

