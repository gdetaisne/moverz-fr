import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('lille', 'lyon');

export default function Page() {
  return <PremiumCorridorPage originSlug="lille" destinationSlug="lyon" />;
}
