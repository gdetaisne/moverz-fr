"use client";
import { useState, useEffect } from "react";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";
import { generateWhatsAppDeepLink, getWhatsAppNumber } from "@/lib/whatsapp";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    if (sessionStorage.getItem("exitIntentShown")) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top and hasn't been shown yet
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
        trackEvent(TRACKING_EVENTS.EXIT_INTENT_SHOWN, {});
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => {
    setShow(false);
    trackEvent(TRACKING_EVENTS.EXIT_INTENT_CLOSED, {});
  };

  const handleWhatsApp = () => {
    trackEvent(TRACKING_EVENTS.EXIT_INTENT_WHATSAPP_CLICK, {});
    window.location.href = generateWhatsAppDeepLink(getWhatsAppNumber(), "exit-intent");
  };

  const handleWeb = () => {
    trackEvent(TRACKING_EVENTS.EXIT_INTENT_WEB_CLICK, {});
    window.location.href = "https://devis.moverz.fr/?source=moverz.fr&from=exit-intent";
  };

  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-[fadeIn_0.3s_ease-out]"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 animate-[scaleIn_0.3s_ease-out]">
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-[#1E293B]/40 hover:text-[#1E293B] transition-colors"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="text-center space-y-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6BCFCF]/10">
              <svg className="w-8 h-8 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                Attendez ! ⏱️
              </h2>
              <p className="text-lg text-[#1E293B]/70">
                Obtenez votre premier devis en <strong className="text-[#0F172A]">3 minutes</strong>
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-col gap-3 text-left bg-[#F8F9FA] rounded-xl p-4">
              {[
                { icon: "✅", text: "3 à 5 devis comparables" },
                { icon: "🤖", text: "IA analyse vos photos" },
                { icon: "🚫", text: "0 spam garanti" },
                { icon: "💯", text: "100% gratuit" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-[#1E293B]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Démarrer sur WhatsApp</span>
              </button>

              <button
                onClick={handleWeb}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0F172A] bg-white px-6 py-4 text-base font-semibold text-[#0F172A] hover:bg-gray-50 transition-all"
              >
                <span>Ou continuer sur le site</span>
                <span className="text-lg">→</span>
              </button>
            </div>

            {/* Trust signal */}
            <p className="text-xs text-[#1E293B]/60 pt-2">
              🔒 Vos données sont sécurisées · Déjà <strong>1 200+ déménagements</strong> accompagnés
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}} />
    </>
  );
}

