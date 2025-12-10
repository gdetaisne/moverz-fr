import { QuartierPage, generateQuartierMetadata } from "@/components/templates/QuartierPage";

export const metadata = generateQuartierMetadata('rouen', 'Rouen', 'saint-sever', 'Saint-Sever');

export default function Page() {
  return (
    <QuartierPage
      citySlug="rouen"
      cityName="Rouen"
      quartierSlug="saint-sever"
      quartierName="Saint-Sever"
      description="Service professionnel de déménagement dans le quartier Saint-Sever"
      stats={{
        dossiers: "+45",
        demenageurs: "15",
        delai: "3-5"
      }}
      pourquoiMoverz="Saint-Sever est un quartier prisé de Rouen. Nos déménageurs spécialisés connaissent parfaitement les contraintes d'accès et s'adaptent aux particularités du quartier."
      accesStationnement="Saint-Sever présente des contraintes d'accès spécifiques. Nos partenaires déménageurs maîtrisent les créneaux autorisés, les zones de déchargement et optimisent les horaires."
      destinationsFrequentes={[
        {
          href: "/rouen-vers-paris",
          title: "Saint-Sever → Paris",
          description: "Flux régulier depuis ce quartier, accès livraison à anticiper."
        }
      ]}
      faq={[
        {
          question: "Comment gérer le stationnement à Saint-Sever ?",
          answer: "Nos déménageurs connaissent les créneaux autorisés et les zones de déchargement temporaire."
        },
        {
          question: "Quels sont les tarifs pour Saint-Sever ?",
          answer: "Les tarifs dépendent du volume et des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
        }
      ]}
    />
  );
}
