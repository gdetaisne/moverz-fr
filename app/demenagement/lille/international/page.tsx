import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "lille",
  serviceSlug: "international",
  title: "Déménagement international depuis Lille : Belgique/UK/Europe, devis | Moverz",
  description:
    "Déménagement international depuis/vers Lille : Europe (Belgique, UK…), formalités, assurance, stockage. Conseils + 3 à 5 devis comparables via Moverz.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="lille"
      cityName="Lille"
      serviceSlug="international"
      badge="International"
      h1="Déménagement international depuis Lille"
      subtitle="Lille est un carrefour européen : déménager vers/depuis la Belgique, le Royaume-Uni ou ailleurs en Europe demande une bonne organisation (transport, documents, assurance)."
      sections={[
        {
          title: "Pourquoi l’international est un cas à part",
          paragraphs: [
            "Un déménagement international implique souvent plus de coordination : délais, documentation, assurance, et parfois du stockage temporaire.",
            "La clé est un devis transparent et une méthode claire (volume, accès, dates, livraison).",
          ],
          bullets: [
            "Organisation : dates et créneaux côté départ/arrivée.",
            "Assurance : couverture transport + manutention.",
            "Stockage temporaire : utile si dates incertaines.",
          ],
        },
        {
          title: "Europe (Belgique/Benelux/UK) : le routier est souvent la norme",
          paragraphs: [
            "Depuis Lille, l’Europe proche est particulièrement accessible : le transport routier est généralement le plus simple.",
            "Un devis sérieux précise ce qui est inclus (emballage, démontage, protections, délais, assurance) et les éventuelles formalités selon destination.",
          ],
          bullets: [
            "Routier : flexible et rapide pour Europe proche.",
            "Groupage possible selon période (si volume compatible).",
            "Accès : anticipez stationnement et portage des deux côtés.",
          ],
        },
        {
          title: "Documents et formalités : ce qu’il faut anticiper",
          paragraphs: [
            "Selon la destination, des documents peuvent être demandés (inventaire, justificatifs).",
            "Une bonne préparation évite des retards et incompréhensions.",
          ],
          bullets: [
            "Inventaire (utile aussi pour l’assurance).",
            "Valeur déclarée des biens pour la couverture.",
            "Contraintes locales d’accès/horaires côté arrivée.",
          ],
        },
        {
          title: "Comparer des devis (sans perdre du temps)",
          paragraphs: [
            "La comparaison n’a de valeur que si les offres sont comparables : même volume, même destination, même niveau de service.",
            "Moverz vous aide à standardiser votre dossier pour obtenir des devis plus lisibles, sans spam.",
          ],
          bullets: [
            "Un seul dossier, plusieurs offres structurées.",
            "Moins de flou sur ce qui est inclus (assurance, délais, accès).",
            "Vous gardez le contrôle : dossier anonyme.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Lille → Belgique : quelles formalités ?",
          answer:
            "Selon le cas, des documents peuvent être demandés. Le plus important est un devis clair (ce qui est inclus) et un inventaire utile pour l’assurance.",
        },
        {
          question: "Quel mode de transport choisir ?",
          answer:
            "Pour l’Europe proche (Belgique/Benelux/UK), le routier est généralement le plus simple. Pour des destinations lointaines, on peut passer au maritime/aérien selon volume et urgence.",
        },
        {
          question: "Que couvre l’assurance ?",
          answer:
            "Ça dépend du contrat. Vérifiez valeur déclarée, exclusions, et couverture sur toutes les étapes (manutention, transport, livraison).",
        },
        {
          question: "Dois-je faire un inventaire ?",
          answer:
            "C’est recommandé : cela aide à la fois à l’assurance et à la clarté du devis.",
        },
        {
          question: "Puis-je stocker mes affaires en attendant ?",
          answer:
            "Oui, un garde-meuble temporaire peut être utile si dates incertaines. Indiquez la durée estimée et le niveau d’accès souhaité.",
        },
        {
          question: "Puis-je comparer plusieurs devis gratuitement ?",
          answer:
            "Oui. Avec Moverz, vous pouvez demander 3 à 5 devis comparables via un seul dossier, sans engagement.",
        },
      ]}
    />
  );
}


