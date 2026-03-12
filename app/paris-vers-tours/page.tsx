import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('paris', 'tours');

export default function Page() {
  return <PremiumCorridorPage originSlug="paris" destinationSlug="tours" />;
}
