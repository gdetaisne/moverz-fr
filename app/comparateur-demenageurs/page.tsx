import type { Metadata } from "next";
import { generateMetadata as baseGenerateMetadata } from "@/lib/metadata";
import ComparisonTable from "@/components/comparison/ComparisonTable";
import ComparisonHero from "@/components/comparison/ComparisonHero";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { buildTunnelUrl } from "@/lib/tunnel-url";
import { ShieldCheck, BarChart2, EyeOff, FileText, BadgeCheck, Trophy, CheckSquare, AlertTriangle, Package, ClipboardList } from "lucide-react";
import { FinalCTAV4 } from "@/components/sections/FinalCTAV4";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { JsonLd } from "@/components/schema/JsonLd";

export const metadata: Metadata = baseGenerateMetadata(
  "comparateur-demenageurs",
  `Comparateur de Déménagement : Guide Complet 2026 (Moverz vs Alternatives)`,
  "Choisir le meilleur comparateur de déménagement en 2026 : 3 analyses de risque /100 (avis Google, financier, juridique), devis comparables (volume standardisé), anonymat. Moverz vs plateformes classiques vs contact direct."
);

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://moverz.fr/comparateur-demenageurs/",
  name: "Comparateur de Déménagement : Guide Complet 2026",
  description: "Choisir le meilleur comparateur de déménagement en 2026 : 3 analyses de risque /100, devis comparables, anonymat. Moverz vs alternatives.",
  url: "https://moverz.fr/comparateur-demenageurs/",
  inLanguage: "fr-FR",
  isPartOf: { "@id": "https://moverz.fr/#website" },
  about: { "@id": "https://moverz.fr/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://moverz.fr/" },
      { "@type": "ListItem", position: 2, name: "Comparateur de déménagement", item: "https://moverz.fr/comparateur-demenageurs/" },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://moverz.fr/comparateur-demenageurs/#service",
  name: "Comparateur de déménagement Moverz",
  description: "Comparez jusqu'à 5 devis comparables de déménageurs vérifiés (3 analyses de risque /100). Dossier anonyme, zéro harcèlement, 100% gratuit.",
  provider: { "@id": "https://moverz.fr/#organization" },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Comparateur de déménagement",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
  termsOfService: "https://moverz.fr/cgu/",
};

