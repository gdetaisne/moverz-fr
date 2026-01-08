"use client";
import { useEffect, useState } from "react";
import { Sparkles, Check, Image as ImageIcon, Smartphone, Shield, X } from "lucide-react";

export default function WhyMoverz() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Section 1: Pourquoi les photos changent tout */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Mockup iPhone with IA analysis */}
            <div 
              className="relative order-2 lg:order-1"
              style={{
                animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
              }}
            >
              <div className="relative w-full max-w-[380px] mx-auto">
                {/* iPhone mockup */}
                <div className="relative bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-3 border-[14px] border-[#0F172A]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0F172A] rounded-b-2xl z-10" />
                  
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

            {/* Right: Explications */}
            <div 
              className="order-1 lg:order-2"
              style={{
                animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
              }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-sm font-semibold text-[#0F172A] mb-6">
                <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
                Pourquoi ça change tout
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                Les photos rendent les devis{" "}
                <span className="text-[#6BCFCF]">comparables</span>
              </h2>

              <p className="text-lg text-[#1E293B]/70 leading-relaxed mb-8">
                Sans photos, chaque déménageur devine le volume → écarts énormes.
                <br />
                <strong className="text-[#0F172A]">Avec photos, l'IA estime précisément</strong> → tous partent de la même base.
              </p>

              <div className="space-y-5 mb-8">
                {/* Sans photos */}
                <div className="p-5 rounded-2xl bg-red-50 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A]">Sans photos</h3>
                      <p className="text-xs text-red-900/70">Estimation au doigt mouillé</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-red-100 text-xs font-medium text-red-900">1 200€</span>
                    <span className="px-3 py-1 rounded-full bg-red-100 text-xs font-medium text-red-900">2 800€</span>
                    <span className="px-3 py-1 rounded-full bg-red-100 text-xs font-medium text-red-900">1 950€</span>
                  </div>
                  <p className="text-xs text-[#1E293B]/70 mt-3">
                    ⚠️ Écart de <strong className="text-red-600">÷2.3</strong> entre le min et le max
                  </p>
                </div>

                {/* Avec photos */}
                <div className="p-5 rounded-2xl bg-green-50 border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A]">Avec 7 photos</h3>
                      <p className="text-xs text-green-900/70">IA calcule 42m³</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-xs font-medium text-green-900">1 850€</span>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-xs font-medium text-green-900">1 920€</span>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-xs font-medium text-green-900">1 980€</span>
                  </div>
                  <p className="text-xs text-[#1E293B]/70 mt-3">
                    ✨ Écart de seulement <strong className="text-green-600">7%</strong> entre devis
                  </p>
                </div>
              </div>

              {/* Bottom result card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#A8E8E8]/10 border-2 border-[#6BCFCF]/30">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="w-5 h-5 text-[#0F172A]" strokeWidth={3} />
                  <p className="font-bold text-[#0F172A]">Résultat : vous comparez des prix justes</p>
                </div>
                <p className="text-sm text-[#1E293B]/70">
                  Fini les devis fantaisistes. Vous choisissez le meilleur rapport qualité-prix, en toute transparence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Moverz vs les autres comparateurs */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.4s both' : 'none',
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
              Comparaison
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-[#6BCFCF]">Moverz</span> vs les autres comparateurs
            </h2>
            
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Tous les comparateurs ne se valent pas. Voici ce qui rend Moverz unique.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Comparison table */}
            <div 
              className="relative order-2 lg:order-1"
              style={{
                animation: mounted ? 'fadeInUp 1s ease-out 0.6s both' : 'none',
              }}
            >
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#6BCFCF] to-[#A8E8E8] px-6 py-5 text-[#0F172A]">
                  <p className="text-xs font-semibold opacity-70 mb-1">Tableau comparatif</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold">Autres</p>
                    <p className="text-lg font-bold">Moverz</p>
                  </div>
                </div>

                {/* Comparison rows */}
                <div className="p-6 space-y-4">
                  {/* Base de comparaison */}
                  <div className="p-4 rounded-2xl bg-[#F8F9FA] border-2 border-[#E3E5E8]">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-[#6BCFCF]" />
                      <p className="text-sm font-bold text-[#0F172A]">Base de comparaison</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs text-[#1E293B]/70">Formulaire déclaratif</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs font-semibold text-[#0F172A]">Photos + IA</p>
                      </div>
                    </div>
                  </div>

                  {/* Canal */}
                  <div className="p-4 rounded-2xl bg-[#F8F9FA] border-2 border-[#E3E5E8]">
                    <div className="flex items-center gap-2 mb-3">
                      <Smartphone className="w-4 h-4 text-[#6BCFCF]" />
                      <p className="text-sm font-bold text-[#0F172A]">Canal</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs text-[#1E293B]/70">Email / Web</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs font-semibold text-[#0F172A]">WhatsApp</p>
                      </div>
                    </div>
                  </div>

                  {/* Vérification entreprises - HIGHLIGHT */}
                  <div className="p-4 rounded-2xl bg-[#6BCFCF]/10 border-2 border-[#6BCFCF]">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-[#0F172A]" />
                      <p className="text-sm font-bold text-[#0F172A]">Vérification entreprises</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs text-[#1E293B]/70 line-through">Non</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs font-bold text-[#0F172A]">Creditsafe</p>
                      </div>
                    </div>
                  </div>

                  {/* Données financières - HIGHLIGHT */}
                  <div className="p-4 rounded-2xl bg-[#6BCFCF]/10 border-2 border-[#6BCFCF]">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-[#0F172A]" />
                      <p className="text-sm font-bold text-[#0F172A]">Données financières</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs text-[#1E293B]/70 line-through">Non</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs font-bold text-[#0F172A]">Score + bilans</p>
                      </div>
                    </div>
                  </div>

                  {/* Litiges visibles - HIGHLIGHT */}
                  <div className="p-4 rounded-2xl bg-[#6BCFCF]/10 border-2 border-[#6BCFCF]">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-[#0F172A]" />
                      <p className="text-sm font-bold text-[#0F172A]">Historique litiges</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs text-[#1E293B]/70 line-through">Non</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs font-bold text-[#0F172A]">Visible</p>
                      </div>
                    </div>
                  </div>

                  {/* Aide au choix */}
                  <div className="p-4 rounded-2xl bg-[#F8F9FA] border-2 border-[#E3E5E8]">
                    <div className="flex items-center gap-2 mb-3">
                      <Check className="w-4 h-4 text-[#6BCFCF]" />
                      <p className="text-sm font-bold text-[#0F172A]">Aide au choix</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs text-[#1E293B]/70">Prix uniquement</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-xs font-semibold text-[#0F172A]">Prix + fiabilité</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-[#6BCFCF]/10 border border-green-200 text-center">
                    <p className="text-sm font-bold text-[#0F172A]">
                      ✓ Le seul qui compare <span className="text-[#6BCFCF]">prix + fiabilité</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed explanations */}
            <div 
              className="order-1 lg:order-2 space-y-6"
              style={{
                animation: mounted ? 'fadeInUp 1s ease-out 0.5s both' : 'none',
              }}
            >
              {/* Feature 1: WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                  <Smartphone className="w-6 h-6 text-[#6BCFCF]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">WhatsApp (asynchrone)</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Vs formulaires longs ou rendez-vous obligatoires. Envoyez vos photos quand vous voulez, 
                    recevez vos devis sans friction. <strong className="text-white">Simple et rapide.</strong>
                  </p>
                </div>
              </div>

              {/* Feature 2: Photos + IA */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                  <Sparkles className="w-6 h-6 text-[#6BCFCF]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">Photos + vidéo + IA</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Vs formulaires déclaratifs approximatifs. <strong className="text-white">L'IA analyse vos photos</strong> et 
                    crée un dossier standardisé que tous les déménageurs reçoivent. Résultat : devis comparables.
                  </p>
                </div>
              </div>

              {/* Feature 3: Vérification financière - STAR */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border-2 border-[#6BCFCF]/50">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/20 border border-[#6BCFCF]">
                  <Shield className="w-6 h-6 text-[#6BCFCF]" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-white text-lg">Vérification financière</h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#6BCFCF] text-[#0F172A] text-xs font-bold">
                      Exclusif
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    <strong className="text-white">Exclusivité Moverz</strong> : scores Creditsafe, historique de litiges, 
                    situation financière. <strong className="text-[#6BCFCF]">Aucun autre comparateur ne le fait.</strong> Vous 
                    choisissez en toute connaissance de cause.
                  </p>
                </div>
              </div>

              {/* Feature 4: Aide au choix */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                  <Check className="w-6 h-6 text-[#6BCFCF]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">Aide au choix complète</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Les autres comparateurs se limitent au prix. Moverz vous aide à choisir sur{" "}
                    <strong className="text-white">fiabilité + prix + transparence</strong>. Le meilleur rapport qualité-prix, 
                    pas juste le moins cher.
                  </p>
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
