import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "@/components/seo/schemas";
import { Navbar } from "@/components/navigation/navbar";
import { BottomCTA } from "@/components/navigation/bottom-cta";
import { Footer } from "@/components/sections/footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ShopDesk | Business Management Tools for Indian SMBs — ₹999",
  description:
    "Professional Excel-based CRM for salons, contractors & shops. RA Bill tracker, salon booking, material reconciliation. Download and use in 15 minutes. Trusted by 500+ businesses across Punjab.",
  keywords: [
    "salon crm india",
    "construction billing software",
    "ra bill tracker excel",
    "shopdesk",
    "small business erp india",
    "chandigarh mohali business tools",
  ],
  openGraph: {
    title: "ShopDesk — Run Your Business Like a Pro",
    description: "Professional tools at ₹999. No subscription. No IT setup.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ShopDeskIN",
  },
  alternates: {
    canonical: "https://shopdesk.in",
    languages: {
      "en-IN": "https://shopdesk.in",
      "hi-IN": "https://shopdesk.in/hi",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="bg-cream text-dark-text">
        <OrganizationSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BottomCTA />
      </body>
    </html>
  );
}
