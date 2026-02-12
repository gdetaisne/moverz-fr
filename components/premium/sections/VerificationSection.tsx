import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { VerificationCard } from "../VerificationCard";

export function VerificationSection() {
  return (
    <section className="bg-[rgb(var(--primary))] py-16 text-[rgb(var(--primary-contrast))] md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <SectionHeader
              align="left"
              title={
                <>
                  On vérifie la solidité
                  <br />
                  des entreprises. Point.
                </>
              }
              description="Chaque déménageur partenaire passe un contrôle rigoureux : assurance, licence de transport, et solvabilité financière via Creditsafe. Vous ne comparez que des pros fiables."
              className="text-[rgb(var(--primary-contrast))]"
            />
            <p className="text-sm text-[rgb(var(--primary-contrast))]/70">
              Mis à jour tous les 3 mois • Données certifiées
            </p>
          </div>

          <div className="relative">
            <VerificationCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
