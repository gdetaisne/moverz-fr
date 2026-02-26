"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Users } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

export default function PourquoiHero() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-24"
      style={{ 
        background: "linear-gradient(to bottom, #F0FDFA 0%, #E0F2FE 50%, #F9FAFB 100%)" 
      }}
    >
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* Vignette effect */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.05) 100%)"
        }}
      />

      <div className="container relative max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <ol className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
            <li><a href="/" className="hover:text-[var(--color-text)] transition-colors">Accueil</a></li>
            <li>/</li>
            <li className="text-[var(--color-text)]">Pourquoi Moverz</li>
          </ol>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-4 py-2 text-sm font-semibold text-[var(--color-text)] mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Ce qui nous différencie
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-heading text-4xl md:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] mb-6 text-[var(--color-text)]"
            >
              Pourquoi choisir{" "}
              <span style={{ color: "#0EA5A6" }}>Moverz</span> ?
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-xl text-[var(--color-text-secondary)] mb-10 leading-relaxed"
            >
              Moverz ne compare pas seulement des devis.{" "}
              <strong className="text-[var(--color-text)]">Moverz compare des entreprises, leur fiabilité et le risque associé.</strong>
            </motion.p>

            {/* CTA */}
            <motion.a
              variants={staggerItem}
              href="https://devis.moverz.fr/devis-gratuits"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)"
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Obtenir mes devis</span>
            </motion.a>
          </motion.div>

          {/* Right: Key features cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[var(--color-border)] hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10">
                <Shield className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="font-semibold text-[var(--color-text)]">Pros vérifiés</p>
                <p className="text-sm text-[var(--color-text-secondary)]">3 analyses de risque /100 (financier, juridique, avis)</p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[var(--color-border)] hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10">
                <TrendingUp className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="font-semibold text-[var(--color-text)]">Devis comparables</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Même base (dossier standardisé) pour tous</p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[var(--color-border)] hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10">
                <Users className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="font-semibold text-[var(--color-text)]">Sans démarchage</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Téléphone masqué jusqu'à votre choix. <a href="/blog/demenagement-sans-harcelement-protection-vie-privee" className="text-[var(--color-accent)] hover:underline">En savoir plus</a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
