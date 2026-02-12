import { Container } from "../Container";
import { Button } from "../Button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="bg-[rgb(var(--primary))] py-20 text-[rgb(var(--primary-contrast))] md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Prêt à comparer vos devis ?
          </h2>
          <p className="text-lg text-[rgb(var(--primary-contrast))]/80 md:text-xl">
            Rejoignez des milliers de particuliers qui ont déménagé sereinement.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="primary"
              className="bg-[rgb(var(--accent))] text-[rgb(var(--primary))] hover:bg-[rgb(var(--accent))]/90 focus-visible:ring-[rgb(var(--accent))]"
              onClick={() => {
                const form = document.getElementById("tunnel-entry-form");
                if (form) {
                  form.scrollIntoView({ behavior: "smooth", block: "center" });
                }
              }}
            >
              Obtenir mes devis
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-[rgb(var(--primary-contrast))]/60">
            <span>100% gratuit</span>
            <span>·</span>
            <span>Sans engagement</span>
            <span>·</span>
            <span>Sans appels</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
