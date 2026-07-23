import PageHero from "@/components/layout/PageHero";
import { clients } from "@/data/clients";
import { partners } from "@/data/partners";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Clients() {
  const clientsGridRef = useScrollReveal({ stagger: 0.03 });
  const partnersGridRef = useScrollReveal({ stagger: 0.05 });

  return (
    <PageHero
      eyebrow="Portfolio"
      title="Our Clients & Partners"
      subtitle="We're proud to collaborate with a diverse range of brands, startups and industry leaders."
    >
      <section className="mx-auto max-w-6xl px-5 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-black text-center">Clients</h2>
        <div
          ref={clientsGridRef}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="h-20 sm:h-24 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 border border-slate-200 shadow-sm flex items-center justify-center px-3 text-center overflow-hidden"
            >
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
              ) : (
                <span className="text-ink font-bold text-xs sm:text-sm">{client.name}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-6 mt-20">
        <h2 className="text-2xl sm:text-3xl font-black text-center">Affiliates & Partners</h2>
        <div ref={partnersGridRef} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-2xl transition-shadow border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center p-2 shadow-sm">
                <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="mt-4 text-lg font-black teal-text">{partner.name}</h3>
              <p className="mt-2 text-ink/70 text-sm leading-relaxed">{partner.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageHero>
  );
}

export default Clients;
