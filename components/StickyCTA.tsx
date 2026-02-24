"use client";
import { useEffect, useState } from "react";
import { buildTunnelUrl } from "@/lib/tunnel-url";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [fromPath, setFromPath] = useState<string>("/sticky-cta");

  useEffect(() => {
    const onScroll = () => {
      // Apparition après 120% viewport height (après hero complet)
      setVisible(window.scrollY > window.innerHeight * 1.2);
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
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out md:hidden ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="relative bg-white/95 backdrop-blur-xl border-t px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]" style={{ borderColor: "var(--color-border)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60" />
        
        <a
          href={quoteUrl}
          className="flex items-center justify-center gap-2 w-full rounded-lg px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(14,165,166,0.35)] active:scale-[0.98]"
          style={{ 
            background: "var(--color-accent)",
            boxShadow: "0 4px 16px rgba(14,165,166,0.24)"
          }}
        >
          <span>Voir mes 3 meilleurs devis</span>
          <ArrowRight className="h-5 w-5" />
        </a>
        <p className="text-center text-xs mt-2" style={{ color: "var(--color-text-muted)" }}>
          Gratuit · 3 min · Sans engagement
        </p>
      </div>
    </div>
  );
}

