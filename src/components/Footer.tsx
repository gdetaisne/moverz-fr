import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white">
      <div className="section">
        <div className="container grid md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="Moverz" className="h-10 w-auto mb-4 brightness-0 invert" loading="lazy" />
            <p className="small text-gray-400">La solution innovante pour vos devis de déménagement</p>
          </div>
          <div>
            <h4 className="h3 mb-3 text-white">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/clients" className="hover:opacity-80">Particuliers</Link></li>
              <li><Link to="/pro" className="hover:opacity-80">Professionnels</Link></li>
              <li><Link to="/blog" className="hover:opacity-80">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="h3 mb-3 text-white">Légal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/mentions-legales" className="hover:opacity-80">Mentions légales</Link></li>
              <li><Link to="/rgpd" className="hover:opacity-80">RGPD</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="h3 mb-3 text-white">Claim</h4>
            <p className="small text-gray-300">Estimation IA rapide & précise. Transparence, sérénité, efficacité.</p>
          </div>
        </div>
        <div className="container border-t border-white/10 mt-10 pt-6 text-center text-gray-400 small">
          © 2025 Moverz.fr. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
