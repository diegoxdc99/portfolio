'use client'

import { useGsapContext } from '@/hooks/useGsapContext'
import { gsap, ScrollTrigger } from '@/lib/gsap'

/**
 * Vertical connector line that grows from top → bottom as the user scrolls
 * through the Experience section. Uses clipPath to avoid sub-pixel bleed.
 * Also triggers the end-diamond animation when progress reaches ~97%.
 */
/** Walk offsetParent chain to get element's top relative to an ancestor. */
function getRelativeTop(el: HTMLElement, ancestor: HTMLElement): number {
  let top = 0
  let current: HTMLElement | null = el
  while (current && current !== ancestor) {
    top += current.offsetTop
    current = current.offsetParent as HTMLElement | null
  }
  return top
}

interface NodeEntry {
  node: HTMLElement
  circle: HTMLElement
  card: HTMLElement | null
  threshold: number
  active: boolean
}

export default function TimelineLine() {
  const ref = useGsapContext<HTMLDivElement>((container) => {
    const foreground = container.querySelector<HTMLElement>('[data-line-fill]')
    const section = container.parentElement ?? container
    const diamond = section.querySelector<HTMLElement>('[data-timeline-diamond]')
    if (!foreground) return

    gsap.set(foreground, { clipPath: 'inset(0 0 100% 0)' })
    if (diamond) {
      gsap.set(diamond, { backgroundColor: '#1e293b', borderColor: '#475569' })
    }

    // ── Build node entries ──
    const rawNodes = Array.from(
      section.querySelectorAll<HTMLElement>('[data-timeline-node]'),
    )

    const entries: NodeEntry[] = rawNodes
      .filter((n) => !n.hasAttribute('data-node-current'))
      .map((node) => {
        const circle = node.querySelector<HTMLElement>('div') ?? node
        const cardParent = node.closest('[class*="mb-20"]')
        const card = cardParent?.querySelector<HTMLElement>('[data-timeline-card]') ?? null
        // Disable CSS transitions so they don't fight with GSAP
        circle.style.transition = 'none'
        if (card) card.style.transition = 'none'
        return { node, circle, card, threshold: 0, active: false }
      })

    function recalcThresholds() {
      const sectionH = section.scrollHeight || 1
      for (const entry of entries) {
        entry.threshold = getRelativeTop(entry.node, section) / sectionH
      }
    }
    recalcThresholds()

    const onRefresh = () => recalcThresholds()
    ScrollTrigger.addEventListener('refresh', onRefresh)

    let diamondFilled = false
    let activeTween: gsap.core.Tween | null = null

    ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      end: 'bottom 25%',
      scrub: 1.2,
      onUpdate: (self) => {
        const bottom = Math.max(0, (1 - self.progress) * 100)
        gsap.set(foreground, { clipPath: `inset(0 0 ${bottom}% 0)` })

        // ── Activate / deactivate nodes ──
        for (const entry of entries) {
          const shouldActivate = self.progress >= entry.threshold
          if (shouldActivate && !entry.active) {
            entry.active = true
            gsap.to(entry.circle, {
              backgroundColor: '#3b82f6',
              borderColor: '#3b82f6',
              boxShadow: '0 0 12px 2px rgba(59,130,246,0.5)',
              scale: 1.4,
              duration: 0.2,
              ease: 'back.out(1.7)',
              overwrite: true,
            })
            if (entry.card) {
              gsap.to(entry.card, {
                borderColor: 'rgba(59,130,246,0.4)',
                boxShadow: '0 0 20px 0px rgba(59,130,246,0.1)',
                duration: 0.2,
                ease: 'power2.out',
                overwrite: true,
              })
            }
          } else if (!shouldActivate && entry.active) {
            entry.active = false
            gsap.set(entry.circle, {
              backgroundColor: '#334155',
              borderColor: '#64748b',
              boxShadow: 'none',
              scale: 1,
              overwrite: true,
            })
            if (entry.card) {
              gsap.set(entry.card, {
                borderColor: '#1e293b',
                boxShadow: 'none',
                overwrite: true,
              })
            }
          }
        }

        // ── Diamond activation ──
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
      onKill: () => {
        ScrollTrigger.removeEventListener('refresh', onRefresh)
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
