import type { Metadata } from "next";
import { ProductSchema, HowToSchema } from "@/components/seo/schemas";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";
import { ComparisonSection } from "@/components/sections/comparison";
import { Star, CheckCircle2, HardHat, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AgenticVani Construction CRM — RA Bill & Project Tracking | ₹999",
  description:
    "Google Sheets-based construction project management for Indian contractors. RA Bill tracking, BOQ, material reconciliation, EVM dashboard, payment aging. 373 formulas. One-time ₹999. Used by contractors in Mohali, Chandigarh, Ludhiana, Delhi NCR.",
  openGraph: {
    title: "AgenticVani Construction CRM — RA Bill Tracking Done Right",
    description: "Complete construction billing in Google Sheets. ₹999 one-time.",
    locale: "en_IN",
  },
  alternates: { canonical: "https://agenticvani.com/construction" },
};

const features = [
  {
    title: "RA Bill Auto-Calculation",
    desc: "Gross Amount → +GST 12% → −Advance Recovery 20% → −Retention 10% → −TDS 2% → Net Payable. All automatic, zero errors.",
  },
  {
    title: "BOQ Master — 44 Items, 9 Categories",
    desc: "Pre-built Bill of Quantities with unit rates, quantities, and auto-calculated net amounts. Covers civil, electrical, plumbing, and more.",
  },
  {
    title: "Material Wastage Tracker",
    desc: "Automatically calculates percentage of materials consumed versus issued. Flags any material with >5% wastage in red automatically.",
  },
  {
    title: "EVM Dashboard — CPI, SPI, EAC, TCPI",
    desc: "Earned Value Management at PMC level. Know if your project is under budget (CPI > 1) and on schedule (SPI > 1) at a glance.",
  },
  {
    title: "Payment Aging Tracker",
    desc: "Track outstanding payments at 30, 60, and 90+ days. Know exactly how much money is stuck and with which client.",
  },
  {
    title: "Subcontractor Billing + Retention Release",
    desc: "Manage subcontractor invoices, retention deductions, and scheduled releases. No more manual tracking across projects.",
  },
];

const definitions = [
  {
    term: "RA Bill (Running Account Bill)",
    def: "A progressive payment invoice raised by a contractor to the client at regular intervals based on work completed to date.",
  },
  {
    term: "CPI (Cost Performance Index)",
    def: "A ratio that shows how efficiently a project is using its budget. CPI > 1 means under budget.",
  },
  {
    term: "SPI (Schedule Performance Index)",
    def: "A ratio that shows whether a project is ahead or behind schedule. SPI > 1 means ahead of schedule.",
  },
  {
    term: "BOQ (Bill of Quantities)",
    def: "A detailed list of all materials, parts, and labor required in a construction project with their quantities and rates.",
  },
];

export default function ConstructionPage() {
  return (
    <>
      <ProductSchema
        name="AgenticVani Construction CRM"
        description="Google Sheets-based project management and billing system for Indian contractors. Tracks RA Bills, BOQ, material reconciliation, EVM, payments. 373 formulas. One-time purchase."
        price="999"
        reviewCount="89"
      />
      <HowToSchema
        name="How to Set Up AgenticVani Construction CRM"
        description="Get your construction project billing system running in 15 minutes"
        totalTime="PT15M"
        steps={[
          { name: "Download the sheet", text: "Purchase and download the AgenticVani_Construction_CRM_v2.xlsx file." },
          { name: "Upload to Google Drive", text: "Upload to Google Drive and click 'Open with Google Sheets'. Make a copy." },
          { name: "Enter project details", text: "Fill in the Project Setup tab — project name, contract value, GST%, TDS%, retention%." },
          { name: "Update BOQ items", text: "Add your BOQ quantities and rates. Net amounts auto-calculate." },
          { name: "Raise your first RA Bill", text: "Enter current bill quantities in the RA Bill sheet. Net payable auto-calculates including GST, advance, retention, and TDS." },
        ]}
      />

      {/* Hero */}
      <section className="bg-cream px-4 pt-20 pb-12 md:px-8 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal">
            <HardHat size={13} />
            For Contractors & Builders
          </div>

          <h1 className="mb-4 text-[2rem] leading-[1.15] font-extrabold text-navy md:text-[3rem]">
            RA Bill & Project Tracking
            <br />
            Done Right.{" "}
            <span className="text-orange">₹999.</span>
          </h1>

          <p className="mb-6 max-w-xl text-base text-mid-grey md:text-lg">
            373 validated formulas. BOQ, RA Bills, material reconciliation, EVM
            dashboard — all in Google Sheets. Used by contractors in Mohali,
            Chandigarh, Ludhiana, and Delhi NCR.
          </p>

          <a
            href="#pricing"
            className="btn-glow inline-flex cursor-pointer items-center gap-2 rounded-full bg-orange px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-orange-hover"
          >
            Download Construction CRM — ₹999
            <ArrowRight size={16} />
          </a>

          <div className="mt-5 flex items-center gap-4 text-sm text-mid-grey">
            <span className="flex items-center gap-1">
              <Star size={13} className="fill-gold text-gold" /> 4.8/5
            </span>
            <span>373 formulas</span>
            <span>No subscription</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-sm font-semibold tracking-widest text-teal uppercase">
            Features
          </p>
          <h2 className="mb-8 text-center text-[1.75rem] font-extrabold text-navy md:text-[2.5rem]">
            What Does AgenticVani Construction CRM Track?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="card-hover rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="mb-2 flex items-start gap-2 text-base font-bold text-navy">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal" />
                  {f.title}
                </h3>
                <p className="pl-6 text-sm text-mid-grey">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Definitions — AEO */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-teal uppercase">
            Glossary
          </p>
          <h2 className="mb-6 text-[1.5rem] font-extrabold text-navy md:text-[2rem]">
            Key Construction Terms Explained
          </h2>
          <dl className="space-y-3">
            {definitions.map((d) => (
              <div key={d.term} className="rounded-2xl border border-gray-200 bg-white p-5">
                <dt className="mb-1 text-sm font-bold text-navy">{d.term}</dt>
                <dd className="text-sm text-mid-grey">{d.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
