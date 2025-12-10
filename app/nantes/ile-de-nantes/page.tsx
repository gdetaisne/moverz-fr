import { QuartierPage, generateQuartierMetadata } from "@/components/templates/QuartierPage";

export const metadata = generateQuartierMetadata('nantes', 'Nantes', 'ile-de-nantes', 'Île de Nantes');

export default function Page() {
  return (
    <QuartierPage
      citySlug="nantes"
      cityName="Nantes"
      quartierSlug="ile-de-nantes"
      quartierName="Île de Nantes"
      description="Service professionnel de déménagement dans le quartier Île de Nantes"
      stats={{
        dossiers: "+45",
        demenageurs: "15",
        delai: "3-5"
      }}
      pourquoiMoverz="Île de Nantes est un quartier prisé de Nantes. Nos déménageurs spécialisés connaissent parfaitement les contraintes d'accès et s'adaptent aux particularités du quartier."
      accesStationnement="Île de Nantes présente des contraintes d'accès spécifiques. Nos partenaires déménageurs maîtrisent les créneaux autorisés, les zones de déchargement et optimisent les horaires."
      destinationsFrequentes={[
        {
          href: "/nantes-vers-paris",
          title: "Île de Nantes → Paris",
          description: "Flux régulier depuis ce quartier, accès livraison à anticiper."
        }
      ]}
      faq={[
        {
          question: "Comment gérer le stationnement à Île de Nantes ?",
          answer: "Nos déménageurs connaissent les créneaux autorisés et les zones de déchargement temporaire."
        },
        {
          question: "Quels sont les tarifs pour Île de Nantes ?",
          answer: "Les tarifs dépendent du volume et des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
        }
      ]}
    />
  );
}
