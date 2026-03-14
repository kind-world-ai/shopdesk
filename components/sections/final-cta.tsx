"use client";

import { useState } from "react";
import { ArrowRight, Scissors, HardHat, CheckCircle2 } from "lucide-react";

export function FinalCTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Connect to Resend/Mailchimp API
    setSubmitted(true);
  };

  return (
    <section className="bg-navy px-4 py-16 md:px-8 md:py-24">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 h-48 w-[500px] rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-[#14B8A6] uppercase">
          Get Started Today
        </p>
        <h2 className="mb-3 text-[1.75rem] font-extrabold text-white md:text-[2.5rem]">
          Ready to Run Your Business Like a Pro?
        </h2>
        <p className="mb-8 text-base text-white/50">
          Join 500+ businesses across India. Download and start today.
        </p>

        {/* Email capture */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-full border border-white/10 bg-white/8 px-5 py-3.5 text-base text-white placeholder:text-white/30 focus:border-teal/50 focus:bg-white/12 focus:outline-none focus:ring-2 focus:ring-teal/30"
                autoComplete="email"
                inputMode="email"
              />
              <button
                type="submit"
                className="btn-glow cursor-pointer rounded-full bg-orange px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-hover"
              >
                Send Free Demo
              </button>
            </div>
            <p className="mt-3 text-xs text-white/30">
              Free Lite version delivered in 2 minutes. No spam ever.
            </p>
          </form>
        ) : (
          <div className="rounded-2xl border border-teal/20 bg-teal/10 p-6">
            <div className="mb-2 flex justify-center">
              <CheckCircle2 size={28} className="text-[#14B8A6]" />
            </div>
            <p className="text-lg font-bold text-white">Check your email!</p>
            <p className="text-sm text-white/50">
              The free demo is on its way. Check your inbox (and spam folder).
            </p>
          </div>
        )}

        {/* Dual CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/8"
          >
            <Scissors size={15} />
            Salon CRM — ₹999
          </a>
          <a
            href="#pricing"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/8"
          >
            <HardHat size={15} />
            Construction CRM — ₹999
          </a>
        </div>
      </div>
    </section>
  );
}
