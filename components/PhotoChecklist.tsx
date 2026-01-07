"use client";
import { Check, X } from "lucide-react";
import Image from "next/image";

const photos = [
  {
    id: 1,
    title: "Salon (vue large)",
    description: "Montrez l'ensemble des meubles et le volume global",
    good: "Vue d'ensemble avec tous les meubles visibles",
    bad: "Photo trop rapprochée d'un seul meuble",
  },
  {
    id: 2,
    title: "Cuisine (électroménager)",
    description: "Incluez frigo, four, lave-vaisselle si ils partent",
    good: "Vue complète des équipements à déménager",
    bad: "Photo floue ou sans les appareils",
  },
  {
    id: 3,
    title: "Chambres (lits + armoires)",
    description: "Montrez les meubles volumineux de chaque chambre",
    good: "Angle large montrant lit et armoires",
    bad: "Photo partielle ou sombre",
  },
  {
    id: 4,
    title: "Entrée de l'immeuble",
    description: "L'accès pour le camion (porte, hall, ascenseur)",
    good: "Vue claire de l'entrée et de l'accès",
    bad: "Photo depuis trop loin ou sans contexte",
  },
  {
    id: 5,
    title: "Escaliers / Ascenseur",
    description: "Montrez la largeur et le type d'accès (étage ?)",
    good: "Vue de face montrant largeur et hauteur",
    bad: "Photo floue ou angle incompréhensible",
  },
  {
    id: 6,
    title: "Stationnement / Rue",
    description: "Où le camion pourra-t-il se garer ? Rue étroite ?",
    good: "Vue d'ensemble de la rue et accès parking",
    bad: "Photo trop proche ou sans vue d'ensemble",
  },
];

export default function PhotoChecklist() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-sm font-semibold text-[#0F172A] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
            Photos = devis plus justes
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Les 6 photos indispensables
          </h2>
          <p className="text-lg text-[#1E293B]/70 leading-relaxed">
            Plus vos photos sont précises, plus les déménageurs peuvent estimer le volume et le temps nécessaire.
            <br />
            <strong className="text-[#0F172A]">Résultat : des devis comparables et sans surprise.</strong>
          </p>
        </div>

        {/* Grid de photos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-2xl border border-[#E3E5E8] p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Number badge */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#6BCFCF]/10 text-[#0F172A] font-bold text-lg">
                  {photo.id}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-[#1E293B]/70">
                    {photo.description}
                  </p>
                </div>
              </div>

              {/* Good vs Bad examples */}
              <div className="space-y-3 mt-4">
                {/* Good example */}
                <div className="flex items-start gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-green-900">{photo.good}</p>
                </div>

                {/* Bad example */}
                <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-900">{photo.bad}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-[#A8E8E8]/20 rounded-2xl p-8 border border-[#6BCFCF]/30">
            <p className="text-lg font-semibold text-[#0F172A] mb-2">
              💡 Astuce : prenez ces photos maintenant
            </p>
            <p className="text-[#1E293B]/70">
              Vous gagnerez du temps lors de votre demande de devis, et les déménageurs pourront vous donner un tarif précis dès le premier échange.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

