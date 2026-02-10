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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
            <Briefcase className="w-4 h-4 text-[#6BCFCF]" />
            <span>Espace Professionnels</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Vous êtes déménageur ?
          </h2>
          
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Rejoignez notre réseau et recevez des dossiers qualifiés (infos standardisées), inventaire et infos client pré-vérifiées.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/partenaires/"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#6BCFCF] px-6 py-3 text-base font-semibold text-[#0F172A] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <span>Devenir partenaire</span>
              <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
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
