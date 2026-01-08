"use client";
import { Home, Utensils, Bed, DoorOpen, MoveVertical, Car } from "lucide-react";

const photos = [
  {
    id: 1,
    icon: Home,
    title: "Salon",
    description: "Vue d'ensemble avec tous les meubles",
  },
  {
    id: 2,
    icon: Utensils,
    title: "Cuisine",
    description: "Électroménager et équipements",
  },
  {
    id: 3,
    icon: Bed,
    title: "Chambres",
    description: "Lits, armoires, bureaux",
  },
  {
    id: 4,
    icon: DoorOpen,
    title: "Entrée & Accès",
    description: "Hall, couloirs, portes",
  },
  {
    id: 5,
    icon: MoveVertical,
    title: "Escaliers",
    description: "Type d'accès et largeur",
  },
  {
    id: 6,
    icon: Car,
    title: "Stationnement",
    description: "Accès parking ou rue",
  },
];

export default function PhotoChecklist() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-semibold text-[#0F172A] mb-8">
            <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
            Photos = devis précis
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-8 leading-[1.1]">
            Photographiez{" "}
            <span className="text-[#6BCFCF]">toutes</span>{" "}
            vos pièces
          </h2>
          <p className="text-xl text-[#1E293B]/60 leading-relaxed font-light">
            Plus vous envoyez de photos, plus les devis sont justes.
          </p>
        </div>

        {/* Grid premium */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-16">
          {photos.map((photo) => {
            const Icon = photo.icon;
            return (
              <div
                key={photo.id}
                className="group bg-white rounded-3xl p-8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 border border-[#E3E5E8]/50 hover:border-[#6BCFCF]/30"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#A8E8E8]/10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#0F172A]" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-[#1E293B]/60 text-sm leading-relaxed font-light">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom message premium */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#E3E5E8]/50">
            <p className="text-lg font-semibold text-[#0F172A] mb-3">
              Salon, chambres, cuisine, cave, garage, grenier…
            </p>
            <p className="text-[#1E293B]/60 leading-relaxed font-light">
              Chaque espace photographié = un devis plus juste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
