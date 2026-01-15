"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock, Shield, X } from "lucide-react";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";
import { generateWhatsAppDeepLink, getWhatsAppNumber } from "@/lib/whatsapp";

type ExitIntentReason = "mouse-leave-top" | "scroll-up";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [armed, setArmed] = useState(false);
  const pathname = usePathname();

  const isExcludedPath = useMemo(() => {
    const p = (pathname || "/").toLowerCase();
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

    const open = (reason: ExitIntentReason) => {
      if (show) return;
      if (!armed) return;
      if (alreadyShownThisSession()) return;
      if (hasConversionIntentThisSession()) return;
      if (shouldSuppressByFrequency()) return;

      setShow(true);
      markShown();
      trackEvent(TRACKING_EVENTS.EXIT_INTENT_SHOWN, { reason, pathname });
    };

    const armTimeout = window.setTimeout(() => setArmed(true), 8000);

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) open("mouse-leave-top");
    };

    let lastY = window.scrollY;
    let lastT = Date.now();
    const onScroll = () => {
      const now = Date.now();
      const y = window.scrollY;

      // arm if user has actually read a bit
      if (y > 220) setArmed(true);

      const dy = y - lastY;
      const dt = now - lastT;
      lastY = y;
      lastT = now;

      if (dt > 0 && dy < -240 && y < 140) open("scroll-up");
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShow(false);
        trackEvent(TRACKING_EVENTS.EXIT_INTENT_CLOSED, { pathname });
      }
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(armTimeout);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [armed, canRun, pathname, show]);

  // Auto-dismiss after a short timeout (non-blocking UX).
  useEffect(() => {
    if (!show) return;
    const timeout = window.setTimeout(() => setShow(false), 22000);
    return () => window.clearTimeout(timeout);
  }, [show]);

  const handleClose = () => {
    setShow(false);
    trackEvent(TRACKING_EVENTS.EXIT_INTENT_CLOSED, { pathname });
  };

  const handleWhatsApp = () => {
    trackEvent(TRACKING_EVENTS.EXIT_INTENT_WHATSAPP_CLICK, { pathname });
    window.location.href = generateWhatsAppDeepLink(getWhatsAppNumber(), "exit-intent");
  };

  const handleWeb = () => {
    trackEvent(TRACKING_EVENTS.EXIT_INTENT_WEB_CLICK, { pathname });
    window.location.href =
      "https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=exit-intent";
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="fixed z-[9999] bottom-4 right-4 left-4 md:left-auto md:w-[420px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6BCFCF]/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6BCFCF] via-[#2B7A78] to-[#6BCFCF]" />

            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-[#64748B] hover:text-[#0F172A] transition-colors bg-white/80 hover:bg-white rounded-full p-2"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative p-5 md:p-6 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 border border-[#6BCFCF]/20 px-3 py-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#2B7A78]" />
                  <span className="text-xs font-semibold text-[#2B7A78]">3 minutes</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#64748B]">
                  <Shield className="w-3.5 h-3.5 text-[#6BCFCF]" />
                  <span>Sans démarchage • sécurisé</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="text-lg md:text-xl font-bold text-[#0F172A] leading-tight">
                  Avant de partir, on vous sort 3 à 5 devis comparables.
                </p>
                <p className="text-sm text-[#64748B]">
                  Vous envoyez quelques photos, on standardise le dossier, et vous comparez sans surprises.
                </p>
              </div>

              <div className="grid gap-2.5">
                <button
                  onClick={handleWhatsApp}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1E293B] transition-colors"
                >
                  <span>Démarrer sur WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={handleWeb}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] hover:border-[#6BCFCF]/60 hover:bg-[#FAFAFA] transition-colors"
                >
                  <span>Continuer via le formulaire web</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <p className="text-[11px] text-[#94A3B8] text-center">
                Astuce : 3 photos suffisent (rue/entrée/escaliers) pour fiabiliser les devis.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
