"use client";

import type { CityInfo } from "@/lib/cities";
import { motion } from "framer-motion";

type CityHeroProps = {
  city: CityInfo;
  quoteUrl: string;
};

export function CityHero({ city, quoteUrl }: CityHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#A8E8E8]">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mt-12 text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-[#0F172A] shadow-md backdrop-blur-sm border border-[#6BCFCF]/30"
          >
            <span className="h-2 w-2 rounded-full bg-[#6BCFCF] animate-pulse shadow-[0_0_8px_rgba(107,207,207,0.6)]" />
            <span>{city.nameCapitalized}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-[#0F172A]"
          >
            Déménager à {city.nameCapitalized} ?<br />
            <span className="text-[#0F172A]">3 min, 5+ devis.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg md:text-xl text-[#1E293B] leading-relaxed max-w-2xl mx-auto"
          >
            Des déménageurs locaux contrôlés. Des devis comparables. 0 spam.
            <span className="block mt-2 text-[#1E293B]/80 text-sm md:text-base font-medium">
              Conseil : ajoutez des photos (pièces + accès) pour des devis plus justes.
            </span>
          </motion.p>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href={quoteUrl}
              className="group inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgba(15,23,42,0.3)] hover:shadow-[0_12px_50px_rgba(15,23,42,0.4)] hover:scale-105 transition-all duration-300"
            >
              <span>Comparer les déménageurs</span>
              <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#1E293B]/80 font-medium"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0F172A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Déménageurs locaux</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0F172A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0F172A]" fill="currentColor" viewBox="0 0 20 20">
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
