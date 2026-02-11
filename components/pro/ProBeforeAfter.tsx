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
            Remplacez la visite technique par un dossier standardisé (et exploitable).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Avant */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-[#E3E5E8] bg-[#F9FAFB] p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E3E5E8] px-4 py-2 text-sm font-medium text-[#6B7280] mb-6">
              Sans Moverz Pro
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Clock, metric: "2–3h", label: "par dossier", desc: "RDV + déplacement + visite + saisie + aller-retours" },
                { icon: TrendingUp, metric: "~30%", label: "litiges volume", desc: "Hypothèses, volume contesté, options oubliées" },
                { icon: Users, metric: "48h+", label: "cycle moyen", desc: "Le client 'refroidit' pendant l'attente" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-[#E3E5E8] flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#6B7280]" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#0F172A] leading-none">{item.metric}</p>
                      <p className="text-xs text-[#6B7280] mt-1">{item.label}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#6B7280] leading-relaxed ml-13">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Après */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border-2 border-brand-turquoise/40 bg-gradient-to-br from-[#F0F9FF] to-white p-8 shadow-sm"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-4 py-2 text-sm font-medium text-[#0F172A] border border-brand-turquoise/30 mb-6">
              <Zap className="w-3.5 h-3.5 text-brand-turquoise" />
              Avec Moverz Pro
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Clock, metric: "15min", label: "dossier prêt", desc: "Infos + inventaire + déclaration de valeur" },
                { icon: Shield, metric: "-70%", label: "litiges évitables", desc: "Périmètre documenté (preuves + documents)" },
                { icon: TrendingUp, metric: "3x", label: "plus rapide", desc: "Relances auto → complétion → chiffrage" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-turquoise/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-brand-turquoise" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#0F172A] leading-none">{item.metric}</p>
                      <p className="text-xs text-[#6B7280] mt-1">{item.label}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#6B7280] leading-relaxed ml-13">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

