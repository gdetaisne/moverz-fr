import { QuartierPage, generateQuartierMetadata } from "@/components/templates/QuartierPage";

export const metadata = generateQuartierMetadata('strasbourg', 'Strasbourg', 'koenigshoffen', 'Koenigshoffen');

export default function Page() {
  return (
    <QuartierPage
      citySlug="strasbourg"
      cityName="Strasbourg"
      quartierSlug="koenigshoffen"
      quartierName="Koenigshoffen"
      description="Service professionnel de déménagement dans le quartier Koenigshoffen"
      stats={{
        dossiers: "+45",
        demenageurs: "15",
        delai: "3-5"
      }}
      pourquoiMoverz="Koenigshoffen est un quartier prisé de Strasbourg. Nos déménageurs spécialisés connaissent parfaitement les contraintes d'accès et s'adaptent aux particularités du quartier."
      accesStationnement="Koenigshoffen présente des contraintes d'accès spécifiques. Nos partenaires déménageurs maîtrisent les créneaux autorisés, les zones de déchargement et optimisent les horaires."
      destinationsFrequentes={[
        {
          href: "/strasbourg-vers-paris",
          title: "Koenigshoffen → Paris",
          description: "Flux régulier depuis ce quartier, accès livraison à anticiper."
        }
      ]}
      faq={[
        {
          question: "Comment gérer le stationnement à Koenigshoffen ?",
          answer: "Nos déménageurs connaissent les créneaux autorisés et les zones de déchargement temporaire."
        },
        {
          question: "Quels sont les tarifs pour Koenigshoffen ?",
          answer: "Les tarifs dépendent du volume et des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
        }
      ]}
    />
  );
}
