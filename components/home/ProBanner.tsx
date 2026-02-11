"use client";
import { motion } from "framer-motion";
import { Briefcase, Zap, TrendingUp } from "lucide-react";

export default function ProBanner() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-turquoise/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[150px]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px]" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge premium avec glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(107,207,207,0.2)] mb-8"
          >
            <Briefcase className="w-4 h-4 text-brand-turquoise" />
            <span>Espace Professionnels</span>
          </motion.div>

          {/* Titre impactant */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Vous êtes déménageur ?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Rejoignez notre réseau et recevez des <strong className="text-white">dossiers qualifiés</strong> (infos standardisées), 
            inventaire et infos client pré-vérifiées.
          </motion.p>

          {/* Features badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            {[
              { icon: Zap, text: "Paiement au succès" },
              { icon: TrendingUp, text: "Pas d'abonnement" },
              { icon: Briefcase, text: "Zéro engagement" },
            ].map((feature, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/90"
              >
                <feature.icon className="w-4 h-4 text-brand-turquoise" />
                <span>{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs premium */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/partenaires/"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-turquoise-300 via-brand-turquoise to-brand-turquoise-500 px-8 py-4 text-base font-bold text-white shadow-glow-turquoise hover:shadow-glow-turquoise-lg hover:scale-[1.03] transition-all duration-300 overflow-hidden border border-white/20"
            >
              <span className="relative z-10">Devenir partenaire</span>
              <span className="relative z-10 text-lg leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-turquoise-200 to-brand-turquoise-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a
              href="/partenaires/#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/20 backdrop-blur-xl px-6 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-brand-turquoise/40 transition-all duration-300"
            >
              <span>Nous contacter</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
