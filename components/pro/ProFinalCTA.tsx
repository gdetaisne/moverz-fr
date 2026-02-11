"use client";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare } from "lucide-react";

export default function ProFinalCTA() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6BCFCF] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6BCFCF] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-8 text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Prêt à fiabiliser vos devis (sans visites) ?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Un dossier standardisé, opposable, et exploitable par votre équipe — pour chiffrer plus vite,
            réduire les surprises et éviter les litiges évitables.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
              href="#contact"
              className="inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Parler à l'équipe</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/70 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6BCFCF]" />
              Dossier opposable
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6BCFCF]" />
              Relances automatiques
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6BCFCF]" />
              Exports & devis
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

