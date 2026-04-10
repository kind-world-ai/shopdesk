"use client";

import { useState } from "react";
import {
  Calendar,
  DollarSign,
  Users,
  Package,
  BarChart3,
  RefreshCw,
  CheckCircle2,
  Scissors,
  HardHat,
} from "lucide-react";

const salonFeatures = [
  {
    icon: Calendar,
    title: "Bookings",
    desc: "Track daily appointments",
  },
  {
    icon: DollarSign,
    title: "Billing",
    desc: "GST invoices auto-calc",
  },
  {
    icon: Users,
    title: "Staff",
    desc: "Commission tracking",
  },
  {
    icon: Package,
    title: "Inventory",
    desc: "Stock alerts & reorders",
  },
  {
    icon: BarChart3,
    title: "Dashboard",
    desc: "Revenue KPIs at a glance",
  },
  {
    icon: RefreshCw,
    title: "Monthly",
    desc: "Summaries auto-reset",
  },
];

const constructionFeatures = [
  "RA Bill with GST → Retention → TDS → Net Payable (auto)",
  "BOQ Master — 44 items across 9 categories",
  "Material reconciliation with wastage alerts",
  "EVM Dashboard — CPI, SPI, EAC, TCPI",
  "Payment Tracker — aging 30/60/90+ days",
  "Subcontractor billing + retention release",
];

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"salon" | "construction">(
    "salon"
  );

  return (
    <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <p className="mb-3 text-center text-sm font-semibold tracking-widest text-teal uppercase">
          Products
        </p>
        <h2 className="mb-8 text-center text-[1.75rem] font-extrabold text-navy md:text-[2.5rem]">
          Built for Your Industry
        </h2>

        {/* Tab selector */}
        <div className="mb-8 flex gap-1.5 rounded-2xl border border-gray-200 bg-white p-1.5">
          <button
            onClick={() => setActiveTab("salon")}
            className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
              activeTab === "salon"
                ? "bg-navy text-white shadow-sm"
                : "text-mid-grey hover:text-navy"
            }`}
          >
            <Scissors size={16} />
            Salon CRM
          </button>
          <button
            onClick={() => setActiveTab("construction")}
            className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
              activeTab === "construction"
                ? "bg-navy text-white shadow-sm"
                : "text-mid-grey hover:text-navy"
            }`}
          >
            <HardHat size={16} />
            Construction CRM
          </button>
        </div>

        {/* Tab content */}
        <div className="min-h-[380px]">
          {activeTab === "salon" ? (
            <div>
              <h2 className="mb-1.5 text-xl font-bold text-navy md:text-2xl">
                AgenticVani Salon CRM
              </h2>
              <p className="mb-6 text-sm text-mid-grey">
                Complete Salon Management in One Sheet — used by salons in
                Chandigarh, Mohali, and across Punjab
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                {salonFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="card-hover rounded-2xl border border-gray-200 bg-white p-4"
                  >
                    <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10">
                      <f.icon size={18} className="text-orange" />
                    </div>
                    <h3 className="text-sm font-bold text-navy">{f.title}</h3>
                    <p className="text-xs text-mid-grey">{f.desc}</p>
                  </div>
                ))}
              </div>

              <a
                href="#pricing"
                className="btn-glow inline-flex cursor-pointer w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-orange-hover md:w-auto"
              >
                Download Salon CRM — ₹999
              </a>
            </div>
          ) : (
            <div>
              <h2 className="mb-1.5 text-xl font-bold text-navy md:text-2xl">
                AgenticVani Construction CRM
              </h2>
              <p className="mb-6 text-sm text-mid-grey">
                RA Bill & Project Tracking Done Right — trusted by contractors
                in Mohali, Ludhiana, and Delhi NCR
              </p>

              <div className="mb-8 space-y-3">
                {constructionFeatures.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-teal"
                    />
                    <span className="text-sm font-medium text-navy md:text-base">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#pricing"
                className="btn-glow inline-flex cursor-pointer w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-orange-hover md:w-auto"
              >
                Download Construction CRM — ₹999
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
