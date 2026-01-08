"use client";
import { useEffect, useState } from "react";
import { BarChart3, Image, Zap, CheckCircle2 } from "lucide-react";

export default function ProHeroMockup() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div 
      className="relative w-full max-w-[600px] mx-auto"
      style={{
        animation: mounted ? 'float 4s ease-in-out infinite' : 'none',
      }}
    >
      {/* Dashboard mockup */}
      <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden border border-gray-200">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#6BCFCF] flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Moverz Pro</p>
              <p className="text-white/60 text-xs">Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6BCFCF] animate-pulse" />
            <span className="text-white/80 text-xs">En ligne</span>
          </div>
        </div>

        {/* Content area */}
        <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Dossiers", value: "47", icon: BarChart3 },
              { label: "Taux conv.", value: "34%", icon: CheckCircle2 },
              { label: "Ce mois", value: "+12", icon: Zap },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-4 h-4 text-[#6BCFCF]" />
                </div>
                <p className="text-2xl font-bold text-[#0F172A]">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* New lead card */}
          <div className="bg-white rounded-xl border-2 border-[#6BCFCF]/20 p-4 shadow-lg">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-bold text-[#0F172A] text-sm mb-1">Nouveau dossier</p>
                <p className="text-xs text-gray-500">Paris → Lyon · 42m³</p>
              </div>
              <div className="px-2 py-1 rounded-full bg-[#6BCFCF]/10 text-[#6BCFCF] text-xs font-semibold">
                Nouveau
              </div>
            </div>

            {/* Photos grid */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative aspect-square rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Volume IA</span>
                <span className="font-semibold text-[#0F172A]">42m³ ±5%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Inventaire</span>
                <span className="font-semibold text-[#0F172A]">127 items</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Date souhaitée</span>
                <span className="font-semibold text-[#0F172A]">15 mars</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <button className="flex-1 bg-[#6BCFCF] text-white text-xs font-semibold py-2 rounded-lg hover:bg-[#5AB0B0] transition-colors">
                Chiffrer
              </button>
              <button className="px-4 bg-gray-100 text-gray-700 text-xs font-semibold py-2 rounded-lg hover:bg-gray-200 transition-colors">
                Voir détails
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#6BCFCF]/20 to-transparent blur-3xl -z-10" />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}} />
    </div>
  );
}

