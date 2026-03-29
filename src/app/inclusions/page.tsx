"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  buildInclusionSummary,
  consultantPricingNotes,
  createDefaultSelections,
  explicitExclusions,
  getPackagePricingGuide,
  getRowKey,
  inclusionSections,
  inclusionStatusMeta,
  inclusionPackages,
  publicBasePricing,
  type BuildType,
  type InclusionPackage,
  type InclusionSelectionMap,
  type RowSelectionValue,
} from "@/lib/inclusions";

const currency = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

type FormState = {
  customerName: string;
  email: string;
  phone: string;
  suburb: string;
  buildType: BuildType;
  packageId: InclusionPackage["id"];
};

const initialFormState: FormState = {
  customerName: "",
  email: "",
  phone: "",
  suburb: "",
  buildType: "single-storey",
  packageId: "essential",
};

export default function InclusionsPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isGenerating, setIsGenerating] = useState(false);
  const [acknowledgedPreliminary, setAcknowledgedPreliminary] = useState(false);
  const [acknowledgedTender, setAcknowledgedTender] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [selections, setSelections] = useState<InclusionSelectionMap>(createDefaultSelections());

  const summary = useMemo(
    () => buildInclusionSummary(form.packageId, form.buildType, selections),
    [form.packageId, form.buildType, selections]
  );
  const pricingGuide = getPackagePricingGuide(form.packageId, form.buildType);

  function setRowSelection(sectionId: string, rowIndex: number, value: RowSelectionValue) {
    const key = getRowKey(sectionId, rowIndex);
    setSelections((prev) => ({ ...prev, [key]: value }));
    setStatusMessage(null);
  }

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function isFormReady() {
    return (
      form.customerName.trim().length >= 2 &&
      isValidEmail(form.email) &&
      form.phone.trim().length >= 7 &&
      form.suburb.trim().length >= 2 &&
      acknowledgedPreliminary &&
      acknowledgedTender
    );
  }

  async function generatePdf() {
    try {
      if (!isFormReady()) {
        setStatusMessage(
          "Please complete customer details, provide a valid email and phone number, and accept both acknowledgements before generating the PDF."
        );
        return;
      }

      setIsGenerating(true);
      setStatusMessage(null);

      const response = await fetch("/api/inclusions/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          selectedPackage: summary.selectedPackage,
          decisions: summary.decisions,
          selectedUpgrades: summary.selectedUpgrades,
          buildTypeAdjustment: summary.buildTypeAdjustment,
          upgradesTotal: summary.upgradesTotal,
          estimatedTotal: summary.estimatedTotal,
          generatedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to generate PDF right now.");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      const safeName = (form.customerName || "customer")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      anchor.href = blobUrl;
      anchor.download = `arc-inclusion-sheet-${safeName || "customer"}.pdf`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(blobUrl);
      setStatusMessage("PDF generated successfully. Review and share with your consultant or client.");
    } catch (error) {
      console.error(error);
      setStatusMessage("We could not generate your PDF right now. Please try again in a moment.");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <main>
      <Navbar />

      <section className="bg-white pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#1a1a1a]/8 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/70">
              Official Document
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/50">Version 2.1</span>
          </div>
          <h1 className="max-w-5xl text-5xl font-light leading-[0.95] tracking-tight text-[#1a1a1a] md:text-7xl lg:text-8xl">
            Client Project
            <span className="block text-accent">Selections</span>
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-[#1a1a1a]/65 md:text-lg">
            This private page is shared after enquiry review so clients can confirm project selections clearly before consultant follow-up.
          </p>

          <div className="mt-8 grid gap-4 border border-[#1a1a1a]/10 bg-[#fafafa] p-5 md:grid-cols-3">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-accent">Business Safe</p>
              <p className="mt-2 text-sm text-[#1a1a1a]/70">Compliance-critical items are always locked and cannot be removed.</p>
            </div>
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-accent">Selection Clarity</p>
              <p className="mt-2 text-sm text-[#1a1a1a]/70">Allowance and optional inclusion pathways stay visible so the consultant review is faster and cleaner.</p>
            </div>
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-accent">Consultant-Led Pricing</p>
              <p className="mt-2 text-sm text-[#1a1a1a]/70">Base pricing is shown where approved. Final upgrade and tailored pricing is confirmed in meeting or on call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 pt-8 lg:grid-cols-12 lg:px-8">
          <div className="space-y-8 lg:col-span-8">
            <section className="border border-[#1a1a1a]/10 bg-white p-6">
              <h2 className="text-2xl font-light text-[#1a1a1a]">Project Setup</h2>
              <p className="mt-2 font-sans text-sm text-[#1a1a1a]/65">
                These project details personalize your inclusion schedule and support consultant review, lead tracking,
                and proposal handover.
              </p>

              <div className="mt-4 rounded-sm border border-[#1a1a1a]/10 bg-[#fcfcfc] p-4">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1a1a1a]/55">How To Use</p>
                <p className="mt-2 font-sans text-sm text-[#1a1a1a]/70">
                  Complete project details, choose build type and package, then set each allowance row to Standard or
                  Include. Locked rows are mandatory and cannot be removed, and final pricing is reviewed with your consultant.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#1a1a1a]/55">Customer Name</span>
                  <input
                    value={form.customerName}
                    onChange={(event) => setForm((prev) => ({ ...prev, customerName: event.target.value }))}
                    placeholder="Full name"
                    className="w-full border border-[#1a1a1a]/20 bg-[#fefefe] px-4 py-3 font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/45 outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="space-y-2">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#1a1a1a]/55">Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    placeholder="name@example.com"
                    className="w-full border border-[#1a1a1a]/20 bg-[#fefefe] px-4 py-3 font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/45 outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="space-y-2">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#1a1a1a]/55">Phone</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                    placeholder="Phone number"
                    className="w-full border border-[#1a1a1a]/20 bg-[#fefefe] px-4 py-3 font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/45 outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="space-y-2">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#1a1a1a]/55">Build Suburb</span>
                  <input
                    value={form.suburb}
                    onChange={(event) => setForm((prev) => ({ ...prev, suburb: event.target.value }))}
                    placeholder="Suburb"
                    className="w-full border border-[#1a1a1a]/20 bg-[#fefefe] px-4 py-3 font-sans text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/45 outline-none transition-colors focus:border-accent"
                  />
                </label>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">Build Type</p>
                  <div className="flex flex-wrap gap-3">
                    {([
                      { label: "Single Storey", value: "single-storey" },
                      { label: "Double Storey", value: "double-storey" },
                      { label: "Custom", value: "custom" },
                    ] as const).map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, buildType: item.value }))}
                        className={`rounded-md border px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-150 active:scale-[0.98] ${
                          form.buildType === item.value
                            ? "border-accent bg-accent text-[#1a1a1a] shadow-[0_0_0_2px_rgba(223,131,88,0.25)]"
                            : "border-[#1a1a1a]/20 bg-white text-[#1a1a1a]/80 hover:border-accent hover:bg-accent/10"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 font-sans text-xs text-[#1a1a1a]/60">
                    Essential Living base pricing is available for approved single and double storey builds.
                    Signature, Luxury, and fully custom pricing is confirmed after consultant review.
                  </p>
                </div>

                <div>
                  <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">Package</p>
                  <div className="grid gap-3">
                    {inclusionPackages.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, packageId: pkg.id }))}
                        className={`rounded-md border px-4 py-3 text-left shadow-sm transition-all duration-150 active:scale-[0.99] ${
                          form.packageId === pkg.id
                            ? "border-accent bg-accent/10 shadow-[0_0_0_2px_rgba(223,131,88,0.22)]"
                            : "border-[#1a1a1a]/12 bg-white hover:border-accent/40 hover:bg-[#fffaf6]"
                        }`}
                      >
                        <p className="font-semibold text-[#1a1a1a]">{pkg.name}</p>
                        <p className="mt-1 font-sans text-sm text-[#1a1a1a]/60">{pkg.description}</p>
                        {pkg.id === form.packageId ? (
                          <p className="mt-2 font-sans text-sm font-semibold text-accent">
                            {pricingGuide.amount ? `${currency.format(pricingGuide.amount)} · ${pricingGuide.detail}` : pricingGuide.detail}
                          </p>
                        ) : pkg.id === "essential" ? (
                          <p className="mt-2 font-sans text-sm font-semibold text-accent">Base pricing available for single and double storey builds</p>
                        ) : (
                          <p className="mt-2 font-sans text-sm font-semibold text-[#1a1a1a]/55">Pricing shared with consultant after scope review</p>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {inclusionSections.map((section) => (
              <section key={section.id} className="border border-[#1a1a1a]/10 bg-white p-6">
                <h2 className="border-b border-[#1a1a1a]/10 pb-4 text-2xl font-light text-[#1a1a1a]">{section.title}</h2>
                <div className="mt-5 overflow-x-auto">
                  <table className="min-w-270 w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a1a]/10 text-left">
                        <th className="min-w-57.5 px-3 py-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/50">Item</th>
                        <th className="min-w-30 px-3 py-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/50">Status</th>
                        <th className="min-w-42.5 px-3 py-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/50">Allowance</th>
                        <th className="min-w-47.5 px-3 py-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/50">Upgrade Option</th>
                        <th className="min-w-42.5 px-3 py-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/50">Notes</th>
                        <th className="sticky right-0 min-w-42.5 bg-white px-3 py-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/60 shadow-[-10px_0_12px_-12px_rgba(0,0,0,0.35)]">
                          Your Choice
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, rowIndex) => {
                        const key = getRowKey(section.id, rowIndex);
                        const currentDecision = summary.decisions.find((item) => item.key === key);

                        if (!currentDecision) {
                          return null;
                        }

                        return (
                          <tr key={key} className="border-b border-[#1a1a1a]/8 align-top">
                            <td className="px-3 py-4 font-semibold text-[#1a1a1a] wrap-break-word">{row.item}</td>
                            <td className="px-3 py-4">
                              <span
                                className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] ${
                                  inclusionStatusMeta[currentDecision.status].className
                                }`}
                              >
                                {inclusionStatusMeta[currentDecision.status].label}
                              </span>
                            </td>
                            <td className="px-3 py-4 font-sans text-sm leading-relaxed text-[#1a1a1a]/70 wrap-break-word">{row.allowance}</td>
                            <td className="px-3 py-4 font-sans text-sm leading-relaxed text-[#1a1a1a]/70 wrap-break-word">{row.upgradeOption}</td>
                            <td className="px-3 py-4 font-sans text-sm italic leading-relaxed text-[#1a1a1a]/65 wrap-break-word">{row.notes}</td>
                            <td className="sticky right-0 bg-white px-3 py-4 shadow-[-10px_0_12px_-12px_rgba(0,0,0,0.35)]">
                              {row.selectionMode === "fixed" ? (
                                <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#1a1a1a]/45">Locked</span>
                              ) : row.selectionMode === "allowance-upgrade" ? (
                                <div className="flex flex-wrap gap-2">
                                  <button
                                    type="button"
                                    onClick={() => setRowSelection(section.id, rowIndex, "allowance")}
                                    className={`rounded border px-2.5 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] shadow-sm transition-all duration-150 active:scale-[0.98] ${
                                      currentDecision.status === "allowance"
                                        ? "border-accent bg-[#f6efe3] text-[#6b5330] shadow-[0_0_0_2px_rgba(198,168,125,0.32)]"
                                        : "border-[#1a1a1a]/20 bg-white text-[#1a1a1a]/70 hover:border-accent hover:bg-accent/10"
                                    }`}
                                  >
                                    Standard
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setRowSelection(section.id, rowIndex, "upgrade")}
                                    className={`rounded border px-2.5 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] shadow-sm transition-all duration-150 active:scale-[0.98] ${
                                      currentDecision.status === "upgrade"
                                        ? "border-accent bg-accent text-[#1a1a1a] shadow-[0_0_0_2px_rgba(223,131,88,0.25)]"
                                        : "border-[#1a1a1a]/20 bg-white text-[#1a1a1a]/70 hover:border-accent hover:bg-accent/10"
                                    }`}
                                  >
                                    Upgrade
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setRowSelection(
                                      section.id,
                                      rowIndex,
                                      currentDecision.status === "upgrade" ? "not-selected" : "upgrade"
                                    )
                                  }
                                  className={`rounded border px-2.5 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] shadow-sm transition-all duration-150 active:scale-[0.98] ${
                                    currentDecision.status === "upgrade"
                                      ? "border-accent bg-accent text-[#1a1a1a] shadow-[0_0_0_2px_rgba(223,131,88,0.25)]"
                                      : "border-[#1a1a1a]/20 bg-white text-[#1a1a1a]/70 hover:border-accent hover:bg-accent/10"
                                  }`}
                                >
                                  {currentDecision.status === "upgrade" ? "Selected" : "Include"}
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}

            <section className="border-l-4 border-[#b12727] bg-white p-6">
              <h2 className="text-2xl font-light text-[#1a1a1a]">Explicit Exclusions</h2>
              <p className="mt-2 font-sans text-sm text-[#1a1a1a]/65">
                The following remain outside the standard contract sum unless separately quoted and approved.
              </p>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {explicitExclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-sans text-sm text-[#1a1a1a]/75">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#b12727]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="sticky top-28 border border-[#1a1a1a]/10 bg-white p-6">
              <h3 className="text-2xl font-light text-[#1a1a1a]">Pricing and Selection Snapshot</h3>
              <p className="mt-1 font-sans text-sm text-[#1a1a1a]/60">Base pricing is shown only where approved. Final selections and pricing are confirmed with your consultant.</p>

              <div className="mt-5 space-y-2 border-b border-[#1a1a1a]/10 pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-[#1a1a1a]/70">Package</span>
                  <span className="font-sans text-sm font-semibold text-[#1a1a1a]">{summary.selectedPackage.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-[#1a1a1a]/70">Build type</span>
                  <span className="font-sans text-sm font-semibold text-[#1a1a1a]">{form.buildType === "single-storey" ? "Single Storey" : form.buildType === "double-storey" ? "Double Storey" : "Custom"}</span>
                </div>
              </div>

              <div className="mt-4 rounded-[1.25rem] border border-accent/20 bg-[#fffaf0] p-4">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/55">Selected pricing guide</p>
                <p className="mt-2 text-lg font-light text-[#1a1a1a]">{pricingGuide.label}</p>
                <p className="mt-1 font-sans text-sm text-[#1a1a1a]/65">{pricingGuide.detail}</p>
                {pricingGuide.amount ? (
                  <p className="mt-4 text-3xl font-light text-accent">{currency.format(pricingGuide.amount)}</p>
                ) : (
                  <p className="mt-4 font-sans text-sm font-semibold text-accent">Discuss pricing with consultant</p>
                )}
              </div>

              <div className="mt-6 border-t border-[#1a1a1a]/10 pt-4">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/55">Official base pricing</p>
                <ul className="mt-3 space-y-3">
                  {publicBasePricing.map((item) => (
                    <li key={item.label} className="flex items-start justify-between gap-4 text-sm text-[#1a1a1a]/75">
                      <div>
                        <span className="block font-semibold text-[#1a1a1a]">{item.label}</span>
                        <span className="font-sans text-xs text-[#1a1a1a]/55">{item.detail}</span>
                      </div>
                      <span className="font-semibold text-accent">{currency.format(item.amount)}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 space-y-2">
                  {consultantPricingNotes.map((note) => (
                    <li key={note} className="font-sans text-sm leading-relaxed text-[#1a1a1a]/60">
                      - {note}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-[#1a1a1a]/10 pt-4">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/55">Selections for consultant review</p>
                {summary.selectedUpgrades.length ? (
                  <ul className="mt-2 space-y-2">
                    {summary.selectedUpgrades.map((item) => (
                      <li key={item.key} className="text-sm text-[#1a1a1a]/75">
                        <span className="font-semibold">{item.item}</span>
                        <span className="block font-sans text-xs text-[#1a1a1a]/50">{item.sectionTitle}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 font-sans text-sm text-[#1a1a1a]/60">No additional selections marked yet.</p>
                )}
              </div>

              <div className="mt-6 border-t border-[#1a1a1a]/10 pt-4 space-y-3">
                <label className="flex items-center gap-3 font-sans text-sm text-[#1a1a1a]/75">
                  <input
                    checked={acknowledgedPreliminary}
                    onChange={(event) => setAcknowledgedPreliminary(event.target.checked)}
                    className="h-4 w-4 border-[#1a1a1a]/20"
                    type="checkbox"
                  />
                  I understand this is a preliminary inclusion schedule.
                </label>
                <label className="flex items-center gap-3 font-sans text-sm text-[#1a1a1a]/75">
                  <input
                    checked={acknowledgedTender}
                    onChange={(event) => setAcknowledgedTender(event.target.checked)}
                    className="h-4 w-4 border-[#1a1a1a]/20"
                    type="checkbox"
                  />
                  I understand final pricing and selections are confirmed with my consultant and written tender.
                </label>
              </div>

              {statusMessage && (
                <p className="mt-4 rounded-sm border border-[#1a1a1a]/15 bg-[#faf7f3] px-3 py-2 font-sans text-sm text-[#1a1a1a]/75">
                  {statusMessage}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={isGenerating || !isFormReady()}
                  onClick={generatePdf}
                  className="border border-accent bg-accent px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-accent disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isGenerating ? "Generating PDF..." : "Download Inclusion Summary"}
                </button>
                <Link
                  href="/contact"
                  className="border border-[#1a1a1a]/20 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#1a1a1a]/75 transition-all hover:border-accent hover:text-accent"
                >
                  Speak With Consultant
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
