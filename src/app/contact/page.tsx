"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { companyInfo } from "@/lib/data";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

const projectTypes = [
  "Custom Home",
  "Vastu-Compliant Home",
  "Multi-Generational Home",
  "Renovation",
  "Extension",
  "Granny Flat / Duplex",
  "Commercial Fitout",
  "Medical Centre",
  "Childcare Centre",
  "Other",
];

const budgetRanges = [
  "Under $200K",
  "$200K – $500K",
  "$500K – $1M",
  "$1M – $2M",
  "$2M+",
  "Not Sure Yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [mailtoLink, setMailtoLink] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    budgetRange: "",
    message: "",
  });

  const updateField = (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `New Project Enquiry - ${formData.projectType || "Website"}`;
    const body = [
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Project type: ${formData.projectType}`,
      `Budget range: ${formData.budgetRange || "Not provided"}`,
      "",
      "Project details:",
      formData.message,
    ].join("\n");

    setMailtoLink(
      `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-100 items-end overflow-hidden bg-[#f7f5ef]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-16"
          style={{
            backgroundImage:
              "url(/projects/49-herbert-st/hero.webp)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#f7f5ef] via-[#f7f5ef]/65 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Get In Touch
          </p>
          <h1 className="mt-3 text-5xl font-light tracking-tight text-[#0a0a0a] md:text-6xl">
            Start Your <span className="text-accent">Project</span>
          </h1>
          <p className="mt-4 max-w-xl font-sans text-base text-[#0a0a0a]/58">
            Ready to build? Contact us for an obligation-free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-[#fafafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <ScrollReveal variant="fadeLeft">
                <h2 className="text-3xl font-light tracking-tight text-[#1a1a1a]">
                  Contact <span className="text-accent">Information</span>
                </h2>
                <div className="mt-3 h-px w-16 bg-accent" />

                <div className="mt-10 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/20 text-accent">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]/40">
                        Address
                      </p>
                      <p className="mt-1 font-sans text-sm text-[#1a1a1a]/70">
                        {companyInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/20 text-accent">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]/40">
                        Phone
                      </p>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="mt-1 block font-sans text-sm text-[#1a1a1a]/70 transition-colors hover:text-accent"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/20 text-accent">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]/40">
                        Email
                      </p>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="mt-1 block font-sans text-sm text-[#1a1a1a]/70 transition-colors hover:text-accent"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-10 aspect-4/3 overflow-hidden border border-[#1a1a1a]/5 bg-[#e5e5e5]">
                  <iframe
                    src="https://www.google.com/maps?q=25+Langford+Street,+Eight+Mile+Plains+QLD+4113,+Australia&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ARC Builders Location"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <ScrollReveal variant="fadeRight">
                {submitted ? (
                  <div className="flex min-h-125 flex-col items-center justify-center border border-[#1a1a1a]/5 bg-white p-12 text-center">
                    <CheckCircle size={48} className="text-accent" />
                    <h3 className="mt-6 text-3xl font-light text-[#1a1a1a]">
                      Enquiry Ready To Send
                    </h3>
                    <p className="mt-4 max-w-md font-sans text-base text-[#1a1a1a]/50">
                      Your project details are prepared. Click below to open your default email app with a pre-filled enquiry draft.
                    </p>
                    <p className="mt-2 max-w-md font-sans text-sm text-[#1a1a1a]/40">
                      Once we receive your enquiry, our team can send your private project selections link to this email address. If your email app did not open, send us a message at {companyInfo.email} or call {companyInfo.phone}.
                    </p>
                    <a
                      href={mailtoLink}
                      className="mt-8 border border-accent bg-white px-8 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-accent transition-all hover:bg-accent/8 hover:text-[#0a0a0a]"
                    >
                      Open Email App
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setMailtoLink("");
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          projectType: "",
                          budgetRange: "",
                          message: "",
                        });
                      }}
                      className="mt-8 border border-accent px-8 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-accent transition-all hover:bg-accent/8 hover:text-[#0a0a0a]"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="border border-[#1a1a1a]/5 bg-white p-8 md:p-12"
                  >
                    <h3 className="text-2xl font-light text-[#1a1a1a]">
                      Project <span className="text-accent">Enquiry</span>
                    </h3>
                    <div className="mt-2 h-px w-12 bg-accent" />

                    <div className="mt-8 space-y-6">
                      {/* Name + Email */}
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]/40">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={updateField("fullName")}
                            className="mt-2 w-full border-b border-[#1a1a1a]/10 bg-transparent py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-colors focus:border-accent"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]/40">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={updateField("email")}
                            className="mt-2 w-full border-b border-[#1a1a1a]/10 bg-transparent py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-colors focus:border-accent"
                            placeholder="john@email.com"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]/40">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={updateField("phone")}
                          className="mt-2 w-full border-b border-[#1a1a1a]/10 bg-transparent py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-colors focus:border-accent"
                          placeholder="0400 000 000"
                        />
                      </div>

                      {/* Project type */}
                      <div>
                        <label className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]/40">
                          Project Type *
                        </label>
                        <select
                          required
                          value={formData.projectType}
                          onChange={updateField("projectType")}
                          className="mt-2 w-full border-b border-[#1a1a1a]/10 bg-transparent py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-colors focus:border-accent"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]/40">
                          Budget Range
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={updateField("budgetRange")}
                          className="mt-2 w-full border-b border-[#1a1a1a]/10 bg-transparent py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-colors focus:border-accent"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]/40">
                          Tell Us About Your Project *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={updateField("message")}
                          className="mt-2 w-full resize-none border-b border-[#1a1a1a]/10 bg-transparent py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-colors focus:border-accent"
                          placeholder="Describe your project, location, timeline, and any other details..."
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="group relative mt-4 flex w-full items-center justify-center gap-3 overflow-hidden border border-accent bg-accent py-4 font-sans text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all duration-500"
                      >
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-accent">
                          Send Enquiry
                        </span>
                        <Send
                          size={14}
                          className="relative z-10 transition-colors duration-500 group-hover:text-accent"
                        />
                        <div className="absolute inset-0 -translate-x-full bg-accent/10 transition-transform duration-500 group-hover:translate-x-0" />
                      </button>
                      <p className="text-center font-sans text-xs text-[#1a1a1a]/40">
                        This form opens your default email app so you can review and send your enquiry details directly. Private project selections are shared after enquiry review.
                      </p>
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
