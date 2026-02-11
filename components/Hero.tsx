"use client";
import { useEffect, useState } from "react";
import HeroBudgetCard from "./HeroBudgetCard";

type AbPromiseVariant = "A" | "B";

type HeroProps = {
  /**
   * Optional server-provided variant. If omitted, we fall back to the ab_promise cookie.
   */
  abVariant?: AbPromiseVariant;
};

function readCookie(name: string): string {
  try {
    if (typeof document === "undefined") return "";
    const parts = document.cookie.split("; ");
    const hit = parts.find((p) => p.startsWith(`${name}=`));
    if (!hit) return "";
    return decodeURIComponent(hit.slice(name.length + 1));
  } catch {
    return "";
  }
}

export default function Hero({ abVariant }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const [ab, setAb] = useState<AbPromiseVariant>(abVariant ?? "A");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (abVariant) return;
    const v = readCookie("ab_promise");
    if (v === "A" || v === "B") setAb(v);
  }, [abVariant]);

  const heroPromise =
    ab === "B"
      ? "Jusqu'à 5 devis comparables · Déménageurs vérifiés · 3 min · 100% gratuit"
      : "des devis comparables · 3 min · 100% gratuit";

  return (
    <section className="relative overflow-hidden font-sans bg-hero">

      {/* Spacing uniforme */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          
          {/* ========== COLONNE GAUCHE – TEXTE ========== */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            {/* Badge lumineux */}
            <div 
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#0F172A] shadow-sm backdrop-blur-sm border border-white/60"
              style={{
                animation: mounted ? 'fadeInUp 0.6s ease-out' : 'none',
              }}
            >
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF] animate-pulse shadow-[0_0_8px_rgba(107,207,207,0.6)]" />
              Déménageurs vérifiés
            </div>

            {/* Titre émotionnel */}
            <h1 
              className="mt-6 text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A]"
              style={{
                animation: mounted ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none',
              }}
            >
              Vous déménagez.<br />
              <span className="text-[#0F172A]">
                On compare.
              </span>
            </h1>

            {/* Sous-titre clair */}
            <p 
              className="mt-6 text-base md:text-lg lg:text-xl text-[#1E293B] leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{
                animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
              }}
            >
              {heroPromise}
            </p>

            {/* Mini-badges de réassurance (version compacte) */}
            <div
              className="mt-8 flex flex-wrap items-center gap-2 justify-center lg:justify-start text-xs text-[#64748B] font-medium"
              style={{
                animation: mounted ? "fadeInUp 1.2s ease-out 0.4s both" : "none",
              }}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span> Numéro masqué
              </span>
              <span className="text-[#CBD5E1]">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span> Aucun appel
              </span>
              <span className="text-[#CBD5E1]">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span> Entreprises vérifiées
              </span>
            </div>

            {/* Note Google */}
            <div
              className="mt-6 flex justify-center lg:justify-start"
              style={{
                animation: mounted ? "fadeInUp 1.4s ease-out 0.5s both" : "none",
              }}
            >
              <a
                href="https://www.google.com/maps/place/Moverz/@46.881154,3.0417412,6z/data=!3m1!4b1!4m6!3m5!1s0x65777ea3ad50b1c1:0xdcc12b2e04254f4!8m2!3d46.881154!4d3.0417412!16s%2Fg%2F11ylmz4jk6?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200/60 px-4 py-1.5 text-xs font-medium text-[#78350F] hover:bg-amber-100 transition-colors"
              >
                <span className="text-amber-400 text-sm tracking-tight">★★★★★</span>
                <span>4,5+ sur Google</span>
              </a>
            </div>
          </div>

        {/* ========== COLONNE DROITE – FORMULAIRE BUDGET ========== */}
        <div 
          className="relative mx-auto w-full max-w-[440px] lg:mx-0"
          style={{
            animation: mounted ? 'fadeInUp 1s ease-out 0.4s both' : 'none',
          }}
        >
          <HeroBudgetCard ab={ab} />
        </div>
        </div>
      </div>
    </section>
  );
}
