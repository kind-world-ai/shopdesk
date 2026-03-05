import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { getCityBySlug } from "@/lib/cities";
import { CityPage } from "@/components/pages/CityPage";

const city = getCityBySlug("mohali")!;

export const metadata: Metadata = genMeta({
  title: "ShopDesk Mohali — Business Software for Salons & Contractors | ₹999",
  description:
    "Professional business management tools for Mohali businesses. Salon CRM, construction billing. ₹999 one-time. Trusted by 40+ Mohali businesses.",
  path: "/cities/mohali",
  keywords: [
    "salon software mohali",
    "business management software mohali",
    "salon crm mohali",
    "construction billing software mohali",
    "ra bill software mohali",
    "beauty parlour software mohali",
    "shopdesk mohali",
  ],
});

export default function MohaliPage() {
  return <CityPage city={city} />;
}
