import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Briefcase, Sparkles } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="inline-flex items-center hover:opacity-90">
            <img src="/logo-header.png" alt="Moverz" className="h-10 w-auto" loading="eager" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/clients" className={({isActive}) => isActive ? 'text-[var(--mz-teal)]' : 'text-slate-700 hover:text-[var(--mz-teal)]'}>Particuliers</NavLink>
          <NavLink to="/pro" className={({isActive}) => isActive ? 'text-[var(--mz-teal)]' : 'text-slate-700 hover:text-[var(--mz-teal)]'}>Professionnels</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? 'text-[var(--mz-teal)]' : 'text-slate-700 hover:text-[var(--mz-teal)]'}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-[var(--mz-teal)]' : 'text-slate-700 hover:text-[var(--mz-teal)]'}>Contact</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/pro" aria-label="Professionnels" className="btn btn-outline">
            <Briefcase className="w-4 h-4 mr-2" /> Professionnels
          </Link>
          <Link to="/pro#demo" aria-label="Demander une démo" className="btn btn-primary">
            <Sparkles className="w-4 h-4 mr-2" /> Demander une démo
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          {scrolled && (
            <Link to="/pro#demo" aria-label="Demander une démo" className="btn btn-primary px-3 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-1" /> Démo
            </Link>
          )}
          <button aria-label="Ouvrir le menu" className="p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(v => !v)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white/95">
          <div className="container py-3 space-y-2">
            <NavLink to="/clients" className="block px-2 py-3 rounded-lg hover:bg-slate-50" onClick={() => setOpen(false)}>👤 Particuliers</NavLink>
            <NavLink to="/pro" className="block px-2 py-3 rounded-lg hover:bg-slate-50" onClick={() => setOpen(false)}>🏢 Professionnels</NavLink>
            <NavLink to="/blog" className="block px-2 py-3 rounded-lg hover:bg-slate-50" onClick={() => setOpen(false)}>📝 Blog</NavLink>
            <NavLink to="/contact" className="block px-2 py-3 rounded-lg hover:bg-slate-50" onClick={() => setOpen(false)}>📞 Contact</NavLink>
            <Link to="/pro#demo" className="btn btn-primary w-full" onClick={() => setOpen(false)}>✨ Demander une démo</Link>
          </div>
        </div>
      )}
    </header>
  );
}
