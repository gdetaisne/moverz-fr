"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Clock, Shield, Zap } from "lucide-react";
import Image from "next/image";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";
import { generateWhatsAppDeepLink, getWhatsAppNumber } from "@/lib/whatsapp";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
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

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-100">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6BCFCF]/5 via-transparent to-[#2B7A78]/5 pointer-events-none" />
              
              {/* Animated glow - top right */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
              
              {/* Animated glow - bottom left */}
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2B7A78]/10 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none" style={{ animationDuration: '6s', animationDelay: '2s' }} />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white shadow-sm"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content - Split layout */}
              <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left: Mockup */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="relative w-full max-w-[280px]">
                    {/* iPhone frame */}
                    <div className="relative bg-[#1F2937] rounded-[48px] p-3 shadow-2xl">
                      <div className="relative bg-[#E5DDD5] rounded-[36px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                        {/* WhatsApp header */}
                        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-semibold">Moverz</p>
                            <p className="text-white/80 text-xs">en ligne</p>
                          </div>
                        </div>

                        {/* Chat messages */}
                        <div className="p-4 space-y-3 pt-6">
                          {/* Moverz message */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="flex justify-start"
                          >
                            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
                              <p className="text-[#1F2937] text-xs leading-relaxed">
                                <strong>3 minutes</strong> pour vos devis précis
                              </p>
                              <span className="text-[10px] text-gray-400 mt-1 block">14:23</span>
                            </div>
                          </motion.div>

                          {/* Photo grid message */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="flex justify-end"
                          >
                            <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3 py-3 max-w-[85%] shadow-sm">
                              <div className="grid grid-cols-2 gap-1.5">
                                {[1, 2, 3, 4].map((i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                                    className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-[#6BCFCF]/20 to-[#2B7A78]/20"
                                  />
                                ))}
                              </div>
                              <span className="text-[10px] text-gray-600 mt-2 block">14:24</span>
                            </div>
                          </motion.div>

                          {/* Confirmation message */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.4 }}
                            className="flex justify-start"
                          >
                            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
                              <p className="text-[#1F2937] text-xs leading-relaxed">
                                Parfait ! Vos <strong>devis arrivent</strong> sous 48h
                              </p>
                              <span className="text-[10px] text-gray-400 mt-1 block">14:25</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-[48px] bg-gradient-to-b from-[#6BCFCF]/20 to-transparent blur-2xl -z-10" />
                  </div>
                </div>

                {/* Right: CTA Content */}
                <div className="flex flex-col justify-center space-y-6">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-gradient-to-r from-[#6BCFCF]/10 to-[#2B7A78]/10 border border-[#6BCFCF]/20"
                  >
                    <Clock className="w-3.5 h-3.5 text-[#2B7A78]" />
                    <span className="text-xs font-semibold text-[#2B7A78]">3 minutes chrono</span>
                  </motion.div>

                  {/* Title */}
                  <div className="space-y-3">
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight"
                    >
                      Ne partez pas sans vos devis
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-base text-gray-600 leading-relaxed"
                    >
                      L'IA analyse vos photos et prépare 3 à 5 devis comparables. Simple, rapide, gratuit.
                    </motion.p>
                  </div>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    {[
                      { icon: Sparkles, text: "IA analyse photos", color: "from-[#6BCFCF] to-[#2B7A78]" },
                      { icon: Shield, text: "0 spam", color: "from-[#2B7A78] to-[#6BCFCF]" },
                      { icon: Zap, text: "Réponse 48h", color: "from-[#6BCFCF] to-[#2B7A78]" },
                      { icon: Clock, text: "100% gratuit", color: "from-[#2B7A78] to-[#6BCFCF]" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:border-[#6BCFCF]/30 hover:shadow-sm transition-all duration-300"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color}`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-medium text-gray-700">{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="space-y-3 pt-2"
                  >
                    <button
                      onClick={handleWhatsApp}
                      className="group w-full inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-[0_10px_40px_rgba(37,211,102,0.25)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span>Démarrer sur WhatsApp</span>
                    </button>

                    <button
                      onClick={handleWeb}
                      className="group w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-6 py-4 text-base font-semibold text-gray-900 hover:bg-white hover:border-[#6BCFCF]/30 hover:shadow-sm transition-all duration-300"
                    >
                      <span>Continuer sur le site</span>
                      <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </motion.div>

                  {/* Trust badges */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="flex items-center gap-4 pt-2 text-xs text-gray-500"
                  >
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-[#6BCFCF]" />
                      <span>Données sécurisées</span>
                    </div>
                    <div className="w-px h-3 bg-gray-300" />
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-[#2B7A78]">1 200+</span>
                      <span>clients satisfaits</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

