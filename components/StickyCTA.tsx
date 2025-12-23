"use client";
import { useEffect, useState } from "react";

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

  const quoteUrl = `https://devis.moverz.fr/?source=moverz.fr&from=${encodeURIComponent(fromPath)}`;
  const whatsappUrl = `${quoteUrl}&channel=whatsapp`;

  const scrollToWidget = () => {
    if (typeof window === "undefined") return;
    const el = document.getElementById("moverz-widget-root");
    if (!el) {
      window.location.href = quoteUrl;
      return;
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Subtle highlight for orientation
    el.classList.add("ring-4", "ring-[#6BCFCF]/30", "ring-offset-4", "ring-offset-white", "rounded-2xl");
    window.setTimeout(() => {
      el.classList.remove("ring-4", "ring-[#6BCFCF]/30", "ring-offset-4", "ring-offset-white", "rounded-2xl");
    }, 1400);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      {/* VERSION MOBILE : Compacte et discrète */}
      <div className="md:hidden">
        <div className="bg-white/95 backdrop-blur-xl border-t border-[#E3E5E8] px-4 py-3 shadow-[0_-4px_18px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-2">
            <a
              href={quoteUrl}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#020617] transition-colors"
              aria-label="Recevoir mes devis gratuits"
            >
              <span>Comparer</span>
              <span className="text-base leading-none">→</span>
            </a>
            <a
              href={whatsappUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E3E5E8] bg-white px-4 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F9FAFB] transition-colors"
              aria-label="Démarrer via WhatsApp"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7E]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.89c0 2.09.55 4.12 1.6 5.92L0 24l6.35-1.68a11.86 11.86 0 0 0 5.71 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.41Zm-8.45 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77 1 1-3.67-.24-.38a9.88 9.88 0 0 1-1.52-5.25C2.13 6.42 6.49 2.06 11.86 2.06c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.37-4.36 9.74-9.67 9.74Zm5.32-7.27c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.73-1.61-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.74-.71 1.99-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </span>
              <span>WhatsApp</span>
            </a>
          </div>
          <button
            type="button"
            onClick={scrollToWidget}
            className="mt-2 w-full rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-[12px] font-semibold text-[#2B7A78] hover:bg-[#6BCFCF]/15 transition-colors"
          >
            Ajouter des photos (plus précis)
          </button>
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

              {/* CTAs */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={scrollToWidget}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E3E5E8] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F9FAFB] transition-colors"
                  aria-label="Ajouter des photos (plus précis)"
                >
                  <svg className="h-5 w-5 text-[#2B7A78]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h3l2-2h8l2 2h3v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                  <span>Ajouter des photos</span>
                </button>
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E3E5E8] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F9FAFB] transition-colors"
                  aria-label="Démarrer via WhatsApp"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7E]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.89c0 2.09.55 4.12 1.6 5.92L0 24l6.35-1.68a11.86 11.86 0 0 0 5.71 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.41Zm-8.45 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77 1 1-3.67-.24-.38a9.88 9.88 0 0 1-1.52-5.25C2.13 6.42 6.49 2.06 11.86 2.06c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.37-4.36 9.74-9.67 9.74Zm5.32-7.27c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.73-1.61-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.74-.71 1.99-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.57-.35Z" />
                    </svg>
                  </span>
                  <span>WhatsApp</span>
                </a>
                <a
                  href={quoteUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#020617] transition-colors"
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
    </div>
  );
}

