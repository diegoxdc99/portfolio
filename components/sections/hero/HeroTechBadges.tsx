import {
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiRedis,
} from '@icons-pack/react-simple-icons'
import { Cloud } from 'lucide-react'
import type { TechBadge } from '@/types'

const ICONS: Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>> = {
  nodejs: SiNodedotjs,
  nestjs: SiNestjs,
  typescript: SiTypescript,
  databases: SiPostgresql,
  redis: SiRedis,
  cloud: Cloud,
}

interface HeroTechBadgesProps {
  badges: TechBadge[]
  label: string
}

export default function HeroTechBadges({ badges, label }: HeroTechBadgesProps) {
  return (
    <div className="pt-8 border-t border-slate-800/60 flex flex-col gap-4">
      <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">{label}</span>
      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
        {badges.map((badge) => {
          const Icon = ICONS[badge.id]

          return (
            <div
              key={badge.id}
              className={[
                'group flex items-center gap-2 px-3 py-1.5 rounded-full',
                'border border-slate-800 bg-surface/50 transition-all duration-200 cursor-default',
                badge.hoverColor,
              ].join(' ')}
              title={badge.name}
            >
              {Icon && (
                <Icon
                  className={`w-4 h-4 text-slate-400 transition-colors ${badge.iconColor}`}
                  aria-hidden
                />
              )}
              <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
                {badge.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
