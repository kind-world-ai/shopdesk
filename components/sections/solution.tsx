"use client";

import { Smartphone, Cloud, FileSpreadsheet, BarChart3 } from "lucide-react";

const stats = [
  { value: "₹999", label: "One-time purchase" },
  { value: "15 min", label: "Setup time" },
  { value: "373", label: "Validated formulas" },
  { value: "0", label: "Monthly fees" },
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
        {/* H2 */}
        <h2 className="mb-4 font-[var(--font-heading)] text-[1.75rem] leading-tight font-extrabold text-navy md:text-[2.75rem]">
          One Sheet.
          <br />
          Everything Tracked.
          <br />
          <span className="gradient-text">Zero Chaos.</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-mid-grey md:text-lg">
          ShopDesk builds professional business management tools inside Google
          Sheets. No software. No servers. No subscriptions. Open on your phone,
          update from site, share with your team.
        </p>

        {/* Flow diagram */}
        <div className="mb-12 flex items-center justify-center gap-2 overflow-x-auto py-4 md:gap-6">
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 md:gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="clip-octagon flex h-14 w-14 items-center justify-center bg-navy/5 md:h-16 md:w-16">
                  <step.icon size={24} className="text-navy" />
                </div>
                <span className="text-xs font-medium text-navy/70">
                  {step.label}
                </span>
              </div>
              {i < flowSteps.length - 1 && (
                <span className="mb-6 text-navy/30">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="hide-scrollbar -mx-4 flex gap-6 overflow-x-auto px-4 md:justify-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex min-w-fit flex-col">
              <span className="text-2xl font-extrabold text-navy md:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs text-mid-grey">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
