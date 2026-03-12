import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { LabelMoverzHero } from "@/components/label-moverz/LabelMoverzHero";
import { LabelScoringExplainer } from "@/components/label-moverz/LabelScoringExplainer";
import { LabelComparison } from "@/components/label-moverz/LabelComparison";
import { LabelStats } from "@/components/label-moverz/LabelStats";
import { LabelCTA } from "@/components/label-moverz/LabelCTA";
import { ScoringChecker } from "@/components/label-moverz/ScoringChecker";
import { RecentScores } from "@/components/label-moverz/RecentScores";

// La carte utilise Google Maps JS — chargée uniquement côté client
const MoverzMap = dynamic(
  () => import("@/components/label-moverz/MoverzMap").then((m) => ({ default: m.MoverzMapInner })),
  { ssr: false },
);

export const metadata: Metadata = {
  title: "Vérifier un Déménageur : Score Fiabilité /100 Gratuit | Moverz",
  description:
    "Vérifiez en 30 secondes si votre déménageur est fiable : score /100 calculé sur la santé financière (Pappers), le casier judiciaire (BODACC) et les avis clients des 12 derniers mois. Gratuit, sans inscription. 3 000+ déménageurs analysés, 0 faillite depuis jan. 2026.",
  keywords: [
    "vérifier déménageur fiable",
    "comment vérifier un déménageur",
    "déménageur certifié",
    "score fiabilité déménageur",
    "arnaque déménagement éviter",
    "déménageur sérieux France",
    "santé financière déménageur",
    "avis déménageur authentiques",
    "label déménagement",
  ],
  alternates: {
    canonical: "https://moverz.fr/label-moverz/",
  },
  openGraph: {
    title: "Vérifiez la fiabilité de votre déménageur en 30 secondes — Score /100 gratuit",
    description:
      "Score /100 automatique : santé financière (Pappers), casier judiciaire (BODACC), avis clients analysés sur 12 mois. 3 000+ déménageurs vérifiés. 0 faillite depuis jan. 2026.",
    type: "website",
    url: "https://moverz.fr/label-moverz/",
    images: [{ url: "https://moverz.fr/label-moverz/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vérifier un déménageur : score fiabilité /100 gratuit | Moverz",
    description:
      "Score /100 automatique · santé financière + casier judiciaire + avis clients analysés. 3 000+ déménageurs vérifiés, 0 faillite.",
    images: ["https://moverz.fr/label-moverz/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function LabelMoverzPage() {
  const faqItems = [
    {
      question: "Comment vérifier si un déménageur est fiable ?",
      answer:
        "Saisissez le nom, la ville ou le SIRET de votre déménageur dans l'outil Label Moverz ci-dessus. Le score /100 s'affiche en moins de 30 secondes. Il est calculé automatiquement à partir de 5 sous-scores regroupés en 3 dimensions : les bilans comptables (Pappers), les décisions de justice (BODACC), la note Google pondérée, et l'analyse de tous les avis clients des 12 derniers mois. Gratuit, sans inscription.",
    },
    {
      question: "Qu'est-ce que le Label Moverz ?",
      answer:
        "Le Label Moverz est une certification automatique basée sur un score de 0 à 100 calculé à partir de 3 dimensions : (1) Fiabilité légale 25% — santé financière + casier judiciaire via Pappers et BODACC, (2) Satisfaction clients 40% — note Google + analyse automatisée de tous les avis des 12 derniers mois, (3) Alertes 35% — détection de 6 catégories de problèmes récurrents dans les avis (casses, vols, retards, prix modifiés…). Un score inférieur à 50/100 entraîne l'exclusion automatique du déménageur.",
    },
    {
      question: "Comment est calculé le score /100 ?",
      answer:
        "Le score Moverz agrège 5 sous-scores indépendants, chacun issu d'une source différente : Score Financier 12,5% (bilans, trésorerie, fonds propres via Pappers), Score Juridique 12,5% (BODACC, décisions de justice — démarre à 100 et applique des malus), Score Google 20% (note pondérée par le volume d'avis), Score Réputation 20% (ratio avis positifs/négatifs authentiques sur 12 mois, avec détection des faux avis), Score Vigilance 35% (analyse automatisée des 6 catégories d'alertes). L'ensemble est recalculé automatiquement tous les 7 jours.",
    },
    {
      question: "Quelle est la différence avec NF Service, Qualipro ou ISO 9001 ?",
      answer:
        "Le Label Moverz est le seul label à vérifier la santé financière en continu (bilans, trésorerie, dettes via Pappers) — les autres certifications ne l'analysent pas. Il analyse automatiquement jusqu'à 500 avis Google des 12 derniers mois pour détecter les problèmes récurrents. Son monitoring est continu (7 jours) contre annuel pour les autres. L'exclusion est automatique dès que le score passe sous 50/100. Et il est entièrement gratuit pour les déménageurs.",
    },
    {
      question: "À quelle fréquence les déménageurs sont-ils re-vérifiés ?",
      answer:
        "Les avis Google sont re-collectés tous les 7 jours (via SearchAPI.io, jusqu'à 500 avis sur 12 mois). Les données financières Pappers sont actualisées tous les 30 jours. En cas de score passant sous 50/100 ou d'alerte critique détectée (vol, casse systématique…), l'exclusion est immédiate et automatique. Aucun déménageur labellisé n'a fait faillite depuis janvier 2026.",
    },
    {
      question: "Comment fonctionne la détection des faux avis ?",
      answer:
        "Notre système exclut automatiquement les avis suspects selon 4 critères : texte vide ou inférieur à 10 mots, auteur en doublon dans la liste, rafale de 3+ avis 5 étoiles la même semaine, avis 5 étoiles sans texte. Seuls les avis authentiques sont utilisés pour calculer le score de réputation. Le nombre d'avis suspects est affiché dans le détail du score.",
    },
    {
      question: "Que signifie le score de vigilance ?",
      answer:
        "Le score de vigilance (35% du score global) analyse les avis négatifs des 12 derniers mois et recherche 6 catégories de problèmes récurrents : casses et dégradations (poids 30%), vols signalés (30%), retards et délais (10%), prix modifiés après signature (10%), personnel désagréable (10%), autres incidents (10%). Quand plus de 3% des avis authentiques mentionnent un problème dans une catégorie, celle-ci passe en alerte rouge et pénalise fortement le score.",
    },
    {
      question: "Un déménageur peut-il améliorer son score ?",
      answer:
        "Oui, de plusieurs façons naturelles : en maintenant une bonne santé financière, en accumulant des avis Google positifs authentiques, et en prenant des engagements concrets sur les problèmes identifiés dans les avis négatifs. Notre système valide automatiquement la qualité de ces engagements. Il ne peut pas acheter ni manipuler son score — la détection des faux avis est automatique.",
    },
  ];

  return (
    <>
      <WebPageSchema
        name="Vérifier un Déménageur : Score Fiabilité /100 Gratuit | Moverz"
        description="Vérifiez en 30 secondes si votre déménageur est fiable : score /100 calculé sur la santé financière (Pappers), le casier judiciaire (BODACC) et les avis clients des 12 derniers mois. Gratuit, sans inscription."
        url="https://moverz.fr/label-moverz/"
        about="Vérification fiabilité déménageurs France"
      />
      <FAQSchema faqs={faqItems} />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://moverz.fr/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Vérifier un déménageur",
                item: "https://moverz.fr/label-moverz/",
              },
            ],
          }),
        }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Comment vérifier si un déménageur est fiable",
            description:
              "Vérifiez la fiabilité d'un déménageur en 30 secondes avec le Label Moverz : score /100 automatique calculé sur 5 sous-scores en 3 dimensions. Gratuit, sans inscription.",
            totalTime: "PT30S",
            estimatedCost: { "@type": "MonetaryAmount", currency: "EUR", value: "0" },
            tool: [{ "@type": "HowToTool", name: "Label Moverz — gratuit, sans inscription" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Saisissez le nom ou SIRET du déménageur",
                text: "Dans le moteur de recherche Label Moverz, entrez le nom de l'entreprise, sa ville ou son numéro SIRET (9 chiffres, trouvable sur le devis).",
                url: "https://moverz.fr/label-moverz/#scoring-checker-section",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Consultez le score /100 et les 3 dimensions",
                text: "Le score global s'affiche immédiatement : Fiabilité légale (bilans + judiciaire), Satisfaction clients (note Google + analyse avis), Alertes (6 catégories de problèmes récurrents). Un score sous 50/100 signifie que le déménageur est exclu.",
                url: "https://moverz.fr/label-moverz/#scoring-checker-section",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Vérifiez les alertes spécifiques",
                text: "Consultez le détail des 6 catégories de vigilance : casses, vols, retards, prix modifiés, personnel, autres. Chaque catégorie indique le nombre de mentions sur les avis authentiques des 12 derniers mois.",
                url: "https://moverz.fr/label-moverz/#scoring-checker-section",
              },
            ],
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Label Moverz — Vérification fiabilité déménageurs",
            description:
              "Service gratuit de vérification de la fiabilité des déménageurs français. Score /100 automatique calculé sur la santé financière (Pappers), le casier judiciaire (BODACC), la note Google et les avis clients des 12 derniers mois. Monitoring continu toutes les 7 jours. 3 000+ déménageurs analysés en France.",
            serviceType: "VerificationService",
            provider: {
              "@type": "Organization",
              name: "Moverz",
              url: "https://moverz.fr",
              logo: "https://moverz.fr/logo.png",
            },
            areaServed: { "@type": "Country", name: "France" },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
              description: "Consultation gratuite, sans inscription, jusqu'à 3 déménageurs par session.",
            },
            url: "https://moverz.fr/label-moverz/",
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://moverz.fr/label-moverz/",
              serviceType: "En ligne",
            },
          }),
        }}
      />

      <LabelMoverzHero />
      <LabelScoringExplainer />
      <MoverzMap />
      <div id="scoring-checker-section">
        <ScoringChecker />
      </div>
      <RecentScores />
      <LabelStats />
      <LabelComparison />
      <LabelCTA />

      {/* Section longform statique — contenu crawlable par Google (SSR) */}
      <section className="section section-light" aria-label="Guide vérification déménageur">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-8"
            style={{ color: "var(--color-text)" }}
          >
            Pourquoi vérifier un déménageur avant de signer ?
          </h2>
          <p className="text-lg mb-6" style={{ color: "var(--color-text-secondary)" }}>
            En France,{" "}
            <strong>257 entreprises de déménagement ont fait faillite en 2024</strong> (source :
            BODACC). Cela représente près d&apos;une faillite par jour ouvré. Pour le client, les
            conséquences sont graves : déménagement annulé à la dernière minute, meubles bloqués
            chez un syndic judiciaire, caution perdue, remboursement impossible.
          </p>
          <p className="text-lg mb-6" style={{ color: "var(--color-text-secondary)" }}>
            Au-delà des faillites,{" "}
            <strong>18 % des déménageurs référencés chez Moverz ont été exclus</strong> à cause
            d&apos;un score insuffisant — signaux d&apos;alerte dans les avis clients (casses, prix
            modifiés après signature, personnel agressif), santé financière fragile, ou procédures
            judiciaires en cours.
          </p>
          <p className="text-lg mb-12" style={{ color: "var(--color-text-secondary)" }}>
            Les certifications classiques (NF Service, Qualipro) sont délivrées une fois par an sur
            dossier. Elles ne vérifient pas la santé financière en continu et n&apos;analysent pas
            les avis clients en temps réel. Le Label Moverz est le premier système de vérification
            automatique et continu, mis à jour tous les 7 jours.
          </p>

          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-8"
            style={{ color: "var(--color-text)" }}
          >
            Comment fonctionnent les 5 sous-scores (3 dimensions)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div
              className="p-6 rounded-2xl"
              style={{ background: "white", border: "1px solid var(--color-border)" }}
            >
              <h3 className="font-bold text-xl mb-3" style={{ color: "var(--color-text)" }}>
                1. Santé financière — Pappers (12,5%)
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--color-text-secondary)" }}>
                Analyse des bilans comptables publiés au registre du commerce : résultat net, fonds
                propres, trésorerie, niveau d&apos;endettement, et tendance sur 2 exercices. Un
                déménageur avec des fonds propres négatifs ou une trésorerie en chute est un signal
                d&apos;alerte fort, même si son activité semble normale en surface.
              </p>
              <p className="text-xs font-medium" style={{ color: "var(--color-accent)" }}>
                Source : Pappers (registre officiel du commerce)
              </p>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{ background: "white", border: "1px solid var(--color-border)" }}
            >
              <h3 className="font-bold text-xl mb-3" style={{ color: "var(--color-text)" }}>
                2. Casier judiciaire — BODACC (12,5%)
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--color-text-secondary)" }}>
                Vérification des décisions de justice publiées au Bulletin Officiel des Annonces
                Civiles et Commerciales : procédures collectives, redressements, liquidations, et
                décisions impliquant les dirigeants. Une décision grave de moins de 3 ans entraîne
                un malus de 40 points sur ce sous-score.
              </p>
              <p className="text-xs font-medium" style={{ color: "var(--color-accent)" }}>
                Source : BODACC (Journal officiel des annonces judiciaires)
              </p>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{ background: "white", border: "1px solid var(--color-border)" }}
            >
              <h3 className="font-bold text-xl mb-3" style={{ color: "var(--color-text)" }}>
                3. Note Google pondérée (20%)
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--color-text-secondary)" }}>
                La note Google brute est insuffisante : un déménageur avec 4,8/5 sur 8 avis
                n&apos;est pas comparable à un autre avec 4,5/5 sur 200 avis. Notre score pondère
                la note par le volume : moins de 30 avis plafonne le score à 80/100. Un
                établissement définitivement fermé reçoit automatiquement 0/100.
              </p>
              <p className="text-xs font-medium" style={{ color: "var(--color-accent)" }}>
                Source : Google Places API (officielle)
              </p>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{ background: "white", border: "1px solid var(--color-border)" }}
            >
              <h3 className="font-bold text-xl mb-3" style={{ color: "var(--color-text)" }}>
                4. Analyse des avis clients sur 12 mois (55%)
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--color-text-secondary)" }}>
                Jusqu&apos;à 500 avis Google des 12 derniers mois sont collectés et analysés
                automatiquement. Les faux avis sont détectés et exclus (rafales suspectes, comptes
                vides, avis sans texte). L&apos;analyse identifie 6 catégories de problèmes
                récurrents : casses/dégradations, vols, retards, prix modifiés, personnel, autres.
                Si plus de 3 % des avis authentiques mentionnent un problème, la catégorie passe en
                alerte rouge.
              </p>
              <p className="text-xs font-medium" style={{ color: "var(--color-accent)" }}>
                Source : SearchAPI.io · Analyse automatisée
              </p>
            </div>
          </div>

          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "var(--color-text)" }}
          >
            Ce que les autres certifications ne vérifient pas
          </h2>
          <p className="text-lg mb-6" style={{ color: "var(--color-text-secondary)" }}>
            La certification <strong>NF Service déménagement</strong> (AFNOR) et le label{" "}
            <strong>Qualipro déménagement</strong> sont des certifications annuelles basées sur un
            audit de processus. Elles vérifient que l&apos;entreprise dispose d&apos;une assurance
            RC Pro valide et d&apos;un devis normalisé — mais elles ne consultent pas les bilans
            comptables, ne vérifient pas le BODACC en continu, et n&apos;analysent pas les avis
            clients récents. Une entreprise certifiée NF Service peut faire faillite 6 mois après
            son audit sans que personne ne le sache.
          </p>
          <p className="text-lg mb-12" style={{ color: "var(--color-text-secondary)" }}>
            Le Label Moverz est recalculé tous les 7 jours. En cas d&apos;alerte critique
            (procédure judiciaire, score passant sous 50/100), l&apos;exclusion est automatique et
            immédiate. C&apos;est pour cela qu&apos;
            <strong>
              aucun déménageur labellisé Moverz n&apos;a fait faillite depuis janvier 2026
            </strong>
            .
          </p>

          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "var(--color-text)" }}
          >
            Ce qu&apos;il faut vérifier avant de signer un devis de déménagement
          </h2>
          <ul className="space-y-3 mb-12">
            {[
              {
                label: "Le score Label Moverz",
                detail:
                  'Vérifiez que le score est ≥ 70/100 ("Bon" ou "Excellent"). Un score sous 50 est rédhibitoire.',
              },
              {
                label: "La santé financière (Pappers)",
                detail:
                  "Consultez les derniers bilans sur pappers.fr. Des fonds propres négatifs ou une trésorerie en forte baisse sont des signaux d'alerte.",
              },
              {
                label: "L'assurance RC Pro en cours de validité",
                detail:
                  "Demandez l'attestation d'assurance responsabilité civile professionnelle avant de signer. Vérifiez la date d'expiration.",
              },
              {
                label: "La licence de transport (LTI)",
                detail:
                  "Tout déménageur professionnel doit être titulaire d'une Licence de Transport Intérieur. Vérifiable sur le site du Ministère des Transports.",
              },
              {
                label: "Les avis Google récents (< 6 mois)",
                detail:
                  "Lisez les avis négatifs récents. Les problèmes récurrents de casse, de retard ou de facturation surprise sont des signaux concrets.",
              },
              {
                label: "Le devis détaillé (lettre de voiture)",
                detail:
                  "Le devis doit mentionner le volume estimé, les options choisies, le montant TTC, et les conditions de révision de prix. Tout supplément non prévu peut être contesté.",
              },
            ].map((item) => (
              <li
                key={item.label}
                className="flex gap-3 p-4 rounded-xl"
                style={{ background: "white", border: "1px solid var(--color-border)" }}
              >
                <span className="text-lg shrink-0" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                    {item.label} —{" "}
                  </span>
                  <span style={{ color: "var(--color-text-secondary)" }}>{item.detail}</span>
                </div>
              </li>
            ))}
          </ul>

          <div
            className="p-6 rounded-2xl text-center"
            style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}
          >
            <p className="text-base mb-4" style={{ color: "var(--color-text-secondary)" }}>
              Pour aller plus loin : consultez notre guide complet sur les arnaques au déménagement
              et nos critères de sélection des partenaires.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/blog/eviter-arnaques-demenagement/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                style={{ background: "var(--color-accent)", color: "white" }}
              >
                Guide anti-arnaques déménagement
              </Link>
              <Link
                href="/verifications-partenaires/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: "white",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                }}
              >
                Nos critères de sélection
              </Link>
              <Link
                href="/criteres-choisir-demenageur/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: "white",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                }}
              >
                Comment choisir un déménageur
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
