import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/lib/cities";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getCityReviewsBySlug } from "@/lib/city-reviews";
import { CityHero } from "@/components/city/CityHero";
import { CityHowItWorks } from "@/components/city/CityHowItWorks";
import { CityPricing } from "@/components/city/CityPricing";
import { CityFinalCTA } from "@/components/city/CityFinalCTA";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: city.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const city = getCityBySlug(params.slug);

  if (!city) {
    return {};
  }

  const path = `demenagement/${city.slug}`;
  const title = `Déménagement ${city.nameCapitalized} : Comparez 5+ devis | Moverz`;
  const description = `Comparez 5+ devis de déménageurs contrôlés pour votre déménagement à ${city.nameCapitalized}. Service 100% gratuit, sans spam, avec des devis enfin comparables.`;

  return getFullMetadata(path, title, description);
}

export default function CityMovingPage({ params }: PageProps) {
  const city = getCityBySlug(params.slug);

  if (!city) {
    notFound();
    return null;
  }

  const isMarseille = city.slug === "marseille";
  const isParis = city.slug === "paris";
  const isLyon = city.slug === "lyon";
  const isNice = city.slug === "nice";
  const isToulouse = city.slug === "toulouse";
  const isBordeaux = city.slug === "bordeaux";
  const isLille = city.slug === "lille";
  const isNantes = city.slug === "nantes";
  const isRennes = city.slug === "rennes";
  const isMontpellier = city.slug === "montpellier";
  const isStrasbourg = city.slug === "strasbourg";
  const isRouen = city.slug === "rouen";
  const isIleDeFrance = city.slug === "ile-de-france";
  const isGrenoble = city.slug === "grenoble";
  const isToulon = city.slug === "toulon";
  const isDijon = city.slug === "dijon";
  const isAngers = city.slug === "angers";
  const isClermont = city.slug === "clermont-ferrand";
  const isTours = city.slug === "tours";
  const isReims = city.slug === "reims";
  const isLeHavre = city.slug === "le-havre";
  const quoteUrl = `https://devis.moverz.fr/?city_slug=${city.slug}&source=moverz.fr&from=/demenagement/${city.slug}/`;
  const marseilleNeighborhoods = [
    "Vieux-Port, Le Panier",
    "La Joliette, Euroméditerranée",
    "Cours Julien, La Plaine",
    "Prado, Périer",
    "Saint-Barnabé, Saint-Julien",
    "Endoume, Roucas-Blanc",
  ];
  const marseilleSuburbs = [
    "Aix-en-Provence",
    "Aubagne",
    "Allauch, Plan-de-Cuques",
    "La Ciotat, Cassis",
    "Marignane, Vitrolles",
  ];
  const parisArrondissements = [
    "1er arrondissement",
    "2e arrondissement",
    "3e arrondissement",
    "4e arrondissement",
    "5e arrondissement",
    "6e arrondissement",
    "7e arrondissement",
    "8e arrondissement",
    "9e arrondissement",
    "10e arrondissement",
    "11e arrondissement",
    "12e arrondissement",
    "13e arrondissement",
    "14e arrondissement",
    "15e arrondissement",
    "16e arrondissement",
    "17e arrondissement",
    "18e arrondissement",
    "19e arrondissement",
    "20e arrondissement",
  ];
  const parisSuburbs = [
    "Boulogne-Billancourt",
    "Issy-les-Moulineaux",
    "Levallois-Perret",
    "Neuilly-sur-Seine",
    "Saint-Denis",
    "Montreuil",
    "Vincennes",
    "Courbevoie",
    "Nanterre",
  ];
  const lyonNeighborhoods = [
    "Presqu’île (Cordeliers, Bellecour)",
    "Vieux Lyon",
    "Croix-Rousse",
    "Part-Dieu",
    "Confluence",
    "Gerland",
  ];
  const lyonSuburbs = [
    "Villeurbanne",
    "Caluire-et-Cuire",
    "Oullins",
    "Écully",
    "Tassin-la-Demi-Lune",
  ];
  const niceNeighborhoods = [
    "Vieux-Nice",
    "Carré d’Or",
    "Promenade des Anglais",
    "Cimiez",
    "Riquier",
    "Fabron",
  ];
  const niceSuburbs = [
    "Saint-Laurent-du-Var",
    "Cagnes-sur-Mer",
    "Villefranche-sur-Mer",
    "Beaulieu-sur-Mer",
    "La Trinité",
  ];
  const toulouseNeighborhoods = [
    "Capitole",
    "Saint-Cyprien",
    "Carmes",
    "Saint-Michel",
    "Minimes",
    "Borderouge",
  ];
  const toulouseSuburbs = [
    "Blagnac",
    "Colomiers",
    "Tournefeuille",
    "Balma",
    "L’Union",
  ];
  const bordeauxNeighborhoods = [
    "Chartrons",
    "Saint-Pierre",
    "Saint-Michel",
    "Caudéran",
    "Bacalan",
    "Nansouty",
  ];
  const bordeauxSuburbs = [
    "Mérignac",
    "Pessac",
    "Talence",
    "Bègles",
    "Le Bouscat",
  ];
  const lilleNeighborhoods = [
    "Vieux-Lille",
    "Lille-Centre",
    "Wazemmes",
    "Vauban–Esquermes",
    "Fives",
    "Moulins",
  ];
  const lilleSuburbs = [
    "Roubaix",
    "Tourcoing",
    "Villeneuve-d’Ascq",
    "La Madeleine",
    "Lambersart",
  ];
  const nantesNeighborhoods = [
    "Centre-ville",
    "Île de Nantes",
    "Chantenay",
    "Doulon - Bottière",
    "Hauts-Pavés - Saint-Félix",
    "Nantes Erdre",
  ];
  const nantesSuburbs = [
    "Rezé",
    "Saint-Herblain",
    "Orvault",
    "Vertou",
    "Carquefou",
  ];
  const rennesNeighborhoods = [
    "Centre",
    "Thabor - Saint-Hélier",
    "Villejean - Beauregard",
    "Sud-Gare",
    "Maurepas",
    "Cleunay - Arsenal",
  ];
  const rennesSuburbs = [
    "Cesson-Sévigné",
    "Saint-Jacques-de-la-Lande",
    "Bruz",
    "Chantepie",
    "Betton",
  ];
  const montpellierNeighborhoods = [
    "Écusson (centre historique)",
    "Port Marianne",
    "Antigone",
    "Beaux-Arts",
    "Figuerolles",
    "Hôpitaux-Facultés",
  ];
  const montpellierSuburbs = [
    "Lattes",
    "Castelnau-le-Lez",
    "Juvignac",
    "Saint-Jean-de-Védas",
    "Clapiers",
  ];
  const strasbourgNeighborhoods = [
    "Grande Île",
    "Krutenau",
    "Neudorf",
    "Robertsau",
    "Esplanade",
    "Cronenbourg",
  ];
  const strasbourgSuburbs = [
    "Schiltigheim",
    "Illkirch-Graffenstaden",
    "Lingolsheim",
    "Ostwald",
    "Bischheim",
  ];
  const rouenNeighborhoods = [
    "Centre-ville",
    "Saint-Sever",
    "Jouvenet",
    "Beauvoisine",
    "Grammont",
    "Quartier Gare",
  ];
  const rouenSuburbs = [
    "Sotteville-lès-Rouen",
    "Le Petit-Quevilly",
    "Mont-Saint-Aignan",
    "Bois-Guillaume",
    "Saint-Étienne-du-Rouvray",
  ];
  const idfAreas = [
    "Paris intra-muros",
    "Petite couronne (Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne)",
    "Grande couronne (Yvelines, Val-d’Oise, Essonne, Seine-et-Marne)",
    "Trajets Paris ↔ banlieue",
    "Déménagements entre communes d’Île-de-France",
  ];
  const grenobleNeighborhoods = [
    "Hyper-centre",
    "Europole",
    "Île Verte",
    "Berriat - Saint-Bruno",
    "Eaux-Claires",
    "Teisseire",
  ];
  const grenobleSuburbs = [
    "Échirolles",
    "Saint-Martin-d’Hères",
    "Seyssins",
    "Fontaine",
    "Meylan",
  ];
  const toulonNeighborhoods = [
    "Centre-ville",
    "Le Mourillon",
    "Pont-du-Las",
    "Sainte-Musse",
    "Saint-Jean-du-Var",
    "Les Routes",
  ];
  const toulonSuburbs = [
    "La Seyne-sur-Mer",
    "La Garde",
    "La Valette-du-Var",
    "Ollioules",
    "Le Pradet",
  ];
  const dijonNeighborhoods = [
    "Centre historique",
    "Montchapet",
    "Fontaine-d’Ouche",
    "Port du Canal",
    "Université",
    "Toison d’Or",
  ];
  const dijonSuburbs = [
    "Chenôve",
    "Talant",
    "Quetigny",
    "Saint-Apollinaire",
    "Longvic",
  ];
  const angersNeighborhoods = [
    "Centre-ville",
    "La Doutre",
    "Justices - Madeleine",
    "Deux-Croix - Banchais",
    "Monplaisir",
    "Roseraie",
  ];
  const angersSuburbs = [
    "Avrillé",
    "Trélazé",
    "Saint-Barthélemy-d’Anjou",
    "Les Ponts-de-Cé",
    "Beaucouzé",
  ];
  const clermontNeighborhoods = [
    "Centre Jaude",
    "Montferrand",
    "Saint-Jacques",
    "Les Salins",
    "Champratel",
    "La Gauthière",
  ];
  const clermontSuburbs = [
    "Cournon-d’Auvergne",
    "Aubière",
    "Beaumont",
    "Chamalières",
    "Gerzat",
  ];
  const toursNeighborhoods = [
    "Vieux-Tours",
    "Cathédrale",
    "Velpeau",
    "Deux-Lions",
    "Rabelais",
    "Saint-Symphorien",
  ];
  const toursSuburbs = [
    "Joué-lès-Tours",
    "Saint-Cyr-sur-Loire",
    "La Riche",
    "Saint-Pierre-des-Corps",
    "Chambray-lès-Tours",
  ];
  const reimsNeighborhoods = [
    "Centre-ville",
    "Saint-Rémi",
    "Cormontreuil (limite)",
    "Laon - Courlancy",
    "Europe",
    "Murigny",
  ];
  const reimsSuburbs = [
    "Tinqueux",
    "Bétheny",
    "Cormontreuil",
    "Saint-Brice-Courcelles",
    "Taissy",
  ];
  const leHavreNeighborhoods = [
    "Centre reconstruit",
    "Sainte-Adresse (limite)",
    "Graville",
    "Sanvic",
    "Aplemont",
    "Mont-Gaillard",
  ];
  const leHavreSuburbs = [
    "Montivilliers",
    "Harfleur",
    "Gonfreville-l’Orcher",
    "Sainte-Adresse",
    "Octeville-sur-Mer",
  ];

  return (
    <main className="bg-hero">
      <div className="halo" />

      {/* Hero */}
      <CityHero city={city} quoteUrl={quoteUrl} />

      {/* Comment ça marche */}
      <CityHowItWorks cityName={city.nameCapitalized} quoteUrl={quoteUrl} />

      {/* Pourquoi Moverz à {Ville} */}
      <section className="section section-light">
        <div className="container grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#04163a]">
              Pourquoi passer par Moverz pour déménager à {city.nameCapitalized} ?
            </h2>
            <p className="text-sm md:text-base text-[#4b5c6b]">
              Un déménagement à {city.nameCapitalized} ne se résume pas à un camion et quelques cartons.
              Entre les accès parfois compliqués, les règles de stationnement et les contraintes d&apos;immeuble,
              le moindre détail peut faire varier le prix du simple au double.
            </p>
            <p className="text-sm md:text-base text-[#4b5c6b]">
              Moverz standardise votre demande pour que chaque déménageur reçoive exactement les mêmes
              informations. Vous comparez alors des devis structurés sur la même base, au lieu de jongler
              avec des estimations imprécises.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-[#E3E5E8] bg-white p-5 space-y-2">
              <h3 className="text-sm font-semibold text-[#04163a]">
                Des déménageurs vraiment contrôlés
              </h3>
              <p className="text-sm text-[#4b5c6b]">
                Nous vérifions les assurances, la solvabilité et l&apos;historique de litiges avant d&apos;ouvrir
                les vannes. Seuls les pros sérieux de {city.nameCapitalized} et de la région peuvent répondre
                à votre demande.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E3E5E8] bg-white p-5 space-y-2">
              <h3 className="text-sm font-semibold text-[#04163a]">
                Des devis comparables entre eux
              </h3>
              <p className="text-sm text-[#4b5c6b]">
                Même inventaire, mêmes contraintes, même distance : les déménageurs chiffrent réellement la
                même opération. Vous pouvez enfin comprendre pourquoi un devis est plus cher qu&apos;un autre.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E3E5E8] bg-white p-5 space-y-2">
              <h3 className="text-sm font-semibold text-[#04163a]">
                0 démarchage agressif
              </h3>
              <p className="text-sm text-[#4b5c6b]">
                Votre dossier reste anonyme. Vous recevez les offres via la plateforme et choisissez vous-même
                qui contacter, sans subir d&apos;appels en chaîne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prix indicatifs */}
      <CityPricing cityName={city.nameCapitalized} />

      {/* Quartiers & communes couvertes */}
      <section className="section section-light">
        <div className="container grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#04163a]">
              Quartiers et communes couvertes autour de {city.nameCapitalized}
            </h2>
            {isMarseille ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                Les déménageurs partenaires couvrent Marseille et une grande partie de la métropole :
                du centre-ville aux quartiers plus résidentiels, ainsi que plusieurs communes voisines
                très demandées pour les déménagements.
              </p>
            ) : isParis ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                Les déménageurs partenaires couvrent l&apos;ensemble de Paris (1er au 20e arrondissement)
                ainsi qu&apos;un large périmètre de proche banlieue. Que vous déménagiez intra-muros ou vers
                une commune voisine, vous pouvez passer par Moverz.
              </p>
            ) : isIleDeFrance ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                Pour un déménagement en Île-de-France, les équipes interviennent aussi bien sur Paris
                intra-muros que dans les départements de la petite et grande couronne. Idéal si vous
                changez de ville tout en restant dans la région.
              </p>
            ) : isLyon ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Lyon, les équipes interviennent aussi bien sur la Presqu&apos;île, les pentes de la
                Croix-Rousse que dans les quartiers plus résidentiels et les communes voisines comme
                Villeurbanne ou Caluire-et-Cuire.
              </p>
            ) : isNice ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Nice, les déménageurs couvrent le bord de mer, le centre, les collines et les communes
                voisines de la métropole niçoise, pour des déménagements en ville ou le long de la côte.
              </p>
            ) : isToulouse ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Toulouse, les partenaires Moverz interviennent des quartiers centraux comme le Capitole
                aux secteurs plus résidentiels et technologiques, ainsi que dans les communes de la
                première couronne.
              </p>
            ) : isBordeaux ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Bordeaux, les déménageurs couvrent le centre historique, les quartiers en développement
                et les communes de la métropole, pour des trajets intra-muros comme vers la périphérie.
              </p>
            ) : isLille ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Lille et dans la métropole, les déménageurs partenaires interviennent aussi bien dans
                le centre, le Vieux-Lille que dans les villes voisines comme Roubaix, Tourcoing ou
                Villeneuve-d’Ascq.
              </p>
            ) : isNantes ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Nantes, les déménageurs couvrent le centre, l&apos;Île de Nantes et les grands
                quartiers résidentiels, ainsi que les communes de la métropole nantaise les plus
                demandées.
              </p>
            ) : isRennes ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Rennes, vous pouvez déménager aussi bien dans le centre que vers les quartiers
                résidentiels et les communes de la première couronne rennaise.
              </p>
            ) : isMontpellier ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Montpellier et autour, les déménageurs partenaires interviennent en centre-ville,
                dans les nouveaux quartiers et vers les communes proches très demandées.
              </p>
            ) : isStrasbourg ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Strasbourg, la couverture va du centre historique aux quartiers plus récents,
                ainsi qu&apos;aux villes limitrophes de la métropole.
              </p>
            ) : isRouen ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Rouen, les déménageurs couvrent les deux rives et les principales communes voisines
                de l&apos;agglomération.
              </p>
            ) : isGrenoble ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Grenoble, les trajets couvrent le centre, les quartiers au pied des montagnes et
                les villes de la métropole grenobloise.
              </p>
            ) : isToulon ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Toulon, les déménageurs interviennent en centre-ville, sur le littoral et dans les
                communes voisines les plus courantes.
              </p>
            ) : isDijon ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Dijon, ils couvrent le centre historique, les quartiers résidentiels et les communes
                de la métropole dijonnaise.
              </p>
            ) : isAngers ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Angers, la couverture inclut les principaux quartiers de la ville et plusieurs
                communes proches recherchées.
              </p>
            ) : isClermont ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Clermont-Ferrand, les déménageurs interviennent en centre-ville, vers Montferrand
                et dans les communes voisines de la métropole.
              </p>
            ) : isTours ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Tours, la couverture va du Vieux-Tours aux quartiers récents, ainsi qu&apos;aux villes
                voisines de la métropole tourangelle.
              </p>
            ) : isReims ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                À Reims, les déménageurs partenaires interviennent en centre-ville, dans les grands
                quartiers résidentiels et les communes autour de la ville.
              </p>
            ) : isLeHavre ? (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                Au Havre, les trajets couvrent le centre reconstruit, les quartiers en hauteur et les
                communes voisines du littoral.
              </p>
            ) : (
              <p className="text-sm md:text-base text-[#4b5c6b]">
                Les déménageurs partenaires couvrent {city.nameCapitalized} et la plupart des communes
                de la métropole. Vous pouvez indiquer précisément vos adresses de départ et d&apos;arrivée
                lors de la création de votre dossier.
              </p>
            )}
          </div>
          <div className="rounded-2xl border border-[#E3E5E8] bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7280] mb-3">
              Où nos déménageurs interviennent
            </p>
            {isMarseille ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Marseille (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {marseilleNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes souvent desservies autour de Marseille
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {marseilleSuburbs.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isParis ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Arrondissements de Paris
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {parisArrondissements.map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isLyon ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Lyon (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {lyonNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {lyonSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isNice ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Nice (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {niceNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {niceSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isToulouse ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Toulouse (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {toulouseNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {toulouseSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isBordeaux ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Bordeaux (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {bordeauxNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {bordeauxSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isLille ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Lille (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {lilleNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {lilleSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes et villes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {parisSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isIleDeFrance ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Zones d&apos;Île-de-France fréquemment desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {idfAreas.map((z) => (
                      <span
                        key={z}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {z}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isNantes ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Nantes (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {nantesNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {nantesSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isRennes ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Rennes (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {rennesNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {rennesSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isMontpellier ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Montpellier (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {montpellierNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {montpellierSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isStrasbourg ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Strasbourg (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {strasbourgNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {strasbourgSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isRouen ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Rouen (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {rouenNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {rouenSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isGrenoble ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Grenoble (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {grenobleNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {grenobleSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isToulon ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Toulon (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {toulonNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {toulonSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isDijon ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Dijon (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {dijonNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {dijonSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isAngers ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers d’Angers (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {angersNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {angersSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isClermont ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Clermont-Ferrand (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {clermontNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {clermontSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isTours ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Tours (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {toursNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {toursSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isReims ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers de Reims (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {reimsNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {reimsSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : isLeHavre ? (
              <div className="space-y-3 text-sm text-[#4b5c6b]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Quartiers du Havre (exemples)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {leHavreNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                    Communes proches souvent desservies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {leHavreSuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 text-sm text-[#4b5c6b]">
                {[
                  "Centre-ville et quartiers limitrophes",
                  "Communes voisines reliées en transport / voiture",
                  "Zones pavillonnaires et lotissements récents",
                  `Déménagements intra-muros et longue distance depuis ${city.nameCapitalized}`,
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#E3E5E8] bg-[#F8F9FA] px-3 py-1 text-xs text-[#4b5c6b]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
            <p className="text-xs text-[#6B7280] mt-3">
              La liste exacte dépend des déménageurs sélectionnés. Elle est précisée au moment des devis.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Île-de-France pour Paris */}
      {isParis && (
        <section className="section section-light">
          <div className="container max-w-4xl space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#04163a]">
              Déménagement à Paris et en Île-de-France
            </h2>
            <p className="text-sm md:text-base text-[#4b5c6b]">
              Que vous déménagiez d&apos;un arrondissement parisien vers un autre ou que vous partiez
              vers une commune d&apos;Île-de-France, Moverz vous permet de comparer plusieurs offres
              sérieuses sur la même base. Les déménageurs partenaires interviennent régulièrement sur
              des trajets Paris ↔ proche banlieue et inversement.
            </p>
            <p className="text-sm md:text-base text-[#4b5c6b]">
              Lors de la création de votre dossier, vous indiquez simplement votre adresse de départ
              et d&apos;arrivée. Les déménageurs vous confirment ensuite la faisabilité du trajet et
              les éventuelles contraintes (stationnement, accès, horaires autorisés…).
            </p>
            <p className="text-xs text-[#6B7280]">
              Pour un déménagement plus large dans la région, vous pouvez aussi consulter la{" "}
              <a
                href="/demenagement/ile-de-france/"
                className="text-[#2B7A78] underline underline-offset-2 hover:text-[#205a5a]"
              >
                page dédiée à l&apos;Île-de-France
              </a>
              .
            </p>
          </div>
        </section>
      )}

      {/* Avis clients */}
      <section className="section section-light">
        <div className="container space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78]">
              Avis clients
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#04163a]">
              Des déménagements bien préparés, moins de mauvaises surprises
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {getCityReviewsBySlug(city.slug).map((review) => (
              <article
                key={review.name}
                className="rounded-2xl border border-[#E3E5E8] bg-white p-5 flex flex-col justify-between"
              >
                <p className="text-sm text-[#4b5c6b] mb-3">“{review.text}”</p>
                <div className="text-xs text-[#6B7280]">
                  <p className="font-semibold text-[#04163a]">{review.name}</p>
                  <p>{review.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Autres villes couvertes */}
      <section className="section section-light">
        <div className="container space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78]">
              Déménagement dans d&apos;autres villes
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#04163a]">
              Moverz vous accompagne aussi ailleurs en France
            </h2>
            <p className="text-sm md:text-base text-[#4b5c6b] max-w-2xl mx-auto">
              Vous préparez un déménagement dans une autre grande ville ? Moverz est disponible dans plusieurs
              métropoles et peut aussi vous aider partout en France.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
            {CITIES.filter((c) => c.slug !== city.slug)
              .slice(0, 4)
              .map((other) => (
                <a
                  key={other.slug}
                  href={`/demenagement/${other.slug}/`}
                  className="group rounded-xl border border-[#E3E5E8] bg-white px-4 py-3 text-sm text-[#04163a] flex items-center justify-between hover:border-[#6BCFCF]/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                >
                  <span>{other.nameCapitalized}</span>
                  <span className="text-xs text-[#6B7280] group-hover:text-[#2B7A78] group-hover:translate-x-0.5 transition-transform duration-200">
                    Voir la page →
                  </span>
                </a>
              ))}
          </div>

          <div className="text-center">
            <a
              href="/villes/"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#E3E5E8] bg-white px-6 py-3 text-sm font-semibold text-[#04163a] hover:bg-[#F8F9FA] hover:border-[#6BCFCF]/40 transition-all duration-300"
            >
              <span>Voir toutes les villes principales</span>
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ courte */}
      <section className="section section-light">
        <div className="container max-w-3xl space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78]">
              Questions fréquentes
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#04163a]">
              FAQ déménagement {city.nameCapitalized}
            </h2>
          </div>
          <div className="space-y-4 text-sm md:text-base text-[#4b5c6b]">
            <div>
              <h3 className="font-semibold text-[#04163a] mb-1">
                Combien de temps à l’avance faut-il s’y prendre pour déménager à {city.nameCapitalized} ?
              </h3>
              <p>
                Idéalement entre 4 et 8 semaines avant la date souhaitée, surtout en haute saison
                (printemps/été ou fins de mois). Plus vous vous y prenez tôt, plus vous aurez de choix
                de créneaux et de prix.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#04163a] mb-1">
                Est-ce que les déménageurs se déplacent pour faire une visite technique ?
              </h3>
              <p>
                Pour les plus gros volumes ou les accès complexes, une visite (physique ou vidéo) peut être
                proposée afin de sécuriser le devis. C&apos;est indiqué dans les échanges avec chaque déménageur.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#04163a] mb-1">
                Le service Moverz est-il vraiment gratuit pour mon déménagement à {city.nameCapitalized} ?
              </h3>
              <p>
                Oui, vous ne payez rien à Moverz. Nous sommes rémunérés par les déménageurs partenaires
                lorsqu&apos;un déménagement est effectivement réalisé via la plateforme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CityFinalCTA cityName={city.nameCapitalized} quoteUrl={quoteUrl} />
    </main>
  );
}


