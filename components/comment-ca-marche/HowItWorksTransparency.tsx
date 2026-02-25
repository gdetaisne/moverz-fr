"use client";

import { CheckCircle2, Lock, Headset } from "lucide-react";

export default function HowItWorksTransparency() {
  const items = [
    {
      icon: CheckCircle2,
      title: "Comparez sereinement",
      desc: "Devis détaillés (inclus vs options), base commune d'informations, comparaison plus simple.",
    },
    {
      icon: Lock,
      title: "Zéro harcèlement",
      desc: "Nous centralisons tous les échanges. Votre identité n'est jamais partagée tant que vous ne choisissez pas un déménageur.",
      link: "/blog/demenagement-sans-harcelement-protection-vie-privee",
      linkText: "En savoir plus"
    },
    {
      icon: Headset,
      title: "Support jusqu'au jour J",
      desc: "Une question avant de choisir ? Un imprévu ? Support 7j/7 pour vous aider à clarifier et avancer.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-text)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Étape 3
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--color-text)] leading-tight">
              Choisissez en toute transparence
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]/70 leading-relaxed">
              Vous gardez le contrôle : vous comparez les devis, vous posez vos questions, et vous choisissez le déménageur qui correspond le mieux à votre projet.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/villes/"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg)] transition-colors"
              >
                Voir les guides par ville
                <span>→</span>
              </a>
              <a
                href="/faq/"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-dark)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-bg-dark)] transition-colors"
              >
                Lire la FAQ
                <span>→</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 grid gap-4 md:grid-cols-3">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <div
                  key={it.title}
                  className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 mb-4">
                    <Icon className="w-6 h-6 text-[var(--color-text)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{it.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]/70 leading-relaxed">
                    {it.desc}
                    {it.link && (
                      <a href={it.link} className="text-[var(--color-accent)] hover:underline font-medium ml-1">
                        {it.linkText}
                      </a>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
