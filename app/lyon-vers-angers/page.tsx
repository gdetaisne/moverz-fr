import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('lyon', 'angers');

export default function Page() {
  return <PremiumCorridorPage originSlug="lyon" destinationSlug="angers" />;
}
