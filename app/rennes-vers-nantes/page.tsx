import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('rennes', 'Rennes', 'Nantes');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="rennes"
      originCityName="Rennes"
      destination="Nantes"
    />
  );
}
