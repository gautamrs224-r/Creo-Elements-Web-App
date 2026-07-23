import Waves from "@/components/Waves";
import { useFadeUpOnMount } from "@/hooks/useFadeUpOnMount";

/**
 * The homepage hero: just the wordmark and the animated wave graphic on a
 * plain white background. This section is intentionally static — the
 * magnifying-glass scroll animation lives entirely in the About section
 * right below it (see sections/home/About.jsx).
 */
function Hero() {
  const contentRef = useFadeUpOnMount({ stagger: 0.15 });

  return (
    <section className="relative h-screen bg-white overflow-hidden">
      <div ref={contentRef} className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center">
        <h1 className="hero-title text-ink text-[13vw] sm:text-[10vw] md:text-6xl lg:text-7xl font-black leading-[0.95]">
          CRE<span className="teal-text">O</span>
          <br />
          <span className="underline decoration-ink/70">ELEMENTS</span>
        </h1>

        <p className="absolute bottom-44 sm:bottom-52 left-1/2 -translate-x-1/2 text-sm sm:text-base text-ink/60 tracking-wide flex flex-col items-center gap-2">
          Scroll to Explore
          <span className="h-6 w-px bg-ink/30 animate-pulse" />
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48">
        <Waves />
      </div>
    </section>
  );
}

export default Hero;