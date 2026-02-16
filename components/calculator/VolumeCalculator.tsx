"use client";
import { useState } from "react";
import { buildTunnelUrl } from "@/lib/tunnel-url";

type HousingType = "studio" | "t2" | "t3" | "t4" | "maison";
type Furniture = {
  id: string;
  name: string;
  volume: number;
  icon: string;
  category: "living" | "bedroom" | "kitchen" | "other";
};

const housingBaseVolumes: Record<HousingType, number> = {
  studio: 15,
  t2: 25,
  t3: 35,
  t4: 45,
  maison: 60,
};

const furnitureItems: Furniture[] = [
  // Living
  { id: "canape-3", name: "Canapé 3 places", volume: 2.5, icon: "🛋️", category: "living" },
  { id: "canape-2", name: "Canapé 2 places", volume: 1.5, icon: "🛋️", category: "living" },
  { id: "fauteuil", name: "Fauteuil", volume: 0.8, icon: "🪑", category: "living" },
  { id: "table-basse", name: "Table basse", volume: 0.5, icon: "📦", category: "living" },
  { id: "meuble-tv", name: "Meuble TV", volume: 1, icon: "📺", category: "living" },
  { id: "bibliotheque", name: "Bibliothèque", volume: 2, icon: "📚", category: "living" },
  
  // Bedroom
  { id: "lit-double", name: "Lit double", volume: 2, icon: "🛏️", category: "bedroom" },
  { id: "lit-simple", name: "Lit simple", volume: 1.2, icon: "🛏️", category: "bedroom" },
  { id: "armoire", name: "Armoire", volume: 3, icon: "👔", category: "bedroom" },
  { id: "commode", name: "Commode", volume: 1, icon: "📦", category: "bedroom" },
  { id: "table-chevet", name: "Table de chevet", volume: 0.3, icon: "🕯️", category: "bedroom" },
  
  // Kitchen
  { id: "table-manger", name: "Table à manger", volume: 1.5, icon: "🍽️", category: "kitchen" },
  { id: "chaises", name: "4 chaises", volume: 1, icon: "🪑", category: "kitchen" },
  { id: "frigo", name: "Réfrigérateur", volume: 1.5, icon: "🧊", category: "kitchen" },
  { id: "lave-linge", name: "Lave-linge", volume: 1, icon: "🧺", category: "kitchen" },
  { id: "lave-vaisselle", name: "Lave-vaisselle", volume: 0.8, icon: "🍽️", category: "kitchen" },
  
  // Other
  { id: "cartons-10", name: "10 cartons", volume: 1, icon: "📦", category: "other" },
  { id: "velo", name: "Vélo", volume: 0.5, icon: "🚲", category: "other" },
  { id: "plantes", name: "Plantes", volume: 0.5, icon: "🪴", category: "other" },
];

export default function VolumeCalculator() {
  const [housingType, setHousingType] = useState<HousingType>("t2");
  const [selectedFurniture, setSelectedFurniture] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const baseVolume = housingBaseVolumes[housingType];
  const furnitureVolume = Object.entries(selectedFurniture).reduce((sum, [id, qty]) => {
    const item = furnitureItems.find(f => f.id === id);
    return sum + (item ? item.volume * qty : 0);
  }, 0);
  const totalVolume = Math.round((baseVolume + furnitureVolume) * 10) / 10;

  const toggleFurniture = (id: string) => {
    setSelectedFurniture(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseFurniture = (id: string) => {
    setSelectedFurniture(prev => {
      const newQty = (prev[id] || 0) - 1;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const filteredFurniture = activeCategory === "all"
    ? furnitureItems
    : furnitureItems.filter(f => f.category === activeCategory);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-semibold text-[#0F172A]">
            <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
            Outil gratuit
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A]">
            Calculateur de Volume
          </h1>
          <p className="text-lg text-[#1E293B]/70 max-w-3xl mx-auto">
            Estimez le volume de votre déménagement en m³ en quelques clics
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Configuration */}
          <div className="lg:col-span-2 space-y-8">
            {/* Housing Type */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
                1. Type de logement
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {(Object.keys(housingBaseVolumes) as HousingType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setHousingType(type)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      housingType === type
                        ? "border-[#6BCFCF] bg-[#6BCFCF]/10"
                        : "border-[#E3E5E8] hover:border-[#6BCFCF]/50"
                    }`}
                  >
                    <p className="text-sm font-semibold text-[#0F172A] capitalize">
                      {type.replace("t", "T")}
                    </p>
                    <p className="text-xs text-[#1E293B]/60 mt-1">
                      ~{housingBaseVolumes[type]}m³
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Furniture */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
                2. Ajoutez vos meubles
              </h2>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: "all", label: "Tous", icon: "📦" },
                  { id: "living", label: "Salon", icon: "🛋️" },
                  { id: "bedroom", label: "Chambre", icon: "🛏️" },
                  { id: "kitchen", label: "Cuisine", icon: "🍽️" },
                  { id: "other", label: "Autre", icon: "📦" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? "bg-[#0F172A] text-white"
                        : "bg-[#F8F9FA] text-[#1E293B] hover:bg-[#E3E5E8]"
                    }`}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>

              {/* Furniture grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {filteredFurniture.map((item) => {
                  const qty = selectedFurniture[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        qty > 0
                          ? "border-[#6BCFCF] bg-[#6BCFCF]/5"
                          : "border-[#E3E5E8]"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        {qty > 0 && (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6BCFCF] text-white text-xs font-bold">
                            {qty}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-[#0F172A] mb-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-[#1E293B]/60 mb-3">
                        {item.volume}m³
                      </p>
                      <div className="flex gap-2">
                        {qty > 0 && (
                          <button
                            onClick={() => decreaseFurniture(item.id)}
                            className="flex-1 py-1.5 rounded-lg bg-[#E3E5E8] text-[#0F172A] text-sm font-medium hover:bg-[#D1D5DB] transition-colors"
                          >
                            −
                          </button>
                        )}
                        <button
                          onClick={() => toggleFurniture(item.id)}
                          className="flex-1 py-1.5 rounded-lg bg-[#0F172A] text-white text-sm font-medium hover:bg-[#1E293B] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Result */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl shadow-2xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-6">Estimation</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Base ({housingType})</span>
                  <span className="font-medium">{baseVolume}m³</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Meubles ajoutés</span>
                  <span className="font-medium">+{furnitureVolume.toFixed(1)}m³</span>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-white/70">Volume total</span>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-[#6BCFCF]">
                        {totalVolume}
                      </p>
                      <p className="text-sm text-white/70">m³</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Truck recommendation */}
              <div className="bg-white/10 rounded-xl p-4 mb-6">
                <p className="text-sm font-medium mb-2">🚚 Camion recommandé</p>
                <p className="text-xs text-white/80">
                  {totalVolume < 15 && "Utilitaire 12-15m³"}
                  {totalVolume >= 15 && totalVolume < 25 && "Camion 20m³"}
                  {totalVolume >= 25 && totalVolume < 40 && "Camion 30m³"}
                  {totalVolume >= 40 && "Camion 40m³ ou plus"}
                </p>
              </div>

              {/* CTA */}
              <a
                href={buildTunnelUrl({ from: "/calculateur-volume-demenagement/", estimatedVolume: totalVolume })}
                className="block w-full text-center py-4 rounded-xl bg-[#6BCFCF] text-[#0F172A] font-semibold hover:bg-[#A8E8E8] transition-colors"
              >
                Obtenir des devis →
              </a>
              
              <p className="text-xs text-white/60 text-center mt-4">
                L'IA peut affiner cette estimation à partir de votre dossier
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

