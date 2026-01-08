"use client";
import { useState, useEffect } from "react";
import { TrendingUp, Users, Zap, ArrowRight } from "lucide-react";

export default function ProCTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Value prop */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold mb-8">
              <Zap className="w-4 h-4 text-[#6BCFCF]" />
              Pour les déménageurs
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              On révolutionne le déménagement,
              <br />
              <span className="text-[#6BCFCF]">ensemble</span>
            </h2>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Rejoignez Moverz Pro et accédez à des dossiers ultra-préparés (photos, IA, volumes). Plus de temps pour déménager, moins pour courir après les infos.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[#6BCFCF]/10">
                  <Users className="w-4 h-4 text-[#6BCFCF]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Dossiers ultra-préparés</p>
                  <p className="text-sm text-white/60">Photos, IA, volumes → tout est prêt pour votre devis</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[#6BCFCF]/10">
                  <TrendingUp className="w-4 h-4 text-[#6BCFCF]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Dashboard qui simplifie votre vie</p>
                  <p className="text-sm text-white/60">Gérez vos dossiers, suivez vos clients, gagnez du temps</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[#6BCFCF]/10">
                  <Zap className="w-4 h-4 text-[#6BCFCF]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Clients déjà convaincus</p>
                  <p className="text-sm text-white/60">Ils viennent via Moverz, ils sont prêts à déménager</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/pro"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#6BCFCF] px-8 py-4 text-base font-semibold text-[#0F172A] shadow-[0_10px_40px_rgba(107,207,207,0.3)] hover:shadow-[0_14px_60px_rgba(107,207,207,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Devenir partenaire Moverz Pro</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Stats cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/60 text-sm font-medium">Déménagements facilités/mois</p>
                <TrendingUp className="w-5 h-5 text-[#6BCFCF]" />
              </div>
              <p className="text-4xl font-bold text-white mb-1">1 200+</p>
              <p className="text-xs text-white/50">Et ça monte chaque mois</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/60 text-sm font-medium">Clients satisfaits</p>
                <Zap className="w-5 h-5 text-[#6BCFCF]" />
              </div>
              <p className="text-4xl font-bold text-white mb-1">4.9/5</p>
              <p className="text-xs text-white/50">Déménagement réussi = client heureux</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/60 text-sm font-medium">Partenaires Moverz Pro</p>
                <Users className="w-5 h-5 text-[#6BCFCF]" />
              </div>
              <p className="text-4xl font-bold text-white mb-1">150+</p>
              <p className="text-xs text-white/50">Partout en France</p>
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

