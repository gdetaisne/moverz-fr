"use client";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProHeroMockup from "./ProHeroMockup";
import { CheckCircle2 } from "lucide-react";

export default function ProHero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Moverz Pro", href: "/pro/" },
          ]}
        />
        
        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : Texte */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-cyan-500/10"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
              <span>SaaS pour déménageurs · dossier digital opposable</span>
            </motion.div>

            {/* Title avec gradient */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Nous augmentons votre CA.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">Zéro visite technique.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
            >
              Moverz Pro transforme chaque demande en <strong className="text-white">dossier digital opposable</strong>. 
              Chiffrez plus vite, réduisez les litiges, signez plus de contrats.
            </motion.p>

            {/* Proof points - Badges compacts */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              {[
                "Dossier opposable",
                "Inventaire IA",
                "Relances auto",
                "Exports PDF/CSV",
                "Déclaration valeur"
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white">
                  <CheckCircle2 className="w-3 h-3 text-[#6BCFCF]" />
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-4 pt-4"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_12px_40px_rgba(6,182,212,0.4)] hover:shadow-[0_16px_56px_rgba(6,182,212,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Demander une démo</span>
                  <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
                >
                  <span>Voir les tarifs</span>
                </a>
              </div>
              
              {/* Mini-preuve sous CTA */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-white/60">
                <span>✓ Dossiers opposables</span>
                <span className="text-white/30">·</span>
                <span>✓ Exports PDF/CSV</span>
                <span className="text-white/30">·</span>
                <span>✓ Relances auto</span>
              </div>
            </motion.div>
          </div>

          {/* Colonne droite : Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <ProHeroMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

