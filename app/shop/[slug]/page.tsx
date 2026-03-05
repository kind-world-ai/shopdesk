import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Star, Shield, Clock, RefreshCw } from "lucide-react";
import { products, getProductBySlug, getAllSlugs } from "@/lib/products";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.priceLabel} | ShopDesk`,
    description: product.description,
    openGraph: {
      title: `${product.name} — ${product.priceLabel}`,
      description: product.shortDesc,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const isFree = product.price === 0;
  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-cream px-4 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-mid-grey">
            <Link href="/" className="hover:text-navy">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-navy">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy">{product.name}</span>
          </nav>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Main content — left 2 cols */}
            <div className="md:col-span-2">
              {/* Hero */}
              <div className="mb-8">
                {product.badge && (
                  <span className="mb-3 inline-block rounded-full bg-orange px-3 py-1 text-xs font-bold text-white">
                    {product.badge}
                  </span>
                )}
                <h1 className="mb-2 font-[var(--font-heading)] text-[1.75rem] font-extrabold text-navy md:text-[2.5rem]">
                  {product.name}
                </h1>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-navy">
                      {product.priceLabel}
                    </span>
                    {product.originalPriceLabel && (
                      <span className="text-lg text-mid-grey line-through">
                        {product.originalPriceLabel}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-mid-grey">one-time</span>
                </div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-mid-grey">
                    4.8/5 (127+ reviews)
                  </span>
                </div>
                <p className="text-base leading-relaxed text-navy/70">
                  {product.description}
                </p>
              </div>

              {/* What's Included */}
              <div className="mb-8 rounded-2xl border border-navy/5 bg-white p-6">
                <h2 className="mb-4 text-lg font-bold text-navy">
                  What&apos;s Included
                </h2>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-cream p-4 text-center">
                    <span className="block text-2xl font-extrabold text-navy">
                      {product.sheetsCount}
                    </span>
                    <span className="text-xs text-mid-grey">Sheets</span>
                  </div>
                  <div className="rounded-xl bg-cream p-4 text-center">
                    <span className="block text-2xl font-extrabold text-navy">
                      {product.formulaCount}+
                    </span>
                    <span className="text-xs text-mid-grey">Formulas</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-teal"
                      />
                      <span className="text-sm text-navy/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="mb-8 rounded-2xl border border-navy/5 bg-white p-6">
                <div className="mb-3 flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
                <blockquote className="mb-3 text-base italic text-navy/70">
                  &ldquo;{product.testimonial.quote}&rdquo;
                </blockquote>
                <p className="text-sm font-bold text-navy">
                  {product.testimonial.author}
                </p>
                <p className="text-xs text-mid-grey">
                  {product.testimonial.role}
                </p>
              </div>

              {/* Comparison */}
              <div className="rounded-2xl border border-navy/5 bg-white p-6">
                <h2 className="mb-4 text-lg font-bold text-navy">
                  Why ShopDesk?
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-navy/10">
                        <th className="pb-2 text-left font-medium text-mid-grey">
                          Feature
                        </th>
                        <th className="pb-2 text-center font-bold text-orange">
                          ShopDesk
                        </th>
                        <th className="pb-2 text-center font-medium text-mid-grey">
                          Paper/Excel
                        </th>
                        <th className="pb-2 text-center font-medium text-mid-grey">
                          ERP Software
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-navy/70">
                      <tr className="border-b border-navy/5">
                        <td className="py-2">Setup time</td>
                        <td className="py-2 text-center font-bold text-teal">
                          15 min
                        </td>
                        <td className="py-2 text-center">Days</td>
                        <td className="py-2 text-center">Weeks</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="py-2">Cost</td>
                        <td className="py-2 text-center font-bold text-teal">
                          {product.priceLabel} once
                        </td>
                        <td className="py-2 text-center">Free</td>
                        <td className="py-2 text-center">₹10K+/yr</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="py-2">Automation</td>
                        <td className="py-2 text-center font-bold text-teal">
                          ✓
                        </td>
                        <td className="py-2 text-center text-alert">✗</td>
                        <td className="py-2 text-center">✓</td>
                      </tr>
                      <tr>
                        <td className="py-2">Learning curve</td>
                        <td className="py-2 text-center font-bold text-teal">
                          None
                        </td>
                        <td className="py-2 text-center">None</td>
                        <td className="py-2 text-center">Steep</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sticky sidebar — right col (desktop) */}
            <div className="hidden md:block">
              <div className="sticky top-20 rounded-2xl border border-navy/5 bg-white p-6 shadow-sm">
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${
                    product.badge ? "bg-orange/10" : "bg-navy/5"
                  }`}
                >
                  <product.icon
                    size={24}
                    className={
                      product.badge ? "text-orange" : "text-navy/60"
                    }
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold text-navy">
                  {product.name}
                </h3>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-navy">
                    {product.priceLabel}
                  </span>
                  {product.originalPriceLabel && (
                    <span className="text-sm text-mid-grey line-through">
                      {product.originalPriceLabel}
                    </span>
                  )}
                </div>
                <p className="mb-5 text-xs text-mid-grey">
                  One-time purchase. Yours forever.
                </p>

                {isFree ? (
                  <Link
                    href={`/shop/${product.slug}`}
                    className="mb-3 flex w-full items-center justify-center rounded-full bg-navy px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-navy/90 min-h-[48px]"
                  >
                    Download Free →
                  </Link>
                ) : (
                  <Link
                    href={`/checkout/${product.slug}`}
                    className="mb-3 flex w-full items-center justify-center rounded-full bg-orange px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-hover min-h-[48px]"
                  >
                    Buy Now — {product.priceLabel} →
                  </Link>
                )}

                <div className="space-y-2 text-xs text-mid-grey">
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-teal" />
                    <span>Secure checkout via Razorpay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-teal" />
                    <span>Instant delivery to email</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw size={14} className="text-teal" />
                    <span>7-day refund policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other products */}
          {otherProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-center text-lg font-bold text-navy">
                You might also like
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {otherProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/shop/${p.slug}`}
                    className="rounded-2xl border border-navy/5 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <h3 className="mb-1 font-bold text-navy">{p.name}</h3>
                    <p className="mb-2 text-xs text-mid-grey">{p.shortDesc}</p>
                    <span className="text-lg font-extrabold text-navy">
                      {p.priceLabel}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mobile sticky CTA */}
      {!isFree && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy/10 bg-white/95 px-4 py-3 backdrop-blur-md md:hidden">
          <Link
            href={`/checkout/${product.slug}`}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-orange py-3.5 text-sm font-bold text-white min-h-[48px]"
          >
            Buy {product.name} — {product.priceLabel} →
          </Link>
        </div>
      )}
    </>
  );
}
