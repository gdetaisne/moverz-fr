"use client";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle2 } from "lucide-react";

export default function PartenairesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Devenir partenaire", href: "/partenaires/" },
          ]}
        />
        
        <div className="mt-12 text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
            <span>Réseau de déménageurs sélectionnés</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Recevez des dossiers qualifiés.
            <br />
            Envoyez votre devis.
            <br />
            <span className="text-[#6BCFCF]">Gagnez des clients.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Moverz sélectionne des déménageurs sérieux et vous transmet des dossiers complets (photos + infos) 
            pour que vous puissiez répondre vite et bien.
          </motion.p>

          {/* Proof points - badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {[
              "Pas d'abonnement",
              "Paiement uniquement au succès",
              "Process habituel si vous êtes choisi"
            ].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-[#6BCFCF]" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#6BCFCF] px-8 py-4 text-base font-semibold text-[#0F172A] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span>Voir la démo (1 min)</span>
                <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
              >
                <span>Nous contacter</span>
              </a>
            </div>
            
            {/* Micro-texte sous CTA */}
            <p className="text-sm text-white/60">
              Réponse rapide. Zéro engagement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
