"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Crown } from "lucide-react";

export default function ProPricing() {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "149",
      period: "",
      description: "Pour qualifier sans WhatsApp",
      features: [
        "Backoffice déménageur (leads/dossiers)",
        "Tunnel client (formulaire + photos)",
        "IA + statut de complétude",
        "Dossier PDF + déclaration de valeur (PDF)",
        "Inventaire (Excel) + exports CSV (leads/dossiers)",
        "Relances automatiques (email)",
      ],
      cta: "Demander une démo",
      highlight: false,
    },
    {
      name: "Pro",
      icon: Crown,
      price: "299",
      period: "",
      description: "WhatsApp + module devis",
      features: [
        "Tout Starter +",
        "WhatsApp (numéro dédié provisionné)",
        "Notifications WhatsApp (nouveau lead, etc.)",
        "Module devis (édition + historique)",
        "Relances automatiques configurables",
      ],
      cta: "Demander une démo",
      highlight: true,
      badge: "⭐ Recommandé",
    },
    {
      name: "Entreprises",
      icon: Crown,
      price: "Sur mesure",
      period: "",
      description: "Intégrations & options avancées",
      features: [
        "Tout de Pro +",
        "Intégrations CRM (connecteurs, mapping)",
        "API + webhooks",
        "Multi-sites / multi-agences",
        "White-label (domaine, templates, PDFs)",
        "SLA + support prioritaire",
      ],
      cta: "Nous contacter",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Tarifs transparents
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Starter / Pro incluent 100 leads/mois · Dépassement par tranches · Lead = dossier complété
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white shadow-2xl border-2 border-[#6BCFCF] scale-105"
                  : "bg-white border-2 border-gray-200"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#6BCFCF] text-[#0F172A] text-xs font-bold">
                  {plan.badge}
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                plan.highlight ? "bg-[#6BCFCF]/20" : "bg-[#F0F9FF]"
              }`}>
                <plan.icon className={`w-6 h-6 ${plan.highlight ? "text-[#6BCFCF]" : "text-[#6BCFCF]"}`} />
              </div>

              {/* Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-[#0F172A]"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-white/70" : "text-[#6B7280]"}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Sur mesure" && (
                    <span className={`text-5xl font-bold ${plan.highlight ? "text-white" : "text-[#0F172A]"}`}>
                      {plan.price}€
                    </span>
                  )}
                  {plan.price === "Sur mesure" && (
                    <span className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-[#0F172A]"}`}>
                      {plan.price}
                    </span>
                  )}
                  <span className={`text-lg ${plan.highlight ? "text-white/70" : "text-[#6B7280]"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 mb-6 ${
                  plan.highlight
                    ? "bg-[#6BCFCF] text-[#0F172A] hover:bg-[#5AB0B0] shadow-lg hover:shadow-xl"
                    : "bg-[#0F172A] text-white hover:bg-[#1E293B]"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlight ? "text-[#6BCFCF]" : "text-[#6BCFCF]"
                    }`} />
                    <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-[#6B7280]"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlight glow */}
              {plan.highlight && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6BCFCF] to-[#2B7A78] rounded-2xl blur opacity-30 -z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Quotas + dépassements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-[#F0F9FF] to-white rounded-2xl border-2 border-[#6BCFCF]/20 p-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 text-center">
            Quotas & dépassements
          </h3>
          <div className="space-y-4 text-sm text-[#4b5c6b]">
            <p className="text-center">
              <strong className="text-[#0F172A]">Starter</strong> et{" "}
              <strong className="text-[#0F172A]">Pro</strong> incluent{" "}
              <strong className="text-[#0F172A]">100 leads / mois</strong>.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { k: "+20 leads", v: "50€" },
                { k: "+50 leads", v: "110€" },
                { k: "+100 leads", v: "200€" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-xl border border-[#E3E5E8] bg-white p-4 text-center"
                >
                  <p className="font-semibold text-[#0F172A]">{x.k}</p>
                  <p className="text-[#2B7A78] font-bold mt-1">{x.v}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-[#E3E5E8] bg-white p-4">
              <p className="font-semibold text-[#0F172A] mb-1">Définition d’un “lead”</p>
              <p>
                Un lead est compté dès que le client a{" "}
                <strong className="text-[#0F172A]">complété son dossier</strong>{" "}
                (formulaire rempli). Les photos sont optionnelles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

