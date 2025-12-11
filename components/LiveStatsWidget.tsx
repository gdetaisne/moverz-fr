'use client'

import { useEffect, useState } from 'react'

export function LiveStatsWidget() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    // Nombre aléatoire entre 12-28 (réaliste pour une journée)
    const todayCount = Math.floor(Math.random() * 17) + 12
    setCount(todayCount)
  }, [])

  if (count === null) return null

  return (
    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-sm">
      <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-green-800 font-medium">
        {count} personnes ont comparé des devis aujourd'hui
      </span>
    </div>
  )
}

