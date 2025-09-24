import React from 'react';

export function TestimonialCard({
  name,
  role,
  text,
  rating = 5,
}: {
  name: string;
  role: string;
  text: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}) {
  const initials = name
    .split(' ')
    .map(s => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--mz-teal)] to-[var(--mz-cyan)] text-white flex items-center justify-center font-semibold">
          {initials}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="small">{role}</div>
        </div>
      </div>
      <p className="body italic">“{text}”</p>
      <div className="mt-4 text-yellow-400" aria-label={`${rating} étoiles`}>
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
    </article>
  );
}
