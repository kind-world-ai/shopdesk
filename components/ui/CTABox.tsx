import Link from "next/link";

const productData = {
  salon: {
    name: "ShopDesk Salon CRM",
    benefit: "Manage appointments, billing & staff commissions in one Google Sheet.",
    href: "/checkout/salon-crm",
  },
  construction: {
    name: "ShopDesk Construction CRM",
    benefit: "RA Bills, BOQ, material tracking & EVM dashboard — 373 formulas.",
    href: "/checkout/salon-crm",
  },
  both: {
    name: "ShopDesk CRM",
    benefit: "Salon CRM + Construction CRM — all 11 sheets, 373 validated formulas.",
    href: "/checkout/salon-crm",
  },
};

interface CTABoxProps {
  product: "salon" | "construction" | "both";
  variant?: "inline" | "full-width";
}

export function CTABox({ product, variant = "inline" }: CTABoxProps) {
  const data = productData[product];

  return (
    <div
      className={`rounded-2xl bg-navy p-6 md:p-8 ${
        variant === "full-width" ? "w-full" : "mx-auto max-w-2xl"
      }`}
    >
      <h3 className="mb-1 font-[var(--font-heading)] text-lg font-bold text-cream md:text-xl">
        {data.name} — <span className="text-orange">₹999</span>
      </h3>
      <p className="mb-4 text-sm text-cream/60">{data.benefit}</p>
      <Link
        href={data.href}
        className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-hover min-h-[48px]"
      >
        Download Now →
      </Link>
      <p className="mt-3 text-xs text-cream/40">
        One-time purchase. No subscription. Instant delivery.
      </p>
    </div>
  );
}
