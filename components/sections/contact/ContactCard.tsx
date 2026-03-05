import { Linkedin, Github, ArrowRight } from 'lucide-react'
import type { SocialLink } from '@/types'

interface ContactCardProps {
  link: SocialLink
  primaryLabel: string
  secondaryLabel: string
}

const ICONS = {
  linkedin: Linkedin,
  github: Github,
}

const CARD_STYLES: Record<SocialLink['icon'], string> = {
  linkedin:
    'hover:bg-brand/10 hover:border-brand/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
  github:
    'hover:bg-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]',
}

const ICON_BG_STYLES: Record<SocialLink['icon'], string> = {
  linkedin: 'group-hover:bg-brand',
  github: 'group-hover:bg-white group-hover:[&>svg]:text-black',
}

export default function ContactCard({ link, primaryLabel, secondaryLabel }: ContactCardProps) {
  const Icon = ICONS[link.icon]
  const cardStyle = CARD_STYLES[link.icon]
  const iconBgStyle = ICON_BG_STYLES[link.icon]

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.network} — @${link.username}`}
      className={[
        'group relative flex flex-col items-center justify-center p-8 rounded-xl',
        'bg-slate-900/50 border border-slate-700 transition-all duration-300',
        '-translate-y-0 hover:-translate-y-1',
        cardStyle,
      ].join(' ')}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-xl" aria-hidden />

      {/* Icon */}
      <div
        className={[
          'relative w-16 h-16 mb-5 flex items-center justify-center',
          'bg-slate-800 rounded-full transition-colors duration-300 shadow-lg',
          iconBgStyle,
        ].join(' ')}
      >
        <Icon className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors duration-300" aria-hidden />
      </div>

      {/* Labels */}
      <h3 className="text-xl font-bold text-white mb-1">{primaryLabel}</h3>
      <p className="text-sm text-slate-500 font-mono group-hover:text-slate-300 transition-colors">
        @{link.username}
      </p>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-500 group-hover:text-brand tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-all">
        <span>{secondaryLabel}</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
      </div>
    </a>
  )
}
