"use client";
import { useEffect, useState } from "react";
import { Sparkles, Check, Image as ImageIcon, Smartphone, Shield, X, TrendingUp } from "lucide-react";

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
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BCFCF]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px]" />
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header central */}
          <div 
            className="text-center mb-16"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-white mb-6">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
              Pourquoi ça change tout
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
              Photos + IA + Vérification ={" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6BCFCF] to-[#A8E8E8]">
                comparaison fiable
              </span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Le seul comparateur qui standardise les devis ET vérifie la solidité financière des entreprises
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            {/* Left: iPhone mockup */}
            <div 
              className="relative"
              style={{
                animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
              }}
            >
              <div className="relative w-full max-w-[400px] mx-auto lg:sticky lg:top-8">
                {/* iPhone mockup with glow */}
                <div className="relative bg-white rounded-[3rem] shadow-[0_30px_80px_rgba(107,207,207,0.3)] p-3 border-[14px] border-[#0F172A]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0F172A] rounded-b-2xl z-10" />
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#6BCFCF]/30 to-transparent blur-2xl -z-10" />
                  
                  {/* Screen */}
                  <div className="relative bg-[#F8F9FA] rounded-[2.3rem] overflow-hidden h-[680px]">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#6BCFCF] to-[#A8E8E8] px-6 py-4 text-[#0F172A]">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-5 h-5" />
                        <p className="text-sm font-bold">Analyse IA</p>
                      </div>
                      <p className="text-xs opacity-70">Estimation volumétrie</p>
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Photos uploaded */}
                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E3E5E8]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                            <ImageIcon className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-[#0F172A]">7 photos reçues</p>
                            <p className="text-xs text-[#1E293B]/60">Toutes les pièces</p>
                          </div>
                          <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                        </div>
                        
                        {/* Photos grid */}
                        <div className="grid grid-cols-4 gap-2">
                          {[1,2,3,4,5,6,7,8].slice(0,7).map((i) => (
                            <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                              <div className="absolute inset-0 bg-[#6BCFCF]/10" />
                            </div>
                          ))}
                          <div className="aspect-square rounded-lg bg-[#6BCFCF]/20 flex items-center justify-center">
                            <p className="text-xs font-bold text-[#0F172A]">+0</p>
                          </div>
                        </div>
                      </div>

                      {/* IA Processing */}
                      <div className="bg-gradient-to-br from-[#6BCFCF]/10 to-[#A8E8E8]/10 rounded-2xl p-4 border border-[#6BCFCF]/30">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-[#6BCFCF] animate-pulse" />
                          <p className="text-xs font-semibold text-[#0F172A]">Analyse en cours...</p>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#1E293B]/70">Détection surfaces</span>
                            <span className="text-[#6BCFCF] font-bold">✓</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#1E293B]/70">Comptage mobilier</span>
                            <span className="text-[#6BCFCF] font-bold">✓</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#1E293B]/70">Calcul volumétrie</span>
                            <span className="text-orange-500 font-bold">...</span>
                          </div>
                        </div>

                        {/* Volume result */}
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <p className="text-xs text-[#1E293B]/60 mb-1">Volume estimé</p>
                          <div className="flex items-baseline gap-2">
                            <p className="text-4xl font-bold text-[#0F172A]">42</p>
                            <p className="text-lg font-semibold text-[#1E293B]/60">m³</p>
                          </div>
                          <p className="text-xs text-[#1E293B]/50 mt-2">Paris → Lyon • T3 • 60m²</p>
                        </div>
                      </div>

                      {/* Devis comparables */}
                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-green-200">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-4 h-4 text-green-600" />
                          <p className="text-sm font-semibold text-green-900">Devis comparables prêts</p>
                        </div>
                        
                        <div className="space-y-2">
                          {[
                            { name: "Déménageur A", price: "1 850€" },
                            { name: "Déménageur B", price: "1 920€" },
                            { name: "Déménageur C", price: "1 980€" },
                          ].map((devis, i) => (
                            <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-green-50">
                              <p className="text-xs font-medium text-[#0F172A]">{devis.name}</p>
                              <p className="text-sm font-bold text-green-600">{devis.price}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-3 p-2 rounded-lg bg-green-100 text-center">
                          <p className="text-xs font-medium text-green-900">✨ Écart max : 7%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -right-6 top-20 bg-white rounded-2xl shadow-xl px-4 py-3 border-2 border-[#6BCFCF] rotate-6">
                  <p className="text-xs text-[#1E293B]/70 font-medium">Précision IA</p>
                  <p className="text-2xl font-bold text-[#6BCFCF]">95%</p>
                </div>
              </div>
            </div>

            {/* Right: Features premium */}
            <div 
              className="space-y-6"
              style={{
                animation: mounted ? 'fadeInUp 1s ease-out 0.3s both' : 'none',
              }}
            >
              {/* Feature 1: Photos + IA */}
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#6BCFCF]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#6BCFCF]/20 to-[#6BCFCF]/5 border border-[#6BCFCF]/30 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-7 h-7 text-[#6BCFCF]" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-xl mb-2">Photos + IA = devis comparables</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      Sans photos : écarts de <span className="text-red-400 font-bold">÷2.3</span> entre devis (1 200€ vs 2 800€).
                      <br />
                      <span className="text-[#6BCFCF] font-semibold">Avec l'IA Moverz</span> : écart de seulement <span className="text-green-400 font-bold">7%</span> (1 850€ vs 1 980€).
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="px-3 py-1.5 rounded-lg bg-green-500/20 text-green-300 font-medium border border-green-500/30">
                        ✓ Tous partent de la même base
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2: WhatsApp */}
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#6BCFCF]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#6BCFCF]/20 to-[#6BCFCF]/5 border border-[#6BCFCF]/30 group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-7 h-7 text-[#6BCFCF]" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-xl mb-2">WhatsApp asynchrone</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      Envoyez vos photos quand vous voulez, recevez vos devis sans pression.
                      <span className="text-[#6BCFCF] font-semibold"> Fini les formulaires longs</span> et les rendez-vous obligatoires.
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="px-3 py-1.5 rounded-lg bg-white/10 text-white/80 font-medium border border-white/20">
                        ✓ Simple et rapide
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3: Vérification financière - STAR */}
              <div className="relative group p-6 rounded-2xl bg-gradient-to-br from-[#6BCFCF]/10 via-[#6BCFCF]/5 to-transparent backdrop-blur-sm border-2 border-[#6BCFCF]/50 hover:border-[#6BCFCF] transition-all duration-300 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#6BCFCF]/20 to-transparent blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-[#6BCFCF]/30 border-2 border-[#6BCFCF] group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-[#6BCFCF]" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-white text-xl">Vérification Creditsafe</h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#6BCFCF] text-[#0F172A] text-xs font-bold">
                        Exclusif
                      </span>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      <span className="text-[#6BCFCF] font-bold">Aucun autre comparateur ne le fait</span> : 
                      scores financiers, historique de litiges, situation de l'entreprise. 
                      Vous choisissez en <span className="text-white font-semibold">toute connaissance de cause</span>.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <div className="px-3 py-1.5 rounded-lg bg-[#6BCFCF]/20 text-[#6BCFCF] font-medium border border-[#6BCFCF]/40">
                        ✓ Scores financiers
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-[#6BCFCF]/20 text-[#6BCFCF] font-medium border border-[#6BCFCF]/40">
                        ✓ Historique litiges
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4: Aide complète */}
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#6BCFCF]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#6BCFCF]/20 to-[#6BCFCF]/5 border border-[#6BCFCF]/30 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-[#6BCFCF]" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-xl mb-2">Prix + Fiabilité</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      Les autres se limitent au prix. Moverz compare aussi <span className="text-[#6BCFCF] font-semibold">la solidité des entreprises</span>.
                      Résultat : le meilleur rapport qualité-prix, pas juste le moins cher.
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="px-3 py-1.5 rounded-lg bg-white/10 text-white/80 font-medium border border-white/20">
                        ✓ Transparence totale
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Comparison grid */}
          <div 
            className="mt-16"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.5s both' : 'none',
            }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Moverz vs les autres comparateurs
              </h3>
              <p className="text-white/60 text-sm">
                Tous les comparateurs ne se valent pas
              </p>
            </div>

            {/* Comparison cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-center mb-4">
                  <Sparkles className="w-8 h-8 text-[#6BCFCF] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-white">Base de comparaison</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <X className="w-3 h-3 text-red-400" strokeWidth={3} />
                    <span>Formulaire déclaratif</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6BCFCF] font-semibold">
                    <Check className="w-3 h-3" strokeWidth={3} />
                    <span>Photos + IA</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-center mb-4">
                  <Smartphone className="w-8 h-8 text-[#6BCFCF] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-white">Canal</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <X className="w-3 h-3 text-red-400" strokeWidth={3} />
                    <span>Email / Web</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6BCFCF] font-semibold">
                    <Check className="w-3 h-3" strokeWidth={3} />
                    <span>WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* Card 3 - HIGHLIGHT */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#6BCFCF]/20 to-[#6BCFCF]/5 backdrop-blur-sm border-2 border-[#6BCFCF]/50 relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#6BCFCF] text-[#0F172A] text-[10px] font-bold">
                    EXCLUSIF
                  </span>
                </div>
                <div className="text-center mb-4">
                  <Shield className="w-8 h-8 text-[#6BCFCF] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-white">Vérification</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <X className="w-3 h-3 text-red-400" strokeWidth={3} />
                    <span>Aucune</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6BCFCF] font-bold">
                    <Check className="w-3 h-3" strokeWidth={3} />
                    <span>Creditsafe</span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-center mb-4">
                  <TrendingUp className="w-8 h-8 text-[#6BCFCF] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-white">Aide au choix</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <X className="w-3 h-3 text-red-400" strokeWidth={3} />
                    <span>Prix uniquement</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6BCFCF] font-semibold">
                    <Check className="w-3 h-3" strokeWidth={3} />
                    <span>Prix + Fiabilité</span>
                  </div>
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
