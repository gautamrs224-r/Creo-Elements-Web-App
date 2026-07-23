import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Contact() {
  const [sent, setSent] = useState(false);
  const revealRef = useScrollReveal();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <PageHero eyebrow="Let's talk" title="Contact Us">
      <form
        ref={revealRef}
        onSubmit={handleSubmit}
        className="mx-auto max-w-4xl px-5 sm:px-6 space-y-8 text-base sm:text-xl leading-relaxed"
      >
        <p>
          Hello my name is
          <input required placeholder="Your Name" className="contact-blank" />
        </p>

        <p>
          I'm looking for help with
          <input required placeholder="Website, branding, social media" className="contact-blank w-64 sm:w-96" />
        </p>

        <p>
          My budget is
          <input placeholder="Your Budget" className="contact-blank" />
          and I need it by
          <input placeholder="next month, 1 week" className="contact-blank" />
        </p>

        <p>
          My brand name is
          <input placeholder="Brand Name" className="contact-blank" />
          which is into
          <input placeholder="the industry" className="contact-blank" />
        </p>

        <p>
          <select defaultValue="" className="contact-blank">
            <option value="" disabled hidden>
              I have a website
            </option>
            <option value="have-website">I have a website</option>
            <option value="no-website">I don't have a website yet</option>
          </select>
          It's on
          <input placeholder="yourwebsite.com" className="contact-blank" />
        </p>

        <p>
          Please contact me at
          <input required type="email" placeholder="Email" className="contact-blank" />
          and
          <input type="tel" placeholder="Phone" className="contact-blank" />
        </p>

        <button type="submit" className="teal-btn-outline mt-4">
          {sent ? "Message sent!" : "Send Message"}
        </button>
      </form>
    </PageHero>
  );
}

export default Contact;