import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pins the About section and, as the user scrolls, simply grows the
 * magnifying-glass artwork (which already has the "Your Road to Endless
 * Possibilities" copy baked into it) until it fills the entire screen,
 * then crossfades into the full-bleed photo with the About Us card on top.
 *
 * Returns the ScrollTrigger instance so the caller can kill it on unmount.
 */
export function createAboutScrollAnimation({ wrapper, lensBox, fullPhoto, card }) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: "+=220%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  gsap.set(lensBox, { scale: 1, transformOrigin: "center center" });
  gsap.set(fullPhoto, { opacity: 0 });
  gsap.set(card, { opacity: 0, y: 24 });

  tl.to(lensBox, { scale: 8, duration: 1, ease: "power1.in" }, 0)
    .to(lensBox, { opacity: 0, duration: 0.2 }, 0.65)
    .to(fullPhoto, { opacity: 1, duration: 0.25 }, 0.68)
    .to(card, { opacity: 1, y: 0, duration: 0.25 }, 0.82);

  return tl.scrollTrigger;
}