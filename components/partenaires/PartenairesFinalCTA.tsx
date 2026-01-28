"use client";
import { motion } from "framer-motion";

export default function PartenairesFinalCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Prêt à recevoir des dossiers qualifiés ?
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#6BCFCF] px-8 py-4 text-base font-semibold text-[#0F172A] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <span>Voir la démo</span>
              <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              <span>Nous contacter</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
