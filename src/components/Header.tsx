import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);

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
          <Link to="/clients" aria-label="Estimer mes volumes" className="btn btn-primary">Estimer mes volumes</Link>
        </div>
        <button aria-label="Ouvrir le menu" className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(v => !v)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white/95">
          <div className="container py-3 space-y-2">
            <NavLink to="/clients" className="block px-2 py-3 rounded-lg hover:bg-slate-50" onClick={() => setOpen(false)}>👤 Particuliers</NavLink>
            <NavLink to="/pro" className="block px-2 py-3 rounded-lg hover:bg-slate-50" onClick={() => setOpen(false)}>🏢 Professionnels</NavLink>
            <NavLink to="/blog" className="block px-2 py-3 rounded-lg hover:bg-slate-50" onClick={() => setOpen(false)}>📝 Blog</NavLink>
            <NavLink to="/contact" className="block px-2 py-3 rounded-lg hover:bg-slate-50" onClick={() => setOpen(false)}>📞 Contact</NavLink>
            <Link to="/clients" className="btn btn-primary w-full" onClick={() => setOpen(false)}>🚀 Estimer mes volumes</Link>
          </div>
        </div>
      )}
    </header>
  );
}
