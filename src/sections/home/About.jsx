import { useLayoutEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import frameImg from "@/assets/hero-frame.webp";
import aboutRoad from "@/assets/about-road.jpg";
import { createAboutScrollAnimation } from "@/animations/aboutScrollAnimation";

// Precise coordinates of the transparent lens hole within hero-frame.webp,
// measured from the source image (1600x800), expressed as percentages so
// the photo "window" lines up with the hole at any render size. The
// "Your Road to Endless Possibilities" copy is already baked into this
// image, so no separate HTML text is rendered on top of it.
const LENS_HOLE = { left: "37.19%", top: "17%", width: "26.06%", height: "52.12%" };

function About() {
  const wrapperRef = useRef(null);
  const lensBoxRef = useRef(null);
  const fullPhotoRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const scrollTrigger = createAboutScrollAnimation({
      wrapper: wrapperRef.current,
      lensBox: lensBoxRef.current,
      fullPhoto: fullPhotoRef.current,
      card: cardRef.current,
    });

    return () => scrollTrigger?.kill();
  }, []);

  return (
    <section ref={wrapperRef} className="relative h-screen" style={{ backgroundColor: "#242424" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* The magnifying glass artwork (photo + "Your Road..." copy baked in), which simply grows to fill the screen */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div ref={lensBoxRef} className="relative w-[70vw] max-w-[1600px] aspect-[2/1]">
            <div
              className="absolute rounded-full overflow-hidden"
              style={{
                left: LENS_HOLE.left,
                top: LENS_HOLE.top,
                width: LENS_HOLE.width,
                height: LENS_HOLE.height,
              }}
            >
              <img src={aboutRoad} alt="" className="h-full w-full object-cover" />
            </div>
            <img src={frameImg} alt="Magnifying glass: your road to endless possibilities" className="absolute inset-0 h-full w-full object-contain" />
          </div>
        </div>

        {/* Full-bleed reveal of the same photo, crossfaded in once the glass has grown large enough */}
        <img
          ref={fullPhotoRef}
          src={aboutRoad}
          alt="Open highway stretching to the horizon"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        {/* About Us glass card, revealed on top of the full-bleed photo */}
        <div ref={cardRef} className="absolute inset-0 flex items-center justify-center px-5 sm:px-6">
          <div className="max-w-2xl rounded-3xl bg-white/85 backdrop-blur-md p-6 sm:p-10 md:p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-ink">About Us</h2>
            <div className="mt-5 space-y-4 text-ink/80 leading-relaxed text-sm sm:text-base">
              <p>
                Creo Elements is your one-stop shop for all things digital marketing. We help
                businesses of all sizes to achieve success in the ever-evolving online world. Our
                comprehensive suite of services helps you build a strong brand presence and drive
                results.
              </p>
              <p>
                We offer a wide range of services, including website design & development, social
                media management, performance marketing, SEO, and branding solutions. We take a
                collaborative approach, working closely with you to understand your specific
                needs and develop a strategy that gets noticed.
              </p>
              <p className="italic">Let's make an impact together…</p>
            </div>
            <a href="/about" className="mt-6 inline-flex items-center gap-2 font-bold teal-text group">
              Read More about Creo Elements
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;