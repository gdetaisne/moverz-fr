import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { ComparisonTableLarge } from "../ComparisonTableLarge";
import { CheckCircle } from "lucide-react";
import { FadeUpSection, StaggerContainer, StaggerItem } from "@/components/motion";

const benefits = [
  "Standardisation totale : mêmes lignes, mêmes unités",
  "Options clairement identifiées et comparables",
  "Pas de surprises : tout est détaillé",
];

export function WowComparisonSection() {
  return (
    <FadeUpSection className="bg-[rgb(var(--surface))] py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16 items-start">
          {/* Gauche : Copy */}
          <div className="space-y-6">
            <SectionHeader
              align="left"
              title="Voyez exactement ce que vous comparez."
              description="Fini les devis opaques. Chaque ligne de prix est standardisée, chaque option est identifiée. Comparez vraiment."
            />
            
            <StaggerContainer className="space-y-4">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index} className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--accent-2))]" />
                  <p className="text-base leading-relaxed text-[rgb(var(--text-2))]">
                    {benefit}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Droite : Table */}
          <div>
            <ComparisonTableLarge />
          </div>
        </div>
      </Container>
    </FadeUpSection>
  );
}
