import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";
import styles from "./BlogPost.module.css";

const SIDEBAR_CATEGORIES = [
  "SEO",
  "Web Design",
  "Digital Marketing",
  "Branding",
  "Social Media",
  "Marketing",
  "ORM",
  "Advertising",
] as const;

type Props = {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  relatedPosts: BlogPost[];
};

function formatSidebarDate(date: string) {
  if (!date?.trim()) return "Insights";
  return date;
}

function postsForCategory(posts: BlogPost[], category: string, limit = 2) {
  return posts
    .filter((p) => (p.tags ?? []).some((t) => t.toLowerCase() === category.toLowerCase()))
    .slice(0, limit);
}

export default function BlogPostSidebar({ currentPost, allPosts, relatedPosts }: Props) {
  const primaryCategory = currentPost.tags?.[0] ?? "Insights";

  return (
    <aside className={styles.sidebar} aria-label="Blog navigation">
      <div className={`${styles.sidebarBlock} ${styles.sidebarCategories}`}>
        <h2 className={styles.sidebarHeading}>All categories</h2>
        {SIDEBAR_CATEGORIES.map((category) => {
          const categoryPosts = postsForCategory(allPosts, category);
          if (!categoryPosts.length) return null;

          const isActiveCategory = primaryCategory.toLowerCase() === category.toLowerCase();

          return (
            <div key={category} className={styles.categoryGroup}>
              <span
                className={`${styles.categoryLabel} ${isActiveCategory ? styles.categoryLabelActive : ""}`}
              >
                {category}
              </span>
              {categoryPosts.map((p) => {
                const isActive = p.slug === currentPost.slug;
                return (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className={`${styles.sidebarPostLink} ${isActive ? styles.sidebarPostLinkActive : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className={styles.sidebarPostDate}>{formatSidebarDate(p.date)}</span>
                    <p className={styles.sidebarPostTitle}>{p.title}</p>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>

      {relatedPosts.length > 0 ? (
        <div className={styles.sidebarBlock}>
          <h2 className={styles.sidebarHeading}>Related post</h2>
          <div className={styles.relatedList}>
            {relatedPosts.map((rp) => (
              <div key={rp.slug} className={styles.relatedItem}>
                <Link href={`/blog/${rp.slug}`} className={styles.sidebarPostLink}>
                  <span className={styles.sidebarPostDate}>{formatSidebarDate(rp.date)}</span>
                  <p className={styles.sidebarPostTitle}>{rp.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <Link href="/blog" className={styles.backLink}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to blog page
      </Link>
    </aside>
  );
}
