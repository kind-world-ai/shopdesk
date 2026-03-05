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
        {/* Tab selector */}
        <div className="mb-8 flex gap-1 rounded-xl bg-navy/5 p-1">
          <button
            onClick={() => setActiveTab("salon")}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-bold transition-all ${
              activeTab === "salon"
                ? "bg-white text-navy shadow-sm"
                : "text-navy/50"
            }`}
          >
            💇 Salon CRM
          </button>
          <button
            onClick={() => setActiveTab("construction")}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-bold transition-all ${
              activeTab === "construction"
                ? "bg-white text-navy shadow-sm"
                : "text-navy/50"
            }`}
          >
            🏗️ Construction CRM
          </button>
        </div>

        {/* Tab content */}
        <div className="min-h-[400px]">
          {activeTab === "salon" ? (
            <div>
              <h2 className="mb-2 font-[var(--font-heading)] text-xl font-bold text-navy md:text-2xl">
                ShopDesk Salon CRM
              </h2>
              <p className="mb-6 text-sm text-mid-grey">
                Complete Salon Management in One Sheet — used by salons in
                Chandigarh, Mohali, and across Punjab
              </p>

              {/* Feature grid */}
              <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                {salonFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-xl border border-navy/5 bg-white p-4"
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-orange/10">
                      <f.icon size={20} className="text-orange" />
                    </div>
                    <h3 className="text-sm font-bold text-navy">{f.title}</h3>
                    <p className="text-xs text-mid-grey">{f.desc}</p>
                  </div>
                ))}
              </div>

              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center rounded-full bg-orange px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-orange-hover md:w-auto"
              >
                Download Salon CRM — ₹999 →
              </a>
            </div>
          ) : (
            <div>
              <h2 className="mb-2 font-[var(--font-heading)] text-xl font-bold text-navy md:text-2xl">
                ShopDesk Construction CRM
              </h2>
              <p className="mb-6 text-sm text-mid-grey">
                RA Bill & Project Tracking Done Right — trusted by contractors
                in Mohali, Ludhiana, and Delhi NCR
              </p>

              {/* Feature list */}
              <div className="mb-8 space-y-3">
                {constructionFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
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
                className="inline-flex w-full items-center justify-center rounded-full bg-orange px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-orange-hover md:w-auto"
              >
                Download Construction CRM — ₹999 →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
