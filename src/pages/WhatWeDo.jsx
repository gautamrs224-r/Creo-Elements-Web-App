import PageHero from "@/components/layout/PageHero";
import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ServiceCard({ title, img, desc }) {
  return (
    <div className="svc-card p-5 sm:p-6 text-white flex flex-col">
      <div className="rounded-2xl overflow-hidden aspect-square mb-4 bg-black/30">
        <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-black teal-text">{title}</h3>
      <p className="mt-2 text-white/75 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function WhatWeDo() {
  const gridRef = useScrollReveal({ stagger: 0.05 });

  return (
    <PageHero
      eyebrow="Our Services"
      title="What We Do"
      subtitle="A 360° marketing suite designed to elevate every touchpoint of your brand."
    >
      <div
        ref={gridRef}
        className="mx-auto max-w-6xl px-5 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </PageHero>
  );
}

export default WhatWeDo;
