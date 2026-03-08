import { QuartierPage, generateQuartierMetadata } from "@/components/templates/QuartierPage";

export const metadata = generateQuartierMetadata('rouen', 'Rouen', 'grammont', 'Grammont');

export default function Page() {
  return (
    <QuartierPage
      citySlug="rouen"
      cityName="Rouen"
      quartierSlug="grammont"
      quartierName="Grammont"
      description="Comparer des déménageurs vérifiés pour le quartier grammont"
      stats={{
        dossiers: "+45",
        demenageurs: "15",
        delai: "3-5"
      }}
      pourquoiMoverz="Grammont est un quartier prisé de Rouen. Les déménageurs partenaires Moverz connaissent les contraintes d'accès de ce quartier et s'y adaptent."
      accesStationnement="Grammont présente des contraintes d'accès spécifiques. Les déménageurs partenaires sélectionnés par Moverz maîtrisent les créneaux autorisés et les zones de déchargement de ce quartier."
      destinationsFrequentes={[
        {
          href: "/rouen-vers-paris",
          title: "Grammont → Paris",
          description: "Flux régulier depuis ce quartier, accès livraison à anticiper."
        }
      ]}
      faq={[
        {
          question: "Comment gérer le stationnement à Grammont ?",
          answer: "Les déménageurs partenaires Moverz connaissent les créneaux autorisés et les zones de déchargement temporaire."
        },
        {
          question: "Quels sont les tarifs pour Grammont ?",
          answer: "Les tarifs dépendent du volume et des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
        }
      ]}
    />
  );
}
