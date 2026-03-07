import Hero from '@/components/sections/hero/Hero'
import Experience from '@/components/sections/experience/Experience'
import TechStack from '@/components/sections/stack/TechStack'
import Principles from '@/components/sections/principles/Principles'
import Contact from '@/components/sections/contact/Contact'

export default function HomePage() {
  return (
    <>
      <section id="home" aria-label="Home">
        <Hero />
      </section>

      <section id="experience" aria-label="Experience">
        <Experience />
      </section>

      <section id="stack" aria-label="Tech Stack">
        <TechStack />
      </section>

      <section id="principles" aria-label="Engineering Principles">
        <Principles />
      </section>

      <section id="contact" aria-label="Contact">
        <Contact />
      </section>
    </>
  )
}
