"use client";

import { AlertTriangle, HelpCircle, EyeOff, UserX } from "lucide-react";

const painCards = [
  {
    Icon: AlertTriangle,
    title: "RA Bill calculation errors",
    body: "Client disputes every month. Delayed payments hit your cash flow hard.",
    bg: "bg-[#FF6B4A]",
    text: "text-white",
    iconBg: "bg-white/20",
  },
  {
    Icon: HelpCircle,
    title: "No idea what's pending from client",
    body: "Retention, advance recovery, TDS — you're guessing, not tracking.",
    bg: "bg-[#F59E0B]",
    text: "text-[#1A1000]",
    iconBg: "bg-black/10",
  },
  {
    Icon: EyeOff,
    title: "Material theft and wastage invisible",
    body: "Losing ₹30,000/month without knowing. No reconciliation system.",
    bg: "bg-teal",
    text: "text-white",
    iconBg: "bg-white/20",
  },
  {
    Icon: UserX,
    title: "Billing engineer left",
    body: "All project data gone with them. Starting from zero on a running project.",
    bg: "bg-[#7C3AED]",
    text: "text-white",
    iconBg: "bg-white/20",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-[#1E293B] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Label */}
        <p className="mb-3 text-sm font-semibold tracking-widest text-white/40 uppercase">
          Sound familiar?
        </p>

        {/* H2 */}
        <h2 className="mb-10 text-[1.75rem] leading-tight font-extrabold text-white md:text-[2.75rem]">
          Still Managing ₹50 Lakh Projects
          <br className="hidden md:block" /> on Paper and WhatsApp?
        </h2>

        {/* Pain cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {painCards.map(({ Icon, title, body, bg, text, iconBg }) => (
            <div
              key={title}
              className={`rounded-2xl ${bg} ${text} p-5 md:p-6`}
            >
              <div
                className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}
              >
                <Icon size={20} />
              </div>
              <h3 className="mb-1.5 text-base font-bold md:text-lg">{title}</h3>
              <p className="text-sm leading-relaxed opacity-85">{body}</p>
            </div>
          ))}
        </div>

        {/* Transition line */}
        <p className="mt-10 text-center text-lg font-semibold text-white/70 md:text-xl">
          ShopDesk fixes all of this.{" "}
          <span className="text-[#14B8A6]">Automatically.</span>
        </p>
      </div>
    </section>
  );
}
