"use client";

import { Star, ArrowRight, Shield, Zap, Clock } from "lucide-react";

const trustPills = [
  { icon: Star, label: "4.8/5 rating" },
  { icon: Zap, label: "500+ users" },
  { icon: Clock, label: "15-min setup" },
  { icon: Shield, label: "No monthly fees" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy hero-grid px-4 pt-24 pb-16 md:px-8 md:pt-32 md:pb-24">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl md:flex md:items-center md:gap-16">
        {/* Text content */}
        <div className="md:w-[55%]">
          {/* Trust pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold text-[#14B8A6]">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            Trusted by 500+ Businesses Across India
          </div>

          {/* H1 */}
          <h1 className="mb-5 text-[2.25rem] leading-[1.1] font-extrabold tracking-tight text-white md:text-[3.75rem] md:leading-[1.07]">
            Manage Your Business
            <br />
            Like a Pro.{" "}
            <span className="text-orange">Just ₹999.</span>
          </h1>

          {/* Subtext */}
          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Professional Excel tools for salons and contractors — ready in 15
            minutes. No subscription. No IT setup. Works on your phone.
          </p>

          {/* CTAs */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="btn-glow inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white transition-all duration-200 hover:bg-orange-hover"
            >
              Download Salon CRM — ₹999
              <ArrowRight size={16} />
            </a>
            <a
              href="/construction"
              className="cursor-pointer text-center text-sm font-medium text-white/50 underline underline-offset-4 transition-colors hover:text-white/80"
            >
              Also available: Construction CRM
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {trustPills.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-sm text-white/40"
              >
                <Icon size={13} className="text-[#14B8A6]" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-12 md:mt-0 md:w-[45%]">
          <div className="relative mx-auto max-w-[400px]">
            {/* Glow behind card */}
            <div className="absolute inset-0 rounded-3xl bg-orange/10 blur-2xl scale-95" />

            {/* Card */}
            <div className="relative rounded-3xl border border-white/10 bg-navy-light/80 p-5 shadow-2xl backdrop-blur-sm">
              {/* Header bar */}
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                    ShopDesk Dashboard
                  </p>
                  <p className="text-lg font-bold text-white">
                    This Month
                  </p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange/20">
                  <Zap size={16} className="text-orange" />
                </div>
              </div>

              {/* Revenue metric */}
              <div className="mb-4 rounded-2xl bg-white/5 p-4">
                <p className="mb-1 text-xs text-white/40">Total Revenue</p>
                <p className="text-3xl font-extrabold text-white">₹2,47,800</p>
                <p className="mt-1 text-xs font-medium text-[#14B8A6]">
                  ↑ 18% vs last month
                </p>
              </div>

              {/* Mini stats row */}
              <div className="mb-4 grid grid-cols-3 gap-2">
                {[
                  { label: "Bookings", value: "314", color: "text-orange" },
                  { label: "Pending", value: "₹18k", color: "text-gold" },
                  { label: "Staff", value: "7", color: "text-[#14B8A6]" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-white/5 p-2.5 text-center"
                  >
                    <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
                    <p className="text-[10px] text-white/40">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="mb-3 text-xs text-white/40">Weekly Revenue</p>
                <div className="flex items-end justify-between gap-1.5 h-14">
                  {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 5
                            ? "rgb(234 108 26)"
                            : "rgba(255,255,255,0.12)",
                      }}
                    />
                  ))}
                </div>
                <div className="mt-1.5 flex justify-between text-[9px] text-white/25">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <span key={i} className="flex-1 text-center">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
