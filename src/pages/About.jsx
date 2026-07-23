import PageHero from "@/components/layout/PageHero";
import road from "@/assets/road.jpg";
import { team, empowermentSteps } from "@/data/team";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Story() {
  const revealRef = useScrollReveal();

  return (
    <section
      className="relative py-20 sm:py-28 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${road})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div ref={revealRef} className="relative mx-auto max-w-3xl px-5 sm:px-6">
        <div className="rounded-3xl bg-white/85 backdrop-blur-md p-6 sm:p-10 shadow-2xl text-ink">
          <h2 className="text-3xl sm:text-4xl font-black">Our Story</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-sm sm:text-base text-ink/80">
            <p>
              Creo Elements is your one-stop shop for all things digital marketing. We help
              businesses of all sizes to achieve success in the ever-evolving online world. Our
              comprehensive suite of services helps you build a strong brand presence and drive
              results.
            </p>
            <p>
              We offer a wide range of services, including website design & development, social
              media management, performance marketing, SEO, and branding solutions. We take a
              collaborative approach, working closely with you to understand your specific needs
              and develop a strategy that gets noticed.
            </p>
            <p className="italic">Let's make an impact together…</p>
            <p>
              With Creo Elements as your partner, you can be confident that your brand is reaching
              the right audience and achieving tangible results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmpowermentSteps() {
  const introRef = useScrollReveal();
  const cardsRef = useScrollReveal({ stagger: 0.1 });

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-6 mt-20 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
      <div ref={introRef}>
        <h2 className="text-3xl sm:text-4xl font-black">
          Here&apos;s how we empower your digital success:
        </h2>
      </div>
      <div ref={cardsRef} className="space-y-3">
        {empowermentSteps.map((step) => (
          <div
            key={step.title}
            className={`rounded-2xl bg-gradient-to-br ${step.from} ${step.to} p-6 text-white shadow-lg`}
          >
            <h3 className="text-lg sm:text-xl font-black">{step.title}</h3>
            {step.desc && <p className="mt-2 text-sm sm:text-base text-white/90 leading-relaxed">{step.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Team() {
  const revealRef = useScrollReveal({ stagger: 0.08 });

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-6 mt-24">
      <h2 className="text-3xl sm:text-4xl font-black text-center">Our Team</h2>
      <div ref={revealRef} className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
        {team.map((member) => (
          <div key={member.name} className="flex gap-5">
            <img
              src={member.photo}
              alt={member.name}
              className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-full object-cover ring-2 ring-teal/30"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-black teal-text underline decoration-teal/40">
                {member.name}
              </h3>
              <p className="text-sm text-white/60">{member.role}</p>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <PageHero
      eyebrow="About Us"
      title="Marketing that moves the needle"
      subtitle="Creo Elements is your one-stop shop for all things digital marketing. We help businesses of all sizes to achieve success in the ever-evolving online world. Our comprehensive suite of services helps you build a strong brand presence and drive results.
We offer a wide range of services, including website design & development, social media management, performance marketing, SEO, and branding solutions. We take a collaborative approach, working closely with you to understand your specific needs and develop a strategy that gets noticed.
Let’s make an impact together.
With Creo Elements as your partner, you can be confident that your brand is reaching the right audience and achieving tangible results"
    >
      {/* <Story /> */}
      <EmpowermentSteps />
      <Team />
    </PageHero>
  );
}

export default About;
