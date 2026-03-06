import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
  getRelatedCaseStudies,
} from "@/lib/case-studies";
import { generateMetadata as genMeta } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { MdxContent } from "@/components/blog/MdxContent";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return genMeta({
    title: study.seoTitle || study.title,
    description: study.seoDescription || study.description,
    path: `/case-studies/${slug}`,
    keywords: [study.primaryKeyword, ...study.tags],
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const related = getRelatedCaseStudies(slug, 2);

  const ctaProduct = study.category === "Salon" ? "salon" : "construction";
  const ctaSlug =
    study.category === "Salon" ? "salon-crm" : "construction-crm";

  return (
    <>
      <JsonLd
        schema={articleSchema(
          study.title,
          study.description,
          study.date,
          study.date,
          study.author
        )}
      />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies/" + getAllCaseStudySlugs()[0] },
          { name: study.title, url: `/case-studies/${slug}` },
        ])}
      />

      <section className="bg-cream px-4 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-mid-grey">
            <Link href="/" className="hover:text-navy">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="hover:text-navy">Case Studies</span>
            <span className="mx-2">/</span>
            <span className="text-navy">{study.businessName}</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="mb-3 inline-block rounded-full bg-navy px-3 py-1 text-[11px] font-bold tracking-wide text-cream uppercase">
              {study.category} Case Study
            </span>
            <h1 className="mb-4 font-[var(--font-heading)] text-[1.75rem] font-extrabold leading-tight text-navy md:text-[2.25rem]">
              {study.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-mid-grey">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {study.businessName}, {study.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                <time dateTime={study.date}>
                  {new Date(study.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {study.readTime}
              </span>
            </div>
          </div>

          {/* Key Stats Boxes */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {study.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-navy/10 bg-white p-5 text-center"
              >
                <div className="font-[var(--font-heading)] text-2xl font-extrabold text-orange md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-mid-grey">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-10">
            {/* Main content — 70% */}
            <article className="md:col-span-7">
              <div className="prose-shopdesk">
                <MdxContent source={study.content} />
              </div>
            </article>

            {/* Sidebar — 30% */}
            <aside className="md:col-span-3">
              <div className="sticky top-20 space-y-5">
                {/* Quick Facts */}
                <div className="rounded-2xl border border-navy/5 bg-white p-5">
                  <h3 className="mb-4 text-sm font-bold tracking-wider text-mid-grey uppercase">
                    Quick Facts
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <span className="block text-xs text-mid-grey">
                        Client
                      </span>
                      <span className="font-medium text-navy">
                        {study.clientName}
                      </span>
                    </li>
                    <li>
                      <span className="block text-xs text-mid-grey">
                        Business
                      </span>
                      <span className="font-medium text-navy">
                        {study.businessName}
                      </span>
                    </li>
                    <li>
                      <span className="block text-xs text-mid-grey">
                        Location
                      </span>
                      <span className="font-medium text-navy">
                        {study.location}
                      </span>
                    </li>
                    <li>
                      <span className="block text-xs text-mid-grey">
                        Product
                      </span>
                      <span className="font-medium text-navy">
                        ShopDesk {study.category} CRM
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Related Case Studies */}
                {related.length > 0 && (
                  <div className="rounded-2xl border border-navy/5 bg-white p-5">
                    <h3 className="mb-4 text-sm font-bold tracking-wider text-mid-grey uppercase">
                      More Case Studies
                    </h3>
                    <div className="space-y-4">
                      {related.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/case-studies/${r.slug}`}
                          className="group block"
                        >
                          <span className="mb-1 block text-[11px] font-bold text-orange uppercase">
                            {r.category}
                          </span>
                          <span className="block text-sm font-medium leading-snug text-navy transition-colors group-hover:text-orange">
                            {r.title}
                          </span>
                          <span className="mt-1 block text-xs text-mid-grey">
                            {r.location}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="rounded-2xl bg-navy p-5 text-center">
                  <p className="mb-2 text-sm font-bold text-cream">
                    Get the same results
                  </p>
                  <p className="mb-3 text-xs text-cream/50">
                    {study.category === "Salon"
                      ? "11 sheets. 373 formulas. ₹999."
                      : "RA Bills. BOQ. Payment Tracker. ₹999."}
                  </p>
                  <Link
                    href={`/checkout/${ctaSlug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-hover min-h-[40px]"
                  >
                    Buy {study.category} CRM — ₹999
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
