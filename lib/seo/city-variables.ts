export type ProfilUrbain = "hyper-centre dense" | "mixte" | "pavillonnaire";
export type FrictionAcces = "élevée" | "moyenne" | "faible";
export type SaisonnaliteLocale = "forte" | "moyenne" | "faible";

export type CitySeoVars = {
  profilUrbain: ProfilUrbain;
  frictionAcces: FrictionAcces;
  saisonnaliteLocale: SaisonnaliteLocale;
};

function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function pick<T>(arr: readonly T[], seed: number): T {
  return arr[seed % arr.length];
}

const OVERRIDES: Record<string, CitySeoVars> = {
  paris: { profilUrbain: "hyper-centre dense", frictionAcces: "élevée", saisonnaliteLocale: "forte" },
  lyon: { profilUrbain: "mixte", frictionAcces: "moyenne", saisonnaliteLocale: "forte" },
  marseille: { profilUrbain: "mixte", frictionAcces: "moyenne", saisonnaliteLocale: "forte" },
  nice: { profilUrbain: "hyper-centre dense", frictionAcces: "élevée", saisonnaliteLocale: "forte" },
  toulouse: { profilUrbain: "mixte", frictionAcces: "moyenne", saisonnaliteLocale: "moyenne" },
  bordeaux: { profilUrbain: "mixte", frictionAcces: "moyenne", saisonnaliteLocale: "forte" },
  lille: { profilUrbain: "mixte", frictionAcces: "moyenne", saisonnaliteLocale: "moyenne" },
  nantes: { profilUrbain: "mixte", frictionAcces: "moyenne", saisonnaliteLocale: "moyenne" },
  strasbourg: { profilUrbain: "hyper-centre dense", frictionAcces: "élevée", saisonnaliteLocale: "moyenne" },
  montpellier: { profilUrbain: "mixte", frictionAcces: "moyenne", saisonnaliteLocale: "forte" },
  rennes: { profilUrbain: "mixte", frictionAcces: "moyenne", saisonnaliteLocale: "moyenne" },
  rouen: { profilUrbain: "hyper-centre dense", frictionAcces: "élevée", saisonnaliteLocale: "moyenne" },
};

export function getCitySeoVars(citySlug: string): CitySeoVars {
  if (OVERRIDES[citySlug]) return OVERRIDES[citySlug];

  const seed = hash(citySlug);
  const profilUrbain = pick<ProfilUrbain>(["hyper-centre dense", "mixte", "pavillonnaire"], seed);

  // Friction dérivée du profil urbain (avec un léger bruit déterministe)
  const frictionAcces: FrictionAcces =
    profilUrbain === "hyper-centre dense"
      ? pick<"élevée" | "moyenne">(["élevée", "moyenne"], seed + 3)
      : profilUrbain === "pavillonnaire"
        ? pick<"faible" | "moyenne">(["faible", "moyenne"], seed + 5)
        : pick<"moyenne" | "élevée" | "faible">(["moyenne", "élevée", "faible"], seed + 7);

  const saisonnaliteLocale = pick<SaisonnaliteLocale>(["forte", "moyenne", "faible"], seed + 11);

  return { profilUrbain, frictionAcces, saisonnaliteLocale };
}


