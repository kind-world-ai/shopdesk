"use client";

import Link from "next/link";
import {
  Check,
  Crown,
  Zap,
  Headphones,
  Lock,
  Mail,
  Infinity,
  MessageCircle,
} from "lucide-react";

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
    cta: "Download Free",
    ctaHref: "/shop/construction-crm",
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
    cta: "Buy Now — ₹999",
    ctaHref: "/checkout/salon-crm",
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
    cta: "Upgrade to Pro",
    ctaHref: "/checkout/shopdesk-pro",
    popular: false,
  },
  {
    name: "Custom Setup",
    slug: "custom-setup",
    price: "₹9,999",
    original: null,
    desc: "We do it for you",
    icon: Headphones,
    features: [
      "All Pro features",
      "Custom configuration",
      "30-min onboarding call",
      "Your exact project setup",
    ],
    cta: "Book a Call",
    ctaHref: "/checkout/custom-setup",
    popular: false,
  },
];

const trustBadges = [
  { icon: Lock, label: "Secure checkout via Razorpay" },
  { icon: Mail, label: "Delivered in 2 minutes" },
  { icon: Infinity, label: "Lifetime access" },
  { icon: MessageCircle, label: "WhatsApp support" },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-cream px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-sm font-semibold tracking-widest text-teal uppercase">
          Pricing
        </p>
        <h2 className="mb-2 text-center text-[1.75rem] font-extrabold text-navy md:text-[2.5rem]">
          Simple Pricing. No Surprises.
        </h2>
        <p className="mb-10 text-center text-base text-mid-grey">
          One-time purchase. No subscription. No hidden fees. Yours forever.
        </p>

        {/* Pricing cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-5 md:p-6 transition-all ${
                plan.popular
                  ? "border-2 border-orange bg-white shadow-xl shadow-orange/10 scale-[1.01]"
                  : "border border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </div>
              )}

              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${
                  plan.popular ? "bg-orange/10" : "bg-gray-100"
                }`}
              >
                <plan.icon
                  size={18}
                  className={plan.popular ? "text-orange" : "text-mid-grey"}
                />
              </div>

              <h3 className="mb-1 text-base font-bold text-navy">{plan.name}</h3>

              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-navy">
                  {plan.price}
                </span>
                {plan.original && (
                  <span className="text-sm text-mid-grey line-through">
                    {plan.original}
                  </span>
                )}
              </div>
              <p className="mb-4 text-xs text-mid-grey">{plan.desc}</p>

              <ul className="mb-6 flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-teal"
                    />
                    <span className="text-sm text-navy/70">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`flex w-full cursor-pointer items-center justify-center rounded-full px-4 py-3 text-sm font-bold transition-all min-h-[48px] ${
                  plan.popular
                    ? "btn-glow bg-orange text-white hover:bg-orange-hover"
                    : "border border-navy/15 text-navy hover:bg-navy/5"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
          {trustBadges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-xs text-mid-grey"
            >
              <Icon size={13} className="text-teal" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
