"use client";
import { motion } from "framer-motion";
import { CircleOff, XCircle, CheckCircle2, Percent } from "lucide-react";

export default function PartenairesCommission() {
  const points = [
    { icon: CircleOff, text: "Pas d'abonnement", color: "text-brand-turquoise" },
    { icon: XCircle, text: "Aucun paiement si le dossier n'aboutit pas", color: "text-brand-turquoise" },
    { icon: CheckCircle2, text: "Moverz est rémunéré uniquement si le client confirme", color: "text-brand-turquoise" },
    { icon: Percent, text: "Commission facturée après versement des arrhes par le client", color: "text-brand-turquoise" }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0F172A]">
            Comment Moverz est rémunéré
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-3xl p-8 md:p-12 border border-[#E3E5E8]"
        >
          <ul className="space-y-5 mb-8">
            {points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-[#E3E5E8]">
                  <point.icon className={`w-5 h-5 ${point.color}`} />
                </div>
                <span className="text-[#1E293B] pt-2 font-medium">
                  {point.text}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="p-6 rounded-xl bg-white border border-brand-turquoise/30">
            <h3 className="font-bold text-[#0F172A] mb-2">Modèle de rémunération</h3>
            <p className="text-[#6B7280]">
              Commission : <span className="font-semibold text-[#0F172A]">10% HT</span> sur les dossiers payants
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
