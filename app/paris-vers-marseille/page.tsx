import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('paris', 'marseille');

export default function Page() {
  return <PremiumCorridorPage originSlug="paris" destinationSlug="marseille" />;
}
