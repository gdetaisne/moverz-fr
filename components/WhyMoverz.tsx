"use client";
import { useEffect, useState } from "react";
import { Sparkles, Check, Smartphone, Shield, TrendingUp } from "lucide-react";

export default function WhyMoverz() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Section unifiée: Pourquoi Moverz change tout */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        {/* Gradient orbs for depth */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-turquoise/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-turquoise/10 rounded-full blur-[120px]" />
        
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header central */}
          <div 
            className="text-center mb-12 md:mb-16"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 text-sm font-bold text-white mb-6 shadow-lg shadow-brand-turquoise/10">
              <span className="relative inline-flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-turquoise opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-turquoise shadow-[0_0_12px_rgba(107,207,207,0.8)]" />
              </span>
              Pourquoi ça change tout
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl mx-auto">
              Le seul comparateur qui vérifie{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-turquoise to-[#A8E8E8]">
                la solidité des entreprises
              </span>
            </h2>
          </div>

          {/* Hero card: Creditsafe verification */}
          <div 
            className="mb-8 md:mb-12"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
            }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-turquoise/15 via-brand-turquoise/5 to-transparent backdrop-blur-sm border-2 border-brand-turquoise/40 shadow-[0_8px_32px_rgba(107,207,207,0.2)]">
              {/* Glow effects */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-turquoise/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-turquoise/10 rounded-full blur-3xl" />
              
              <div className="relative p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left: Content */}
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-brand-turquoise mb-6 border border-brand-turquoise/30">
                      <Shield className="w-3 h-3" />
                      EXCLUSIVITÉ MOVERZ
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      Vérification Creditsafe
                    </h3>

                    <p className="text-lg text-white/80 leading-relaxed mb-6">
                      <span className="text-white font-semibold">Aucun autre comparateur ne le fait</span> : 
                      on vérifie la santé financière de chaque déménageur avant de vous le recommander.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-turquoise/30 flex items-center justify-center">
                          <Check className="w-4 h-4 text-brand-turquoise" strokeWidth={3} />
                        </div>
                        <span className="text-white/90">Score de solvabilité en temps réel</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-turquoise/30 flex items-center justify-center">
                          <Check className="w-4 h-4 text-brand-turquoise" strokeWidth={3} />
                        </div>
                        <span className="text-white/90">Historique des litiges et jugements</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-turquoise/30 flex items-center justify-center">
                          <Check className="w-4 h-4 text-brand-turquoise" strokeWidth={3} />
                        </div>
                        <span className="text-white/90">Bilans financiers des 3 dernières années</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Visual mockup */}
                  <div className="relative">
                    <div className="relative w-full max-w-[340px] mx-auto lg:ml-auto">
                      {/* iPhone mockup compact */}
                      <div className="relative bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(107,207,207,0.3)] p-2.5 border-[12px] border-[#0F172A]">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[var(--color-bg-dark)] rounded-b-2xl z-10" />
                        
                        {/* Screen */}
                        <div className="relative bg-[#F8F9FA] rounded-[2rem] overflow-hidden h-[500px]">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-brand-turquoise to-[#A8E8E8] px-5 py-3 text-[var(--color-text)]">
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4" />
                              <p className="text-xs font-bold">Vérification Creditsafe</p>
                            </div>
                          </div>

                          <div className="p-5 space-y-3">
                            {/* Score card */}
                            <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-green-200">
                              <p className="text-xs text-[var(--color-text-secondary)]/60 mb-1">Score de solvabilité</p>
                              <div className="flex items-baseline gap-2 mb-2">
                                <p className="text-3xl font-bold text-green-600">85</p>
                                <p className="text-sm text-[var(--color-text-secondary)]/60">/100</p>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <div className="flex-1 h-2 rounded-full bg-green-100">
                                  <div className="h-full w-[85%] rounded-full bg-green-500" />
                                </div>
                              </div>
                            </div>

                            {/* Litiges */}
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[var(--color-border)]">
                              <div className="flex items-center justify-between mb-2">
                                <p className="text-xs font-semibold text-[var(--color-text)]">Historique litiges</p>
                                <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                              </div>
                              <p className="text-xs text-green-600 font-medium">✓ Aucun litige en cours</p>
                            </div>

                            {/* Bilans */}
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-[var(--color-border)]">
                              <p className="text-xs font-semibold text-[var(--color-text)] mb-2">Chiffre d'affaires</p>
                              <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-[var(--color-text-secondary)]/60">2023</span>
                                  <span className="font-semibold text-[var(--color-text)]">1.2M€</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-[var(--color-text-secondary)]/60">2022</span>
                                  <span className="font-semibold text-[var(--color-text)]">980K€</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-[var(--color-text-secondary)]/60">2021</span>
                                  <span className="font-semibold text-[var(--color-text)]">850K€</span>
                                </div>
                              </div>
                              <div className="mt-3 pt-3 border-t border-[var(--color-border)]">
                                <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
                                  <TrendingUp className="w-3 h-3" />
                                  <span>Croissance +41% sur 2 ans</span>
                                </div>
                              </div>
                            </div>

                            {/* Badge confiance */}
                            <div className="bg-gradient-to-r from-green-50 to-brand-turquoise/10 rounded-xl p-3 border border-green-200 text-center">
                              <p className="text-xs font-bold text-green-900">
                                ✓ Entreprise de confiance
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating badge */}
                      <div className="absolute -right-4 top-16 bg-white rounded-xl shadow-2xl px-3 py-2 border-2 border-brand-turquoise rotate-6">
                        <p className="text-[10px] text-[var(--color-text-secondary)]/70 font-medium">Données</p>
                        <p className="text-lg font-bold text-brand-turquoise">Certifiées</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary features: 2 cards side by side */}
          <div 
            className="grid md:grid-cols-2 gap-6 md:gap-8"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.4s both' : 'none',
            }}
          >
            {/* Card 1: Dossier standardisé */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 shadow-[0_4px_16px_rgba(107,207,207,0.05)] hover:bg-white/10 hover:border-brand-turquoise/50 hover:shadow-[0_8px_32px_rgba(107,207,207,0.15)] md:hover:scale-[1.02] transition-all duration-300">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-turquoise/20 to-brand-turquoise/5 border border-brand-turquoise/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-brand-turquoise" strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Dossier standardisé
                </h3>

                <p className="text-white/70 leading-relaxed mb-4">
                  On standardise les informations clés (adresses, date, accès, options) pour que les déménageurs chiffrent
                  sur <span className="text-brand-turquoise font-semibold">la même base</span>.
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  <span>Tous partent de la même base</span>
                </div>
              </div>
            </div>

            {/* Card 2: Suivi simple */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 shadow-[0_4px_16px_rgba(107,207,207,0.05)] hover:bg-white/10 hover:border-brand-turquoise/50 hover:shadow-[0_8px_32px_rgba(107,207,207,0.15)] md:hover:scale-[1.02] transition-all duration-300">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-turquoise/20 to-brand-turquoise/5 border border-brand-turquoise/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-brand-turquoise" strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Suivi simple
                </h3>

                <p className="text-white/70 leading-relaxed mb-4">
                  Un parcours court, lisible, sans harcèlement. 
                  <span className="text-brand-turquoise font-semibold"> Vous gardez la main</span> du début à la fin.
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  <span>Simple et rapide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
