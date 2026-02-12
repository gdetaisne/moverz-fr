"use client";
import { motion } from "framer-motion";
import { Send, ClipboardList, FileText } from "lucide-react";

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
      icon: ClipboardList,
      title: "Le client complète",
      description: "Formulaire + adresses/dates + infos clés (accès, contraintes, options).",
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
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-4 py-2 text-sm font-medium text-[var(--color-text)] mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-turquoise" />
            Process simple
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-text)]">
            Comment ça marche (en 3 étapes)
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Un process simple pour qualifier sans déplacement — et envoyer des devis plus fiables.
          </p>
        </motion.div>

        {/* Stepper horizontal compact */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-[#E3E5E8] hidden md:block" />
            <div className="absolute top-12 left-0 w-2/3 h-0.5 bg-gradient-to-r from-brand-turquoise to-brand-turquoise/30 hidden md:block" />
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
              {steps.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-white border-2 border-[var(--color-border)] shadow-sm mb-3 z-10">
                      <div className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-brand-turquoise text-white text-xs font-bold">
                        {item.step}
                      </div>
                      <item.icon className="w-10 h-10 text-brand-turquoise" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--color-text)] text-center mb-2">{item.title}</h3>
                    <p className="text-xs text-[var(--color-text-secondary)] text-center leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

