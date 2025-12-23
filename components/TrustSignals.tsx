"use client";

import { motion } from "framer-motion";
import Chip from "@/components/ui/Chip";
import Card from "@/components/ui/Card";

export default function TrustSignals() {
  const signals = [
    {
      title: "Données sécurisées",
      text: "Vos photos et informations sont cryptées et supprimées après votre déménagement.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Déménageurs vérifiés",
      text: "Assurances contrôlées, avis clients analysés, 0 litige toléré.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "100% gratuit",
      text: "Aucun frais caché, aucun engagement. Vous ne payez que le déménageur choisi.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Support dédié",
      text: "Un problème ? Notre équipe intervient pour trouver une solution.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section section-light">
      <div className="container max-w-5xl relative">
        {/* Header with animation */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex justify-center">
            <Chip tone="brand" className="px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
              Confiance & sécurité
            </Chip>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-[#0F172A]">
            Vos données sont protégées
          </h2>
        </motion.div>

        {/* Grid with stagger animation */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {signals.map((signal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group"
            >
              <Card className="p-8 hover:border-[#6BCFCF]/50 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-[#F0FDFA] text-[#2B7A78] group-hover:bg-[#6BCFCF] group-hover:text-[#04141f] transition-all duration-300 mb-4">
                  {signal.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 text-[#0F172A]">
                  {signal.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {signal.text}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
