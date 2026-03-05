import Link from "next/link";
import {
  Scissors,
  HardHat,
  Check,
  MapPin,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { CityData } from "@/lib/cities";
import { organizationSchema, breadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";

function localBusinessSchema(city: CityData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ShopDesk",
    description: `Professional business management tools for ${city.name} salons and contractors. Google Sheets-based CRM — ₹999 one-time.`,
    url: `https://theshopdesk.in/cities/${city.slug}`,
    telephone: "+91-7009-XXX-XXX",
    email: "hello@shopdesk.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mohali",
      addressRegion: "Punjab",
      postalCode: "140306",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
        containedInPlace: {
          "@type": "Country",
          name: "India",
        },
      },
    },
    priceRange: "₹999",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function CityPage({ city }: { city: CityData }) {
  return (
    <>
      <JsonLd schema={localBusinessSchema(city)} />
      <JsonLd schema={organizationSchema()} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Cities", url: "/cities/chandigarh" },
          { name: city.name, url: `/cities/${city.slug}` },
        ])}
      />

      <main className="bg-[var(--color-cream)] min-h-screen">
        {/* Hero */}
        <section className="bg-[var(--color-navy)] text-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 text-sm text-[var(--color-orange)] mb-4">
              <MapPin className="w-4 h-4" />
              <span>
                {city.name}, {city.state}, India
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 font-[family-name:var(--font-heading)]">
              Professional Business Tools for {city.name} Businesses.{" "}
              <span className="text-[var(--color-orange)]">₹999.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
              {city.opening}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/checkout/salon-crm"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors min-h-[48px]"
              >
                Get Salon CRM — ₹999
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/checkout/construction-crm"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors min-h-[48px]"
              >
                Get Construction CRM — ₹999
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {city.socialProof.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl md:text-3xl font-bold text-[var(--color-navy)] font-[family-name:var(--font-heading)]">
                    {item.stat}
                  </div>
                  <div className="text-sm text-[var(--color-mid-grey)] mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Salons */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[var(--color-orange)]/10 p-3 rounded-xl">
                <Scissors className="w-6 h-6 text-[var(--color-orange)]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)] font-[family-name:var(--font-heading)]">
                For {city.name} Salons
              </h2>
            </div>
            <p className="text-[var(--color-mid-grey)] mb-8 max-w-2xl">
              Whether you run a premium salon in {city.salonLocations} — ShopDesk
              replaces your register, calculator, and Excel with one professional
              system.
            </p>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
              <ul className="space-y-4">
                {city.salonFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--color-teal)] mt-0.5 shrink-0" />
                    <span className="text-[var(--color-navy)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/checkout/salon-crm"
                className="inline-flex items-center gap-2 bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-semibold px-6 py-3 rounded-lg transition-colors min-h-[48px]"
              >
                Get Salon CRM — ₹999
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/shop/salon-crm"
                className="text-[var(--color-orange)] hover:underline font-medium min-h-[48px] flex items-center"
              >
                See all features →
              </Link>
            </div>
          </div>
        </section>

        {/* For Contractors */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[var(--color-teal)]/10 p-3 rounded-xl">
                <HardHat className="w-6 h-6 text-[var(--color-teal)]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)] font-[family-name:var(--font-heading)]">
                For {city.name} Contractors
              </h2>
            </div>
            <p className="text-[var(--color-mid-grey)] mb-8 max-w-2xl">
              Managing projects in {city.contractorLocations}? ShopDesk handles RA
              Bills, BOQ tracking, material reconciliation, and payment follow-ups
              — so you focus on building.
            </p>

            <div className="bg-[var(--color-cream)] rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
              <ul className="space-y-4">
                {city.contractorFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--color-teal)] mt-0.5 shrink-0" />
                    <span className="text-[var(--color-navy)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/checkout/construction-crm"
                className="inline-flex items-center gap-2 bg-[var(--color-teal)] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition-opacity min-h-[48px]"
              >
                Get Construction CRM — ₹999
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/shop/construction-crm"
                className="text-[var(--color-teal)] hover:underline font-medium min-h-[48px] flex items-center"
              >
                See all features →
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose ShopDesk */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-10 font-[family-name:var(--font-heading)]">
              Why {city.name} Businesses Choose ShopDesk
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {city.whyChoose.map((item, i) => {
                const icons = [Shield, Zap, Users, Star];
                const Icon = icons[i % icons.length];
                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-[var(--color-orange)]" />
                      <h3 className="font-semibold text-[var(--color-navy)] text-lg">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[var(--color-mid-grey)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-6 font-[family-name:var(--font-heading)]">
              What&apos;s Inside ShopDesk
            </h2>
            <p className="text-[var(--color-mid-grey)] mb-10 max-w-2xl">
              Both Salon CRM and Construction CRM are Google Sheets-based systems
              with professionally built formulas, dashboards, and workflows.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "11 interconnected sheets", sub: "Per product" },
                { label: "373+ validated formulas", sub: "IFERROR protected" },
                { label: "44 BOQ items pre-loaded", sub: "Construction CRM" },
                { label: "GST + TDS auto-calculation", sub: "Tax ready" },
                { label: "WhatsApp reminder integration", sub: "Salon CRM" },
                { label: "Monthly dashboards", sub: "Visual reporting" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[var(--color-cream)] rounded-lg p-4 border border-gray-100"
                >
                  <div className="font-semibold text-[var(--color-navy)]">
                    {item.label}
                  </div>
                  <div className="text-sm text-[var(--color-mid-grey)]">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[var(--color-navy)] py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Ready to upgrade your {city.name} business?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join {city.socialProof[0].stat} businesses in {city.name} already
              using ShopDesk. ₹999 one-time. Set up in 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/checkout/salon-crm"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors min-h-[48px]"
              >
                Salon CRM — ₹999
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/checkout/construction-crm"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-teal)] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-opacity min-h-[48px]"
              >
                Construction CRM — ₹999
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-gray-400 text-sm mt-6">
              Also available in{" "}
              <Link
                href={`/cities/${city.nearbyCity.slug}`}
                className="text-[var(--color-orange)] hover:underline"
              >
                {city.nearbyCity.name}
              </Link>
              {" "}and other Punjab & Haryana cities.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
