"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function BottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const pricingSection = document.getElementById("pricing");
      const pricingVisible = pricingSection
        ? pricingSection.getBoundingClientRect().top < window.innerHeight &&
          pricingSection.getBoundingClientRect().bottom > 0
        : false;

      setVisible(scrollPercent > 0.2 && !pricingVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="animate-slide-up fixed bottom-4 left-4 right-4 z-50 rounded-2xl border border-gray-200 bg-white/95 px-4 py-3 shadow-xl shadow-navy/10 backdrop-blur-md md:hidden">
      <Link
        href="/shop"
        className="btn-glow flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-orange py-3.5 text-sm font-bold text-white min-h-[48px] transition-all hover:bg-orange-hover"
      >
        ShopDesk — Browse Products
      </Link>
    </div>
  );
}
