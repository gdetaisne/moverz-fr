"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Clock, TrendingUp } from "lucide-react";

type CityFinalCTAProps = {
  cityName: string;
  quoteUrl: string;
};

export function CityFinalCTA({ cityName, quoteUrl }: CityFinalCTAProps) {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#6BCFCF]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#6BCFCF]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      </div>

      <div className="container max-w-6xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-semibold text-[#6BCFCF] border border-[#6BCFCF]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
              <span>100% gratuit · Sans démarchage</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight">
              Votre déménagement<br />à {cityName} commence ici
            </h2>
            
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Comparez 3 devis minimum de déménageurs contrôlés à {cityName}. 
              Dossier anonyme, réponse rapide, zéro surprise le jour J.
            </p>

            {/* Trust points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Clock, label: "Devis en 48h max", color: "text-[#6BCFCF]" },
                { icon: Shield, label: "Déménageurs vérifiés", color: "text-[#6BCFCF]" },
                { icon: TrendingUp, label: "Note 4.8/5", color: "text-[#6BCFCF]" },
                { icon: CheckCircle2, label: "2847 clients satisfaits", color: "text-[#6BCFCF]" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#6BCFCF]/10 flex items-center justify-center">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-sm font-medium text-[#0F172A]">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={quoteUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-[#6BCFCF] px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Comparer maintenant</span>
                <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="/comment-ca-marche/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F172A]/20 bg-white px-8 py-4 text-base font-semibold text-[#0F172A] hover:border-[#6BCFCF]/50 hover:bg-gray-50 transition-all duration-300"
              >
                <span>Comment ça marche ?</span>
              </a>
            </div>
          </div>

          {/* Right: Visual/Stats card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border-2 border-[#6BCFCF]/20 bg-white p-8 shadow-xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6BCFCF] to-[#2B7A78] flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">Moverz</p>
                    <p className="text-xs text-[#6B7280]">Comparateur déménagement</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#F0F9FF]">
                    <div>
                      <p className="text-sm text-[#6B7280]">Clients à {cityName}</p>
                      <p className="text-2xl font-bold text-[#0F172A]">150+</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-[#6BCFCF]" />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#F0F9FF]">
                    <div>
                      <p className="text-sm text-[#6B7280]">Économie moyenne</p>
                      <p className="text-2xl font-bold text-[#0F172A]">320€</p>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-[#6BCFCF]" />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#F0F9FF]">
                    <div>
                      <p className="text-sm text-[#6B7280]">Note moyenne</p>
                      <p className="text-2xl font-bold text-[#0F172A]">4.8/5</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-4 h-4 text-[#6BCFCF] fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA in card */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-center text-[#6B7280]">
                    🚀 Rejoignez les 2847 personnes qui ont comparé avec Moverz
                  </p>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6BCFCF] to-[#2B7A78] rounded-2xl blur opacity-20 -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
