import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const products = [
  { name: "Salon CRM (₹999)", href: "/shop/salon-crm" },
  { name: "Construction CRM (Free)", href: "/shop/construction-crm" },
  { name: "ShopDesk Pro (₹2,999)", href: "/shop/shopdesk-pro" },
  { name: "Done-For-You (₹9,999)", href: "/shop/custom-setup" },
  { name: "All Products →", href: "/shop" },
];

const resources = [
  { name: "Blog", href: "/blog" },
  { name: "Salon Management Guide", href: "/blog/salon-management-guide" },
  { name: "Salon Staff Commission", href: "/blog/salon-staff-commission" },
  { name: "RA Bill Complete Guide", href: "/blog/ra-bill-complete-guide" },
  { name: "RA Bill Format India", href: "/blog/ra-bill-format-india" },
  { name: "ShopDesk vs Excel", href: "/vs/basic-excel" },
  { name: "ShopDesk vs Tally", href: "/vs/tally" },
];

const cities = [
  { name: "Chandigarh", href: "/cities/chandigarh" },
  { name: "Mohali", href: "/cities/mohali" },
  { name: "Panchkula", href: "/cities/panchkula" },
  { name: "Ludhiana", href: "/cities/ludhiana" },
  { name: "Amritsar", href: "/cities/amritsar" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy px-4 pt-12 pb-6 md:px-8 md:pt-16">
      {/* Watermark */}
      <div className="pointer-events-none absolute bottom-0 left-0 font-[var(--font-heading)] text-[12vw] font-extrabold leading-none text-white/[0.03]">
        SHOPDESK
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          {/* Col 1: Brand */}
          <div>
            <Link
              href="/"
              className="mb-3 inline-block text-xl font-extrabold text-cream"
            >
              ShopDesk
            </Link>
            <p className="mb-4 text-sm text-cream/50">
              Professional Tools. Simple Price.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/shopdeskin"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-cream/50 transition-colors hover:bg-white/10 hover:text-cream"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com/company/shopdesk"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-cream/50 transition-colors hover:bg-white/10 hover:text-cream"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-cream/50 transition-colors hover:bg-white/10 hover:text-cream"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="mb-3 text-xs font-bold tracking-wider text-cream/40 uppercase">
              Products
            </h4>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p.name}>
                  <Link
                    href={p.href}
                    className="text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="mb-3 text-xs font-bold tracking-wider text-cream/40 uppercase">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((r) => (
                <li key={r.name}>
                  <Link
                    href={r.href}
                    className="text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Cities */}
          <div>
            <h4 className="mb-3 text-xs font-bold tracking-wider text-cream/40 uppercase">
              Cities
            </h4>
            <ul className="space-y-2">
              {cities.map((c) => (
                <li key={c.name}>
                  <Link
                    href={c.href}
                    className="text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="mb-3 text-xs font-bold tracking-wider text-cream/40 uppercase">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>hello@shopdesk.in</li>
              <li>WhatsApp Support</li>
              <li>+91-98XXX-XXXXX</li>
              <li>Mohali, Punjab 140306</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/30 md:flex-row">
          <span>&copy; 2025 ShopDesk. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cream/50">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream/50">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cream/50">
              Refund Policy
            </a>
          </div>
        </div>

        {/* Local SEO text */}
        <p className="mt-6 text-center text-[11px] leading-relaxed text-cream/20">
          ShopDesk is used by small businesses, salons, construction
          contractors, and real estate developers across Chandigarh, Mohali,
          Panchkula, Zirakpur, Ludhiana, Amritsar, Delhi NCR, Jaipur, and
          cities across Punjab, Haryana, Rajasthan, and UP.
        </p>
      </div>
    </footer>
  );
}
