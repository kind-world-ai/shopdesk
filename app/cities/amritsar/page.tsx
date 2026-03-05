import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { getCityBySlug } from "@/lib/cities";
import { CityPage } from "@/components/pages/CityPage";

const city = getCityBySlug("amritsar")!;

export const metadata: Metadata = genMeta({
  title: "ShopDesk Amritsar — Business Software for Salons & Contractors | ₹999",
  description:
    "Professional business management tools for Amritsar businesses. Salon CRM, construction billing. ₹999 one-time. Trusted by 20+ Amritsar businesses.",
  path: "/cities/amritsar",
  keywords: [
    "salon software amritsar",
    "business management software amritsar",
    "salon crm amritsar",
    "construction billing software amritsar",
    "ra bill software amritsar",
    "beauty parlour software amritsar",
    "shopdesk amritsar",
  ],
});

export default function AmritsarPage() {
  return <CityPage city={city} />;
}
