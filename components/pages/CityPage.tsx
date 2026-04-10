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
    name: "AgenticVani",
    description: `Professional business management tools for ${city.name} salons and contractors. Google Sheets-based CRM — ₹999 one-time.`,
    url: `https://agenticvani.com/cities/${city.slug}`,
    telephone: "+91-7009-XXX-XXX",
    email: "hello@agenticvani.com",
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
        containedInPlace: { "@type": "Country", name: "India" },
      },
    },
    priceRange: "₹999",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
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

      <main className="min-h-screen bg-cream">
        {/* Hero */}
        <section className="bg-navy px-4 py-16 text-white md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-4 flex items-center gap-2 text-sm text-orange">
              <MapPin size={15} />
              <span>{city.name}, {city.state}, India</span>
            </div>

            <h1 className="mb-6 text-3xl font-extrabold leading-tight md:text-5xl">
              Professional Business Tools for {city.name} Businesses.{" "}
              <span className="text-orange">₹999.</span>
            </h1>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
              {city.opening}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/checkout/salon-crm"
                className="btn-glow inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-orange-hover min-h-[48px]"
              >
                Get Salon CRM — ₹999
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/checkout/construction-crm"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/8 min-h-[48px]"
              >
                Get Construction CRM — ₹999
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
              {city.socialProof.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-extrabold text-navy md:text-3xl">
                    {item.stat}
                  </div>
                  <div className="mt-1 text-sm text-mid-grey">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Salons */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-orange/10 p-3">
                <Scissors size={22} className="text-orange" />
              </div>
              <h2 className="text-2xl font-bold text-navy md:text-3xl">
                For {city.name} Salons
              </h2>
            </div>
            <p className="mb-8 max-w-2xl text-mid-grey">
              Whether you run a premium salon in {city.salonLocations} — AgenticVani
              replaces your register, calculator, and Excel with one professional system.
            </p>

            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
              <ul className="space-y-3">
                {city.salonFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-teal" />
                    <span className="text-navy">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/checkout/salon-crm"
                className="btn-glow inline-flex cursor-pointer items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white transition-all hover:bg-orange-hover min-h-[48px]"
              >
                Get Salon CRM — ₹999
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/shop/salon-crm"
                className="cursor-pointer text-sm font-medium text-orange underline underline-offset-4 transition-colors hover:text-orange-hover min-h-[48px] flex items-center"
              >
                See all features
              </Link>
            </div>
          </div>
        </section>

        {/* For Contractors */}
        <section className="bg-white px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-teal/10 p-3">
                <HardHat size={22} className="text-teal" />
              </div>
              <h2 className="text-2xl font-bold text-navy md:text-3xl">
                For {city.name} Contractors
              </h2>
            </div>
            <p className="mb-8 max-w-2xl text-mid-grey">
              Managing projects in {city.contractorLocations}? AgenticVani handles RA
              Bills, BOQ tracking, material reconciliation, and payment follow-ups
              — so you focus on building.
            </p>

            <div className="mb-6 rounded-2xl border border-gray-200 bg-cream p-6 md:p-8">
              <ul className="space-y-3">
                {city.contractorFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-teal" />
                    <span className="text-navy">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/checkout/construction-crm"
                className="btn-glow inline-flex cursor-pointer items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-90 min-h-[48px]"
              >
                Get Construction CRM — ₹999
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/shop/construction-crm"
                className="cursor-pointer text-sm font-medium text-teal underline underline-offset-4 transition-colors hover:opacity-80 min-h-[48px] flex items-center"
              >
                See all features
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose AgenticVani */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-teal uppercase">
              Why AgenticVani
            </p>
            <h2 className="mb-10 text-2xl font-bold text-navy md:text-3xl">
              Why {city.name} Businesses Choose AgenticVani
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {city.whyChoose.map((item, i) => {
                const icons = [Shield, Zap, Users, Star];
                const Icon = icons[i % icons.length];
                return (
                  <div
                    key={item.title}
                    className="card-hover rounded-2xl border border-gray-200 bg-white p-6"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <Icon size={18} className="text-orange" />
                      <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-mid-grey">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="bg-white px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-teal uppercase">
              What&apos;s Included
            </p>
            <h2 className="mb-3 text-2xl font-bold text-navy md:text-3xl">
              What&apos;s Inside AgenticVani
            </h2>
            <p className="mb-10 max-w-2xl text-mid-grey">
              Both Salon CRM and Construction CRM are Google Sheets-based systems
              with professionally built formulas, dashboards, and workflows.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="rounded-2xl border border-gray-200 bg-cream p-4"
                >
                  <div className="font-semibold text-navy">{item.label}</div>
                  <div className="text-sm text-mid-grey">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Ready to upgrade your {city.name} business?
            </h2>
            <p className="mb-8 text-lg text-white/50">
              Join {city.socialProof[0].stat} businesses in {city.name} already
              using AgenticVani. ₹999 one-time. Set up in 15 minutes.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/checkout/salon-crm"
                className="btn-glow inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-orange-hover min-h-[48px]"
              >
                Salon CRM — ₹999
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/checkout/construction-crm"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-base font-bold text-white transition-all hover:opacity-90 min-h-[48px]"
              >
                Construction CRM — ₹999
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/30">
              Also available in{" "}
              <Link
                href={`/cities/${city.nearbyCity.slug}`}
                className="text-orange hover:underline"
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
