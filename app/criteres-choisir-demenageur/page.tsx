import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getFullMetadata } from "@/lib/canonical-helper";
import { FAQ, type FAQItem } from "@/components/FAQ";

export const metadata: Metadata = getFullMetadata(
  "criteres-choisir-demenageur",
  "Choisir un déménageur : les critères indispensables (anti-arnaques) | Moverz",
  "Les critères indispensables pour choisir un déménageur fiable : légalité, licence de transport, assurance, méthode d’estimation du volume, devis détaillé, paiement, fiabilité opérationnelle + checklist et FAQ."
);

export default function CriteresChoisirDemenageurPage() {
  const faqs: FAQItem[] = [
    {
      question: "Un déménageur peut-il facturer plus le jour J ?",
      answer:
        "Oui, c’est possible si le devis le prévoit (ex : volume réel supérieur, accès plus difficile, attente) ou si des prestations non prévues sont demandées. La prévention passe par une estimation de volume solide (visite/visio/photos) et un devis détaillé.",
    },
    {
      question: "Quelle assurance couvre la casse ?",
      answer:
        "Le déménageur a une responsabilité légale, mais l’indemnisation dépend souvent de la déclaration de valeur, des plafonds et de la franchise. Demandez l’attestation d’assurance, vérifiez les exclusions, et faites une déclaration de valeur réaliste.",
    },
    {
      question: "Quel acompte est normal ?",
      answer:
        "Un acompte raisonnable est courant (souvent une fraction du total). Méfiez-vous des demandes de 100% avant la prestation ou de moyens de paiement non traçables. Le calendrier et les modalités doivent être écrits.",
    },
    {
      question: "Dois-je accepter un devis au téléphone ?",
      answer:
        "Non. Un devis doit être écrit, détaillé, daté, avec raison sociale, SIREN/SIRET, conditions, assurances, et prestations. Un prix “au téléphone” sans visite/visio/photos augmente le risque d’écart de volume.",
    },
    {
      question: "Comment comparer 3 devis ?",
      answer:
        "Comparez d’abord le périmètre (volume, accès, emballage, démontage/remontage, portage, assurance, stationnement), puis les conditions (acompte, annulation, délais), et enfin le prix. Des devis sur une base différente ne sont pas comparables.",
    },
    {
      question: "Que vérifier sur un devis de déménagement ?",
      answer:
        "Prestations incluses vs options, volume estimé ou méthode, accès (étages/ascenseur/portage), dates, assurances, franchise, déclaration de valeur, conditions d’annulation, acompte, et coordonnées légales complètes.",
    },
    {
      question: "Comment éviter les faux déménageurs ?",
      answer:
        "Vérifiez l’existence légale (SIREN/SIRET), la cohérence des documents (raison sociale identique sur devis/RIB/assurance), la licence/capacité de transport si applicable, et refusez les demandes de paiement atypiques.",
    },
    {
      question: "Visite, visio ou photos : que choisir ?",
      answer:
        "L’important est d’avoir une base concrète (visite, visio ou photos détaillées). Une simple estimation téléphonique est plus risquée : erreurs de volume, sous-estimation du temps, et ajustements le jour J.",
    },
    {
      question: "Que faire si je ne comprends pas une ligne du devis ?",
      answer:
        "Demandez une explication écrite (mail) et, si besoin, une version du devis clarifiée. Un professionnel fiable accepte de détailler les postes (portage, emballage, assurance, options).",
    },
    {
      question: "Un déménageur doit-il fournir une attestation d’assurance ?",
      answer:
        "Oui, c’est une bonne pratique de la demander avant de signer. Vérifiez la période de validité, le périmètre (RC Pro, marchandises transportées), et conservez une copie avec le devis.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Choisir un déménageur", href: "/criteres-choisir-demenageur/" },
        ]}
        eyebrow="Guide anti-arnaques"
        title="Choisir un déménageur : les critères indispensables (anti-arnaques)"
        subtitle="Un prix bas ne suffit pas. Ce guide liste les critères vérifiables qui réduisent les risques : légalité, licence, assurance, estimation du volume, devis, paiement, fiabilité opérationnelle."
        primaryCta={{ label: "Voir la checklist", href: "#checklist" }}
        secondaryCta={{ label: "Aller à la FAQ", href: "#faq" }}
      />

      <section className="section section-light">
        <div className="container max-w-4xl space-y-10">
          {/* Intro */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">
              L’objectif : éviter les mauvaises surprises (volume, accès, assurance)
            </h2>
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
              Les litiges les plus fréquents viennent d’un périmètre mal cadré : volume sous-estimé, accès oubliés,
              options non comprises, ou garanties mal expliquées. Un déménageur fiable accepte de documenter et
              d’écrire les choses clairement avant signature.
            </p>
          </div>

          {/* 7 criteria */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-[#0F172A]">
              Les 7 critères essentiels (avec explications concrètes)
            </h2>

            <div className="grid gap-4">
              {[
                {
                  title: "1) Légalité : SIREN/SIRET, existence réelle de la société",
                  bullets: [
                    "Raison sociale complète + SIREN/SIRET sur le devis",
                    "Adresse cohérente (siège / établissement)",
                    "Identité identique sur devis, assurance et RIB",
                  ],
                  note: "Un devis sans identité légale claire est un signal de risque.",
                },
                {
                  title: "2) Licence / capacité de transport : non négociable",
                  bullets: [
                    "Demandez la preuve de capacité/autorisation si transport de marchandises concerné",
                    "Vérifiez que l’entreprise ne sous-traite pas sans l’indiquer",
                  ],
                  note: "Sans cadre légal, vous prenez un risque sur la responsabilité et l’exécution.",
                },
                {
                  title: "3) Assurance : RC, marchandises, déclaration de valeur",
                  bullets: [
                    "Attestation d’assurance à jour (période + périmètre)",
                    "Franchise, plafonds, exclusions : lisez-les",
                    "Déclaration de valeur réaliste (sinon indemnisation limitée)",
                  ],
                  note: "Ne confondez pas responsabilité légale et couverture réelle de vos biens.",
                },
                {
                  title: "4) Méthode d’estimation du volume : visite / visio / photos",
                  bullets: [
                    "Visite technique ou visio : idéal pour les accès et contraintes",
                    "Photos détaillées : bonne alternative si c’est structuré",
                    "Évitez le “prix au téléphone” sans base concrète",
                  ],
                  note: "Une estimation fragile augmente le risque de supplément ou de changement de prestation.",
                },
                {
                  title: "5) Devis détaillé : inclus vs options, accès, portage",
                  bullets: [
                    "Prestations incluses (emballage, démontage, protection)",
                    "Accès (étage, ascenseur, portage, stationnement) explicités",
                    "Options et surcoûts possibles décrits à l’avance",
                  ],
                  note: "Un devis “tout compris” sans détail est difficile à faire respecter.",
                },
                {
                  title: "6) Conditions de paiement : acompte raisonnable, traçabilité",
                  bullets: [
                    "Acompte écrit + calendrier de paiement",
                    "Évitez 100% avant prestation (sauf cas très particulier justifié)",
                    "Privilégiez les paiements traçables (virement, CB, etc.)",
                  ],
                  note: "Le risque principal : payer sans levier si la prestation dévie.",
                },
                {
                  title: "7) Fiabilité opérationnelle : équipe, matériel, plan B",
                  bullets: [
                    "Nombre de déménageurs, camion, matériel de protection",
                    "Procédure en cas d’imprévu (panne, météo, retard)",
                    "Planning réaliste (temps de chargement, trajet, déchargement)",
                  ],
                  note: "La logistique et le plan B sont souvent plus importants que le prix.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
                  <h3 className="text-base md:text-lg font-bold text-[#0F172A]">{c.title}</h3>
                  <ul className="mt-3 grid gap-2 text-sm md:text-base text-[#0F172A]/90">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#6BCFCF] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-[#6B7280]">{c.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photos/visio */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-8 space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-[#0F172A]">
              Pourquoi photos/visio &gt; estimation téléphonique (risque “supplément volume”)
            </h2>
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
              Une estimation au téléphone repose sur votre déclaration (souvent incomplète) et sur des hypothèses
              (“ça passe dans l’ascenseur”, “il y a peu de meubles”, etc.). En pratique, les écarts viennent de ce qui
              n’a pas été vu : placards, cave/garage, mobilier démontable, électroménager, accès, portage et
              stationnement. Visite/visio/photos réduisent ces angles morts.
            </p>
            <ul className="grid gap-2 text-sm md:text-base text-[#0F172A]/90">
              {[
                "Moins d’écart sur le volume réel",
                "Meilleure anticipation des accès (escaliers, ascenseur, portage)",
                "Devis plus stable car le périmètre est documenté",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2B7A78] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to verify */}
          <div id="checklist" className="scroll-mt-28 space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-[#0F172A]">
              Comment vérifier un déménageur (checklist actionnable)
            </h2>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 space-y-4">
              <h3 className="text-base md:text-lg font-bold text-[#0F172A]">Étapes simples</h3>
              <ol className="grid gap-2 text-sm md:text-base text-[#0F172A]/90">
                {[
                  "Vérifiez SIREN/SIRET dans un annuaire officiel d’entreprises (ou via l’extrait Kbis).",
                  "Demandez un Kbis récent (raison sociale, adresse, dirigeants).",
                  "Demandez l’attestation d’assurance (validité, périmètre, franchise).",
                  "Vérifiez la cohérence raison sociale ↔ RIB ↔ devis ↔ assurance.",
                  "Faites préciser la méthode d’estimation du volume (visite/visio/photos) et les hypothèses d’accès.",
                  "Demandez une clarification écrite pour toute option ou surcoût potentiel (portage, stationnement, attente).",
                ].map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#6BCFCF]/15 text-[#0F172A] text-xs font-bold border border-[#6BCFCF]/20 shrink-0">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Red flags */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-[#0F172A]">Red flags à éviter</h2>
            <ul className="grid gap-2 text-sm md:text-base text-[#0F172A]/90">
              {[
                "Devis sans SIREN/SIRET, ou identité légale floue",
                "Refus de fournir une attestation d’assurance ou un Kbis récent",
                "Demande de paiement total avant prestation, ou moyens de paiement non traçables",
                "Prix donné “au téléphone” sans visite/visio/photos",
                "Contradictions entre raison sociale, RIB et documents",
                "Absence de détail sur accès/portage/conditions d’annulation",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Printable mini checklist */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#0F172A] p-6 md:p-8 text-white">
            <h2 className="text-lg md:text-xl font-semibold">Mini-checklist imprimable (10 lignes)</h2>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 font-mono text-xs md:text-sm whitespace-pre-line leading-relaxed">
              {[
                "☐ SIREN/SIRET vérifiés (raison sociale cohérente)",
                "☐ Kbis récent demandé / reçu",
                "☐ Attestation d’assurance à jour (périmètre + franchise)",
                "☐ Méthode d’estimation : visite / visio / photos",
                "☐ Accès détaillés : étages, ascenseur, portage, stationnement",
                "☐ Prestations incluses clairement listées",
                "☐ Options et surcoûts possibles explicités",
                "☐ Acompte raisonnable + paiement traçable",
                "☐ Conditions d’annulation écrites",
                "☐ Cohérence devis ↔ RIB ↔ assurance",
              ].join("\n")}
            </div>
          </div>

          {/* Maillage interne (SEO) */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF] text-center">
              À lire aussi
            </p>
            <h2 className="mt-3 text-xl md:text-2xl font-bold text-[#0F172A] text-center">
              Pour compléter (court, factuel)
            </h2>
            <p className="mt-2 text-sm text-[#6B7280] text-center max-w-2xl mx-auto">
              Trois pages complémentaires pour cadrer le devis, repérer les signaux d’alerte, et comprendre les vérifications.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                {
                  href: "/faq-arnaque-demenagement/",
                  title: "FAQ arnaques déménagement",
                  desc: "10 Q/R factuelles (suppléments, acompte, assurance, sous-traitance…).",
                },
                {
                  href: "/verifications-partenaires/",
                  title: "Vérifications partenaires (transparence)",
                  desc: "Ce qui est vérifié, pourquoi, et ce que ça change concrètement.",
                },
                {
                  href: "/blog/eviter-arnaques-demenagement/",
                  title: "Guide long : éviter les arnaques",
                  desc: "Version longue avec exemples et points d’attention.",
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-[#E5E7EB] bg-white p-5 hover:border-[#6BCFCF]/50 hover:shadow-sm transition-all"
                >
                  <p className="text-sm font-semibold text-[#0F172A] group-hover:text-[#2B7A78]">{item.title}</p>
                  <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="faq" className="scroll-mt-28">
        <FAQ title="FAQ : choisir un déménageur" faqs={faqs} limit={10} id="faq" />
      </div>

      {/* CTA discret */}
      <section className="section section-light pt-0">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#0F172A]">Besoin d’une estimation plus solide ?</p>
              <p className="text-sm text-[#6B7280]">
                Obtenir des devis basés sur une base documentée (photos/visio) réduit les écarts de volume.
              </p>
            </div>
            <a
              href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=/criteres-choisir-demenageur/"
              rel="nofollow"
              className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1E293B] transition-colors"
            >
              Obtenir des devis basés sur des photos →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

