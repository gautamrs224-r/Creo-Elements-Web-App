import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "@/data/testimonials";

const AUTO_ADVANCE_MS = 7000;

function Testimonials() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const goTo = (nextIndex) => {
    const card = cardRef.current;
    if (!card) {
      setIndex(nextIndex);
      return;
    }
    gsap.to(card, {
      opacity: 0,
      y: -16,
      duration: 0.25,
      onComplete: () => {
        setIndex(nextIndex);
        gsap.fromTo(card, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.35 });
      },
    });
  };

  const next = () => goTo((index + 1) % testimonials.length);
  const prev = () => goTo((index - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const testimonial = testimonials[index];

  return (
    <section
      className="py-24 md:py-32 relative"
      style={{ background: "linear-gradient(180deg, #17171a 0%, #2ec6a6 60%, #d5f7ee 100%)" }}
    >
      <div className="mx-auto max-w-4xl px-6 relative">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="h-11 w-11 rounded-full bg-white/80 text-ink flex items-center justify-center shadow hover:scale-110 transition"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex-1 min-h-[380px] relative">
            <div ref={cardRef} className="rounded-3xl bg-white/70 backdrop-blur-md p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-black text-ink">{testimonial.name}</h3>
              <p className="mt-4 text-ink/80 leading-relaxed">{testimonial.quote}</p>
              <div className="mt-6">
                <p className="font-bold text-ink">– {testimonial.by}</p>
                {testimonial.role && <p className="text-sm text-ink/60">{testimonial.role}</p>}
              </div>
            </div>
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="h-11 w-11 rounded-full bg-white/80 text-ink flex items-center justify-center shadow hover:scale-110 transition"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-ink" : "w-2 bg-ink/30"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
