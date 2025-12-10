import { HubQuartiersPage, generateHubQuartiersMetadata } from "@/components/templates/HubQuartiersPage";
import { cityData } from "@/lib/cityData";

const city = cityData['toulouse'];

export const metadata = generateHubQuartiersMetadata('toulouse', 'Toulouse');

export default function QuartiersPage() {
  return (
    <HubQuartiersPage
      citySlug="toulouse"
      cityName="Toulouse"
      neighborhoods={city.neighborhoods}
    />
  );
}
