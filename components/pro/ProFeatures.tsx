"use client";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Code, 
  Palette, 
  Shield, 
  Zap, 
  BarChart3,
  Clock,
  HeadphonesIcon,
  Puzzle
} from "lucide-react";

export default function ProFeatures() {
  const features = [
    {
      icon: Code,
      title: "Intégration 5 minutes",
      description: "Copiez-collez 3 lignes de code. Compatible WordPress, Wix, Webflow, HTML custom. Aucune compétence technique requise.",
      highlight: "99% des installations sans développeur",
    },
    {
      icon: Palette,
      title: "Marque blanche 100%",
      description: "Vos couleurs, votre logo, votre domaine. Le client ne voit QUE votre marque. Moverz est invisible.",
      highlight: "0 mention de Moverz visible",
    },
    {
      icon: Smartphone,
      title: "Mobile-first",
      description: "78% des clients prennent les photos sur smartphone. Notre widget est optimisé pour mobile (interface tactile, compression auto).",
      highlight: "Temps moyen : 2min12s",
    },
    {
      icon: Zap,
      title: "IA volumétrie ±5%",
      description: "Modèle entraîné sur 50 000+ déménagements. Reconnaît 200+ types d'objets. Précision équivalente à une visite technique.",
      highlight: "90-95% de précision",
    },
    {
      icon: Shield,
      title: "Photos = preuve anti-litige",
      description: 'Volume contesté ? Montrez les photos. Le client ne peut plus dire "vous aviez dit 25m³". -90% de litiges en moyenne.',
      highlight: "Protection juridique",
    },
    {
      icon: BarChart3,
      title: "Dashboard analytique",
      description: "Taux de conversion, temps moyen, volumes moyens, progression mensuelle. Toutes vos métriques en temps réel.",
      highlight: "Suivi complet de votre activité",
    },
    {
      icon: Clock,
      title: "Réponse instantanée",
      description: "Le client reçoit son volume en 30 secondes. Vous recevez le dossier complet immédiatement. Plus d'attente de 5 jours.",
      highlight: "0 perte de leads",
    },
    {
      icon: HeadphonesIcon,
      title: "Support français <2h",
      description: "Une vraie personne répond par email. WhatsApp / téléphone inclus sur Pro & Entreprises. Pas de chatbot.",
      highlight: "Équipe basée en France",
    },
    {
      icon: Puzzle,
      title: "API & Webhooks",
      description: "Connectez Moverz à votre CRM (Salesforce, Pipedrive, custom). Webhook temps réel à chaque nouveau dossier.",
      highlight: "Documentation complète",
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

        {/* Mockup visuel - Comment ça s'intègre */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8 text-center">
            Intégration en 3 lignes de code
          </h3>
          
          <div className="rounded-2xl bg-[#0F172A] p-6 overflow-hidden shadow-2xl border border-[#6BCFCF]/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-white/60 text-sm">index.html</span>
            </div>
            
            <pre className="text-sm text-white/90 font-mono overflow-x-auto">
              <code>{`<!-- Ajoutez ce code avant </body> -->
<script src="https://widget.moverz.fr/embed.js"></script>
<script>
  MoverzWidget.init({
    apiKey: 'votre_cle_api',
    primaryColor: '#6BCFCF',
    companyName: 'Votre Entreprise'
  });
</script>`}</code>
            </pre>
          </div>

          <p className="text-center text-sm text-[#6B7280] mt-6">
            C'est tout. Le widget apparaît automatiquement sur votre site. ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}

