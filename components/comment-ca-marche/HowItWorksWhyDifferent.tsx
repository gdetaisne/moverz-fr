"use client";

import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export default function HowItWorksWhyDifferent() {
  const classic = [
    "Vous remplissez un formulaire (2 min)",
    "Votre numéro est transmis à plusieurs sociétés",
    "Vous recevez des appels pendant des jours",
    "Devis basés sur déclaratif (risque de supplément le jour J)",
    "Critères de sélection partenaires variables",
  ];

  const moverz = [
    "Vous complétez un dossier guidé (3–5 min)",
    "Dossier qualifié transmis à un nombre limité de pros",
    "Vous recevez des devis écrits, comparables (pas de spam)",
    "Base commune (infos) → chiffrage plus précis",
    "Partenaires engagés contractuellement (légalité, assurance, qualité)",
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6BCFCF]/10 to-[#2B7A78]/10 border border-[#6BCFCF]/20 px-4 py-2 text-sm font-semibold text-[#2B7A78]">
            <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
            Pourquoi c&apos;est différent
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            Plateformes classiques vs Moverz
          </h2>
          <p className="text-base md:text-lg text-[#1E293B]/70 max-w-3xl mx-auto">
            Le but : limiter les imprécisions de volume, éviter le démarchage agressif et comparer des devis sur une base identique.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Classic */}
          <div className="relative overflow-hidden rounded-3xl border border-[#E3E5E8] bg-white p-7 md:p-8 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-gray-50" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6B7280]">Plateformes classiques</p>
                  <p className="text-lg font-bold text-[#0F172A]">Rapide… mais flou</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 border border-red-100">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
              </div>

              <ol className="space-y-3">
                {classic.map((line, i) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-[#1E293B]/75">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-[#0F172A] text-xs font-bold">
                      {i + 1}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Moverz */}
          <div className="relative overflow-hidden rounded-3xl border border-[#6BCFCF]/30 bg-white p-7 md:p-8 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6BCFCF]/8 via-transparent to-[#2B7A78]/8" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78]">Moverz</p>
                  <p className="text-lg font-bold text-[#0F172A]">Plus précis, plus serein</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6BCFCF]/10 border border-[#6BCFCF]/25">
                  <CheckCircle2 className="w-5 h-5 text-[#2B7A78]" />
                </div>
              </div>

              <ol className="space-y-3">
                {moverz.map((line, i) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-[#1E293B]/75">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#6BCFCF]/12 text-[#0F172A] text-xs font-bold border border-[#6BCFCF]/20">
                      {i + 1}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ol>

              <a
                href="/comparateur-demenageurs/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#2B7A78] transition-colors"
              >
                Voir le comparatif détaillé <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

