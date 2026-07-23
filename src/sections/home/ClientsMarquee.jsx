import { clients } from "@/data/clients";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ClientCard({ name, logo }) {
  return (
    <div className="shrink-0 h-24 w-44 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 border border-slate-200 shadow-sm flex items-center justify-center px-4 overflow-hidden">
      {logo ? (
        <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
      ) : (
        <span className="text-ink font-bold text-center text-sm tracking-tight">{name}</span>
      )}
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative">
      <div
        className="marquee-track flex gap-6"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((client, i) => (
          <ClientCard key={`${client.name}-${i}`} {...client} />
        ))}
      </div>
    </div>
  );
}

function ClientsMarquee() {
  const headingRef = useScrollReveal();
  const row1 = clients.slice(0, 18);
  const row2 = clients.slice(18);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div ref={headingRef} className="text-center px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-ink">Our Clients</h2>
        <p className="mt-3 text-ink/60">
          We are proud to work with a diverse range of trusted clients and partners.
        </p>
      </div>

      <MarqueeRow items={row1} />
      <div className="h-6" />
      <MarqueeRow items={row2} reverse />
    </section>
  );
}

export default ClientsMarquee;
