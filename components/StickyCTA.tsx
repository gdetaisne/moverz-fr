"use client";
import { useEffect, useState } from "react";
import { buildTunnelUrl } from "@/lib/tunnel-url";
import { ShieldCheck, Clock } from "lucide-react";

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
      <div className="relative bg-white/95 backdrop-blur-xl border-t px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]" style={{ borderColor: "rgba(245,158,11,0.2)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-80" />
        
        <a
          href={quoteUrl}
          className="flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_12px_40px_rgba(245,158,11,0.4)] active:scale-[0.98]"
          style={{ 
            background: "#F59E0B",
            boxShadow: "0 4px 16px rgba(245,158,11,0.3)"
          }}
        >
          <span>Obtenir mes devis</span>
        </a>
        
        <div className="flex items-center justify-center gap-4 mt-2.5 text-xs text-slate-600">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>3 min</span>
          </div>
          <span className="text-slate-300">·</span>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-slate-400" />
            <span>0 appel</span>
          </div>
          <span className="text-slate-300">·</span>
          <span className="font-medium">100% gratuit</span>
        </div>
      </div>
    </div>
  );
}

