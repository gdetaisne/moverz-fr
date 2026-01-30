import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('strasbourg', 'Strasbourg', 'Allemagne');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="strasbourg"
      originCityName="Strasbourg"
      destination="Allemagne"
    />
  );
}
