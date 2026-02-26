"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock, Shield, X, Check } from "lucide-react";
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
        <>
          {/* Overlay doux derrière */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[9998]"
            onClick={handleClose}
          />

          {/* Popup au centre */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[440px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl border border-v4-border bg-white shadow-2xl">
              {/* Gradient de fond subtil */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-turquoise/5 via-transparent to-brand-turquoise/5 pointer-events-none" />
              
              {/* Barre supérieure colorée */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-turquoise via-[#2B7A78] to-brand-turquoise" />

              {/* Bouton fermer */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-[#64748B] hover:text-v4-text transition-colors bg-white/80 hover:bg-white rounded-full p-2 z-10"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative p-5 md:p-6 space-y-4">
                {/* Badge + Titre */}
                <div className="space-y-3">
                  {/* Badge certifié */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-v4-accent/10 border border-v4-accent/30">
                    <Shield className="w-4 h-4 text-v4-accent" />
                    <span className="text-xs font-bold text-v4-accent">1000+ déménageurs certifiés</span>
                  </div>
                  
                  {/* Titre principal */}
                  <h3 className="text-xl md:text-2xl font-bold text-v4-text leading-tight">
                    Comparez et économisez jusqu'à 40%
                  </h3>
                  <p className="text-sm text-[#64748B]">
                    Le plus grand réseau de déménageurs vérifiés en France
                  </p>
                </div>

                {/* Stats rapides */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-v4-accent/5 to-transparent border border-v4-accent/10">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-v4-accent" />
                    <span className="text-xs font-semibold text-v4-text">3 minutes</span>
                  </div>
                  <div className="w-px h-4 bg-v4-border" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#64748B]">Économie moyenne :</span>
                    <span className="text-sm font-bold text-v4-accent">430€</span>
                  </div>
                </div>

                {/* Bénéfices avec checkmarks */}
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-v4-accent/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-v4-accent stroke-[3]" />
                    </div>
                    <p className="text-sm text-v4-text font-medium">3 à 5 devis comparables en 3 minutes</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-v4-accent/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-v4-accent stroke-[3]" />
                    </div>
                    <p className="text-sm text-v4-text font-medium">Déménageurs vérifiés et notés par nos soins</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-v4-accent/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-v4-accent stroke-[3]" />
                    </div>
                    <p className="text-sm text-v4-text font-medium">Comparaison standardisée sans surprises</p>
                  </div>
                </div>

                {/* CTA principal */}
                <div className="pt-1">
                  <button
                    onClick={handleCTA}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-v4-accent to-[#2B7A78] px-5 py-3.5 text-base font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                  >
                    <span>Comparer gratuitement</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Réassurance finale */}
                <div className="flex items-center justify-center gap-2 text-xs text-[#94A3B8]">
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-v4-accent" />
                    <span>Sans engagement</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-v4-accent" />
                    <span>Réponse en 24h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-v4-accent" />
                    <span>100% gratuit</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
