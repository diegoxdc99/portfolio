'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Returns the `id` of the most visible section, defaulting to the first entry.
 */
export function useScrollSpy(sectionIds: string[], offset = 80): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return

        // Pick the entry closest to the top of the viewport
        const topmost = visible.reduce((best, entry) =>
          entry.boundingClientRect.top < best.boundingClientRect.top ? entry : best,
        )

        setActiveId(topmost.target.id)
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: 0,
      },
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sectionIds, offset])

  return activeId
}
