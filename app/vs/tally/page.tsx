import { Metadata } from "next";
import Link from "next/link";
import { Check, X, Minus, CheckCircle2, ArrowRight } from "lucide-react";
import { generateMetadata as genMeta } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = genMeta({
  title:
    "ShopDesk vs Tally Prime — Which is Better for Contractors & Small Business?",
  description:
    "Tally is great for accounting. ShopDesk is built for project billing, RA Bills, and salon management. See the honest comparison for Indian businesses. ₹999 vs ₹18,000.",
  path: "/vs/tally",
  keywords: [
    "tally alternative construction billing india",
    "shopdesk vs tally",
    "tally prime vs google sheets",
    "ra bill tracking tally",
    "construction billing software india",
    "tally alternative small business",
  ],
});

const comparisonRows: {
  feature: string;
  tally: string;
  shopdesk: string;
  winner: "tally" | "shopdesk" | "both";
}[] = [
  {
    feature: "Price",
    tally: "₹18,000–54,000 one-time",
    shopdesk: "₹999 one-time",
    winner: "shopdesk",
  },
  {
    feature: "RA Bill tracking",
    tally: "Not designed for this",
    shopdesk: "Purpose-built",
    winner: "shopdesk",
  },
  {
    feature: "BOQ / Project tracking",
    tally: "Not available",
    shopdesk: "Full BOQ master",
    winner: "shopdesk",
  },
  {
    feature: "Material reconciliation",
    tally: "Not available",
    shopdesk: "Built-in with alerts",
    winner: "shopdesk",
  },
  {
    feature: "Appointment booking (salon)",
    tally: "Not available",
    shopdesk: "Full appointment tracker",
    winner: "shopdesk",
  },
  {
    feature: "EVM (CPI, SPI, EAC)",
    tally: "Not available",
    shopdesk: "Dashboard ready",
    winner: "shopdesk",
  },
  {
    feature: "GST returns & filing",
    tally: "Full GST compliance",
    shopdesk: "Not available",
    winner: "tally",
  },
  {
    feature: "Balance sheet & P&L",
    tally: "Full accounting suite",
    shopdesk: "Not available",
    winner: "tally",
  },
  {
    feature: "Learning curve",
    tally: "High (needs accountant)",
    shopdesk: "Low (15 min setup)",
    winner: "shopdesk",
  },
  {
    feature: "Works on phone",
    tally: "App available",
    shopdesk: "Google Sheets free app",
    winner: "both",
  },
  {
    feature: "Best for",
    tally: "GST returns, accounting",
    shopdesk: "Day-to-day billing ops",
    winner: "both",
  },
];

const faqs = [
  {
    q: "Does ShopDesk replace Tally?",
    a: "No — and it's not meant to. Tally handles accounting, GST returns, balance sheets, and P&L statements. ShopDesk handles day-to-day operational tracking: RA Bills, BOQ, material reconciliation, salon appointments, and staff commissions. They solve different problems and work best together.",
  },
  {
    q: "Can I use ShopDesk and Tally together?",
    a: "Yes, that's actually the recommended setup. Use ShopDesk for daily project billing and operational tracking, then use Tally for final accounts, GST filing, and statutory compliance. Many contractors in Chandigarh and Mohali use both — ShopDesk for the field, Tally for the CA.",
  },
  {
    q: "Why can't I just track RA Bills in Tally?",
    a: "Tally is designed for ledger-based accounting, not project-level billing. It doesn't support BOQ-linked RA Bill calculations, material wastage tracking, earned value metrics (CPI/SPI), or construction-specific deductions like retention money tracking. You'd need to manually calculate all of this outside Tally anyway.",
  },
  {
    q: "Is ShopDesk only for construction? What about salons?",
    a: "ShopDesk includes both a Construction CRM (RA Bills, BOQ, EVM dashboard) and a Salon CRM (appointments, billing, staff commissions, inventory). Both are included in the ₹999 package — all 11 sheets.",
  },
  {
    q: "Tally costs ₹18,000. Why is ShopDesk only ₹999?",
    a: "Tally is a full accounting suite with decades of development, GST compliance, and statutory features. ShopDesk is a focused operational tool built in Google Sheets — no server costs, no licensing overhead. Different products, different price points, different problems solved.",
  },
];

