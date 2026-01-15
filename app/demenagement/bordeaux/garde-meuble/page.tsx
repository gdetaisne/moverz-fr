import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "bordeaux",
  serviceSlug: "garde-meuble",
  title: "Garde-meuble à Bordeaux : box, stockage, tarifs & devis | Moverz",
  description:
    "Garde-meuble à Bordeaux : comparer box/self-stockage et solutions avec déménageur. Tailles, sécurité, assurance, conseils + 3 devis minimum via Moverz.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="bordeaux"
      cityName="Bordeaux"
      serviceSlug="garde-meuble"
      badge="Stockage"
      h1="Garde-meuble à Bordeaux"
      subtitle="Box de stockage, conteneur, garde-meuble via déménageur… Voici comment choisir la bonne solution (sécurité, accès, taille) et obtenir des devis clairs."
      sections={[
        {
          title: "Quand un garde-meuble est utile à Bordeaux ?",
          paragraphs: [
            "Le garde-meuble est idéal en transition : déménagement en deux temps, travaux, vente/achat décalés, ou manque de place temporaire.",
            "À Bordeaux, c’est fréquent quand les dates ne s’alignent pas, ou quand l’accès (centre, stationnement) impose une organisation stricte.",
          ],
          bullets: [
            "Transition entre deux logements (jours à mois).",
            "Travaux : stocker meubles et cartons à l’abri.",
            "Mutation/mobilité (France ou international).",
            "Longue distance avec dates incertaines.",
          ],
        },
        {
          title: "Self-stockage vs garde-meuble “déménageur”",
          paragraphs: [
            "Le self-stockage = accès flexible à votre box. Le garde-meuble “classique” = stockage en conteneur, accès sur rendez-vous.",
            "Le bon choix dépend de la fréquence d’accès et du niveau de service souhaité (transport/manutention).",
          ],
          bullets: [
            "Self-stockage : accès plus libre, mais transport souvent à votre charge.",
            "Garde-meuble via déménageur : prise en charge complète, plus simple si accès difficile.",
            "Si vous déménagez, un devis “déménagement + stockage” peut être plus rentable.",
          ],
        },
        {
          title: "Tarifs : comment estimer le budget",
          paragraphs: [
            "Le prix dépend surtout de la taille (m²/m³), de la durée et du niveau de sécurité (vidéosurveillance, contrôle d’accès).",
            "Pensez aussi aux coûts de manutention : en centre-ville, c’est parfois le poste principal.",
          ],
          bullets: [
            "Raisonnez en volume (m³) pour choisir la taille du box.",
            "Vérifiez assurance (valeur déclarée, exclusions, franchise).",
            "Attention aux frais fixes : mise en box, manutention, dossier.",
          ],
        },
        {
          title: "Obtenir un devis fiable (sans surprises)",
          paragraphs: [
            "Un devis utile précise : volume, durée, accès, assurance, modalités d’accès et responsabilités (vous vs prestataire).",
            "Moverz standardise votre dossier et l’IA aide à fiabiliser le volume pour comparer sur une base identique.",
          ],
          bullets: [
            "2–3 photos des pièces principales pour estimer le volume.",
            "Contraintes : étage, ascenseur, stationnement, distance de portage.",
            "Durée estimée (1 mois vs 6 mois change l’offre).",
          ],
        },
      ]}
      faqs={[
        {
          question: "Self-stockage ou garde-meuble avec déménageur : que choisir ?",
          answer:
            "Si vous devez accéder souvent à vos affaires, le self-stockage est adapté. Si vous voulez la simplicité (transport + manutention + stockage), un déménageur avec garde-meuble intégré est souvent plus efficace.",
        },
        {
          question: "Comment choisir la taille de box ?",
          answer:
            "Le plus fiable est de partir du volume (m³). Un studio tourne souvent autour de 10–15 m³, un T2/T3 autour de 20–35 m³, et une maison peut dépasser 40–80 m³ selon l’ameublement.",
        },
        {
          question: "Mes biens sont-ils assurés ?",
          answer:
            "Souvent oui, mais les contrats varient. Vérifiez valeur déclarée, exclusions et franchise. En cas de doute, prenez une option d’assurance complémentaire.",
        },
        {
          question: "Puis-je stocker seulement quelques semaines ?",
          answer:
            "Oui. Attention aux frais fixes (mise en box, manutention). Un devis “déménagement + stockage” peut éviter des coûts doublons.",
        },
        {
          question: "Le centre-ville de Bordeaux augmente-t-il le coût ?",
          answer:
            "Indirectement : ce sont les contraintes d’accès/stationnement et le temps de portage qui font varier le coût, plus que l’adresse elle-même.",
        },
        {
          question: "Puis-je comparer des devis sans spam ?",
          answer:
            "Oui. Moverz fonctionne avec un dossier anonyme et des devis standardisés : moins de pression commerciale et une comparaison plus simple.",
        },
      ]}
    />
  );
}


