"use client";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Calendar, Phone } from "lucide-react";
import Image from "next/image";

export default function ProContact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Parlons de votre projet
          </h2>
        </motion.div>

        {/* Présentation Lucie */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl p-8 shadow-lg border-2 border-[#6BCFCF]/20">
            {/* Photo Lucie */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#6BCFCF] shadow-lg">
                <Image
                  src="/lucie-profile.jpg"
                  alt="Lucie, Co-fondatrice Moverz"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#6BCFCF] rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
            </div>

            {/* Texte présentation */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start mb-2">
                <h3 className="text-2xl font-bold text-[#0F172A]">Lucie</h3>
                <span className="px-3 py-1 rounded-full bg-[#6BCFCF]/10 text-[#6BCFCF] text-xs font-semibold">
                  Co-fondatrice
                </span>
              </div>
              <p className="text-[#6B7280] leading-relaxed">
                Je réponds personnellement à toutes vos questions sur Moverz Pro. 
                WhatsApp pour une réponse rapide, email pour un échange détaillé, 
                ou choisissez un créneau et je vous rappelle sous 24h.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* WhatsApp Pro */}
          <motion.a
            href="https://wa.me/33752986581?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20Moverz%20Pro"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative rounded-2xl border-2 border-gray-200 bg-white p-8 hover:border-[#25D366]/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 mb-4">
              <MessageCircle className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              WhatsApp Pro
            </h3>
            <p className="text-sm text-[#6B7280] mb-4">
              Réponse en direct. Parfait pour une question rapide ou un premier échange.
            </p>
            
            <div className="inline-flex items-center gap-2 text-[#25D366] font-semibold text-sm">
              <span>Ouvrir WhatsApp</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-[#6B7280]">
                <Phone className="inline w-3 h-3 mr-1" />
                +33 7 52 98 65 81
              </p>
            </div>
          </motion.a>

          {/* Email Pro */}
          <motion.a
            href="mailto:lucie@moverz.fr?subject=Demande%20d%27information%20Moverz%20Pro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative rounded-2xl border-2 border-gray-200 bg-white p-8 hover:border-[#6BCFCF]/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#6BCFCF]/10 text-[#6BCFCF] group-hover:bg-[#6BCFCF] group-hover:text-white transition-all duration-300 mb-4">
              <Mail className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Email Pro
            </h3>
            <p className="text-sm text-[#6B7280] mb-4">
              Envoyez-nous un email détaillé. Réponse sous 2h en semaine (24h le week-end).
            </p>
            
            <div className="inline-flex items-center gap-2 text-[#6BCFCF] font-semibold text-sm">
              <span>Envoyer un email</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-[#6B7280] font-mono">
                lucie@moverz.fr
              </p>
            </div>
          </motion.a>

          {/* Calendly */}
          <motion.a
            href="https://calendly.com/lucie-moverz/30min"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative rounded-2xl border-2 border-[#6BCFCF] bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 hover:shadow-2xl transition-all duration-300 text-white md:col-span-2 lg:col-span-1"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#6BCFCF]/20 text-[#6BCFCF] group-hover:bg-[#6BCFCF] group-hover:text-[#0F172A] transition-all duration-300 mb-4">
              <Calendar className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold mb-2">
              Être rappelé(e)
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Réservez un créneau de 30 min. Lucie vous rappelle pour répondre à toutes vos questions.
            </p>
            
            <div className="inline-flex items-center gap-2 text-[#6BCFCF] font-semibold text-sm">
              <span>Choisir un créneau</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-xs text-white/70">
                📞 Rappel sous 24h · Lun-Ven 9h-19h
              </p>
            </div>

            {/* Highlight glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6BCFCF] to-[#2B7A78] rounded-2xl blur opacity-30 -z-10" />
          </motion.a>
        </div>


        {/* Trust badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[#6B7280]"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6BCFCF]" />
            <span>Réponse {'<'} 2h par email</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6BCFCF]" />
            <span>WhatsApp instantané</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6BCFCF]" />
            <span>Rappel sous 24h</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

