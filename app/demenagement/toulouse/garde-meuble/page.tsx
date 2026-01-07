import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "toulouse",
  serviceSlug: "garde-meuble",
  title: "Garde-meuble à Toulouse : box, stockage, tarifs & devis | Moverz",
  description:
    "Garde-meuble à Toulouse : comparer box/self-stockage et solutions avec déménageur. Tarifs, tailles, sécurité, conseils + 3 à 5 devis gratuits via Moverz.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="toulouse"
      cityName="Toulouse"
      serviceSlug="garde-meuble"
      badge="Stockage"
      h1="Garde-meuble à Toulouse"
      subtitle="Box de stockage, conteneur, garde-meuble via déménageur… Voici comment choisir la bonne solution (sécurité, accès, taille) et obtenir des devis clairs."
      sections={[
        {
          title: "Quand un garde-meuble est utile à Toulouse ?",
          paragraphs: [
            "Le garde-meuble sert surtout dans les périodes de transition : déménagement en deux temps, travaux, vente/achat décalés, ou manque de place temporaire.",
            "À Toulouse, c’est aussi fréquent quand on doit libérer un logement rapidement (préavis), ou quand l’accès au nouveau logement impose une date précise (résidence, syndic, stationnement).",
          ],
          bullets: [
            "Transition entre deux logements (quelques jours à quelques mois).",
            "Travaux / rénovation : stocker meubles et cartons au sec.",
            "Mutation, mobilité, retour d’expatriation.",
            "Déménagement longue distance avec contraintes de dates.",
          ],
        },
        {
          title: "Box (self-stockage) vs garde-meuble “déménageur” : quelles différences ?",
          paragraphs: [
            "Deux grands modèles existent : le self-stockage (vous accédez à votre box quand vous voulez) et le garde-meuble “classique” (stockage en conteneur, accès sur rendez-vous).",
            "Le bon choix dépend de la fréquence d’accès, du volume, et du niveau de service attendu (emballage, manutention, transport).",
          ],
          bullets: [
            "Self-stockage : accès plus flexible, mais vous gérez souvent le transport et la manutention.",
            "Garde-meuble via déménageur : prise en charge complète (chargement/transport/stockage), accès moins fréquent mais logistique plus simple.",
            "Si vous déménagez, demander un devis “déménagement + stockage” est souvent plus rentable que tout découper en plusieurs prestataires.",
          ],
        },
        {
          title: "Tarifs : combien coûte un garde-meuble à Toulouse ?",
          paragraphs: [
            "Les prix varient surtout selon la taille (m²/m³), la durée, l’accessibilité du site et le niveau de sécurité (vidéosurveillance, contrôle d’accès, alarme).",
            "En pratique, prévoyez une fourchette mensuelle selon votre volume : studio, T2/T3, maison, et l’option self-stockage vs conteneur.",
          ],
          bullets: [
            "Astuce : partez du volume (m³) plutôt que du nombre de cartons. C’est ce qui détermine la taille réelle du box.",
            "Vérifiez l’assurance (valeur déclarée, exclusions, franchise) et les conditions de résiliation.",
            "Si l’accès est compliqué (étage sans ascenseur), le coût de manutention peut peser plus que le stockage lui-même.",
          ],
        },
        {
          title: "Comment obtenir un devis fiable (sans surprises)",
          paragraphs: [
            "Un devis utile doit préciser : volume estimé, durée de stockage, modalités d’accès, assurance, et surtout qui fait quoi (vous vs le prestataire).",
            "Avec Moverz, vous remplissez un seul dossier : l’IA aide à fiabiliser le volume pour comparer des devis sur une base identique.",
          ],
          bullets: [
            "Décrivez le volume et prenez 2–3 photos : salon, chambre, cave/garage.",
            "Indiquez les contraintes (étage, ascenseur, stationnement, rue étroite).",
            "Précisez la durée (même approximative) : 1 mois vs 6 mois change le type d’offre.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Quel est le meilleur choix : self-stockage ou garde-meuble avec déménageur ?",
          answer:
            "Si vous avez besoin d’accéder souvent à vos affaires, le self-stockage est plus adapté. Si votre priorité est la simplicité (transport + manutention + stockage), un déménageur avec garde-meuble intégré est souvent plus efficace.",
        },
        {
          question: "Comment choisir la bonne taille de box ?",
          answer:
            "Le plus fiable est de partir du volume (m³). Un studio tourne souvent autour de 10–15 m³, un T2/T3 autour de 20–35 m³, et une maison peut dépasser 40–80 m³ selon l’ameublement.",
        },
        {
          question: "Est-ce que mes biens sont assurés en garde-meuble ?",
          answer:
            "Souvent oui, mais les contrats varient. Vérifiez la valeur déclarée, les exclusions (objets de valeur, électronique), et la franchise. En cas de doute, prenez une option d’assurance complémentaire.",
        },
        {
          question: "Peut-on stocker pour une courte durée (quelques semaines) ?",
          answer:
            "Oui. La plupart des solutions acceptent la courte durée, mais attention aux frais fixes (mise en box, manutention). Un devis “déménagement + stockage” peut éviter des coûts doublons.",
        },
        {
          question: "Le prix dépend-il du quartier à Toulouse ?",
          answer:
            "Indirectement : ce sont surtout les contraintes d’accès (stationnement, étages, rues étroites) qui font varier le coût de manutention/transport, plus que l’adresse elle-même.",
        },
        {
          question: "Puis-je demander des devis sans être harcelé ?",
          answer:
            "Oui. Avec Moverz, vous recevez des devis standardisés sur un dossier anonyme, ce qui limite la pression commerciale et facilite la comparaison.",
        },
      ]}
    />
  );
}


