import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getFullMetadata } from "@/lib/canonical-helper";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { buildTunnelUrl } from "@/lib/tunnel-url";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { JsonLd } from "@/components/schema/JsonLd";
import { Check, Star, ShieldCheck, Scale, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = getFullMetadata(
  "verifications-partenaires",
  "Vérifications déménageurs | Score Moverz /100",
  "Chaque déménageur reçoit un Score /100 (3 dimensions : fiabilité légale, satisfaction clients, alertes). Score < 50/100 = exclusion automatique."
);

export default function VerificationsPartenairesPage() {
  const faqs: FAQItem[] = [
    {
      question: "Comment est calculé le Score Moverz ?",
      answer:
        "Le Score Moverz est un score de 0 à 100 calculé automatiquement à partir de 5 sous-scores indépendants : (1) Score Financier 12,5% (Pappers : résultat net, fonds propres, trésorerie, endettement, tendance), (2) Score Juridique 12,5% (BODACC + Pappers Décisions : procédures, litiges, malus selon gravité/récence), (3) Score Google 20% (note pondérée par volume d'avis), (4) Score Réputation 20% (ratio positifs/négatifs sur tous les avis authentiques 12 mois), (5) Score Vigilance 35% (analyse automatisée de 6 catégories d'alertes). Ces 5 sous-scores sont regroupés en 3 dimensions client : Fiabilité légale, Satisfaction clients, Alertes.",
    },
    {
      question: "Que signifient les 3 dimensions du scoring ?",
      answer:
        "Les 3 dimensions regroupent les 5 sous-scores pour une présentation claire : (1) Fiabilité légale 25% = Score Financier + Score Juridique (santé financière + casier juridique), (2) Satisfaction clients 40% = Score Google + Score Réputation (note pondérée + analyse de tous les avis 12 mois), (3) Alertes 35% = Score Vigilance (détection automatisée de 6 catégories de problèmes récurrents : casses 30%, vols 30%, retards 10%, prix modifiés 10%, personnel 10%, autres 10%). Le score d'une dimension est la moyenne pondérée de ses sous-scores.",
    },
    {
      question: "Comment fonctionne la détection des faux avis ?",
      answer:
        "Notre système détecte automatiquement les avis suspects via 4 heuristiques : (1) Texte <10 mots ou vide, (2) Auteur en doublon dans la liste, (3) Rafale : ≥3 avis 5★ la même semaine, (4) Avis 5★ sans texte. Un avis est considéré suspect si ≥2 critères sont remplis. Ces avis sont exclus du calcul des scores Réputation et Vigilance. Seuls les avis authentiques sont utilisés pour les ratios et l'analyse.",
    },
    {
      question: "Que se passe-t-il si un déménageur a un score < 50/100 ?",
      answer:
        "Un déménageur avec un score global < 50/100 OU une dimension < 30/100 est considéré comme à risque. Si le score passe sous ces seuils, une investigation manuelle est déclenchée. En cas d'alerte critique confirmée (ratio vigilance >3% sur une catégorie grave comme casses ou vols, OU score financier <30/100), le déménageur est exclu automatiquement de la présentation des devis. Il peut récupérer son label si la situation s'améliore (scores >50/100 pendant 3 mois consécutifs).",
    },
    {
      question: "À quelle fréquence le scoring est-il recalculé ?",
      answer:
        "Le Score Moverz est recalculé automatiquement tous les 7 jours (nouveaux avis Google via SearchAPI.io) et tous les 30 jours (nouvelles données financières Pappers). Il peut aussi être forcé manuellement depuis le backoffice. Les caches : 7 jours pour Google/SearchAPI, 30 jours pour Pappers financier. En cas de changement significatif détecté (nouveau score <50/100 ou nouvelle alerte critique), le recalcul est immédiat et l'exclusion automatique.",
    },
    {
      question: "Les déménageurs ont-ils accès à leur scoring ?",
      answer:
        "Oui. Chaque déménageur a accès à ses propres indicateurs (expérience client, financier, juridique) et peut enrichir son dossier en envoyant une note explicative au client. Par exemple, un déménageur ayant un avis négatif peut contextualiser la situation. Cette transparence bénéficie à tous : le client comprend mieux chaque indicateur, et le déménageur peut se défendre factuellement.",
    },
    {
      question: "Que se passe-t-il si un déménageur a une alerte ?",
      answer:
        "Un déménageur présentant une alerte cash (ratio cash/dettes critique) ou une alerte juridique (litiges graves, sanctions) est exclu automatiquement de la présentation des devis — il n'est pas retenu par défaut. En plus, nos partenaires s'engagent contractuellement (CGV Partenaires) à maintenir leurs assurances et à traiter les litiges de manière constructive. En cas de manquement répété, nous suspendons ou excluons le partenaire du réseau.",
    },
    {
      question: "Les déménageurs low-cost sont-ils aussi vérifiés ?",
      answer:
        "Oui. Même les déménageurs proposant des tarifs compétitifs passent les 3 analyses de risque. Un tarif bas n'est pas un problème si les notes /100 sont correctes. En revanche, un tarif anormalement bas combiné à une alerte financière (ratio cash/dettes dégradé) est un signal d'alerte classique : entreprise en difficulté cherchant de la trésorerie rapide.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <FAQSchema faqs={faqs} />
      <JsonLd
        id="verifications-webpage-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://moverz.fr/verifications-partenaires/",
          name: "Comment Moverz vérifie les déménageurs | 3 analyses de risque notées /100",
          description: "Moverz évalue chaque déménageur selon 3 axes de risque notés /100 : expérience client (avis Google), risque financier (Pappers), risque juridique (décisions de justice). Alertes = exclusion automatique.",
          url: "https://moverz.fr/verifications-partenaires/",
          inLanguage: "fr-FR",
          isPartOf: { "@id": "https://moverz.fr/#website" },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://moverz.fr/" },
              { "@type": "ListItem", position: 2, name: "Vérifications partenaires", item: "https://moverz.fr/verifications-partenaires/" },
            ],
          },
        }}
      />
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Vérifications partenaires", href: "/verifications-partenaires/" },
        ]}
        eyebrow="Zéro arnaque"
        title="Comment Moverz vérifie les déménageurs"
        subtitle="Chaque déménageur est évalué selon 3 analyses de risque notées /100 : expérience client (avis Google), risque financier (Pappers + analyse interne), risque juridique (décisions de justice). Alertes financières ou juridiques = exclusion automatique."
        primaryCta={{ label: "Voir les vérifications", href: "#verifications" }}
        secondaryCta={{ label: "Voir la FAQ", href: "#faq" }}
      />

      <section id="verifications" className="section section-light scroll-mt-28">
        <div className="container max-w-4xl space-y-10">
          
          {/* Pourquoi c'est crucial */}
          <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8 space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-v4-text">Pourquoi ces vérifications sont cruciales</h2>
            <p className="text-sm md:text-base text-v4-text-secondary leading-relaxed">
              <strong className="text-v4-text">64% des déménageurs présentent des anomalies</strong> (DGCCRF 2023) : 
              absence d'assurance, licences non conformes, sous-traitance non déclarée, ou pratiques commerciales trompeuses.
            </p>
            <p className="text-sm md:text-base text-v4-text-secondary leading-relaxed">
              Pire encore : <strong className="text-v4-text">257 faillites de déménageurs ont été enregistrées en 2024</strong> (source Altares). 
              Un déménageur en difficulté financière = risque élevé d'acompte perdu, de prestation non réalisée, ou de litige non résolu.
            </p>
            <p className="text-sm md:text-base text-v4-text-secondary leading-relaxed">
              <strong className="text-v4-text">C'est pour ça que Moverz évalue chaque déménageur selon 3 analyses de risque notées /100</strong> (expérience client, financier, juridique) 
              et exclut automatiquement ceux qui présentent des alertes financières ou juridiques <strong>avant</strong> de leur transmettre votre dossier.
            </p>
          </div>

          {/* Les vérifications actives */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-v4-text">Score Moverz : 3 dimensions / 5 sous-scores</h2>
            <p className="text-sm md:text-base text-v4-text-secondary leading-relaxed">
              Chaque déménageur reçoit un <strong className="text-v4-text">score global de 0 à 100</strong> calculé automatiquement à partir de <strong className="text-v4-text">5 sous-scores indépendants</strong>, regroupés en 3 dimensions pour la présentation client.
            </p>

            <div className="grid gap-4">
              {[
                {
                  title: "1) Fiabilité légale (25% du score global)",
                  desc: "Cette dimension regroupe 2 sous-scores indépendants qui évaluent la solidité financière et le casier juridique.",
                  bullets: [
                    "Score Financier 12,5% : analyse Pappers (résultat net, fonds propres, trésorerie, endettement, tendance) — 5 critères pondérés",
                    "Score Juridique 12,5% : BODACC + Pappers Décisions (procédures collectives, décisions de justice, sanctions) — malus selon gravité et récence",
                    "Cache 30 jours pour données financières",
                    "Fallback 50/100 si données indisponibles, 100/100 si aucune procédure détectée",
                  ],
                  highlight: "Sources : Pappers Financier + BODACC + Pappers Juridique",
                },
                {
                  title: "2) Satisfaction clients (40% du score global)",
                  desc: "Cette dimension regroupe 2 sous-scores indépendants qui évaluent la qualité perçue par les clients réels.",
                  bullets: [
                    "Score Google 20% : note Google pondérée par le volume d'avis (bonus jusqu'à +10pts si >30 avis), plafonné à 80/100 si <30 avis",
                    "Score Réputation 20% : ratio avis positifs/négatifs sur TOUS les avis des 12 derniers mois (jusqu'à 500 avis), avec plafonds selon volume et détection automatique des faux avis",
                    "Cache 7 jours pour données Google",
                    "Seuls les avis authentiques sont comptabilisés (exclusion des suspects : texte <10 mots, doublons, rafales 5★)",
                  ],
                  highlight: "Sources : Google Places API + SearchAPI.io + Analyse automatisée",
                },
                {
                  title: "3) Alertes (35% du score global)",
                  desc: "Cette dimension analyse automatiquement les avis négatifs (≤4★) des 12 derniers mois pour détecter 6 catégories de problèmes récurrents.",
                  bullets: [
                    "Score Vigilance 35% : analyse automatisée de 6 catégories (Casse 30%, Vol 30%, Calendrier 10%, Prix 10%, Personnel 10%, Autres 10%)",
                    "Chaque catégorie notée selon ratio signalements/avis authentiques : <1% → 100pts, 1-3% → 50pts, >3% → 0pts (alerte rouge)",
                    "0 avis négatifs authentiques sur 12 mois = vigilance automatique 100/100",
                    "Le déménageur peut prendre des engagements validés automatiquement → catégorie passe à 100pts si approuvé",
                  ],
                  highlight: "Analyse automatisée structurée de 6 catégories de risques comportementaux",
                },
                {
                  title: "Vérifications complémentaires",
                  desc: "En plus des 3 analyses de risque, nous vérifions les fondamentaux réglementaires.",
                  bullets: [
                    "Licence de transport et SIREN actif (registre des transporteurs, annuaire-entreprises.data.gouv.fr)",
                    "Assurance RC Pro valide (attestation < 6 mois, plafond ≥ 1,5 M€)",
                    "Assurance marchandises transportées (couverture ≥ 60 €/m³)",
                    "Identité légale vérifiée (SIREN / Kbis / dirigeants — pas de radiation ou changement de nom suspect)",
                  ],
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-v4-border bg-white p-6 md:p-7">
                  <h3 className="text-base md:text-lg font-bold text-v4-text">{c.title}</h3>
                  {c.highlight && (
                    <p className="mt-2 text-xs md:text-sm font-semibold text-v4-accent bg-v4-accent/10 rounded-full px-3 py-1 inline-flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> {c.highlight}
                    </p>
                  )}
                  <p className="mt-2 text-sm md:text-base text-v4-text-secondary leading-relaxed">{c.desc}</p>
                  <ul className="mt-4 grid gap-2 text-sm md:text-base text-v4-text/90">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-turquoise shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Ce que vous recevez concrètement */}
          <div className="rounded-2xl border border-brand-turquoise-300 bg-gradient-to-br from-brand-turquoise/10 to-white p-6 md:p-8 space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-v4-text">Ce que vous recevez concrètement</h2>
            <p className="text-sm md:text-base text-v4-text-secondary leading-relaxed">
              Grâce à ces vérifications, vous recevez jusqu'à 5 devis de déménageurs qui ont passé nos filtres :
            </p>
            <ul className="grid gap-3 text-sm md:text-base text-v4-text/90">
              {[
                {
                  icon: <ShieldCheck className="w-4 h-4" style={{ color: "#0EA5A6" }} />,
                  title: "Fiabilité légale (25%)",
                  desc: "Score Financier + Score Juridique. Analyse Pappers : bilans, trésorerie, dettes, procédures collectives, décisions de justice. Score < 50/100 = exclusion automatique.",
                },
                {
                  icon: <Star className="w-4 h-4" style={{ color: "#0EA5A6" }} />,
                  title: "Satisfaction clients (40%)",
                  desc: "Score Google + Score Réputation. Note Google pondérée par volume + analyse automatisée de TOUS les avis des 12 derniers mois (jusqu'à 500 avis). Détection automatique des faux avis.",
                },
                {
                  icon: <Scale className="w-4 h-4" style={{ color: "#0EA5A6" }} />,
                  title: "Alertes (35%)",
                  desc: "Score Vigilance. Analyse automatisée de 6 catégories d'alertes dans les avis négatifs : casses (30%), vols (30%), retards (10%), prix modifiés (10%), personnel (10%), autres (10%). Ratio >3% = alerte rouge.",
                },
                {
                  icon: <Check className="w-4 h-4" style={{ color: "#0EA5A6" }} />,
                  title: "Légalement conformes et assurés",
                  desc: "Licence de transport, SIREN actif, assurance RC Pro valide (≥ 1,5 M€), couverture marchandises (≥ 60 €/m³). En cas de casse, vous êtes protégé.",
                },
                {
                  icon: <Sparkles className="w-4 h-4" style={{ color: "#0EA5A6" }} />,
                  title: "Transparence totale",
                  desc: "Chaque indicateur est présenté et expliqué individuellement. Les déménageurs ont accès à leur scoring et peuvent enrichir leur dossier (note explicative au client).",
                },
              ].map((b) => (
                <li key={b.title} className="flex gap-3 items-start">
                  <div className="shrink-0 mt-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(14,165,166,0.1)" }}>
                    {b.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-v4-text">{b.title}</p>
                    <p className="text-v4-text-secondary mt-1 text-sm">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA principal */}
          <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8 text-center">
            <h3 className="text-lg font-bold text-v4-text mb-3">
              Prêt à comparer des devis de déménageurs vérifiés ?
            </h3>
            <p className="text-sm md:text-base text-v4-text-secondary mb-5 max-w-2xl mx-auto">
              Obtenez jusqu'à 5 devis comparables de déménageurs notés /100 (3 dimensions : fiabilité légale, satisfaction clients, alertes) sous 5-7 jours. 
              Score &lt; 50/100 = exclusion automatique. Dossier anonyme, zéro harcèlement, 100% gratuit.
            </p>
            <a
              href={buildTunnelUrl({ from: "verifications-partenaires" })}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
              style={{ background: "#F59E0B", boxShadow: "0 4px 16px rgba(245,158,11,0.3)" }}
            >
              <ArrowRight className="w-5 h-5" />
              Obtenir mes devis
            </a>
          </div>

          {/* Section "Pour aller plus loin" avec internal linking */}
          <div className="rounded-2xl border border-v4-border bg-gradient-to-br from-white via-[#FAFBFC] to-white p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-v4-text mb-4">Pour aller plus loin</h3>
            <p className="text-sm md:text-base text-v4-text-secondary mb-6">
              Comprendre les vérifications, c'est bien. Savoir comment choisir un déménageur et préparer votre projet, c'est mieux. 
              Consultez nos guides experts :
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a 
                href="/blog/comprendre-score-creditsafe-demenageur/" 
                className="flex items-start gap-3 p-4 rounded-xl border border-v4-border bg-white hover:shadow-md hover:border-v4-accent/40 transition-all group"
              >
                <span className="text-2xl">🔍</span>
                <div>
                  <p className="font-semibold text-v4-text group-hover:text-v4-accent transition-colors">
                    Comment lire le score financier (Pappers)
                  </p>
                  <p className="text-xs text-v4-text-secondary mt-1">
                    Décryptez la santé financière d'un déménageur
                  </p>
                </div>
              </a>
              
              <a 
                href="/blog/top-10-demenageurs-france-2026/" 
                className="flex items-start gap-3 p-4 rounded-xl border border-v4-border bg-white hover:shadow-md hover:border-v4-accent/40 transition-all group"
              >
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-semibold text-v4-text group-hover:text-v4-accent transition-colors">
                    Top 10 déménageurs France 2026
                  </p>
                  <p className="text-xs text-v4-text-secondary mt-1">
                    Critères objectifs pour choisir un professionnel
                  </p>
                </div>
              </a>

              <a 
                href="/blog/comparer-devis-demenagement-guide/" 
                className="flex items-start gap-3 p-4 rounded-xl border border-v4-border bg-white hover:shadow-md hover:border-v4-accent/40 transition-all group"
              >
                <span className="text-2xl">⚖️</span>
                <div>
                  <p className="font-semibold text-v4-text group-hover:text-v4-accent transition-colors">
                    Comparer des devis : guide complet
                  </p>
                  <p className="text-xs text-v4-text-secondary mt-1">
                    Les critères au-delà du prix
                  </p>
                </div>
              </a>

              <a 
                href="/chiffres-cles/" 
                className="flex items-start gap-3 p-4 rounded-xl border border-v4-border bg-white hover:shadow-md hover:border-v4-accent/40 transition-all group"
              >
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-semibold text-v4-text group-hover:text-v4-accent transition-colors">
                    Chiffres clés du marché
                  </p>
                  <p className="text-xs text-v4-text-secondary mt-1">
                    Statistiques officielles du déménagement en France
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* CTA secondaire vers CGV-P */}
          <div className="rounded-2xl border border-v4-border bg-[#F8FAFC] p-6 md:p-8 text-center">
            <p className="text-sm md:text-base text-v4-text-secondary mb-4 max-w-2xl mx-auto">
              Pour connaître le détail des engagements contractuels des déménageurs du réseau Moverz :
            </p>
            <a
              href="/cgv-partenaires/"
              className="inline-flex items-center justify-center rounded-full bg-white border border-v4-border px-6 py-3 text-sm font-semibold text-v4-text hover:bg-v4-bg transition-colors"
            >
              Consulter les CGV Partenaires →
            </a>
          </div>

        </div>
      </section>

      <div id="faq" className="scroll-mt-28">
        <FAQ title="Questions fréquentes" faqs={faqs} limit={6} id="faq" />
      </div>

      {/* CTA discret */}
      <section className="section section-light pt-0">
        <div className="container max-w-4xl space-y-6">

          {/* CTA Label Moverz */}
          <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-v4-text">Vérifiez votre déménageur en 30 secondes</p>
              <p className="text-sm text-v4-text-secondary">
                Score /100 gratuit : santé financière (Pappers), casier judiciaire (BODACC), avis clients des 12 derniers mois.
              </p>
            </div>
            <a
              href="/label-moverz/"
              className="inline-flex items-center justify-center rounded-full bg-v4-text px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-colors whitespace-nowrap"
            >
              Voir le score →
            </a>
          </div>

          <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-v4-text">Envie d&apos;une base d&apos;estimation plus claire ?</p>
              <p className="text-sm text-v4-text-secondary">
                Une visite ou une visio réduisent les ambiguïtés sur le volume et les accès.
              </p>
            </div>
            <a
              href="/comment-ca-marche/"
              className="inline-flex items-center justify-center rounded-full bg-v4-text px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-colors whitespace-nowrap"
            >
              Comprendre la méthode →
            </a>
          </div>

          {/* CTA Devenir partenaire */}
          <div className="rounded-2xl border border-brand-turquoise-300 bg-gradient-to-br from-brand-turquoise/5 to-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-v4-text">Vous êtes déménageur ?</p>
              <p className="text-sm text-v4-text-secondary">
                Rejoignez notre réseau et recevez des dossiers qualifiés. Paiement uniquement au succès.
              </p>
            </div>
            <a
              href="/partenaires/"
              className="inline-flex items-center justify-center rounded-full bg-v4-accent px-6 py-3 text-sm font-semibold text-v4-text shadow-sm hover:bg-brand-turquoise hover:text-white transition-all whitespace-nowrap"
            >
              Devenir partenaire →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
