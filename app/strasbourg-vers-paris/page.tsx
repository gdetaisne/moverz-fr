import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('strasbourg', 'paris');

export default function Page() {
  return <PremiumCorridorPage originSlug="strasbourg" destinationSlug="paris" />;
}
