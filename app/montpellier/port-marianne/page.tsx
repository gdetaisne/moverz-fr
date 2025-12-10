import { QuartierPage, generateQuartierMetadata } from "@/components/templates/QuartierPage";

export const metadata = generateQuartierMetadata('montpellier', 'Montpellier', 'port-marianne', 'Port-Marianne');

export default function Page() {
  return (
    <QuartierPage
      citySlug="montpellier"
      cityName="Montpellier"
      quartierSlug="port-marianne"
      quartierName="Port-Marianne"
      description="Service professionnel de déménagement dans le quartier Port-Marianne"
      stats={{
        dossiers: "+45",
        demenageurs: "15",
        delai: "3-5"
      }}
      pourquoiMoverz="Port-Marianne est un quartier prisé de Montpellier. Nos déménageurs spécialisés connaissent parfaitement les contraintes d'accès et s'adaptent aux particularités du quartier."
      accesStationnement="Port-Marianne présente des contraintes d'accès spécifiques. Nos partenaires déménageurs maîtrisent les créneaux autorisés, les zones de déchargement et optimisent les horaires."
      destinationsFrequentes={[
        {
          href: "/montpellier-vers-paris",
          title: "Port-Marianne → Paris",
          description: "Flux régulier depuis ce quartier, accès livraison à anticiper."
        }
      ]}
      faq={[
        {
          question: "Comment gérer le stationnement à Port-Marianne ?",
          answer: "Nos déménageurs connaissent les créneaux autorisés et les zones de déchargement temporaire."
        },
        {
          question: "Quels sont les tarifs pour Port-Marianne ?",
          answer: "Les tarifs dépendent du volume et des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
        }
      ]}
    />
  );
}
