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
        <div className="bg-white/95 backdrop-blur-xl border-t border-[#E3E5E8] px-4 py-3 shadow-[0_-4px_18px_rgba(0,0,0,0.06)]">
          <a
            href="https://devis.moverz.fr/?source=moverz.fr&from=/sticky-cta-mobile"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#020617] transition-colors"
            aria-label="Recevoir mes devis gratuits"
          >
            <span>Recevoir mes devis gratuits</span>
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </div>

      {/* VERSION DESKTOP : Premium élégante */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-5xl px-6 pb-6">
          <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E3E5E8] shadow-[0_8px_30px_rgba(15,23,42,0.12)]">
            <div className="relative flex items-center justify-between gap-6 px-6 py-4">
              {/* Icône + Texte structuré */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0F172A] text-white">
                  <svg className="h-6 w-6 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                 <div>
                   <p className="text-base md:text-lg font-semibold text-[#04163a] leading-tight">
                     Déménagez sans stress
                   </p>
                   <p className="text-xs md:text-sm text-[#4b5c6b] mt-0.5">
                     3 min • IA ultra-précise • 0 spam
                   </p>
                 </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://devis.moverz.fr/?source=moverz.fr&from=/sticky-cta-desktop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#020617] transition-colors flex-shrink-0"
                aria-label="Lancer le comparateur"
              >
                <span>Lancer le comparateur</span>
                <span className="text-base leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

