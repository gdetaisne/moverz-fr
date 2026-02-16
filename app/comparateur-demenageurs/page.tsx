import type { Metadata } from "next";
import { generateMetadata as baseGenerateMetadata } from "@/lib/metadata";
import ComparisonTable from "@/components/comparison/ComparisonTable";
import ComparisonHero from "@/components/comparison/ComparisonHero";
import { FAQ, type FAQItem } from "@/components/FAQ";

export const metadata: Metadata = baseGenerateMetadata(
  "comparateur-demenageurs",
  "Comparateur Déménagement 2026 : Moverz vs Autres",
  "Quel comparateur de déménagement choisir ? 5 critères clés : Creditsafe, devis comparables, anonymat, IA volume. Comparatif objectif."
);

export default function ComparateurDemenageursPage() {
  const faqs: FAQItem[] = [
    {
      question: "Pourquoi utiliser un comparateur de déménagement plutôt que contacter directement ?",
      answer:
        "Un comparateur vous fait gagner 5-10h de recherche en centralisant les devis. Avantages : (1) Gain de temps (1 formulaire vs 5-10 appels), (2) Devis comparables si le comparateur standardise le volume, (3) Anonymat et pas de démarchage (sur Moverz), (4) Vérifications automatiques (Creditsafe, licences, assurances sur Moverz). Contact direct = plus long, volumes différents, pas de vérification, démarchage.",
    },
    {
      question: "Quelle est la différence entre Moverz et les autres comparateurs (ex: i-Demenager, DemenagerFacile) ?",
      answer:
        "3 différences majeures : (1) Vérifications : Moverz vérifie activement Creditsafe + licences + assurances (257 faillites en 2024 !). Les autres comparateurs ne vérifient rien. (2) Devis comparables : Moverz utilise l'IA pour standardiser les volumes (précision 90-95%). Les autres comparateurs = volumes différents = impossible à comparer. (3) Anonymat : Moverz ne revend pas vos coordonnées (business model : commission déménageur). Les autres = revente de leads (5-10 appels/jour).",
    },
    {
      question: "Les comparateurs de déménagement sont-ils vraiment gratuits ?",
      answer:
        "Oui, pour le particulier c'est 100% gratuit. Le business model : commission sur les déménageurs (10-20% du prix final). Moverz est gratuit ET ne revend pas vos coordonnées (vous restez anonyme). Certains comparateurs classiques revendent vos données à 10-20 déménageurs (d'où le spam). Méfiez-vous des 'comparateurs' qui demandent un paiement avant devis = arnaque.",
    },
    {
      question: "Comment Moverz vérifie-t-il les déménageurs ?",
      answer:
        "4 vérifications automatiques : (1) Santé financière via Creditsafe (score solvabilité, risque faillite, incidents paiement) – seuls les déménageurs avec score >40/100 sont acceptés. (2) Licences de transport (inscription registre transporteurs, SIREN actif). (3) Assurances RC Pro valides (attestation <6 mois, plafond ≥1,5M€). (4) Avis clients Google 4.0+/5 avec minimum 20 avis. Les comparateurs classiques ne font AUCUNE vérification.",
    },
    {
      question: "Pourquoi les devis reçus via comparateurs sont souvent différents ?",
      answer:
        "Car chaque déménageur fait sa propre estimation du volume, avec sa propre méthode. Résultat : 5 devis avec 5 volumes différents (20m³, 28m³, 32m³, etc.) = impossible à comparer. Solution Moverz : l'IA calcule automatiquement le volume précis (90-95% de précision), tous les déménageurs partent du même volume = devis réellement comparables. C'est le seul moyen de comparer efficacement.",
    },
    {
      question: "Combien de temps faut-il pour recevoir des devis via un comparateur ?",
      answer:
        "Moverz : 5-7 jours (dossier anonyme, déménageurs répondent par écrit). Comparateurs classiques : immédiat MAIS par téléphone (5-10 appels de démarchage dans les 2h). Contact direct : variable (1-7 jours selon disponibilité). Le délai Moverz est volontaire pour garantir des devis écrits, réfléchis, et comparables (vs estimations téléphoniques hasardeuses).",
    },
    {
      question: "Est-ce que Moverz revend mes coordonnées ?",
      answer:
        "Non, jamais. Votre dossier reste anonyme jusqu'à ce que VOUS choisissiez un déménageur. Business model transparent : commission uniquement sur les déménageurs (si déménagement réalisé). Les comparateurs classiques revendent vos coordonnées à 10-20 déménageurs dès que vous validez le formulaire = 5-10 appels/jour pendant 2 semaines. C'est leur business model (revente de leads).",
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
        "5 critères pour choisir : (1) Vérifications actives (Creditsafe + licences + assurances) = Moverz uniquement. (2) Devis comparables (même volume IA) = Moverz uniquement. (3) Anonymat (pas de revente de données) = Moverz uniquement. (4) Gratuité réelle (pas de frais cachés) = Moverz + autres. (5) Rapidité (délai raisonnable) = Tous. Conclusion : Moverz est le seul comparateur qui vérifie ET standardise ET protège votre anonymat. Les autres = simple revente de leads.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <ComparisonHero />

      {/* Section intro : Pourquoi utiliser un comparateur */}
      <section className="section section-light">
        <div className="container max-w-4xl space-y-10">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text)]">
              Pourquoi utiliser un comparateur de déménagement ?
            </h2>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
              Avant l'ère des comparateurs, obtenir des devis de déménagement était un parcours du combattant : 
              multiples appels (répéter 10 fois les mêmes infos), visites techniques chronophages, devis incomparables 
              (formats et volumes différents), et démarchage agressif une fois vos coordonnées partagées.
            </p>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
              Un <strong className="text-[var(--color-text)]">bon comparateur</strong> vise à simplifier ce processus, 
              <strong className="text-[var(--color-text)]"> mais tous ne se valent pas</strong>. Certains se contentent de revendre 
              vos coordonnées à 10-20 déménageurs (d'où le spam), sans aucune vérification ni standardisation.
            </p>
          </div>

          {/* 5 critères pour choisir */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text)]">
              5 critères clés pour choisir votre comparateur
            </h2>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)]">
              Pour évaluer un comparateur de déménagement, concentrez-vous sur ces 5 points essentiels :
            </p>

            <div className="grid gap-4 md:grid-cols-1">
              {[
                {
                  title: "1. Qualité des vérifications des déménageurs",
                  emoji: "🏦",
                  desc: "Un comparateur doit s'assurer de la fiabilité des professionnels qu'il vous propose.",
                  points: [
                    "Vérification du SIREN, des licences de transport, des assurances (RC Pro, marchandises)",
                    "Vérification de la santé financière (Creditsafe : score solvabilité, risque faillite)",
                    "Le risque : être mis en relation avec des entreprises peu scrupuleuses ou en difficulté (257 faillites en 2024 !)",
                  ],
                  highlight: "Moverz vérifie automatiquement Creditsafe + licences + assurances",
                },
                {
                  title: "2. Comparabilité des devis",
                  emoji: "▪",
                  desc: "Recevoir 5 devis, c'est bien. Recevoir 5 devis que vous pouvez réellement comparer, c'est mieux.",
                  points: [
                    "Une base commune (volume, accès, prestations) pour tous les devis",
                    "Le risque : des devis avec des volumes différents (20m³ vs 32m³), des options floues, rendant la comparaison impossible",
                    "Résultat : risque de surcoût le jour J (+200-800€)",
                  ],
                  highlight: "Moverz utilise l'IA pour standardiser le volume (précision 90-95%)",
                },
                {
                  title: "3. Anonymat et protection contre le démarchage",
                  emoji: "◆",
                  desc: "Votre tranquillité est primordiale.",
                  points: [
                    "Une plateforme qui ne transmet pas vos coordonnées directes aux déménageurs sans votre accord",
                    "Le risque : être inondé d'appels et de mails non sollicités (5-10 appels/jour pendant 2 semaines)",
                    "Certains comparateurs revendent vos données à 10-20 déménageurs dès validation du formulaire",
                  ],
                  highlight: "Moverz : dossier anonyme, vous choisissez qui peut vous contacter",
                },
                {
                  title: "4. Utilisation de l'IA pour l'estimation du volume",
                  emoji: "□",
                  desc: "L'estimation du volume est la clé d'un devis précis.",
                  points: [
                    "Un outil d'estimation précis, idéalement basé sur l'IA, pour éviter les sous-estimations",
                    "Le risque : un volume mal estimé entraîne des suppléments coûteux le jour du déménagement",
                    "40-50% des déménagements subissent des surcoûts à cause d'une mauvaise estimation",
                  ],
                  highlight: "Moverz : IA volumétrie 1 minute, précision 90-95%",
                },
                {
                  title: "5. Gratuité et transparence",
                  emoji: "€",
                  desc: "Le service doit être clair et sans frais cachés pour le particulier.",
                  points: [
                    "Un service 100% gratuit pour le client, avec un modèle économique transparent",
                    "Business model : commission sur les déménageurs (10-20% du prix final, payée par le pro)",
                    "Le risque : des frais cachés ou un service qui n'est pas réellement gratuit",
                  ],
                  highlight: "Moverz : 100% gratuit, commission uniquement sur les déménageurs",
                },
              ].map((c) => (
                <div 
                  key={c.title} 
                  className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-7 hover:border-brand-turquoise/50 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl shrink-0">{c.emoji}</span>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-base md:text-lg font-bold text-[var(--color-text)]">{c.title}</h3>
                      <p className="text-sm md:text-base text-[var(--color-text-secondary)]">{c.desc}</p>
                      <ul className="grid gap-2 text-sm md:text-base text-[var(--color-text)]/90">
                        {c.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2B7A78] shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      {c.highlight && (
                        <p className="text-xs md:text-sm font-semibold text-brand-turquoise bg-brand-turquoise/10 rounded-full px-3 py-2 inline-block">
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
          <div className="rounded-2xl border border-brand-turquoise/30 bg-gradient-to-br from-brand-turquoise/10 to-white p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text)]">
                Ce qui fait la différence Moverz (vs autres comparateurs)
              </h2>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Vérifications actives (Creditsafe)",
                  desc: "Moverz est le seul comparateur à vérifier activement la santé financière via Creditsafe (257 faillites en 2024 !). Les autres comparateurs ne vérifient RIEN.",
                },
                {
                  title: "Devis réellement comparables",
                  desc: "L'IA Moverz calcule le volume précis (90-95% précision), tous les déménageurs partent du même volume. Les autres = volumes différents = impossible à comparer.",
                },
                {
                  title: "Dossier anonyme (0 démarchage)",
                  desc: "Vous restez anonyme jusqu'à ce que vous choisissiez un déménageur. Les autres = revente de leads à 10-20 déménageurs = 5-10 appels/jour.",
                },
                {
                  title: "Commission transparente",
                  desc: "Moverz est gratuit pour vous, commission uniquement sur les déménageurs (si déménagement réalisé). Les autres = même modèle mais avec revente de données.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--color-border)] bg-white p-5">
                  <p className="font-semibold text-[var(--color-text)] text-sm md:text-base mb-2">{item.title}</p>
                  <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-white/60 border border-brand-turquoise/20 p-4 text-center">
              <p className="text-sm md:text-base text-[var(--color-text)]">
                <strong>Résultat :</strong> Moverz est le seul comparateur qui vérifie ET standardise ET protège votre anonymat.
              </p>
              <a 
                href="/blog/meilleur-comparateur-demenagement-2026/" 
                className="mt-3 inline-block text-sm font-semibold text-brand-turquoise hover:text-[#2B7A78] underline"
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
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise text-center">
              Guides complémentaires
            </p>
            <h2 className="mt-3 text-xl md:text-2xl font-bold text-[var(--color-text)] text-center">
              Pour aller plus loin
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)] text-center max-w-2xl mx-auto">
              5 guides pour maîtriser chaque aspect de votre déménagement.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/blog/meilleur-comparateur-demenagement-2026/",
                  emoji: "★",
                  title: "Meilleur comparateur 2026",
                  desc: "Comparatif détaillé : 5 critères pour choisir (Creditsafe, devis comparables, anonymat).",
                },
                {
                  href: "/criteres-choisir-demenageur/",
                  emoji: "✅",
                  title: "8 critères déménageur fiable",
                  desc: "Santé financière, licences, assurances, avis, volume, devis, paiement, fiabilité.",
                },
                {
                  href: "/blog/eviter-arnaques-demenagement/",
                  emoji: "◆",
                  title: "Éviter les arnaques",
                  desc: "64% anomalies (DGCCRF), 257 faillites 2024, outils de vérification gratuits.",
                },
                {
                  href: "/blog/estimer-volume-demenagement-guide-complet/",
                  emoji: "□",
                  title: "Estimer son volume",
                  desc: "3 méthodes (IA 1 min, inventaire, visite) pour éviter les surcoûts jour J.",
                },
                {
                  href: "/blog/comparer-devis-demenagement-guide/",
                  emoji: "=",
                  title: "Comparer des devis",
                  desc: "7 éléments à vérifier (volume, accès, tarif, assurance, conditions).",
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group rounded-xl border border-[var(--color-border)] bg-white p-5 hover:border-brand-turquoise/50 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <p className="text-sm font-bold text-[var(--color-text)] group-hover:text-[#2B7A78]">{item.title}</p>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
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

      {/* CTA Final */}
      <section className="section section-light pt-0">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-brand-turquoise/30 bg-gradient-to-br from-brand-turquoise/10 to-white p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <h3 className="text-lg font-bold text-[var(--color-text)]">
                Prêt à comparer intelligemment ?
              </h3>
            </div>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] mb-5 max-w-2xl mx-auto">
              Créez votre dossier en 3 minutes. Moverz standardise vos infos (volume IA) et vérifie les déménageurs (Creditsafe + licences + assurances). 
              Recevez jusqu'à 5 devis comparables sous 5-7 jours. Dossier anonyme, 0 démarchage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=comparateur-demenageurs-cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-bg-dark)] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[var(--color-bg-dark)] hover:shadow-xl transition-all"
              >
                <span>Comparer mes devis</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/pourquoi-moverz/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-brand-turquoise/50 hover:shadow-sm transition-all"
              >
                <span>Pourquoi Moverz ?</span>
              </a>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mt-4">
              ●3 min ●IA volumétrie ●Sans démarchage ●Jusqu'à 5 devis comparables ●100% gratuit ●Note 4.9/5
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

