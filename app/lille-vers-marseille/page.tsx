import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('lille', 'marseille');

export default function Page() {
  return <PremiumCorridorPage originSlug="lille" destinationSlug="marseille" />;
}
