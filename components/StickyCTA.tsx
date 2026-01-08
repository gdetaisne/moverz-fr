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
      {/* VERSION MOBILE : Premium compact */}
      <div className="md:hidden">
        <div className="relative bg-white/95 backdrop-blur-xl border-t border-[#E3E5E8]/50 px-4 py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
          {/* Subtle gradient accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#6BCFCF] to-transparent" />
          
          <div className="flex items-center gap-2.5">
            <a
              href={whatsappUrl}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md active:scale-95 transition-all"
              aria-label="Démarrer sur WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a
              href={quoteUrl}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md active:scale-95 transition-all"
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
          <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E3E5E8]/50 shadow-[0_-10px_60px_rgba(0,0,0,0.1)]">
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#6BCFCF] to-transparent" />
            
            {/* Subtle animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6BCFCF]/5 via-transparent to-[#6BCFCF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-center justify-between gap-6 px-6 py-4">
              {/* Icône + Texte structuré */}
              <div className="flex items-center gap-4">
                <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] shadow-sm">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#6BCFCF]/10 to-transparent" />
                  <Image
                    src="/logo.png"
                    alt="Moverz"
                    width={28}
                    height={28}
                    className="relative"
                  />
                </div>
                <div className="space-y-1.5">
                  <p className="text-base font-semibold text-[#0F172A] leading-tight">
                    Déménagez sans stress
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6BCFCF]/10 px-2.5 py-1 text-xs font-medium text-[#0F172A]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
                      3 min
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6BCFCF]/10 px-2.5 py-1 text-xs font-medium text-[#0F172A]">
                      IA
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6BCFCF]/10 px-2.5 py-1 text-xs font-medium text-[#0F172A]">
                      0 spam
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                  aria-label="Démarrer sur WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a
                  href={quoteUrl}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
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

