import type { Metadata } from "next";

const SITE_URL = "https://theshopdesk.in";
const SITE_NAME = "ShopDesk";
const DEFAULT_OG_IMAGE = "/og/default.jpg";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  ogImage?: string;
}

export function generateMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
}: GenerateMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
      site: "@ShopDeskIN",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
