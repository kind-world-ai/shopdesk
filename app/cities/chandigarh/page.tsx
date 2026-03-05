import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { getCityBySlug } from "@/lib/cities";
import { CityPage } from "@/components/pages/CityPage";

const city = getCityBySlug("chandigarh")!;

export const metadata: Metadata = genMeta({
  title: "ShopDesk Chandigarh — Business Software for Salons & Contractors | ₹999",
  description:
    "Professional business management tools for Chandigarh businesses. Salon CRM, construction billing. ₹999 one-time. Trusted by 50+ Chandigarh businesses.",
  path: "/cities/chandigarh",
  keywords: [
    "salon software chandigarh",
    "business management software chandigarh",
    "salon crm chandigarh",
    "construction billing software chandigarh",
    "ra bill software chandigarh",
    "beauty parlour software chandigarh",
    "shopdesk chandigarh",
  ],
});

export default function ChandigarhPage() {
  return <CityPage city={city} />;
}
