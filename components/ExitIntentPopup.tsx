"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Clock, Shield, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";
import { generateWhatsAppDeepLink, getWhatsAppNumber } from "@/lib/whatsapp";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [armed, setArmed] = useState(false);
  const pathname = usePathname();

  const isExcludedPath = useMemo(() => {
    const p = (pathname || "/").toLowerCase();
    // Pages où un interstitiel est particulièrement pénible / contre-productif
    const excludedPrefixes = [
      "/blog",
      "/cgv",
      "/faq",
      "/a-propos",
      "/contact",
      // pages déjà très “conversion”
      "/comparateur-demenageurs",
      "/calculateur-volume-demenagement",
      "/choisir-ville",
    ];
    return excludedPrefixes.some((prefix) => p.startsWith(prefix));
  }, [pathname]);

  const canRun = useMemo(() => {
    if (typeof window === "undefined") return false;
    // Ignore if reduced motion
    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return false;
    if (isExcludedPath) return false;
    return true;
  }, [isExcludedPath]);

  const shouldSuppressByFrequency = () => {
    try {
      const KEY = "exitIntentLastShownAt";
      const last = localStorage.getItem(KEY);
      if (!last) return false;
      const lastTs = Number(last);
      if (!Number.isFinite(lastTs)) return false;
      // 7 jours
      const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
      return Date.now() - lastTs < SEVEN_DAYS;
    } catch {
      return false;
    }
  };

  const markShown = () => {
    try {
      sessionStorage.setItem("exitIntentShown", "true");
      localStorage.setItem("exitIntentLastShownAt", String(Date.now()));
    } catch {
      // ignore
    }
  };

  const alreadyShownThisSession = () => {
    try {
      return !!sessionStorage.getItem("exitIntentShown");
    } catch {
      return false;
    }
  };

  const hasConversionIntentThisSession = () => {
    try {
      return !!sessionStorage.getItem("moverzConversionIntent");
    } catch {
      return false;
    }
  };

  useEffect(() => {
    setMounted(true);

    if (!canRun) return;

    const open = (reason: "mouse-leave-top" | "scroll-up") => {
      if (show) return;
      if (!canRun) return;
      if (!armed) return;
      if (alreadyShownThisSession()) return;
      if (hasConversionIntentThisSession()) return;
      if (shouldSuppressByFrequency()) return;

      setShow(true);
      markShown();
      trackEvent(TRACKING_EVENTS.EXIT_INTENT_SHOWN, { reason, pathname });
    };

    // Arm after a short delay or once the user has scrolled a bit (means they actually read).
    const armTimeout = window.setTimeout(() => setArmed(true), 8000);
    const onArmScroll = () => {
      if (window.scrollY > 220) setArmed(true);
    };

    // Exit intent by mouse leaving from top.
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) open("mouse-leave-top");
    };

    // Secondary trigger: user scrolls up quickly towards the top.
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      // delta < 0 => scrolling up
      if (delta < -220 && y < 140) open("scroll-up");
      lastY = y;
      onArmScroll();
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(armTimeout);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [armed, canRun, pathname, show]);

  // Auto-dismiss: if user scrolls down (meaning they're engaged) or after a short timeout.
  useEffect(() => {
    if (!show) return;

    const shownAtScrollY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y - shownAtScrollY > 260) {
        handleClose();
      }
    };
    const timeout = window.setTimeout(() => {
      handleClose();
    }, 22000);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, [show]);

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
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6BCFCF]/5 via-transparent to-transparent pointer-events-none" />
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6BCFCF] via-[#2B7A78] to-[#6BCFCF]" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors z-10 bg-gray-50 hover:bg-gray-100 rounded-full p-2"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content - Compact vertical */}
              <div className="relative space-y-5">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6BCFCF]/10 border border-[#6BCFCF]/20"
                >
                  <Clock className="w-3.5 h-3.5 text-[#2B7A78]" />
                  <span className="text-xs font-semibold text-[#2B7A78]">3 minutes chrono</span>
                </motion.div>

                {/* Title */}
                <div className="space-y-2">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight"
                  >
                    Ne partez pas sans vos devis
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-gray-600"
                  >
                    3 à 5 devis comparables en quelques photos
                  </motion.p>
                </div>

                {/* Features - Compact pills */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-2"
                >
                  {[
                    { icon: Sparkles, text: "IA analyse" },
                    { icon: Shield, text: "0 spam" },
                    { icon: Zap, text: "48h" },
                    { icon: Clock, text: "Gratuit" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-gray-50 border border-gray-200"
                    >
                      <item.icon className="w-3.5 h-3.5 text-[#2B7A78]" />
                      <span className="text-xs font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2.5 pt-2"
                >
                  <button
                    onClick={handleWhatsApp}
                    className="group w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>Démarrer sur WhatsApp</span>
                  </button>

                  <button
                    onClick={handleWeb}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
                  >
                    <span>Continuer sur le site</span>
                    <span className="text-base group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                  </button>
                </motion.div>

                {/* Trust - Compact */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-3 pt-1 text-xs text-gray-500"
                >
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-[#6BCFCF]" />
                    <span>Sécurisé</span>
                  </div>
                  <div className="w-px h-3 bg-gray-300" />
                  <span><strong className="text-[#2B7A78]">1 200+</strong> clients</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

