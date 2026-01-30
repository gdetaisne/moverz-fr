import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('toulouse', 'Toulouse', 'Marseille');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="toulouse"
      originCityName="Toulouse"
      destination="Marseille"
    />
  );
}
