import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('rennes', 'Rennes', 'Angers');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="rennes"
      originCityName="Rennes"
      destination="Angers"
    />
  );
}
