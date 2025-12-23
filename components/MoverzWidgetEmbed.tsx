"use client";
import Script from "next/script";
import { useState, useEffect } from "react";

type MoverzWidgetEmbedProps = {
  source: string;
  from: string;
  citySlug?: string;
  className?: string;
  rootId?: string;
};

export default function MoverzWidgetEmbed({
  source,
  from,
  citySlug,
  className = "min-h-[520px] w-full",
  rootId = "moverz-widget-root",
}: MoverzWidgetEmbedProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  useEffect(() => {
    // Timeout pour détecter si le widget ne se monte pas
    const timer = setTimeout(() => {
      const rootElement = document.getElementById(rootId);
      if (rootElement && rootElement.children.length === 0) {
        console.warn("Widget ne s'est pas monté après 5s");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [rootId]);

  return (
    <>
      <Script
        id="moverz-widget-script"
        src="https://devis.moverz.fr/moverz-widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("✅ Script widget chargé");
          setScriptLoaded(true);
        }}
        onError={(e) => {
          console.error("❌ Erreur chargement script widget:", e);
          setScriptError(true);
        }}
      />
      <div
        id={rootId}
        className={className}
        data-source={source}
        data-from={from}
        data-city-slug={citySlug}
      >
        {/* Fallback temporaire pendant le chargement */}
        {!scriptLoaded && !scriptError && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 border-4 border-[#6BCFCF] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm text-[#1E293B]/70">Chargement du widget...</p>
            </div>
          </div>
        )}
        {scriptError && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-3 p-6">
              <p className="text-sm text-red-600">Le widget ne peut pas se charger pour le moment.</p>
              <a
                href="https://devis.moverz.fr/?source=moverz.fr&from=/"
                className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-all"
              >
                Obtenir mes devis
                <span>→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}


