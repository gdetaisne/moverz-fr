import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('bordeaux', 'rennes');

export default function Page() {
  return <PremiumCorridorPage originSlug="bordeaux" destinationSlug="rennes" />;
}
