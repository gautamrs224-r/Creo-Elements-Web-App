import { partners } from "@/data/partners";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Partners() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal({ stagger: 0.05 });

  return (
    <section className="py-24 bg-white">
      <div ref={headingRef} className="text-center px-6 mb-14">
        <h2 className="text-4xl md:text-5xl font-black text-ink">Affiliates & Partners</h2>
      </div>
      <div ref={gridRef} className="mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow border border-slate-100 flex flex-col items-center text-center"
          >
            <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center p-2 shadow-sm">
              <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
            </div>
            <h3 className="mt-4 text-xl font-black teal-text">{partner.name}</h3>
            <p className="mt-2 text-ink/70 text-sm leading-relaxed">{partner.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
