"use client";

import { motion } from "framer-motion";

type CityStatsProps = {
  cityName: string;
};

export function CityStats({ cityName }: CityStatsProps) {
  const stats = [
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      value: "48h",
      label: "Temps moyen de réponse",
    },
    {
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      value: "5+",
      label: "Devis comparables",
      highlight: true,
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      value: "0€",
      label: "Gratuit pour vous",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[var(--brand-teal)]/25 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      <div className="container max-w-5xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-teal)]/10 px-4 py-2 text-sm font-medium text-[var(--brand-deep)] border border-[var(--brand-teal)]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)] animate-pulse" />
            <span>Moverz à {cityName}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)]">
            Ça marche à {cityName} aussi
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group"
            >
              <div className={`rounded-2xl border ${stat.highlight ? 'border-[var(--brand-teal)]/30 bg-[var(--brand-teal)]/5' : 'border-[#E5E7EB] bg-white'} p-8 hover:border-[var(--brand-teal)]/50 hover:shadow-xl transition-all duration-300`}>
                <div className={`flex items-center justify-center h-14 w-14 rounded-xl ${stat.highlight ? 'bg-[var(--brand-deep)] text-white' : 'bg-[var(--brand-teal)]/15 text-[var(--brand-deep)]'} group-hover:scale-110 transition-transform duration-300 mx-auto mb-6`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <p className={`text-4xl md:text-5xl font-bold mb-3 text-center ${stat.highlight ? 'text-[var(--brand-deep)]' : 'text-[var(--brand-navy)]'}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-[#6B7280] text-center leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
