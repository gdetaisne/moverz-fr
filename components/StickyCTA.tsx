"use client";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrolled > 0.4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      {/* VERSION MOBILE : Compacte et discrète */}
      <div className="md:hidden">
        <div className="bg-white/95 backdrop-blur-xl border-t border-[#E3E5E8] px-4 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
          <a
            href="https://devis.moverz.fr/?source=moverz.fr&from=/sticky-cta-mobile"
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-6 py-3 text-sm font-semibold text-[#04141f] shadow-[0_4px_16px_rgba(107,207,207,0.3)] active:scale-95 transition-all duration-200"
            aria-label="Recevoir mes devis gratuits"
          >
            {/* Shimmer effect au tap */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-active:translate-x-[200%] transition-transform duration-500" />
            <span className="relative">Recevoir mes devis gratuits</span>
            <span className="relative text-base leading-none">→</span>
          </a>
        </div>
      </div>

      {/* VERSION DESKTOP : Premium élégante */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-5xl px-6 pb-6">
          <div className="group relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E3E5E8] shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.16)] hover:border-[#6BCFCF]/30">
            {/* Filament lumineux subtil en haut */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6BCFCF]/40 via-[#4f46e5]/30 to-[#22c55e]/40 opacity-60" />
            
            {/* Glow effect au hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6BCFCF]/0 to-[#4FB8B8]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]" />
            
            <div className="relative flex items-center justify-between gap-6 px-6 py-4">
              {/* Icône + Texte structuré */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20 border border-[#6BCFCF]/20 transition-all duration-300 group-hover:scale-110 group-hover:border-[#6BCFCF]/30">
                  <svg className="h-6 w-6 text-[#2B7A78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold text-[#04163a] leading-tight">
                    Prêt à comparer des devis fiables ?
                  </p>
                  <p className="text-xs md:text-sm text-[#4b5c6b] mt-0.5">
                    5+ devis · 0 spam · 100% gratuit
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://devis.moverz.fr/?source=moverz.fr&from=/sticky-cta-desktop"
                className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-6 py-3 text-sm font-semibold text-[#04141f] shadow-[0_4px_20px_rgba(107,207,207,0.35)] hover:shadow-[0_8px_32px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex-shrink-0"
                aria-label="Lancer le comparateur"
              >
                {/* Shimmer effect au hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Lancer le comparateur</span>
                <span className="relative text-base leading-none group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

