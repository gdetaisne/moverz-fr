"use client";
import { motion } from "framer-motion";
import { Users, Zap } from "lucide-react";

export default function ProPartenairesBanner() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-r from-[#F9FAFB] to-white border-y border-[#E3E5E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          {/* Texte principal */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-3 py-1 text-xs font-medium text-[#0F172A] mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Nouveau déménageur ?</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-2">
              Commencez par rejoindre notre réseau
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              <strong>Moverz Pro</strong> est un SaaS de gestion de dossiers.{" "}
              <strong>Si vous n'êtes pas encore partenaire</strong>, commencez par rejoindre le réseau Moverz 
              pour recevoir des demandes de devis qualifiées.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <a
              href="/partenaires/"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-turquoise px-6 py-3 text-base font-semibold text-[#0F172A] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <Zap className="w-4 h-4" />
              <span>Devenir partenaire</span>
              <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

        {/* Note explicative */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 p-4 rounded-xl bg-white border border-[#E3E5E8]"
        >
          <p className="text-xs text-[#6B7280] leading-relaxed">
            💡 <span className="font-semibold text-[#0F172A]">Quelle différence ?</span>{" "}
            <strong>Partenaire</strong> = vous recevez des dossiers du marketplace Moverz (commission au succès).{" "}
            <strong>Moverz Pro</strong> = SaaS pour gérer VOS propres dossiers (abonnement mensuel). Les deux sont compatibles !
          </p>
        </motion.div>
      </div>
    </section>
  );
}
