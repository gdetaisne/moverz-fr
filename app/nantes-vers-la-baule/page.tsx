import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('nantes', 'Nantes', 'La Baule');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="nantes"
      originCityName="Nantes"
      destination="La Baule"
    />
  );
}
