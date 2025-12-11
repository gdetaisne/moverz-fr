"use client";

import type { CityInfo } from "@/lib/cities";
import { motion } from "framer-motion";

type CityHeroProps = {
  city: CityInfo;
  quoteUrl: string;
};

export function CityHero({ city, quoteUrl }: CityHeroProps) {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
      
      {/* Animated blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge animé */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
            <span>{city.nameCapitalized}</span>
          </motion.div>

          {/* Titre */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Déménager à {city.nameCapitalized} ?<br />
            <span className="text-[#6BCFCF]">3 min, 5+ devis.</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
          >
            Des déménageurs locaux contrôlés. Des devis comparables. 0 spam.
          </motion.p>

          {/* CTA principal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="pt-4"
          >
            <a
              href={quoteUrl}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0F172A] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Comparer les déménageurs</span>
              <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Déménageurs locaux</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>IA volumétrie</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
