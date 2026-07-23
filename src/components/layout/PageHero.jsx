import { useFadeUpOnMount } from "@/hooks/useFadeUpOnMount";

/**
 * The reusable "inner page" hero banner: an eyebrow label, a big title,
 * an optional subtitle, all on the dark radial-gradient background used
 * across About, What We Do, Work With Us, Clients, Contact and Blogs.
 */
function PageHero({ eyebrow, title, subtitle, children }) {
  const heroRef = useFadeUpOnMount({ stagger: 0.1 });

  return (
    <main className="overflow-x-hidden bg-dark text-white">
      <section className="page-hero relative pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div ref={heroRef} className="mx-auto max-w-5xl px-5 sm:px-6 text-center">
          {eyebrow && (
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm teal-text font-bold">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>
      <div className="pb-32">{children}</div>
    </main>
  );
}

export default PageHero;
