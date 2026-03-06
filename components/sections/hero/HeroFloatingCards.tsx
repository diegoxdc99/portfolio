'use client'

import { Cloud, Database, Shield, Container } from 'lucide-react'
import type { FloatingCard } from '@/types'
import { useLanguage } from '@/hooks/useLanguage'

interface HeroFloatingCardsProps {
  cards: FloatingCard[]
}

const POSITION_CLASSES: Record<FloatingCard['position'], string> = {
  'top-right': 'absolute top-[12%] right-[5%]',
  'bottom-right': 'absolute bottom-[20%] right-[3%]',
  'bottom-left': 'absolute bottom-[15%] left-[5%]',
  'top-left': 'absolute top-[15%] left-[3%]',
}

const CARD_ICONS: Record<string, typeof Cloud> = {
  cloud: Cloud,
  database: Database,
  security: Shield,
  devops: Container,
}

export default function HeroFloatingCards({ cards }: HeroFloatingCardsProps) {
  const { t } = useLanguage()

  return (
    <>
      {/* SVG connector lines */}
      <svg
        className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-0 opacity-25"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
      >
        <line stroke="#3b82f6" strokeDasharray="4 4" strokeWidth="1" x1="50%" x2="88%" y1="50%" y2="14%" />
        <line stroke="#a855f7" strokeDasharray="4 4" strokeWidth="1" x1="50%" x2="92%" y1="50%" y2="82%" />
        <line stroke="#ef4444" strokeDasharray="4 4" strokeWidth="1" x1="50%" x2="12%" y1="50%" y2="82%" />
        <line stroke="#10b981" strokeDasharray="4 4" strokeWidth="1" x1="50%" x2="8%" y1="50%" y2="18%" />
      </svg>

      {cards.map((card) => {
        const Icon = CARD_ICONS[card.id] ?? Cloud
        const positionClass = POSITION_CLASSES[card.position]

        return (
          <div
            key={card.id}
            className={[
              positionClass,
              'hidden sm:flex group z-20 items-center gap-3 p-3',
              'bg-surface/90 border border-slate-700 backdrop-blur rounded-lg shadow-xl',
              'hover:scale-110 hover:shadow-2xl transition-all duration-200 cursor-default',
              card.accentClass,
            ].join(' ')}
          >
            <div className="p-2 bg-slate-800 group-hover:bg-white/5 rounded transition-colors">
              <Icon className="w-5 h-5" aria-hidden />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider leading-none">
                {t(card.category)}
              </span>
              <span className="font-bold text-white text-xs mt-0.5">{card.value}</span>
            </div>

            {/* Bottom shimmer line on hover */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-60 transition-opacity" aria-hidden />
          </div>
        )
      })}
    </>
  )
}
