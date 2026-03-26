import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "Do you build Vastu-compliant homes in Brisbane and Logan?",
    answer:
      "Yes. ARC Builders works with families who want Vastu-aware layouts while still meeting Australian codes, site conditions, and modern lifestyle needs.",
  },
  {
    question: "Can you build multi-generational homes with separate living zones?",
    answer:
      "Yes. We regularly design homes with practical privacy for parents, grandparents, and children, including optional dual-living arrangements.",
  },
  {
    question: "How transparent is your quoting and inclusions process?",
    answer:
      "Our process is built around clear inclusions, allowance visibility, and upfront scope discussions so you can make decisions before construction starts.",
  },
  {
    question: "Do you support NRI families managing builds remotely?",
    answer:
      "Yes. We support remote consultations, progress communication, and detailed documentation for families coordinating from interstate or overseas.",
  },
  {
    question: "Which areas do you service?",
    answer:
      "Primary service areas include Brisbane, Logan, Rochedale, and greater South East Queensland for residential and selected commercial projects.",
  },
];

export default function HomeFaqSection() {
  return (
    <section className="bg-[#fafafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Popular Questions
          </p>
          <h2 className="mt-3 text-4xl font-light tracking-tight text-[#1a1a1a] md:text-5xl">
            Home Building <span className="text-accent">FAQ</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 0.08}>
              <details className="group border border-[#1a1a1a]/8 bg-white p-6 open:border-accent/30">
                <summary className="cursor-pointer list-none pr-6 font-sans text-base font-semibold text-[#1a1a1a] marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-4 font-sans text-sm leading-relaxed text-[#1a1a1a]/60">{faq.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex border border-accent bg-accent px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#1a1a1a] transition-all duration-300 hover:bg-transparent hover:text-accent"
            >
              Get Free Consultation
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export { faqs as homeFaqItems };
