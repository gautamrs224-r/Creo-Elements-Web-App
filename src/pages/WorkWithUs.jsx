import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { roleOptions } from "@/data/openings";

const inlineInputClasses =
  "bg-transparent border-b border-white/40 focus:border-teal focus:outline-none px-1 py-1 placeholder:text-white/40 text-white min-w-0";

function WorkWithUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageHero
      eyebrow="Careers & Partnerships"
      title="Work With Us"
      subtitle="Whether you want to join the team or collaborate on a project, we'd love to hear from you."
    >
      <section className="mx-auto max-w-4xl px-5 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-8 text-lg sm:text-xl leading-relaxed">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-3">
            <span>Hello my name is</span>
            <input required name="name" placeholder="Your Name" className={`${inlineInputClasses} flex-1`} />
          </div>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-3">
            <span>My Email is</span>
            <input
              required
              type="email"
              name="email"
              placeholder="your@emailaddress.com"
              className={`${inlineInputClasses} flex-1`}
            />
          </div>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-3">
            <span>My Phone Number is</span>
            <input
              required
              type="tel"
              name="phone"
              placeholder="+91 1234567890"
              className={`${inlineInputClasses} flex-1`}
            />
          </div>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-3">
            <span>I want to work as a</span>
            <select name="role" defaultValue={roleOptions[0]} className={inlineInputClasses}>
              {roleOptions.map((role) => (
                <option key={role} value={role} className="bg-dark">
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="font-bold mb-3">Upload your CV</p>
            <input
              required
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              className="block w-full text-sm text-white/70 rounded-xl border border-dashed border-white/30 px-4 py-6 file:mr-4 file:rounded-full file:border-0 file:bg-teal file:px-4 file:py-2 file:text-sm file:font-bold file:text-ink"
            />
          </div>

          <label className="flex items-center gap-3 text-base cursor-pointer">
            <input required type="checkbox" name="basedInMumbai" className="h-4 w-4 accent-teal" />
            I confirm that I am currently based in Mumbai
          </label>

          <button
            type="submit"
            className="rounded-full border-2 border-teal teal-text px-8 py-3 font-bold hover:bg-teal hover:text-ink transition-colors"
          >
            {submitted ? "Application received!" : "Apply here"}
          </button>
        </form>
      </section>
    </PageHero>
  );
}

export default WorkWithUs;
