import styles from "./BlogPage.module.css";
import { blogPosts } from "../../data/blogPosts";
import Link from "next/link";
import BlogPortfolioVideo from "./BlogPortfolioVideo";
import EditorialBlogGallery from "./EditorialBlogGallery";

export const metadata = {
  title: "Blog | IM Solutions",
  description:
    "Insights, trends, and strategies from IM Solutions across SEO, branding, creative, and technology.",
};

// blogPosts are now loaded from src/data/blogPosts.ts

type Props = {
  searchParams?: Promise<{ page?: string | string[] }> | { page?: string | string[] };
};

export default async function BlogPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const rawPage = resolvedSearchParams?.page;
  const pageParam = Array.isArray(rawPage) ? rawPage[0] : rawPage;
  const parsedPage = Number.parseInt(pageParam ?? "1", 10);
  const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const totalPages = 4;
  const clampedPage = Math.min(Math.max(currentPage, 1), totalPages);

  const postsForPage = blogPosts.filter((p) => (p.page ?? 1) === clampedPage);
  const featuredPosts = postsForPage.slice(0, 3);
  const listedPosts = postsForPage.slice(3);

  return (
    <main className={styles.page}>
      <EditorialBlogGallery posts={featuredPosts} />

      <section className={styles.portfolioSection}>
        <div className={styles.portfolioInner}>
          <div className={styles.portfolioGrid}>
            {listedPosts.map((post) => (
              <article key={post.id} className={styles.portfolioCard}>
                <Link href={`/blog/${post.slug}`} className={styles.portfolioCardLink}>
                  <BlogPortfolioVideo title={post.title} />
                  <div className={styles.portfolioMeta}>
                    <h2 className={styles.portfolioTitle}>{post.title}</h2>
                    <div className={styles.portfolioTags}>
                      {(post.tags ?? ["Blog"]).slice(0, 3).map((tag) => (
                        <span key={tag} className={styles.portfolioTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <nav className={styles.portfolioPagination} aria-label="Blog pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={page === 1 ? "/blog" : `/blog?page=${page}`}
                className={`${styles.portfolioPageNumber} ${page === clampedPage ? styles.portfolioPageNumberActive : ""}`}
                aria-current={page === clampedPage ? "page" : undefined}
              >
                {page}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
