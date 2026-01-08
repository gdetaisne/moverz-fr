"use client";
import { useEffect, useState } from "react";
import { Shield, TrendingUp, Users } from "lucide-react";
import WhatsAppCTA from "../WhatsAppCTA";

export default function PourquoiHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div 
        className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        style={{
          animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
        }}
      >
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-white/60">
            <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
            <li>/</li>
            <li className="text-white">Pourquoi Moverz</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold mb-8">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
              Ce qui nous différencie
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
              Pourquoi choisir{" "}
              <span className="text-[#6BCFCF]">Moverz</span> ?
            </h1>

            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Moverz ne compare pas seulement des devis.{" "}
              <strong className="text-white">Moverz compare des entreprises, leur fiabilité et le risque associé.</strong>
            </p>

            {/* WhatsApp CTA */}
            <WhatsAppCTA source="pourquoi-moverz" />
          </div>

          {/* Right: Key features cards */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10">
                <Shield className="w-6 h-6 text-[#6BCFCF]" />
              </div>
              <div>
                <p className="font-semibold text-white">Pros vérifiés</p>
                <p className="text-sm text-white/60">Scores financiers + historique litiges</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10">
                <TrendingUp className="w-6 h-6 text-[#6BCFCF]" />
              </div>
              <div>
                <p className="font-semibold text-white">Devis comparables</p>
                <p className="text-sm text-white/60">Même base (photos IA) pour tous</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10">
                <Users className="w-6 h-6 text-[#6BCFCF]" />
              </div>
              <div>
                <p className="font-semibold text-white">0 spam</p>
                <p className="text-sm text-white/60">Téléphone masqué jusqu'à votre choix</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
  );
}

