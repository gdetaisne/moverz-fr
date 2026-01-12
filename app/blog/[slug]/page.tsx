import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import type { BlogPostMeta } from "@/lib/blog";
import {
  PUBLISHED_BLOG_POSTS,
  getCanonicalBodyBySlug,
  getPricePostForCity,
  getPublishedPostBySlug,
} from "@/lib/blog";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getCityBySlug } from "@/lib/cities";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { formatDateFR } from "@/lib/date/fr";

type PageProps = {
  params: {
    slug: string;
  };
};

// IMPORTANT (stability): avoid pre-rendering all blog posts during build on small VPS.
// Generate on-demand and cache (ISR) to avoid Next.js worker 60s timeouts.
export const revalidate = 60 * 60 * 24; // 24h
export const dynamicParams = true;

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPublishedPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  const path = `blog/${post.slug}`;
  const title = `${post.title} | Blog déménagement Moverz`;
  const description = post.description;

  return getFullMetadata(path, title, description);
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPublishedPostBySlug(params.slug);

  if (!post) {
    notFound();
    return null;
  }

  const publishedDate =
    post.publishedAt && !Number.isNaN(new Date(post.publishedAt).getTime())
      ? formatDateFR(post.publishedAt, { day: "2-digit", month: "long", year: "numeric" })
      : "";

  const related = PUBLISHED_BLOG_POSTS.filter(
    (p) =>
      p.slug !== post.slug &&
      (p.category === post.category || (!!post.citySlug && p.citySlug === post.citySlug))
  ).slice(0, 4);

  const city = post.citySlug ? getCityBySlug(post.citySlug) : undefined;
  const cityPricePost = post.citySlug ? getPricePostForCity(post.citySlug) : undefined;
  const canonicalBody = getCanonicalBodyBySlug(post.slug);

  // Custom components pour ReactMarkdown
  const markdownComponents: Components = {
    blockquote: ({ children, ...props }) => {
      // Extraire le texte brut de children (qui peut être un array de paragraphes)
      const extractText = (node: any): string => {
        if (typeof node === 'string') return node;
        if (Array.isArray(node)) return node.map(extractText).join(' ');
        if (node?.props?.children) return extractText(node.props.children);
        return '';
      };
      
      const childrenText = extractText(children).trim();
      
      // Détecter les blockquotes CTA (commencent par [CTA])
      if (childrenText.includes('[CTA]')) {
        // Supprimer le [CTA] et extraire le contenu
        const fullText = childrenText.replace('[CTA]', '').trim();
        
        // Séparer en lignes et prendre la première comme titre
        const lines = fullText.split('\n').map(l => l.trim()).filter(Boolean);
        const title = lines[0] || 'Comparer les devis';
        const description = lines.slice(1).join(' ') || 'Obtenez plusieurs devis comparables en quelques minutes.';

        return (
          <div className="my-8 rounded-2xl border-2 border-[#6BCFCF] bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] p-6 md:p-8 text-center shadow-md">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/20 px-4 py-1.5 text-xs font-semibold text-[#0F172A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                Action recommandée
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] leading-tight">
                {title}
              </h3>
              <p className="text-sm md:text-base text-[#4b5c6b] max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
              <a
                href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=/blog-article-cta"
                className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF] px-6 py-3 text-sm md:text-base font-semibold text-[#0F172A] shadow-lg hover:bg-[#5AB9B9] transition-colors"
              >
                <span>Comparer les devis gratuitement</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        );
      }

      // Blockquotes normales
      return (
        <blockquote className="border-l-4 border-[#6BCFCF] bg-[#F0F9FF] py-3 px-4 my-6 not-italic text-[#04163a]" {...props}>
          {children}
        </blockquote>
      );
    },
  };

  return (
    <main className="bg-hero min-h-screen">
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        category={post.category}
        readingTimeMinutes={post.readingTimeMinutes}
      />
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
              <article className="prose prose-base lg:prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#04163a] prose-h1:text-3xl prose-h1:mb-6 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#4b5c6b] prose-p:leading-relaxed prose-p:mb-4 prose-li:text-[#4b5c6b] prose-li:leading-relaxed prose-strong:text-[#04163a] prose-strong:font-semibold prose-a:text-[#2B7A78] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-ul:my-4 prose-ul:list-disc prose-ul:pl-5 prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-5 prose-table:text-sm prose-th:bg-[#F9FAFB] prose-th:text-[#04163a] prose-th:font-semibold prose-th:p-3 prose-td:p-3 prose-td:border-[#E5E7EB] prose-hr:my-8 prose-hr:border-[#E5E7EB]">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {canonicalBody}
                </ReactMarkdown>
              </article>
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
                href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=/blog-placeholder"
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

      {/* Maillage SEO : ressources utiles */}
      <section className="section section-light">
        <div className="container max-w-3xl text-[#04163a]">
          <div className="rounded-2xl border border-[#E3E5E8] bg-white p-6 md:p-8 text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
              Ressources utiles
            </p>
            <p className="text-sm text-[#6B7280] max-w-2xl mx-auto">
              Les pages les plus utiles à lire ensuite (prix, checklists, et guides par ville).
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
              {city ? (
                <a
                  href={`/demenagement/${city.slug}/`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors"
                >
                  <span>Guide déménagement {city.nameCapitalized}</span>
                  <span>→</span>
                </a>
              ) : (
                <a
                  href="/villes/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors"
                >
                  <span>Guides par ville</span>
                  <span>→</span>
                </a>
              )}

              {city ? (
                <a
                  href={`/quartiers-${city.slug}/`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E3E5E8] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] hover:border-[#6BCFCF]/60 hover:bg-[#FAFAFA] transition-colors"
                >
                  <span>Quartiers de {city.nameCapitalized}</span>
                  <span>→</span>
                </a>
              ) : null}

              {cityPricePost ? (
                <a
                  href={`/blog/${cityPricePost.slug}/`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E3E5E8] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] hover:border-[#6BCFCF]/60 hover:bg-[#FAFAFA] transition-colors"
                >
                  <span>Prix à {city?.nameCapitalized}</span>
                  <span>→</span>
                </a>
              ) : (
                <a
                  href="/blog/prix-et-devis/"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E3E5E8] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] hover:border-[#6BCFCF]/60 hover:bg-[#FAFAFA] transition-colors"
                >
                  <span>Guides prix & devis</span>
                  <span>→</span>
                </a>
              )}

              <a
                href="/blog/checklists-et-guides/"
                className="inline-flex items-center gap-2 rounded-full border border-[#E3E5E8] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] hover:border-[#6BCFCF]/60 hover:bg-[#FAFAFA] transition-colors"
              >
                <span>Checklists & guides</span>
                <span>→</span>
              </a>
            </div>
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
          <a
            href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=/blog-article"
            className="btn-primary"
          >
            Lancer mon comparateur de devis
          </a>
        </div>
      </section>
    </main>
  );
}


