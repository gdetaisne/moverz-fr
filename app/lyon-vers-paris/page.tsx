import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('lyon', 'paris');

export default function Page() {
  return <PremiumCorridorPage originSlug="lyon" destinationSlug="paris" />;
}
