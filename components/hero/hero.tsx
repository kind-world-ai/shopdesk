"use client";

import { Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream px-4 pt-20 pb-12 md:px-8 md:pt-28 md:pb-20">
      <div className="mx-auto max-w-7xl md:flex md:items-center md:gap-12">
        {/* Text content */}
        <div className="md:w-[55%]">
          {/* Trust pill */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal md:text-sm">
            Trusted by 500+ Businesses Across India
          </div>

          {/* H1 */}
          <h1 className="mb-4 font-[var(--font-heading)] text-[2rem] leading-[1.15] font-extrabold tracking-tight text-navy md:text-[3.5rem] md:leading-[1.1]">
            Manage Your Business
            <br />
            Like a Pro.{" "}
            <span className="text-orange">Just ₹999.</span>
          </h1>

          {/* Subtext */}
          <p className="mb-6 max-w-xl text-base leading-relaxed text-mid-grey md:text-lg">
            Professional Excel tools for salons and contractors — ready in 15
            minutes. No subscription. No IT setup. Works on your phone.
          </p>

          {/* CTAs */}
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-orange-hover md:px-8"
            >
              Download Salon CRM — ₹999 →
            </a>
            <a
              href="/construction"
              className="text-center text-sm font-medium text-navy/70 underline underline-offset-4 transition-colors hover:text-navy"
            >
              Also available: Construction CRM →
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-mid-grey">
            <span className="flex items-center gap-1">
              <Star size={14} className="fill-gold text-gold" />
              4.8/5 rating
            </span>
            <span className="text-navy/20">•</span>
            <span>500+ users</span>
            <span className="text-navy/20">•</span>
            <span>No monthly fees</span>
            <span className="hidden text-navy/20 sm:inline">•</span>
            <span className="hidden sm:inline">Works on mobile</span>
          </div>
        </div>

        {/* Hero image placeholder */}
        <div className="mt-10 md:mt-0 md:w-[45%]">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[280px] md:max-w-[320px]">
            {/* Phone frame mockup */}
            <div className="absolute inset-0 rounded-[2.5rem] border-4 border-navy/10 bg-white shadow-2xl">
              <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange/10">
                  <span className="text-3xl">📊</span>
                </div>
                <p className="mb-2 text-lg font-bold text-navy">
                  ShopDesk Dashboard
                </p>
                <p className="text-xs text-mid-grey">
                  Revenue, billing, inventory — all in one view
                </p>
                <div className="mt-6 w-full space-y-2">
                  <div className="h-3 w-full rounded bg-navy/5" />
                  <div className="h-3 w-4/5 rounded bg-navy/5" />
                  <div className="h-3 w-3/5 rounded bg-teal/20" />
                  <div className="mt-4 h-8 w-full rounded-lg bg-orange/10" />
                  <div className="h-8 w-full rounded-lg bg-teal/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
