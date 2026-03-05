import Link from "next/link";
import type { BlogPost } from "@/types/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-navy/5 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
    >
      {/* Category pill */}
      <span className="mb-3 inline-flex w-fit rounded-full bg-navy px-3 py-1 text-[11px] font-bold tracking-wide text-cream uppercase">
        {post.category}
      </span>

      {/* Title */}
      <h3 className="mb-2 font-[var(--font-heading)] text-base font-bold leading-snug text-navy transition-colors group-hover:text-orange md:text-lg">
        {post.title}
      </h3>

      {/* Description — 2 lines */}
      <p className="mb-4 line-clamp-2 flex-1 text-sm text-mid-grey">
        {post.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-3 text-xs text-mid-grey">
        <span>{post.readTime}</span>
        <span className="text-navy/20">|</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}
