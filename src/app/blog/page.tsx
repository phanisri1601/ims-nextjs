import styles from "./BlogPage.module.css";
import { blogPosts } from "../../data/blogPosts";
import Link from "next/link";
import EditorialBlogGallery from "./EditorialBlogGallery";
import PortfolioBlogGrid from "./PortfolioBlogGrid";

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
  const gridLeadSlug = "top-seo-trends-2026-what-businesses-need-to-prepare-for";
  const gridLeadPost = clampedPage === 1 ? postsForPage.find((p) => p.slug === gridLeadSlug) : undefined;
  const postsWithoutGridLead = gridLeadPost
    ? postsForPage.filter((p) => p.slug !== gridLeadSlug)
    : postsForPage;
  const featuredPosts = postsWithoutGridLead.slice(0, 3);
  const listedPosts = gridLeadPost
    ? [gridLeadPost, ...postsWithoutGridLead.slice(3)]
    : postsWithoutGridLead.slice(3);

  return (
    <main className={styles.page}>
      <EditorialBlogGallery posts={featuredPosts} />

      <section className={styles.portfolioSection}>
        <div className={styles.portfolioInner}>
          <PortfolioBlogGrid posts={listedPosts} />

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
