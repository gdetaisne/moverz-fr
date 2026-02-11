"use client";

import { Shield, Scale, Star, Building2, FileCheck } from "lucide-react";

/**
 * Section "Comment choisir un bon déménageur" optimisée pour Featured Snippets
 * Format liste numérotée (OL) pour être captée comme position 0
 */
export function HowToChoose() {
  const steps = [
    {
      number: 1,
      icon: <Shield className="w-6 h-6" />,
      title: "Vérifier l'assurance",
      description: "Garantie dommages obligatoire : assurance responsabilité civile professionnelle + garantie transport de marchandises. Demandez une copie du certificat d'assurance avant signature."
    },
    {
      number: 2,
      icon: <Scale className="w-6 h-6" />,
      title: "Comparer des devis comparables",
      description: "Base identique = même volume en m³. Si chaque déménageur estime un volume différent, les prix ne sont pas comparables. L'IA Moverz calcule 1 volume unique = devis vraiment comparables."
    },
    {
      number: 3,
      icon: <Star className="w-6 h-6" />,
      title: "Lire les avis vérifiés",
      description: "Trustpilot, Google Reviews, France Verif. Filtrez par date récente (6 derniers mois). Attention aux faux avis (trop parfaits = suspect). Note minimale recommandée : 4+/5."
    },
    {
      number: 4,
      icon: <Building2 className="w-6 h-6" />,
      title: "Vérifier la santé financière (Creditsafe)",
      description: "Un déménageur en difficulté = risque de disparition avec votre acompte. Creditsafe note la solidité financière, impayés, contentieux. Moverz vérifie automatiquement tous ses partenaires."
    },
    {
      number: 5,
      icon: <FileCheck className="w-6 h-6" />,
      title: "Demander une visite pré-déménagement",
      description: "Visite sur place ou estimation précise du volume via un dossier standardisé. Volume précis = pas d'écart prix jour J. Méfiez-vous des devis téléphoniques approximatifs (« environ 40 m³ »)."
    }
  ];

  return (
    <section className="section section-light">
      <div className="container max-w-4xl">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 md:p-10 space-y-8">
          {/* Question exacte pour featured snippet */}
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">
              Guide anti-arnaque
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
              Comment choisir un bon déménageur ?
            </h2>
          </div>

          {/* Réponse courte (40-60 mots) pour featured snippet paragraphe */}
          <p className="text-base text-[#6B7280] max-w-3xl mx-auto text-center leading-relaxed">
            Choisir un bon déménageur en 5 étapes : vérifier l'assurance obligatoire, 
            comparer des devis sur une base identique (même volume), lire les avis récents vérifiés, 
            contrôler la santé financière (Creditsafe), et exiger une estimation précise du volume.
          </p>

          {/* Liste numérotée HTML sémantique pour featured snippet */}
          <ol className="space-y-6 counter-reset">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-5">
                {/* Numéro */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-brand-turquoise text-white font-bold text-lg">
                  {step.number}
                </div>
                
                {/* Contenu */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-brand-turquoise">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* CTA */}
          <div className="pt-6 border-t border-[#E5E7EB]">
            <div className="bg-gradient-to-br from-brand-turquoise/10 to-[#A8E8E8]/10 rounded-2xl p-6 text-center">
              <p className="text-sm font-semibold text-[#0F172A] mb-3">
                ✅ Moverz fait ces 5 vérifications pour vous
              </p>
              <p className="text-xs text-[#6B7280] max-w-2xl mx-auto">
                Tous les déménageurs du réseau Moverz sont contrôlés : assurance vérifiée, 
                Creditsafe validé, avis authentiques, volume calculé par IA (même base pour tous). 
                Vous recevez des devis vraiment comparables sous 5 jours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
