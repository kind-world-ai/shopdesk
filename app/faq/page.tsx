import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = genMeta({
  title:
    "ShopDesk FAQ — All Questions Answered About Our Business Tools",
  description:
    "Answers to every question about ShopDesk — Salon CRM, Construction CRM, pricing, setup, support, refunds, and more. 20 frequently asked questions covered.",
  path: "/faq",
  keywords: [
    "shopdesk faq",
    "salon crm faq",
    "construction crm faq",
    "shopdesk pricing",
    "shopdesk support",
    "google sheets crm questions",
    "business management software india faq",
  ],
});

interface FAQ {
  q: string;
  a: string;
}

const aboutFaqs: FAQ[] = [
  {
    q: "What exactly is ShopDesk?",
    a: "ShopDesk is a professionally engineered Google Sheets-based business management system for Indian SMBs. It's not a mobile app or web software — it's a set of interconnected Google Sheets with 373+ validated formulas, automated dashboards, and pre-built workflows. You get a Google Sheet, make a copy to your own Drive, and start using it immediately. No installation, no login, no server dependency. Two products are available: Salon CRM (₹999) for beauty salons, and Construction CRM (₹999) for civil contractors.",
  },
  {
    q: "Why Google Sheets instead of an app?",
    a: "Three reasons. First, reliability — Google Sheets works offline, doesn't crash, doesn't need updates, and your data lives in your own Google Drive (not someone else's server). Second, familiarity — every smartphone and laptop in India has Google Sheets. Your staff doesn't need to learn a new app. Third, cost — there's no server to maintain, so we can charge ₹999 one-time instead of ₹2,000/month. For Indian SMBs doing ₹2–10 lakh/month revenue, a monthly SaaS subscription doesn't make sense. A one-time purchase does.",
  },
  {
    q: "Who is ShopDesk for?",
    a: "ShopDesk is designed for two specific types of Indian small businesses: (1) Beauty salons, parlours, and spas that need appointment tracking, staff commission calculation, inventory management, and GST billing. (2) Civil construction contractors who need RA Bill generation, BOQ tracking, material reconciliation, payment aging, and EVM dashboards. If you're a salon owner with 2–15 staff, or a contractor managing 1–10 projects, ShopDesk is built for you.",
  },
  {
    q: "How is ShopDesk different from Tally or other accounting software?",
    a: "Tally is accounting software — it handles ledgers, GST filing, and financial compliance. ShopDesk is an operations tool — it handles what happens before the accounting. For salons: appointments, commission tracking, daily cash reconciliation, client history. For contractors: RA Bills, BOQ quantities, material wastage, payment follow-ups. Most ShopDesk users also use Tally for their accounting. The two work together — ShopDesk generates the operational data that feeds into your Tally entries. See our detailed comparison at /vs/tally.",
  },
  {
    q: "Is ShopDesk a one-time purchase or subscription?",
    a: "One-time purchase. ₹999 for Salon CRM, ₹999 for Construction CRM. No monthly fees, no annual renewal, no hidden charges. You pay once, get the Google Sheet, and use it forever. Updates to the template are free — we share updated versions via email when we release improvements. There is no subscription model and there never will be.",
  },
];

const salonFaqs: FAQ[] = [
  {
    q: "What sheets are included in the Salon CRM?",
    a: "The Salon CRM includes 11 interconnected sheets: (1) Daily Service Log — record every service with stylist name, client, service type, and amount. (2) Appointment Tracker — manage bookings with time slots and stylist assignment. (3) Staff Commission — automatic commission calculation based on your rates and targets. (4) Staff Directory — all employee details, joining dates, salary structure. (5) Inventory — product stock levels with low-stock alerts. (6) Client Database — client history, preferences, visit frequency. (7) GST Billing — auto-generated GST invoices for services. (8) Daily Cash Reconciliation — match system records with actual cash. (9) Monthly Revenue Dashboard — visual summary of revenue, expenses, profit. (10) Expense Tracker — rent, utilities, product purchases, staff costs. (11) Settings — configure service menu, commission rates, tax rates.",
  },
  {
    q: "How does staff commission calculation work?",
    a: "You set commission rules once in the Settings sheet: each staff member's base salary, commission percentage (typically 15–30%), and monthly service target (e.g., ₹25,000). When you log daily services with the stylist's name, the Commission sheet automatically calculates: total services per staff member, whether they crossed their target, commission earned, and total payout (base + commission). At month-end, you print a statement for each staff member to review and sign. This eliminates the #1 cause of staff disputes in Indian salons — unclear commission calculations.",
  },
  {
    q: "Can I track walk-in clients vs booked appointments?",
    a: "Yes. The Daily Service Log has a 'Client Type' dropdown — Walk-in, Booked, or Regular. The Monthly Dashboard breaks down revenue by client type so you can see what percentage comes from walk-ins versus booked clients. This helps you understand whether you need to invest more in booking systems (WhatsApp reminders, online booking) or if your walk-in traffic is strong enough. Most Indian salons run 50–70% walk-in traffic.",
  },
  {
    q: "Does Salon CRM handle GST billing for salons?",
    a: "Yes. The GST Billing sheet generates invoices with your salon's GSTIN, the client's name, service details, taxable amount, GST amount (18% for salon services), and total. You can print or share these invoices digitally. The Monthly Dashboard also totals your GST liability for the month — making it easy for your CA to file GST returns. The system handles both B2C (consumer) and B2B (corporate) invoice formats.",
  },
  {
    q: "I have 3 staff members. Is Salon CRM overkill for a small salon?",
    a: "No — Salon CRM is designed for salons with 2–15 staff. If you have 3 staff members, you still need to track daily services, calculate commission, manage inventory, and know your monthly profit. These tasks take 6+ hours per month when done manually (register + calculator). With ShopDesk, they take 30 minutes. The setup takes 15–20 minutes. The ROI is clear even for a 3-person salon doing ₹1–2 lakh/month.",
  },
];

