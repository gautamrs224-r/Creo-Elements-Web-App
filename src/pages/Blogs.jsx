import PageHero from "@/components/layout/PageHero";
import { FiArrowRight } from "react-icons/fi";
import { blogPosts } from "@/data/blogPosts";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function BlogCard({ title, tag, date, img, excerpt }) {
  return (
    <article className="rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-shadow flex flex-col group text-ink">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-teal/10 teal-text font-bold">{tag}</span>
          <span className="text-ink/50">{date}</span>
        </div>
        <h3 className="mt-3 text-lg font-black leading-snug">{title}</h3>
        <p className="mt-2 text-ink/70 text-sm leading-relaxed flex-1">{excerpt}</p>
        <a href="#" className="mt-4 inline-flex items-center gap-2 font-bold teal-text text-sm">
          Read article <FiArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function Blogs() {
  const gridRef = useScrollReveal({ stagger: 0.05 });

  return (
    <PageHero
      eyebrow="Journal"
      title="Blogs & Insights"
      subtitle="Fresh thinking from our team on marketing, design, growth and everything in between."
    >
      <section ref={gridRef} className="mx-auto max-w-6xl px-5 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </section>
    </PageHero>
  );
}

export default Blogs;
