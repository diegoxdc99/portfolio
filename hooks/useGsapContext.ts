'use client'

import { useLayoutEffect, useRef } from 'react'
import type { DependencyList, RefObject } from 'react'
import { gsap } from '@/lib/gsap'

/**
 * Scoped GSAP context hook. Registers animations inside a GSAP context
 * bound to `containerRef`, and reverts them on cleanup.
 *
 * @param setup  Callback that defines all GSAP animations. Runs after mount.
 * @param deps   Dependency array — same semantics as useLayoutEffect.
 * @returns      A ref to attach to the root container element.
 */
export function useGsapContext<T extends HTMLElement>(
  setup: (container: T) => void,
  deps: DependencyList = [],
): RefObject<T | null> {
  const containerRef = useRef<T | null>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => setup(container), container)
    return () => ctx.revert()
    // `setup` is intentionally excluded — consumers pass stable callbacks
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}
