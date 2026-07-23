import { useLayoutEffect, useRef } from "react";
import heroHighway from "@/assets/hero-highway.jpg";
import { createHeroScrollAnimation } from "@/animations/heroScrollAnimation";
import MagnifierLens from "@/components/MagnifierLens";
import Waves from "@/components/Waves";

function Hero() {
  const wrapperRef = useRef(null);
  const bgOverlayRef = useRef(null);
  const headlineRef = useRef(null);
  const scrollHintRef = useRef(null);
  const wavesRef = useRef(null);
  const circleRef = useRef(null);
  const sideCopyRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const scrollTrigger = createHeroScrollAnimation({
      wrapper: wrapperRef.current,
      bgOverlay: bgOverlayRef.current,
      headline: headlineRef.current,
      scrollHint: scrollHintRef.current,
      waves: wavesRef.current,
      circle: circleRef.current,
      sideCopy: sideCopyRef.current,
      card: cardRef.current,
    });

    return () => scrollTrigger?.kill();
  }, []);

  return (
    <section ref={wrapperRef} className="relative h-screen bg-white overflow-hidden">
      {/* Dark backdrop that fades in as the lens grows, turning stage 1 (white) into stage 2 (dark) */}
      <div ref={bgOverlayRef} className="absolute inset-0 bg-dark" />

      {/* Stage 1: company name over a plain white background, with the wave graphic beneath */}
      <div
        ref={headlineRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center"
      >
        <h1 className="hero-title text-ink text-[13vw] sm:text-[10vw] md:text-6xl lg:text-7xl font-black leading-[0.95]">
          CRE<span className="teal-text">O</span>
          <br />
          <span className="underline decoration-ink/70">ELEMENTS</span>
        </h1>
      </div>

      <p
        ref={scrollHintRef}
        className="absolute bottom-44 sm:bottom-52 left-1/2 -translate-x-1/2 text-sm sm:text-base text-ink/60 tracking-wide flex flex-col items-center gap-2 z-10"
      >
        Scroll to Explore
        <span className="h-6 w-px bg-ink/30 animate-pulse" />
      </p>

      <div ref={wavesRef} className="absolute inset-x-0 bottom-0 h-40 sm:h-48">
        <Waves />
      </div>

      {/* Magnifying glass that grows to reveal the highway photo */}
      <div
        ref={circleRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        style={{ width: "42vh", height: "37.6vh" }}
      >
        <MagnifierLens
          imgSrc={heroHighway}
          imgAlt="Open highway stretching to the horizon"
          className="h-full w-full"
        />

        {/* About Us preview card, revealed once the lens has grown, positioned over the photo circle */}
        <div
          ref={cardRef}
          className="absolute left-[7%] top-[10%] h-[74%] w-[86%] flex items-center justify-center p-2"
        >
          {/* Fixed-height viewport with overflow hidden — the text column inside
              it is taller than this box and scrolls upward via GSAP, so you
              read the About Us copy by scrolling, as if through the lens. */}
          <div className="h-full w-full overflow-hidden rounded-2xl bg-black/55 backdrop-blur-sm p-4 sm:p-6 text-left">
            <div>
              <h3 className="text-lg sm:text-2xl font-black teal-text">About Us</h3>
              <p className="mt-3 text-xs sm:text-sm text-white/90 leading-relaxed">
                Creo Elements is your one-stop shop for all things digital marketing. We help
                businesses of all sizes achieve success in the ever-evolving online world. Our
                comprehensive suite of services helps you build a strong brand presence and drive
                results.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-white/90 leading-relaxed">
                We offer a wide range of services, including website design & development, social
                media management, performance marketing, SEO, and branding solutions. We take a
                collaborative approach, working closely with you to understand your specific
                needs and develop a strategy that gets noticed.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-white/90 leading-relaxed">
                Let's make an impact together…
              </p>
              <a href="/about" className="mt-3 inline-block text-xs sm:text-sm font-bold underline teal-text">
                Read More about Creo Elements
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Side copy revealed alongside the growing lens */}
      <div
        ref={sideCopyRef}
        className="absolute inset-0 flex items-center justify-between px-6 sm:px-16 pointer-events-none z-10"
      >
        <h2 className="hero-title text-white text-[9vw] sm:text-5xl md:text-6xl leading-[0.95]">
          Your
          <br />
          Road
          <br />
          to
        </h2>
        <h2 className="hero-title text-white text-[9vw] sm:text-5xl md:text-6xl leading-[0.95] text-right">
          Endless
          <br />
          Possibilities
        </h2>
      </div>
    </section>
  );
}

export default Hero;
