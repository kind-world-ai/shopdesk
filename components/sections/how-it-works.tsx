"use client";

import { Download, CloudUpload, Sparkles } from "lucide-react";
import { HowToSchema } from "@/components/seo/schemas";

const steps = [
  {
    num: "1",
    icon: Download,
    title: "Download Your Sheet",
    body: "Purchase once. Download the .xlsx file. No account creation required. No waiting for access approval.",
    schemaName: "Download the sheet",
    schemaText:
      "Purchase and download the ShopDesk CRM .xlsx file. No account needed.",
  },
  {
    num: "2",
    icon: CloudUpload,
    title: "Open in Google Sheets",
    body: "Upload to Google Drive and open with Google Sheets — free on every Android and iPhone. Make a copy and it's yours forever.",
    schemaName: "Upload to Google Drive",
    schemaText:
      "Upload to Google Drive and click 'Open with Google Sheets'. Make a copy.",
  },
  {
    num: "3",
    icon: Sparkles,
    title: "Fill In Your Details",
    body: "Enter your project name, contract value, and rates. All 373 formulas activate automatically. Your dashboard is live in minutes.",
    schemaName: "Enter project details",
    schemaText:
      "Fill in the setup tab with your details. All formulas activate automatically. Dashboard is live in minutes.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
      <HowToSchema
        name="How to Set Up ShopDesk CRM"
        description="Get your business management system running in 15 minutes"
        totalTime="PT15M"
        steps={steps.map((s) => ({ name: s.schemaName, text: s.schemaText }))}
      />

      <div className="mx-auto max-w-5xl">
        {/* Label */}
        <p className="mb-2 text-center text-sm font-semibold tracking-wider text-teal uppercase">
          Simple Setup
        </p>

        {/* H2 */}
        <h2 className="mb-12 text-center font-[var(--font-heading)] text-[1.75rem] font-extrabold text-navy md:text-[2.5rem]">
          Up and Running in 15 Minutes
        </h2>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="absolute top-8 right-0 hidden h-[2px] w-[calc(100%_-_4rem)] translate-x-1/2 border-t-2 border-dashed border-navy/10 md:block" />
              )}

              {/* Badge */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-xl font-extrabold text-white">
                {step.num}
              </div>

              {/* Icon */}
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10">
                <step.icon size={24} className="text-orange" />
              </div>

              <h3 className="mb-2 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-mid-grey">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-base font-semibold text-orange underline underline-offset-4 transition-colors hover:text-orange-hover"
          >
            See It in Action — Free Demo →
          </a>
        </div>
      </div>
    </section>
  );
}
