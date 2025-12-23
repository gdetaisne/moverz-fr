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

  const quoteUrl = `https://devis.moverz.fr/?source=moverz.fr&from=${encodeURIComponent(fromPath)}`;
  // WhatsApp direct link (set this in env to enable true direct WA)
  // Example: NEXT_PUBLIC_WHATSAPP_PHONE_E164=33612345678 (no +, no spaces)
  const whatsappPhone = (process.env.NEXT_PUBLIC_WHATSAPP_PHONE_E164 || "").replace(/\D/g, "");
  const whatsappText = `Bonjour Moverz, je veux comparer des devis de déménagement. Je viens de ${fromPath}`;
  const whatsappUrl = whatsappPhone
    ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappText)}`
    : `${quoteUrl}&channel=whatsapp`;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      {/* VERSION MOBILE : Compacte et discrète */}
      <div className="md:hidden">
        <div className="bg-[#0B1220]/92 backdrop-blur-xl border-t border-white/10 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
              aria-label="Démarrer sur WhatsApp"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.89c0 2.09.55 4.12 1.6 5.92L0 24l6.35-1.68a11.86 11.86 0 0 0 5.71 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.41Zm-8.45 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77 1 1-3.67-.24-.38a9.88 9.88 0 0 1-1.52-5.25C2.13 6.42 6.49 2.06 11.86 2.06c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.37-4.36 9.74-9.67 9.74Z" />
                </svg>
              </span>
              <span>WhatsApp</span>
            </a>
            <a
              href={quoteUrl}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2B7A78] via-[#4FB8B8] to-[#6BCFCF] px-5 py-3 text-sm font-semibold text-[#04141f] shadow-[0_12px_40px_rgba(107,207,207,0.28)]"
              aria-label="Comparer mes devis"
            >
              <span>Comparer</span>
              <span className="text-base leading-none">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* VERSION DESKTOP : Premium élégante */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-5xl px-6 pb-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#0B1220]/88 backdrop-blur-xl border border-white/10 shadow-[0_14px_50px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6BCFCF]/80 to-transparent" />
            <div className="relative flex items-center justify-between gap-6 px-6 py-4 text-white">
              {/* Icône + Texte structuré */}
              <div className="flex items-center gap-4">
                <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0F172A]">
                  <div className="absolute inset-0 rounded-xl ring-1 ring-[#6BCFCF]/35" />
                  <Image
                    src="/logo.png"
                    alt="Moverz"
                    width={28}
                    height={28}
                    className="relative h-7 w-7"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base md:text-lg font-semibold leading-tight">
                    Déménagez sans stress
                  </p>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#6BCFCF]/12 px-2 py-1 font-semibold text-[#E6FFFA]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                      3 min
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#6BCFCF]/12 px-2 py-1 font-semibold text-[#E6FFFA]">
                      IA
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#6BCFCF]/12 px-2 py-1 font-semibold text-[#E6FFFA]">
                      0 spam
                    </span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
                  aria-label="Démarrer sur WhatsApp"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.89c0 2.09.55 4.12 1.6 5.92L0 24l6.35-1.68a11.86 11.86 0 0 0 5.71 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.41Zm-8.45 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77 1 1-3.67-.24-.38a9.88 9.88 0 0 1-1.52-5.25C2.13 6.42 6.49 2.06 11.86 2.06c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.37-4.36 9.74-9.67 9.74Z" />
                    </svg>
                  </span>
                  <span>WhatsApp</span>
                </a>
                <a
                  href={quoteUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2B7A78] via-[#4FB8B8] to-[#6BCFCF] px-6 py-3 text-sm font-semibold text-[#04141f] shadow-[0_12px_40px_rgba(107,207,207,0.28)] hover:shadow-[0_16px_60px_rgba(107,207,207,0.38)] hover:scale-[1.01] active:scale-[0.99] transition-all"
                  aria-label="Lancer le comparateur"
                >
                  <span>Comparer maintenant</span>
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