const constructionFaqs: FAQ[] = [
  {
    q: "What sheets are included in the Construction CRM?",
    a: "The Construction CRM includes 11 interconnected sheets: (1) BOQ Master — 44 pre-loaded items across 9 categories (civil, electrical, plumbing, etc.) with unit rates. (2) RA Bill Generator — auto-calculates gross amount, GST 12%, TDS 2%, retention 10%, advance recovery, and net payable. (3) Cumulative Tracker — tracks quantities and amounts across all RA Bills. (4) Payment Tracker — 30/60/90 day aging with outstanding amount alerts. (5) Material Issue Register — track material issued to site. (6) Material Reconciliation — compare issued vs consumed, flag wastage >5%. (7) EVM Dashboard — CPI, SPI, EAC, TCPI metrics. (8) Subcontractor Billing — manage sub-contractor invoices and retention. (9) Daily Progress Report — daily work done, manpower, equipment. (10) Expense Tracker — project-wise expense recording. (11) Settings — configure project details, rates, tax percentages.",
  },
  {
    q: "Does ShopDesk support CPWD and state PWD RA Bill formats?",
    a: "Yes. The RA Bill format in ShopDesk includes all fields required by CPWD (Central Public Works Department) and state PWDs — BOQ reference with item number, description, unit, contract quantity, contract rate, previous cumulative quantity, current bill quantity, total quantity to date, and the full payment waterfall (gross → GST → advance recovery → retention → TDS → net payable). The format also includes certification fields (Prepared by, Verified by, Checked by, Approved by). It's compatible with CPWD, Punjab PWD, Haryana PWD, GMADA, and private contract formats.",
  },
  {
    q: "How does the material wastage alert work?",
    a: "The Material Reconciliation sheet compares two numbers: material issued to site and material consumed (calculated from BOQ quantities × standard consumption rates). The difference is wastage. If wastage exceeds 5% for any material, the cell turns red automatically using conditional formatting. This is critical for cement, steel, and aggregate — where 5% wastage on a ₹20 lakh material budget means ₹1 lakh lost. The alert helps you investigate the cause (theft, poor storage, incorrect consumption rates) before the loss compounds.",
  },
  {
    q: "Can I track multiple projects simultaneously?",
    a: "Yes. You make a separate copy of the Construction CRM for each project. Each project has its own Google Sheet with its own BOQ, RA Bills, and payment tracker. For contractors managing 3–5 projects, this means 3–5 Google Sheets — each independent, each with its own cumulative tracking. If you need a consolidated multi-project view, ShopDesk Pro (₹2,999) includes a Master Dashboard that pulls data from all project sheets into one summary.",
  },
  {
    q: "What is the EVM Dashboard and do I really need it?",
    a: "EVM (Earned Value Management) is a project performance measurement technique. The dashboard shows 4 key metrics: CPI (Cost Performance Index — are you under or over budget?), SPI (Schedule Performance Index — are you ahead or behind schedule?), EAC (Estimate at Completion — what will the project finally cost?), and TCPI (To-Complete Performance Index — what efficiency do you need going forward?). If CPI > 1, you're under budget. If SPI > 1, you're ahead of schedule. For contractors working on government or PMC-managed projects, EVM metrics are often required in monthly progress reports. Even for private projects, knowing your CPI and SPI helps you make better decisions about resource allocation.",
  },
];

