export type City = { name: string; slug: string; region: string };

export const CITIES: City[] = [
  { name: 'Paris', slug: 'paris', region: 'Île-de-France' },
  { name: 'Marseille', slug: 'marseille', region: 'Provence-Alpes-Côte d’Azur' },
  { name: 'Lyon', slug: 'lyon', region: 'Auvergne-Rhône-Alpes' },
  { name: 'Toulouse', slug: 'toulouse', region: 'Occitanie' },
  { name: 'Nice', slug: 'nice', region: 'Provence-Alpes-Côte d’Azur' },
  { name: 'Nantes', slug: 'nantes', region: 'Pays de la Loire' },
  { name: 'Montpellier', slug: 'montpellier', region: 'Occitanie' },
  { name: 'Strasbourg', slug: 'strasbourg', region: 'Grand Est' },
  { name: 'Bordeaux', slug: 'bordeaux', region: 'Nouvelle-Aquitaine' },
  { name: 'Lille', slug: 'lille', region: 'Hauts-de-France' },
  { name: 'Rennes', slug: 'rennes', region: 'Bretagne' },
  { name: 'Reims', slug: 'reims', region: 'Grand Est' },
  { name: 'Toulon', slug: 'toulon', region: 'Provence-Alpes-Côte d’Azur' },
  { name: 'Saint-Étienne', slug: 'saint-etienne', region: 'Auvergne-Rhône-Alpes' },
  { name: 'Le Havre', slug: 'le-havre', region: 'Normandie' },
  { name: 'Grenoble', slug: 'grenoble', region: 'Auvergne-Rhône-Alpes' },
  { name: 'Dijon', slug: 'dijon', region: 'Bourgogne-Franche-Comté' },
  { name: 'Angers', slug: 'angers', region: 'Pays de la Loire' },
  { name: 'Nîmes', slug: 'nimes', region: 'Occitanie' },
  { name: 'Clermont-Ferrand', slug: 'clermont-ferrand', region: 'Auvergne-Rhône-Alpes' },
];

export const PRICING = [
  { type: 'Studio / T1', local: '300–600€', regional: '500–900€', ld: '900–1 400€' },
  { type: 'T2', local: '500–900€', regional: '700–1 200€', ld: '1 200–1 800€' },
  { type: 'T3', local: '800–1 300€', regional: '1 100–1 700€', ld: '1 700–2 500€' },
];

export const steps = [
  { icon: '📷', title: 'Prenez des photos', text: 'Photographiez vos pièces et meubles principaux.' },
  { icon: '🤖', title: 'IA analyse', text: 'Nous estimons volume, objets fragiles, complexité.' },
  { icon: '📩', title: 'Recevez 3 devis', text: 'Des déménageurs qualifiés près de chez vous, sous 24h.' },
];

export const faqs = [
  { q: 'Combien de temps pour obtenir mes devis ?', a: 'Sous 24h ouvrées après envoi de vos photos.' },
  { q: 'La visite technique est-elle obligatoire ?', a: 'Non, l’IA évite la plupart des visites.' },
  { q: 'Quels moyens de paiement ?', a: 'Virement, CB, acompte en ligne selon le déménageur.' },
  { q: 'Fournissez-vous des cartons ?', a: 'Oui, via nos partenaires.' },
  { q: 'Accès difficiles ?', a: 'Signalez-le, on l’intègre à l’estimation et au planning.' },
];

export const related = [
  { href: '/blog/prix-demenagement-2025', title: 'Prix moyen d’un déménagement en 2025', excerpt: 'Fourchettes par distance, volume, options.', meta: '8 min de lecture' },
  { href: '/blog/checklist-demenagement-30-etapes', title: 'Check-list déménagement en 30 étapes', excerpt: 'Plan J-60 → J+1.', meta: '12 min de lecture' },
  { href: '/blog/top-erreurs-a-eviter', title: 'Top 10 erreurs à éviter', excerpt: 'Évitez les pièges coûteux.', meta: '10 min de lecture' },
];

export const ZONES: Record<string, string[]> = {
  paris: ['1er–4e (Louvre/Marais)','5e–7e','8e–9e','10e–12e','13e–15e','16e','17e','18e–20e','Boulogne','Neuilly','Levallois','Issy','Montreuil'],
  lyon: ['1er (Terreaux)','2e (Perrache)','3e (Part-Dieu)','4e (Croix-Rousse)','5e (Vieux Lyon)','6e (Brottes)','7e (Gerland)','8e','9e','Villeurbanne'],
};

export const DEFAULT_ZONES = [
  'Centre-ville','Gare','Quartier historique','Zone résidentielle','Zone commerciale','Banlieue Nord','Banlieue Sud','Est','Ouest'
];

export function getZones(slug: string): string[] {
  return ZONES[slug] || DEFAULT_ZONES;
}

export function buildCityTitle(name: string) {
  return `Déménagement ${name} – Devis en 5 min | Moverz`;
}

export function buildCityDescription(name: string) {
  return `Obtenez 3 devis de déménagement à ${name} en 5 minutes grâce à l’IA. Sans visite technique.`;
}
