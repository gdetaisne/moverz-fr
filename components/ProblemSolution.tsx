"use client";

import { motion } from "framer-motion";

export default function ProblemSolution() {
  const stats = [
    { 
      value: "1 200", 
      suffix: "+", 
      label: "déménagements",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    { 
      value: "4.9", 
      suffix: "/5", 
      label: "note clients",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    { 
      value: "5", 
      suffix: "+", 
      label: "devis comparables",
      accent: true,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    { 
      value: "100", 
      suffix: "%", 
      label: "gratuit",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#0F172A] text-white overflow-hidden">
      <div className="container max-w-5xl relative">
        {/* Title with animation */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
            Notre promesse
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Pas de perte de temps
          </h2>
          <p className="text-lg text-white/70">
            3 min au lieu de 2h d'appels.
          </p>
        </motion.div>

        {/* Stats grid with stagger animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group"
            >
              <div className={`relative rounded-2xl border p-6 text-center space-y-3 transition-all duration-300 ${
                stat.accent
                  ? "border-[#6BCFCF]/50 bg-white/5 hover:bg-white/10 hover:border-[#6BCFCF]"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}>
                {/* Icon badge */}
                <div className={`inline-flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 ${
                  stat.accent
                    ? "bg-[#6BCFCF] text-white"
                    : "bg-white/10 text-white/70 group-hover:bg-white/20 group-hover:text-white"
                }`}>
                  {stat.icon}
                </div>

                {/* Value */}
                <div className={`text-3xl md:text-4xl font-semibold ${
                  stat.accent ? "text-[#6BCFCF]" : "text-white"
                }`}>
                  {stat.value}<span className="text-white/50">{stat.suffix}</span>
                </div>

                {/* Label */}
                <p className="text-xs md:text-sm text-white/60">
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