const pricingFaqs: FAQ[] = [
  {
    q: "How do I get support after buying ShopDesk?",
    a: "Support is available via WhatsApp and email. After purchase, you get a WhatsApp number for direct support. Most setup questions are answered within 2 hours during business hours (9 AM – 6 PM IST, Monday to Saturday). Common support requests include: initial setup help, customising commission rates, adding new service items to the menu, and understanding dashboard calculations. There is no additional charge for support — it's included with your purchase.",
  },
  {
    q: "What if I want a refund?",
    a: "ShopDesk offers a 7-day refund policy. If you buy the product and find it doesn't fit your business needs within 7 days of purchase, email hello@shopdesk.in with your order details and reason. Full refund, no questions asked. After 7 days, refunds are considered on a case-by-case basis. Note: since the product is a Google Sheet that you copy to your own Drive, we can't technically \"take it back\" — the refund policy is trust-based.",
  },
  {
    q: "Can I share ShopDesk with my business partner?",
    a: "Yes. Since ShopDesk lives in Google Sheets, you can share it with anyone using Google's built-in sharing. Share with your business partner as an Editor so they can enter data and view dashboards. Share with your CA as a Viewer so they can access financial summaries for tax filing. Share with your manager as an Editor for daily operations. There's no per-user licensing — once you buy it, share it with as many people as your business needs.",
  },
  {
    q: "Will ShopDesk work on my Android phone?",
    a: "Yes. Google Sheets works on Android phones, iPhones, tablets, laptops, and desktops. The Google Sheets app is free on both Play Store and App Store. You can enter daily services or log material issues from your phone on site. Dashboards and reports are best viewed on a tablet or laptop for the larger screen, but all data entry works perfectly on a phone. No separate app needed — just the standard Google Sheets app that's likely already on your phone.",
  },
  {
    q: "Do you offer bulk pricing for multiple branches?",
    a: "Yes. If you operate multiple salon branches or manage construction projects across locations, contact us at hello@shopdesk.in for bulk pricing. Typical bulk offers: 3 copies for ₹2,499 (save ₹498), 5 copies for ₹3,999 (save ₹996), 10+ copies at custom pricing. Each copy is a separate Google Sheet — so each branch or project gets its own independent system. We also offer Done-For-You setup (₹9,999) where we customise the sheets for your specific business and set up all branches.",
  },
];

const allFaqs = [...aboutFaqs, ...salonFaqs, ...constructionFaqs, ...pricingFaqs];

const sections = [
  { title: "About ShopDesk", faqs: aboutFaqs },
  { title: "Salon CRM Questions", faqs: salonFaqs },
  { title: "Construction CRM Questions", faqs: constructionFaqs },
  { title: "Pricing & Support", faqs: pricingFaqs },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd schema={faqSchema(allFaqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ])}
      />

      <section className="bg-cream px-4 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-mid-grey">
            <Link href="/" className="hover:text-navy">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy">FAQ</span>
          </nav>

          {/* Header */}
          <h1 className="mb-4 font-[var(--font-heading)] text-3xl font-extrabold text-navy md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mb-12 text-lg text-mid-grey max-w-2xl">
            Everything you need to know about ShopDesk — our products, pricing,
            setup, and support. 20 questions, straight answers.
          </p>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-6 font-[var(--font-heading)] text-xl font-bold text-navy md:text-2xl">
                  {section.title}
                </h2>

                <div className="space-y-3">
                  {section.faqs.map((faq) => (
                    <details
                      key={faq.q}
                      className="group rounded-xl border border-navy/10 bg-white transition-shadow hover:shadow-sm"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-medium text-navy md:px-6 md:py-5 min-h-[56px] [&::-webkit-details-marker]:hidden list-none">
                        <span className="text-[15px] leading-snug md:text-base">
                          {faq.q}
                        </span>
                        <span className="shrink-0 text-navy/40 transition-transform duration-200 group-open:rotate-45 text-xl leading-none">
                          +
                        </span>
                      </summary>
                      <div className="px-5 pb-5 md:px-6 md:pb-6">
                        <div className="border-t border-navy/5 pt-4">
                          <p className="text-[15px] leading-relaxed text-mid-grey whitespace-pre-line">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 rounded-2xl bg-navy p-8 text-center md:p-10">
            <h2 className="mb-3 font-[var(--font-heading)] text-xl font-bold text-cream md:text-2xl">
              Still have questions?
            </h2>
            <p className="mb-6 text-cream/60">
              WhatsApp us or email hello@shopdesk.in — we reply within 2 hours
              during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white hover:bg-orange-hover transition-colors min-h-[48px]"
              >
                Browse Products
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream hover:border-cream transition-colors min-h-[48px]"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
