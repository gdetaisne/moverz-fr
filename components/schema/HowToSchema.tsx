interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  title: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // Format ISO 8601 (ex: "PT30M" = 30 minutes)
  estimatedCost?: {
    value: string;
    currency: string;
  };
  supply?: string[]; // Matériel nécessaire
  tool?: string[]; // Outils nécessaires
}

/**
 * Composant HowTo Schema pour rich snippets Google
 * 
 * Génère un rich snippet "étapes" visible dans les SERP
 * Gain CTR attendu : +10-20% sur guides pratiques
 * 
 * Exemples d'articles éligibles :
 * - "Comment préparer un déménagement"
 * - "Comment emballer ses affaires"
 * - "Comment choisir un déménageur"
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data/how-to
 */
export function HowToSchema({
  title,
  description,
  steps,
  totalTime,
  estimatedCost,
  supply,
  tool,
}: HowToSchemaProps) {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description: description,
    totalTime: totalTime,
    estimatedCost: estimatedCost ? {
      "@type": "MonetaryAmount",
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    } : undefined,
    supply: supply?.map(item => ({
      "@type": "HowToSupply",
      name: item,
    })),
    tool: tool?.map(item => ({
      "@type": "HowToTool",
      name: item,
    })),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(howToData, null, 0),
      }}
    />
  );
}
