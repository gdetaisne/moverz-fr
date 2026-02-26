import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { Book, Search } from "lucide-react";

export const metadata: Metadata = getFullMetadata(
  'glossaire-demenagement',
  "Glossaire du déménagement : 50+ termes à connaître (2026)",
  "Définitions complètes des termes du déménagement : volumétrie, capacité de transport, RC Pro, dossier opposable, formule économique, etc. Glossaire de référence 2026."
);

// Définition des termes du glossaire
const glossaryTerms = [
  {
    letter: "A",
    terms: [
      {
        term: "Accès difficile",
        definition: "Contrainte d'accès qui complique le déménagement : étage élevé sans ascenseur, rue étroite, zone piétonne, parking éloigné (> 50m). Impact prix : +20 à +50% selon la difficulté."
      },
      {
        term: "Acompte",
        definition: "Somme versée à la réservation pour confirmer la prestation. Généralement 20-30% du devis. Vérifiez les conditions d'annulation et de remboursement."
      },
      {
        term: "Assurance RC Pro (Responsabilité Civile Professionnelle)",
        definition: "Assurance obligatoire pour les déménageurs couvrant les dommages causés aux biens du client. Plafond minimum recommandé : 620 €/m³. Vérifiez toujours que l'assurance est à jour."
      },
      {
        term: "Assurance ad valorem",
        definition: "Assurance premium basée sur la valeur déclarée des biens (vs forfait au m³). Recommandée pour les biens de grande valeur (meubles anciens, œuvres d'art, pianos)."
      },
    ]
  },
  {
    letter: "B",
    terms: [
      {
        term: "BODACC",
        definition: "Bulletin Officiel des Annonces Civiles et Commerciales. Publie les procédures collectives (redressement, liquidation). À consulter pour vérifier la santé d'un déménageur."
      },
    ]
  },
  {
    letter: "C",
    terms: [
      {
        term: "Capacité de transport",
        definition: "Licence obligatoire pour exercer le métier de déménageur professionnel en France. Délivrée par la DREAL après justification de compétences et capacité financière. Exigez toujours une copie."
      },
      {
        term: "Cartons standards",
        definition: "Cartons de déménagement aux dimensions normées : petit (35×25×25 cm pour livres/vaisselle), moyen (50×35×35 cm usage général), grand (60×40×40 cm linge/objets légers). Prix : 1-2€/pièce."
      },
      {
        term: "Corridor",
        definition: "Trajet fréquent entre deux villes (ex: Paris-Lyon, Marseille-Nice). Les déménageurs proposent souvent des tarifs optimisés grâce au groupage de plusieurs déménagements sur le même trajet."
      },
      {
        term: "Creditsafe",
        definition: "Agence européenne de notation financière qui attribue un score de solvabilité (0-100) aux entreprises. Score < 40/100 = risque élevé de défaillance. Moverz exclut automatiquement les déménageurs avec alertes Creditsafe."
      },
      {
        term: "Cubage (ou volumétrie)",
        definition: "Estimation du volume total des biens à déménager, exprimé en mètres cubes (m³). Facteur n°1 du prix. Un volume sous-estimé = supplément jour J (+200-800€ en moyenne)."
      },
    ]
  },
  {
    letter: "D",
    terms: [
      {
        term: "Déménagement groupé",
        definition: "Plusieurs déménagements sur le même trajet (corridor). Permet de réduire les coûts (économie 15-30%) mais allonge les délais de livraison (3-7 jours vs 1-2 jours en dédié)."
      },
      {
        term: "Déménagement longue distance",
        definition: "Déménagement entre deux villes distantes de plus de 100 km. Prix déterminé principalement par la distance (carburant + péages) et le volume. Possibilité de groupage pour réduire les coûts."
      },
      {
        term: "Démontage/remontage",
        definition: "Prestation de démontage des meubles au départ et remontage à l'arrivée. Généralement inclus dans la formule standard pour les meubles volumineux (lit, armoire, bibliothèque). Vérifiez l'inclusion dans le devis."
      },
      {
        term: "Devis opposable",
        definition: "Devis détaillé avec volume précis, accès documentés, prestations listées. Le déménageur ne peut pas augmenter le prix jour J si les conditions sont conformes. Moverz standardise les dossiers pour garantir des devis opposables."
      },
      {
        term: "Dossier standardisé",
        definition: "Dossier de déménagement avec informations homogènes (volume, accès, contraintes) transmis à tous les déménageurs. Permet de comparer des devis sur une base identique. Exclusivité Moverz."
      },
    ]
  },
  {
    letter: "E",
    terms: [
      {
        term: "Étage sans ascenseur",
        definition: "Contrainte d'accès majeure. Impact prix : +5-10% par étage au-delà du 2e. Un 5e sans ascenseur peut ajouter +30-50% au prix total. Toujours préciser dans le dossier."
      },
    ]
  },
  {
    letter: "F",
    terms: [
      {
        term: "Formule économique",
        definition: "Prestation de base : vous emballez tout, le déménageur se charge uniquement du portage et du transport. Économie : 30-40% vs formule standard. Temps de préparation pour vous : 20-40h."
      },
      {
        term: "Formule standard",
        definition: "Prestation intermédiaire : déménageur emballe les objets fragiles, démonte/remonte les meubles, protège les meubles volumineux. La formule la plus courante (70% des déménagements)."
      },
      {
        term: "Formule confort (ou premium)",
        definition: "Prestation tout compris : déménageur emballe TOUT, démonte/remonte, déballe et installe à l'arrivée. Surcoût : +40-60% vs standard. Temps de préparation pour vous : 0h."
      },
      {
        term: "Franchise d'assurance",
        definition: "Montant restant à votre charge en cas de sinistre. Typiquement 150-300€. Vérifiez la franchise dans le contrat (une franchise élevée = assurance peu protectrice)."
      },
    ]
  },
  {
    letter: "G",
    terms: [
      {
        term: "Groupage",
        definition: "Technique consistant à regrouper plusieurs déménagements dans le même camion (sur le même trajet). Réduit les coûts mais allonge les délais. Voir 'Déménagement groupé'."
      },
    ]
  },
  {
    letter: "I",
    terms: [
      {
        term: "Inventaire détaillé",
        definition: "Liste exhaustive des biens à déménager, pièce par pièce. Base du calcul de volumétrie. Un inventaire précis évite 90% des litiges jour J. Moverz guide l'inventaire pour garantir l'exhaustivité."
      },
    ]
  },
  {
    letter: "L",
    terms: [
      {
        term: "Lead-gen (génération de leads)",
        definition: "Modèle économique de certains comparateurs : revendre vos coordonnées à plusieurs déménageurs → harcèlement téléphonique. Moverz fonctionne avec un dossier anonyme (vous choisissez qui peut vous contacter)."
      },
      {
        term: "Liquidation judiciaire",
        definition: "Procédure de cessation d'activité d'une entreprise en faillite. Vos affaires peuvent être bloquées (gage juridique) si le déménageur est en liquidation pendant votre déménagement. Vérifiez le score Creditsafe."
      },
    ]
  },
  {
    letter: "M",
    terms: [
      {
        term: "Monte-meuble",
        definition: "Dispositif de levage extérieur pour monter/descendre les meubles volumineux par les fenêtres (quand l'escalier est inaccessible). Coût : 150-400€ selon hauteur. Nécessite autorisation mairie."
      },
    ]
  },
  {
    letter: "O",
    terms: [
      {
        term: "Objets lourds",
        definition: "Biens nécessitant une manutention spéciale : piano (> 200 kg), coffre-fort, machine industrielle. Surcoût : 50-200€/objet selon poids et accès. Toujours déclarer dans l'inventaire."
      },
    ]
  },
  {
    letter: "P",
    terms: [
      {
        term: "Pappers",
        definition: "Plateforme d'information légale et financière sur les entreprises françaises. Permet de consulter gratuitement les bilans, procédures collectives, dirigeants. Moverz utilise Pappers pour vérifier la fiabilité juridique des déménageurs."
      },
      {
        term: "Période haute (saison haute)",
        definition: "Juin-août + fins de mois + week-ends. Forte demande = prix +20-30% et disponibilité réduite. Privilégiez la semaine hors été pour économiser 200-400€ sur un T3."
      },
      {
        term: "Portage",
        definition: "Distance entre le camion et la porte d'entrée. Standard : < 10m (inclus). Portage > 50m = surcoût 10-20% (temps de manutention). Précisez toujours dans le dossier."
      },
      {
        term: "Protection meubles",
        definition: "Couvertures, films bulles, cartons spéciaux pour protéger les meubles pendant le transport. Généralement inclus dans formule standard/confort. Vérifiez l'inclusion dans le devis."
      },
    ]
  },
  {
    letter: "R",
    terms: [
      {
        term: "Redressement judiciaire",
        definition: "Procédure collective pour entreprise en difficulté (mais pas encore en cessation de paiement). Sous surveillance du tribunal. Risque élevé de défaillance. Moverz exclut automatiquement les déménageurs en redressement."
      },
      {
        term: "Rue piétonne",
        definition: "Contrainte d'accès majeure : camion ne peut pas stationner devant la porte. Portage 50-200m. Surcoût : 15-30% (temps de manutention multiplié). Nécessite souvent autorisation mairie."
      },
    ]
  },
  {
    letter: "S",
    terms: [
      {
        term: "Solvabilité",
        definition: "Capacité d'une entreprise à payer ses dettes et charges. Mesurée par le score Creditsafe (0-100). Score < 40 = risque élevé de défaillance. Moverz vérifie la solvabilité de tous les déménageurs."
      },
      {
        term: "Supplément jour J",
        definition: "Augmentation de prix réclamée par le déménageur le jour du déménagement (volume sous-estimé, accès non déclarés, objets lourds oubliés). 40-50% des déménagements subissent un supplément (+200-800€ en moyenne). Évitable avec un dossier précis."
      },
    ]
  },
  {
    letter: "T",
    terms: [
      {
        term: "Tarif au m³",
        definition: "Mode de tarification basé sur le volume (ex: 50€/m³ pour un local, 80€/m³ pour une longue distance). Toujours vérifier ce qui est inclus (cartons, protection, assurance)."
      },
      {
        term: "Tarif horaire",
        definition: "Mode de tarification à l'heure (ex: 80€/h avec 2 déménageurs + camion). Risqué : le déménageur contrôle la durée. Privilégiez un forfait au m³ avec volume précis."
      },
      {
        term: "Trésorerie",
        definition: "Cash disponible pour une entreprise à court terme. Trésorerie négative = impossibilité de payer les charges (salaires, essence, assurance) = risque de liquidation. Moverz exclut les déménageurs avec trésorerie négative."
      },
    ]
  },
  {
    letter: "V",
    terms: [
      {
        term: "Visite technique",
        definition: "Visite sur place par le déménageur pour estimer le volume et les contraintes. Gratuite généralement. Permet d'obtenir un devis précis. Alternative : dossier standardisé Moverz (gain de temps)."
      },
      {
        term: "Volumétrie IA",
        definition: "Calcul du volume par intelligence artificielle à partir d'un inventaire détaillé guidé. Précision 90-95%. Permet d'obtenir des devis comparables sans visite technique. Technologie utilisée par Moverz."
      },
    ]
  },
];

