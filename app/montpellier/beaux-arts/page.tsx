import { QuartierPage, generateQuartierMetadata } from "@/components/templates/QuartierPage";

export const metadata = generateQuartierMetadata('montpellier', 'Montpellier', 'beaux-arts', 'Beaux-Arts');

export default function Page() {
  return (
    <QuartierPage
      citySlug="montpellier"
      cityName="Montpellier"
      quartierSlug="beaux-arts"
      quartierName="Beaux-Arts"
      description="Service professionnel de déménagement dans le quartier Beaux-Arts"
      stats={{
        dossiers: "+45",
        demenageurs: "15",
        delai: "3-5"
      }}
      pourquoiMoverz="Beaux-Arts est un quartier prisé de Montpellier. Nos déménageurs spécialisés connaissent parfaitement les contraintes d'accès et s'adaptent aux particularités du quartier."
      accesStationnement="Beaux-Arts présente des contraintes d'accès spécifiques. Nos partenaires déménageurs maîtrisent les créneaux autorisés, les zones de déchargement et optimisent les horaires."
      destinationsFrequentes={[
        {
          href: "/montpellier-vers-paris",
          title: "Beaux-Arts → Paris",
          description: "Flux régulier depuis ce quartier, accès livraison à anticiper."
        }
      ]}
      faq={[
        {
          question: "Comment gérer le stationnement à Beaux-Arts ?",
          answer: "Nos déménageurs connaissent les créneaux autorisés et les zones de déchargement temporaire."
        },
        {
          question: "Quels sont les tarifs pour Beaux-Arts ?",
          answer: "Les tarifs dépendent du volume et des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
        }
      ]}
    />
  );
}
