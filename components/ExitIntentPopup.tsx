"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock, Shield, X } from "lucide-react";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";
import { buildTunnelUrl } from "@/lib/tunnel-url";

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

  const handleCTA = () => {
    trackEvent(TRACKING_EVENTS.EXIT_INTENT_WEB_CLICK, { pathname });
    window.location.href = buildTunnelUrl({ from: "exit-intent", devisRange: "3-5" });
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
          <div className="relative overflow-hidden rounded-2xl border border-v4-border bg-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-turquoise/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-turquoise via-[#2B7A78] to-brand-turquoise" />

            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-[#64748B] hover:text-v4-text transition-colors bg-white/80 hover:bg-white rounded-full p-2"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative p-5 md:p-6 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 border border-brand-turquoise-200 px-3 py-1.5">
                  <Clock className="w-3.5 h-3.5 text-v4-accent" />
                  <span className="text-xs font-semibold text-v4-accent">3 minutes</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#64748B]">
                  <Shield className="w-3.5 h-3.5 text-v4-accent" />
                  <span>Sans démarchage • sécurisé</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="text-lg md:text-xl font-bold text-v4-text leading-tight">
                  Avant de partir, on vous sort des devis comparables.
                </p>
                <p className="text-sm text-[#64748B]">
                  Vous complétez un dossier guidé, on le standardise, et vous comparez sans surprises.
                </p>
              </div>

              <div>
                <button
                  onClick={handleCTA}
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-v4-text px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-colors"
                >
                  <span>Comparer mes devis</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <p className="text-xs text-[#94A3B8] text-center">
                Astuce : plus le dossier est précis (accès, étages, options), plus les devis sont fiables.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
