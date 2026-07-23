import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiInstagram } from "react-icons/fi";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const fieldClasses =
  "w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/50";

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
        className="mx-auto max-w-6xl px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12"
      >
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-100 shadow-lg text-ink">
            <h3 className="text-xl font-black teal-text">Reach out</h3>
            <ul className="mt-4 space-y-4 text-ink/80 text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <span className="h-9 w-9 shrink-0 rounded-full bg-teal/10 grid place-items-center">
                  <FiMail className="h-4 w-4 text-teal" />
                </span>
                <span className="min-w-0 truncate">hello@creo-elements.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-9 w-9 shrink-0 rounded-full bg-teal/10 grid place-items-center">
                  <FiPhone className="h-4 w-4 text-teal" />
                </span>
                <span>+91 98000 00000</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-9 w-9 shrink-0 rounded-full bg-teal/10 grid place-items-center">
                  <FiMapPin className="h-4 w-4 text-teal" />
                </span>
                <span>Mumbai, India</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full bg-ink text-white grid place-items-center hover:scale-110 transition"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-ink text-white grid place-items-center hover:scale-110 transition"
              >
                <FiInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 sm:p-8 shadow-lg border border-slate-100 space-y-4 text-ink"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className={fieldClasses} />
            <input required type="email" placeholder="Email" className={fieldClasses} />
          </div>
          <input placeholder="Subject" className={fieldClasses} />
          <textarea required rows={6} placeholder="Your message…" className={fieldClasses} />
          <button type="submit" className="teal-btn w-full sm:w-auto">
            {sent ? "Message sent!" : "Send Message"}
          </button>
        </form>
      </section>
    </PageHero>
  );
}

export default Contact;
