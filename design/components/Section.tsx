/**
 * SECTION - CONTENEURS UNIFORMES
 */

export const sectionStyles = {
  // Section standard
  default: `
    relative w-full py-12 md:py-16 overflow-hidden
  `.replace(/\s+/g, ' ').trim(),

  // Section compacte
  compact: `
    relative w-full py-8 md:py-12 overflow-hidden
  `.replace(/\s+/g, ' ').trim(),

  // Hero (plus d'espace)
  hero: `
    relative w-full py-16 md:py-20 overflow-hidden
  `.replace(/\s+/g, ' ').trim(),
} as const;

export const sectionVariants = {
  // Fond blanc
  light: `bg-white`,

  // Fond alternatif (Pale Blue Gray)
  alt: `bg-[#E4EEF0]`,

  // Fond dark (1 MAX par page)
  dark: `bg-[#16232B] text-white`,
} as const;

/**
 * RÈGLES:
 * ✅ Alternance sections: white → alt → white
 * ❌ Maximum 1 section dark par page
 * ✅ Hero: py-16 md:py-20
 * ✅ Standard: py-12 md:py-16
 * ✅ Compact: py-8 md:py-12
 */

export const Section = {
  Default: ({ children, variant = 'light', className = '', ...props }: {
    children: React.ReactNode;
    variant?: 'light' | 'alt' | 'dark';
    className?: string;
  } & React.HTMLAttributes<HTMLElement>) => (
    <section className={`${sectionStyles.default} ${sectionVariants[variant]} ${className}`} {...props}>
      {children}
    </section>
  ),
  
  Compact: ({ children, variant = 'light', className = '', ...props }: {
    children: React.ReactNode;
    variant?: 'light' | 'alt' | 'dark';
    className?: string;
  } & React.HTMLAttributes<HTMLElement>) => (
    <section className={`${sectionStyles.compact} ${sectionVariants[variant]} ${className}`} {...props}>
      {children}
    </section>
  ),
  
  Hero: ({ children, className = '', ...props }: {
    children: React.ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLElement>) => (
    <section className={`${sectionStyles.hero} ${className}`} {...props}>
      {children}
    </section>
  ),
};
