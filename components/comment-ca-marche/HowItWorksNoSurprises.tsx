"use client";

import { Shield, ClipboardList, CheckCircle2, PhoneOff } from "lucide-react";

export default function HowItWorksNoSurprises() {
  const points = [
    {
      icon: ClipboardList,
      title: "Dossier clair → devis plus fiables",
      desc: "Les déménageurs chiffrent sur une base identique : moins d’approximation, moins de surprises.",
    },
    {
      icon: PhoneOff,
      title: "Pas de spam d’appels",
      desc: "Votre dossier n’est pas envoyé à 10 sociétés. Vous recevez des devis écrits, comparables, au calme.",
    },
    {
      icon: CheckCircle2,
      title: "Devis plus engageants",
      desc: "Le chiffrage se fait sur une base commune (infos), ce qui réduit le risque de “volume sous-estimé”.",
    },
  ];

  return (
    <section className="py-16 md:py-22 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-text)]">
              <span className="h-2 w-2 rounded-full bg-brand-turquoise" />
              Le déménagement sans mauvaises surprises
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] leading-tight">
              Moins d&apos;approximation.
              <br />
              <span className="text-[#2B7A78]">Plus</span> de sérénité.
            </h2>

            <p className="text-lg text-[var(--color-text-secondary)]/70 leading-relaxed">
              Chez Moverz, on fait différemment : au lieu d&apos;un formulaire de 2 minutes suivi de démarchage, on
              qualifie d&apos;abord votre dossier avec des informations standardisées. Résultat : des devis plus fiables et un risque réduit de
              supplément &quot;volume sous-estimé&quot; le jour J.
            </p>

            <div className="flex items-center gap-3 rounded-2xl border border-brand-turquoise/25 bg-white px-5 py-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-turquoise/10">
                <Shield className="w-5 h-5 text-[var(--color-text)]" />
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]/80">
                <span className="font-semibold text-[var(--color-text)]">Même base d&apos;infos</span> pour tous les devis (accès + contraintes).
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-4 md:grid-cols-3">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-turquoise/6 via-transparent to-[#2B7A78]/6 opacity-70" />
                  <div className="relative space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-turquoise/10 border border-brand-turquoise/20">
                      <Icon className="w-6 h-6 text-[var(--color-text)]" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-[var(--color-text)]">{p.title}</h3>
                      <p className="text-sm text-[var(--color-text-secondary)]/70 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

