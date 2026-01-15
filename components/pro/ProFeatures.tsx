"use client";
import { motion } from "framer-motion";
import { 
  FileText,
  Images,
  Sparkles,
  Bell,
  MessageCircle,
  Calculator,
  Download,
  Shield,
} from "lucide-react";

export default function ProFeatures() {
  const features = [
    {
      icon: FileText,
      title: "Backoffice déménageur",
      description:
        "Créez un lead (au téléphone ou à froid), envoyez le lien au client, suivez statuts + historique, et gardez une vue claire des dossiers.",
      highlight: "Leads → dossiers, sans perte d’info",
    },
    {
      icon: Images,
      title: "Tunnel client (formulaire + photos)",
      description:
        "Le client complète ses infos + adresses/dates + formule, puis ajoute des photos. Objectif : un dossier standardisé, exploitable, opposable.",
      highlight: "Photos guidées + complétude",
    },
    {
      icon: Sparkles,
      title: "IA & documents générés",
      description:
        "Analyse des photos, inventaire et statut de complétude. Génération automatique : dossier PDF (photos) + déclaration de valeur (PDF) + inventaire (Excel).",
      highlight: "Moins d’aller-retours, plus de preuves",
    },
    {
      icon: Bell,
      title: "Relances automatiques",
      description:
        "Séquences configurables selon statut (partiel / sans photos). Templates éditables. Le message explique clairement ce qu’il manque.",
      highlight: "Plus de dossiers complets, plus vite",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp (Pro)",
      description:
        "Notifications WhatsApp au déménageur : nouveau lead, besoin d’intervention, lead converti en dossier. Numéro dédié provisionné par Moverz (Pro).",
      highlight: "Réponse rapide, cycle raccourci",
    },
    {
      icon: Calculator,
      title: "Module devis (Pro)",
      description:
        "Chiffrez à partir d’un dossier propre. Édition avant envoi, historique et garde-fous (options, contraintes, règles).",
      highlight: "Devis plus fiables, moins de surprises",
    },
    {
      icon: Download,
      title: "Exports (PDF/Excel/CSV)",
      description:
        "Exports par dossier : dossier photos PDF, déclaration de valeur PDF, inventaire Excel. Exports tables : leads + dossiers en CSV.",
      highlight: "Branchable sur votre process actuel",
    },
    {
      icon: Shield,
      title: "RGPD & hébergement Europe",
      description:
        "Hébergement en Europe. Politique de rétention claire (photos supprimées après la période définie, dossiers anonymisés).",
      highlight: "Conformité & sérénité",
    },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 hover:border-[#6BCFCF]/50 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#F0F9FF] text-[#6BCFCF] group-hover:bg-[#6BCFCF] group-hover:text-white transition-all duration-300 mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6BCFCF]/10 text-[#6BCFCF] text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6BCFCF]" />
                  {feature.highlight}
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
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Dossier photos (PDF)",
                desc: "Preuves opposables (pièces + accès).",
              },
              {
                title: "Inventaire (Excel)",
                desc: "Exploitable par l’équipe pour chiffrer.",
              },
              {
                title: "Déclaration de valeur (PDF)",
                desc: "Cadrage assurance / responsabilité.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-[#F8F9FA] p-6"
              >
                <p className="text-sm font-semibold text-[#0F172A]">{item.title}</p>
                <p className="mt-2 text-sm text-[#6B7280]">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

