'use client'

import { useEffect, useState } from 'react'

interface StickyCTAMobileProps {
  quoteUrl: string
  text?: string
}

export function StickyCTAMobile({ quoteUrl, text = 'Comparer maintenant' }: StickyCTAMobileProps) {
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
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg p-4 animate-in slide-in-from-bottom duration-300">
      <a
        href={quoteUrl}
        className="block w-full bg-[#2B7A78] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#236663] transition-colors"
      >
        {text}
      </a>
    </div>
  )
}

