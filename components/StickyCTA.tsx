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
      {/* VERSION MOBILE : Moderne */}
      <div className="md:hidden">
        <div className="relative bg-white/95 backdrop-blur-xl border-t border-white/60 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.1)]">
          {/* Gradient accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          
          <div className="flex items-center gap-2">
            <a
              href={quoteUrl}
              className="group relative flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-700 to-blue-700 px-4 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(6,182,212,0.35)] active:scale-95 transition-all duration-300 overflow-hidden"
              aria-label="Comparer mes devis"
            >
              <span className="relative z-10">Comparer</span>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-active:opacity-100 transition-opacity duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* VERSION DESKTOP : Moderne glassmorphism */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-5xl px-6 pb-6">
          <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-[0_-12px_48px_rgba(0,0,0,0.12)]">
            {/* Gradient accent line moderne */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            
            <div className="relative flex items-center justify-between gap-6 px-6 py-4">
              {/* Icône + Texte structuré */}
              <div className="flex items-center gap-4">
                <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 shadow-lg shadow-cyan-500/30">
                  <Image
                    src="/logo.png"
                    alt="Moverz"
                    width={28}
                    height={28}
                    className="relative"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-[#0F172A] leading-tight">
                    3 min · devis comparables · 0 démarchage
                  </p>
                  <p className="text-xs text-gray-600 font-medium">
                    Numéro masqué · Entreprises vérifiées
                  </p>
                </div>
              </div>

              {/* CTA Button moderne */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={quoteUrl}
                  className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-700 to-blue-700 px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(6,182,212,0.35)] hover:shadow-[0_12px_32px_rgba(6,182,212,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
                  aria-label="Lancer le comparateur"
                >
                  <span className="relative z-10">Comparer</span>
                  <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

