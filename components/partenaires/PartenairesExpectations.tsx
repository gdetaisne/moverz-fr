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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0F172A]">
            Ce qu'on attend de vous
          </h2>
          <p className="text-lg text-[#6B7280]">
            Votre mission est simple : <span className="font-semibold text-[#0F172A]">répondre proprement et rapidement</span>.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-[#E3E5E8] shadow-sm"
        >
          <h3 className="text-xl font-bold text-[#0F172A] mb-6">Checklist</h3>
          
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
                <CheckCircle2 className="w-6 h-6 text-[#6BCFCF] flex-shrink-0 mt-0.5" />
                <span className="text-[#1E293B]">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="p-5 rounded-xl bg-[#6BCFCF]/10 border border-[#6BCFCF]/30">
            <p className="text-[#0F172A]">
              <span className="font-bold">Délai conseillé :</span> idéalement sous <span className="font-semibold text-[#6BCFCF]">24–48h</span> 
              {" "}(plus vite = plus de chances d'être choisi).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
