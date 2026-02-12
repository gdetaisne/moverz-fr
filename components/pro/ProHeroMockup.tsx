"use client";
import { useEffect, useState } from "react";
import { BarChart3, Image as ImageIcon, Zap, CheckCircle2 } from "lucide-react";

export default function ProHeroMockup() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div 
      className="relative w-full max-w-[720px] mx-auto"
      style={{
        animation: mounted ? 'float 4s ease-in-out infinite' : 'none',
      }}
    >
      {/* Dashboard mockup */}
      <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden border border-[var(--color-border)]">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Moverz"
                className="h-6 w-6 object-contain"
                loading="eager"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Moverz Pro</p>
              <p className="text-white/60 text-xs">Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-turquoise animate-pulse" />
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
              <div
                key={i}
                className="bg-white rounded-xl p-3.5 border border-[var(--color-border)] shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-4 h-4 text-brand-turquoise" />
                </div>
                <p className="text-2xl font-bold text-[var(--color-text)] leading-none">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* New lead card */}
          <div className="bg-white rounded-2xl border-2 border-brand-turquoise/25 p-5 shadow-lg">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-bold text-[var(--color-text)] text-base leading-tight mb-1">
                  Nouveau dossier
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] font-medium">
                  Paris → Lyon · 22m³
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-brand-turquoise/10 text-[#2B7A78] text-sm font-semibold">
                Nouveau
              </div>
            </div>

            {/* Dossier (aperçu) */}
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Type : T3 • 60m² • 3ᵉ étage",
                "Accès : portage 30m",
                "Options : démontage, fragile",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[#F8F9FA] px-3 py-1 text-xs font-semibold text-[var(--color-text-secondary)]"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Details */}
            <div className="space-y-2.5 mb-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--color-text-secondary)] font-medium">Volume estimé</span>
                <span className="font-bold text-[var(--color-text)]">22m3</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--color-text-secondary)] font-medium">Inventaire</span>
                <span className="font-bold text-[var(--color-text)]">13 items et 30 cartons</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--color-text-secondary)] font-medium">Date souhaitée</span>
                <span className="font-bold text-[var(--color-text)]">15 mars (+/- 1 semaine)</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <button className="flex-1 bg-brand-turquoise text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#5AB0B0] transition-colors">
                Envoyer le devis
              </button>
              <button className="px-4 bg-gray-100 text-gray-800 text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-200 transition-colors">
                Voir détails
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-turquoise/20 to-transparent blur-3xl -z-10" />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}} />
    </div>
  );
}

