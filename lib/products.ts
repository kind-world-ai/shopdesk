import { Crown, Zap, HeadphonesIcon, type LucideIcon } from "lucide-react";

export interface Product {
  slug: string;
  name: string;
  price: number;
  originalPrice: number | null;
  priceLabel: string;
  originalPriceLabel: string | null;
  description: string;
  shortDesc: string;
  features: string[];
  highlights: string[];
  icon: LucideIcon;
  category: string;
  badge: string | null;
  sheetsCount: number;
  formulaCount: number;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const products: Product[] = [
  {
    slug: "salon-crm",
    name: "ShopDesk CRM",
    price: 999,
    originalPrice: 2499,
    priceLabel: "₹999",
    originalPriceLabel: "₹2,499",
    description:
      "The complete business management toolkit for salons and construction firms. All 11 sheets, 373 validated formulas, Salon CRM, Construction CRM, EVM Dashboard — everything you need to run your business like a pro.",
    shortDesc: "Most popular — everything you need",
    features: [
      "All 11 sheets included",
      "373 validated formulas",
      "Salon CRM with booking & client tracking",
      "Construction CRM with RA Bill tracker",
      "EVM Dashboard for project monitoring",
      "Email support",
      "Lifetime access — no subscription",
      "Free updates forever",
    ],
    highlights: [
      "All 11 sheets",
      "373 validated formulas",
      "Salon CRM + Construction CRM",
      "EVM Dashboard",
      "Email support",
    ],
    icon: Crown,
    category: "CRM",
    badge: "Most Popular",
    sheetsCount: 11,
    formulaCount: 373,
    testimonial: {
      quote:
        "ShopDesk saved me 3 hours every day. My salon runs on autopilot now — bookings, billing, everything in one sheet.",
      author: "Priya Kaur",
      role: "Owner, Glow Up Salon, Chandigarh",
    },
  },
  {
    slug: "construction-crm",
    name: "ShopDesk Lite",
    price: 0,
    originalPrice: null,
    priceLabel: "₹0",
    originalPriceLabel: null,
    description:
      "Get started for free with the essential sheets. Includes BOQ, RA Bill, and Dashboard — perfect for trying out ShopDesk before upgrading.",
    shortDesc: "Free starter kit",
    features: [
      "3 sheets: BOQ + RA Bill + Dashboard",
      "Basic formulas",
      "Community support",
      "Google Sheets compatible",
      "No credit card required",
    ],
    highlights: [
      "3 sheets: BOQ + RA Bill + Dashboard",
      "Basic formulas",
      "Community support",
    ],
    icon: Zap,
    category: "Starter",
    badge: null,
    sheetsCount: 3,
    formulaCount: 45,
    testimonial: {
      quote:
        "Started with Lite to test things out. Within a week I upgraded to the full CRM. The RA Bill tracker alone is worth it.",
      author: "Rajesh Sharma",
      role: "Contractor, Mohali",
    },
  },
  {
    slug: "shopdesk-pro",
    name: "ShopDesk Pro",
    price: 2999,
    originalPrice: null,
    priceLabel: "₹2,999",
    originalPriceLabel: null,
    description:
      "Everything in the standard CRM plus automation features — PDF generation, WhatsApp alerts, and priority support. Built for power users who want maximum efficiency.",
    shortDesc: "For power users",
    features: [
      "All Standard CRM features",
      "PDF automation for invoices & bills",
      "WhatsApp alert integration",
      "Priority support (24hr response)",
      "Advanced reporting templates",
      "Bulk data import tools",
      "Custom formula requests (2/month)",
    ],
    highlights: [
      "All Standard features",
      "PDF automation",
      "WhatsApp alerts",
      "Priority support",
    ],
    icon: Zap,
    category: "Pro",
    badge: null,
    sheetsCount: 11,
    formulaCount: 500,
    testimonial: {
      quote:
        "The PDF automation saves me so much time. I generate RA bills in seconds now instead of spending an hour formatting.",
      author: "Vikram Singh",
      role: "Builder, Ludhiana",
    },
  },
  {
    slug: "custom-setup",
    name: "Custom Setup",
    price: 9999,
    originalPrice: null,
    priceLabel: "₹9,999",
    originalPriceLabel: null,
    description:
      "We set up everything for you. All Pro features plus a 30-minute onboarding call, custom configuration for your exact business needs, and hands-on migration support.",
    shortDesc: "We do it for you",
    features: [
      "All Pro features included",
      "Custom configuration for your business",
      "30-minute onboarding call",
      "Your exact project setup",
      "Data migration assistance",
      "Dedicated account manager (30 days)",
      "Custom formulas & templates",
      "Phone + WhatsApp support",
    ],
    highlights: [
      "All Pro features",
      "Custom configuration",
      "30-min onboarding call",
      "Your exact project setup",
    ],
    icon: HeadphonesIcon,
    category: "Enterprise",
    badge: null,
    sheetsCount: 11,
    formulaCount: 500,
    testimonial: {
      quote:
        "The onboarding call was a game-changer. They understood my construction business and set up everything exactly how I needed it.",
      author: "Amit Gupta",
      role: "Real Estate Developer, Delhi NCR",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
