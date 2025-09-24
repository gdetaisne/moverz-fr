import React from 'react';
import { Helmet } from 'react-helmet-async';

type Post = { title: string; href: string; excerpt: string; readTime: string };

const posts: Post[] = [
  { title: 'Prix moyen d’un déménagement en France (2025)', href: '/blog/prix-moyen-demenagement-france-2025', excerpt: 'Comprendre les facteurs clés qui influencent le prix.', readTime: '6 min' },
];

export default function BlogList() {
  return (
    <>
      <Helmet>
        <title>Blog Déménagement – Conseils & Guides | Moverz</title>
      </Helmet>
      <section className="section">
        <div className="container space-y-8">
          <h1 className="h1">Blog</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <article key={i} className="card flex flex-col">
                <h2 className="h3 line-clamp-2 min-h-[3.5rem]">{p.title}</h2>
                <p className="small text-gray-600 flex-1">{p.excerpt}</p>
                <div className="small text-gray-500 mt-3">{p.readTime} de lecture</div>
                <a href={p.href} className="btn btn-outline mt-4" aria-label={`Lire: ${p.title}`}>Lire l’article</a>
              </article>
            ))}
          </div>

          <div className="card">
            <h2 className="h3 mb-3">Newsletter</h2>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" className="input sm:flex-1" placeholder="Votre email" aria-label="Votre email" />
              <button className="btn btn-primary" type="submit">S’abonner</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
