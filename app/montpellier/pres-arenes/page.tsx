import { QuartierPage, generateQuartierMetadata } from "@/components/templates/QuartierPage";

export const metadata = generateQuartierMetadata('montpellier', 'Montpellier', 'pres-arenes', 'Près d\'Arènes');

export default function Page() {
  return (
    <QuartierPage
      citySlug="montpellier"
      cityName="Montpellier"
      quartierSlug="pres-arenes"
      quartierName="Près d\'Arènes"
      description="Comparer des déménageurs vérifiés pour le quartier pres-arenes d\'Arènes"
      stats={{
        dossiers: "+45",
        demenageurs: "15",
        delai: "3-5"
      }}
      pourquoiMoverz="Près d\'Arènes est un quartier prisé de Montpellier. Les déménageurs partenaires Moverz connaissent les contraintes d'accès de ce quartier et s'y adaptent."
      accesStationnement="Près d\'Arènes présente des contraintes d'accès spécifiques. Les déménageurs partenaires sélectionnés par Moverz maîtrisent les créneaux autorisés et les zones de déchargement de ce quartier."
      destinationsFrequentes={[
        {
          href: "/montpellier-vers-paris",
          title: "Près d\'Arènes → Paris",
          description: "Flux régulier depuis ce quartier, accès livraison à anticiper."
        }
      ]}
      faq={[
        {
          question: "Comment gérer le stationnement à Près d\'Arènes ?",
          answer: "Les déménageurs partenaires Moverz connaissent les créneaux autorisés et les zones de déchargement temporaire."
        },
        {
          question: "Quels sont les tarifs pour Près d\'Arènes ?",
          answer: "Les tarifs dépendent du volume et des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
        }
      ]}
    />
  );
}
