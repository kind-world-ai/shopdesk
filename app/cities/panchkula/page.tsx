import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { getCityBySlug } from "@/lib/cities";
import { CityPage } from "@/components/pages/CityPage";

const city = getCityBySlug("panchkula")!;

export const metadata: Metadata = genMeta({
  title: "ShopDesk Panchkula — Business Software for Salons & Contractors | ₹999",
  description:
    "Professional business management tools for Panchkula businesses. Salon CRM, construction billing. ₹999 one-time. Trusted by 25+ Panchkula businesses.",
  path: "/cities/panchkula",
  keywords: [
    "salon software panchkula",
    "business management software panchkula",
    "salon crm panchkula",
    "construction billing software panchkula",
    "ra bill software panchkula",
    "beauty parlour software panchkula",
    "shopdesk panchkula",
  ],
});

export default function PanchkulaPage() {
  return <CityPage city={city} />;
}
