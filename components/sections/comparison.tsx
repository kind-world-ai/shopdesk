"use client";

const rows = [
  {
    feature: "Price",
    paper: "₹0",
    excel: "₹0",
    erp: "₹5k–15k/mo",
    shopdesk: "₹999 one-time ✅",
  },
  {
    feature: "RA Bill Auto-Calculation",
    paper: "❌",
    excel: "Manual",
    erp: "✅",
    shopdesk: "✅",
  },
  {
    feature: "GST + TDS + Retention",
    paper: "❌",
    excel: "Manual",
    erp: "✅",
    shopdesk: "✅",
  },
  {
    feature: "Works on Mobile Phone",
    paper: "✅ (paper)",
    excel: "❌",
    erp: "App only",
    shopdesk: "✅ Google Sheets",
  },
  {
    feature: "No IT Setup Required",
    paper: "✅",
    excel: "✅",
    erp: "❌",
    shopdesk: "✅",
  },
  {
    feature: "EVM Dashboard",
    paper: "❌",
    excel: "❌",
    erp: "Some plans",
    shopdesk: "✅",
  },
  {
    feature: "Payment Aging Tracker",
    paper: "❌",
    excel: "❌",
    erp: "✅",
    shopdesk: "✅",
  },
  {
    feature: "Data On Your Google Drive",
    paper: "Paper",
    excel: "Your PC",
    erp: "Their servers",
    shopdesk: "Your Drive ✅",
  },
  {
    feature: "Setup Time",
    paper: "0 min",
    excel: "Days",
    erp: "5–30 days",
    shopdesk: "15 minutes ✅",
  },
  {
    feature: "Monthly Subscription",
    paper: "❌",
    excel: "❌",
    erp: "₹5k–15k",
    shopdesk: "₹0 forever ✅",
  },
];

export function ComparisonSection() {
  return (
    <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center font-[var(--font-heading)] text-[1.75rem] font-extrabold text-navy md:text-[2.5rem]">
          Why 500+ Businesses Chose ShopDesk
          <br className="hidden md:block" /> Over ₹5,000/Month Software
        </h2>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-navy/10 bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-navy/10 bg-navy/[0.03]">
                <th className="px-4 py-3 text-xs font-bold tracking-wider text-navy uppercase">
                  Feature
                </th>
                <th className="px-3 py-3 text-xs font-bold tracking-wider text-navy/50 uppercase">
                  Paper
                </th>
                <th className="px-3 py-3 text-xs font-bold tracking-wider text-navy/50 uppercase">
                  Excel
                </th>
                <th className="px-3 py-3 text-xs font-bold tracking-wider text-navy/50 uppercase">
                  ERP
                </th>
                <th className="px-3 py-3 text-xs font-bold tracking-wider text-orange uppercase">
                  ShopDesk ₹999
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? "" : "bg-navy/[0.015]"}
                >
                  <td className="px-4 py-3 font-medium text-navy">
                    {row.feature}
                  </td>
                  <td className="px-3 py-3 text-navy/50">{row.paper}</td>
                  <td className="px-3 py-3 text-navy/50">{row.excel}</td>
                  <td className="px-3 py-3 text-navy/50">{row.erp}</td>
                  <td className="px-3 py-3 font-semibold text-teal">
                    {row.shopdesk}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm font-semibold text-navy/70">
          ShopDesk wins 8 out of 10 categories — at{" "}
          <span className="text-orange">1/150th the cost</span> of ERP.
        </p>

        <div className="mt-6 text-center">
          <a
            href="#pricing"
            className="inline-flex w-full items-center justify-center rounded-full bg-orange px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-orange-hover md:w-auto"
          >
            Download Now — ₹999 →
          </a>
        </div>
      </div>
    </section>
  );
}
