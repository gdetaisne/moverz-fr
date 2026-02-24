"use client";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle2 } from "lucide-react";

export default function PartenairesHero() {
  // Vidéo démo Vimeo
  const VIMEO_VIDEO_ID = "1159478255";
  const VIMEO_HASH = "e9d01e99d4";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-bg-dark)] via-[var(--color-bg-dark)] to-[var(--color-bg-dark)] text-white">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Devenir partenaire", href: "/partenaires/" },
          ]}
        />
        
        <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Colonne gauche : Texte */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span>Réseau de déménageurs sélectionnés</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Recevez des dossiers qualifiés.
              <br />
              Envoyez votre devis.
              <br />
              <span className="text-[var(--color-accent)]">Gagnez des clients.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base md:text-lg text-white/80 leading-relaxed mb-8"
            >
              Moverz sélectionne des déménageurs sérieux et vous transmet des dossiers complets (infos standardisées) 
              pour que vous puissiez répondre vite et bien.
            </motion.p>

            {/* Proof points - badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
            >
              {[
                "Pas d'abonnement",
                "Paiement au succès",
                "Process habituel"
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-3"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://pro.moverz.fr/inscription"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-[var(--color-text)] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <span>S'inscrire gratuitement</span>
                  <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
                >
                  Nous contacter
                </a>
              </div>
              
              <p className="text-sm text-white/60 text-center lg:text-left">
                Inscription en 1 min. Zéro engagement.
              </p>
            </motion.div>
          </div>

          {/* Colonne droite : Vidéo */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
              {/* 16:9 Aspect Ratio Container */}
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?h=${VIMEO_HASH}&title=0&byline=0&portrait=0`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title="Démo Moverz Partenaires"
                />
              </div>
            </div>
            
            {/* Badge "1 min" */}
            <div className="absolute -bottom-4 -right-4 bg-[var(--color-accent)] rounded-full px-4 py-2 shadow-lg">
              <p className="text-sm font-bold text-[var(--color-text)]">1 min</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
