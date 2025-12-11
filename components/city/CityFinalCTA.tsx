"use client";

import { motion } from "framer-motion";

type CityFinalCTAProps = {
  cityName: string;
  quoteUrl: string;
};

export function CityFinalCTA({ cityName, quoteUrl }: CityFinalCTAProps) {
  return (
    <section className="relative py-20 md:py-32 bg-white">
      <div className="container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-12 md:p-16 shadow-2xl"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6BCFCF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6BCFCF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
          
          <div className="relative text-center space-y-8 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
              <span>Gratuit · Sans spam</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Prêt à déménager<br />à {cityName} ?
            </h2>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              3 minutes pour comparer. Des déménageurs locaux sérieux. 0 surprise.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={quoteUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0F172A] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Comparer maintenant</span>
                <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="/comment-ca-marche/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <span>Comment ça marche ?</span>
              </a>
            </div>

            <p className="text-sm text-white/70 pt-4">
              Réponse en 48h · Déménageurs contrôlés · Support dédié
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
