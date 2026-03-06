import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies");

export interface CaseStudy {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  date: string;
  category: "Salon" | "Construction";
  readTime: string;
  primaryKeyword: string;
  author: string;
  clientName: string;
  businessName: string;
  location: string;
  stats: { label: string; value: string }[];
  tags: string[];
}

export interface CaseStudyWithContent extends CaseStudy {
  content: string;
}

function ensureDir() {
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    fs.mkdirSync(CASE_STUDIES_DIR, { recursive: true });
  }
}

function parseFrontmatter(slug: string): CaseStudyWithContent | null {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || "",
    seoTitle: data.seoTitle || data.title || "",
    seoDescription: data.seoDescription || data.description || "",
    description: data.description || "",
    date: data.date || "",
    category: data.category || "Salon",
    readTime: data.readTime || "5 min",
    primaryKeyword: data.primaryKeyword || "",
    author: data.author || "ShopDesk Team",
    clientName: data.clientName || "",
    businessName: data.businessName || "",
    location: data.location || "",
    stats: data.stats || [],
    tags: data.tags || [],
    content,
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  ensureDir();

  const files = fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => f.endsWith(".mdx"));

  const studies = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const study = parseFrontmatter(slug);
      if (!study) return null;
      const { content: _, ...meta } = study;
      return meta as CaseStudy;
    })
    .filter((s): s is CaseStudy => s !== null);

  studies.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return studies;
}

export function getCaseStudyBySlug(
  slug: string
): CaseStudyWithContent | null {
  ensureDir();
  return parseFrontmatter(slug);
}

export function getAllCaseStudySlugs(): string[] {
  ensureDir();
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getRelatedCaseStudies(
  currentSlug: string,
  count: number = 2
): CaseStudy[] {
  const all = getAllCaseStudies();
  return all.filter((s) => s.slug !== currentSlug).slice(0, count);
}
