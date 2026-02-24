"use client";

/**
 * V4 RADICAL — HowItWorksVideo
 * Grande vignette + modal lazy loaded. Pas d'autoplay.
 */

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { FadeUpSection } from "@/components/motion";

export function HowItWorksVideo() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <FadeUpSection className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
        <div className="container max-w-5xl">
          {/* Title */}
          <h2
            className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] mb-12 text-left"
            style={{ color: "var(--color-text)" }}
          >
            Comment ça marche ?
          </h2>

          {/* Video thumbnail */}
          <button
            onClick={openModal}
            className="group relative block w-full max-w-3xl aspect-video rounded-[var(--radius-md)] overflow-hidden border transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-bg)",
              // @ts-ignore
              "--tw-ring-color": "var(--color-accent)",
            }}
            aria-label="Lire la vidéo explicative"
          >
            {/* Placeholder gradient */}
            <div className="absolute inset-0 opacity-90" style={{ background: "linear-gradient(to bottom right, var(--color-bg-dark), #1a2332)" }} />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-200 group-hover:scale-105 group-hover:bg-white/20"
              >
                <Play className="h-7 w-7 md:h-8 md:w-8 text-white ml-1" fill="white" />
              </div>
            </div>

            {/* Text overlay */}
            <div className="absolute bottom-6 left-6 text-left">
              <p className="text-white/60 text-sm font-medium">Vidéo explicative</p>
              <p className="text-white text-lg font-semibold">45 secondes pour tout comprendre</p>
            </div>
          </button>
        </div>
      </FadeUpSection>

      {/* Modal — lazy loaded */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl aspect-video rounded-[var(--radius-md)] overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&modestbranding=1&rel=0"
                title="Comment Moverz simplifie votre déménagement"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <button
                onClick={closeModal}
                className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Fermer la vidéo"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
