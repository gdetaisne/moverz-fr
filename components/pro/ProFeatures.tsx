"use client";
import { motion } from "framer-motion";
import { 
  FileText,
  Images,
  Sparkles,
  Bell,
  Calculator,
  Download,
  Shield,
  FileSpreadsheet,
  Receipt,
} from "lucide-react";

export default function ProFeatures() {
  const pillars = [
    {
      title: "Acquisition & dossier",
      icon: FileText,
      features: [
        { icon: FileText, name: "Backoffice déménageur", desc: "Créez leads, envoyez lien, suivez statuts" },
        { icon: Images, name: "Tunnel client guidé", desc: "Formulaire + photos standardisées" },
      ]
    },
    {
      title: "Preuves & documents",
      icon: Shield,
      features: [
        { icon: Sparkles, name: "IA & inventaire", desc: "Analyse photos, génère inventaire Excel" },
        { icon: Download, name: "Exports PDF/CSV", desc: "Dossier photos, déclaration valeur, CSV" },
        { icon: Shield, name: "RGPD Europe", desc: "Hébergement EU, rétention claire" },
      ]
    },
    {
      title: "Vitesse & conversion",
      icon: Calculator,
      features: [
        { icon: Bell, name: "Relances auto", desc: "Séquences configurables si incomplet" },
        { icon: Calculator, name: "Module devis", desc: "Chiffrage rapide depuis dossier propre" },
      ]
    }
  ];

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
            Une solution SaaS complète
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour automatiser vos estimations
          </p>
        </motion.div>

        {/* 3 piliers visuels */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="h-full rounded-2xl border border-[#E3E5E8] bg-white p-6 hover:border-[#6BCFCF]/50 hover:shadow-lg transition-all duration-300">
                {/* Pillar header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E3E5E8]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#6BCFCF]/10 text-[#6BCFCF]">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {pillar.title}
                  </h3>
                </div>

                {/* Features list */}
                <div className="space-y-4">
                  {pillar.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#F0F9FF] flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-[#6BCFCF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#0F172A] leading-tight mb-1">
                          {feature.name}
                        </p>
                        <p className="text-xs text-[#6B7280] leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exports (visuel simple) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8 text-center">
            Ce que vous récupérez concrètement
          </h3>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-[#6BCFCF]/15 via-transparent to-[#6BCFCF]/10 blur-2xl -z-10" />

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Images,
                  chip: "PDF",
                  title: "Dossier photos",
                  desc: "Pièces + accès. Périmètre documenté (opposable).",
                },
                {
                  icon: FileSpreadsheet,
                  chip: "XLSX",
                  title: "Inventaire",
                  desc: "Lisible par l'équipe pour chiffrer (items + cartons).",
                },
                {
                  icon: Receipt,
                  chip: "PDF",
                  title: "Déclaration valeur",
                  desc: "Cadrage assurance / responsabilité, 0 zone grise.",
                },
              ].map((item) => (
                <div key={item.title} className="group relative h-full">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#6BCFCF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-full rounded-2xl border border-[#E3E5E8] bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10 text-[#6BCFCF]">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="inline-flex items-center h-6 rounded-full border border-[#E3E5E8] bg-[#F9FAFB] px-2.5 py-1 text-xs font-semibold text-[#0F172A]">
                        {item.chip}
                      </span>
                    </div>

                    <p className="text-base font-bold text-[#0F172A] mb-2">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#6B7280] leading-relaxed flex-1 mb-4">
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-[#6BCFCF] font-semibold pt-3 border-t border-[#E3E5E8]">
                      <Download className="w-4 h-4" />
                      Export en 1 clic
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-[#6B7280]">
              Vous pouvez aussi exporter les tables <strong className="text-[#0F172A]">leads</strong> et{" "}
              <strong className="text-[#0F172A]">dossiers</strong> en CSV (Starter/Pro).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

