"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ProFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Comment fonctionne l'essai gratuit de 30 jours ?",
      answer: "Vous créez votre compte, intégrez le widget sur votre site en 5 minutes, et vous avez accès à toutes les fonctionnalités Pro pendant 30 jours. Aucune carte bancaire requise. À la fin de l'essai, vous choisissez votre plan ou vous arrêtez (sans frais).",
    },
    {
      question: "L'intégration nécessite-t-elle un développeur ?",
      answer: "Non. 99% de nos clients intègrent le widget sans développeur. C'est un simple copier-coller de 3 lignes de code dans votre site. Compatible WordPress, Wix, Webflow, HTML custom. On a des tutoriels vidéo pour chaque plateforme.",
    },
    {
      question: "Quelle est la précision de l'IA volumétrie ?",
      answer: "90-95% de précision (marge d'erreur ±5%). Notre modèle a été entraîné sur 50 000+ déménagements réels. Il reconnaît 200+ types d'objets et prend en compte les espaces de rangement. Aussi précis qu'une visite technique, mais en 30 secondes.",
    },
    {
      question: "Que se passe-t-il si le client conteste le volume ?",
      answer: "C'est justement l'avantage principal : les photos sont une preuve irréfutable. Si le client conteste, vous lui montrez les photos qu'il a prises lui-même. Résultat : -90% de litiges en moyenne chez nos clients.",
    },
    {
      question: "Puis-je personnaliser les couleurs et le logo ?",
      answer: "Oui, marque blanche 100%. Vous configurez vos couleurs (code hex), votre logo, et même votre nom de domaine (widget.votre-entreprise.fr). Le client ne voit QUE votre marque. Aucune mention de Moverz visible.",
    },
    {
      question: "Comment sont stockées les photos des clients ?",
      answer: "Hébergement sécurisé en Europe (conformité RGPD). Chiffrement AES-256. Les photos sont automatiquement supprimées après 90 jours (ou plus tôt si vous le demandez). Vous êtes propriétaire des données.",
    },
    {
      question: "Puis-je connecter Moverz à mon CRM ?",
      answer: "Oui (plan Pro et Entreprises). On fournit une API REST + webhooks temps réel. Compatible Salesforce, Pipedrive, HubSpot, ou CRM custom. On peut aussi développer une intégration sur-mesure (Entreprises).",
    },
    {
      question: "Que se passe-t-il si j'annule mon abonnement ?",
      answer: "Vous pouvez annuler en 1 clic depuis le dashboard. Pas de période d'engagement. Vous gardez accès jusqu'à la fin du mois payé. Vous pouvez exporter toutes vos données (dossiers, photos, stats) avant de partir.",
    },
    {
      question: "Le support est-il vraiment français ?",
      answer: "Oui. Notre équipe est basée en France. On répond par email (tous les plans) et via WhatsApp / téléphone sur Pro & Entreprises. Pas de chatbot, pas de ticket. Une vraie personne qui connaît le métier du déménagement.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-[#6B7280]">
            Tout ce que vous devez savoir sur Moverz Pro
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border-2 border-gray-200 bg-white overflow-hidden hover:border-[#6BCFCF]/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-[#0F172A] text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#6BCFCF] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-[#6B7280] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[#6B7280] mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#6BCFCF] font-semibold hover:text-[#5AB0B0] transition-colors"
          >
            <span>Contactez notre équipe</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

