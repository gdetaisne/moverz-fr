"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function PartenairesExpectations() {
  const checklist = [
    "Lire le dossier (adresses, accès, volume estimé, options, dates)",
    "Envoyer un devis clair (prestations incluses, conditions, validité)",
    "Indiquer vos disponibilités",
    "Ajouter des réserves si nécessaire",
    "Poser vos questions si quelque chose manque"
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#F9FAFB] to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--color-text)]">
            Ce qu'on attend de vous
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Votre mission est simple : <span className="font-semibold text-[var(--color-text)]">répondre proprement et rapidement</span>.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--color-border)] shadow-sm"
        >
          <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">Checklist</h3>
          
          <ul className="space-y-4 mb-8">
            {checklist.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-text-secondary)]">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="p-5 rounded-xl bg-brand-turquoise/10 border border-brand-turquoise/30">
            <p className="text-[var(--color-text)]">
              <span className="font-bold">Délai conseillé :</span> idéalement sous <span className="font-semibold text-brand-turquoise">24–48h</span> 
              {" "}(plus vite = plus de chances d'être choisi).
            </p>
          </div>

          {/* Note */}
          <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-[#F9FAFB] to-white border border-[var(--color-border)]">
            <p className="text-sm text-[var(--color-text-secondary)]">
              <span className="font-semibold text-[var(--color-text)]">Besoin d'un outil pour gérer vos dossiers ?</span>
              {" "}Contactez-nous pour découvrir nos solutions SaaS pour déménageurs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
