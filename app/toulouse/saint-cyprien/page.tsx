import { QuartierPage, generateQuartierMetadata } from "@/components/templates/QuartierPage";

export const metadata = generateQuartierMetadata('toulouse', 'Toulouse', 'saint-cyprien', 'Saint-Cyprien');

export default function Page() {
  return (
    <QuartierPage
      citySlug="toulouse"
      cityName="Toulouse"
      quartierSlug="saint-cyprien"
      quartierName="Saint-Cyprien"
      description="Comparer des déménageurs vérifiés pour le quartier saint-cyprien"
      stats={{
        dossiers: "+45",
        demenageurs: "15",
        delai: "3-5"
      }}
      pourquoiMoverz="Saint-Cyprien est un quartier prisé de Toulouse. Les déménageurs partenaires Moverz connaissent les contraintes d'accès de ce quartier et s'y adaptent."
      accesStationnement="Saint-Cyprien présente des contraintes d'accès spécifiques. Les déménageurs partenaires sélectionnés par Moverz maîtrisent les créneaux autorisés et les zones de déchargement de ce quartier."
      destinationsFrequentes={[
        {
          href: "/toulouse-vers-paris",
          title: "Saint-Cyprien → Paris",
          description: "Flux régulier depuis ce quartier, accès livraison à anticiper."
        }
      ]}
      faq={[
        {
          question: "Comment gérer le stationnement à Saint-Cyprien ?",
          answer: "Les déménageurs partenaires Moverz connaissent les créneaux autorisés et les zones de déchargement temporaire."
        },
        {
          question: "Quels sont les tarifs pour Saint-Cyprien ?",
          answer: "Les tarifs dépendent du volume et des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
        }
      ]}
    />
  );
}
