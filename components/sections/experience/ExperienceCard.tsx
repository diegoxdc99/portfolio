'use client'

import { motion } from 'framer-motion'
import type { ExperienceItem } from '@/types'
import { useLanguage } from '@/hooks/useLanguage'

interface ExperienceCardProps {
  item: ExperienceItem
  index: number
}

export default function ExperienceCard({ item, index }: ExperienceCardProps) {
  const { t } = useLanguage()
  const isEven = index % 2 === 0

  return (
    <div
      className={[
        'relative mb-20 last:mb-0 group w-full flex flex-col',
        'md:flex-row md:items-center md:justify-between',
        !isEven && 'md:flex-row-reverse',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* ── Timeline node ── */}
      <div
        data-timeline-node
        {...(item.current ? { 'data-node-current': '' } : {})}
        className="absolute left-0 md:left-1/2 w-8 h-8 -translate-x-[44px] md:-translate-x-1/2 flex items-center justify-center z-10"
      >
        {item.current ? (
          <>
            <div className="w-4 h-4 bg-brand rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse-slow" />
            <div className="absolute w-8 h-8 border border-brand/50 rounded-full animate-ping opacity-20" />
          </>
        ) : (
          <div className="w-3 h-3 bg-slate-700 rounded-full border border-slate-500 group-hover:bg-brand group-hover:border-brand transition-colors duration-300" />
        )}
      </div>

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
        className={[
          'md:w-1/2 pl-8 md:pl-0',
          isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left',
        ].join(' ')}
      >
        <div
          data-timeline-card
          className={[
            'bg-surface/40 backdrop-blur border rounded-lg p-6 relative overflow-hidden',
            'transition-colors duration-300',
            item.current
              ? 'border-brand/40 group-hover:border-brand/70'
              : 'border-slate-800 group-hover:border-brand/30',
          ].join(' ')}
        >
          {/* Corner accent for current role */}
          {item.current && (
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand/15 to-transparent rounded-bl-3xl" aria-hidden />
          )}

          {/* Status label */}
          <span
            className={[
              'inline-block px-2 py-1 text-xs font-mono rounded mb-3 border',
              item.current
                ? 'bg-brand/20 text-brand border-brand/20'
                : 'bg-slate-800 text-slate-400 border-slate-700',
            ].join(' ')}
          >
            {item.current
              ? t({ en: 'CURRENT', es: 'ACTUAL' })
              : item.date.split(' ')[item.date.split(' ').length - 1]}
          </span>

          <h3 className="text-xl font-bold text-white mb-0.5">{t(item.position)}</h3>
          <h4 className="text-base text-slate-300 mb-2">{item.company}</h4>

          {/* Product/system description */}
          <p className="text-sm text-slate-500 italic mb-3">{t(item.description)}</p>

          {/* Highlights */}
          <ul className="space-y-1.5">
            {item.highlights.map((h, i) => (
              <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                <span className="text-brand mt-1 shrink-0" aria-hidden>›</span>
                <span>{t(h)}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack — always visible */}
          {item.tech.length > 0 && (
            <div className={`flex flex-wrap gap-1.5 mt-4 ${isEven ? 'md:justify-end' : ''}`}>
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* ── Date column ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={[
          'md:w-1/2 pl-8 md:pl-0 mt-2 md:mt-0',
          isEven ? 'md:pl-16' : 'md:pr-16 md:text-right',
        ].join(' ')}
      >
        <p
          className={[
            'font-mono text-lg font-bold transition-colors duration-300',
            item.current ? 'text-brand' : 'text-slate-500 group-hover:text-brand/70',
          ].join(' ')}
        >
          {item.date || '—'}
        </p>
      </motion.div>
    </div>
  )
}
