import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getFullMetadata } from "@/lib/canonical-helper";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { buildTunnelUrl } from "@/lib/tunnel-url";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { JsonLd } from "@/components/schema/JsonLd";
import {
  AlertTriangle, TrendingDown, FileCheck, ShieldCheck, Star, Package,
  FileText, CreditCard, Truck, ShieldAlert, CheckSquare, AlertOctagon,
  ClipboardList, Trophy, BarChart2, HelpCircle, ArrowRight, Lightbulb,
  X, Scale,
} from "lucide-react";

export const metadata: Metadata = getFullMetadata(
  "criteres-choisir-demenageur",
  "Critères pour choisir un déménageur fiable en 2026 | Score Moverz /100 | Moverz",
  "Choisir un déménageur fiable : Score /100 (3 dimensions : fiabilité légale 25%, satisfaction clients 40%, alertes 35%) calculé à partir de 5 sous-scores indépendants via Pappers + Google + IA + licence, assurance RC Pro, estimation volume, devis détaillé. Checklist + FAQ."
);

export default function CriteresChoisirDemenageurPage() {
  const faqs: FAQItem[] = [
    {
      question: "Comment Moverz évalue-t-elle la fiabilité d'un déménageur ?",
      answer:
        "Moverz attribue à chaque déménageur un Score /100 calculé automatiquement à partir de 5 sous-scores indépendants regroupés en 3 dimensions : (1) Fiabilité légale 25% — Score Financier (Pappers : bilans, trésorerie, dettes) + Score Juridique (BODACC, décisions de justice), (2) Satisfaction clients 40% — Score Google (note pondérée volume) + Score Réputation (tous les avis 12 mois analysés par IA), (3) Alertes 35% — Score Vigilance (6 catégories : casses, vols, retards, prix modifiés, personnel, autres). Score < 50/100 = exclusion automatique. Monitoring continu 7 jours. 257 faillites en 2024 (Altares) : ce filtre est essentiel.",
    },
    {
      question: "Comment vérifier la santé financière d'un déménageur moi-même ?",
      answer:
        "Vous pouvez vérifier le SIREN sur annuaire-entreprises.data.gouv.fr (entreprise active, pas en liquidation). Pour aller plus loin : societe.com ou infogreffe.fr (historique, procédures). Pappers Pro (payant) est l'outil professionnel utilisé par Moverz — nous analysons automatiquement les bilans comptables (résultat net, fonds propres, trésorerie, dettes, tendance) et calculons un Score Financier /100. Moverz fait tout ça automatiquement (gratuit pour vous).",
    },
    {
      question: "Un déménageur peut-il facturer plus le jour J ?",
      answer:
        "Oui, si le volume réel est supérieur au volume estimé. C'est pourquoi l'estimation précise (visite technique ou description détaillée) est cruciale. Un déménageur fiable base son devis sur un volume précis et l'inscrit au contrat. Si le volume est respecté, aucun supplément ne peut être facturé. Sur Moverz, vous décrivez précisément votre logement pour que tous les déménageurs établissent leur devis sur la même base.",
    },
    {
      question: "Quelle assurance couvre la casse ?",
      answer:
        "Le déménageur a une assurance RC Pro obligatoire, mais la couverture standard est généralement de 60€/m³ (ex : 30 m³ = 1 800€ max). Si vous avez des objets de valeur > 1 500€ (piano, œuvres d'art), déclarez-les et souscrivez une assurance complémentaire (coût : 1–2% de la valeur déclarée). Demandez toujours l'attestation d'assurance RC Pro avant de signer.",
    },
    {
      question: "Comment comparer 3 devis de déménagement ?",
      answer:
        "Comparez d'abord le périmètre : tous les devis doivent être basés sur le même volume, les mêmes accès, et les mêmes options (emballage, démontage, protection). Ensuite, vérifiez les conditions (acompte ≤ 30%, annulation, assurance). Enfin, comparez le prix. Des devis avec des volumes différents ne sont PAS comparables. Moverz standardise automatiquement les dossiers pour des devis réellement comparables.",
    },
    {
      question: "Comment éviter les faux déménageurs ?",
      answer:
        "Vérifiez 4 éléments : (1) SIREN actif sur annuaire-entreprises.data.gouv.fr, (2) Cohérence raison sociale sur devis/RIB/assurance, (3) Attestation d'assurance RC Pro valide, (4) Avis Google analysés (pas de signaux récurrents : casses >3%, vols >3%). Méfiez-vous des prix anormalement bas (&lt;30% du marché), des demandes de paiement cash, ou de l'absence de devis écrit. Moverz filtre automatiquement via Score /100 (3 dimensions, 5 sous-scores indépendants) — score < 50/100 = exclusion.",
    },
    {
      question: "Visite technique, visio, ou description détaillée : que choisir ?",
      answer:
        "Visite technique = précision maximale mais nécessite RDV (1–2 semaines). Visio = bon compromis (rapide, assez précis). Description détaillée guidée (Moverz) = 3 minutes, tous les déménageurs reçoivent les mêmes informations. Évitez l'estimation téléphonique (risque élevé d'écart). L'important : que tous vos devis soient basés sur les mêmes informations pour être comparables.",
    },
    {
      question: "Quel acompte est normal ?",
      answer:
        "Maximum 30% du total (recommandation DGCCRF). Méfiez-vous des demandes de 50%+ ou de paiement 100% avant prestation. Privilégiez les paiements traçables (virement, CB, chèque). Le solde doit être payé à l'arrivée ou sous 7 jours. Conditions d'annulation : généralement gratuit jusqu'à 7–15 jours avant, puis pénalités progressives.",
    },
    {
      question: "Que vérifier sur un devis de déménagement ?",
      answer:
        "10 points essentiels : (1) SIREN/SIRET + raison sociale, (2) Volume en m³ (méthode d'estimation), (3) Accès détaillés (étage, ascenseur, parking), (4) Prestations incluses (emballage, démontage, protection), (5) Options et surcoûts possibles, (6) Tarif au m³ ou horaire, (7) Assurance RC Pro (plafond, franchise), (8) Déclaration de valeur, (9) Conditions d'annulation, (10) Acompte + modalités de paiement.",
    },
    {
      question: "Un déménageur doit-il fournir une attestation d'assurance ?",
      answer:
        "Oui, c'est obligatoire (assurance RC Pro minimum 1,5M€). Demandez-la avant de signer et vérifiez : (1) Date de validité (&lt; 6 mois), (2) Plafond de garantie, (3) Franchise éventuelle, (4) Couverture marchandises (standard 60€/m³). Conservez une copie avec votre devis. Si le déménageur refuse de la fournir, c'est un red flag majeur.",
    },
  ];

  const criteria = [
    {
      title: "1) Risque financier (Creditsafe + Pappers + analyse interne)",
      Icon: TrendingDown,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50 border-blue-100",
      bullets: [
        "Scores Creditsafe et Pappers (scoring financier) consolidés en moyenne — note /100",
        "Analyse interne complémentaire : ratio cash / dettes court terme",
        "Alerte cash = déménageur exclu automatiquement des devis présentés",
        "257 faillites de déménageurs en 2024 (Altares) : ce filtre est essentiel",
      ],
      note: "Double source Creditsafe + Pappers + analyse interne du ratio cash/dettes. Les déménageurs en difficulté sont exclus avant de recevoir votre dossier.",
      highlight: "Exclusivité Moverz : double scoring financier + analyse interne",
    },
    {
      title: "2) Licence de transport et conformité légale",
      Icon: FileCheck,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-50 border-indigo-100",
      bullets: [
        "Inscription au registre des transporteurs (capacité professionnelle obligatoire)",
        "SIREN/SIRET présent sur le devis et cohérent avec le Kbis",
        "Raison sociale identique sur devis, RIB, et attestation d'assurance",
        "Pas de changement de nom récent suspect (arnaques connues)",
      ],
      note: "Sans licence de transport, le déménageur exerce illégalement. En cas de litige, aucun recours simple.",
    },
    {
      title: "3) Assurance RC Pro et marchandises transportées",
      Icon: ShieldCheck,
      iconColor: "text-teal-600",
      iconBg: "bg-teal-50 border-teal-100",
      bullets: [
        "Attestation d'assurance RC Pro valide (< 6 mois, plafond ≥ 1,5M€)",
        "Couverture marchandises transportées (standard 60€/m³ minimum)",
        "Franchise clairement indiquée (ex : 150€ = vous payez les 150 premiers euros en cas de casse)",
        "Possibilité d'assurance complémentaire pour objets de valeur (piano, œuvres d'art)",
      ],
      note: "Demandez TOUJOURS l'attestation d'assurance avant de signer. Si le déménageur refuse, c'est un red flag majeur.",
    },
    {
      title: "4) Risque expérience client (analyse des avis Google)",
      Icon: Star,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50 border-amber-100",
      bullets: [
        "Analyse des 20 derniers avis Google → note /100 (note moyenne + volume d'avis)",
        "Analyse spécifique des avis 1-2★ : détection de patterns récurrents (retards, casse, comportement)",
        "Seconde note /100 sur l'analyse des mauvais avis",
        "Les deux notes sont présentées séparément au client",
      ],
      note: "Les avis 1-2★ sont les plus révélateurs : si plusieurs clients signalent les mêmes problèmes (retards, casse), c'est un pattern structurel.",
    },
    {
      title: "5) Méthode d'estimation du volume (visite / visio / description détaillée)",
      Icon: Package,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50 border-orange-100",
      bullets: [
        "Visite technique gratuite = précision maximale (idéal pour logements > 100m²)",
        "Visio = bon compromis (rapide, assez précis)",
        "Description détaillée guidée (Moverz) = 3 minutes, tous les déménageurs reçoivent les mêmes infos",
        "ÉVITEZ l'estimation téléphonique (risque élevé de supplément jour J)",
      ],
      note: "40–50% des déménagements subissent un supplément jour J à cause d'une mauvaise estimation du volume (+200–800€).",
    },
    {
      title: "6) Devis détaillé et transparent",
      Icon: FileText,
      iconColor: "text-slate-600",
      iconBg: "bg-slate-50 border-slate-100",
      bullets: [
        "Prestations incluses clairement listées (emballage, démontage, protection)",
        "Accès détaillés (étage, ascenseur, parking, distance porte-camion)",
        "Tarif au m³ ou horaire (tout compris : porteurs, camion, carburant, péages)",
        "Options et surcoûts possibles explicités à l'avance",
      ],
      note: "Un devis vague = risque de suppléments cachés. Exigez un devis écrit détaillé avec toutes les prestations.",
    },
    {
      title: "7) Conditions de paiement et d'annulation",
      Icon: CreditCard,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50 border-emerald-100",
      bullets: [
        "Acompte maximum 30% (méfiez-vous des demandes de 50%+ ou 100% avant prestation)",
        "Paiement traçable obligatoire (virement, CB, chèque — pas de cash uniquement)",
        "Conditions d'annulation écrites (généralement gratuit jusqu'à 7–15 jours avant)",
        "Solde payable à l'arrivée ou sous 7 jours (pas avant le déménagement)",
      ],
      note: "Un acompte > 50% + paiement cash uniquement = red flag majeur (risque d'arnaque).",
    },
    {
      title: "8) Fiabilité opérationnelle et plan B",
      Icon: Truck,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50 border-purple-100",
      bullets: [
        "Nombre de porteurs et taille de camion adaptés au volume",
        "Matériel de protection professionnel (couvertures, sangles, diables)",
        "Procédure en cas d'imprévu (panne camion, météo, retard)",
        "Planning réaliste (temps de chargement + trajet + déchargement)",
      ],
      note: "La logistique et le plan B sont souvent plus importants que le prix. Posez la question : 'Que se passe-t-il si...'",
    },
  ];

  const moverz3Checks = [
    {
      Icon: Star,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50 border-amber-100",
      title: "Risque expérience client /100",
      desc: "20 derniers avis Google analysés + détection de patterns récurrents dans les avis 1-2★ (retards, casse, comportement). Deux notes /100 distinctes.",
    },
    {
      Icon: TrendingDown,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50 border-blue-100",
      title: "Risque financier /100",
      desc: "Scores Creditsafe + Pappers consolidés + ratio cash/dettes interne. Alerte cash = exclusion automatique.",
    },
    {
      Icon: ShieldAlert,
      iconColor: "text-red-600",
      iconBg: "bg-red-50 border-red-100",
      title: "Risque juridique /100",
      desc: "Décisions de justice + scoring non-financier Pappers. Alerte juridique = exclusion automatique.",
    },
    {
      Icon: ShieldCheck,
      iconColor: "text-teal-600",
      iconBg: "bg-teal-50 border-teal-100",
      title: "Vérifications complémentaires",
      desc: "Licence de transport, SIREN actif, assurance RC Pro (≥ 1,5 M€), identité légale. Le socle réglementaire.",
    },
  ];

  const guides = [
    { href: "/blog/eviter-arnaques-demenagement/", Icon: AlertTriangle, iconColor: "text-red-600", iconBg: "bg-red-50", title: "Éviter les arnaques", desc: "Guide complet : 64% anomalies, 257 faillites, outils de vérification." },
    { href: "/verifications-partenaires/", Icon: CheckSquare, iconColor: "text-teal-600", iconBg: "bg-teal-50", title: "Vérifications Moverz", desc: "3 analyses de risque /100 : avis Google, financier, juridique. Alertes = exclusion." },
    { href: "/blog/meilleur-comparateur-demenagement-2026/", Icon: Trophy, iconColor: "text-amber-600", iconBg: "bg-amber-50", title: "Meilleur comparateur", desc: "5 critères pour choisir un comparateur fiable (analyses de risque, devis comparables)." },
    { href: "/blog/verifier-demenageur-creditsafe-siren/", Icon: ShieldCheck, iconColor: "text-blue-600", iconBg: "bg-blue-50", title: "Vérifier un déménageur", desc: "SIREN, Creditsafe, assurance RC Pro — le guide complet pour ne pas se faire avoir." },
    { href: "/blog/estimer-volume-demenagement-guide-complet/", Icon: Package, iconColor: "text-orange-600", iconBg: "bg-orange-50", title: "Estimer son volume", desc: "3 méthodes (calcul auto, inventaire, visite) pour éviter les surcoûts jour J." },
    { href: "/blog/assurance-demenagement-que-couvre/", Icon: Scale, iconColor: "text-purple-600", iconBg: "bg-purple-50", title: "Assurance déménagement", desc: "Garantie légale 60€/m³, déclaration de valeur, RC Pro — ce qui est vraiment couvert." },
    { href: "/blog/supplement-prix-jour-j-comment-eviter/", Icon: BarChart2, iconColor: "text-indigo-600", iconBg: "bg-indigo-50", title: "Éviter les suppléments jour J", desc: "+200 à 800€ de surcoût pour 40-50% des déménagements — comment les anticiper." },
    { href: "/blog/comparer-devis-demenagement-guide/", Icon: ClipboardList, iconColor: "text-slate-600", iconBg: "bg-slate-50", title: "Comparer des devis", desc: "7 éléments à vérifier pour comparer efficacement (volume, tarif, accès)." },
  ];

  const redFlags = [
    "Devis sans SIREN/SIRET, ou identité légale floue (risque : faux déménageur)",
    "Refus de fournir une attestation d'assurance RC Pro ou un Kbis récent (risque : pas d'assurance)",
    "Demande de paiement 50%+ ou 100% avant prestation (risque : arnaque, acompte perdu)",
    "Paiement cash uniquement, refus de virement/chèque (risque : pas de traçabilité, fraude fiscale)",
    "Prix donné au téléphone sans visite/visio/inventaire (risque : supplément +200–800€ jour J)",
    "Prix anormalement bas (<30% du marché) (risque : entreprise en difficulté cherchant trésorerie rapide)",
    "Contradictions entre raison sociale sur devis/RIB/assurance (risque : sous-traitance cachée, fraude)",
    "Absence de détail sur accès/volume/conditions d'annulation (risque : suppléments cachés)",
  ];

  const checklist = [
    { text: "Risque financier /100 acceptable (Creditsafe + Pappers, pas d'alerte cash)", priority: "high" },
    { text: "Licence de transport valide (inscription registre des transporteurs)", priority: "high" },
    { text: "Attestation assurance RC Pro < 6 mois (plafond ≥ 1,5M€)", priority: "high" },
    { text: "Risque expérience client /100 acceptable (avis Google analysés, pas de patterns négatifs)", priority: "medium" },
    { text: "Méthode d'estimation précise : visite/visio/description détaillée (pas téléphonique)", priority: "high" },
    { text: "Devis écrit détaillé (volume, accès, prestations, options, surcoûts)", priority: "high" },
    { text: "Accès explicités (étage, ascenseur, parking, portage)", priority: "medium" },
    { text: "Prestations incluses clairement listées (emballage, démontage, protection)", priority: "medium" },
    { text: "Acompte ≤ 30% + paiement traçable (virement/CB/chèque)", priority: "high" },
    { text: "Conditions d'annulation écrites (délai, pénalités)", priority: "medium" },
    { text: "Cohérence raison sociale sur devis ↔ RIB ↔ assurance", priority: "high" },
    { text: "Clause 'Sans sous-traitance sauf accord écrit' au contrat", priority: "medium" },
  ];

  const steps = [
    { step: "Vérifiez le SIREN sur annuaire-entreprises.data.gouv.fr (entreprise active, pas en liquidation).", tool: "Outil gratuit" },
    { step: "Consultez societe.com ou infogreffe.fr pour voir l'historique, le chiffre d'affaires, les procédures éventuelles.", tool: "Gratuit (infos limitées)" },
    { step: "Demandez un Kbis récent (raison sociale, adresse, dirigeants).", tool: "Le déménageur doit vous le fournir" },
    { step: "Demandez l'attestation d'assurance RC Pro (validité < 6 mois, plafond ≥ 1,5M€, franchise).", tool: "Obligatoire légalement" },
    { step: "Consultez les avis Google Maps (note 4.0+/5, volume 20+ avis, pas de litiges répétitifs).", tool: "Gratuit" },
    { step: "Vérifiez la cohérence raison sociale ↔ RIB ↔ devis ↔ assurance (même nom exact).", tool: "Lecture croisée" },
    { step: "Exigez une estimation précise du volume (visite/visio ou description détaillée guidée) — pas de devis téléphonique.", tool: "Visite gratuite ou description guidée" },
    { step: "Demandez un devis écrit détaillé (prestations, accès, options, surcoûts, conditions annulation).", tool: "Obligatoire légalement" },
  ];

  return (
    <main className="bg-white min-h-screen">
      <FAQSchema faqs={faqs} />
      <JsonLd
        id="criteres-webpage-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://moverz.fr/criteres-choisir-demenageur/",
          name: "Critères pour choisir un déménageur fiable en 2026",
          description: "Choisir un déménageur fiable : 3 analyses de risque notées /100 + licence, assurance RC Pro, estimation volume, devis détaillé. Checklist + FAQ.",
          url: "https://moverz.fr/criteres-choisir-demenageur/",
          inLanguage: "fr-FR",
          isPartOf: { "@id": "https://moverz.fr/#website" },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://moverz.fr/" },
              { "@type": "ListItem", position: 2, name: "Critères pour choisir un déménageur", item: "https://moverz.fr/criteres-choisir-demenageur/" },
            ],
          },
        }}
      />
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Choisir un déménageur fiable", href: "/criteres-choisir-demenageur/" },
        ]}
        eyebrow="Guide anti-arnaques 2026"
        title="Critères pour choisir un déménageur fiable — 3 analyses de risque /100"
        subtitle="64% des déménageurs présentent des anomalies (DGCCRF 2023), 257 faillites en 2024. Ce guide vous explique les 3 analyses de risque Moverz (avis Google, financier, juridique) + les critères complémentaires pour choisir en toute sécurité."
        primaryCta={{ label: "Voir les 8 critères", href: "#criteres" }}
        secondaryCta={{ label: "FAQ", href: "#faq" }}
      />

      <section className="section section-light">
        <div className="container max-w-4xl space-y-10">

          {/* Alerte chiffres clés */}
          <div className="rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-6 md:p-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-red-100 border border-red-200">
                <AlertTriangle className="w-5 h-5 text-red-600" strokeWidth={2} />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-v4-text">
                  Pourquoi ces critères sont cruciaux
                </h2>
                <div className="space-y-2 text-sm md:text-base text-v4-text-secondary leading-relaxed">
                  <p>
                    <strong className="text-v4-text">64% des déménageurs présentent au moins une anomalie</strong> selon la DGCCRF (2023) :
                    absence d'assurance, licences non conformes, sous-traitance non déclarée, devis trompeurs.
                  </p>
                  <p>
                    <strong className="text-v4-text">257 faillites de déménageurs en 2024</strong> (source Altares),
                    soit 20% du parc. Un déménageur en difficulté financière = risque élevé d'acompte perdu, de prestation non réalisée,
                    ou de litige non résolu.
                  </p>
                  <p>
                    <strong className="text-v4-text">Conclusion :</strong> Choisir uniquement sur le prix est dangereux.
                    Vérifiez la santé financière, les licences, et les assurances <strong>avant</strong> de signer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 8 critères essentiels */}
          <div id="criteres" className="scroll-mt-28 space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-v4-text">
              Les 8 critères essentiels pour choisir un déménageur fiable
            </h2>
            <p className="text-sm md:text-base text-v4-text-secondary">
              Vérifiez ces 8 points <strong>avant</strong> de signer un devis. Un déménageur fiable accepte de fournir
              toutes ces preuves et de documenter clairement le périmètre de sa prestation.
            </p>

            <div className="grid gap-4">
              {criteria.map((c) => (
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
                      {c.highlight && (
                        <p className="text-xs md:text-sm font-semibold text-v4-accent bg-v4-accent/10 rounded-full px-3 py-1 inline-block">
                          {c.highlight}
                        </p>
                      )}
                      <ul className="grid gap-2 text-sm md:text-base text-v4-text/90">
                        {c.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-turquoise shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-v4-text-secondary bg-[#F8FAFC] rounded-xl p-3 border border-v4-border">
                        <strong className="text-v4-text">Pourquoi :</strong> {c.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Moverz vérifie automatiquement */}
          <div className="rounded-2xl border border-brand-turquoise-300 bg-gradient-to-br from-brand-turquoise/10 to-white p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" strokeWidth={2} />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-v4-text">
                Ce que Moverz vérifie automatiquement pour vous
              </h2>
            </div>
            <p className="text-sm md:text-base text-v4-text-secondary leading-relaxed">
              Plutôt que de vérifier manuellement 8 critères × 5 déménageurs (40 vérifications !),
              <strong className="text-v4-text"> Moverz automatise ces vérifications</strong> avant de vous proposer des devis.
            </p>

            <div className="grid gap-3 md:grid-cols-2">
              {moverz3Checks.map((item) => (
                <div key={item.title} className="rounded-xl border border-v4-border bg-white p-5 flex gap-3 items-start">
                  <div className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border ${item.iconBg}`}>
                    <item.Icon className={`w-4 h-4 ${item.iconColor}`} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-semibold text-v4-text text-sm md:text-base">{item.title}</p>
                    <p className="text-xs md:text-sm text-v4-text-secondary mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-white/60 border border-brand-turquoise-200 p-4 text-center">
              <p className="text-sm md:text-base text-v4-text">
                <strong>Résultat :</strong> Vous ne recevez des devis que de déménageurs évalués selon 3 analyses de risque /100. Alertes financières ou juridiques = exclusion automatique.
              </p>
              <a
                href="/verifications-partenaires/"
                className="mt-3 inline-block text-sm font-semibold text-v4-accent hover:text-v4-accent underline"
              >
                En savoir plus sur nos vérifications →
              </a>
            </div>
          </div>

          {/* How to verify */}
          <div id="checklist" className="scroll-mt-28 space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-v4-text">
              Comment vérifier un déménageur vous-même (checklist actionnable)
            </h2>

            <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8 space-y-4">
              <h3 className="text-base md:text-lg font-bold text-v4-text">8 étapes de vérification</h3>
              <ol className="grid gap-3 text-sm md:text-base text-v4-text/90">
                {steps.map((item, i) => (
                  <li key={item.step} className="flex gap-3 items-start">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-v4-accent/15 text-v4-text text-sm font-bold border border-brand-turquoise-300 shrink-0">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <p>{item.step}</p>
                      <p className="text-xs text-v4-accent mt-1 font-medium flex items-center gap-1">
                        <Lightbulb className="w-3 h-3" /> {item.tool}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 rounded-xl bg-v4-accent/10 border border-brand-turquoise-200 p-4 text-center">
                <p className="text-sm md:text-base text-v4-text">
                  <strong>Trop long ?</strong> Moverz fait tout automatiquement : 3 analyses de risque /100 (expérience client, financier, juridique) + vérifications réglementaires.
                </p>
                <a
                  href={buildTunnelUrl({ from: "criteres-checklist" })}
                  className="mt-3 inline-block text-sm font-semibold text-v4-accent hover:text-v4-accent underline"
                >
                  Obtenir mes devis →
                </a>
              </div>
            </div>
          </div>

          {/* Red flags */}
          <div className="rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-red-100 border border-red-200">
                <AlertOctagon className="w-5 h-5 text-red-600" strokeWidth={2} />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-v4-text">
                8 Red flags à éviter absolument
              </h2>
            </div>
            <ul className="grid gap-3 text-sm md:text-base text-v4-text/90">
              {redFlags.map((b) => (
                <li key={b} className="flex gap-3 items-start bg-white rounded-lg p-3 border border-red-100">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-100 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-600" strokeWidth={2.5} />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-white border border-red-200 p-4 text-sm md:text-base text-v4-text-secondary">
              <strong className="text-v4-text">Si vous constatez 2+ red flags :</strong> Fuyez.
              Ce sont des signaux objectifs d'arnaque ou de pratique douteuse.
              <a href="/blog/eviter-arnaques-demenagement/" className="text-v4-accent hover:text-v4-accent font-semibold ml-1 underline">
                Guide complet anti-arnaques →
              </a>
            </div>
          </div>

          {/* Checklist avant de signer */}
          <div className="rounded-2xl border border-v4-border bg-v4-text p-6 md:p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/20">
                <ClipboardList className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h2 className="text-lg md:text-xl font-semibold">Checklist avant de signer (12 points)</h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2.5 text-sm md:text-base">
              {checklist.map((item) => (
                <div key={item.text} className="flex gap-3 items-start">
                  <span className="text-white/60 shrink-0 font-mono text-xs mt-0.5">☐</span>
                  <span className={item.priority === "high" ? "text-white font-medium" : "text-white/90"}>
                    {item.text}
                    {item.priority === "high" && <span className="ml-2 text-v4-accent text-xs">●●●</span>}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/60 text-center">
              ●●● = Critères prioritaires (santé financière, licences, assurances, volume)
            </p>
          </div>

          {/* Maillage interne (SEO) */}
          <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-v4-accent text-center">
              Guides complémentaires
            </p>
            <h2 className="mt-3 text-xl md:text-2xl font-bold text-v4-text text-center">
              Pour aller plus loin
            </h2>
            <p className="mt-2 text-sm text-v4-text-secondary text-center max-w-2xl mx-auto">
              8 guides complémentaires pour maîtriser chaque aspect de votre déménagement.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {guides.map((item) => (
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

      <div id="faq" className="scroll-mt-28">
        <FAQ title="FAQ : choisir un déménageur" faqs={faqs} limit={10} id="faq" />
      </div>

      {/* CTA principal */}
      <section className="section section-light pt-0">
        <div className="container max-w-4xl space-y-4">
          <div className="rounded-2xl border border-brand-turquoise-300 bg-gradient-to-br from-brand-turquoise/10 to-white p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-v4-text">
                Recevez des devis de déménageurs déjà vérifiés
              </h3>
            </div>
            <p className="text-sm md:text-base text-v4-text-secondary mb-5 max-w-2xl mx-auto">
              Moverz évalue automatiquement chaque déménageur selon 3 analyses de risque /100 (expérience client, financier, juridique)
              + standardise les volumes pour des devis réellement comparables. Alertes = exclusion automatique.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={buildTunnelUrl({ from: "criteres-choisir-demenageur-cta" })}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
                style={{ background: "#F59E0B", boxShadow: "0 4px 16px rgba(245,158,11,0.3)" }}
              >
                <span>Obtenir mes devis</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/pourquoi-moverz/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-v4-border px-6 py-3 text-sm font-semibold text-v4-text hover:border-brand-turquoise/50 hover:shadow-sm transition-all"
              >
                <span>Pourquoi Moverz ?</span>
              </a>
            </div>
            <p className="text-xs text-v4-text-secondary mt-4">
              100% gratuit · Dossier anonyme · Devis sous 5–7 jours · Note 4.9/5
            </p>
          </div>

          {/* CTA secondaire */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-v4-border bg-white p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-v4-text">Estimation de volume précise</p>
                <p className="text-xs text-v4-text-secondary mt-1">
                  Description guidée en 3 minutes, mêmes infos à tous, évite les surcoûts jour J.
                </p>
              </div>
              <a
                href="/blog/estimer-volume-demenagement-guide-complet/"
                className="mt-3 text-sm font-semibold text-v4-accent hover:text-v4-accent underline inline-flex items-center gap-1"
              >
                <span>Voir le guide complet</span>
                <span>→</span>
              </a>
            </div>

            <div className="rounded-2xl border border-v4-border bg-white p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-v4-text">Comparer efficacement les devis</p>
                <p className="text-xs text-v4-text-secondary mt-1">
                  7 éléments à vérifier pour comparer des devis de déménagement.
                </p>
              </div>
              <a
                href="/blog/comparer-devis-demenagement-guide/"
                className="mt-3 text-sm font-semibold text-v4-accent hover:text-v4-accent underline inline-flex items-center gap-1"
              >
                <span>Voir le guide</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
