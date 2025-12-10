import { HubQuartiersPage, generateHubQuartiersMetadata } from "@/components/templates/HubQuartiersPage";
import { cityData } from "@/lib/cityData";

const city = cityData['rennes'];

export const metadata = generateHubQuartiersMetadata('rennes', 'Rennes');

export default function QuartiersPage() {
  return (
    <HubQuartiersPage
      citySlug="rennes"
      cityName="Rennes"
      neighborhoods={city.neighborhoods}
    />
  );
}
