"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6BCFCF] rounded-full blur-[150px] animate-pulse"
          style={{ animationDuration: '4s' }}
        />
      </div>

      <div className="container max-w-4xl relative">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge animé */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6BCFCF]/20 to-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF] border border-[#6BCFCF]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
              Gratuit · Sans spam · Sans engagement
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2 
            className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-[#0F172A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Prêt à déménager<br />sans stress ?
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-lg text-[#6B7280]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            1 200+ personnes ont déjà simplifié leur déménagement.
          </motion.p>

          {/* CTA Button with enhanced animation */}
          <motion.div 
            className="pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <motion.a
              href="https://devis.moverz.fr/?source=moverz.fr&from=/"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0F172A] to-[#1E293B] px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Comparer les devis gratuitement</span>
              <motion.span 
                className="text-lg leading-none"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex items-center justify-center gap-6 pt-4 text-sm text-[#6B7280]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>3 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>0€ pour vous</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>5+ devis comparables</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

