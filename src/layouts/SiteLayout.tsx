import React, { PropsWithChildren } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--mz-bg)] text-slate-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
