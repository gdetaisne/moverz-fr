"use client";
import { useEffect, useState } from "react";
import { Check, Camera } from "lucide-react";

const photosList = [
  "Salon (vue large)",
  "Cuisine + électroménager",
  "Chambres (lits + armoires)",
  "Cave / Garage / Grenier",
  "Entrée immeuble",
  "Escaliers / Ascenseur",
  "Stationnement / Rue",
];

export default function PhotoChecklist() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mockup checklist */}
          <div 
            className="relative order-2 lg:order-1"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            {/* Phone mockup with checklist */}
            <div className="relative w-full max-w-[360px] mx-auto">
              {/* iPhone frame */}
              <div className="relative bg-white rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-3 border-[12px] border-[#1F2937]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1F2937] rounded-b-3xl z-10" />

                {/* Screen content */}
                <div className="relative bg-gradient-to-b from-[#F8F9FA] to-white rounded-[36px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                  {/* Header */}
                  <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] px-5 py-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                        <Camera className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Photos à envoyer</p>
                        <p className="text-xs opacity-70">Déménagement Paris → Lyon</p>
                      </div>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="p-5 space-y-3">
                    {photosList.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E3E5E8] shadow-sm"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                          <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                        </div>
                        <p className="text-sm font-medium text-[#0F172A]">{item}</p>
                      </div>
                    ))}

                    {/* Bottom tip */}
                    <div className="mt-6 p-4 rounded-xl bg-[#6BCFCF]/10 border border-[#6BCFCF]/30">
                      <p className="text-xs text-[#0F172A] font-medium text-center">
                        ✨ Plus de photos = devis plus précis
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-[#6BCFCF]/30">
                <p className="text-2xl font-bold text-[#0F172A]">7+</p>
                <p className="text-xs text-[#1E293B]/70">photos</p>
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
              Photos = devis précis
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              Photographiez{" "}
              <span className="text-[#6BCFCF]">toutes</span>{" "}
              vos pièces
            </h2>

            <p className="text-lg text-[#1E293B]/70 leading-relaxed mb-8">
              Plus vous envoyez de photos détaillées, plus les déménageurs peuvent estimer précisément{" "}
              <strong className="text-[#0F172A]">le volume et le temps nécessaire</strong>.
            </p>

            <div className="space-y-5">
              {/* Benefit 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#6BCFCF]/10">
                  <Check className="w-5 h-5 text-[#0F172A]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Toutes les pièces</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Salon, chambres, cuisine, cave, garage, grenier… chaque espace compte.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#6BCFCF]/10">
                  <Check className="w-5 h-5 text-[#0F172A]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Les accès</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Entrée, escaliers, ascenseur, stationnement… pour anticiper la logistique.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#6BCFCF]/10">
                  <Check className="w-5 h-5 text-[#0F172A]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">0 surprise</h3>
                  <p className="text-[#1E293B]/70 text-sm">
                    Des photos complètes = un devis juste = pas de supplément le jour J.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom reassurance */}
            <div className="mt-8 p-4 rounded-xl bg-[#A8E8E8]/20 border border-[#6BCFCF]/30">
              <p className="text-sm font-medium text-[#0F172A]">
                📸 Prenez vos photos dès maintenant pour gagner du temps.
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
