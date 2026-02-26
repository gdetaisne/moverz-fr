import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getFullMetadata } from "@/lib/canonical-helper";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { buildTunnelUrl } from "@/lib/tunnel-url";

export const metadata: Metadata = getFullMetadata(
  "verifications-partenaires",
  "Comment Moverz vérifie les déménageurs | 3 analyses de risque notées /100",
  "Moverz évalue chaque déménageur selon 3 axes de risque notés /100 : expérience client (avis Google), risque financier (Creditsafe + Pappers + analyse interne), risque juridique (décisions de justice). Alertes = exclusion automatique."
);

export default function VerificationsPartenairesPage() {
  const faqs: FAQItem[] = [
    {
      question: "Quelles vérifications Moverz effectue-t-elle concrètement ?",
      answer:
        "Chaque déménageur est évalué automatiquement selon 3 analyses de risque notées /100 : (1) Risque expérience client — analyse des 20 derniers avis Google + détection de patterns récurrents dans les mauvais avis 1-2★ (retards, casse, comportement), (2) Risque financier — scores Creditsafe et Pappers consolidés + analyse interne du ratio cash/dettes court terme, (3) Risque juridique — décisions de justice et litiges passés/en cours via Pappers. En complément : licence de transport, assurance RC Pro (≥ 1,5 M€), identité légale. Les déménageurs avec alertes financières ou juridiques sont exclus automatiquement.",
    },
    {
      question: "Comment fonctionnent les 3 analyses de risque ?",
      answer:
        "Chaque pilier produit une note /100 présentée individuellement au client. (1) Expérience client : nous analysons les 20 derniers avis Google pour calculer une note globale, puis nous analysons spécifiquement les avis 1-2★ pour détecter des patterns récurrents (retards, casse, comportement des équipes) — cela donne une seconde note /100. (2) Risque financier : nous consolidons les scores Creditsafe et Pappers (scoring financier) en une moyenne, enrichie par notre analyse interne du ratio cash/dettes court terme. (3) Risque juridique : nous exploitons les décisions de justice via Pappers (tribunaux de commerce, sanctions, interdictions de gérer) et le scoring non-financier Pappers (gouvernance, conformité).",
    },
    {
      question: "Pourquoi utiliser Creditsafe ET Pappers pour le risque financier ?",
      answer:
        "Creditsafe et Pappers sont deux bases de données complémentaires qui évaluent la solvabilité des entreprises via des méthodologies différentes. En consolidant leurs scores, nous obtenons une évaluation plus fiable. Nous ajoutons notre propre analyse du ratio cash/dettes court terme pour détecter les entreprises en tension de trésorerie. 257 faillites de déménageurs ont été enregistrées en 2024 (source Altares) — un déménageur en difficulté financière = risque élevé d'acompte perdu.",
    },
    {
      question: "Comment l'analyse des avis Google fonctionne-t-elle ?",
      answer:
        "Nous analysons les 20 derniers avis Google de chaque déménageur. Première étape : nous calculons une note /100 basée sur la note moyenne et le volume d'avis. Deuxième étape : nous analysons spécifiquement tous les avis 1-2★ pour identifier des patterns récurrents (retards à répétition, casse non indemnisée, comportement problématique des équipes). Cette analyse produit une seconde note /100. Les deux notes sont présentées séparément au client.",
    },
    {
      question: "Que vérifie l'analyse juridique ?",
      answer:
        "Nous accédons aux bases de données juridiques françaises via Pappers : décisions des tribunaux de commerce (liquidations, redressements, sanctions), interdictions de gérer, et litiges commerciaux passés ou en cours. Le scoring non-financier Pappers évalue aussi la gouvernance et la conformité de l'entreprise. Résultat : une note /100 estimant le risque de litiges. Les déménageurs avec alerte juridique sont exclus automatiquement de la présentation des devis.",
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
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Vérifications partenaires", href: "/verifications-partenaires/" },
        ]}
        eyebrow="Zéro arnaque"
        title="Comment Moverz vérifie les déménageurs"
        subtitle="Chaque déménageur est évalué selon 3 analyses de risque notées /100 : expérience client (avis Google), risque financier (Creditsafe + Pappers + analyse interne), risque juridique (décisions de justice). Alertes financières ou juridiques = exclusion automatique."
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
            <h2 className="text-lg md:text-xl font-semibold text-v4-text">3 analyses de risque — chacune notée /100</h2>

            <div className="grid gap-4">
              {[
                {
                  title: "1) Risque expérience client (données Google)",
                  desc: "Nous analysons les 20 derniers avis Google de chaque déménageur pour estimer le risque d'expérience client négative.",
                  bullets: [
                    "Note /100 basée sur la note moyenne Google et le volume d'avis",
                    "Analyse spécifique des avis 1-2★ : détection de patterns récurrents (retards, casse, comportement des équipes)",
                    "Seconde note /100 sur l'analyse des mauvais avis",
                    "Les deux notes sont présentées séparément au client",
                  ],
                  highlight: "Moverz : seul comparateur à analyser les patterns des mauvais avis",
                },
                {
                  title: "2) Risque financier (Creditsafe + Pappers + analyse interne)",
                  desc: "Nous consolidons les données de deux bases professionnelles et les enrichissons par notre propre analyse.",
                  bullets: [
                    "Scores de solvabilité Creditsafe et Pappers (scoring financier), consolidés en moyenne",
                    "Analyse interne complémentaire : ratio cash / dettes court terme",
                    "Note /100 — alerte cash = déménageur exclu automatiquement",
                    "257 faillites de déménageurs en 2024 (source Altares) : ce filtre est essentiel",
                  ],
                  highlight: "Double source Creditsafe + Pappers + analyse interne",
                },
                {
                  title: "3) Risque juridique (Pappers Décisions + scoring non-financier)",
                  desc: "Nous accédons aux bases de données juridiques françaises pour analyser les litiges passés et en cours.",
                  bullets: [
                    "Décisions de justice via Pappers (tribunaux de commerce, sanctions, interdictions de gérer)",
                    "Scoring non-financier Pappers (gouvernance, conformité)",
                    "Analyse des litiges passés et en cours",
                    "Note /100 — alerte juridique = déménageur exclu automatiquement",
                  ],
                  highlight: "Analyse juridique automatisée via Pappers Décisions",
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
                    <p className="mt-2 text-xs md:text-sm font-semibold text-v4-accent bg-v4-accent/10 rounded-full px-3 py-1 inline-block">
                      ✨ {c.highlight}
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
                  title: "✅ Expérience client vérifiée",
                  desc: "Avis Google analysés (20 derniers avis + patterns des mauvais avis) — deux notes /100 distinctes. Vous savez exactement ce que les clients précédents ont vécu.",
                },
                {
                  title: "✅ Financièrement solides",
                  desc: "Scores Creditsafe + Pappers consolidés, enrichis par notre analyse du ratio cash/dettes. Alerte cash = exclusion automatique. Vous évitez les entreprises en difficulté.",
                },
                {
                  title: "✅ Juridiquement sains",
                  desc: "Décisions de justice, sanctions et litiges analysés via Pappers. Alerte juridique = exclusion automatique. Vous ne traitez qu'avec des entreprises sans contentieux grave.",
                },
                {
                  title: "✅ Légalement conformes et assurés",
                  desc: "Licence de transport, SIREN actif, assurance RC Pro valide (≥ 1,5 M€), couverture marchandises (≥ 60 €/m³). En cas de casse, vous êtes protégé.",
                },
                {
                  title: "✅ Transparence totale",
                  desc: "Chaque indicateur est présenté et expliqué individuellement. Les déménageurs ont accès à leur scoring et peuvent enrichir leur dossier (note explicative au client).",
                },
              ].map((b) => (
                <li key={b.title} className="flex gap-3 items-start">
                  <div className="shrink-0 mt-1">
                    <span className="text-v4-accent font-bold text-lg">{b.title.split(" ")[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-v4-text">{b.title.split(" ").slice(1).join(" ")}</p>
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
              Obtenez jusqu'à 5 devis comparables de déménageurs évalués selon 3 analyses de risque /100 sous 5-7 jours. 
              Alertes financières ou juridiques = exclusion automatique. Dossier anonyme, zéro harcèlement, 100% gratuit.
            </p>
            <a
              href={buildTunnelUrl({ from: "verifications-partenaires" })}
              className="inline-flex items-center justify-center rounded-full bg-v4-text px-8 py-4 text-base font-semibold text-white shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
            >
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
                    Comment lire un score Creditsafe
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
          <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-v4-text">Envie d'une base d'estimation plus claire ?</p>
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
