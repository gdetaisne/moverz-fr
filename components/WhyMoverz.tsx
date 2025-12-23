"use client";

import { motion } from "framer-motion";
import Chip from "@/components/ui/Chip";
import Card from "@/components/ui/Card";

export default function WhyMoverz() {
  return (
    <section className="section section-light">
      <div className="container max-w-5xl">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <Chip tone="light" className="mx-auto">
            Pourquoi les photos changent tout
          </Chip>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight">
            Le vrai problème des comparateurs
          </h2>
          <p className="text-lg text-[#1E293B]/70 max-w-2xl mx-auto">
            Sans photos, chaque déménageur devine un volume différent.<br />
            Résultat ? Des devis impossibles à comparer.
          </p>
        </motion.div>

        {/* Problem vs Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Problem card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="h-full p-8 bg-white border-2 border-[#E3E5E8]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">Sans photos</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#1E293B]/70">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>Déménageur A estime 20m³</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>Déménageur B estime 30m³</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>Impossible de comparer les prix</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>Surprises le jour J</span>
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Solution card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="h-full p-8 bg-[#6BCFCF]/5 border-2 border-[#6BCFCF]/25">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6BCFCF]">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">Avec photos + IA</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#1E293B]/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6BCFCF] mt-0.5">✓</span>
                    <span>L'IA calcule 23m³ précis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6BCFCF] mt-0.5">✓</span>
                    <span>Tous les déménageurs reçoivent le même volume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6BCFCF] mt-0.5">✓</span>
                    <span>Devis réellement comparables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6BCFCF] mt-0.5">✓</span>
                    <span>Vous choisissez en connaissance de cause</span>
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Bottom trust line */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-sm text-[#1E293B]/70">
            <span className="font-semibold text-[#0F172A]">Bonus :</span> Vos photos restent privées, les déménageurs sont contrôlés (assurance + 0 litige), et votre numéro reste anonyme.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
