import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Recreates the original site's scroll-linked hero:
 *  1. "360° Marketing" sits over the full-bleed highway photo.
 *  2. As the user scrolls, the headline fades and a circular "portal"
 *     containing the same photo grows from a small ring into a
 *     full-bleed image, revealing the "Your road to endless
 *     possibilities" copy and the About Us preview card.
 *
 * Returns the ScrollTrigger instance so the caller can kill it on unmount.
 */
export function createHeroScrollAnimation({
  wrapper,
  bgOverlay,
  headline,
  scrollHint,
  waves,
  circle,
  sideCopy,
  card,
}) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: "+=250%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  // Initial state: white background, tiny lens, card hidden and small
  gsap.set(bgOverlay, { opacity: 0 });
  gsap.set(circle, { scale: 0.12, opacity: 1 });
  gsap.set(sideCopy, { opacity: 0 });
  gsap.set(card, { opacity: 0, scale: 0.55, transformOrigin: "center center" });

  tl.to(scrollHint, { opacity: 0, duration: 0.1 }, 0)
    .to(headline, { opacity: 0, y: -40, duration: 0.3 }, 0)
    .to(waves, { opacity: 0, y: 40, duration: 0.3 }, 0)
    .to(bgOverlay, { opacity: 1, duration: 0.35 }, 0.08)
    .to(circle, { scale: 1, duration: 0.6, ease: "power2.out" }, 0.1)
    .to(sideCopy, { opacity: 1, duration: 0.2 }, 0.45)
    // The About Us card grows from a small hint into a large, fully
    // readable panel as the user keeps scrolling — matching the reference
    // where it visibly expands to fill most of the lens.
    .to(card, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }, 0.5);

  return tl.scrollTrigger;
}
