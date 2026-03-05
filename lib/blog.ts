import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogPostWithContent } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

function parseFrontmatter(slug: string): BlogPostWithContent | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    category: data.category || "Business Tips",
    tags: data.tags || [],
    readTime: data.readTime || "5 min read",
    author: data.author || "ShopDesk Team",
    seoTitle: data.seoTitle || data.title || "",
    seoDescription: data.seoDescription || data.description || "",
    primaryKeyword: data.primaryKeyword || "",
    featured: data.featured || false,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  ensureBlogDir();

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const post = parseFrontmatter(slug);
      if (!post) return null;
      // Strip content for listing
      const { content: _, ...meta } = post;
      return meta as BlogPost;
    })
    .filter((p): p is BlogPost => p !== null);

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  ensureBlogDir();
  return parseFrontmatter(slug);
}

export function getAllSlugs(): string[] {
  ensureBlogDir();
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  count: number = 3
): BlogPost[] {
  const all = getAllPosts();
  // Same category first, then others
  const sameCategory = all.filter(
    (p) => p.slug !== currentSlug && p.category === category
  );
  const others = all.filter(
    (p) => p.slug !== currentSlug && p.category !== category
  );
  return [...sameCategory, ...others].slice(0, count);
}
