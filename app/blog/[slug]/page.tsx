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
  const canonicalBody = getCanonicalBodyBySlug(post.slug);

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
      {canonicalBody ? (
        <section className="section section-light">
          <div className="container max-w-3xl text-[#04163a]">
            <div className="rounded-3xl bg-white px-4 py-6 md:px-10 md:py-10 shadow-sm border border-[#E3E5E8]">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className="prose prose-sm md:prose-base max-w-none prose-headings:text-[#04163a] prose-headings:font-semibold prose-p:text-[#4b5c6b] prose-p:leading-relaxed prose-li:text-[#4b5c6b] prose-li:leading-relaxed prose-strong:text-[#04163a] prose-a:text-[#2B7A78] prose-a:underline prose-a:underline-offset-2 prose-table:text-xs md:prose-table:text-sm prose-th:text-[#04163a] prose-th:font-semibold"
              >
                {canonicalBody}
              </ReactMarkdown>
            </div>
          </div>
        </section>
      ) : (
        <section className="section section-light">
          <div className="container max-w-3xl">
            <div className="rounded-3xl bg-white px-6 py-12 md:px-12 md:py-16 shadow-sm border border-[#E3E5E8] text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                Article en cours de réécriture
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#04163a]">
                Contenu en cours de finalisation
              </h2>
              <p className="text-sm md:text-base text-[#4b5c6b] max-w-xl mx-auto">
                Cet article est en cours de migration et de réécriture depuis nos anciens sites.
                En attendant, vous pouvez déjà comparer des devis pour votre déménagement.
              </p>
              <a
                href="https://devis.moverz.fr/?source=moverz.fr&from=/blog-placeholder"
                className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#1E293B] transition-colors"
              >
                <span>Comparer les devis maintenant</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </section>
      )}

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


