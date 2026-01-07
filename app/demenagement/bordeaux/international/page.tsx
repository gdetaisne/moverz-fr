import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "bordeaux",
  serviceSlug: "international",
  title: "Déménagement international depuis Bordeaux : Europe/Outre-mer, devis | Moverz",
  description:
    "Déménagement international depuis/vers Bordeaux : Europe, Outre-mer, formalités, assurance, stockage. Conseils + 5+ devis comparables via Moverz.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="bordeaux"
      cityName="Bordeaux"
      serviceSlug="international"
      badge="International"
      h1="Déménagement international depuis Bordeaux"
      subtitle="Bordeaux est tournée vers l’Atlantique et l’Europe : déménager à l’international demande surtout une bonne organisation (transport, documents, assurance). Voici l’essentiel + des devis comparables."
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
          title: "Europe (Espagne/Portugal) vs destinations lointaines",
          paragraphs: [
            "Pour l’Europe proche, le transport routier est souvent le plus simple.",
            "Pour des destinations lointaines (dont Outre-mer selon cas), la logistique peut demander plus d’étapes : mieux vaut clarifier ce qui est inclus au devis.",
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
          question: "Bordeaux → Espagne/Portugal : quel transport choisir ?",
          answer:
            "Souvent le routier est le plus simple (Europe proche). Le devis doit préciser délais, assurance et ce qui est inclus (emballage, démontage, protections).",
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
          question: "Combien de temps à l’avance faut-il prévoir ?",
          answer:
            "Plus vous anticipez (surtout en haute saison), plus vous avez de choix sur les dates et les prix. Pour l’international, prévoir plusieurs semaines est généralement plus confortable.",
        },
        {
          question: "Puis-je comparer plusieurs devis gratuitement ?",
          answer:
            "Oui. Avec Moverz, vous pouvez demander 5+ devis comparables via un seul dossier, sans engagement.",
        },
      ]}
    />
  );
}


