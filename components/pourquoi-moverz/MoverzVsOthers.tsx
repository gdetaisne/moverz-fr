"use client";
import { useEffect, useState } from "react";
import { Check, X, Smartphone, Shield, TrendingUp } from "lucide-react";

export default function MoverzVsOthers() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const comparisons = [
    { 
      category: "Base de comparaison",
      icon: <TrendingUp className="w-4 h-4" />,
      others: "Formulaire déclaratif", 
      moverz: "Photos + vidéo + voice" 
    },
    { 
      category: "Canal",
      icon: <Smartphone className="w-4 h-4" />,
      others: "Email / formulaire web", 
      moverz: "Multi-canal (web, email, mobile)" 
    },
    { 
      category: "Standardisation",
      icon: <Check className="w-4 h-4" />,
      others: "Faible", 
      moverz: "Dossier unique pour tous" 
    },
    { 
      category: "Vérification entreprises",
      icon: <Shield className="w-4 h-4" />,
      others: false, 
      moverz: true 
    },
    { 
      category: "Données financières",
      icon: <Shield className="w-4 h-4" />,
      others: false, 
      moverz: true 
    },
    { 
      category: "Litiges visibles",
      icon: <Shield className="w-4 h-4" />,
      others: false, 
      moverz: true 
    },
    { 
      category: "Aide au choix",
      icon: <Check className="w-4 h-4" />,
      others: "Limitée (prix)", 
      moverz: "Fiabilité + prix" 
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          style={{
            animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
          }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold mb-6">
            <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
            Comparaison
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-[#6BCFCF]">Moverz</span> vs les autres
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mockup comparison */}
          <div 
            className="relative order-2 lg:order-1"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
            }}
          >
            <div className="relative w-full max-w-[480px] mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#6BCFCF] to-[#A8E8E8] px-6 py-5 text-[#0F172A]">
                  <p className="text-xs font-semibold opacity-70 mb-1">Comparaison complète</p>
                  <p className="text-lg font-bold">Moverz vs Comparateurs</p>
                </div>

                {/* Comparison items */}
                <div className="p-6 space-y-3">
                  {/* Multi-canal */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FA]">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-[#6BCFCF]" />
                      <span className="text-sm font-medium text-[#0F172A]">Multi-canal</span>
                    </div>
                    <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                  </div>

                  {/* Photos + IA */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FA]">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-[#6BCFCF]" />
                      <span className="text-sm font-medium text-[#0F172A]">Photos + IA</span>
                    </div>
                    <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                  </div>

                  {/* Vérif entreprises */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#6BCFCF]/10 border-2 border-[#6BCFCF]">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-[#0F172A]" />
                      <span className="text-sm font-bold text-[#0F172A]">Vérification entreprises</span>
                    </div>
                    <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                  </div>

                  {/* Données financières */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#6BCFCF]/10 border-2 border-[#6BCFCF]">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-[#0F172A]" />
                      <span className="text-sm font-bold text-[#0F172A]">Données financières</span>
                    </div>
                    <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                  </div>

                  {/* Litiges visibles */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#6BCFCF]/10 border-2 border-[#6BCFCF]">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-[#0F172A]" />
                      <span className="text-sm font-bold text-[#0F172A]">Historique litiges</span>
                    </div>
                    <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                  </div>

                  {/* Standardisation */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FA]">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#6BCFCF]" />
                      <span className="text-sm font-medium text-[#0F172A]">Dossier standardisé</span>
                    </div>
                    <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-center">
                    <p className="text-sm font-bold text-green-900">
                      ✓ Moverz = Comparaison complète + fiabilité
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Explications */}
          <div 
            className="order-1 lg:order-2"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                  <Smartphone className="w-6 h-6 text-[#6BCFCF]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Multi-canal & mobile</h3>
                  <p className="text-white/70 text-sm">
                    Web, email ou mobile. Vs formulaires longs ou rendez-vous obligatoires. Simple, rapide, sans friction.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                  <TrendingUp className="w-6 h-6 text-[#6BCFCF]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Photos + vidéo + IA</h3>
                  <p className="text-white/70 text-sm">
                    Vs formulaires déclaratifs approximatifs. Dossier standardisé pour tous les déménageurs.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/20 border border-[#6BCFCF]">
                  <Shield className="w-6 h-6 text-[#6BCFCF]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Vérification financière</h3>
                  <p className="text-white/70 text-sm">
                    <strong className="text-white">Exclusivité Moverz</strong> : scores Creditsafe, historique litiges, situation financière.
                    Aucun autre comparateur ne le fait.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                  <Check className="w-6 h-6 text-[#6BCFCF]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Aide au choix complète</h3>
                  <p className="text-white/70 text-sm">
                    Pas seulement le prix : <strong className="text-white">fiabilité + prix + transparence</strong>.
                  </p>
                </div>
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

