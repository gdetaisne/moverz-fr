"use client";
import { useEffect, useState } from "react";
import { AlertTriangle, TrendingDown, Building2, Shield } from "lucide-react";

export default function MarketRisks() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mockup dashboard alertes */}
          <div 
            className="relative order-2 lg:order-1"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            {/* Dashboard mockup */}
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 border border-[#E3E5E8]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E3E5E8]">
                  <div>
                    <p className="text-xs text-[#1E293B]/60 font-medium">Secteur déménagement</p>
                    <p className="text-lg font-bold text-[#0F172A]">Analyse des risques</p>
                  </div>
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>

                {/* Stat cards */}
                <div className="space-y-4">
                  {/* Stat 1 */}
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-red-900 uppercase">Anomalies DGCCRF</p>
                      <div className="px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold">
                        Élevé
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-red-600 mb-1">64%</p>
                    <p className="text-xs text-red-900/70">des entreprises contrôlées</p>
                    <p className="text-xs text-[#1E293B]/50 mt-2">Source : DGCCRF 2023</p>
                  </div>

                  {/* Stat 2 */}
                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-orange-900 uppercase">Faillites</p>
                      <TrendingDown className="w-4 h-4 text-orange-600" />
                    </div>
                    <p className="text-4xl font-bold text-orange-600 mb-1">257</p>
                    <p className="text-xs text-orange-900/70">sur ~1 300 établissements (2024)</p>
                    <p className="text-xs text-[#1E293B]/50 mt-2">Source : CSD 2024</p>
                  </div>

                  {/* Stat 3 */}
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-gray-900 uppercase">Structure du marché</p>
                      <Building2 className="w-4 h-4 text-gray-600" />
                    </div>
                    <p className="text-4xl font-bold text-gray-900 mb-1">90%</p>
                    <p className="text-xs text-gray-900/70">&lt; 20 salariés (difficile à évaluer)</p>
                    <p className="text-xs text-[#1E293B]/50 mt-2">Source : Étude marché</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Explications */}
          <div 
            className="order-1 lg:order-2"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-4 py-1.5 text-sm font-semibold text-[#0F172A] mb-6">
              <span className="h-2 w-2 rounded-full bg-brand-turquoise" />
              Les chiffres du secteur
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              Un marché{" "}
              <span className="text-red-500">à risque</span>
            </h2>

            <p className="text-lg text-[#1E293B]/70 leading-relaxed mb-8">
              Le déménagement est l'un des secteurs les plus problématiques pour les consommateurs. Voici pourquoi.
            </p>

            <div className="space-y-6 mb-10">
              {/* Problem 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                  <AlertTriangle className="w-5 h-5 text-red-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">64% d'anomalies détectées</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Enquête DGCCRF 2023 : plus de 6 entreprises sur 10 présentent des problèmes.
                  </p>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
                  <TrendingDown className="w-5 h-5 text-orange-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">257 faillites en 2024</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Comment savoir si votre déménageur sera encore là le jour J ?
                  </p>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  <Building2 className="w-5 h-5 text-gray-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">90% de petites structures</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Moins de 20 salariés, difficile d'évaluer leur fiabilité.
                  </p>
                </div>
              </div>
            </div>

            {/* Protection card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-turquoise/10 to-[#A8E8E8]/10 border border-brand-turquoise/30">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-[#0F172A]" />
                <p className="font-bold text-[#0F172A]">Moverz vous protège</p>
              </div>
              <p className="text-sm text-[#1E293B]/70 mb-3">
                Nous analysons chaque entreprise avec des outils spécialisés :
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium text-[#0F172A] bg-white px-3 py-1 rounded-full">✓ Historique litiges</span>
                <span className="text-xs font-medium text-[#0F172A] bg-white px-3 py-1 rounded-full">✓ Situation financière</span>
                <span className="text-xs font-medium text-[#0F172A] bg-white px-3 py-1 rounded-full">✓ Évolution</span>
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

