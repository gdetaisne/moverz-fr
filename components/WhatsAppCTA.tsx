"use client";
import { useState, useEffect } from "react";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";
import { generateWhatsAppDeepLink, getWhatsAppNumber } from "@/lib/whatsapp";
import WhatsAppModal from "./WhatsAppModal";

type WhatsAppCTAProps = {
  source?: string;
  className?: string;
};

export default function WhatsAppCTA({
  source = "home",
  className = "",
}: WhatsAppCTAProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Device detection (simple UA + viewport check)
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleWhatsAppClick = () => {
    trackEvent(TRACKING_EVENTS.HOME_CTA_WHATSAPP_CLICK, {
      source,
      device: isMobile ? "mobile" : "desktop",
    });

    if (isMobile) {
      // Mobile: deep link direct to WhatsApp app
      window.location.href = generateWhatsAppDeepLink(getWhatsAppNumber(), source);
    } else {
      // Desktop: open QR modal
      setShowModal(true);
      trackEvent(TRACKING_EVENTS.WHATSAPP_QR_OPEN, { source });
    }
  };

  const handleWebClick = () => {
    trackEvent(TRACKING_EVENTS.HOME_CTA_WEB_CLICK, {
      source,
      device: isMobile ? "mobile" : "desktop",
    });
    window.location.href = `https://devis.moverz.fr/?source=moverz.fr&from=${source}&devis_range=3-5`;
  };

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <>
      <div className={`space-y-4 ${className}`}>
        {/* CTA primaire WhatsApp (WhatsApp green) */}
        <button
          onClick={handleWhatsAppClick}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-[0_10px_40px_rgba(37,211,102,0.25)] hover:shadow-[0_14px_60px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          aria-label={
            isMobile
              ? "Démarrer sur WhatsApp"
              : "Continuer sur WhatsApp (recommandé)"
          }
        >
          {/* WhatsApp icon */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span>
            {isMobile
              ? "Démarrer sur WhatsApp"
              : "Continuer sur WhatsApp (recommandé)"}
          </span>
        </button>

        {/* Sous-texte réassurance */}
        <p className="text-sm text-[#1E293B]/70 font-medium text-center sm:text-left">
          Le plus simple • 6 photos • Devis plus justes • 0 spam
        </p>

        {/* CTA secondaire (lien discret) */}
        <button
          onClick={handleWebClick}
          className="block text-[#0F172A]/60 hover:text-[#0F172A] text-sm font-medium underline underline-offset-4 transition-colors mx-auto sm:mx-0"
        >
          Je préfère {isMobile ? "le faire sur le site" : "continuer sur le site"}
        </button>
      </div>

      {/* Modal desktop QR */}
      {showModal && (
        <WhatsAppModal
          source={source}
          onClose={() => {
            setShowModal(false);
            trackEvent(TRACKING_EVENTS.WHATSAPP_MODAL_CLOSE, { source });
          }}
        />
      )}
    </>
  );
}

