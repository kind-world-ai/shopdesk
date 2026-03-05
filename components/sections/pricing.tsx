"use client";

import Link from "next/link";
import { Check, Crown, Zap, HeadphonesIcon } from "lucide-react";

const plans = [
  {
    name: "ShopDesk Lite",
    slug: "construction-crm",
    price: "₹0",
    original: null,
    desc: "Free starter kit",
    icon: Zap,
    features: [
      "3 sheets: BOQ + RA Bill + Dashboard",
      "Basic formulas",
      "Community support",
    ],
    cta: "Download Free →",
    ctaHref: "/shop/construction-crm",
    ctaStyle:
      "border border-navy/20 text-navy hover:bg-navy/5",
    popular: false,
  },
  {
    name: "ShopDesk CRM",
    slug: "salon-crm",
    price: "₹999",
    original: "₹2,499",
    desc: "Most popular — everything you need",
    icon: Crown,
    features: [
      "All 11 sheets",
      "373 validated formulas",
      "Salon CRM + Construction CRM",
      "EVM Dashboard",
      "Email support",
    ],
    cta: "Buy Now — ₹999 →",
    ctaHref: "/checkout/salon-crm",
    ctaStyle: "bg-orange text-white hover:bg-orange-hover",
    popular: true,
  },
  {
    name: "ShopDesk Pro",
    slug: "shopdesk-pro",
    price: "₹2,999",
    original: null,
    desc: "For power users",
    icon: Zap,
    features: [
      "All Standard features",
      "PDF automation",
      "WhatsApp alerts",
      "Priority support",
    ],
    cta: "Upgrade to Pro →",
    ctaHref: "/checkout/shopdesk-pro",
    ctaStyle:
      "border border-navy/20 text-navy hover:bg-navy/5",
    popular: false,
  },
  {
    name: "Custom Setup",
    slug: "custom-setup",
    price: "₹9,999",
    original: null,
    desc: "We do it for you",
    icon: HeadphonesIcon,
    features: [
      "All Pro features",
      "Custom configuration",
      "30-min onboarding call",
      "Your exact project setup",
    ],
    cta: "Book a Call →",
    ctaHref: "/checkout/custom-setup",
    ctaStyle:
      "border border-navy/20 text-navy hover:bg-navy/5",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-navy px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center font-[var(--font-heading)] text-[1.75rem] font-extrabold text-cream md:text-[2.5rem]">
          Simple Pricing. No Surprises.
        </h2>
        <p className="mb-10 text-center text-base text-cream/60">
          One-time purchase. No subscription. No hidden fees. Yours forever.
        </p>

        {/* Pricing cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-5 md:p-6 ${
                plan.popular
                  ? "border-2 border-orange bg-white shadow-lg shadow-orange/10"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-3 py-0.5 text-xs font-bold text-white">
                  Most Popular
                </div>
              )}

              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
                  plan.popular ? "bg-orange/10" : "bg-white/10"
                }`}
              >
                <plan.icon
                  size={20}
                  className={plan.popular ? "text-orange" : "text-cream/70"}
                />
              </div>

              <h3
                className={`mb-1 text-lg font-bold ${
                  plan.popular ? "text-navy" : "text-cream"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mb-1 flex items-baseline gap-2">
                <span
                  className={`text-3xl font-extrabold ${
                    plan.popular ? "text-navy" : "text-cream"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.original && (
                  <span className="text-sm text-mid-grey line-through">
                    {plan.original}
                  </span>
                )}
              </div>
              <p
                className={`mb-4 text-xs ${
                  plan.popular ? "text-mid-grey" : "text-cream/50"
                }`}
              >
                {plan.desc}
              </p>

              <ul className="mb-5 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      size={14}
                      className={`mt-0.5 shrink-0 ${
                        plan.popular ? "text-teal" : "text-teal/70"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-navy/80" : "text-cream/70"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-bold transition-colors min-h-[48px] ${plan.ctaStyle}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-cream/50">
          <span>🔒 Secure checkout via Razorpay</span>
          <span>📧 Delivered in 2 minutes</span>
          <span>🔄 Lifetime access</span>
          <span>💬 WhatsApp support</span>
        </div>
      </div>
    </section>
  );
}
