/**
 * OMBRES - 3 NIVEAUX MAX
 * Règle: moins d'ombres = plus premium
 */

export const shadows = {
  // Aucune ombre (défaut pour cards)
  none: 'none',

  // Soft - hover states, cards avec élévation légère
  soft: '0 4px 16px rgba(22, 35, 43, 0.08)',

  // Medium - modals, dropdowns
  medium: '0 8px 24px rgba(22, 35, 43, 0.12)',

  // Strong - sticky elements (rarement utilisé)
  strong: '0 12px 40px rgba(22, 35, 43, 0.16)',
} as const;
