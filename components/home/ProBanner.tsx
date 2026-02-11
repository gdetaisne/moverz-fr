"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ProBanner() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#0F172A] to-[#1E293B] overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6BCFCF]/5 rounded-full blur-[120px]" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge moderne */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-cyan-500/10 mb-6">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Espace Professionnels</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Vous êtes <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">déménageur</span> ?
          </h2>
          
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Rejoignez notre réseau et recevez des dossiers qualifiés (infos standardisées), inventaire et infos client pré-vérifiées.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/partenaires/"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-6 py-3 text-base font-bold text-white shadow-[0_12px_32px_rgba(6,182,212,0.35)] hover:shadow-[0_16px_48px_rgba(6,182,212,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Devenir partenaire</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a
              href="/partenaires/#contact"
              className="inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              <span>Nous contacter</span>
            </a>
          </div>

          {/* Note */}
          <p className="mt-6 text-xs text-white/60">
            Paiement uniquement au succès · Pas d'abonnement · Zéro engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
