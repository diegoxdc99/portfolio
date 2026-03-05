/**
 * Single registration point for GSAP plugins.
 * Import { gsap, ScrollTrigger } from here — never import gsap directly
 * in components to avoid duplicate registrations.
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }
