'use client'

import { useGsapContext } from '@/hooks/useGsapContext'
import { gsap, ScrollTrigger } from '@/lib/gsap'

/**
 * Vertical connector line that grows from top → bottom as the user scrolls
 * through the Experience section. GSAP ScrollTrigger scrubs the scaleY.
 */
export default function TimelineLine() {
  const ref = useGsapContext<HTMLDivElement>((container) => {
    const foreground = container.querySelector<HTMLElement>('[data-line-fill]')
    if (!foreground) return

    gsap.set(foreground, { scaleY: 0, transformOrigin: 'top center' })

    ScrollTrigger.create({
      trigger: container.parentElement ?? container,
      start: 'top 75%',
      end: 'bottom 25%',
      scrub: 1.2,
      onUpdate: (self) => {
        gsap.set(foreground, { scaleY: self.progress })
      },
    })
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute left-[3px] md:left-1/2 top-0 bottom-0 w-[2px] overflow-hidden"
    >
      {/* Grey track */}
      <div className="absolute inset-0 bg-slate-800" />
      {/* Blue animated fill */}
      <div
        data-line-fill
        className="absolute inset-0 connector-line"
        style={{ background: 'linear-gradient(to bottom, #3b82f6, #0ea5e9)' }}
      />
    </div>
  )
}
