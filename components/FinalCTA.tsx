"use client";

import { motion } from "framer-motion";
import Chip from "@/components/ui/Chip";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="section bg-[#A8E8E8]">
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
            <div className="flex justify-center">
              <Chip tone="light" className="px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                Gratuit · Sans spam · Sans engagement
              </Chip>
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
            className="text-lg text-[#1E293B]/70"
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
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.99 }}>
              <Button href="https://devis.moverz.fr/?source=moverz.fr&from=/" variant="primary" className="px-8 py-4 text-base">
              <span>Comparer les devis gratuitement</span>
                <motion.span 
                  className="text-lg leading-none"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex items-center justify-center gap-6 pt-4 text-sm text-[#1E293B]/70"
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


