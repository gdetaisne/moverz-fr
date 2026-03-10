import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('paris', 'lyon');

export default function Page() {
  return <PremiumCorridorPage originSlug="paris" destinationSlug="lyon" />;
}
