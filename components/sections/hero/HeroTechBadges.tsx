import type { TechBadge } from '@/types'

interface HeroTechBadgesProps {
  badges: TechBadge[]
  label: string
}

export default function HeroTechBadges({ badges, label }: HeroTechBadgesProps) {
  return (
    <div className="pt-8 border-t border-slate-800/60 flex flex-col gap-4">
      <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">{label}</span>
      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={[
              'group flex items-center gap-2 px-3 py-1.5 rounded-full',
              'border border-slate-800 bg-surface/50 transition-all duration-200 cursor-default',
              badge.hoverColor,
            ].join(' ')}
            title={badge.name}
          >
            <BadgeIcon id={badge.id} className={`w-4 h-4 text-slate-400 transition-colors ${badge.iconColor}`} />
            <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
              {badge.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── SVG icon per technology ──────────────────────────────────────────────────

function BadgeIcon({ id, className }: { id: string; className: string }) {
  switch (id) {
    case 'nestjs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M11.636 0a3.21 3.21 0 0 0-1.747.518L5.457 3.31a3.21 3.21 0 0 0-1.61 2.785v5.81a3.21 3.21 0 0 0 1.61 2.785l4.432 2.792a3.21 3.21 0 0 0 3.494 0l4.432-2.792a3.21 3.21 0 0 0 1.61-2.786V6.095a3.21 3.21 0 0 0-1.61-2.785L13.383.518A3.21 3.21 0 0 0 11.636 0z" />
        </svg>
      )
    case 'nodejs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M11.998 24a.8.8 0 0 1-.388-.1l-1.235-.73c-.184-.103-.094-.14-.034-.161.246-.085.295-.104.556-.252.027-.016.063-.01.09.006l.95.562a.12.12 0 0 0 .116 0l3.697-2.135a.12.12 0 0 0 .058-.1V8.867a.12.12 0 0 0-.058-.101L12.054 6.63a.12.12 0 0 0-.116 0L8.241 8.766a.12.12 0 0 0-.059.1v4.264c0 .041.022.08.059.1l1.013.585c.55.274.886-.049.886-.373V9.285a.11.11 0 0 1 .11-.11h.48a.11.11 0 0 1 .11.11v4.158c0 .73-.397 1.148-1.087 1.148-.212 0-.38 0-.846-.23l-.97-.558a.56.56 0 0 1-.278-.484V8.867a.56.56 0 0 1 .278-.484l3.697-2.135a.58.58 0 0 1 .556 0l3.697 2.135a.56.56 0 0 1 .278.484v4.264a.56.56 0 0 1-.278.484l-3.697 2.135a.58.58 0 0 1-.556 0z" />
        </svg>
      )
    case 'typescript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
      )
    case 'databases':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
          <path d="M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9" />
          <path d="M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4" />
        </svg>
      )
    case 'redis':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M10.5 2.661L5.404 5.03 3.75 4.217 8.836 1.85zm2.982.008l1.665.813-5.086 2.376L8.4 5.046zM3.75 5.607l2.314 1.13v2.195L3.75 7.78zm4.968 2.42v2.189l-2.024-.989V7.232zm-2.654-.53L3.75 6.37V5.19zm5.17.6l-2.516 1.13v2.185l2.516-1.168zm-2.516-.6L6.41 6.361 8.937 5.23zm7.058 9.226c-3.53.173-5.872-.814-5.872-1.67 0-.855 2.342-1.663 5.872-1.836 3.53-.172 5.872.815 5.872 1.67 0 .855-2.342 1.664-5.872 1.836m-.617-4.76l-1.008.497-1.01-.497 1.01-.497zm2.598-1.262l-1.01.497-1.008-.497 1.008-.497zm-2.598 2.466l-1.008.497-1.01-.497 1.01-.497zm2.598-1.263l-1.01.497-1.008-.497 1.008-.497zm2.598 1.263l-1.01.497-1.008-.497 1.008-.497zm-1.3-2.466l-1.009.497-1.009-.497 1.009-.497zm-2.595 4.932l-1.008.497-1.01-.497 1.01-.497zm2.595-1.263l-1.009.497-1.009-.497 1.009-.497zm-1.3 2.466l-1.008.497-1.01-.497 1.01-.497z" />
        </svg>
      )
    case 'cloud':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    default:
      return <span className={className} aria-hidden>●</span>
  }
}
