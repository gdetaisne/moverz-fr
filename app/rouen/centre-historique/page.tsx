import { QuartierPage, generateQuartierMetadata } from "@/components/templates/QuartierPage";

export const metadata = generateQuartierMetadata('rouen', 'Rouen', 'centre-historique', 'Centre Historique');

export default function Page() {
  return (
    <QuartierPage
      citySlug="rouen"
      cityName="Rouen"
      quartierSlug="centre-historique"
      quartierName="Centre Historique"
      description="Service professionnel de déménagement dans le quartier Centre Historique"
      stats={{
        dossiers: "+45",
        demenageurs: "15",
        delai: "3-5"
      }}
      pourquoiMoverz="Centre Historique est un quartier prisé de Rouen. Nos déménageurs spécialisés connaissent parfaitement les contraintes d'accès et s'adaptent aux particularités du quartier."
      accesStationnement="Centre Historique présente des contraintes d'accès spécifiques. Nos partenaires déménageurs maîtrisent les créneaux autorisés, les zones de déchargement et optimisent les horaires."
      destinationsFrequentes={[
        {
          href: "/rouen-vers-paris",
          title: "Centre Historique → Paris",
          description: "Flux régulier depuis ce quartier, accès livraison à anticiper."
        }
      ]}
      faq={[
        {
          question: "Comment gérer le stationnement à Centre Historique ?",
          answer: "Nos déménageurs connaissent les créneaux autorisés et les zones de déchargement temporaire."
        },
        {
          question: "Quels sont les tarifs pour Centre Historique ?",
          answer: "Les tarifs dépendent du volume et des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
        }
      ]}
    />
  );
}
