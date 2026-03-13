import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('nantes', 'toulouse');

export default function Page() {
  return <PremiumCorridorPage originSlug="nantes" destinationSlug="toulouse" />;
}
