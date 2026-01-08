import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/lib/cities";
import { getFullMetadata } from "@/lib/canonical-helper";
import { QUARTIER_HUB_SLUGS } from "@/lib/quartiers";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const supported = new Set(QUARTIER_HUB_SLUGS);
  return CITIES.filter((c) => supported.has(c.slug)).map((city) => ({ slug: city.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: PageProps): Metadata {
  const city = getCityBySlug(params.slug);

  if (!city) {
    return {};
  }

  const path = `quartiers-${city.slug}`;
  const title = `Quartiers de ${city.nameCapitalized} : Guide Complet Déménagement | Moverz`;
  const description = `Guide complet des quartiers et arrondissements de ${city.nameCapitalized} pour votre déménagement. Spécificités, accès, parkings, déménageurs locaux adaptés à chaque zone.`;

  return getFullMetadata(path, title, description);
}

export default function QuartiersPage({ params }: PageProps) {
  const city = getCityBySlug(params.slug);

  if (!city || !QUARTIER_HUB_SLUGS.includes(city.slug as any)) {
    notFound();
    return null;
  }

  const isParis = city.slug === "paris";
  const isMarseille = city.slug === "marseille";
  const isLyon = city.slug === "lyon";
  const isNice = city.slug === "nice";
  const isToulouse = city.slug === "toulouse";
  const isBordeaux = city.slug === "bordeaux";
  const isGrenoble = city.slug === "grenoble";
  const isIleDeFrance = city.slug === "ile-de-france";

  // Quartiers principaux par ville
  const neighborhoods: Record<string, string[]> = {
    marseille: ["Vieux-Port", "Le Panier", "Joliette", "Cours Julien", "Prado", "Endoume"],
    paris: ["1er arr.", "2e arr.", "3e arr.", "4e arr.", "5e arr.", "6e arr.", "7e arr.", "8e arr.", "9e arr.", "10e arr.", "11e arr.", "12e arr.", "13e arr.", "14e arr.", "15e arr.", "16e arr.", "17e arr.", "18e arr.", "19e arr.", "20e arr."],
    lyon: ["Presqu'île", "Vieux Lyon", "Croix-Rousse", "Part-Dieu", "Confluence", "Gerland"],
    nice: ["Vieux-Nice", "Carré d'Or", "Promenade", "Cimiez", "Riquier", "Fabron"],
    toulouse: ["Capitole", "Saint-Cyprien", "Carmes", "Minimes", "Borderouge"],
    bordeaux: ["Chartrons", "Saint-Pierre", "Saint-Michel", "Caudéran", "Bacalan"],
    grenoble: ["Centre-ville", "Europole", "Île Verte", "Championnet", "Grand Place", "Mistral"],
    "ile-de-france": ["Paris", "Hauts-de-Seine", "Seine-Saint-Denis", "Val-de-Marne", "Seine-et-Marne", "Yvelines", "Essonne", "Val-d'Oise"],
    lille: ["Centre", "Vieux-Lille", "Wazemmes", "Fives", "Vauban"],
    strasbourg: ["Grande-Île", "Neudorf", "Cronenbourg", "Koenigshoffen", "Robertsau"],
    nantes: ["Centre-ville", "Île de Nantes", "Chantenay", "Erdre", "Doulon"],
    rennes: ["Centre", "Villejean", "Cleunay", "Maurepas", "Bréquigny"],
    rouen: ["Centre-ville", "Rive Gauche", "Mont-Saint-Aignan", "Sotteville", "Grand-Quevilly"],
    montpellier: ["Écusson", "Antigone", "Port Marianne", "Hôpitaux-Facultés", "Près d'Arènes"],
    toulon: ["Centre-ville", "Mourillon", "Petit Chicago", "Claret", "La Rode"],
    dijon: ["Centre-ville", "Clemenceau", "Montchapet", "Chevreul", "Fontaine d'Ouche"],
    angers: ["Centre-ville", "Belle-Beille", "Lac de Maine", "Monplaisir", "Ney-Chalouère"],
    "clermont-ferrand": ["Jaude", "Cathédrale", "Montferrand", "Champratel", "Saint-Jacques"],
    tours: ["Centre-ville", "Prébendes", "Rabelais", "Joué-lès-Tours", "Saint-Pierre-des-Corps"],
    reims: ["Centre-ville", "Croix-Rouge", "Clairmarais", "Maison Blanche", "Europe"],
    "le-havre": ["Centre-ville", "Sanvic", "Caucriauville", "Bléville", "Rouelles"],
    "saint-etienne": ["Centre-ville", "Fauriel", "Monthieu", "Beaubrun", "Crêt de Roc"],
  };

  const suburbs: Record<string, string[]> = {
    marseille: ["Aix-en-Provence", "Aubagne", "Allauch", "La Ciotat", "Cassis"],
    paris: ["Boulogne-Billancourt", "Levallois-Perret", "Neuilly-sur-Seine", "Saint-Denis", "Montreuil", "Vincennes", "Issy-les-Moulineaux", "Versailles"],
    lyon: ["Villeurbanne", "Caluire-et-Cuire", "Oullins", "Écully"],
    nice: ["Saint-Laurent-du-Var", "Cagnes-sur-Mer", "Villefranche", "Beaulieu"],
    toulouse: ["Blagnac", "Colomiers", "Tournefeuille", "Balma"],
    bordeaux: ["Mérignac", "Pessac", "Talence", "Bègles"],
    grenoble: ["Échirolles", "Saint-Martin-d'Hères", "Fontaine", "Meylan"],
    "ile-de-france": ["92 (Hauts-de-Seine)", "93 (Seine-Saint-Denis)", "94 (Val-de-Marne)", "77 (Seine-et-Marne)", "78 (Yvelines)", "91 (Essonne)", "95 (Val-d'Oise)"],
    lille: ["Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul"],
    strasbourg: ["Schiltigheim", "Illkirch-Graffenstaden", "Hoenheim", "Lingolsheim"],
    nantes: ["Rezé", "Saint-Herblain", "Orvault", "Saint-Sébastien-sur-Loire"],
    rennes: ["Saint-Grégoire", "Cesson-Sévigné", "Chantepie", "Bruz"],
    rouen: ["Mont-Saint-Aignan", "Sotteville-lès-Rouen", "Le Grand-Quevilly", "Le Petit-Quevilly"],
    montpellier: ["Castelnau-le-Lez", "Lattes", "Pérols", "Juvignac"],
    toulon: ["La Seyne-sur-Mer", "La Garde", "Hyères", "Six-Fours-les-Plages"],
    dijon: ["Chenôve", "Quetigny", "Talant", "Longvic"],
    angers: ["Avrillé", "Trélazé", "Les Ponts-de-Cé", "Saint-Barthélemy-d'Anjou"],
    "clermont-ferrand": ["Aubière", "Chamalières", "Cournon-d'Auvergne", "Beaumont"],
    tours: ["Joué-lès-Tours", "Saint-Pierre-des-Corps", "La Riche", "Saint-Avertin"],
    reims: ["Tinqueux", "Bétheny", "Cormontreuil", "Saint-Brice-Courcelles"],
    "le-havre": ["Sainte-Adresse", "Montivilliers", "Gonfreville-l'Orcher", "Harfleur"],
    "saint-etienne": ["Saint-Priest-en-Jarez", "La Ricamarie", "Firminy", "Roche-la-Molière"],
  };

  const cityNeighborhoods = neighborhoods[city.slug] || [];
  const citySuburbs = suburbs[city.slug] || [];

  const quoteUrl = `https://devis.moverz.fr/devis-gratuits-v3?city_slug=${city.slug}&source=moverz.fr&from=/quartiers-${city.slug}/`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="container max-w-5xl py-16 md:py-24">
          <div className="text-center space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-white/60">
              <a href="/" className="hover:text-white transition-colors">Accueil</a>
              <span>›</span>
              <a href={`/demenagement/${city.slug}/`} className="hover:text-white transition-colors">{city.nameCapitalized}</a>
              <span>›</span>
              <span className="text-white/90">Quartiers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {isParis ? "Arrondissements" : "Quartiers"} de {city.nameCapitalized}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Chaque {isParis ? "arrondissement" : "quartier"} a ses spécificités pour un déménagement : 
              accès, parkings, contraintes. Découvrez les particularités de votre zone et trouvez 
              les déménageurs locaux adaptés.
            </p>

            <div className="pt-4">
              <a
                href={quoteUrl}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base md:text-lg font-semibold text-[#0F172A] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Comparer les déménageurs</span>
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des quartiers principaux */}
      {cityNeighborhoods.length > 0 && (
        <section className="section section-light">
          <div className="container max-w-5xl">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                {isParis ? "20 arrondissements" : `${cityNeighborhoods.length} zones principales`}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                {isParis ? "Les 20 arrondissements de Paris" : `Principaux quartiers de ${city.nameCapitalized}`}
              </h2>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                Nos déménageurs connaissent parfaitement ces zones et adaptent leur intervention 
                selon les contraintes locales.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cityNeighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood}
                  className="rounded-xl border border-[#E5E7EB] bg-white p-4 hover:border-[#6BCFCF]/50 hover:shadow-md transition-all duration-200"
                >
                  <p className="font-medium text-[#0F172A]">{neighborhood}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#E5E7EB] bg-gradient-to-br from-white to-[#FAFAFA] p-8">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">
                Pourquoi les {isParis ? "arrondissements" : "quartiers"} importent pour un déménagement ?
              </h3>
              <div className="space-y-3 text-[#6B7280]">
                <p>
                  <strong className="text-[#0F172A]">Accès et stationnement :</strong> {isParis ? "Les arrondissements centraux (1er-4e) ont souvent des ruelles étroites et peu de parkings." : "Certains quartiers ont des rues piétonnes, des zones à stationnement limité ou des règles strictes."} 
                  Les déménageurs doivent prévoir les autorisations et le matériel adapté (monte-meubles, diables).
                </p>
                <p>
                  <strong className="text-[#0F172A]">Type d'immeubles :</strong> {isParis ? "Immeubles haussmanniens sans ascenseur dans les arrondissements historiques vs résidences modernes avec parking dans le 13e-15e." : "Immeubles anciens vs résidences récentes, avec ou sans ascenseur, impactent directement le temps et le coût du déménagement."}
                </p>
                <p>
                  <strong className="text-[#0F172A]">Formalités locales :</strong> Autorisation de stationnement auprès de la mairie, règlement de copropriété, 
                  réservation d'ascenseur, protection des parties communes. Un déménageur local connaît ces démarches.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Communes limitrophes */}
      {citySuburbs.length > 0 && (
        <section className="section section-white">
          <div className="container max-w-5xl">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                Métropole élargie
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                Communes limitrophes
              </h2>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                Nos déménageurs interviennent aussi dans toute la métropole de {city.nameCapitalized}.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {citySuburbs.map((suburb) => (
                <div
                  key={suburb}
                  className="rounded-xl border border-[#E5E7EB] bg-white p-4 hover:border-[#6BCFCF]/50 hover:shadow-md transition-all duration-200"
                >
                  <p className="font-medium text-[#0F172A]">{suburb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="section section-contrast">
        <div className="container max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Gratuit · Sans engagement
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Comparez les déménageurs<br />à {city.nameCapitalized}
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              En 3 minutes, l'IA Moverz estime votre volume et partage votre dossier 
              avec 3 à 5 déménageurs locaux adaptés à votre {isParis ? "arrondissement" : "quartier"}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <a
                href={quoteUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base md:text-lg font-semibold text-[#0F172A] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Comparer maintenant</span>
                <span className="text-xl">→</span>
              </a>
              <a
                href={`/demenagement/${city.slug}/`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base md:text-lg font-semibold text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300"
              >
                <span>Guide complet {city.nameCapitalized}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

