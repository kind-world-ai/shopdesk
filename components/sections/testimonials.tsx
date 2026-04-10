"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    stars: 5,
    text: "Pehle RA Bill banane mein 3 ghante lagte the. Ab 20 minute mein ho jata hai. GST, TDS, retention — sab automatic. Best ₹999 I ever spent.",
    name: "Harpreet Singh",
    role: "Contractor, Mohali",
    detail: "G+12 residential, ₹1.8 Cr contract",
    initial: "H",
  },
  {
    stars: 5,
    text: "Staff commissions calculate karna ek nightmare tha. AgenticVani ne sab automate kar diya. My accountant loves it too.",
    name: "Priya Sharma",
    role: "Owner — Glamour Studio, Sector 22, Chandigarh",
    detail: "",
    initial: "P",
  },
  {
    stars: 5,
    text: "I've used SAP, Tally, and basic Excel. AgenticVani is better than all for RA Bill tracking. The EVM dashboard is at PMC level.",
    name: "Amit Kumar",
    role: "Billing Engineer, Ludhiana",
    detail: "",
    initial: "A",
  },
  {
    stars: 5,
    text: "Salon ki daily booking, monthly revenue, staff commission — sab ek jagah. Pehle 3 registers maintain karte the.",
    name: "Rajesh Malhotra",
    role: "Owner — Style Studio, Panchkula",
    detail: "",
    initial: "R",
  },
];

const locations = [
  "Chandigarh",
  "Mohali",
  "Delhi NCR",
  "Ludhiana",
  "Jaipur",
  "Amritsar",
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
    <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-sm font-semibold tracking-widest text-teal uppercase">
          Reviews
        </p>
        <h2 className="mb-10 text-center text-[1.75rem] font-extrabold text-navy md:text-[2.5rem]">
          What Indian Contractors & Salon Owners Say
        </h2>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 -left-4 z-10 hidden h-10 w-10 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} className="text-navy" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 -right-4 z-10 hidden h-10 w-10 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} className="text-navy" />
          </button>

          <div
            ref={scrollRef}
            className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-hover w-[85vw] min-w-[85vw] snap-start rounded-2xl border border-gray-200 bg-white p-5 md:w-[360px] md:min-w-[360px] md:p-6"
              >
                {/* Quote icon */}
                <Quote size={20} className="mb-3 text-orange/30" />

                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={13} className="fill-gold text-gold" />
                  ))}
                </div>

                <p className="mb-5 text-sm leading-relaxed text-navy/80 md:text-base">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">{t.name}</p>
                    <p className="text-xs text-mid-grey">{t.role}</p>
                    {t.detail && (
                      <p className="mt-0.5 text-xs font-medium text-teal">
                        {t.detail}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location bar */}
        <div className="mt-10 text-center">
          <p className="mb-3 text-xs font-medium tracking-widest text-navy/30 uppercase">
            Used by businesses in
          </p>
          <div className="hide-scrollbar flex justify-center gap-3 overflow-x-auto">
            {locations.map((loc) => (
              <span
                key={loc}
                className="whitespace-nowrap rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-mid-grey"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
