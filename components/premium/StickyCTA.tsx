"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit3 } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { TunnelEntryData } from "@/lib/schemas/tunnel";

interface StickyCTAProps {
  data: Partial<TunnelEntryData>;
  onEditClick?: () => void;
}

export function StickyCTA({ data, onEditClick }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroSentinel = document.getElementById("hero-sentinel");
    const finalCTASentinel = document.getElementById("final-cta-sentinel");
    
    if (!heroSentinel) return;

    const observerCallback = () => {
      // Visible si hero n'est plus visible ET final CTA pas encore visible
      const heroRect = heroSentinel.getBoundingClientRect();
      const finalCTARect = finalCTASentinel?.getBoundingClientRect();
      
      const heroOutOfView = heroRect.bottom < 0;
      const finalCTAInView = finalCTARect ? finalCTARect.top < window.innerHeight : false;
      
      setIsVisible(heroOutOfView && !finalCTAInView);
    };

    const observer = new IntersectionObserver(
      observerCallback,
      { threshold: 0 }
    );

    observer.observe(heroSentinel);
    if (finalCTASentinel) {
      observer.observe(finalCTASentinel);
    }

    // Also listen to scroll for better reactivity
    window.addEventListener("scroll", observerCallback);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", observerCallback);
    };
  }, []);

  const handleCTA = () => {
    if (onEditClick) {
      onEditClick();
    } else {
      const form = document.getElementById("tunnel-entry-form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const hasData = data.fromCity || data.toCity || data.areaM2;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-[rgb(var(--border))] bg-[rgb(var(--surface))]/95 backdrop-blur-lg shadow-[0_-4px_12px_rgba(0,0,0,0.05)]"
        >
          <Container>
            <div className="flex items-center justify-between gap-4 py-3">
              {/* Desktop: Recap + CTA */}
              <div className="hidden items-center gap-4 md:flex md:flex-1">
                {hasData ? (
                  <div className="flex items-center gap-2 text-sm text-[rgb(var(--text-2))]">
                    {data.fromCity && (
                      <>
                        <span className="font-medium text-[rgb(var(--text))]">
                          {data.fromCity}
                        </span>
                        <span>→</span>
                      </>
                    )}
                    {data.toCity && (
                      <span className="font-medium text-[rgb(var(--text))]">
                        {data.toCity}
                      </span>
                    )}
                    {data.areaM2 && (
                      <>
                        <span className="mx-1">·</span>
                        <span className="font-medium text-[rgb(var(--text))]">
                          {data.areaM2} m²
                        </span>
                      </>
                    )}
                    <button
                      onClick={handleCTA}
                      className="ml-2 inline-flex items-center gap-1 text-[rgb(var(--accent-2))] transition-colors hover:text-[rgb(var(--accent))]"
                      aria-label="Modifier"
                    >
                      <Edit3 className="h-3.5 w-3.5" />
                      <span className="text-xs font-medium">Modifier</span>
                    </button>
                  </div>
                ) : (
                  <div className="text-sm font-medium text-[rgb(var(--text))]">
                    Comparez jusqu'à 5 devis de déménageurs vérifiés
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <div className="flex w-full items-center gap-3 md:w-auto">
                <Button
                  size="md"
                  onClick={handleCTA}
                  className="w-full md:w-auto"
                >
                  Obtenir mes devis
                </Button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
