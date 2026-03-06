'use client'

import { useEffect, useState } from 'react'

interface StickyCTAMobileProps {
  quoteUrl: string
  text?: string
}

export function StickyCTAMobile({ quoteUrl, text = 'Obtenir mes devis' }: StickyCTAMobileProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Afficher après 500px de scroll
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[var(--color-border)] shadow-lg p-4 animate-in slide-in-from-bottom duration-300">
      <a
        href={quoteUrl}
        className="block w-full text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
        style={{ background: "#F59E0B", boxShadow: "0 4px 12px rgba(245,158,11,0.3)" }}
      >
        {text}
      </a>
      <p className="mt-2 text-center text-xs text-[var(--color-text-secondary)]">
        Astuce : plus le dossier est précis, plus les devis sont fiables
      </p>
    </div>
  )
}

