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
    <section className="relative overflow-hidden font-sans" style={{ background: "var(--color-bg)" }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      {/* Spacing uniforme */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          
          {/* ========== COLONNE GAUCHE – TEXTE ========== */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            {/* Badge moderne avec gradient */}
            <div 
              className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-5 py-2.5 text-sm font-semibold shadow-sm"
              style={{
                animation: mounted ? 'fadeInUp 0.6s ease-out' : 'none',
                background: "rgba(14,165,166,0.1)",
                border: "1px solid rgba(14,165,166,0.2)",
                color: "var(--color-text)",
              }}
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--color-accent)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2 shadow-[0_0_12px_rgba(14,165,166,0.8)]" style={{ background: "var(--color-accent)" }} />
              </span>
              Déménageurs vérifiés
            </div>

            {/* Titre émotionnel avec gradient */}
            <h1 
              className="mt-8 text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl font-heading"
              style={{
                animation: mounted ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none',
              }}
            >
              <span className="block" style={{ color: "var(--color-text)" }}>Vous déménagez.</span>
              <span className="block mt-2" style={{ color: "var(--color-accent)" }}>
                On compare.
              </span>
            </h1>

            {/* Sous-titre clair */}
            <p 
              className="mt-6 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{
                animation: mounted ? 'fadeInUp 1s ease-out 0.2s both' : 'none',
                color: "var(--color-text-secondary)",
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
              <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300" style={{ background: "rgba(255,255,255,0.8)", border: "1px solid var(--color-border)" }}>
                <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: "var(--color-accent)" }} />
                <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>Numéro masqué</span>
              </div>
              
              <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300" style={{ background: "rgba(255,255,255,0.8)", border: "1px solid var(--color-border)" }}>
                <PhoneOff className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: "var(--color-accent)" }} />
                <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>Aucun appel</span>
              </div>
              
              <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300" style={{ background: "rgba(255,255,255,0.8)", border: "1px solid var(--color-border)" }}>
                <BadgeCheck className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: "var(--color-accent)" }} />
                <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>Entreprises vérifiées</span>
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
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl backdrop-blur-sm transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.9)", border: "1px solid var(--color-border)" }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold" style={{ color: "var(--color-text)" }}>4,5+</span>
                  <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>sur Google</span>
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
          <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-60" style={{ background: "radial-gradient(circle, rgba(14,165,166,0.2), transparent 70%)" }} />
          <div className="relative">
            <HeroBudgetCard ab={ab} />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
