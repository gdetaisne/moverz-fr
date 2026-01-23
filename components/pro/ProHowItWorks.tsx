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
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-medium text-[#0F172A] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
            Process simple
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0F172A]">
            Comment ça marche (en 3 étapes)
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
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
              <div className="bg-white rounded-2xl p-6 border border-[#E3E5E8] hover:border-[#6BCFCF]/50 hover:shadow-md transition-all duration-300 h-full">
                {/* Step badge */}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#6BCFCF]/20 border border-[#6BCFCF]/30 text-[#0F172A] font-bold text-sm mb-4">
                  {item.step}
                </div>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10 text-[#6BCFCF] mb-4">
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 text-[#0F172A]">{item.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.description}</p>
              </div>

              {/* Connector line (except last) */}
              {i < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#6BCFCF]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

