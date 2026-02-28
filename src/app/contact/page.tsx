"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { companyInfo } from "@/lib/data";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

const projectTypes = [
  "Custom Home",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-end overflow-hidden bg-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Get In Touch
          </p>
          <h1 className="mt-3 text-5xl font-light tracking-tight text-white md:text-6xl">
            Start Your <span className="text-accent">Project</span>
          </h1>
          <p className="mt-4 max-w-xl font-sans text-base text-white/50">
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
                <div className="mt-3 h-[1px] w-16 bg-accent" />

                <div className="mt-10 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-accent/20 text-accent">
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
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-accent/20 text-accent">
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
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-accent/20 text-accent">
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
                <div className="mt-10 aspect-[4/3] overflow-hidden border border-[#1a1a1a]/5 bg-[#e5e5e5]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14166.26267764!2d153.0561!3d-27.5768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b914f1b4a4e4e0d%3A0x5040c94bb4f7c70!2sSunnybank%20Hills%20QLD%204109!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
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
                  <div className="flex min-h-[500px] flex-col items-center justify-center border border-[#1a1a1a]/5 bg-white p-12 text-center">
                    <CheckCircle size={48} className="text-accent" />
                    <h3 className="mt-6 text-3xl font-light text-[#1a1a1a]">
                      Thank You!
                    </h3>
                    <p className="mt-4 max-w-md font-sans text-base text-[#1a1a1a]/50">
                      We&apos;ve received your enquiry and will be in touch within 24
                      hours. Looking forward to discussing your project.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 border border-accent px-8 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-[#1a1a1a]"
                    >
                      Send Another Enquiry
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
                    <div className="mt-2 h-[1px] w-12 bg-accent" />

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
                        <select className="mt-2 w-full border-b border-[#1a1a1a]/10 bg-transparent py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-colors focus:border-accent">
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
                        <div className="absolute inset-0 -translate-x-full bg-[#1a1a1a] transition-transform duration-500 group-hover:translate-x-0" />
                      </button>
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
