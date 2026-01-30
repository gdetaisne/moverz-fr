import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('montpellier', 'Montpellier', 'Lyon');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="montpellier"
      originCityName="Montpellier"
      destination="Lyon"
    />
  );
}
