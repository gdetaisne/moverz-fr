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
      description: "Pour démarrer rapidement",
      features: [
        "Backoffice déménageur (leads/dossiers)",
        "Tunnel client (formulaire guidé)",
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
      description: "Module devis + automations avancées",
      features: [
        "Tout Starter +",
        "Module devis (édition + historique)",
        "Relances automatiques configurables",
        "Notifications avancées",
        "Support prioritaire",
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

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-white border-2 border-brand-turquoise shadow-lg"
                  : "bg-white border border-gray-200"
              }`}
            >
              {/* Badge subtil */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-turquoise text-white text-xs font-semibold shadow-sm">
                  Recommandé
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                plan.highlight ? "bg-brand-turquoise/10" : "bg-[#F0F9FF]"
              }`}>
                <plan.icon className="w-6 h-6 text-brand-turquoise" />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold mb-2 text-[#0F172A]">
                {plan.name}
              </h3>
              <p className="text-sm mb-6 text-[#6B7280]">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Sur mesure" && (
                    <span className="text-5xl font-bold text-[#0F172A]">
                      {plan.price}€
                    </span>
                  )}
                  {plan.price === "Sur mesure" && (
                    <span className="text-3xl font-bold text-[#0F172A]">
                      {plan.price}
                    </span>
                  )}
                  <span className="text-lg text-[#6B7280]">
                    {plan.period}
                  </span>
                </div>
                {plan.price !== "Sur mesure" && (
                  <p className="text-xs text-[#6B7280] mt-1">HT/mois · 100 leads inclus</p>
                )}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 mb-6 ${
                  plan.highlight
                    ? "bg-brand-turquoise text-white hover:bg-[#5AB0B0] shadow-sm hover:shadow-md"
                    : "bg-white border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-turquoise" />
                    <span className="text-sm text-[#6B7280]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Glow subtil pour Pro */}
              {plan.highlight && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-turquoise/20 to-brand-turquoise/10 rounded-2xl blur -z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Quotas - Intégré subtilement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-[#E3E5E8] p-6 md:p-8">
            <h3 className="text-lg font-bold text-[#0F172A] mb-4">
              Quotas & dépassements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-sm text-[#6B7280]">
                  <strong className="text-[#0F172A]">100 leads/mois inclus</strong> (Starter & Pro). Un lead = dossier complété (formulaire rempli).
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { k: "+20", v: "50€" },
                    { k: "+50", v: "110€" },
                    { k: "+100", v: "200€" },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#E3E5E8] bg-[#F9FAFB] px-3 py-2"
                    >
                      <span className="text-sm font-semibold text-[#0F172A]">{x.k}</span>
                      <span className="text-xs text-[#6B7280]">→</span>
                      <span className="text-sm font-bold text-brand-turquoise">{x.v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Pas de surprise : vous recevez une notification à 80% de quota. Dépassement facturé au prorata. Annulation ou changement de plan possible chaque mois.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

