import type { Metadata } from "next";
import { ProductSchema } from "@/components/seo/schemas";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";
import {
  Star,
  Scissors,
  Calendar,
  DollarSign,
  Users,
  Package,
  BarChart3,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ShopDesk Salon CRM — Complete Salon Management in Google Sheets | ₹999",
  description:
    "Professional salon management system for Indian salons. Track appointments, billing, staff commissions, inventory, and monthly revenue. 11 sheets, 250+ formulas. One-time ₹999. Used by salons in Chandigarh, Mohali, Panchkula.",
  openGraph: {
    title: "ShopDesk Salon CRM — Manage Your Salon Like a Pro",
    description: "Complete salon CRM in Google Sheets. ₹999 one-time. No subscription.",
    locale: "en_IN",
  },
  alternates: { canonical: "https://theshopdesk.in/salon" },
};

const features = [
  { icon: Calendar, title: "Appointment Booking", desc: "Track daily appointments with time slots, stylist assignment, and service type. Never double-book again." },
  { icon: DollarSign, title: "GST Billing", desc: "Auto-calculate GST invoices for every service. Professional bills in 30 seconds." },
  { icon: Users, title: "Staff Commission", desc: "Automatic commission calculation based on services performed. No more manual tracking." },
  { icon: Package, title: "Inventory Tracking", desc: "Track product stock levels. Get alerts when items run low. Reorder on time." },
  { icon: BarChart3, title: "Revenue Dashboard", desc: "Daily, weekly, monthly revenue at a glance. Know your best services and busiest days." },
  { icon: RefreshCw, title: "Monthly Reset", desc: "One-click monthly summary and reset. Start fresh every month with historical data saved." },
];

export default function SalonPage() {
  return (
    <>
      <ProductSchema
        name="ShopDesk Salon CRM"
        description="Complete salon management system in Google Sheets. Track appointments, billing, staff, inventory, and monthly revenue. 11 sheets, 250+ formulas. One-time purchase."
        price="999"
      />

      {/* Hero */}
      <section className="bg-cream px-4 pt-20 pb-12 md:px-8 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange">
            <Scissors size={13} />
            For Salon Owners
          </div>

          <h1 className="mb-4 text-[2rem] leading-[1.15] font-extrabold text-navy md:text-[3rem]">
            Complete Salon Management
            <br />
            in One Google Sheet.{" "}
            <span className="text-orange">₹999.</span>
          </h1>

          <p className="mb-6 max-w-xl text-base text-mid-grey md:text-lg">
            Appointments, billing, staff commissions, inventory — everything a salon in
            Chandigarh, Mohali, or anywhere in India needs. Ready in 15 minutes.
          </p>

          <a
            href="#pricing"
            className="btn-glow inline-flex cursor-pointer items-center gap-2 rounded-full bg-orange px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-orange-hover"
          >
            Download Salon CRM — ₹999
            <ArrowRight size={16} />
          </a>

          <div className="mt-5 flex items-center gap-4 text-sm text-mid-grey">
            <span className="flex items-center gap-1">
              <Star size={13} className="fill-gold text-gold" /> 4.8/5
            </span>
            <span>500+ users</span>
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
            What Does ShopDesk Salon CRM Track?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card-hover rounded-2xl border border-gray-200 bg-white p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10">
                  <f.icon size={20} className="text-orange" />
                </div>
                <h3 className="mb-1 text-base font-bold text-navy">{f.title}</h3>
                <p className="text-sm text-mid-grey">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ShopDesk */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-teal uppercase">
            Why ShopDesk
          </p>
          <h2 className="mb-6 text-[1.5rem] font-extrabold text-navy md:text-[2rem]">
            Why Do Salon Owners in Chandigarh Choose ShopDesk?
          </h2>
          <div className="space-y-3">
            {[
              "₹999 one-time vs ₹2,000–5,000/month for salon software",
              "Works on any phone — Android or iPhone via Google Sheets app",
              "No IT setup, no login, no training needed",
              "Staff commission auto-calculated — no more disputes",
              "GST invoices generated in 30 seconds",
              "Your data stays in your Google Drive — 100% private",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal" />
                <span className="text-sm text-navy md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
