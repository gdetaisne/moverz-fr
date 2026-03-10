/**
 * Script de génération des PREMIUM CITY GUIDES
 * 
 * Génère des fichiers JSON pour les 20 villes prioritaires uniquement,
 * avec du contenu 100% unique et E-A-A-T optimisé.
 */

import fs from "node:fs";
import path from "node:path";
import { PREMIUM_GUIDES_DATABASE, type PremiumCityGuideData } from "@/lib/premium-city-guides-data";
import type { CityLongFormGuide, CityGuideSection } from "@/lib/city-longform";

/**
 * Convertit une PremiumCityGuideData en CityLongFormGuide
 * (format compatible avec le système existant)
 */
function convertPremiumGuideToLongForm(guide: PremiumCityGuideData): CityLongFormGuide {
  // Header avec attribution E-A-A-T
  const authorAttribution = `**${guide.author.name}**, ${guide.author.role} — Dernière mise à jour : ${new Date(guide.lastUpdated).toLocaleDateString('fr-FR')}<br/>*${guide.basedOnExperience}*`;
  
  // Prix locaux formatés
  const pricesSection = `
    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
      <h4 style="margin-top: 0;">Prix moyens constatés à ${guide.cityName} (2026)</h4>
      <ul style="list-style: none; padding: 0;">
        <li><strong>Studio :</strong> ${guide.localData.averagePrices.studio}</li>
        <li><strong>T2 :</strong> ${guide.localData.averagePrices.t2}</li>
        <li><strong>T3 :</strong> ${guide.localData.averagePrices.t3}</li>
        <li><strong>T4+ :</strong> ${guide.localData.averagePrices.t4plus}</li>
      </ul>
      <p style="font-size: 0.9em; color: #666; margin-bottom: 0;">Ces prix sont indicatifs et dépendent de l'accès, l'étage, et la période. Demandez toujours plusieurs devis pour comparer.</p>
    </div>
  `;
  
  // Données locales
  const localDataSection = `
    <h4>Ce qu'il faut savoir sur ${guide.cityName}</h4>
    <p><strong>Périodes de forte demande :</strong><br/>• ${guide.localData.peakSeasons.join('<br/>• ')}</p>
    <p><strong>Durée typique d'un déménagement :</strong> ${guide.localData.typicalDuration}</p>
    <p><strong>Défis de stationnement :</strong><br/>• ${guide.localData.parkingChallenges.join('<br/>• ')}</p>
    ${guide.localData.municipalRegulations.length > 0 ? `<p><strong>Réglementations municipales :</strong><br/>• ${guide.localData.municipalRegulations.join('<br/>• ')}</p>` : ''}
  `;
  
  // Sections de contenu
  const contentSections: CityGuideSection[] = [
    {
      id: "author-attribution",
      title: "À propos de ce guide",
      paragraphs: [authorAttribution],
    },
    {
      id: "hero",
      title: guide.hero.title,
      paragraphs: [
        `<p style="font-size: 1.2em; font-weight: 500; color: #2563eb;">${guide.hero.catchphrase}</p>`,
        guide.hero.subtitle,
      ],
    },
    {
      id: "local-data",
      title: `Les spécificités de ${guide.cityName}`,
      paragraphs: [pricesSection, localDataSection],
    },
    ...guide.sections.map(section => ({
      id: section.id,
      title: section.title,
      paragraphs: [
        ...section.content,
        ...(section.tips ? [
          '<div style="background: #dbeafe; border-left: 4px solid #2563eb; padding: 1rem; margin: 1rem 0;">',
          '<strong>Tips Moverz :</strong>',
          '<ul>' + section.tips.map(tip => `<li>${tip}</li>`).join('') + '</ul>',
          '</div>'
        ] : []),
        ...(section.warning ? [
          '<div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 1rem 0;">',
          `<strong>Attention :</strong> ${section.warning}`,
          '</div>'
        ] : []),
      ],
    })),
  ];
  
  // Quartiers
  if (guide.neighborhoods.length > 0) {
    const neighborhoodsHtml = guide.neighborhoods.map(n => {
      const difficultyColors = {
        facile: '#10b981',
        moyen: '#f59e0b',
        difficile: '#ef4444',
      };
      const difficultyLabels = {
        facile: 'Facile',
        moyen: 'Moyen',
        difficile: 'Difficile',
      };
      
      return `
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; margin: 0.5rem 0;">
          <h5 style="margin-top: 0;">${n.name} <span style="color: ${difficultyColors[n.accessibility]}; font-size: 0.9em;">${difficultyLabels[n.accessibility]}</span></h5>
          <p>${n.specifics}</p>
          <p style="background: #f0f9ff; padding: 0.75rem; border-radius: 4px; margin: 0;"><strong>Tip Moverz :</strong> ${n.tip}</p>
        </div>
      `;
    }).join('');
    
    contentSections.push({
      id: "neighborhoods",
      title: "Quartiers : où c'est facile, où ça se complique",
      paragraphs: [neighborhoodsHtml],
    });
  }
  
  // Témoignages
  if (guide.testimonials && guide.testimonials.length > 0) {
    const testimonialsHtml = guide.testimonials.map(t => `
      <div style="background: #f9fafb; border-left: 3px solid #6366f1; padding: 1rem; margin: 1rem 0;">
        <p><strong>Situation :</strong> ${t.situation}</p>
        <p><strong>Défi :</strong> ${t.challenge}</p>
        <p><strong>Solution :</strong> ${t.solution}</p>
        <p style="color: #10b981; font-weight: 500; margin-bottom: 0;"><strong>Résultat :</strong> ${t.result}</p>
      </div>
    `).join('');
    
    contentSections.push({
      id: "testimonials",
      title: "Cas réels de déménagements",
      paragraphs: [testimonialsHtml],
    });
  }
  
  // Checklist
  const checklistHtml = guide.checklist.map(cat => `
    <div style="margin: 1rem 0;">
      <h5 style="background: #2563eb; color: white; padding: 0.5rem 1rem; border-radius: 4px; margin-bottom: 0.5rem;">${cat.category}</h5>
      <ul>
        ${cat.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  
  contentSections.push({
    id: "checklist",
    title: "Checklist complète (à imprimer)",
    paragraphs: [checklistHtml],
  });
  
  // FAQ
  const faqHtml = guide.faq.map(q => `
    <div style="margin: 1rem 0;">
      <h5 style="color: #2563eb;">${q.question}</h5>
      <p>${q.answer}</p>
    </div>
  `).join('');
  
  contentSections.push({
    id: "faq",
    title: "Questions fréquentes",
    paragraphs: [faqHtml],
  });
  
  // Liens utiles
  const linksHtml = guide.usefulLinks.map(link => `
    <div style="margin: 0.75rem 0;">
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: 500;">${link.label} →</a><br/>
      <span style="color: #6b7280; font-size: 0.9em;">${link.description}</span>
    </div>
  `).join('');
  
  contentSections.push({
    id: "useful-links",
    title: "Liens utiles",
    paragraphs: [linksHtml],
  });
  
  // Calcul du nombre de mots
  const allText = [
    guide.hero.title,
    guide.hero.subtitle,
    guide.hero.catchphrase,
    ...guide.sections.flatMap(s => s.content),
    ...guide.neighborhoods.map(n => n.specifics + n.tip),
    ...guide.checklist.flatMap(c => c.items),
    ...guide.faq.flatMap(q => q.question + q.answer),
  ].join(' ');
  
  const wordCount = allText.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;
  const estimatedReadingMinutes = Math.max(8, Math.round(wordCount / 200));
  
  return {
    title: guide.hero.title,
    subtitle: guide.hero.subtitle,
    wordCount,
    estimatedReadingMinutes,
    sections: contentSections,
  };
}

function main() {
  const outDir = path.join(process.cwd(), "public", "data", "city-guides");
  fs.mkdirSync(outDir, { recursive: true });
  
  const generatedCities: string[] = [];
  
  // Générer uniquement les guides premium disponibles
  for (const [citySlug, guideData] of Object.entries(PREMIUM_GUIDES_DATABASE)) {
    const guide = convertPremiumGuideToLongForm(guideData);
    const outPath = path.join(outDir, `${citySlug}.json`);
    fs.writeFileSync(outPath, JSON.stringify(guide, null, 2) + "\n", "utf8");
    
    generatedCities.push(citySlug);
    console.log(`[premium-guides] OK ${citySlug}.json (${guide.wordCount} words, ${guide.estimatedReadingMinutes}min read)`);
  }
  
  const marker = {
    generatedAt: new Date().toISOString(),
    type: "premium",
    generated: generatedCities.length,
    cities: generatedCities,
  };
  fs.writeFileSync(path.join(outDir, "_meta.json"), JSON.stringify(marker, null, 2) + "\n", "utf8");
  
  console.log(`\n[premium-guides] Generated ${generatedCities.length} premium guides`);
  console.log(`[premium-guides] TODO: Add ${20 - generatedCities.length} more cities to reach 20 premium guides`);
}

main();
