/**
 * PILL/BADGE - UNIFORMITÉ TOTALE
 */

import { colors } from '../tokens/colors';
import { radius } from '../tokens/radius';

export const pillStyles = {
  // Pill standard (badges info)
  default: `
    inline-flex items-center gap-2
    px-4 py-2
    bg-[#E4EEF0]
    text-[#16232B]
    text-sm font-medium
    rounded-full
  `.replace(/\s+/g, ' ').trim(),

  // Pill success (confiance, vérifié)
  success: `
    inline-flex items-center gap-2
    px-4 py-2
    bg-[#B5F2DB]/20
    text-[#042F34]
    text-sm font-medium
    rounded-full
  `.replace(/\s+/g, ' ').trim(),
} as const;

/**
 * RÈGLES:
 * ✅ Même taille partout
 * ✅ Icônes optionnelles (16px)
 * ❌ Pills ne sont PAS cliquables (sinon = bouton)
 * ❌ Pas de variations de couleurs au feeling
 */

export const Pill = {
  Default: ({ children, className = '', ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className={`${pillStyles.default} ${className}`} {...props}>
      {children}
    </span>
  ),
  Success: ({ children, className = '', ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className={`${pillStyles.success} ${className}`} {...props}>
      {children}
    </span>
  ),
};
