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
    window.location.href = "https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=exit-intent";
  };

  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 animate-[fadeIn_0.3s_ease-out]"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 animate-[scaleIn_0.3s_ease-out]">
        <div className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.5)] p-8 md:p-10 border border-white/10">
          {/* Gradient accent */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6BCFCF]/10 via-transparent to-[#6BCFCF]/5 pointer-events-none" />
          
          {/* Animated glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#6BCFCF]/20 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none" />
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="relative text-center space-y-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6BCFCF]/20 to-[#6BCFCF]/5 border border-[#6BCFCF]/30 backdrop-blur-sm">
              <span className="text-5xl">⏱️</span>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Attendez !
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Obtenez votre premier devis en <strong className="text-[#6BCFCF]">3 minutes</strong>
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-col gap-3 text-left bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              {[
                { icon: "✅", text: "3 à 5 devis comparables", color: "text-green-400" },
                { icon: "🤖", text: "IA analyse vos photos", color: "text-[#6BCFCF]" },
                { icon: "🚫", text: "0 spam garanti", color: "text-orange-400" },
                { icon: "💯", text: "100% gratuit", color: "text-[#6BCFCF]" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <span className={`text-sm font-medium ${item.color}`}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handleWhatsApp}
                className="group w-full inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-[0_10px_40px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Démarrer sur WhatsApp</span>
              </button>

              <button
                onClick={handleWeb}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm px-6 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <span>Ou continuer sur le site</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>

            {/* Trust signal */}
            <div className="flex items-center justify-center gap-2 pt-4">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <svg className="w-4 h-4 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-white/70">Données sécurisées</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <svg className="w-4 h-4 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-white/70"><strong className="text-[#6BCFCF]">1 200+</strong> clients</span>
              </div>
            </div>
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

