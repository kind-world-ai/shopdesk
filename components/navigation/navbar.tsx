"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  // Only use transparent dark-mode navbar on homepage
  const isHome = pathname === "/";
  const isDark = isHome && !scrolled;

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
        isDark ? "pt-3" : "pt-2"
      }`}
    >
      <nav
        className={`mx-auto flex h-14 max-w-7xl items-center justify-between px-4 transition-all duration-300 md:px-6 ${
          !isDark
            ? "rounded-2xl border border-white/10 bg-white/90 shadow-lg shadow-navy/8 backdrop-blur-md mx-3 md:mx-6"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-extrabold tracking-tight transition-colors ${isDark ? "text-white" : "text-navy"}`}
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
              <button className={`flex cursor-pointer items-center gap-1 py-2 text-sm font-medium transition-colors ${isDark ? "text-white/70 hover:text-white" : "text-navy/70 hover:text-navy"}`}>
                {group.label}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {openDropdown === group.label && (
                <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {group.children.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-navy/70 hover:text-navy hover:bg-gray-50 transition-colors"
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
            className={`text-sm font-medium transition-colors ${isDark ? "text-white/70 hover:text-white" : "text-navy/70 hover:text-navy"}`}
          >
            Shop
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/shop/construction-crm"
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${isDark ? "border-white/20 text-white/80 hover:bg-white/10" : "border-navy/20 text-navy hover:bg-navy/5"}`}
          >
            Try Free
          </Link>
          <Link
            href="/checkout/salon-crm"
            className="btn-glow rounded-full bg-orange px-5 py-2 text-sm font-bold text-white transition-all hover:bg-orange-hover"
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
            className={`flex h-10 w-10 cursor-pointer items-center justify-center ${isDark ? "text-white" : "text-navy"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`bg-white shadow-lg lg:hidden max-h-[80vh] overflow-y-auto ${!isDark ? "mx-3 mt-1 rounded-2xl border border-gray-200" : "border-t border-navy/10"}`}>
          <div className="px-4 py-4 flex flex-col gap-1">
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
