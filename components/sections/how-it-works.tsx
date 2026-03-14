"use client";

import { Download, CloudUpload, Sparkles, ArrowRight } from "lucide-react";
import { HowToSchema } from "@/components/seo/schemas";

const steps = [
  {
    num: "01",
    icon: Download,
    title: "Download Your Sheet",
    body: "Purchase once. Download the .xlsx file. No account creation required. No waiting for access approval.",
    schemaName: "Download the sheet",
    schemaText:
      "Purchase and download the ShopDesk CRM .xlsx file. No account needed.",
  },
  {
    num: "02",
    icon: CloudUpload,
    title: "Open in Google Sheets",
    body: "Upload to Google Drive and open with Google Sheets — free on every Android and iPhone. Make a copy and it's yours forever.",
    schemaName: "Upload to Google Drive",
    schemaText:
      "Upload to Google Drive and click 'Open with Google Sheets'. Make a copy.",
  },
  {
    num: "03",
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
    <section className="bg-[#1E293B] px-4 py-16 md:px-8 md:py-24">
      <HowToSchema
        name="How to Set Up ShopDesk CRM"
        description="Get your business management system running in 15 minutes"
        totalTime="PT15M"
        steps={steps.map((s) => ({ name: s.schemaName, text: s.schemaText }))}
      />

      <div className="mx-auto max-w-5xl">
        {/* Label */}
        <p className="mb-3 text-center text-sm font-semibold tracking-widest text-[#14B8A6] uppercase">
          Simple Setup
        </p>

        {/* H2 */}
        <h2 className="mb-14 text-center text-[1.75rem] font-extrabold text-white md:text-[2.5rem]">
          Up and Running in 15 Minutes
        </h2>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="absolute top-6 left-[calc(100%_-_1rem)] hidden h-px w-8 border-t-2 border-dashed border-white/10 md:block" />
              )}

              <div className="rounded-2xl border border-white/8 bg-white/5 p-6">
                {/* Step number */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-sm font-extrabold text-orange">
                    {step.num}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <step.icon size={20} className="text-white/70" />
                  </div>
                </div>

                <h3 className="mb-2 text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#pricing"
            className="inline-flex cursor-pointer items-center gap-2 text-base font-semibold text-orange transition-colors hover:text-orange-hover"
          >
            See It in Action — Free Demo
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
