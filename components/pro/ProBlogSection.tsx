"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { BLOG_PRO_META } from "@/lib/blog-pro";

export default function ProBlogSection() {
  const posts = BLOG_PRO_META.slice(0, 3);

  return (
    <section className="relative py-20 md:py-32 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-semibold text-[#0F172A]">
            <BookOpen className="w-4 h-4 text-[#6BCFCF]" />
            Ressources pour déménageurs
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">
            Guides pour chiffrer plus vite (et éviter les surprises)
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            Visites techniques, litiges, relances WhatsApp, déclaration de valeur… des articles concrets
            pour gagner du temps et fiabiliser vos devis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="h-full"
            >
              <Link href={`/blog/${post.slug}/`} className="group block h-full">
                <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#6BCFCF]/60 hover:shadow-lg transition-all duration-300">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6BCFCF]">
                    Déménageurs · Pro
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-[#0F172A] group-hover:text-[#2B7A78] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#6B7280] leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2B7A78] group-hover:gap-3 transition-all">
                    Lire l’article <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog/?cat=pro"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0F172A] hover:text-[#2B7A78] underline underline-offset-4 decoration-[#0F172A]/30 hover:decoration-[#2B7A78] transition-colors"
          >
            Voir tous les articles "déménageurs"
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

