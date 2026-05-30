import type { BlogPost } from "./blogPosts";

export type BlogCategorySlug =
  | "all"
  | "seo"
  | "web-design"
  | "digital-marketing"
  | "branding"
  | "social-media"
  | "advertising"
  | "orm"
  | "performance-marketing"
  | "content-ai";

export type BlogCategory = {
  slug: BlogCategorySlug;
  label: string;
  matchTags: string[];
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "all", label: "All", matchTags: [] },
  {
    slug: "seo",
    label: "SEO",
    matchTags: ["SEO", "Google", "Algorithm", "AI Search"],
  },
  {
    slug: "web-design",
    label: "Web Design",
    matchTags: ["Web Design", "Web", "UX", "WordPress", "Webflow", "Landing Pages", "Pricing"],
  },
  {
    slug: "digital-marketing",
    label: "Digital Marketing",
    matchTags: [
      "Digital Marketing",
      "Marketing",
      "Strategy",
      "Local",
      "RWA",
      "Campaigns",
      "Personalization",
      "CRM",
      "Bangalore",
      "Startups",
    ],
  },
  {
    slug: "branding",
    label: "Branding",
    matchTags: ["Branding", "Brand", "Creative", "Design", "Business"],
  },
  {
    slug: "social-media",
    label: "Social Media",
    matchTags: ["Social Media", "Facebook", "Trends", "Agency"],
  },
  {
    slug: "advertising",
    label: "Advertising",
    matchTags: ["Advertising", "Offline"],
  },
  {
    slug: "orm",
    label: "ORM",
    matchTags: ["ORM", "Reviews"],
  },
  {
    slug: "performance-marketing",
    label: "Performance",
    matchTags: [
      "Performance Marketing",
      "ROI",
      "PPC",
      "Ecommerce",
      "Conversion",
      "Email",
      "Ads",
      "Restaurants",
    ],
  },
  {
    slug: "content-ai",
    label: "Content & AI",
    matchTags: ["AI", "Content", "Video"],
  },
];

const SLUG_SET = new Set(BLOG_CATEGORIES.map((c) => c.slug));

export function parseBlogCategoryParam(
  raw: string | string[] | undefined
): BlogCategorySlug {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (!value || value === "all") return "all";
  return SLUG_SET.has(value as BlogCategorySlug) ? (value as BlogCategorySlug) : "all";
}

export function postMatchesCategory(post: BlogPost, slug: BlogCategorySlug): boolean {
  if (slug === "all") return true;

  const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (!category?.matchTags.length) return true;

  const postTags = (post.tags ?? []).map((t) => t.toLowerCase());
  return category.matchTags.some((tag) => postTags.includes(tag.toLowerCase()));
}

export function filterPostsByCategory(posts: BlogPost[], slug: BlogCategorySlug): BlogPost[] {
  if (slug === "all") return posts;
  return posts.filter((post) => postMatchesCategory(post, slug));
}

export function getCategoriesWithCounts(posts: BlogPost[]) {
  return BLOG_CATEGORIES.map((category) => ({
    ...category,
    count:
      category.slug === "all"
        ? posts.length
        : posts.filter((post) => postMatchesCategory(post, category.slug)).length,
  })).filter((category) => category.slug === "all" || category.count > 0);
}

export function buildBlogListHref(page: number, category: BlogCategorySlug): string {
  const params = new URLSearchParams();
  if (category !== "all") params.set("category", category);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}
