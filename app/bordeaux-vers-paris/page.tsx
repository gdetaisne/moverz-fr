import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('bordeaux', 'paris');

export default function Page() {
  return <PremiumCorridorPage originSlug="bordeaux" destinationSlug="paris" />;
}
