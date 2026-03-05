"use client";

const painCards = [
  {
    emoji: "😫",
    title: "RA Bill calculation errors",
    body: "Client disputes you every month. Delayed money hits your cash flow hard.",
    bg: "bg-[#FF6B4A]",
    text: "text-white",
  },
  {
    emoji: "😤",
    title: "No idea what's pending from client",
    body: "Retention, advance recovery, TDS — you're guessing, not tracking.",
    bg: "bg-[#FFB627]",
    text: "text-navy",
  },
  {
    emoji: "😰",
    title: "Material theft and wastage invisible",
    body: "Losing ₹30,000/month without knowing. No reconciliation system.",
    bg: "bg-teal",
    text: "text-white",
  },
  {
    emoji: "😱",
    title: "Billing engineer left",
    body: "All project data gone with them. Starting from zero on a running project.",
    bg: "bg-[#7C3AED]",
    text: "text-white",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-navy px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Label */}
        <p className="mb-3 text-sm font-semibold tracking-wider text-cream/60 uppercase">
          Sound familiar?
        </p>

        {/* H2 */}
        <h2 className="mb-10 font-[var(--font-heading)] text-[1.75rem] leading-tight font-extrabold text-cream md:text-[2.75rem]">
          Still Managing ₹50 Lakh Projects
          <br className="hidden md:block" /> on Paper and WhatsApp?
        </h2>

        {/* Pain cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {painCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl ${card.bg} ${card.text} p-5 md:p-6`}
            >
              <span className="mb-2 block text-2xl">{card.emoji}</span>
              <h3 className="mb-1 text-base font-bold md:text-lg">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-90">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Transition line */}
        <p className="mt-10 text-center text-lg font-semibold text-cream/80 md:text-xl">
          ShopDesk fixes all of this.{" "}
          <span className="text-teal">Automatically.</span>
        </p>
      </div>
    </section>
  );
}
