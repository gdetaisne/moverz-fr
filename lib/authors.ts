export interface Author {
  slug: "lucie" | "guillaume"
  name: string
  role: string
  bioShort: string
  bioLong: string
  linkedin: string
  photoUrl: string
  expertise: string[]
}

export const AUTHORS: Record<string, Author> = {
  lucie: {
    slug: "lucie",
    name: "Lucie Veltz",
    role: "Co-fondatrice & Relocation Specialist",
    bioShort: "Déménageuse internationale en série — 4 en 5 ans avec 2 enfants, des dizaines de prestataires. Lucie a appris à trier les bons des mauvais partenaires à la dure.",
    bioLong: "Berlin, Bangkok, Bordeaux, La Rochelle... les déménagements elle sait faire. À chaque fois, le même constat : trouver un déménageur fiable tient plus du sport de haut niveau que d'une simple recherche en ligne. Des devis invérifiables, des entreprises qui disparaissent après l'acompte, des cartons égarés à l'autre bout du monde. Après des années passées à construire son propre réseau de prestataires de confiance, elle fonde Moverz pour mettre ce savoir au service de tous.",
    linkedin: "https://www.linkedin.com/in/lucieveltz/",
    photoUrl: "/images/authors/lucie.jpg",
    expertise: ["Déménagement international", "Logistique famille", "Sélection prestataires", "Guides pratiques"],
  },
  guillaume: {
    slug: "guillaume",
    name: "Guillaume Stehelin de Taisne",
    role: "Co-fondateur & Logistics Specialist",
    bioShort: "Co-fondateur de Moverz, Guillaume a créé la plateforme après un déménagement personnel cauchemardesque.",
    bioLong: "Guillaume a fondé Moverz en 2025 après avoir vécu un déménagement qui aurait pu mal tourner : 5 devis reçus sur des bases différentes, impossible à comparer, une entreprise qui disparaît 3 jours avant le jour J, et un harcelage téléphonique pendant deux semaines. Entrepreneur dans l'âme, il a appliqué une logique simple : standardiser le dossier avant de le transmettre. Aujourd'hui il supervise la plateforme technique, la vérification des déménageurs partenaires, et la stratégie produit. Sa conviction : la transparence n'est pas un argument marketing, c'est une infrastructure.",
    linkedin: "https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/",
    photoUrl: "/images/authors/guillaume.jpg",
    expertise: ["Logistique déménagement", "Vérification déménageurs", "Stratégie produit", "Prix & devis"],
  },
}

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS[slug]
}
