import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "@/components/seo/schemas";
import { Navbar } from "@/components/navigation/navbar";
import { BottomCTA } from "@/components/navigation/bottom-cta";
import { Footer } from "@/components/sections/footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agenticvani.com"),
  title: "AgenticVani | Business Management Tools for Indian SMBs — ₹999",
  description:
    "Professional Excel-based CRM for salons, contractors & shops. RA Bill tracker, salon booking, material reconciliation. Download and use in 15 minutes. Trusted by 500+ businesses across Punjab.",
  keywords: [
    "salon crm india",
    "construction billing software",
    "ra bill tracker excel",
    "agenticvani",
    "small business erp india",
    "chandigarh mohali business tools",
  ],
  openGraph: {
    title: "AgenticVani — Run Your Business Like a Pro",
    description: "Professional tools at ₹999. No subscription. No IT setup.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AgenticVaniIN",
  },
  alternates: {
    canonical: "https://agenticvani.com",
    languages: {
      "en-IN": "https://agenticvani.com",
      "hi-IN": "https://agenticvani.com/hi",
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
    <html lang="en" className={plusJakarta.variable}>
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
