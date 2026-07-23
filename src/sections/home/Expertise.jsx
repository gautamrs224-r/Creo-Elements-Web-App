import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ServiceCard({ title, img, desc }) {
  return (
    <div className="svc-card p-6 sm:p-10 text-white grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-center">
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="h-28 w-28 sm:h-36 sm:w-36 rounded-2xl object-cover mx-auto sm:mx-0"
      />
      <div>
        <h3 className="text-xl sm:text-2xl font-black teal-text">{title}</h3>
        <p className="mt-3 sm:mt-4 text-white/75 leading-relaxed text-sm sm:text-base">{desc}</p>
        <button className="teal-btn mt-5 sm:mt-6">Learn More</button>
      </div>
    </div>
  );
}

function Expertise() {
  const headingRef = useScrollReveal({ stagger: 0.08 });
  const gridRef = useScrollReveal({ stagger: 0.06 });

  return (
    <section className="py-24 md:py-32 bg-dark">
      <div ref={headingRef} className="text-center px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white">Our Expertise</h2>
        <p className="mt-3 text-white/60">
          Discover our range of professional services designed to elevate your brand.
        </p>
      </div>

      <div ref={gridRef} className="mx-auto max-w-4xl px-5 sm:px-6 space-y-6 sm:space-y-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Expertise;