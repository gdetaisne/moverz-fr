import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog";
import { getFullMetadata } from "@/lib/canonical-helper";

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
            <span>
              Publié le{" "}
              {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            {post.readingTimeMinutes && (
              <span>· {post.readingTimeMinutes} min de lecture</span>
            )}
          </div>
          <p className="text-sm md:text-base text-white/80 max-w-2xl">
            {post.description}
          </p>
        </div>
      </section>

      {/* Contenu article - placeholder structuré */}
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
              C&apos;est pour ça que Moverz vous permet de créer un dossier unique et de recevoir 5+ devis
              alignés sur la même base.
            </p>
          </div>
        </div>
      </section>

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
          <a href="/choisir-ville/" className="btn-primary">
            Lancer mon comparateur de devis
          </a>
        </div>
      </section>
    </main>
  );
}