export default function ComparateurDemenageursPage() {
  const faqs: FAQItem[] = [
    {
      question: "Pourquoi utiliser un comparateur de déménagement plutôt que contacter directement ?",
      answer:
        "Un comparateur vous fait gagner 5-10h de recherche en centralisant les devis. Avantages : (1) Gain de temps (1 formulaire vs 5-10 appels), (2) Devis comparables si le comparateur standardise le volume, (3) Anonymat et pas de démarchage (sur Moverz), (4) 3 analyses de risque /100 automatiques — avis Google, financier (Creditsafe + Pappers), juridique (Pappers Décisions) — alertes = exclusion. Contact direct = plus long, pas de vérification, démarchage.",
    },
    {
      question: "Quelle est la différence entre Moverz et les autres comparateurs (ex: i-Demenager, DemenagerFacile) ?",
      answer:
        "3 différences majeures : (1) 3 analyses de risque /100 : Moverz évalue chaque déménageur (avis Google + financier Creditsafe/Pappers + juridique Pappers Décisions). Alertes = exclusion automatique. Les autres ne vérifient rien. (2) Devis comparables : Moverz standardise les volumes automatiquement (précision 90-95%). Les autres = volumes différents = impossible à comparer. (3) Anonymat : Moverz ne revend pas vos coordonnées. Les autres = revente de leads.",
    },
    {
      question: "Les comparateurs de déménagement sont-ils vraiment gratuits ?",
      answer:
        "Oui, pour le particulier c'est 100% gratuit, et les déménageurs participent gratuitement à la mise en concurrence. Moverz ne revend pas vos coordonnées (vous restez anonyme). Certains comparateurs classiques revendent vos données à de nombreux déménageurs (d'où le spam). Méfiez-vous des 'comparateurs' qui demandent un paiement avant devis = arnaque.",
    },
    {
      question: "Comment Moverz vérifie-t-il les déménageurs ?",
      answer:
        "3 analyses de risque automatiques, chacune notée /100 : (1) Risque expérience client — 20 derniers avis Google analysés + patterns récurrents dans les mauvais avis 1-2★ (retards, casse, comportement). (2) Risque financier — scores Creditsafe et Pappers consolidés + ratio cash/dettes interne. Alerte cash = exclusion. (3) Risque juridique — décisions de justice et litiges via Pappers. Alerte juridique = exclusion. En complément : licence de transport, assurance RC Pro (≥ 1,5 M€). Les comparateurs classiques ne font AUCUNE vérification.",
    },
    {
      question: "Pourquoi les devis reçus via comparateurs sont souvent différents ?",
      answer:
        "Car chaque déménageur fait sa propre estimation du volume, avec sa propre méthode. Résultat : 5 devis avec 5 volumes différents (20m³, 28m³, 32m³, etc.) = impossible à comparer. Solution Moverz : le volume est calculé automatiquement avec précision (90-95%), tous les déménageurs partent du même volume = devis réellement comparables. C'est le seul moyen de comparer efficacement.",
    },
    {
      question: "Combien de temps faut-il pour recevoir des devis via un comparateur ?",
      answer:
        "Moverz : 5-7 jours (dossier anonyme, déménageurs répondent par écrit). Comparateurs classiques : immédiat MAIS par téléphone (5-10 appels de démarchage dans les 2h). Contact direct : variable (1-7 jours selon disponibilité). Le délai Moverz est volontaire pour garantir des devis écrits, réfléchis, et comparables (vs estimations téléphoniques hasardeuses).",
    },
    {
      question: "Est-ce que Moverz revend mes coordonnées ?",
      answer:
        "Non, jamais. Votre dossier reste anonyme jusqu'à ce que VOUS choisissiez un déménageur. Les comparateurs classiques revendent vos coordonnées à de nombreux déménageurs dès que vous validez le formulaire = 5-10 appels/jour pendant 2 semaines. C'est leur business model (revente de leads).",
    },
    {
      question: "Peut-on faire confiance aux avis sur les comparateurs ?",
      answer:
        "Méfiez-vous des avis présents uniquement sur le comparateur (risque d'avis filtrés/achetés). Privilégiez Google Maps (avis vérifiés, impossibles à supprimer). Moverz affiche les avis Google directement (note 4.0+/5 minimum, 20+ avis récents). Vérifiez toujours les avis négatifs récents : les vrais problèmes ressortent (surcoûts, casse, retards).",
    },
    {
      question: "Que faire si je reçois trop d'appels après avoir utilisé un comparateur ?",
      answer:
        "Avec Moverz : impossible, votre dossier est anonyme. Avec un comparateur classique : bloquez les numéros, signalez sur signal.conso.gouv.fr (RGPD : droit d'opposition), demandez la suppression de vos données par email. Pour éviter ça : utilisez Moverz dès le départ (0 démarchage garanti).",
    },
    {
      question: "Quel est le meilleur comparateur de déménagement en 2026 ?",
      answer:
        "5 critères pour choisir : (1) 3 analyses de risque /100 (avis Google + financier + juridique) = Moverz uniquement. (2) Devis comparables (même volume standardisé) = Moverz uniquement. (3) Anonymat (pas de revente de données) = Moverz uniquement. (4) Gratuité réelle = Moverz + autres. (5) Rapidité = Tous. Conclusion : Moverz est le seul comparateur qui évalue 3 risques /100 ET standardise ET protège votre anonymat.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <JsonLd id="comparateur-webpage-schema" data={webPageSchema} />
      <JsonLd id="comparateur-service-schema" data={serviceSchema} />
      <FAQSchema faqs={faqs} />
      {/* Hero */}
      <ComparisonHero />

      {/* Section intro : Pourquoi utiliser un comparateur */}
      <section className="section section-light">
        <div className="container max-w-4xl space-y-10">
          <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-v4-text">
              Pourquoi utiliser un comparateur de déménagement ?
            </h2>
            <p className="text-sm md:text-base text-v4-text-secondary leading-relaxed">
              Avant l'ère des comparateurs, obtenir des devis de déménagement était un parcours du combattant : 
              multiples appels (répéter 10 fois les mêmes infos), visites techniques chronophages, devis incomparables 
              (formats et volumes différents), et démarchage agressif une fois vos coordonnées partagées.
            </p>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
              Un <strong className="text-[var(--color-text)]">bon comparateur</strong> vise à simplifier ce processus, 
              <strong className="text-[var(--color-text)]"> mais tous ne se valent pas</strong>. Certains se contentent de revendre 
              vos coordonnées à de nombreux déménageurs (d'où le spam), sans aucune vérification ni standardisation.
            </p>
          </div>

          {/* 5 critères pour choisir */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-v4-text">
              5 critères clés pour choisir votre comparateur
            </h2>
            <p className="text-sm md:text-base text-v4-text-secondary">
              Pour évaluer un comparateur de déménagement, concentrez-vous sur ces 5 points essentiels :
            </p>

            <div className="grid gap-4 md:grid-cols-1">
              {[
                {
                  title: "1. Qualité des vérifications des déménageurs",
                  Icon: ShieldCheck,
                  iconColor: "text-blue-600",
                  iconBg: "bg-blue-50 border-blue-100",
                  desc: "Un comparateur doit s'assurer de la fiabilité des professionnels qu'il vous propose.",
                  points: [
                    "Vérification du SIREN, des licences de transport, des assurances (RC Pro, marchandises)",
                    "3 analyses de risque /100 : avis Google, financier (Creditsafe + Pappers), juridique (Pappers Décisions)",
                    "Le risque : être mis en relation avec des entreprises peu scrupuleuses ou en difficulté (257 faillites en 2024)",
                  ],
                  highlight: "Moverz : 3 analyses de risque /100 + exclusion automatique des alertes",
                },
                {
                  title: "2. Comparabilité des devis",
                  Icon: BarChart2,
                  iconColor: "text-teal-600",
                  iconBg: "bg-teal-50 border-teal-100",
                  desc: "Recevoir 3 à 5 devis, c'est bien. Recevoir des devis que vous pouvez réellement comparer, c'est mieux.",
                  points: [
                    "Une base commune (volume, accès, prestations) pour tous les devis",
                    "Le risque : des devis avec des volumes différents (20m³ vs 32m³), des options floues, rendant la comparaison impossible",
                    "Résultat : risque de surcoût le jour J (+200–800€)",
                  ],
                  highlight: "Moverz : dossier standardisé, volume calculé automatiquement (précision 90–95%)",
                },
                {
                  title: "3. Anonymat et protection contre le démarchage",
                  Icon: EyeOff,
                  iconColor: "text-purple-600",
                  iconBg: "bg-purple-50 border-purple-100",
                  desc: "Votre tranquillité est primordiale.",
                  points: [
                    "Une plateforme qui ne transmet pas vos coordonnées directes aux déménageurs sans votre accord",
                    "Le risque : être inondé d'appels et de mails non sollicités (5–10 appels/jour pendant 2 semaines)",
                    "Certains comparateurs revendent vos données à de nombreux déménageurs dès validation du formulaire",
                  ],
                  highlight: "Moverz : dossier anonyme, vous choisissez qui peut vous contacter",
                },
                {
                  title: "4. Estimation précise du volume",
                  Icon: Package,
                  iconColor: "text-orange-600",
                  iconBg: "bg-orange-50 border-orange-100",
                  desc: "L'estimation du volume est la clé d'un devis précis.",
                  points: [
                    "Un outil d'estimation précis basé sur votre logement réel pour éviter les sous-estimations",
                    "Le risque : un volume mal estimé entraîne des suppléments coûteux le jour du déménagement",
                    "40–50% des déménagements subissent des surcoûts à cause d'une mauvaise estimation",
                  ],
                  highlight: "Moverz : volume calculé en 1 minute, précision 90–95%",
                },
                {
                  title: "5. Gratuité et transparence",
                  Icon: BadgeCheck,
                  iconColor: "text-emerald-600",
                  iconBg: "bg-emerald-50 border-emerald-100",
                  desc: "Le service doit être clair et sans frais cachés pour le particulier.",
                  points: [
                    "Un service 100% gratuit pour le client, avec un modèle économique transparent",
                    "Les déménageurs participent gratuitement à la mise en concurrence",
                    "Le risque : des frais cachés ou un service qui n'est pas réellement gratuit",
                  ],
                  highlight: "Moverz : 100% gratuit pour vous et pour les déménageurs",
                },
              ].map((c) => (
                <div 
                  key={c.title} 
                  className="rounded-2xl border border-v4-border bg-white p-6 md:p-7 hover:border-brand-turquoise/50 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl border ${c.iconBg}`}>
                      <c.Icon className={`w-5 h-5 ${c.iconColor}`} strokeWidth={2} />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-base md:text-lg font-bold text-v4-text">{c.title}</h3>
                      <p className="text-sm md:text-base text-v4-text-secondary">{c.desc}</p>
                      <ul className="grid gap-2 text-sm md:text-base text-v4-text/90">
                        {c.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-turquoise shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      {c.highlight && (
                        <p className="text-xs md:text-sm font-semibold text-v4-accent bg-v4-accent/10 rounded-full px-3 py-2 inline-block">
                          {c.highlight}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Section différence Moverz */}
      <section className="section section-light">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-brand-turquoise-300 bg-gradient-to-br from-brand-turquoise/10 to-white p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" strokeWidth={2} />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-v4-text">
                Ce qui fait la différence Moverz (vs autres comparateurs)
              </h2>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "3 analyses de risque /100",
                  desc: "Moverz évalue chaque déménageur selon 3 axes (avis Google, financier, juridique). Alertes = exclusion automatique. Les autres comparateurs ne vérifient RIEN.",
                },
                {
                  title: "Devis réellement comparables",
                  desc: "Le volume est calculé automatiquement (précision 90–95%), tous les déménageurs partent du même dossier. Les autres = volumes différents = impossible à comparer.",
                },
                {
                  title: "Dossier anonyme (0 démarchage)",
                  desc: "Vous restez anonyme jusqu'à ce que vous choisissiez un déménageur. Les autres = revente de leads = 5–10 appels/jour.",
                },
                {
                  title: "Modèle transparent",
                  desc: "Moverz est gratuit pour vous comme pour les déménageurs qui participent à la mise en concurrence. Les autres revendent vos données sans votre accord.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-v4-border bg-white p-5">
                  <p className="font-semibold text-v4-text text-sm md:text-base mb-2">{item.title}</p>
                  <p className="text-xs md:text-sm text-v4-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-white/60 border border-brand-turquoise-200 p-4 text-center">
              <p className="text-sm md:text-base text-v4-text">
                <strong>Résultat :</strong> Moverz est le seul comparateur qui vérifie ET standardise ET protège votre anonymat.
              </p>
              <a 
                href="/blog/meilleur-comparateur-demenagement-2026/" 
                className="mt-3 inline-block text-sm font-semibold text-v4-accent hover:text-v4-accent underline"
              >
                Lire le comparatif détaillé →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <section className="section section-light pt-0">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-v4-accent text-center">
              Guides complémentaires
            </p>
            <h2 className="mt-3 text-xl md:text-2xl font-bold text-v4-text text-center">
              Pour aller plus loin
            </h2>
            <p className="mt-2 text-sm text-v4-text-secondary text-center max-w-2xl mx-auto">
              7 guides pour maîtriser chaque aspect de votre déménagement.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/blog/meilleur-comparateur-demenagement-2026/",
                  Icon: Trophy,
                  iconColor: "text-amber-600",
                  iconBg: "bg-amber-50",
                  title: "Meilleur comparateur 2026",
                  desc: "Comparatif détaillé : 5 critères pour choisir (3 analyses de risque, devis comparables, anonymat).",
                },
                {
                  href: "/criteres-choisir-demenageur/",
                  Icon: CheckSquare,
                  iconColor: "text-teal-600",
                  iconBg: "bg-teal-50",
                  title: "8 critères déménageur fiable",
                  desc: "3 analyses de risque /100 (financier, juridique, avis), licences, assurances, volume, devis, paiement.",
                },
                {
                  href: "/blog/eviter-arnaques-demenagement/",
                  Icon: AlertTriangle,
                  iconColor: "text-red-600",
                  iconBg: "bg-red-50",
                  title: "Éviter les arnaques",
                  desc: "64% anomalies (DGCCRF), 257 faillites 2024, outils de vérification gratuits.",
                },
                {
                  href: "/blog/estimer-volume-demenagement-guide-complet/",
                  Icon: Package,
                  iconColor: "text-orange-600",
                  iconBg: "bg-orange-50",
                  title: "Estimer son volume",
                  desc: "3 méthodes (calcul auto, inventaire, visite) pour éviter les surcoûts jour J.",
                },
                {
                  href: "/blog/comparer-devis-demenagement-guide/",
                  Icon: ClipboardList,
                  iconColor: "text-blue-600",
                  iconBg: "bg-blue-50",
                  title: "Comparer des devis",
                  desc: "7 éléments à vérifier (volume, accès, tarif, assurance, conditions).",
                },
                {
                  href: "/blog/assurance-demenagement-que-couvre/",
                  Icon: ShieldCheck,
                  iconColor: "text-green-600",
                  iconBg: "bg-green-50",
                  title: "Assurance déménagement",
                  desc: "Garantie légale 60€/m³, déclaration de valeur, RC Pro — ce qui est vraiment couvert.",
                },
                {
                  href: "/blog/supplement-prix-jour-j-comment-eviter/",
                  Icon: FileText,
                  iconColor: "text-purple-600",
                  iconBg: "bg-purple-50",
                  title: "Éviter les suppléments jour J",
                  desc: "+200 à 800€ de surcoût pour 40-50% des déménagements — comment les anticiper.",
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group rounded-xl border border-v4-border bg-white p-5 hover:border-brand-turquoise/50 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${item.iconBg}`}>
                      <item.Icon className={`w-4 h-4 ${item.iconColor}`} strokeWidth={2} />
                    </div>
                    <p className="text-sm font-bold text-v4-text group-hover:text-v4-accent">{item.title}</p>
                  </div>
                  <p className="text-xs text-v4-text-secondary leading-relaxed">{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="faq" className="scroll-mt-28">
        <FAQ title="FAQ : Choisir un comparateur de déménagement" faqs={faqs} limit={10} id="faq" />
      </div>

      <FinalCTAV4 />
    </main>
  );
}

