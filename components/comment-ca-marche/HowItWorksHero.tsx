"use client";
import { useEffect, useState } from "react";
import { Camera, MessageSquare, CheckCircle } from "lucide-react";
import WhatsAppCTA from "../WhatsAppCTA";

export default function HowItWorksHero() {
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
            <li className="text-white">Comment ça marche</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold mb-8">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
              Processus en 3 étapes
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
              Comment ça marche ?
            </h1>

            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              En 3 minutes, l'IA analyse vos photos et prépare 3 à 5 devis comparables. Simple, rapide, 0 spam.
            </p>

            {/* WhatsApp CTA */}
            <WhatsAppCTA source="comment-ca-marche" />
          </div>

          {/* Right: Quick steps icons */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10">
                <MessageSquare className="w-6 h-6 text-[#6BCFCF]" />
              </div>
              <div>
                <p className="font-semibold text-white">1. Décrivez</p>
                <p className="text-sm text-white/60">Ville, date, type de logement</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10">
                <Camera className="w-6 h-6 text-[#6BCFCF]" />
              </div>
              <div>
                <p className="font-semibold text-white">2. Envoyez vos photos</p>
                <p className="text-sm text-white/60">L'IA estime le volume</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#6BCFCF]/10">
                <CheckCircle className="w-6 h-6 text-[#6BCFCF]" />
              </div>
              <div>
                <p className="font-semibold text-white">3. Comparez</p>
                <p className="text-sm text-white/60">3 à 5 devis comparables</p>
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

