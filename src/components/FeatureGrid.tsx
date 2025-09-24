import React from 'react';

export type Feature = {
  icon?: React.ReactNode;
  title: string;
  text: string;
};

export function FeatureGrid({ items, columns = 3 }: { items: Feature[]; columns?: 3 | 4 }) {
  const colClass = columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3';
  return (
    <div className={`grid gap-6 ${colClass}`}>
      {items.map((f, idx) => (
        <article key={idx} className="card motion-safe:animate-[fadeIn_0.7s_ease_0.1s_both]">
          {f.icon && <div className="text-2xl mb-3">{f.icon}</div>}
          <h3 className="h3 mb-1">{f.title}</h3>
          <p className="small">{f.text}</p>
        </article>
      ))}
    </div>
  );
}
