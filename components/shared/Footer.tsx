import { Linkedin, Github } from 'lucide-react'
import { portfolio } from '@/data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(59,130,246,0.15)] bg-obsidian/50 backdrop-blur-sm py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
        <span>
          {'// '}
          <span className="text-slate-400">{portfolio.basics.shortName}</span>
          {` © ${year}`}
        </span>

        <div className="flex items-center gap-6">
          {portfolio.social.map((link) => {
            const Icon = link.icon === 'linkedin' ? Linkedin : Github

            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.network} profile`}
                className="flex items-center gap-1.5 hover:text-brand transition-colors duration-200"
              >
                <Icon className="w-3.5 h-3.5" aria-hidden />
                <span>{link.network}</span>
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
