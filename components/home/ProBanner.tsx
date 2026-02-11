"use client";
import { motion } from "framer-motion";
import { Briefcase, Zap, TrendingUp } from "lucide-react";

export default function ProBanner() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0A0A0A] via-[#1E293B] to-brand-navy overflow-hidden">
      {/* Background glow effects - Plus intenses */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-turquoise/15 rounded-full blur-[160px] animate-pulse" style={{animationDuration: '6s'}} />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-brand-accent/18 rounded-full blur-[160px] animate-pulse" style={{animationDuration: '8s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-brand-turquoise/10 to-brand-accent/10 rounded-full blur-[180px]" />
      
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

          {/* Titre impactant avec gradient */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-brand-turquoise-200 to-brand-accent-200 bg-clip-text text-transparent mb-6 leading-tight"
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
              { icon: Zap, text: "Paiement au succès", gradient: "from-brand-turquoise/10 to-brand-turquoise/20" },
              { icon: TrendingUp, text: "Pas d'abonnement", gradient: "from-brand-accent/10 to-brand-accent/20" },
              { icon: Briefcase, text: "Zéro engagement", gradient: "from-brand-turquoise/10 to-brand-accent/15" },
            ].map((feature, i) => (
              <div
                key={i}
                className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${feature.gradient} border border-white/20 backdrop-blur-xl px-5 py-2.5 text-sm font-semibold text-white hover:border-brand-accent/40 hover:shadow-lg hover:shadow-brand-accent/20 hover:scale-105 transition-all duration-300`}
              >
                <feature.icon className="w-4 h-4 text-brand-accent group-hover:text-brand-turquoise transition-colors duration-300" />
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
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-turquoise via-brand-turquoise to-brand-accent px-8 py-4 text-base font-bold text-white shadow-[0_8px_32px_rgba(107,207,207,0.4)] hover:shadow-[0_12px_48px_rgba(167,139,250,0.5)] hover:scale-[1.05] transition-all duration-300 overflow-hidden border border-white/30"
            >
              <span className="relative z-10">Devenir partenaire</span>
              <span className="relative z-10 text-lg leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
              {/* Shine effect premium */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            
            <a
              href="/partenaires/#contact"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/20 backdrop-blur-xl px-6 py-4 text-base font-semibold text-white hover:border-brand-accent/40 hover:shadow-lg hover:shadow-brand-accent/20 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Nous contacter</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-turquoise/0 via-brand-accent/10 to-brand-turquoise/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
