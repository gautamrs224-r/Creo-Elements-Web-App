import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import FormField from "@/components/FormField";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiInstagram, FiUser, FiTag, FiCheckCircle } from "react-icons/fi";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Contact() {
  const [sent, setSent] = useState(false);
  const revealRef = useScrollReveal();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <PageHero eyebrow="Let's talk" title="Contact Us" subtitle="Have a project in mind? We'd love to hear about it.">
      <section
        ref={revealRef}
        className="mx-auto max-w-6xl px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12"
      >
        {/* Contact details */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink to-[#0f0f12] p-6 sm:p-8 shadow-xl text-white">
          <div
            className="absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #3ecfae, transparent 70%)" }}
          />
          <h3 className="relative text-xl font-black teal-text">Reach out</h3>
          <p className="relative mt-2 text-white/60 text-sm">
            We usually reply within one business day.
          </p>

          <ul className="relative mt-8 space-y-5 text-sm sm:text-base">
            <li className="flex items-center gap-4">
              <span className="h-11 w-11 shrink-0 rounded-full bg-teal/15 grid place-items-center">
                <FiMail className="h-4 w-4 teal-text" />
              </span>
              <span className="min-w-0 truncate text-white/85">dev@creo-elements.com</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-11 w-11 shrink-0 rounded-full bg-teal/15 grid place-items-center">
                <FiPhone className="h-4 w-4 teal-text" />
              </span>
              <span className="text-white/85">+91 12346 78901</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-11 w-11 shrink-0 rounded-full bg-teal/15 grid place-items-center">
                <FiMapPin className="h-4 w-4 teal-text" />
              </span>
              <span className="text-white/85">Mumbai, India</span>
            </li>
          </ul>

          <div className="relative mt-8 pt-6 border-t border-white/10 flex gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-full bg-white/10 grid place-items-center hover:bg-teal hover:text-ink transition-colors"
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="h-10 w-10 rounded-full bg-white/10 grid place-items-center hover:bg-teal hover:text-ink transition-colors"
            >
              <FiInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-slate-100">
          {sent ? (
            <div className="flex flex-col items-center text-center py-14">
              <FiCheckCircle className="h-14 w-14 text-teal" />
              <h3 className="mt-5 text-2xl font-black text-ink">Message sent!</h3>
              <p className="mt-2 text-ink/60 max-w-sm">
                Thanks for getting in touch — we'll be in your inbox soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-ink">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-ink/45 mb-2">
                    Your name
                  </label>
                  <FormField icon={FiUser} required placeholder="Dev Gautam" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-ink/45 mb-2">
                    Email
                  </label>
                  <FormField icon={FiMail} required type="email" placeholder="you@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-ink/45 mb-2">
                  Subject
                </label>
                <FormField icon={FiTag} placeholder="What's this about?" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-ink/45 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell us a little about your project…"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition-all duration-200 focus:border-teal focus:shadow-[0_0_0_4px_rgba(62,207,174,0.15)]"
                />
              </div>

              <button type="submit" className="teal-btn w-full sm:w-auto px-10 py-3.5 text-base">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </PageHero>
  );
}

export default Contact;