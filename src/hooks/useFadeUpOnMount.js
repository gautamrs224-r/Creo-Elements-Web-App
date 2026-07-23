import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Animates an element (and optionally its direct children) in with a
 * fade + upward slide as soon as it mounts. Used for content that should
 * animate immediately, like a page's hero text, rather than content that
 * should wait until it's scrolled into view (see useScrollReveal).
 */
export function useFadeUpOnMount({ delay = 0, y = 20, stagger = 0.1 } = {}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.children.length ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration: 0.7, delay, stagger, ease: "power3.out" }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, y, stagger]);

  return ref;
}
