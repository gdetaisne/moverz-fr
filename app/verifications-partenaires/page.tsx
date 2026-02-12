import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getFullMetadata } from "@/lib/canonical-helper";
import { FAQ, type FAQItem } from "@/components/FAQ";

export const metadata: Metadata = getFullMetadata(
  "verifications-partenaires",
  "Comment Moverz vérifie les déménageurs | Creditsafe + Licences + Assurances",
  "Découvrez comment Moverz vérifie systématiquement les déménageurs : santé financière (Creditsafe), licences de transport, assurances RC Pro. Ce que vous recevez concrètement."
);

export default function VerificationsPartenairesPage() {
  const faqs: FAQItem[] = [
    {
      question: "Quelles vérifications Moverz effectue-t-elle concrètement ?",
      answer:
        "Nous vérifions systématiquement : (1) La santé financière via Creditsafe (score de solvabilité, risque de faillite, incidents de paiement), (2) La licence de transport et le SIREN actif, (3) L'assurance RC Pro valide. Ces vérifications sont effectuées avant qu'un déménageur ne puisse recevoir des dossiers.",
    },
    {
      question: "C'est quoi Creditsafe et pourquoi c'est important ?",
      answer:
        "Creditsafe est la base de données professionnelle B2B qui note la santé financière des entreprises (score sur 100, risque de faillite, incidents de paiement, litiges). C'est crucial : 257 faillites de déménageurs ont été enregistrées en 2024 (source Altares). Creditsafe nous permet d'écarter les entreprises en difficulté avant qu'elles ne reçoivent votre dossier.",
    },
    {
      question: "Comment puis-je vérifier qu'un déménageur proposé est vraiment vérifié ?",
      answer:
        "Tous les déménageurs qui reçoivent votre dossier ont passé nos filtres Creditsafe + licences + assurances. Vous pouvez demander à voir l'attestation d'assurance RC Pro et vérifier le SIREN sur annuaire-entreprises.data.gouv.fr. Moverz ne transmet jamais votre dossier à un déménageur qui n'a pas été vérifié.",
    },
    {
      question: "Que se passe-t-il si un déménageur ne respecte pas ses engagements ?",
      answer:
        "En plus des vérifications initiales, nos partenaires s'engagent contractuellement (CGV Partenaires) à maintenir leurs assurances, à respecter la transparence des devis, et à traiter les litiges de manière constructive. En cas de manquement répété, nous suspendons ou excluons le partenaire du réseau.",
    },
    {
      question: "Les déménageurs low-cost sont-ils aussi vérifiés ?",
      answer:
        "Oui. Même les déménageurs proposant des tarifs compétitifs passent les mêmes filtres Creditsafe + licences + assurances. Un tarif bas n'est pas un problème si l'entreprise est saine financièrement et correctement assurée. En revanche, un tarif anormalement bas (<30% du marché) est un signal d'alerte que Creditsafe détecte souvent (entreprise en difficulté cherchant de la trésorerie rapide).",
    },
    {
      question: "Moverz vérifie-t-elle les avis clients des déménageurs ?",
      answer:
        "Oui, nous consultons les avis Google Maps (note globale, récence, patterns de litiges répétitifs). Nous croisons ces avis avec les données Creditsafe pour avoir une vision complète : santé financière + réputation terrain. Un déménageur peut avoir un bon score Creditsafe mais de mauvais avis (ou l'inverse) : nous prenons les deux en compte.",
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
        subtitle="Nous vérifions systématiquement la santé financière (Creditsafe), les licences de transport, et les assurances RC Pro. Vous ne recevez des devis que de déménageurs vérifiés et financièrement solides."
        primaryCta={{ label: "Voir les vérifications", href: "#verifications" }}
        secondaryCta={{ label: "Voir la FAQ", href: "#faq" }}
      />

      <section id="verifications" className="section section-light scroll-mt-28">
        <div className="container max-w-4xl space-y-10">
          
          {/* Pourquoi c'est crucial */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text)]">Pourquoi ces vérifications sont cruciales</h2>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
              <strong className="text-[var(--color-text)]">64% des déménageurs présentent des anomalies</strong> (DGCCRF 2023) : 
              absence d'assurance, licences non conformes, sous-traitance non déclarée, ou pratiques commerciales trompeuses.
            </p>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
              Pire encore : <strong className="text-[var(--color-text)]">257 faillites de déménageurs ont été enregistrées en 2024</strong> (source Altares). 
              Un déménageur en difficulté financière = risque élevé d'acompte perdu, de prestation non réalisée, ou de litige non résolu.
            </p>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
              <strong className="text-[var(--color-text)]">C'est pour ça que Moverz vérifie systématiquement</strong> la santé financière 
              (Creditsafe), les licences, et les assurances de chaque déménageur <strong>avant</strong> de lui transmettre votre dossier.
            </p>
          </div>

          {/* Les vérifications actives */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text)]">Ce que nous vérifions systématiquement</h2>

            <div className="grid gap-4">
              {[
                {
                  title: "1) Santé financière (Creditsafe)",
                  desc: "Nous vérifions la solidité financière de chaque déménageur via Creditsafe, la base de données B2B professionnelle.",
                  bullets: [
                    "Score de solvabilité sur 100 (entreprises < 40/100 écartées automatiquement)",
                    "Risque de faillite à 12 mois (alerte si risque élevé)",
                    "Incidents de paiement (retards, impayés, procédures en cours)",
                    "Procédures collectives (liquidation, redressement, sauvegarde)",
                  ],
                  highlight: "Exclusivité Moverz : seul comparateur à vérifier Creditsafe",
                },
                {
                  title: "2) Licence de transport et SIREN",
                  desc: "Nous vérifions que le déménageur est légalement habilité à exercer.",
                  bullets: [
                    "SIREN actif et non radié (via annuaire-entreprises.data.gouv.fr)",
                    "Inscription au registre des transporteurs (capacité professionnelle)",
                    "Correspondance identité légale (SIREN / Kbis / dirigeants)",
                    "Pas de radiation récente ou de changement de nom suspect (arnaques connues)",
                  ],
                },
                {
                  title: "3) Assurance RC Pro valide",
                  desc: "Nous vérifions que le déménageur dispose d'une assurance responsabilité civile professionnelle à jour.",
                  bullets: [
                    "Attestation d'assurance RC Pro datant de < 6 mois",
                    "Plafond de garantie minimum 1,5M€ (recommandation DGCCRF)",
                    "Assurance marchandises transportées (couverture standard 60€/m³ minimum)",
                    "Possibilité de fournir l'attestation au client sur demande",
                  ],
                },
                {
                  title: "4) Avis Google Maps et réputation",
                  desc: "Nous consultons les avis clients récents pour détecter des patterns de litiges répétitifs.",
                  bullets: [
                    "Note globale Google Maps (4.0+/5 minimum, 4.5+/5 recommandé)",
                    "Volume d'avis (minimum 20-30 avis pour fiabilité)",
                    "Récence des avis (20+ avis < 6 mois = activité régulière)",
                    "Patterns de litiges (surcoûts jour J, casse non indemnisée, retards répétés)",
                  ],
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-7">
                  <h3 className="text-base md:text-lg font-bold text-[var(--color-text)]">{c.title}</h3>
                  {c.highlight && (
                    <p className="mt-2 text-xs md:text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full px-3 py-1 inline-block">
                      {c.highlight}
                    </p>
                  )}
                  <p className="mt-2 text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">{c.desc}</p>
                  <ul className="mt-4 grid gap-2 text-sm md:text-base text-[var(--color-text)]/90">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2B7A78] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Ce que vous recevez concrètement */}
          <div className="rounded-2xl border border-[var(--color-accent)]/30 bg-gradient-to-br from-brand-turquoise/10 to-white p-6 md:p-8 space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text)]">Ce que vous recevez concrètement</h2>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
              Grâce à ces vérifications, vous recevez jusqu'à 5 devis de déménageurs qui ont passé nos filtres :
            </p>
            <ul className="grid gap-3 text-sm md:text-base text-[var(--color-text)]/90">
              {[
                {
                  title: "Financièrement solides",
                  desc: "Score Creditsafe vérifié, risque de faillite faible, aucun incident de paiement grave. Vous évitez les entreprises en difficulté qui risquent de disparaître avec votre acompte.",
                },
                {
                  title: "Légalement conformes",
                  desc: "SIREN actif, licence de transport valide, inscription au registre des transporteurs. Vous ne traitez qu'avec des pros habilités à exercer.",
                },
                {
                  title: "Correctement assurés",
                  desc: "Assurance RC Pro valide, plafond de garantie ≥ 1,5M€, couverture marchandises ≥ 60€/m³. En cas de casse, vous êtes protégé.",
                },
                {
                  title: "Bien notés par leurs clients",
                  desc: "Avis Google 4.0+/5, pas de pattern de litiges répétitifs (surcoûts, casse, retards). Vous choisissez parmi des pros qui ont fait leurs preuves.",
                },
                {
                  title: "Engagés contractuellement",
                  desc: "En plus des vérifications, nos partenaires acceptent nos CGV (transparence des devis, traitement constructif des litiges, respect du RGPD). En cas de manquement, nous suspendons ou excluons le partenaire.",
                },
              ].map((b) => (
                <li key={b.title} className="flex gap-3 items-start">
                  <div className="shrink-0 mt-1">
                    <span className="text-[#2B7A78] font-bold text-lg">{b.title.split(" ")[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-text)]">{b.title.split(" ").slice(1).join(" ")}</p>
                    <p className="text-[var(--color-text-secondary)] mt-1 text-sm">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA principal */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 text-center">
            <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
              Prêt à comparer des devis de déménageurs vérifiés ?
            </h3>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] mb-5 max-w-2xl mx-auto">
              Obtenez jusqu'à 5 devis comparables de déménageurs vérifiés (Creditsafe + licences + assurances) sous 5-7 jours. 
              Dossier anonyme, zéro harcèlement, 100% gratuit.
            </p>
            <a
              href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=verifications-partenaires"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-bg-dark)] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[var(--color-bg-dark)] hover:shadow-xl transition-all"
            >
              Obtenir mes devis →
            </a>
          </div>

          {/* CTA secondaire vers CGV-P */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[#F8FAFC] p-6 md:p-8 text-center">
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] mb-4 max-w-2xl mx-auto">
              Pour connaître le détail des engagements contractuels des déménageurs du réseau Moverz :
            </p>
            <a
              href="/cgv-partenaires/"
              className="inline-flex items-center justify-center rounded-full bg-white border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:bg-[#F8FAFC] transition-colors"
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
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[var(--color-text)]">Envie d'une base d'estimation plus claire ?</p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Une visite ou une visio réduisent les ambiguïtés sur le volume et les accès.
              </p>
            </div>
            <a
              href="/comment-ca-marche/"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-bg-dark)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-bg-dark)] transition-colors whitespace-nowrap"
            >
              Comprendre la méthode →
            </a>
          </div>

          {/* CTA Devenir partenaire */}
          <div className="rounded-2xl border border-[var(--color-accent)]/30 bg-gradient-to-br from-brand-turquoise/5 to-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[var(--color-text)]">Vous êtes déménageur ?</p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Rejoignez notre réseau et recevez des dossiers qualifiés. Paiement uniquement au succès.
              </p>
            </div>
            <a
              href="/partenaires/"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] shadow-sm hover:bg-[#2B7A78] hover:text-white transition-all whitespace-nowrap"
            >
              Devenir partenaire →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
