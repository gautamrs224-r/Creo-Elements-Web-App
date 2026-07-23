import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

const STACK_DEPTH = 6;
const VH_PER_CARD = 70;

function StackedCardChrome() {
  // Decorative "deck" of nested card edges peeking out above the active
  // card — a static visual layer, independent of which service is shown.
  return (
    <>
      {Array.from({ length: STACK_DEPTH }).map((_, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute inset-x-0 mx-auto rounded-[2.5rem] bg-[#1c1c20] border border-white/5"
          style={{
            top: -((i + 1) * 9),
            height: "100%",
            width: `calc(100% - ${i * 16}px)`,
            opacity: 1 - i * 0.13,
            zIndex: -i - 1,
          }}
        />
      ))}
    </>
  );
}

function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);
  const cardContentRef = useRef(null);

  // Pin the section and advance `activeIndex` as the user scrolls through it.
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: () => `+=${wrapper.offsetHeight - window.innerHeight}`,
      pin: true,
      scrub: 0.5,
      anticipatePin: 1,
      onUpdate: (self) => {
        const next = Math.min(services.length - 1, Math.floor(self.progress * services.length));
        setActiveIndex((prev) => (prev === next ? prev : next));
      },
    });

    return () => scrollTrigger.kill();
  }, []);

  // Cross-fade the front card's content whenever the active service changes.
  useLayoutEffect(() => {
    const el = cardContentRef.current;
    if (!el) return;
    gsap.fromTo(el, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
  }, [activeIndex]);

  const service = services[activeIndex];

  return (
    <section
      ref={wrapperRef}
      className="relative bg-dark"
      style={{ height: `${services.length * VH_PER_CARD}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white">Our Expertise</h2>
          <p className="mt-3 text-white/60">
            Discover our range of professional services designed to elevate your brand.
          </p>
        </div>

        <div className="relative w-full max-w-3xl">
          <StackedCardChrome />

          <div
            ref={cardContentRef}
            className="svc-card relative z-10 p-6 sm:p-10 md:p-12 text-white grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-center"
          >
            <img
              src={service.img}
              alt={service.title}
              className="h-28 w-28 sm:h-36 sm:w-36 rounded-2xl object-cover mx-auto sm:mx-0"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-black teal-text">{service.title}</h3>
              <p className="mt-3 sm:mt-4 text-white/75 leading-relaxed text-sm sm:text-base">
                {service.desc}
              </p>
              <button className="teal-btn mt-5 sm:mt-6">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
