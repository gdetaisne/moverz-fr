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
    role: "Marketing & Relocation Expert",
    bioShort: "Spécialiste marketing et relocation, Lucie accompagne les particuliers qui déménagent depuis 5 ans.",
    bioLong: "Lucie a rejoint Moverz après avoir travaillé plusieurs années dans le secteur de la relocation pour cadres et expatriés. Elle a vu de près les dégâts causés par des devis incomparables, des déménageurs peu scrupuleux et des clients livrés à eux-mêmes face à des contrats opaques. Chez Moverz, elle pilote la stratégie de contenu et s'assure que chaque guide, chaque article, aide vraiment les gens à prendre la bonne décision — pas juste à remplir un formulaire. Elle est convaincue qu'un client bien informé est un client qui ne se fait pas avoir.",
    linkedin: "https://www.linkedin.com/in/lucieveltz/",
    photoUrl: "/images/authors/lucie.jpg",
    expertise: ["Relocation", "Guides pratiques déménagement", "Protection consommateur", "Contenu SEO"],
  },
  guillaume: {
    slug: "guillaume",
    name: "Guillaume Stehelin de Taisne",
    role: "Co-fondateur & Logistics Specialist",
    bioShort: "Co-fondateur de Moverz, Guillaume a créé la plateforme après un déménagement personnel cauchemardesque.",
    bioLong: "Guillaume a fondé Moverz en 2022 après avoir vécu un déménagement qui aurait pu mal tourner : 5 devis reçus sur des bases différentes, impossible à comparer, une entreprise qui disparaît 3 jours avant le jour J, et un harcelage téléphonique pendant deux semaines. Ingénieur de formation, il a appliqué une logique simple : standardiser le dossier avant de le transmettre. Aujourd'hui il supervise la plateforme technique, la vérification des déménageurs partenaires, et la stratégie produit. Sa conviction : la transparence n'est pas un argument marketing, c'est une infrastructure.",
    linkedin: "https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/",
    photoUrl: "/images/authors/guillaume.jpg",
    expertise: ["Logistique déménagement", "Vérification déménageurs", "Stratégie produit", "Prix & devis"],
  },
}

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS[slug]
}
