"use client";

import { CheckCircle2, ShieldCheck, Headset } from "lucide-react";

export default function HowItWorksTransparency() {
  const items = [
    {
      icon: CheckCircle2,
      title: "Comparez sereinement",
      desc: "Devis détaillés (inclus vs options), base commune d’informations, comparaison plus simple.",
    },
    {
      icon: ShieldCheck,
      title: "Pas de frais cachés côté Moverz",
      desc: "Moverz est gratuit pour vous : vous ne payez que le déménageur que vous choisissez.",
    },
    {
      icon: Headset,
      title: "Support jusqu’au jour J",
      desc: "Une question avant de choisir ? Un imprévu ? Support 7j/7 pour vous aider à clarifier et avancer.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-4 py-1.5 text-sm font-semibold text-[#0F172A]">
              <span className="h-2 w-2 rounded-full bg-brand-turquoise" />
              Étape 3
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
              Choisissez en toute transparence
            </h2>

            <p className="text-lg text-[#1E293B]/70 leading-relaxed">
              Vous gardez le contrôle : vous comparez les devis, vous posez vos questions, et vous choisissez le déménageur qui correspond le mieux à votre projet.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/villes/"
                className="inline-flex items-center gap-2 rounded-full border border-[#E3E5E8] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] hover:border-brand-turquoise/50 hover:bg-[#FAFAFA] transition-colors"
              >
                Voir les guides par ville <span>→</span>
              </a>
              <a
                href="/faq/"
                className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors"
              >
                Lire la FAQ <span>→</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-4 md:grid-cols-3">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <div
                  key={it.title}
                  className="rounded-2xl border border-[#E3E5E8] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-turquoise/10 border border-brand-turquoise/20 mb-4">
                    <Icon className="w-6 h-6 text-[#0F172A]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2">{it.title}</h3>
                  <p className="text-sm text-[#1E293B]/70 leading-relaxed">{it.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

