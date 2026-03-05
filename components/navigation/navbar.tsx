"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/salon"
            className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
          >
            Salon
          </Link>
          <Link
            href="/construction"
            className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
          >
            Construction
          </Link>
          <Link
            href="/shop"
            className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
          >
            Shop
          </Link>
          <a
            href="#pricing"
            className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
          >
            FAQ
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
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
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/checkout/salon-crm"
            className="rounded-full bg-orange px-4 py-2 text-xs font-bold text-white"
          >
            Download ₹999
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-navy/10 bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/salon"
              className="text-base font-medium text-navy"
              onClick={() => setMobileOpen(false)}
            >
              Salon CRM
            </Link>
            <Link
              href="/construction"
              className="text-base font-medium text-navy"
              onClick={() => setMobileOpen(false)}
            >
              Construction CRM
            </Link>
            <Link
              href="/shop"
              className="text-base font-medium text-navy"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <a
              href="#pricing"
              className="text-base font-medium text-navy"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-base font-medium text-navy"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
