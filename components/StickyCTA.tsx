"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { buildTunnelUrl } from "@/lib/tunnel-url";

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

  const quoteUrl = buildTunnelUrl({ from: fromPath });

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{
        willChange: visible ? "auto" : "transform, opacity",
      }}
    >
      {/* VERSION MOBILE : Plus discret */}
      <div className="md:hidden">
        <div className="relative bg-white/90 backdrop-blur-xl border-t border-[#E3E5E8]/50 px-3 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]">
          {/* Subtle gradient accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#6BCFCF] to-transparent" />
          
          <div className="flex items-center gap-2">
            <a
              href={quoteUrl}
              className="group flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#0F172A] to-[#1E293B] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-[0_6px_16px_rgba(15,23,42,0.3)] hover:scale-[1.01] active:scale-95 transition-all duration-300"
              aria-label="Comparer mes devis"
            >
              <span>Comparer</span>
              <span className="text-sm leading-none">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* VERSION DESKTOP : Plus discrète */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-5xl px-6 pb-5">
          <div className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-xl border border-[#E3E5E8]/50 shadow-[0_-8px_40px_rgba(0,0,0,0.08)]">
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#6BCFCF] to-transparent" />
            
            <div className="relative flex items-center justify-between gap-6 px-5 py-3">
              {/* Icône + Texte structuré - Plus compact */}
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F172A] to-[#1E293B] shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Moverz"
                    width={24}
                    height={24}
                    className="relative"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[#0F172A] leading-tight">
                    3 min · devis comparables · 0 démarchage
                  </p>
                  <p className="text-xs text-[#1E293B]/60">
                    Numéro masqué · Entreprises vérifiées
                  </p>
                </div>
              </div>

              {/* CTA Buttons - Plus compacts */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={quoteUrl}
                  className="group inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#0F172A] to-[#1E293B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-[0_6px_16px_rgba(15,23,42,0.3)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300"
                  aria-label="Lancer le comparateur"
                >
                  <span>Comparer</span>
                  <span className="text-sm leading-none">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

