import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('tours', 'paris');

export default function Page() {
  return <PremiumCorridorPage originSlug="tours" destinationSlug="paris" />;
}
