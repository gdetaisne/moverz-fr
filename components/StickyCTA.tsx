"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [fromPath, setFromPath] = useState<string>("/sticky-cta");

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrolled > 0.4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Tracking: keep the origin page path (no domain) for devis.moverz.fr
    setFromPath(window.location.pathname || "/");
  }, []);

  const quoteUrl = `https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=${encodeURIComponent(fromPath)}`;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{
        willChange: visible ? "auto" : "transform, opacity",
      }}
    >
      {/* VERSION MOBILE : Plus visible */}
      <div className="md:hidden">
        <div className="relative backdrop-blur-xl px-4 py-4" style={{ background: "rgba(255,255,255,0.95)", borderTop: "1px solid var(--color-border)", boxShadow: "0 -12px 40px rgba(0,0,0,0.1)" }}>
          {/* Gradient accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, transparent, var(--color-accent), transparent)" }} />
          
          {/* Badge "Gratuit" petit */}
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <span className="relative inline-flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--color-accent)" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--color-accent)" }} />
            </span>
            <span className="text-xs font-bold" style={{ color: "var(--color-text-secondary)" }}>Gratuit · 3 min · 0 démarchage</span>
          </div>
          
          <a
            href={quoteUrl}
            className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold text-white active:scale-95 transition-all duration-300 overflow-hidden"
            style={{ background: "var(--color-accent)", boxShadow: "0 4px 16px rgba(14,165,166,0.3)" }}
            aria-label="Obtenir mes devis gratuits"
          >
            <span className="relative z-10">Obtenir mes devis</span>
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 opacity-0 group-active:opacity-20 transition-opacity duration-200" style={{ background: "var(--color-surface)" }} />
          </a>
        </div>
      </div>

      {/* VERSION DESKTOP : Logo visible + Bouton imposant */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-5xl px-6 pb-6">
          <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.95)", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-md)" }}>
            {/* Gradient accent line moderne */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, transparent, var(--color-accent), transparent)" }} />
            
            <div className="relative flex items-center justify-between gap-6 px-8 py-5">
              {/* Logo + Texte - AMÉLIORÉ */}
              <div className="flex items-center gap-4">
                {/* Logo plus visible avec background blanc */}
                <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl shadow-lg" style={{ background: "var(--color-surface)", border: "2px solid var(--color-accent)", boxShadow: "0 4px 16px rgba(14,165,166,0.2)" }}>
                  <Image
                    src="/logo.png"
                    alt="Moverz"
                    width={40}
                    height={40}
                    className="relative"
                  />
                  {/* Point animé en overlay */}
                  <span className="absolute -top-1 -right-1">
                    <span className="relative inline-flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--color-accent)" }} />
                      <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "var(--color-accent)" }} />
                    </span>
                  </span>
                </div>
                
                {/* Textes plus lisibles */}
                <div className="space-y-1">
                  <p className="text-base font-bold leading-tight" style={{ color: "var(--color-text)" }}>
                    3 min · devis comparables · 0 démarchage
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                    Numéro masqué · Entreprises vérifiées
                  </p>
                </div>
              </div>

              {/* CTA Button PLUS GRAND avec badge */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {/* Badge "Gratuit" avec violet */}
                <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold shadow-sm" style={{ background: "rgba(14,165,166,0.1)", border: "1px solid rgba(14,165,166,0.3)", color: "var(--color-accent)" }}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  100% Gratuit
                </span>
                
                <a
                  href={quoteUrl}
                  className="group relative inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
                  style={{ background: "var(--color-accent)", boxShadow: "0 4px 16px rgba(14,165,166,0.3)" }}
                  aria-label="Obtenir mes devis gratuits"
                >
                  <span className="relative z-10">Obtenir mes devis</span>
                  <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ background: "var(--color-surface)" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

