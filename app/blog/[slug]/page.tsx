import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/blog";
import { generateMetadata as genMeta } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { MdxContent } from "@/components/blog/MdxContent";
import { CTABox } from "@/components/ui/CTABox";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return genMeta({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    path: `/blog/${slug}`,
    keywords: [post.primaryKeyword, ...post.tags],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category, 3);

  const ctaProduct =
    post.category === "Salon"
      ? "salon"
      : post.category === "Construction"
        ? "construction"
        : "both";

  return (
    <>
      <JsonLd
        schema={articleSchema(
          post.title,
          post.description,
          post.date,
          post.date,
          post.author
        )}
      />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` },
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
            <Link href="/blog" className="hover:text-navy">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy">{post.title}</span>
          </nav>

          <div className="grid gap-8 md:grid-cols-10">
            {/* Main content — 70% */}
            <article className="md:col-span-7">
              {/* Header */}
              <div className="mb-8">
                <span className="mb-3 inline-block rounded-full bg-navy px-3 py-1 text-[11px] font-bold tracking-wide text-cream uppercase">
                  {post.category}
                </span>
                <h1 className="mb-4 font-[var(--font-heading)] text-[1.75rem] font-extrabold leading-tight text-navy md:text-[2.25rem]">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-mid-grey">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                  <span>By {post.author}</span>
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-navy/5 px-3 py-1 text-xs text-navy/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* MDX content */}
              <div className="prose-shopdesk">
                <MdxContent source={post.content} />
              </div>

              {/* CTA at bottom */}
              <div className="mt-12">
                <CTABox product={ctaProduct} variant="full-width" />
              </div>
            </article>

            {/* Sidebar — 30% */}
            <aside className="md:col-span-3">
              <div className="sticky top-20">
                {/* Related posts */}
                {related.length > 0 && (
                  <div className="rounded-2xl border border-navy/5 bg-white p-5">
                    <h3 className="mb-4 text-sm font-bold tracking-wider text-mid-grey uppercase">
                      Related Posts
                    </h3>
                    <div className="space-y-4">
                      {related.map((rp) => (
                        <Link
                          key={rp.slug}
                          href={`/blog/${rp.slug}`}
                          className="group block"
                        >
                          <span className="mb-1 block text-[11px] font-bold text-orange uppercase">
                            {rp.category}
                          </span>
                          <span className="block text-sm font-medium leading-snug text-navy transition-colors group-hover:text-orange">
                            {rp.title}
                          </span>
                          <span className="mt-1 block text-xs text-mid-grey">
                            {rp.readTime}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick CTA */}
                <div className="mt-5 rounded-2xl bg-navy p-5 text-center">
                  <p className="mb-2 text-sm font-bold text-cream">
                    Try ShopDesk Free
                  </p>
                  <p className="mb-3 text-xs text-cream/50">
                    3 sheets. No credit card.
                  </p>
                  <Link
                    href="/shop/construction-crm"
                    className="inline-flex rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-hover min-h-[40px]"
                  >
                    Download Free →
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
