import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../Card";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Mêmes lignes de prix (main d'œuvre, transport, emballage, assurance)",
  "Mêmes unités (€/m³, €/km, €/heure)",
  "Options clairement identifiées et comparables",
];

export function ComparableQuotesSection() {
  return (
    <section className="bg-[rgb(var(--surface))] py-16 md:py-24">
      <Container>
        <SectionHeader
          title="Enfin des devis lisibles."
          description="Fini les devis opaques. Comparez vraiment."
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--accent-2))]" />
                <p className="text-base leading-relaxed text-[rgb(var(--text-2))]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <Card shadow className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[rgb(var(--border))] pb-3">
                <span className="text-sm font-semibold text-[rgb(var(--text))]">Ligne de prix</span>
                <span className="text-sm font-semibold text-[rgb(var(--text))]">Devis A</span>
                <span className="text-sm font-semibold text-[rgb(var(--text))]">Devis B</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-[rgb(var(--text-2))]">Main d'œuvre</span>
                <span className="font-medium text-[rgb(var(--text))]">890 €</span>
                <span className="font-medium text-[rgb(var(--text))]">920 €</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-[rgb(var(--text-2))]">Transport (350 km)</span>
                <span className="font-medium text-[rgb(var(--text))]">450 €</span>
                <span className="font-medium text-[rgb(var(--text))]">480 €</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-[rgb(var(--text-2))]">Cartons</span>
                <span className="font-semibold text-[rgb(var(--accent-2))]">Inclus</span>
                <span className="font-medium text-[rgb(var(--text))]">150 €</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-[rgb(var(--text-2))]">Assurance</span>
                <span className="font-medium text-[rgb(var(--text))]">80 €</span>
                <span className="font-semibold text-[rgb(var(--accent-2))]">Inclus</span>
              </div>
              
              <div className="flex items-center justify-between border-t border-[rgb(var(--border))] pt-3 text-base font-bold">
                <span className="text-[rgb(var(--text))]">Total TTC</span>
                <span className="text-[rgb(var(--primary))]">1 420 €</span>
                <span className="text-[rgb(var(--primary))]">1 550 €</span>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
