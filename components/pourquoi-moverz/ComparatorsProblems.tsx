"use client";
import { useEffect, useState } from "react";
import { FileText, Video, Building2, AlertTriangle } from "lucide-react";

export default function ComparatorsProblems() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mockup comparateurs */}
          <div 
            className="relative order-2 lg:order-1"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 border border-[#E3E5E8]">
                {/* Header */}
                <div className="mb-6 pb-4 border-b border-[#E3E5E8]">
                  <p className="text-xs text-[#1E293B]/60 font-medium">Analyse du marché</p>
                  <p className="text-lg font-bold text-[#0F172A]">Types de comparateurs</p>
                </div>

                {/* Problems list */}
                <div className="space-y-4">
                  {/* Lead-gen */}
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[#0F172A]">Lead-gen</p>
                        <p className="text-xs text-red-900/70">45-50% du marché</p>
                      </div>
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-xs text-[#1E293B]/70 mt-2">
                      Formulaire → vos données vendues. Aucune comparaison réelle.
                    </p>
                  </div>

                  {/* Courtiers visio */}
                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
                        <Video className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[#0F172A]">Courtiers visio</p>
                        <p className="text-xs text-orange-900/70">25-30% du marché</p>
                      </div>
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                    </div>
                    <p className="text-xs text-[#1E293B]/70 mt-2">
                      RDV obligatoire, délais longs, friction élevée.
                    </p>
                  </div>

                  {/* Réseaux fermés */}
                  <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100">
                        <Building2 className="w-5 h-5 text-yellow-700" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[#0F172A]">Réseaux fermés</p>
                        <p className="text-xs text-yellow-900/70">15-20% du marché</p>
                      </div>
                      <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    </div>
                    <p className="text-xs text-[#1E293B]/70 mt-2">
                      Limité à leurs membres. Pas neutre par définition.
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
              animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-sm font-semibold text-[#0F172A] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
              Le constat
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              Le vrai problème des{" "}
              <span className="text-red-500">comparateurs</span>
            </h2>

            <p className="text-lg text-[#1E293B]/70 leading-relaxed mb-8">
              Sur les 20–30 premiers résultats Google, <strong className="text-[#0F172A]">la plupart des comparateurs ne comparent rien</strong>.
              Ils revendent vos coordonnées.
            </p>

            <div className="space-y-6 mb-10">
              {/* Problem 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                  <FileText className="w-5 h-5 text-red-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">Lead-gen (45-50%)</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Formulaire → vos données vendues aux déménageurs. Aucune comparaison réelle.
                  </p>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
                  <Video className="w-5 h-5 text-orange-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">Courtiers visio (25-30%)</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Rendez-vous obligatoire, délais longs, friction élevée. Difficile à scaler.
                  </p>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100">
                  <Building2 className="w-5 h-5 text-yellow-700" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">Réseaux fermés (15-20%)</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Comparaison limitée à leurs membres. Pas neutre par définition.
                  </p>
                </div>
              </div>
            </div>

            {/* Conséquence card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-200">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <p className="font-bold text-[#0F172A]">Conséquence</p>
              </div>
              <p className="text-sm text-[#1E293B]/70">
                Le devis <strong className="text-[#0F172A]">le moins cher</strong> n'est pas nécessairement{" "}
                <strong className="text-[#0F172A]">le moins risqué</strong>.
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

