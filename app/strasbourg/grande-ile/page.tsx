import { QuartierPage, generateQuartierMetadata } from "@/components/templates/QuartierPage";

export const metadata = generateQuartierMetadata('strasbourg', 'Strasbourg', 'grande-ile', 'Grande-Île');

export default function Page() {
  return (
    <QuartierPage
      citySlug="strasbourg"
      cityName="Strasbourg"
      quartierSlug="grande-ile"
      quartierName="Grande-Île"
      description="Comparer des déménageurs vérifiés pour le quartier grande-ile"
      stats={{
        dossiers: "+45",
        demenageurs: "15",
        delai: "3-5"
      }}
      pourquoiMoverz="Grande-Île est un quartier prisé de Strasbourg. Les déménageurs partenaires Moverz connaissent les contraintes d'accès de ce quartier et s'y adaptent."
      accesStationnement="Grande-Île présente des contraintes d'accès spécifiques. Les déménageurs partenaires sélectionnés par Moverz maîtrisent les créneaux autorisés et les zones de déchargement de ce quartier."
      destinationsFrequentes={[
        {
          href: "/strasbourg-vers-paris",
          title: "Grande-Île → Paris",
          description: "Flux régulier depuis ce quartier, accès livraison à anticiper."
        }
      ]}
      faq={[
        {
          question: "Comment gérer le stationnement à Grande-Île ?",
          answer: "Les déménageurs partenaires Moverz connaissent les créneaux autorisés et les zones de déchargement temporaire."
        },
        {
          question: "Quels sont les tarifs pour Grande-Île ?",
          answer: "Les tarifs dépendent du volume et des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
        }
      ]}
    />
  );
}
