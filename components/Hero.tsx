"use client";
import { useEffect, useState } from "react";
import { ShieldCheck, PhoneOff, BadgeCheck, Star } from "lucide-react";
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
    <section className="relative overflow-hidden font-sans bg-gradient-to-br from-[#E0F7F7] via-white to-[#E0F7F7]/20">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      {/* Spacing uniforme */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          
          {/* ========== COLONNE GAUCHE – TEXTE ========== */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            {/* Badge moderne avec gradient */}
            <div 
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-200/50 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-sm"
              style={{
                animation: mounted ? 'fadeInUp 0.6s ease-out' : 'none',
              }}
            >
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
              Déménageurs vérifiés
            </div>

            {/* Titre émotionnel avec gradient */}
            <h1 
              className="mt-8 text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                animation: mounted ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none',
              }}
            >
              <span className="block text-[#0F172A]">Vous déménagez.</span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-600 via-cyan-700 to-blue-700 bg-clip-text text-transparent">
                On compare.
              </span>
            </h1>

            {/* Sous-titre clair */}
            <p 
              className="mt-6 text-base md:text-lg lg:text-xl text-[#334155] leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{
                animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
              }}
            >
              {heroPromise}
            </p>

            {/* Pills modernes de réassurance */}
            <div
              className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
              style={{
                animation: mounted ? "fadeInUp 1.2s ease-out 0.3s both" : "none",
              }}
            >
              <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-100/50 transition-all duration-300">
                <ShieldCheck className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-[#0F172A]">Numéro masqué</span>
              </div>
              
              <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-100/50 transition-all duration-300">
                <PhoneOff className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-[#0F172A]">Aucun appel</span>
              </div>
              
              <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-100/50 transition-all duration-300">
                <BadgeCheck className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-[#0F172A]">Entreprises vérifiées</span>
              </div>
            </div>

            {/* Note Google modernisée */}
            <div
              className="mt-8 flex justify-center lg:justify-start"
              style={{
                animation: mounted ? "fadeInUp 1.4s ease-out 0.4s both" : "none",
              }}
            >
              <a
                href="https://www.google.com/maps/place/Moverz/@46.881154,3.0417412,6z/data=!3m1!4b1!4m6!3m5!1s0x65777ea3ad50b1c1:0xdcc12b2e04254f4!8m2!3d46.881154!4d3.0417412!16s%2Fg%2F11ylmz4jk6?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-[#0F172A]">4,5+</span>
                  <span className="text-sm text-[#64748B]">sur Google</span>
                </div>
              </a>
            </div>
          </div>

        {/* ========== COLONNE DROITE – FORMULAIRE BUDGET ========== */}
        <div 
          className="relative mx-auto w-full max-w-[440px] lg:mx-0"
          style={{
            animation: mounted ? 'fadeInUp 1s ease-out 0.5s both' : 'none',
          }}
        >
          {/* Glow effect derrière la card */}
          <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-60" />
          <div className="relative">
            <HeroBudgetCard ab={ab} />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
