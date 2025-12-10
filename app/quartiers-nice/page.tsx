import { HubQuartiersPage, generateHubQuartiersMetadata } from "@/components/templates/HubQuartiersPage";
import { cityData } from "@/lib/cityData";

const city = cityData['nice'];

export const metadata = generateHubQuartiersMetadata('nice', 'Nice');

export default function QuartiersPage() {
  return (
    <HubQuartiersPage
      citySlug="nice"
      cityName="Nice"
      neighborhoods={city.neighborhoods}
    />
  );
}
