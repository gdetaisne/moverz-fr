"use client";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle2 } from "lucide-react";

export default function PartenairesHero() {
  const whatsappPhone = "33952824035"; // +33 9 52 82 40 35
  const whatsappText = "Bonjour ! Je souhaite devenir partenaire Moverz et recevoir des dossiers qualifiés.";
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappText)}`;

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
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Nous écrire sur WhatsApp</span>
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
              >
                <span>Devenir partenaire</span>
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
