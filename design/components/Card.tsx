/**
 * CARD - UN SEUL STYLE
 */

import { colors } from '../tokens/colors';
import { radius } from '../tokens/radius';
import { shadows } from '../tokens/shadows';

export const cardStyles = {
  // Card standard (défaut: pas d'ombre)
  default: `
    bg-white
    border border-[#E4EEF0]
    rounded-[16px]
    p-6
    transition-shadow duration-200
  `.replace(/\s+/g, ' ').trim(),

  // Card avec hover (témoignages, services)
  hoverable: `
    bg-white
    border border-[#E4EEF0]
    rounded-[16px]
    p-6
    transition-all duration-200
    hover:shadow-[0_4px_16px_rgba(22,35,43,0.08)]
    hover:border-[#042F34]/20
  `.replace(/\s+/g, ' ').trim(),

  // Card sur fond dark
  onDark: `
    bg-white/5
    border border-white/10
    rounded-[16px]
    p-6
    backdrop-blur-sm
  `.replace(/\s+/g, ' ').trim(),
} as const;

/**
 * RÈGLES:
 * ❌ PAS de cards imbriquées (1 niveau max)
 * ❌ PAS de 3-4 bordures différentes
 * ✅ Bordures très subtiles par défaut
 * ✅ Ombre uniquement au hover
 */

export const Card = {
  Default: ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`${cardStyles.default} ${className}`} {...props}>
      {children}
    </div>
  ),
  Hoverable: ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`${cardStyles.hoverable} ${className}`} {...props}>
      {children}
    </div>
  ),
  OnDark: ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`${cardStyles.onDark} ${className}`} {...props}>
      {children}
    </div>
  ),
};
