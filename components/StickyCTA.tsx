"use client";
import { buildTunnelUrl } from "@/lib/tunnel-url";
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
      {/* VERSION MOBILE : Premium & Clean */}
      <div className="md:hidden">
        <div 
          className="relative backdrop-blur-md px-4 py-4" 
          style={{ 
            background: "rgba(255,255,255,0.98)", 
            borderTop: "1px solid var(--color-border-light)", 
            boxShadow: "0 -8px 32px rgba(0,0,0,0.06)"
          }}
        >
          {/* Gradient accent line at top - Plus subtil */}
          <div 
            className="absolute top-0 left-0 right-0 h-0.5" 
            style={{ 
              background: "linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)",
              opacity: 0.6
            }} 
          />
          
          {/* Badge "Gratuit" - Plus moderne */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="relative inline-flex h-2 w-2">
              <span 
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                style={{ background: "var(--color-accent)" }} 
              />
              <span 
                className="relative inline-flex rounded-full h-2 w-2 shadow-sm" 
                style={{ background: "var(--color-accent)" }} 
              />
            </span>
            <span 
              className="text-xs font-semibold tracking-wide" 
              style={{ color: "var(--color-text-secondary)" }}
            >
              100% Gratuit · 3 min · 0 démarchage
            </span>
          </div>
          
          <a
            href={quoteUrl}
            className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white active:scale-[0.98] transition-all duration-300 overflow-hidden"
            style={{ 
              background: "var(--color-accent)", 
              boxShadow: "var(--shadow-sm)",
              borderRadius: "var(--radius-md)"
            }}
            aria-label="Obtenir mes devis gratuits"
          >
            <span className="relative z-10">Obtenir mes devis</span>
            <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-active:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {/* Subtle hover overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-active:opacity-10 transition-opacity duration-200" 
              style={{ background: "var(--color-bg-dark)" }} 
            />
          </a>
        </div>
      </div>

      {/* VERSION DESKTOP : Premium glassmorphism */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-6xl px-6 pb-6">
          <div 
            className="relative overflow-hidden backdrop-blur-md" 
            style={{ 
              background: "rgba(255,255,255,0.98)", 
              border: "1px solid var(--color-border-light)", 
              boxShadow: "var(--shadow-md)",
              borderRadius: "var(--radius-md)"
            }}
          >
            {/* Gradient accent line - Plus subtil et moderne */}
            <div 
              className="absolute top-0 left-0 right-0 h-0.5" 
              style={{ 
                background: "linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)",
                opacity: 0.7
              }} 
            />
            
            <div className="relative flex items-center justify-between gap-8 px-8 py-5">
              {/* Logo + Texte - Premium design */}
              <div className="flex items-center gap-5">
                {/* Logo avec effet premium */}
                <div 
                  className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center shadow-sm transition-transform duration-300 hover:scale-105" 
                  style={{ 
                    background: "var(--color-surface)", 
                    border: "2px solid var(--color-accent)", 
                    borderRadius: "var(--radius-md)",
                    boxShadow: "0 4px 12px rgba(14,165,166,0.15)"
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Moverz"
                    width={36}
                    height={36}
                    className="relative"
                  />
                  {/* Point animé premium */}
                  <span className="absolute -top-1 -right-1">
                    <span className="relative inline-flex h-3 w-3">
                      <span 
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                        style={{ background: "var(--color-accent)" }} 
                      />
                      <span 
                        className="relative inline-flex rounded-full h-3 w-3 shadow-sm" 
                        style={{ background: "var(--color-accent)" }} 
                      />
                    </span>
                  </span>
                </div>
                
                {/* Textes avec typographie V4 */}
                <div className="space-y-1">
                  <p 
                    className="text-base font-bold leading-tight tracking-tight" 
                    style={{ color: "var(--color-text)" }}
                  >
                    3 min · devis comparables · 0 démarchage
                  </p>
                  <p 
                    className="text-sm font-medium" 
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Numéro masqué · Entreprises vérifiées
                  </p>
                </div>
              </div>

              {/* CTA Section - Premium design */}
              <div className="flex items-center gap-4 flex-shrink-0">
                {/* Badge "Gratuit" - Design V4 */}
                <div 
                  className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold transition-all duration-300" 
                  style={{ 
                    background: "rgba(14,165,166,0.08)", 
                    border: "1px solid rgba(14,165,166,0.2)", 
                    color: "var(--color-accent)",
                    borderRadius: "var(--radius-sm)",
                    boxShadow: "var(--shadow-xs)"
                  }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="tracking-wide">100% Gratuit</span>
                </div>
                
                {/* CTA Button Premium V4 */}
                <a
                  href={quoteUrl}
                  className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-white transition-all duration-300 overflow-hidden"
                  style={{ 
                    background: "var(--color-accent)", 
                    borderRadius: "var(--radius-md)",
                    boxShadow: "var(--shadow-sm)"
                  }}
                  aria-label="Obtenir mes devis gratuits"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  <span className="relative z-10 tracking-tight">Obtenir mes devis</span>
                  <svg 
                    className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth={2.5} 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {/* Subtle shine effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                    style={{ background: "var(--color-surface)" }} 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

