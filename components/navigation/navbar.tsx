"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Products",
    children: [
      { name: "Salon CRM", href: "/salon" },
      { name: "Construction CRM", href: "/construction" },
      { name: "All Products", href: "/shop" },
    ],
  },
  {
    label: "Compare",
    children: [
      { name: "ShopDesk vs Excel", href: "/vs/basic-excel" },
      { name: "ShopDesk vs Tally", href: "/vs/tally" },
    ],
  },
  {
    label: "Resources",
    children: [
      { name: "Blog", href: "/blog" },
      { name: "Salon Management Guide", href: "/blog/salon-management-guide" },
      { name: "RA Bill Guide", href: "/blog/ra-bill-complete-guide" },
      { name: "Salon Case Study", href: "/case-studies/salon-chandigarh" },
      { name: "Contractor Case Study", href: "/case-studies/contractor-mohali" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Cities",
    children: [
      { name: "Chandigarh", href: "/cities/chandigarh" },
      { name: "Mohali", href: "/cities/mohali" },
      { name: "Panchkula", href: "/cities/panchkula" },
      { name: "Ludhiana", href: "/cities/ludhiana" },
      { name: "Amritsar", href: "/cities/amritsar" },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "h-12 bg-white/85 backdrop-blur-md shadow-sm md:h-14"
          : "h-14 bg-transparent md:h-16"
      }`}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-[var(--font-heading)] text-xl font-extrabold tracking-tight text-navy"
        >
          ShopDesk
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(group.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-navy/80 transition-colors hover:text-navy py-2">
                {group.label}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {openDropdown === group.label && (
                <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {group.children.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-navy/70 hover:text-navy hover:bg-cream/50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/shop"
            className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
          >
            Shop
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/shop/construction-crm"
            className="rounded-full border border-navy/20 px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
          >
            Try Free
          </Link>
          <Link
            href="/checkout/salon-crm"
            className="rounded-full bg-orange px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-hover"
          >
            Buy ₹999
          </Link>
        </div>

        {/* Mobile CTA + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/checkout/salon-crm"
            className="rounded-full bg-orange px-4 py-2 text-xs font-bold text-white"
          >
            Download ₹999
          </Link>
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setMobileExpanded(null);
            }}
            className="flex h-10 w-10 items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-navy/10 bg-white px-4 py-4 shadow-lg lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map((group) => (
              <div key={group.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === group.label ? null : group.label
                    )
                  }
                  className="flex w-full items-center justify-between py-3 text-base font-medium text-navy"
                >
                  {group.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === group.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === group.label && (
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    {group.children.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="py-2.5 text-sm text-navy/70 hover:text-navy min-h-[44px] flex items-center"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/shop"
              className="py-3 text-base font-medium text-navy"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="py-3 text-base font-medium text-navy"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
