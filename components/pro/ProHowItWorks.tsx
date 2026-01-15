"use client";
import { motion } from "framer-motion";
import { Send, Camera, FileText } from "lucide-react";

export default function ProHowItWorks() {
  const steps = [
    {
      step: "1",
      icon: Send,
      title: "Vous créez un lead",
      description: "Depuis le backoffice, vous envoyez un lien au client (SMS/email/WhatsApp).",
    },
    {
      step: "2",
      icon: Camera,
      title: "Le client complète",
      description: "Formulaire + adresses/dates + photos guidées (pièces, accès, zones à risque).",
    },
    {
      step: "3",
      icon: FileText,
      title: "Vous chiffrez vite",
      description:
        "Dossier opposable + inventaire IA + déclaration de valeur + exports. Relances auto si incomplet.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Comment ça marche (en 3 étapes)
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Un process simple pour qualifier sans déplacement — et envoyer des devis plus fiables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#6BCFCF]/50 transition-all duration-300 h-full">
                {/* Step badge */}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#6BCFCF]/20 text-[#6BCFCF] font-bold text-sm mb-4">
                  {item.step}
                </div>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10 text-[#6BCFCF] mb-4">
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
              </div>

              {/* Connector line (except last) */}
              {i < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#6BCFCF]/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