export default function GlossaireDemenagementPage() {
  return (
    <main className="bg-hero min-h-screen">
      <JsonLd
        id="glossaire-demenagement"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://moverz.fr/glossaire-demenagement/",
          name: "Glossaire du déménagement : 50+ termes à connaître",
          description: "Définitions complètes des termes du déménagement : volumétrie, capacité de transport, RC Pro, dossier opposable, formule économique, etc.",
          url: "https://moverz.fr/glossaire-demenagement/",
          inLanguage: "fr-FR",
          isPartOf: { "@id": "https://moverz.fr/#website" },
        }}
      />
      <div className="halo" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #111827 100%)"
        }} />
        
        <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-v4-accent/12 blur-[120px]" />
        <div className="absolute -bottom-20 right-1/4 h-96 w-96 rounded-full bg-v4-accent/12 blur-[120px]" />
        
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-white">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Glossaire déménagement", href: "/glossaire-demenagement/" }
            ]}
          />

          <div className="mt-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
              <Book className="h-4 w-4 text-v4-accent" />
              Glossaire de référence 2026
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05]">
              Glossaire du{" "}
              <span className="text-v4-accent">déménagement</span>
            </h1>

            <p className="mt-5 text-lg text-white/80 max-w-3xl">
              50+ termes essentiels pour comprendre les devis, éviter les pièges, et choisir le bon déménageur. 
              Définitions claires, exemples concrets, vocabulaire professionnel.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-v4-text-secondary" />
                <input
                  type="search"
                  id="glossary-search"
                  placeholder="Rechercher un terme..."
                  className="w-full rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm px-12 py-4 text-sm text-white placeholder:text-white/50 focus:border-v4-accent focus:outline-none focus:ring-2 focus:ring-v4-accent/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="section section-light">
        <div className="container max-w-5xl">
          {/* Quick navigation */}
          <div className="rounded-3xl border border-v4-border bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] mb-10">
            <p className="text-sm font-semibold text-v4-text-secondary mb-3">Navigation rapide</p>
            <div className="flex flex-wrap gap-2">
              {glossaryTerms.map((section) => (
                <a
                  key={section.letter}
                  href={`#letter-${section.letter}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-v4-border bg-white text-sm font-semibold text-v4-text hover:bg-v4-accent/10 hover:border-v4-accent/30 transition-colors"
                >
                  {section.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Terms by letter */}
          <div className="space-y-8">
            {glossaryTerms.map((section) => (
              <div key={section.letter} id={`letter-${section.letter}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-v4-accent to-[#0D9B9B] text-2xl font-bold text-white shadow-lg">
                    {section.letter}
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-v4-border to-transparent" />
                </div>

                <div className="space-y-4">
                  {section.terms.map((item, idx) => (
                    <div
                      key={idx}
                      className="group rounded-2xl border border-v4-border bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300"
                    >
                      <dt className="text-lg font-bold text-v4-text mb-2 group-hover:text-v4-accent transition-colors">
                        {item.term}
                      </dt>
                      <dd className="text-[#1E293B]/75 leading-relaxed">
                        {item.definition}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA bottom */}
          <div className="mt-16 rounded-3xl border border-v4-border bg-gradient-to-b from-white to-[#FAFBFC] p-8 md:p-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-turquoise/70 via-[#0F172A]/20 to-brand-turquoise/70" />
            <h2 className="text-2xl md:text-3xl font-bold text-v4-text">
              Prêt à comparer des déménageurs fiables ?
            </h2>
            <p className="mt-4 text-[#1E293B]/75 max-w-2xl mx-auto">
              Moverz standardise votre dossier, vérifie les pros (3 analyses de risque /100), et vous aide à comparer proprement.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://devis.moverz.fr/devis-gratuits?source=moverz.fr&from=glossaire"
                rel="nofollow"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-v4-text px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all"
              >
                Obtenir mes devis{" "}
                <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="/blog/conseils-demenagement/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#0F172A]/15 bg-white px-8 py-4 text-sm font-semibold text-v4-text hover:bg-gray-50 transition-colors"
              >
                Voir les guides <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
