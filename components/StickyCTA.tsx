"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [fromPath, setFromPath] = useState<string>("/sticky-cta");

  useEffect(() => {
    const onScroll = () => {
      // Vérifier si on est proche du footer pour masquer le sticky
      const footer = document.querySelector('footer');
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      
      let shouldShow = scrolled > 0.4;
      
      // Masquer si proche du footer
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top < window.innerHeight + 100) {
          shouldShow = false;
        }
      }
      
      setVisible(shouldShow);
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
        <div className="relative bg-white/95 backdrop-blur-xl border-t border-white/60 px-4 py-3 shadow-strong">
          {/* Gradient accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#042F34] to-transparent opacity-30" />
          
          <div className="flex items-center gap-2">
            <a
              href={quoteUrl}
              className="btn-primary flex-1 justify-center active:scale-95"
              aria-label="Obtenir mes devis"
            >
              Obtenir mes devis
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* VERSION DESKTOP : Moderne glassmorphism */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-5xl px-6 pb-6">
          <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-strong">
            {/* Gradient accent line moderne */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#042F34] to-transparent opacity-30" />
            
            <div className="relative flex items-center justify-between gap-6 px-6 py-4">
              {/* Icône + Texte structuré */}
              <div className="flex items-center gap-4">
                <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#042F34] shadow-lg">
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
                  className="btn-primary"
                  aria-label="Obtenir mes devis"
                >
                  Obtenir mes devis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

