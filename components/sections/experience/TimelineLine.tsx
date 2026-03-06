'use client'

import { useGsapContext } from '@/hooks/useGsapContext'
import { gsap, ScrollTrigger } from '@/lib/gsap'

/**
 * Vertical connector line that grows from top → bottom as the user scrolls
 * through the Experience section. GSAP ScrollTrigger scrubs the scaleY.
 * Also triggers the end-diamond animation when progress reaches ~97%.
 */
export default function TimelineLine() {
  const ref = useGsapContext<HTMLDivElement>((container) => {
    const foreground = container.querySelector<HTMLElement>('[data-line-fill]')
    const section = container.parentElement ?? container
    const diamond = section.querySelector<HTMLElement>('[data-timeline-diamond]')
    if (!foreground) return

    gsap.set(foreground, { scaleY: 0, transformOrigin: 'top center' })
    if (diamond) {
      gsap.set(diamond, { backgroundColor: '#1e293b', borderColor: '#475569' })
    }

    let diamondFilled = false
    let activeTween: gsap.core.Tween | null = null

    ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      end: 'bottom 25%',
      scrub: 1.2,
      onUpdate: (self) => {
        gsap.set(foreground, { scaleY: self.progress })

        if (!diamond) return

        const shouldFill = self.progress >= 0.99

        if (shouldFill && !diamondFilled) {
          diamondFilled = true
          activeTween?.kill()
          activeTween = gsap.to(diamond, {
            backgroundColor: '#3b82f6',
            borderColor: '#3b82f6',
            boxShadow: '0 0 14px 3px rgba(59,130,246,0.45)',
            duration: 0.35,
            ease: 'power2.out',
            overwrite: true,
          })
        } else if (!shouldFill && diamondFilled) {
          diamondFilled = false
          activeTween?.kill()
          activeTween = gsap.to(diamond, {
            backgroundColor: '#1e293b',
            borderColor: '#475569',
            boxShadow: '0 0 0px 0px transparent',
            duration: 0.3,
            ease: 'power2.inOut',
            overwrite: true,
          })
        }
      },
    })
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute left-[3px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] overflow-hidden"
    >
      {/* Grey track */}
      <div className="absolute inset-0 bg-slate-800" />
      {/* Blue animated fill */}
      <div
        data-line-fill
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #3b82f6, #0ea5e9)' }}
      />
    </div>
  )
}
