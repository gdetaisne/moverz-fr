"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";

interface VideoExplainerProps {
  title: string;
  description?: string;
  posterUrl: string;
  videoUrl: string;
  mode?: "modal" | "inline";
  duration?: string;
}

export function VideoExplainer({
  title,
  description,
  posterUrl,
  videoUrl,
  mode = "modal",
  duration = "45s",
}: VideoExplainerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handlePlayClick = () => {
    if (mode === "modal") {
      setIsModalOpen(true);
      setIsVideoLoaded(true);
    } else {
      setIsVideoLoaded(true);
    }
  };

  if (mode === "inline") {
    return (
      <div className="group relative overflow-hidden rounded-card">
        {!isVideoLoaded ? (
          <button
            onClick={handlePlayClick}
            className="relative w-full focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] focus:ring-offset-2"
            aria-label={`Lire la vidéo : ${title}`}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-card">
              <Image
                src={posterUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-white/20"
                >
                  <Play className="h-7 w-7 fill-white text-white" style={{ marginLeft: '2px' }} />
                </motion.div>
              </div>
              
              {/* Duration badge */}
              <div className="absolute bottom-4 left-4 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {duration}
              </div>
            </div>
            {description && (
              <p className="mt-3 text-center text-sm text-[rgb(var(--text-2))]">{description}</p>
            )}
          </button>
        ) : (
          <div className="aspect-video w-full overflow-hidden rounded-card">
            <iframe
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        )}
      </div>
    );
  }

  // Modal mode
  return (
    <>
      {/* Trigger button */}
      <button
        onClick={handlePlayClick}
        className="group relative focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] focus:ring-offset-2"
        aria-label={`Lire la vidéo : ${title}`}
      >
        <div className="relative h-40 w-64 overflow-hidden rounded-card border-2 border-[rgb(var(--border))] transition-all group-hover:border-[rgb(var(--accent))] group-hover:shadow-md">
          <Image
            src={posterUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-sm"
            >
              <Play className="h-5 w-5 fill-white text-white" style={{ marginLeft: '2px' }} />
            </motion.div>
          </div>
          
          <div className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white">
            {duration}
          </div>
        </div>
        {description && (
          <p className="mt-2 text-xs text-[rgb(var(--text-2))]">{description}</p>
        )}
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Dialog */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl"
                role="dialog"
                aria-modal="true"
                aria-labelledby="video-title"
              >
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute -right-4 -top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[rgb(var(--text))] shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
                  aria-label="Fermer la vidéo"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Video container */}
                <div className="overflow-hidden rounded-card bg-black shadow-2xl">
                  <div className="aspect-video w-full">
                    {isVideoLoaded && (
                      <iframe
                        src={videoUrl}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
