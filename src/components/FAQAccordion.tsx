import React from 'react';

export function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <details key={i} className="card">
          <summary className="h3 cursor-pointer">
            {f.q}
          </summary>
          <p className="small mt-2 text-gray-700">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
