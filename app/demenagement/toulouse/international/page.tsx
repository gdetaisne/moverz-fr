import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "toulouse",
  serviceSlug: "international",
  title: "Déménagement international depuis Toulouse : démarches, devis",
  description:
    "Déménagement international depuis/vers Toulouse : transport (route, maritime, aérien), douane, assurance, stockage. Conseils + 3 devis minimum via Moverz.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="toulouse"
      cityName="Toulouse"
      serviceSlug="international"
      badge="International"
      h1="Déménagement international depuis Toulouse"
      subtitle="Déménager à l’étranger ajoute de la complexité (douanes, délais, assurance). Voici les points clés pour choisir un prestataire fiable et obtenir des devis clairs."
      sections={[
        {
          title: "Pourquoi l’international est un cas à part",
          paragraphs: [
            "Un déménagement international implique souvent des formalités (douane, documents, inventaire) et des délais plus longs.",
            "Le bon prestataire doit gérer la logistique et vous accompagner sur les étapes administratives, pas seulement “transporter des cartons”.",
          ],
          bullets: [
            "Documentation et inventaire : indispensables pour les formalités.",
            "Assurance : plus critique sur longue distance et multi-transport.",
            "Stockage temporaire : fréquent en cas de dates incertaines.",
          ],
        },
        {
          title: "Modes de transport : route, maritime, aérien",
          paragraphs: [
            "Le choix dépend du pays, du volume et du niveau d’urgence. En Europe, la route est souvent la norme. Hors Europe, le maritime est courant pour les gros volumes, l’aérien pour l’urgence.",
            "Un devis sérieux détaille le mode de transport, les délais estimés, et les étapes (collecte, transit, livraison).",
          ],
          bullets: [
            "Routier (Europe) : flexible, souvent le plus simple.",
            "Maritime : adapté aux gros volumes, délais plus longs.",
            "Aérien : rapide mais coûteux, souvent pour petit volume/urgent.",
          ],
        },
        {
          title: "Douane & documents : ce qu’il faut anticiper",
          paragraphs: [
            "Les exigences varient selon la destination. Préparez un inventaire clair et vérifiez les restrictions (alcool, produits, objets spécifiques).",
            "Un accompagnement sur la documentation évite les blocages et frais inattendus.",
          ],
          bullets: [
            "Inventaire détaillé (par carton/lot) et valeur déclarée.",
            "Documents d’identité et justificatifs selon pays.",
            "Délais administratifs à intégrer dans la planification.",
          ],
        },
        {
          title: "Comparer des devis (sans perdre du temps)",
          paragraphs: [
            "En international, la comparaison n’est utile que si les offres sont comparables : même volume, même destination, même niveau de service (emballage, formalités, livraison).",
            "Moverz vous aide à standardiser votre dossier pour obtenir des devis plus lisibles et décider sereinement.",
          ],
          bullets: [
            "Un seul dossier, plusieurs offres structurées.",
            "Moins de flou sur ce qui est inclus (formalités, assurance, délais).",
            "Vous gardez le contrôle : pas de pression commerciale.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Combien de temps à l’avance faut-il prévoir ?",
          answer:
            "Souvent 6–10 semaines, surtout si le transport est maritime ou s’il y a des formalités importantes. Plus vous anticipez, plus vous avez de choix sur les dates et les prix.",
        },
        {
          question: "Quel est le mode de transport le plus courant ?",
          answer:
            "En Europe, le routier est très fréquent. Hors Europe, le maritime est souvent choisi pour les gros volumes, l’aérien pour l’urgence ou un petit volume.",
        },
        {
          question: "Que couvre l’assurance en international ?",
          answer:
            "Ça dépend du contrat. Vérifiez valeur déclarée, exclusions, et couverture sur toutes les étapes (manutention, transit, livraison).",
        },
        {
          question: "Dois-je faire une liste détaillée de mes affaires ?",
          answer:
            "Oui, c’est généralement nécessaire pour la douane et pour l’assurance. Un inventaire structuré évite des retards et des frais.",
        },
        {
          question: "Puis-je stocker mes affaires en attendant la livraison ?",
          answer:
            "Oui, le stockage temporaire est fréquent (garde-meuble). Précisez la durée estimée et le niveau d’accès souhaité (self-stockage vs conteneur).",
        },
        {
          question: "Puis-je comparer plusieurs devis gratuitement ?",
          answer:
            "Oui. Avec Moverz, vous pouvez demander plusieurs devis sur une base standardisée, sans engagement.",
        },
      ]}
    />
  );
}


