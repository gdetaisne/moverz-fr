import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "marseille",
  serviceSlug: "garde-meuble",
  title: "Garde-meuble à Marseille : box, stockage, tarifs & devis | Moverz",
  description:
    "Garde-meuble à Marseille : comparer box/self-stockage et solutions avec déménageur. Tarifs, tailles, sécurité, conseils + 5+ devis gratuits via Moverz.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="marseille"
      cityName="Marseille"
      serviceSlug="garde-meuble"
      badge="Stockage"
      h1="Garde-meuble à Marseille"
      subtitle="Box de stockage, conteneur, garde-meuble via déménageur… Voici comment choisir la bonne solution (sécurité, accès, taille) et obtenir des devis clairs."
      sections={[
        {
          title: "Quand un garde-meuble est utile à Marseille ?",
          paragraphs: [
            "Le garde-meuble sert surtout dans les périodes de transition : déménagement en deux temps, travaux, vente/achat décalés, ou manque de place temporaire.",
            "À Marseille, c’est aussi fréquent quand la date d’entrée dépend d’un syndic/résidence ou quand l’accès/stationnement impose une organisation stricte.",
          ],
          bullets: [
            "Transition entre deux logements (jours à mois).",
            "Travaux : stocker meubles et cartons à l’abri.",
            "Mutation / mobilité / retour d’expatriation.",
            "Déménagement longue distance avec dates incertaines.",
          ],
        },
        {
          title: "Self-stockage vs garde-meuble “déménageur”",
          paragraphs: [
            "Le self-stockage = vous accédez librement à votre box. Le garde-meuble “classique” = stockage en conteneur, accès sur rendez-vous.",
            "Le bon choix dépend surtout de la fréquence d’accès et du niveau de service souhaité (transport/manutention).",
          ],
          bullets: [
            "Self-stockage : accès flexible, mais vous gérez souvent le transport.",
            "Garde-meuble via déménageur : prise en charge complète, logistique simplifiée.",
            "Si vous déménagez, un devis “déménagement + stockage” est souvent plus rentable.",
          ],
        },
        {
          title: "Tarifs : comment estimer le budget",
          paragraphs: [
            "Les prix varient surtout selon la taille (m²/m³), la durée, l’accessibilité du site et le niveau de sécurité.",
            "Pensez aussi aux coûts de manutention si les accès sont difficiles : c’est parfois ce qui pèse le plus.",
          ],
          bullets: [
            "Raisonnez en volume (m³) pour choisir la taille du box.",
            "Vérifiez assurance (valeur déclarée, exclusions, franchise).",
            "Attention aux frais fixes : mise en box, manutention, dossier.",
          ],
        },
        {
          title: "Devis fiable : les infos qui changent tout",
          paragraphs: [
            "Un devis utile précise : volume, durée, accès, assurance, modalités d’accès et responsabilités (vous vs prestataire).",
            "Avec Moverz, un seul dossier : l’IA aide à fiabiliser le volume pour comparer sur une base identique.",
          ],
          bullets: [
            "2–3 photos des pièces principales pour estimer le volume.",
            "Contraintes (étage, ascenseur, stationnement, rue étroite).",
            "Durée estimée (1 mois vs 6 mois change l’offre).",
          ],
        },
      ]}
      faqs={[
        {
          question: "Self-stockage ou garde-meuble avec déménageur : que choisir ?",
          answer:
            "Si vous avez besoin d’accéder souvent à vos affaires, le self-stockage est adapté. Si vous voulez la simplicité (transport + manutention + stockage), un déménageur avec garde-meuble intégré est souvent plus efficace.",
        },
        {
          question: "Comment choisir la taille de box ?",
          answer:
            "Le plus fiable est de partir du volume (m³). Un studio tourne souvent autour de 10–15 m³, un T2/T3 autour de 20–35 m³, et une maison peut dépasser 40–80 m³ selon l’ameublement.",
        },
        {
          question: "Mes biens sont-ils assurés ?",
          answer:
            "Souvent oui, mais les contrats varient. Vérifiez la valeur déclarée, les exclusions et la franchise. En cas de doute, prenez une option d’assurance complémentaire.",
        },
        {
          question: "Puis-je stocker seulement quelques semaines ?",
          answer:
            "Oui. Attention aux frais fixes (mise en box, manutention). Un devis “déménagement + stockage” peut éviter des coûts doublons.",
        },
        {
          question: "Le prix dépend-il du quartier à Marseille ?",
          answer:
            "Indirectement : ce sont surtout les contraintes d’accès et de stationnement qui font varier le coût de manutention/transport.",
        },
        {
          question: "Puis-je comparer des devis sans être harcelé ?",
          answer:
            "Oui. Moverz fonctionne avec un dossier anonyme et des devis standardisés : moins de pression commerciale et une comparaison plus simple.",
        },
      ]}
    />
  );
}


