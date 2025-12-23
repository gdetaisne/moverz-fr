"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

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
  // WhatsApp direct link - Numéro WhatsApp Business Moverz
  // +33 7 52 98 65 81 = 33752986581
  const whatsappPhone = (
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE_E164 ||
    "33752986581" // +33 7 52 98 65 81 (WhatsApp Business Moverz)
  ).replace(/\D/g, "");
  const whatsappText = `Bonjour ! Je souhaite obtenir des devis pour mon déménagement 🚚`;
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
        <div className="bg-[#0B1220]/97 backdrop-blur-xl border-t border-white/15 px-4 py-2.5 shadow-[0_-10px_34px_rgba(0,0,0,0.42)]">
          <div className="flex items-center gap-2">
            <Button href={whatsappUrl} variant="whatsapp" size="sm" className="flex-1 px-4 py-2.5" ariaLabel="Démarrer sur WhatsApp">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.89c0 2.09.55 4.12 1.6 5.92L0 24l6.35-1.68a11.86 11.86 0 0 0 5.71 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.41Zm-8.45 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77 1 1-3.67-.24-.38a9.88 9.88 0 0 1-1.52-5.25C2.13 6.42 6.49 2.06 11.86 2.06c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.37-4.36 9.74-9.67 9.74Z" />
                </svg>
              </span>
              <span>WhatsApp</span>
            </Button>
            <Button href={quoteUrl} variant="primary" size="sm" className="flex-1 px-4 py-2.5" ariaLabel="Comparer mes devis">
              <span>Comparer</span>
              <span className="text-base leading-none">→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* VERSION DESKTOP : Premium élégante */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-5xl px-6 pb-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#0B1220]/96 backdrop-blur-xl border border-white/14 shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6BCFCF]/80 to-transparent" />
            <div className="relative flex items-center justify-between gap-5 px-5 py-3.5 text-white">
              {/* Icône + Texte structuré */}
              <div className="flex items-center gap-3.5">
                <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0F172A]">
                  <div className="absolute inset-0 rounded-xl ring-1 ring-[#6BCFCF]/35" />
                  <Image
                    src="/logo.png"
                    alt="Moverz"
                    width={24}
                    height={24}
                    className="relative h-6 w-6"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm md:text-base font-semibold leading-tight">
                    Déménagez sans stress
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-white/70">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#6BCFCF]/12 px-2 py-0.5 font-semibold text-[#E6FFFA]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                      3 min
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#6BCFCF]/12 px-2 py-0.5 font-semibold text-[#E6FFFA]">
                      IA
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#6BCFCF]/12 px-2 py-0.5 font-semibold text-[#E6FFFA]">
                      0 spam
                    </span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <Button href={whatsappUrl} variant="whatsapp" size="sm" className="px-4 py-2.5" ariaLabel="Démarrer sur WhatsApp">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.89c0 2.09.55 4.12 1.6 5.92L0 24l6.35-1.68a11.86 11.86 0 0 0 5.71 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.41Zm-8.45 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77 1 1-3.67-.24-.38a9.88 9.88 0 0 1-1.52-5.25C2.13 6.42 6.49 2.06 11.86 2.06c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.37-4.36 9.74-9.67 9.74Z" />
                    </svg>
                  </span>
                  <span>WhatsApp</span>
                </Button>
                <Button href={quoteUrl} variant="primary" size="sm" className="px-5 py-2.5" ariaLabel="Lancer le comparateur">
                  <span>Comparer maintenant</span>
                  <span className="text-base leading-none">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

