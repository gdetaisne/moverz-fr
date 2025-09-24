import React from 'react';
import { Link } from 'react-router-dom';

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="small text-gray-600 mb-4">
      {items.map((it, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-2 text-gray-400">/</span>}
          {i < items.length - 1 ? (
            <Link to={it.href} className="hover:underline">{it.label}</Link>
          ) : (
            <span aria-current="page">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