const tallyStrengths = [
  "GST return filing (GSTR-1, GSTR-3B)",
  "Balance sheet & profit/loss statements",
  "Ledger management & double-entry accounting",
  "Statutory compliance & audit trail",
  "Bank reconciliation",
];

const shopDeskStrengths = [
  "RA Bill auto-calculation with GST, TDS, retention",
  "BOQ master with 44 items across 9 categories",
  "Material wastage tracking with auto-alerts",
  "EVM dashboard — CPI, SPI, EAC, TCPI",
  "Salon appointments, billing & staff commissions",
  "Payment aging tracker (30/60/90 days)",
];

function WinnerIcon({ winner }: { winner: "tally" | "shopdesk" | "both" }) {
  if (winner === "shopdesk")
    return <Check size={14} className="shrink-0 text-teal" />;
  if (winner === "tally")
    return <Check size={14} className="shrink-0 text-teal" />;
  return <Minus size={14} className="shrink-0 text-mid-grey" />;
}

function LoserIcon({ winner, side }: { winner: string; side: string }) {
  if (winner === "both")
    return <Minus size={14} className="shrink-0 text-mid-grey" />;
  if (winner === side)
    return <Check size={14} className="shrink-0 text-teal" />;
  return <X size={14} className="shrink-0 text-alert" />;
}

