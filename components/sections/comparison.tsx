"use client";

import { CheckCircle2, XCircle, MinusCircle, ArrowRight } from "lucide-react";

const rows = [
  {
    feature: "Price",
    paper: { text: "₹0", status: "neutral" },
    excel: { text: "₹0", status: "neutral" },
    erp: { text: "₹5k–15k/mo", status: "bad" },
    shopdesk: { text: "₹999 one-time", status: "good" },
  },
  {
    feature: "RA Bill Auto-Calculation",
    paper: { text: "Manual", status: "bad" },
    excel: { text: "Manual", status: "bad" },
    erp: { text: "Yes", status: "good" },
    shopdesk: { text: "Yes", status: "good" },
  },
  {
    feature: "GST + TDS + Retention",
    paper: { text: "Manual", status: "bad" },
    excel: { text: "Manual", status: "bad" },
    erp: { text: "Yes", status: "good" },
    shopdesk: { text: "Yes", status: "good" },
  },
  {
    feature: "Works on Mobile Phone",
    paper: { text: "Paper only", status: "neutral" },
    excel: { text: "Limited", status: "bad" },
    erp: { text: "App only", status: "neutral" },
    shopdesk: { text: "Google Sheets", status: "good" },
  },
  {
    feature: "No IT Setup Required",
    paper: { text: "Yes", status: "good" },
    excel: { text: "Yes", status: "good" },
    erp: { text: "No", status: "bad" },
    shopdesk: { text: "Yes", status: "good" },
  },
  {
    feature: "EVM Dashboard",
    paper: { text: "No", status: "bad" },
    excel: { text: "No", status: "bad" },
    erp: { text: "Some plans", status: "neutral" },
    shopdesk: { text: "Included", status: "good" },
  },
  {
    feature: "Payment Aging Tracker",
    paper: { text: "No", status: "bad" },
    excel: { text: "No", status: "bad" },
    erp: { text: "Yes", status: "good" },
    shopdesk: { text: "Included", status: "good" },
  },
  {
    feature: "Data Ownership",
    paper: { text: "Paper", status: "neutral" },
    excel: { text: "Your PC", status: "neutral" },
    erp: { text: "Their servers", status: "bad" },
    shopdesk: { text: "Your Drive", status: "good" },
  },
  {
    feature: "Setup Time",
    paper: { text: "0 min", status: "neutral" },
    excel: { text: "Days", status: "bad" },
    erp: { text: "5–30 days", status: "bad" },
    shopdesk: { text: "15 minutes", status: "good" },
  },
  {
    feature: "Monthly Subscription",
    paper: { text: "None", status: "good" },
    excel: { text: "None", status: "good" },
    erp: { text: "₹5k–15k", status: "bad" },
    shopdesk: { text: "₹0 forever", status: "good" },
  },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "good")
    return <CheckCircle2 size={15} className="text-teal shrink-0" />;
  if (status === "bad")
    return <XCircle size={15} className="text-red-400 shrink-0" />;
  return <MinusCircle size={15} className="text-mid-grey/40 shrink-0" />;
}

export function ComparisonSection() {
  return (
    <section className="bg-[#1E293B] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-sm font-semibold tracking-widest text-[#14B8A6] uppercase">
          Comparison
        </p>
        <h2 className="mb-3 text-center text-[1.75rem] font-extrabold text-white md:text-[2.5rem]">
          Why 500+ Businesses Chose ShopDesk
          <br className="hidden md:block" /> Over ₹5,000/Month Software
        </h2>
        <p className="mb-10 text-center text-sm text-white/40">
          ShopDesk wins 8 out of 10 categories — at 1/150th the cost of ERP.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-5 py-3.5 text-xs font-bold tracking-wider text-white/40 uppercase">
                  Feature
                </th>
                <th className="px-4 py-3.5 text-xs font-bold tracking-wider text-white/30 uppercase">
                  Paper
                </th>
                <th className="px-4 py-3.5 text-xs font-bold tracking-wider text-white/30 uppercase">
                  Excel
                </th>
                <th className="px-4 py-3.5 text-xs font-bold tracking-wider text-white/30 uppercase">
                  ERP
                </th>
                <th className="bg-orange/10 px-4 py-3.5 text-xs font-bold tracking-wider text-orange uppercase">
                  ShopDesk ₹999
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/5 ${
                    i % 2 === 0 ? "" : "bg-white/[0.02]"
                  }`}
                >
                  <td className="px-5 py-3.5 font-medium text-white/80">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3.5 text-white/35">
                    {row.paper.text}
                  </td>
                  <td className="px-4 py-3.5 text-white/35">
                    {row.excel.text}
                  </td>
                  <td className="px-4 py-3.5 text-white/35">
                    {row.erp.text}
                  </td>
                  <td className="bg-orange/5 px-4 py-3.5">
                    <div className="flex items-center gap-2 font-semibold text-[#14B8A6]">
                      <StatusIcon status={row.shopdesk.status} />
                      {row.shopdesk.text}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#pricing"
            className="btn-glow inline-flex cursor-pointer items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-orange-hover"
          >
            Download Now — ₹999
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
