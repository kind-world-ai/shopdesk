export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "Construction" | "Salon" | "Business Tips";
  tags: string[];
  readTime: string;
  author: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  featured: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}