export default function VsTallyPage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Compare", url: "/vs/tally" },
          { name: "ShopDesk vs Tally", url: "/vs/tally" },
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
            <span className="text-navy">ShopDesk vs Tally</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange">
            Comparison
          </div>

          <h1 className="mb-6 font-[var(--font-heading)] text-[2rem] leading-[1.15] font-extrabold text-navy md:text-[2.75rem]">
            ShopDesk vs Tally Prime:
            <br />
            The Honest Comparison
          </h1>

          {/* Featured snippet target */}
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-navy/70 md:text-lg">
            Tally is India&apos;s most popular accounting software — and it&apos;s
            excellent at what it does: GST returns, ledgers, balance sheets.
            But Tally was never built for project-level billing, RA Bill
            tracking, or salon appointment management. That&apos;s where ShopDesk
            comes in. They&apos;re not competitors — they&apos;re complementary.
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
            Feature-by-Feature: Tally Prime vs ShopDesk
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-navy/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy/10 bg-cream">
                  <th className="px-4 py-3 text-left font-bold text-navy md:px-6">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-center font-bold text-navy/50 md:px-6">
                    Tally Prime
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
                    <td className="px-4 py-3 text-center md:px-6">
                      <span className="flex items-center justify-center gap-1.5">
                        <LoserIcon winner={row.winner} side="tally" />
                        <span
                          className={`text-xs sm:text-sm ${
                            row.winner === "tally"
                              ? "font-medium text-navy"
                              : "text-mid-grey"
                          }`}
                        >
                          {row.tally}
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center md:px-6">
                      <span className="flex items-center justify-center gap-1.5">
                        <WinnerIcon winner={row.winner} />
                        <span
                          className={`text-xs sm:text-sm ${
                            row.winner === "shopdesk"
                              ? "font-medium text-navy"
                              : row.winner === "both"
                                ? "text-navy/70"
                                : "text-mid-grey"
                          }`}
                        >
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
            Different tools for different jobs. Tally wins at accounting.
            ShopDesk wins at operational billing.
          </p>
        </div>
      </section>

      {/* Section 2: Do I Need to Choose? */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 font-[var(--font-heading)] text-[1.5rem] font-extrabold text-navy md:text-[2rem]">
            Do I Need to Choose Between Tally and ShopDesk?
          </h2>
          <p className="mb-8 max-w-2xl text-base text-mid-grey">
            No. The best setup is{" "}
            <strong className="text-navy">using both</strong>. They solve
            completely different problems and complement each other perfectly.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Tally strengths */}
            <div className="rounded-2xl border border-navy/5 bg-white p-6">
              <div className="mb-4 inline-flex rounded-full bg-navy/5 px-3 py-1 text-xs font-bold text-navy">
                Use Tally for
              </div>
              <ul className="space-y-3">
                {tallyStrengths.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-navy/40"
                    />
                    <span className="text-sm text-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-mid-grey">
                Your CA&apos;s domain. Keep Tally for statutory compliance.
              </p>
            </div>

            {/* ShopDesk strengths */}
            <div className="rounded-2xl border-2 border-orange/20 bg-white p-6">
              <div className="mb-4 inline-flex rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
                Use ShopDesk for
              </div>
              <ul className="space-y-3">
                {shopDeskStrengths.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-teal"
                    />
                    <span className="text-sm text-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-mid-grey">
                Your daily operational tool. Use it on-site, on your phone.
              </p>
            </div>
          </div>

          {/* Together callout */}
          <div className="mt-8 rounded-2xl bg-navy p-6 md:p-8">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <div className="flex shrink-0 items-center gap-2">
                <span className="rounded-lg bg-white/10 px-3 py-1.5 text-sm font-bold text-cream">
                  Tally
                </span>
                <span className="text-cream/40">+</span>
                <span className="rounded-lg bg-orange px-3 py-1.5 text-sm font-bold text-white">
                  ShopDesk
                </span>
              </div>
              <div>
                <p className="text-base font-bold text-cream">
                  Together is better than either alone.
                </p>
                <p className="text-sm text-cream/60">
                  Tally for your CA. ShopDesk for your site. Total cost: ₹18,999
                  — and you&apos;re covered end to end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Gap Tally Doesn't Cover */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 font-[var(--font-heading)] text-[1.5rem] font-extrabold text-navy md:text-[2rem]">
            The Gap Tally Doesn&apos;t Cover
          </h2>
          <p className="mb-8 text-base text-mid-grey">
            Ask any contractor in Chandigarh or Mohali — they use Tally for
            final accounts but still track RA Bills in paper registers or messy
            Excel sheets. Here&apos;s what falls through the cracks:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "RA Bill Calculation",
                desc: "Gross → +GST 12% → −Advance 20% → −Retention 10% → −TDS 2% → Net Payable. Tally doesn't do this. ShopDesk auto-calculates it.",
              },
              {
                title: "Material Wastage Alerts",
                desc: "Track issued vs consumed materials. ShopDesk flags anything with >5% wastage automatically. Tally only tracks purchases.",
              },
              {
                title: "Project-Level EVM",
                desc: "CPI, SPI, EAC, TCPI — earned value metrics at PMC level. Tally has no concept of project performance tracking.",
              },
              {
                title: "Salon Daily Operations",
                desc: "Appointments, walk-ins, stylist assignment, commission per service. Tally tracks revenue — ShopDesk tracks the work that generates it.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-navy/5 bg-cream p-5"
              >
                <h3 className="mb-2 flex items-start gap-2 text-base font-bold text-navy">
                  <ArrowRight
                    size={16}
                    className="mt-0.5 shrink-0 text-orange"
                  />
                  {item.title}
                </h3>
                <p className="pl-6 text-sm text-mid-grey">{item.desc}</p>
              </div>
            ))}
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
                <h3 className="mb-2 text-base font-bold text-navy">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-mid-grey">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-center font-[var(--font-heading)] text-[1.5rem] font-extrabold text-navy md:text-[2rem]">
            Fill the Gap Tally Leaves Behind
          </h2>
          <p className="mb-8 text-center text-base text-mid-grey">
            Keep Tally for accounting. Add ShopDesk for everything else — ₹999
            one-time.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <CTABox product="construction" variant="full-width" />
            <CTABox product="salon" variant="full-width" />
          </div>
        </div>
      </section>
    </>
  );
}
