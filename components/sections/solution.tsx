"use client";

import { Smartphone, Cloud, FileSpreadsheet, BarChart3, ArrowRight } from "lucide-react";

const stats = [
  { value: "₹999", label: "One-time purchase" },
  { value: "15 min", label: "Setup time" },
  { value: "373", label: "Validated formulas" },
  { value: "₹0", label: "Monthly fees" },
  { value: "500+", label: "Users across India" },
];

const flowSteps = [
  { icon: Smartphone, label: "Your Phone" },
  { icon: Cloud, label: "Google Drive" },
  { icon: FileSpreadsheet, label: "ShopDesk Sheet" },
  { icon: BarChart3, label: "Auto Dashboard" },
];

export function SolutionSection() {
  return (
    <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        {/* Label */}
        <p className="mb-3 text-sm font-semibold tracking-widest text-teal uppercase">
          The Solution
        </p>

        {/* H2 */}
        <h2 className="mb-4 text-[1.75rem] leading-tight font-extrabold text-navy md:text-[2.75rem]">
          One Sheet.
          <br />
          Everything Tracked.{" "}
          <span className="gradient-text">Zero Chaos.</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-14 max-w-xl text-base leading-relaxed text-mid-grey md:text-lg">
          ShopDesk builds professional business management tools inside Google
          Sheets. No software. No servers. No subscriptions. Open on your phone,
          update from site, share with your team.
        </p>

        {/* Flow diagram */}
        <div className="mb-14 flex items-center justify-center gap-3 overflow-x-auto py-2 md:gap-4">
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3 md:gap-4">
              <div className="flex flex-col items-center gap-2.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-navy/8 bg-white shadow-sm md:h-16 md:w-16">
                  <step.icon size={22} className="text-navy" />
                </div>
                <span className="text-xs font-medium text-navy/60 whitespace-nowrap">
                  {step.label}
                </span>
              </div>
              {i < flowSteps.length - 1 && (
                <ArrowRight size={16} className="mb-5 shrink-0 text-navy/20" />
              )}
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 md:px-8">
          <div className="hide-scrollbar flex gap-6 overflow-x-auto md:justify-between">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex min-w-fit flex-col items-center gap-0.5 ${
                  i < stats.length - 1
                    ? "md:border-r md:border-gray-200 md:pr-6"
                    : ""
                }`}
              >
                <span className="text-2xl font-extrabold text-navy md:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs text-mid-grey">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
