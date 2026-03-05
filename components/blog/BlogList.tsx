"use client";

import { useState } from "react";
import type { BlogPost } from "@/types/blog";
import { BlogCard } from "./BlogCard";

const categories = ["All", "Construction", "Salon", "Business Tips"] as const;

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors min-h-[40px] ${
              active === cat
                ? "bg-navy text-cream"
                : "bg-white text-navy/70 hover:bg-navy/5 border border-navy/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-mid-grey">
          No posts in this category yet. Check back soon!
        </p>
      )}
    </>
  );
}
