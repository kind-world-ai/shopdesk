"use client";

import { useState } from "react";

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
    <section className="bg-gradient-to-br from-navy to-teal px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-3 font-[var(--font-heading)] text-[1.75rem] font-extrabold text-cream md:text-[2.5rem]">
          Ready to Run Your Business Like a Pro?
        </h2>
        <p className="mb-8 text-base text-cream/70">
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
                className="flex-1 rounded-full bg-white/10 px-5 py-3.5 text-base text-cream placeholder:text-cream/40 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-orange"
                autoComplete="email"
                inputMode="email"
              />
              <button
                type="submit"
                className="rounded-full bg-orange px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange-hover"
              >
                Send Me the Free Demo →
              </button>
            </div>
            <p className="mt-3 text-xs text-cream/40">
              Free Lite version delivered in 2 minutes. No spam ever.
            </p>
          </form>
        ) : (
          <div className="rounded-xl bg-white/10 p-6">
            <p className="text-lg font-bold text-cream">
              ✅ Check your email!
            </p>
            <p className="text-sm text-cream/70">
              The free demo is on its way. Check your inbox (and spam folder).
            </p>
          </div>
        )}

        {/* Dual CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="rounded-full border border-cream/20 px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-cream/10"
          >
            💇 Salon CRM — ₹999
          </a>
          <a
            href="#pricing"
            className="rounded-full border border-cream/20 px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-cream/10"
          >
            🏗️ Construction CRM — ₹999
          </a>
        </div>
      </div>
    </section>
  );
}
