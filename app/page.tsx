import Hero from '@/components/sections/hero/Hero'
import Experience from '@/components/sections/experience/Experience'
import Skills from '@/components/sections/skills/Skills'
import Contact from '@/components/sections/contact/Contact'

/**
 * Root page — Server Component.
 * Composes sections; all animation logic lives inside the section components.
 */
export default function HomePage() {
  return (
    <>
      <section id="home" aria-label="Home">
        <Hero />
      </section>

      <section id="experience" aria-label="Experience" className="py-4">
        <Experience />
      </section>

      <section id="skills" aria-label="Skills" className="py-4">
        <Skills />
      </section>

      <section id="contact" aria-label="Contact" className="py-4">
        <Contact />
      </section>
    </>
  )
}
