import { HubQuartiersPage, generateHubQuartiersMetadata } from "@/components/templates/HubQuartiersPage";
import { cityData } from "@/lib/cityData";

const city = cityData['nantes'];

export const metadata = generateHubQuartiersMetadata('nantes', 'Nantes');

export default function QuartiersPage() {
  return (
    <HubQuartiersPage
      citySlug="nantes"
      cityName="Nantes"
      neighborhoods={city.neighborhoods}
    />
  );
}
