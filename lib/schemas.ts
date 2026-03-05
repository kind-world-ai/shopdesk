const SITE_URL = "https://theshopdesk.in";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ShopDesk",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "ShopDesk provides professional business management tools for Indian SMBs — salons, contractors, and shops.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mohali",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@shopdesk.in",
      availableLanguage: ["English", "Hindi", "Punjabi"],
    },
    sameAs: [
      "https://instagram.com/shopdeskin",
      "https://linkedin.com/company/shopdesk",
    ],
  };
}

export function productSchema(
  name: string,
  price: string | number,
  description: string,
  ratingValue: string = "4.8",
  reviewCount: string = "127"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: "ShopDesk" },
    offers: {
      "@type": "Offer",
      price: String(price),
      priceCurrency: "INR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "ShopDesk" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function howToSchema(
  steps: { name: string; text: string }[],
  title: string,
  description: string,
  totalTime: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description,
    totalTime,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function articleSchema(
  title: string,
  description: string,
  datePublished: string,
  dateModified: string,
  authorName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "ShopDesk",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SITE_URL,
    },
  };
}
