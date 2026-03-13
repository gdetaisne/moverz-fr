import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('lille', 'le-havre');

export default function Page() {
  return <PremiumCorridorPage originSlug="lille" destinationSlug="le-havre" />;
}
