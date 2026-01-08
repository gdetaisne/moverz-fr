"use client";
import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Minus, AlertCircle, CheckCircle } from "lucide-react";

export default function CreditsafeScoring() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Explications */}
          <div 
            className="order-2 lg:order-1"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-sm font-semibold text-[#0F172A] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
              Exclusivité Moverz
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              Ce qu'aucun comparateur ne vous montre
            </h2>

            <p className="text-lg text-[#1E293B]/70 leading-relaxed mb-8">
              Le prix ne fait pas tout. Nous analysons chaque déménageur avec des{" "}
              <strong className="text-[#0F172A]">outils spécialisés</strong> (Creditsafe, registres publics).
            </p>

            <div className="space-y-5">
              {/* Reco A */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">✓ Déménageur A</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Score 78/100 (↑), 0 litige, bénéficiaire depuis 3 ans → Le plus fiable
                  </p>
                </div>
              </div>

              {/* Attention B */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-200">
                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">⚠ Déménageur B</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Score 52/100 (↓), pertes récentes → Fragile, négociez bien les conditions
                  </p>
                </div>
              </div>

              {/* Vigilance C */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">⚠ Déménageur C</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Score 71/100, mais 1 litige avec condamnation (2023) → Vigilance
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#1E293B]/60 mt-6 text-center lg:text-left">
              Données Creditsafe • Mise à jour mensuelle • Exemple illustratif
            </p>
          </div>

          {/* Right: Mockup scoring app */}
          <div 
            className="relative order-1 lg:order-2"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
            }}
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-[#E3E5E8]">
                {/* Header */}
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] px-6 py-5 text-white">
                  <p className="text-xs font-semibold opacity-70 mb-1">Comparaison Creditsafe</p>
                  <p className="text-lg font-bold">3 déménageurs analysés</p>
                </div>

                {/* Scores */}
                <div className="p-6 space-y-4">
                  {/* A - Green */}
                  <div className="p-4 rounded-xl bg-green-50 border-2 border-green-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-[#0F172A]">Déménageur A</p>
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-green-600">78</div>
                      <div className="flex-1">
                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: '78%' }} />
                        </div>
                        <p className="text-xs text-green-900 mt-1">75 → 78 (↑)</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs font-medium bg-green-100 text-green-900 px-2 py-1 rounded">0 litige</span>
                      <span className="text-xs font-medium bg-green-100 text-green-900 px-2 py-1 rounded">Bénéficiaire</span>
                    </div>
                  </div>

                  {/* B - Orange */}
                  <div className="p-4 rounded-xl bg-orange-50 border-2 border-orange-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-[#0F172A]">Déménageur B</p>
                      <TrendingDown className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-orange-600">52</div>
                      <div className="flex-1">
                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: '52%' }} />
                        </div>
                        <p className="text-xs text-orange-900 mt-1">68 → 52 (↓)</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs font-medium bg-orange-100 text-orange-900 px-2 py-1 rounded">Pertes récentes</span>
                    </div>
                  </div>

                  {/* C - Yellow */}
                  <div className="p-4 rounded-xl bg-yellow-50 border-2 border-yellow-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-[#0F172A]">Déménageur C</p>
                      <Minus className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-gray-900">71</div>
                      <div className="flex-1">
                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                          <div className="h-full bg-gray-500 rounded-full" style={{ width: '71%' }} />
                        </div>
                        <p className="text-xs text-gray-900 mt-1">71 → 71 (=)</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs font-medium bg-red-100 text-red-900 px-2 py-1 rounded">1 litige (2023)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom explanation */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#E3E5E8]">
            <p className="text-sm font-semibold text-[#0F172A] mb-2">
              Pourquoi personne d'autre ne le fait ?
            </p>
            <p className="text-[#1E293B]/70 text-sm">
              Coût élevé, complexité d'accès aux données, et surtout : conflit d'intérêt. Difficile de noter financièrement un client qui vous paie.
            </p>
            <a
              href="/blog/eviter-arnaques-demenagement/"
              className="inline-block mt-4 text-[#6BCFCF] text-sm font-medium hover:text-[#0F172A] transition-colors"
            >
              → Lire notre guide complet sur les arnaques au déménagement
            </a>
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

