"use client";
import { motion } from "framer-motion";
import { Code, Smartphone, Zap, BarChart3 } from "lucide-react";

export default function ProHowItWorks() {
  const steps = [
    {
      step: "1",
      icon: Code,
      title: "Intégration 5 min",
      description: "Copiez-collez 3 lignes de code sur votre site. Compatible WordPress, Wix, tout.",
    },
    {
      step: "2",
      icon: Smartphone,
      title: "Client prend photos",
      description: "Le widget guide votre client pièce par pièce. 10 photos en 2 minutes.",
    },
    {
      step: "3",
      icon: Zap,
      title: "IA calcule volume",
      description: "30 secondes pour analyser les photos et générer un volume précis (±5%).",
    },
    {
      step: "4",
      icon: BarChart3,
      title: "Dashboard + devis",
      description: "Recevez le dossier complet dans votre interface. Chiffrez en 2 clics.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Comment fonctionne le widget ?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Une solution SaaS complète, de l'intégration à la facturation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#6BCFCF]/50 transition-all duration-300 h-full">
                {/* Step badge */}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#6BCFCF]/20 text-[#6BCFCF] font-bold text-sm mb-4">
                  {item.step}
                </div>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10 text-[#6BCFCF] mb-4">
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
              </div>

              {/* Connector line (except last) */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#6BCFCF]/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

