import React from 'react';

type Cta = { label: string; to: string; ariaLabel?: string };

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  badge,
}: {
  title: string;
  subtitle?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  badge?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--mz-navy)] via-[var(--mz-teal)] to-[var(--mz-cyan)] text-white">
      <div className="section">
        <div className="container text-center space-y-6">
          {badge && (
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-sm">
              {badge}
            </div>
          )}
          <h1 className="h1">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">{subtitle}</p>}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {primaryCta && (
              <a className="btn btn-primary" href={primaryCta.to} aria-label={primaryCta.ariaLabel || primaryCta.label}>
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a className="btn btn-outline" href={secondaryCta.to} aria-label={secondaryCta.ariaLabel || secondaryCta.label}>
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
