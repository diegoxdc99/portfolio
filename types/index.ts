// ─── Domain ───────────────────────────────────────────────────────────────────

export type Language = 'en' | 'es'

export interface BilingualText {
  en: string
  es: string
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: BilingualText
  href: string
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export interface TechBadge {
  id: string
  name: string
  /** Tailwind color class for the hover border + icon, e.g. "hover:border-red-500/30" */
  hoverColor: string
  iconColor: string
}

export interface FloatingCard {
  id: string
  category: BilingualText
  value: string
  /** Visual quadrant position */
  position: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left'
  /** Tailwind accent color for the icon and hover border */
  accentClass: string
}

// ─── Experience ───────────────────────────────────────────────────────────────

export interface ExperienceItem {
  id: string
  company: string
  position: BilingualText
  /** ISO-style range, e.g. "July 2024 – Present". Empty string if unknown. */
  date: string
  current: boolean
  highlights: BilingualText[]
  tech: string[]
}

// ─── Skills ───────────────────────────────────────────────────────────────────

export interface SkillGroup {
  id: string
  name: BilingualText
  level: 1 | 2 | 3 | 4 | 5
  keywords: string[]
}

// ─── Social ───────────────────────────────────────────────────────────────────

export type SocialIcon = 'linkedin' | 'github'

export interface SocialLink {
  id: string
  network: string
  username: string
  href: string
  icon: SocialIcon
}

// ─── Portfolio root ───────────────────────────────────────────────────────────

export interface PortfolioData {
  basics: {
    name: string
    shortName: string
    headline: BilingualText
    subheadline: BilingualText
    location: string
    avatarUrl: string
  }
  summary: BilingualText
  experience: ExperienceItem[]
  skills: SkillGroup[]
  social: SocialLink[]
  nav: NavItem[]
  techBadges: TechBadge[]
  floatingCards: FloatingCard[]
}
