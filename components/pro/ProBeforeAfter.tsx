"use client";
import { motion } from "framer-motion";
import { Clock, TrendingUp, Users, Shield, Zap } from "lucide-react";

export default function ProBeforeAfter() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Avant / Après : chiffrage sans visite
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Remplacez la visite technique par un dossier photo opposable (et exploitable).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Avant */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border-2 border-red-200 bg-red-50/50 p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
              Sans Moverz Pro
            </div>
            
            <div className="space-y-5">
              {[
                { icon: Clock, label: "2–3h par dossier", desc: "RDV + déplacement + visite + saisie + aller-retours" },
                { icon: TrendingUp, label: "Devis fragiles", desc: "Hypothèses, volume contesté, options oubliées" },
                { icon: Users, label: "Cycle trop long", desc: "Le client “refroidit” pendant l’attente" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">{item.label}</p>
                    <p className="text-sm text-[#6B7280]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Après */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border-2 border-[#6BCFCF] bg-gradient-to-br from-[#F0F9FF] to-white p-8 shadow-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-semibold text-[#6BCFCF] border border-[#6BCFCF]/20 mb-6">
              <Zap className="w-3.5 h-3.5" />
              Avec Moverz Pro
            </div>
            
            <div className="space-y-5">
              {[
                { icon: Clock, label: "Dossier exploitable", desc: "Photos + inventaire IA + déclaration de valeur" },
                { icon: Shield, label: "Moins de litiges", desc: "Périmètre documenté (preuves + documents)" },
                { icon: TrendingUp, label: "Devis plus rapide", desc: "Relances auto → complétion → chiffrage" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#6BCFCF]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#6BCFCF]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">{item.label}</p>
                    <p className="text-sm text-[#6B7280]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6BCFCF] to-[#2B7A78] rounded-2xl blur opacity-20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

