"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    stars: 5,
    text: "Pehle RA Bill banane mein 3 ghante lagte the. Ab 20 minute mein ho jata hai. GST, TDS, retention — sab automatic. Best ₹999 I ever spent.",
    name: "Harpreet Singh",
    role: "Contractor, Mohali",
    detail: "G+12 residential, ₹1.8 Cr contract",
  },
  {
    stars: 5,
    text: "Staff commissions calculate karna ek nightmare tha. ShopDesk ne sab automate kar diya. My accountant loves it too.",
    name: "Priya Sharma",
    role: "Owner — Glamour Studio, Sector 22, Chandigarh",
    detail: "",
  },
  {
    stars: 5,
    text: "I've used SAP, Tally, and basic Excel. ShopDesk is better than all for RA Bill tracking. The EVM dashboard is at PMC level.",
    name: "Amit Kumar",
    role: "Billing Engineer, Ludhiana",
    detail: "",
  },
  {
    stars: 5,
    text: "Salon ki daily booking, monthly revenue, staff commission — sab ek jagah. Pehle 3 registers maintain karte the.",
    name: "Rajesh Malhotra",
    role: "Owner — Style Studio, Panchkula",
    detail: "",
  },
];

const locations = [
  "Chandigarh 🏙️",
  "Mohali 🏗️",
  "Delhi NCR 🌆",
  "Ludhiana 🏭",
  "Jaipur 🕌",
  "Amritsar 🏰",
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.85;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-navy px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center font-[var(--font-heading)] text-[1.75rem] font-extrabold text-cream md:text-[2.5rem]">
          What Indian Contractors & Salon Owners Say
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons (desktop) */}
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 -left-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 -right-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="w-[85vw] min-w-[85vw] snap-start rounded-2xl border border-white/10 bg-white/5 p-5 md:w-[380px] md:min-w-[380px] md:p-6"
              >
                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                <p className="mb-4 text-sm leading-relaxed text-cream/90 md:text-base">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div>
                  <p className="text-sm font-bold text-cream">{t.name}</p>
                  <p className="text-xs text-cream/60">{t.role}</p>
                  {t.detail && (
                    <p className="mt-1 text-xs text-teal">{t.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location bar */}
        <div className="mt-10 text-center">
          <p className="mb-3 text-xs font-medium tracking-wider text-cream/40 uppercase">
            Used by businesses in
          </p>
          <div className="hide-scrollbar flex justify-center gap-4 overflow-x-auto text-sm text-cream/70">
            {locations.map((loc) => (
              <span key={loc} className="whitespace-nowrap">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
