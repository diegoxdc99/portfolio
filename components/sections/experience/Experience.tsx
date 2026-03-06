'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { portfolio } from '@/data/portfolio'
import ExperienceCard from './ExperienceCard'
import TimelineLine from './TimelineLine'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* ── Section header ── */}
      <div className="mb-16 relative">
        <div className="flex items-center gap-4 mb-3">
          <span className="h-px w-12 bg-brand" aria-hidden />
          <span className="text-brand text-xs font-mono tracking-widest uppercase">
            {t({ en: 'System Log / Career_History', es: 'Log del Sistema / Historial_Carrera' })}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          {t({ en: 'Execution Path', es: 'Trayectoria' })}
        </h2>
        <p className="text-slate-400 max-w-xl text-lg font-light">
          {t({
            en: 'Detailed log of professional engagements and technical milestones.',
            es: 'Registro detallado de roles profesionales e hitos técnicos.',
          })}
        </p>

        {/* Decorative corner SVG */}
        <div className="absolute right-0 top-0 hidden md:block opacity-20" aria-hidden>
          <svg width="80" height="80" viewBox="0 0 100 100">
            <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="#3b82f6" strokeWidth="1" />
            <path d="M90 10 L80 20" stroke="#3b82f6" strokeWidth="1" />
            <path d="M10 90 L20 80" stroke="#3b82f6" strokeWidth="1" />
            <rect fill="#3b82f6" width="5" height="5" x="8" y="8" />
            <rect fill="#3b82f6" width="5" height="5" x="87" y="8" />
            <rect fill="#3b82f6" width="5" height="5" x="8" y="87" />
            <rect fill="#3b82f6" width="5" height="5" x="87" y="87" />
          </svg>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="relative max-w-5xl mx-auto pl-8 md:pl-0">
        {/* Animated vertical connector */}
        <TimelineLine />

        {/* Experience entries */}
        {portfolio.experience.map((item, index) => (
          <ExperienceCard key={item.id} item={item} index={index} />
        ))}

        {/* Timeline end node — animated by GSAP in TimelineLine when progress ≥ 97% */}
        <div
          data-timeline-diamond
          aria-hidden
          className="absolute bottom-0 left-[3px] md:left-1/2 -translate-x-[7px] md:-translate-x-1/2 w-4 h-4 rotate-45 border"
        />
      </div>
    </div>
  )
}
