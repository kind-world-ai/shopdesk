import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { getCityBySlug } from "@/lib/cities";
import { CityPage } from "@/components/pages/CityPage";

const city = getCityBySlug("ludhiana")!;

export const metadata: Metadata = genMeta({
  title: "ShopDesk Ludhiana — Business Software for Salons & Contractors | ₹999",
  description:
    "Professional business management tools for Ludhiana businesses. Salon CRM, construction billing. ₹999 one-time. Trusted by 35+ Ludhiana businesses.",
  path: "/cities/ludhiana",
  keywords: [
    "salon software ludhiana",
    "business management software ludhiana",
    "salon crm ludhiana",
    "construction billing software ludhiana",
    "ra bill software ludhiana",
    "beauty parlour software ludhiana",
    "shopdesk ludhiana",
  ],
});

export default function LudhianaPage() {
  return <CityPage city={city} />;
}
