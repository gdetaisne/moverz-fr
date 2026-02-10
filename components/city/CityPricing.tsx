"use client";

import { useEffect, useState } from "react";
import { Home, Building2, Building, TrendingUp, Calculator } from "lucide-react";

type CityPricingProps = {
  cityName: string;
};

export function CityPricing({ cityName }: CityPricingProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const priceRanges = [
    { 
      icon: <Home className="w-5 h-5" />,
      label: "Studio", 
      volume: "15 m³", 
      price: "500–800€" 
    },
    { 
      icon: <Building2 className="w-5 h-5" />,
      label: "T2/T3", 
      volume: "30 m³", 
      price: "900–1400€",
      highlight: true,
    },
    { 
      icon: <Building className="w-5 h-5" />,
      label: "T4+", 
      volume: "50 m³", 
      price: "1500–2500€" 
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mockup calcul IA */}
          <div 
            className="relative order-2 lg:order-1"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
            }}
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6 text-[#0F172A]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 font-medium">Estimation prix</p>
                    <p className="text-lg font-bold">T3 • 60m² → {cityName}</p>
                  </div>
                  <Calculator className="w-6 h-6 text-[#6BCFCF]" />
                </div>

                {/* Volume detected */}
                <div className="p-4 rounded-2xl bg-[#6BCFCF]/10 border border-[#6BCFCF]/30 mb-4">
                  <p className="text-xs text-gray-600 mb-1">Volume détecté (IA)</p>
                  <p className="text-3xl font-bold text-[#0F172A]">42 m³</p>
                  <p className="text-xs text-gray-500 mt-1">Estimation basée sur votre dossier</p>
                </div>

                {/* Price calculation */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                    <span className="text-sm text-gray-600">Base volumétrie</span>
                    <span className="text-sm font-semibold">1 200€</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                    <span className="text-sm text-gray-600">Distance</span>
                    <span className="text-sm font-semibold">+ 450€</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                    <span className="text-sm text-gray-600">Accès (3ᵉ étage)</span>
                    <span className="text-sm font-semibold">+ 200€</span>
                  </div>
                </div>

                {/* Total */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#6BCFCF]/20 to-[#A8E8E8]/20 border-2 border-[#6BCFCF]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Fourchette estimée</p>
                      <p className="text-3xl font-bold text-[#0F172A]">1 850€</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-600 mt-3">± 10% selon déménageur</p>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Estimation IA • Prix réel dans vos devis
                </p>
              </div>
            </div>
          </div>

          {/* Right: Prix indicatifs */}
          <div 
            className="order-1 lg:order-2"
            style={{
              animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold mb-6 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
              Prix indicatifs
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Combien ça coûte ?
            </h2>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Fourchettes moyennes à {cityName}
            </p>

            <div className="space-y-4 mb-8">
              {priceRanges.map((item) => (
                <div 
                  key={item.label}
                  className={`p-5 rounded-2xl border ${
                    item.highlight 
                      ? 'border-[#6BCFCF] bg-[#6BCFCF]/10' 
                      : 'border-white/20 bg-white/5'
                  } backdrop-blur-sm hover:border-[#6BCFCF]/70 transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl ${
                        item.highlight ? 'bg-[#6BCFCF] text-[#0F172A]' : 'bg-white/10 text-white'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-lg font-bold text-white">{item.label}</p>
                        <p className="text-sm text-white/60">{item.volume}</p>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-[#6BCFCF]">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white mb-3">Ce qui fait varier le prix</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6BCFCF] shrink-0" />
                  <span><strong className="text-white">Volume (m³)</strong> : principal levier — trier avant = payer moins</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6BCFCF] shrink-0" />
                  <span><strong className="text-white">Accès</strong> : étages, ascenseur, distance camion→entrée</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6BCFCF] shrink-0" />
                  <span><strong className="text-white">Période</strong> : été, week-ends, fins de mois = plus cher</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6BCFCF] shrink-0" />
                  <span><strong className="text-white">Formule</strong> : éco vs standard vs clé en main</span>
                </li>
              </ul>
              <p className="text-xs text-white/50 mt-4">
                Tarifs indicatifs. Le prix réel dépend de votre dossier complet (volume IA + accès + période).
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
