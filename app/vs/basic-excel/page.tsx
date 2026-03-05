import { Metadata } from "next";
import Link from "next/link";
import { Check, X, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { generateMetadata as genMeta } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = genMeta({
  title:
    "ShopDesk vs Excel — Why Contractors & Salons Switch from Basic Spreadsheets",
  description:
    "Compare ShopDesk vs building your own Excel spreadsheet. See which is faster, more accurate, and better for Indian business billing. ₹999 one-time.",
  path: "/vs/basic-excel",
  keywords: [
    "excel vs crm software india",
    "shopdesk vs excel",
    "ra bill excel template",
    "salon crm vs excel",
    "construction billing excel alternative",
    "google sheets crm india",
  ],
});

const comparisonRows = [
  {
    feature: "Time to set up",
    excel: "20–80 hours",
    shopdesk: "15 minutes",
    shopWins: true,
  },
  {
    feature: "RA Bill formula (India)",
    excel: "Build from scratch",
    shopdesk: "Pre-built, tested",
    shopWins: true,
  },
  {
    feature: "GST 12% + TDS 2% + Retention 10%",
    excel: "Manual every time",
    shopdesk: "Auto-calculated",
    shopWins: true,
  },
  {
    feature: "Formula error protection",
    excel: "None (breaks often)",
    shopdesk: "IFERROR on every formula",
    shopWins: true,
  },
  {
    feature: "EVM metrics (CPI, SPI, EAC)",
    excel: "Build complex formulas",
    shopdesk: "Ready to use",
    shopWins: true,
  },
  {
    feature: "Material wastage auto-alert",
    excel: "Not possible without VBA",
    shopdesk: "Built in",
    shopWins: true,
  },
  {
    feature: "Payment aging tracker",
    excel: "Manual date math",
    shopdesk: "Auto 30/60/90 day",
    shopWins: true,
  },
  {
    feature: "Staff commission (salon)",
    excel: "Manual each month",
    shopdesk: "Auto per service",
    shopWins: true,
  },
  {
    feature: "Cost",
    excel: "Free (your time)",
    shopdesk: "₹999 once",
    shopWins: true,
  },
  {
    feature: "Support",
    excel: "None",
    shopdesk: "Email + WhatsApp",
    shopWins: true,
  },
];

const faqs = [
  {
    q: "Is ShopDesk really just a Google Sheet?",
    a: "Yes — ShopDesk is a professionally engineered Google Sheet with 373 validated formulas, IFERROR protection on every cell, and India-specific calculations for GST, TDS, and retention. You get all the familiarity of Google Sheets with none of the setup work.",
  },
  {
    q: "Can I customise ShopDesk like I would my own Excel sheet?",
    a: "Absolutely. Since it runs in Google Sheets, you can add columns, modify formulas, change colours, and adapt it to your business. The difference is you start with a working system instead of a blank sheet.",
  },
  {
    q: "What if I already have data in my existing Excel sheet?",
    a: "You can copy-paste your existing data into ShopDesk. The formulas will auto-calculate based on your data. Most users complete the migration in under 30 minutes.",
  },
  {
    q: "Why not just download a free Excel template from the internet?",
    a: "Free templates typically have 10–20 basic formulas with no error protection. ShopDesk has 373 validated formulas with IFERROR on every one, plus India-specific GST, TDS, and retention calculations that free templates don't include. One formula break in a free template can cost you hours of debugging.",
  },
  {
    q: "Is ₹999 a one-time payment or a subscription?",
    a: "One-time payment. No subscription, no monthly fees, no hidden charges. You pay ₹999 once and own it forever, including all future updates.",
  },
];

const hiddenCosts = [
  {
    icon: Clock,
    stat: "₹12,000+",
    label: "Your time",
    desc: "40 hours to build × ₹300/hr = ₹12,000 of your time. ShopDesk costs ₹999.",
  },
  {
    icon: AlertTriangle,
    stat: "Hours lost",
    label: "Debugging",
    desc: "One formula break = hours of debugging. No IFERROR = one accidental delete ruins everything.",
  },
  {
    icon: X,
    stat: "Zero",
    label: "Knowledge transfer",
    desc: "When your billing engineer leaves, all the institutional knowledge in that custom sheet walks out the door.",
  },
];

export default function VsBasicExcelPage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Compare", url: "/vs/basic-excel" },
          { name: "ShopDesk vs Excel", url: "/vs/basic-excel" },
        ])}
      />

      {/* Hero */}
      <section className="bg-cream px-4 pt-20 pb-12 md:px-8 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-mid-grey">
            <Link href="/" className="hover:text-navy">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy/60">Compare</span>
            <span className="mx-2">/</span>
            <span className="text-navy">ShopDesk vs Excel</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange">
            Comparison
          </div>

          <h1 className="mb-6 font-[var(--font-heading)] text-[2rem] leading-[1.15] font-extrabold text-navy md:text-[2.75rem]">
            ShopDesk vs DIY Excel:
            <br />
            The Honest Comparison
          </h1>

          {/* Featured snippet target */}
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-navy/70 md:text-lg">
            ShopDesk IS a Google Sheet — but a professionally engineered one
            with 373 pre-built formulas, error protection, and Indian-specific
            calculations (GST, TDS, retention). Building the same in DIY Excel
            would take 40–80 hours. ShopDesk costs ₹999 and is ready in 15
            minutes.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/salon-crm"
              className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-hover min-h-[48px]"
            >
              Get ShopDesk — ₹999 →
            </Link>
            <a
              href="#comparison"
              className="inline-flex items-center justify-center rounded-full border border-navy/20 px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-navy/5 min-h-[48px]"
            >
              See Full Comparison ↓
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Comparison Table */}
      <section
        id="comparison"
        className="bg-white px-4 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-[var(--font-heading)] text-[1.5rem] font-extrabold text-navy md:text-[2rem]">
            What&apos;s Actually Different Between ShopDesk and Regular Excel?
          </h2>

          {/* Mobile cards + Desktop table */}
          <div className="overflow-x-auto rounded-2xl border border-navy/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy/10 bg-cream">
                  <th className="px-4 py-3 text-left font-bold text-navy md:px-6">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-center font-bold text-navy/50 md:px-6">
                    DIY Excel / Sheets
                  </th>
                  <th className="px-4 py-3 text-center font-bold text-orange md:px-6">
                    ShopDesk
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-navy/5 ${
                      i % 2 === 0 ? "bg-white" : "bg-cream/50"
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-navy md:px-6">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-center text-mid-grey md:px-6">
                      <span className="flex items-center justify-center gap-1.5">
                        <X size={14} className="shrink-0 text-alert" />
                        <span className="hidden sm:inline">{row.excel}</span>
                        <span className="sm:hidden text-xs">{row.excel}</span>
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center font-medium text-navy md:px-6">
                      <span className="flex items-center justify-center gap-1.5">
                        <Check size={14} className="shrink-0 text-teal" />
                        <span className="hidden sm:inline">
                          {row.shopdesk}
                        </span>
                        <span className="sm:hidden text-xs">
                          {row.shopdesk}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-mid-grey">
            ShopDesk wins on every metric except upfront cost — but ₹999 vs 40+
            hours of your time isn&apos;t even close.
          </p>
        </div>
      </section>

      {/* Section 2: Hidden Cost of DIY Excel */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 font-[var(--font-heading)] text-[1.5rem] font-extrabold text-navy md:text-[2rem]">
            The Hidden Cost of DIY Excel
          </h2>
          <p className="mb-8 max-w-2xl text-base text-mid-grey">
            We call this the <strong className="text-navy">time cost fallacy</strong> — free
            isn&apos;t free when you factor in your time, debugging, and the risk
            of formula errors in critical billing.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {hiddenCosts.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-navy/5 bg-white p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-alert/10">
                  <item.icon size={20} className="text-alert" />
                </div>
                <span className="block text-2xl font-extrabold text-navy">
                  {item.stat}
                </span>
                <span className="mb-2 block text-sm font-bold text-navy/60">
                  {item.label}
                </span>
                <p className="text-sm text-mid-grey">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: When DIY Excel Is Still Fine */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 font-[var(--font-heading)] text-[1.5rem] font-extrabold text-navy md:text-[2rem]">
            When DIY Excel Is Still Fine
          </h2>
          <p className="mb-6 text-base text-mid-grey">
            We&apos;re not here to sell you something you don&apos;t need.
            Here&apos;s when a basic spreadsheet is genuinely enough:
          </p>

          <div className="mb-8 space-y-3">
            {[
              "You only need a simple expense tracker",
              "You have fewer than 5 transactions per month",
              "You're a freelancer tracking personal income",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-teal"
                />
                <span className="text-base text-navy/80">{item}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border-2 border-orange/20 bg-orange/5 p-6">
            <p className="text-base leading-relaxed text-navy/80">
              <strong className="text-navy">
                But if you&apos;re a contractor raising RA Bills, or a salon
                tracking 20+ services and 5+ staff
              </strong>{" "}
              — ShopDesk saves you 40+ hours upfront and prevents expensive
              billing mistakes. At ₹999 one-time, it costs less than one
              day&apos;s labour.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font-[var(--font-heading)] text-[1.5rem] font-extrabold text-navy md:text-[2rem]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-navy/5 bg-white p-5 md:p-6"
              >
                <h3 className="mb-2 text-base font-bold text-navy">
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed text-mid-grey">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-[var(--font-heading)] text-[1.5rem] font-extrabold text-navy md:text-[2rem]">
            Ready to Stop Building Spreadsheets from Scratch?
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <CTABox product="construction" variant="full-width" />
            <CTABox product="salon" variant="full-width" />
          </div>
        </div>
      </section>
    </>
  );
}
