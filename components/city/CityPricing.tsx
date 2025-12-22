"use client";

import { motion } from "framer-motion";

type CityPricingProps = {
  cityName: string;
};

export function CityPricing({ cityName }: CityPricingProps) {
  const priceRanges = [
    { 
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      label: "Studio", 
      volume: "15 m³", 
      price: "500–800€" 
    },
    { 
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      label: "T2/T3", 
      volume: "30 m³", 
      price: "900–1400€",
      highlight: true,
    },
    { 
      icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
      label: "T4+", 
      volume: "50 m³", 
      price: "1500–2500€" 
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-slate)] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-teal)] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-teal)] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      </div>

      <div className="container max-w-5xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 space-y-6 text-white"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)] animate-pulse" />
            <span>Prix indicatifs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Combien ça coûte ?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Fourchettes moyennes à {cityName}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {priceRanges.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group"
            >
              <div className={`rounded-2xl ${item.highlight ? 'border-2 border-[var(--brand-teal)]/50 bg-white/10' : 'border border-white/10 bg-white/5'} backdrop-blur-sm p-8 text-center hover:border-[var(--brand-teal)]/70 hover:bg-white/15 transition-all duration-300`}>
                <div className={`flex items-center justify-center h-12 w-12 rounded-xl ${item.highlight ? 'bg-[var(--brand-deep)] text-white' : 'bg-white/10 text-[var(--brand-teal)]'} group-hover:scale-110 transition-transform duration-300 mx-auto mb-4`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <p className="text-sm text-white/60 mb-2">{item.volume}</p>
                <p className="text-lg font-bold text-white mb-3">{item.label}</p>
                <p className="text-3xl font-bold text-[var(--brand-teal)]">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-sm text-center text-white/50"
        >
          Tarifs indicatifs. Vos devis personnalisés = prix réel.
        </motion.p>
      </div>
    </section>
  );
}
