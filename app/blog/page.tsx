import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { generateMetadata as genMeta } from "@/lib/seo";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = genMeta({
  title: "ShopDesk Blog — Business Tips for Indian SMBs",
  description:
    "Practical guides for salon owners, construction contractors, and small businesses in India. RA Bill tips, salon management, GST filing, and business growth strategies.",
  path: "/blog",
  keywords: [
    "salon business tips india",
    "construction billing guide",
    "ra bill excel",
    "small business india blog",
    "shopdesk blog",
  ],
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="bg-cream px-4 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <p className="mb-2 text-center text-xs font-bold tracking-wider text-orange uppercase">
          ShopDesk Blog
        </p>
        <h1 className="mb-3 text-center font-[var(--font-heading)] text-[1.75rem] font-extrabold text-navy md:text-[2.5rem]">
          Business Tips for Indian SMBs
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-mid-grey">
          Practical guides for salon owners, contractors, and small business
          owners. Learn how to grow your business with ShopDesk.
        </p>

        {/* Blog list with category filter */}
        <BlogList posts={posts} />
      </div>
    </section>
  );
}
