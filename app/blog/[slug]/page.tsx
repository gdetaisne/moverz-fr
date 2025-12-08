import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { BlogPostMeta } from "@/lib/blog";
import { BLOG_POSTS, getCanonicalBodyBySlug, getPostBySlug } from "@/lib/blog";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getCityBySlug } from "@/lib/cities";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  const path = `blog/${post.slug}`;
  const title = `${post.title} | Blog déménagement Moverz`;
  const description = post.description;

  return getFullMetadata(path, title, description);
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
    return null;
  }

  const publishedDate =
    post.publishedAt && !Number.isNaN(new Date(post.publishedAt).getTime())
      ? new Date(post.publishedAt).toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "";

  const related = BLOG_POSTS.filter(
    (p) =>
      p.slug !== post.slug &&
      (p.category === post.category || (!!post.citySlug && p.citySlug === post.citySlug))
  ).slice(0, 4);

  const city = post.citySlug ? getCityBySlug(post.citySlug) : undefined;

  const renderContent = (post: BlogPostMeta) => {
    switch (post.slug) {
      case "prix-demenagement-t2-marseille-fourchettes-facteurs": {
        const canonicalBody = getCanonicalBodyBySlug(post.slug);

        return (
          <section className="section section-light">
            <div className="container max-w-3xl text-[#04163a]">
              {canonicalBody ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className="prose prose-sm md:prose-base max-w-none prose-headings:text-[#04163a] prose-p:text-[#4b5c6b] prose-li:text-[#4b5c6b]"
                >
                  {canonicalBody}
                </ReactMarkdown>
              ) : (
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  Le contenu détaillé de cet article est en cours de synchronisation depuis nos anciens
                  sites. Il sera bientôt disponible avec un guide complet et des exemples concrets pour
                  votre déménagement de T2 à Marseille.
                </p>
              )}
            </div>
          </section>
        );
      }
      case "prix-demenagement-marseille":
        return (
          <section className="section section-light">
            <div className="container max-w-3xl space-y-8 text-[#04163a]">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Combien coûte un déménagement à Marseille en 2025 ?
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  À Marseille, le prix d&apos;un déménagement dépend à la fois du volume, des accès et du
                  type de trajet (intra-Marseille, métropole, longue distance). Entre le Vieux-Port, les
                  collines et les communes voisines, les conditions de stationnement et les escaliers
                  peuvent faire varier la facture du simple au double.
                </p>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  Pour un déménagement réalisé par des pros en formule standard, on observe généralement
                  les ordres de grandeur suivants :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-[#4b5c6b]">
                  <li>Studio / T1 : 300–600 € pour un trajet court intra-Marseille</li>
                  <li>T2 : 500–900 € selon les accès et la période</li>
                  <li>T3 : 700–1 300 € pour des volumes de 60–70 m²</li>
                  <li>Maison / grand T4+ : 1 200–2 400 € et plus</li>
                </ul>
                <p className="text-xs text-[#6B7280]">
                  Ces fourchettes restent indicatives : seul un devis basé sur un inventaire précis permet
                  de fixer un prix fiable.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Exemples concrets de déménagements à Marseille
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  Un T2 Castellane → Cours Julien avec ascenseurs des deux côtés ne coûtera pas le même
                  prix qu&apos;un T3 en 4ᵉ sans ascenseur dans une rue compliquée du centre. Le volume,
                  les étages, la distance de portage et la période (été / fins de mois) expliquent les
                  différences entre devis.
                </p>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  Ce que vous pouvez attendre en pratique :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-[#4b5c6b]">
                  <li>Petit volume intra-Marseille avec accès faciles : plutôt bas de fourchette.</li>
                  <li>
                    T3 avec escaliers et stationnement compliqué : on se rapproche ou dépasse le haut de
                    fourchette.
                  </li>
                  <li>
                    Longue distance depuis Marseille (vers Lyon, Nantes, Paris…) : plusieurs milliers
                    d&apos;euros selon le volume et le niveau de service.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Les facteurs qui font bouger la facture à Marseille
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-[#4b5c6b]">
                  <li>
                    <strong>Le volume</strong> (m³) : il conditionne la taille du camion et le nombre de
                    déménageurs.
                  </li>
                  <li>
                    <strong>Les accès</strong> : étages, ascenseur, pente, distance de portage depuis le
                    camion, possibilité ou non de se garer en bas de l&apos;immeuble.
                  </li>
                  <li>
                    <strong>Le type de trajet</strong> : intra-Marseille, métropole marseillaise, longue
                    distance France → France.
                  </li>
                  <li>
                    <strong>La période</strong> : été, fins de mois et week-ends sont plus chers que les
                    créneaux calmes en semaine.
                  </li>
                  <li>
                    <strong>Le niveau de service</strong> : éco (vous faites beaucoup), standard ou
                    confort (emballage complet).
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Comment utiliser Moverz pour trouver le juste prix ?
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  En décrivant précisément votre projet (volume, adresses, étages, contraintes de
                  stationnement), vous permettez aux déménageurs partenaires de chiffrer exactement la
                  même opération. Vous recevez alors 5+ devis comparables sur la même base et pouvez
                  choisir sereinement le meilleur compromis entre prix, options et niveau de service.
                </p>
              </div>
            </div>
          </section>
        );
      case "prix-demenagement-longue-distance-france":
        return (
          <section className="section section-light">
            <div className="container max-w-3xl space-y-8 text-[#04163a]">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Qu&apos;appelle-t-on déménagement longue distance ?
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  On parle de déménagement longue distance dès que le trajet dépasse plusieurs centaines
                  de kilomètres entre deux villes françaises. Ce n&apos;est plus un simple “déménagement
                  de quartier” : on ajoute des heures de route, des péages, du carburant et parfois une
                  nuitée pour l&apos;équipe.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Ordres de grandeur pour un déménagement France → France
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  Pour un déménagement réalisé par des pros en formule standard, on observe
                  généralement les fourchettes suivantes pour des trajets de 400 à 800 km :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-[#4b5c6b]">
                  <li>Studio / T1 (10–15 m³) : environ 900–1 800 € TTC</li>
                  <li>T2 / petit T3 (20–30 m³) : environ 1 500–2 700 € TTC</li>
                  <li>T3 / T4 (35–45 m³) : environ 2 000–3 500 € TTC</li>
                  <li>Grande maison (50–70 m³) : souvent 2 800–4 800 € TTC et plus</li>
                </ul>
                <p className="text-xs text-[#6B7280]">
                  Ces montants restent des ordres de grandeur : seuls des devis basés sur un inventaire
                  précis permettent de figer un prix.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Les 4 facteurs qui font vraiment bouger la facture
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-[#4b5c6b]">
                  <li>
                    <strong>Le volume (m³)</strong> : il détermine la taille du camion, le nombre de
                    déménageurs et le temps de chargement / déchargement.
                  </li>
                  <li>
                    <strong>La distance</strong> : carburant, péages et temps de route se répercutent
                    directement sur le prix.
                  </li>
                  <li>
                    <strong>Les accès</strong> : étages, ascenseurs, portage, monte-meubles… un 5ᵉ sans
                    ascenseur peut faire grimper le devis.
                  </li>
                  <li>
                    <strong>Le niveau de service</strong> : éco, standard ou confort (emballage complet,
                    démontage/remontage, garde-meuble, etc.).
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Comment utiliser Moverz pour un longue distance ?
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  L&apos;enjeu n&apos;est pas seulement de recevoir des devis, mais des devis vraiment
                  comparables. Avec Moverz, vous créez un seul dossier détaillé (volume, adresses,
                  accès, contraintes). Il est envoyé à plusieurs déménageurs contrôlés qui chiffrent
                  exactement la même opération. Vous voyez alors clairement qui propose quoi, à quel
                  prix, et pouvez choisir le juste compromis entre budget et niveau de service.
                </p>
              </div>
            </div>
          </section>
        );
      case "demenagement-international-juste-prix-experience":
        return (
          <section className="section section-light">
            <div className="container max-w-3xl space-y-8 text-[#04163a]">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Déménagement international : ce que ça change par rapport à un déménagement national
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  Un déménagement international implique souvent des formalités douanières, des délais
                  plus longs et plusieurs acteurs (déménageur local, transporteur international,
                  éventuel garde-meuble). Les écarts de prix entre devis peuvent être très importants,
                  parfois sans explication claire.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Le cœur de métier de Moverz : le juste prix pour la meilleure expérience
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  Moverz est d&apos;abord conçu pour les déménagements France → France. Notre promesse :
                  vous aider à trouver le juste prix pour la meilleure expérience possible, en fonction
                  de vos besoins réels. Pour l&apos;international, nous préférons être transparents :
                  nous pouvons intervenir dans certains cas précis, et vous orienter ailleurs quand ce
                  n&apos;est pas notre rôle.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Dans quels cas Moverz peut vous aider concrètement ?
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-[#4b5c6b]">
                  <li>
                    <strong>Retour en France</strong> : vous revenez d&apos;un autre pays et avez besoin
                    d&apos;un déménageur pour la partie finale en France (port, aéroport, garde-meuble →
                    nouveau logement).
                  </li>
                  <li>
                    <strong>Europe proche</strong> : certains partenaires peuvent gérer des liaisons
                    régulières France ↔ pays limitrophes (Espagne, Belgique, Allemagne, Suisse, Italie…).
                  </li>
                  <li>
                    <strong>Projet spécifique à clarifier</strong> : nous pouvons vous aider à structurer
                    votre besoin et à poser les bonnes questions aux déménageurs internationaux.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Et dans quels cas ce n&apos;est pas notre métier ?
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  Nous ne prétendons pas organiser tous les déménagements internationaux partout dans le
                  monde. Pour certains projets très complexes (outre-mer lointain, déménagements
                  industriels massifs, formalités douanières très spécifiques), nous préférons vous dire
                  clairement que ce n&apos;est pas notre cœur de métier et vous orienter vers des acteurs
                  ultra spécialisés.
                </p>
              </div>
            </div>
          </section>
        );
      default:
        return (
          <section className="section section-light">
            <div className="container max-w-3xl space-y-8 text-[#04163a]">
              <p className="text-sm text-[#4b5c6b]">
                Le contenu détaillé de cet article sera importé depuis les anciens sites Moverz.
                Pour l&apos;instant, cette page sert de template : structure de lecture claire,
                sections hiérarchisées et CTA vers les formulaires Moverz.
              </p>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  1. Ce que vous allez trouver dans ce guide
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  Chaque article du blog Moverz est pensé pour répondre à une question précise : prix,
                  organisation, démarches, cartons, enfants, changements d&apos;école, etc. L&apos;objectif
                  est de vous aider à prendre des décisions concrètes, pas de vous noyer sous le jargon.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  2. Des conseils actionnables, pas du blabla
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  Les contenus publiés ici sont basés sur des déménagements réels, des retours clients
                  et l&apos;expérience de déménageurs pros. Chaque section vise à vous donner une action
                  concrète à réaliser, avec des exemples de cas fréquents.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  3. Comment utiliser le comparateur Moverz en complément
                </h2>
                <p className="text-sm md:text-base text-[#4b5c6b]">
                  La lecture d&apos;un guide permet de mieux comprendre les enjeux d&apos;un déménagement,
                  mais les prix réels dépendent toujours de votre volume, de vos accès et de vos dates.
                  C&apos;est pour ça que Moverz vous permet de créer un dossier unique et de recevoir 5+
                  devis alignés sur la même base.
                </p>
              </div>
            </div>
          </section>
        );
    }
  };

  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      {/* Hero article */}
      <section className="section section-contrast">
        <div className="container max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
            Blog déménagement
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
            {post.category && (
              <span className="rounded-full bg-white/10 px-2 py-0.5 font-semibold text-[11px] text-[#6BCFCF]">
                {post.category}
              </span>
            )}
            {city && (
              <a
                href={`/demenagement/${city.slug}/`}
                className="rounded-full bg-white/10 px-3 py-0.5 text-[11px] text-[#6BCFCF] hover:bg-white/20 hover:text-white transition-colors"
              >
                Déménagement {city.nameCapitalized}
              </a>
            )}
            {publishedDate && (
              <span>Publié le {publishedDate}</span>
            )}
            {post.readingTimeMinutes && (
              <span>· {post.readingTimeMinutes} min de lecture</span>
            )}
          </div>
          <p className="text-sm md:text-base text-white/80 max-w-2xl">
            {post.description}
          </p>
        </div>
      </section>

      {/* Contenu article */}
      {renderContent(post)}

      {/* Articles liés */}
      {related.length > 0 && (
        <section className="section section-light">
          <div className="container max-w-3xl space-y-4 text-[#04163a]">
            <h2 className="text-xl md:text-2xl font-semibold">
              Articles qui peuvent aussi vous intéresser
            </h2>
            <div className="space-y-3">
              {related.map((item) => (
                <a
                  key={item.slug}
                  href={`/blog/${item.slug}/`}
                  className="group flex flex-col gap-1 rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 hover:border-[#6BCFCF]/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B7280]">
                    {item.category && (
                      <span className="rounded-full bg-[#F0F4F8] px-2 py-0.5 font-semibold text-[11px] text-[#2B7A78]">
                        {item.category}
                      </span>
                    )}
                    {item.citySlug && (
                      <span className="text-[#6B7280]">{item.citySlug}</span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-[#04163a] group-hover:text-[#2B7A78]">
                    {item.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA vers le comparateur */}
      <section className="section section-contrast">
        <div className="container max-w-3xl text-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
            Passer à l&apos;action
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Comparez des devis pour votre déménagement
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            3 minutes pour créer votre dossier, 5+ déménageurs contrôlés qui chiffrent le même
            volume. Vous gardez la main sur le choix final.
          </p>
          <a
            href="https://devis.moverz.fr/?source=moverz.fr&from=/blog-article"
            className="btn-primary"
          >
            Lancer mon comparateur de devis
          </a>
        </div>
      </section>
    </main>
  );
}


