import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import FormField from "@/components/FormField";
import { roleOptions } from "@/data/openings";
import { FiUser, FiMail, FiPhone, FiBriefcase, FiUploadCloud, FiCheckCircle } from "react-icons/fi";

function WorkWithUs() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

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
      <section className="mx-auto max-w-2xl px-5 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-10">
              <FiCheckCircle className="h-14 w-14 teal-text" />
              <h3 className="mt-5 text-2xl font-black">Application received!</h3>
              <p className="mt-2 text-white/60 max-w-sm">
                Thanks for reaching out — we'll take a look and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-white/50 mb-2">
                  Your name
                </label>
                <FormField
                  variant="dark"
                  icon={FiUser}
                  required
                  name="name"
                  placeholder="Dev Gautam"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-white/50 mb-2">
                    Email
                  </label>
                  <FormField
                    variant="dark"
                    icon={FiMail}
                    required
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-white/50 mb-2">
                    Phone number
                  </label>
                  <FormField
                    variant="dark"
                    icon={FiPhone}
                    required
                    type="tel"
                    name="phone"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-white/50 mb-2">
                  I want to work as a
                </label>
                <div className="relative group">
                  <FiBriefcase className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white opacity-40 transition-opacity group-focus-within:opacity-100 group-focus-within:text-teal" />
                  <select
                    name="role"
                    defaultValue={roleOptions[0]}
                    className="w-full appearance-none rounded-xl border border-white/15 bg-white/5 pl-11 pr-10 py-3.5 text-white outline-none transition-all duration-200 focus:border-teal focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(62,207,174,0.15)]"
                  >
                    {roleOptions.map((role) => (
                      <option key={role} value={role} className="bg-dark text-white">
                        {role}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-white/50 mb-2">
                  Upload your CV
                </label>
                <label
                  htmlFor="cv-upload"
                  className="flex items-center gap-4 rounded-xl border-2 border-dashed border-white/20 bg-white/5 px-5 py-6 cursor-pointer transition-colors hover:border-teal/60 hover:bg-white/10"
                >
                  <span className="shrink-0 h-11 w-11 rounded-full bg-teal/15 flex items-center justify-center">
                    <FiUploadCloud className="h-5 w-5 teal-text" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold truncate">
                      {fileName || "Choose a file to upload"}
                    </span>
                    <span className="block text-xs text-white/45">PDF or Word, up to 10MB</span>
                  </span>
                  <input
                    id="cv-upload"
                    required
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </label>
              </div>

              <label className="flex items-start gap-3 text-sm text-white/70 cursor-pointer pt-1">
                <input
                  required
                  type="checkbox"
                  name="basedInMumbai"
                  className="mt-0.5 h-4 w-4 rounded accent-teal"
                />
                I confirm that I am currently based in Mumbai
              </label>

              <button
                type="submit"
                className="teal-btn w-full sm:w-auto px-10 py-3.5 text-base"
              >
                Apply here
              </button>
            </form>
          )}
        </div>
      </section>
    </PageHero>
  );
}

export default WorkWithUs;