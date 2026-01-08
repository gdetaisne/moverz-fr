"use client";
import { useEffect, useState } from "react";
import { Image as ImageIcon, X, Check, TrendingDown, TrendingUp } from "lucide-react";

export default function WhyMoverz() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Comparison mockup */}
          <div 
            className="relative order-2 lg:order-1"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            {/* Comparison cards */}
            <div className="relative w-full max-w-[440px] mx-auto">
              {/* SANS photos - Card 1 */}
              <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 mb-6 border-2 border-red-200">
                {/* Badge SANS */}
                <div className="absolute -top-3 left-8 bg-red-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <X className="w-3 h-3" />
                  SANS photos
                </div>

                <div className="pt-4 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">Paris → Lyon</p>
                      <p className="text-xs text-[#1E293B]/60">T3 • 60m²</p>
                    </div>
                    <ImageIcon className="w-5 h-5 text-red-400" />
                  </div>

                  {/* Devis list */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-red-50">
                      <p className="text-sm font-medium text-[#0F172A]">Déménageur A</p>
                      <p className="text-lg font-bold text-red-600">1 200€</p>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-red-50">
                      <p className="text-sm font-medium text-[#0F172A]">Déménageur B</p>
                      <p className="text-lg font-bold text-red-600">2 800€</p>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-red-50">
                      <p className="text-sm font-medium text-[#0F172A]">Déménageur C</p>
                      <p className="text-lg font-bold text-red-600">1 950€</p>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-red-100/50 border border-red-200">
                    <TrendingDown className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-red-900 font-medium">Écart de prix énorme</p>
                  </div>
                </div>
              </div>

              {/* AVEC photos - Card 2 */}
              <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-8 border-2 border-green-200">
                {/* Badge AVEC */}
                <div className="absolute -top-3 left-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Check className="w-3 h-3" strokeWidth={3} />
                  AVEC 7 photos
                </div>

                <div className="pt-4 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">Paris → Lyon</p>
                      <p className="text-xs text-[#1E293B]/60">T3 • 60m² • IA: ~42m³</p>
                    </div>
                    <ImageIcon className="w-5 h-5 text-green-500" />
                  </div>

                  {/* Devis list */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50">
                      <p className="text-sm font-medium text-[#0F172A]">Déménageur A</p>
                      <p className="text-lg font-bold text-green-600">1 850€</p>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50">
                      <p className="text-sm font-medium text-[#0F172A]">Déménageur B</p>
                      <p className="text-lg font-bold text-green-600">1 920€</p>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50">
                      <p className="text-sm font-medium text-[#0F172A]">Déménageur C</p>
                      <p className="text-lg font-bold text-green-600">1 980€</p>
                    </div>
                  </div>

                  {/* Success */}
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-green-100/50 border border-green-200">
                    <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-green-900 font-medium">Devis comparables ✨</p>
                  </div>
                </div>
              </div>

              {/* Floating comparison badge */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl px-4 py-3 border border-[#6BCFCF]/30 rotate-3">
                <p className="text-xs text-[#1E293B]/70 font-medium">Écart</p>
                <p className="text-2xl font-bold text-[#0F172A]">÷3</p>
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

            <div className="space-y-5">
              {/* Sans photos */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                  <X className="w-5 h-5 text-red-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Sans photos</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Estimation au doigt mouillé → écarts de 50% à 100% entre devis.
                  </p>
                </div>
              </div>

              {/* Avec photos */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <Check className="w-5 h-5 text-green-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Avec photos</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    L'IA calcule le volume réel (~42m³) → tous les devis tournent autour du même prix.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA-like */}
            <div className="mt-8 p-5 rounded-xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#A8E8E8]/10 border border-[#6BCFCF]/30">
              <p className="text-sm font-semibold text-[#0F172A] mb-2">
                📸 Résultat : vous comparez des prix justes
              </p>
              <p className="text-xs text-[#1E293B]/70">
                Fini les devis fantaisistes. Vous choisissez le meilleur rapport qualité-prix, en toute transparence.
              </p>
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
