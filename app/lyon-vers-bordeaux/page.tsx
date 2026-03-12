import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('lyon', 'bordeaux');

export default function Page() {
  return <PremiumCorridorPage originSlug="lyon" destinationSlug="bordeaux" />;
}
