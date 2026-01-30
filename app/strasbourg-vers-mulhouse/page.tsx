import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('strasbourg', 'Strasbourg', 'Mulhouse');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="strasbourg"
      originCityName="Strasbourg"
      destination="Mulhouse"
    />
  );
}
