import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('toulouse', 'Toulouse', 'Lyon');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="toulouse"
      originCityName="Toulouse"
      destination="Lyon"
    />
  );
}
