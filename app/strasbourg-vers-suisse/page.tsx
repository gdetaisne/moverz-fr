import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('strasbourg', 'Strasbourg', 'Suisse');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="strasbourg"
      originCityName="Strasbourg"
      destination="Suisse"
      distance="500 km"
      tempsMoyen="6h00"
      periodeConseillee="Mai-Sept"
      prixIndicatifs={[
        {
          type: "Studio/T1",
          prix: "800-1200€",
          description: "Volume : 10-15 m³"
        },
        {
          type: "T2/T3",
          prix: "1200-1800€",
          description: "Volume : 20-35 m³"
        },
        {
          type: "Maison",
          prix: "1800-3000€",
          description: "Volume : 40-80 m³"
        }
      ]}
      accesArrivee="Suisse présente des défis spécifiques pour les déménagements. Nos partenaires déménageurs connaissent parfaitement les contraintes locales."
      conseils={[
        "Anticipez les créneaux de livraison",
        "Prévoyez des protections renforcées pour les objets fragiles",
        "Vérifiez les contraintes d'accès à l'arrivée",
        "Planifiez le stationnement temporaire avec votre déménageur"
      ]}
      faq={[
        {
          question: "Quels sont les délais pour un déménagement Strasbourg → Suisse ?",
          answer: "Nos partenaires déménageurs peuvent généralement intervenir sous 7 jours. Pour les déménagements urgents, certains peuvent se libérer en 48h selon la période."
        },
        {
          question: "Quels sont les tarifs pour Strasbourg → Suisse ?",
          answer: "Les tarifs varient selon le volume et les contraintes d'accès. Comptez 800-1200€ pour un studio, 1200-1800€ pour un T2/T3, 1800-3000€ pour une maison."
        }
      ]}
    />
  );
}
