"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQSchema } from "@/components/seo/schemas";

const faqs = [
  {
    question: "What exactly is ShopDesk? Is it software I need to install?",
    answer:
      "ShopDesk is a professional business management system built inside Google Sheets — the free spreadsheet app by Google. You don't install anything. You download the file, upload it to Google Drive (free), and open it on any device. Android, iPhone, computer — all work.",
  },
  {
    question: "I'm not good at Excel. Will I be able to use ShopDesk?",
    answer:
      "Yes. Every formula is pre-built. You only fill in the blue-colored input cells — quantities, rates, dates, names. All calculations happen automatically. If you can use WhatsApp, you can use ShopDesk.",
  },
  {
    question:
      "What is a Running Account (RA) Bill and how does ShopDesk help?",
    answer:
      "A Running Account Bill (RA Bill) is a progressive payment invoice that contractors raise to their clients based on work completed to date. ShopDesk's RA Bill sheet automatically calculates the complete payment waterfall: Gross Amount → +GST 12% → −Advance Recovery 20% → −Retention 10% → −TDS 2% → Net Payable. No manual calculation needed.",
  },
  {
    question: "Can I use ShopDesk for multiple projects or salons?",
    answer:
      "Yes. Each Google Sheet file is one project or one salon. You can make unlimited copies — one per project, one per branch. At ₹999 one-time, it's cost-effective even at 10 copies.",
  },
  {
    question: "What happens if formulas break?",
    answer:
      "Every formula in ShopDesk has IFERROR protection — they cannot produce error values like #DIV/0! or #REF!. In the unlikely event of an issue, email hello@shopdesk.in and we'll fix it free.",
  },
  {
    question: "Is my data safe in Google Sheets?",
    answer:
      "Your data lives entirely in your Google Drive account — not on our servers. ShopDesk cannot see or access your data. Google's security protects it.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes. If ShopDesk doesn't work as described, email us within 7 days for a full refund — no questions asked.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream px-4 py-16 md:px-8 md:py-24">
      <FAQSchema faqs={faqs} />

      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center font-[var(--font-heading)] text-[1.75rem] font-extrabold text-navy md:text-[2.5rem]">
          Frequently Asked Questions
        </h2>
        <p className="mb-10 text-center text-base text-mid-grey">
          Everything you need to know before buying
        </p>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-navy/5 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                style={{ minHeight: "52px" }}
              >
                <span className="text-sm font-semibold text-navy md:text-base">
                  {faq.question}
                </span>
                <span className="shrink-0 text-orange">
                  {openIndex === i ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
              </button>

              <div
                className={`faq-content ${openIndex === i ? "open" : ""}`}
                style={{
                  maxHeight: openIndex === i ? "500px" : "0px",
                  padding:
                    openIndex === i ? "0 20px 16px 20px" : "0 20px 0 20px",
                }}
              >
                <p className="text-sm leading-relaxed text-mid-grey md:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
