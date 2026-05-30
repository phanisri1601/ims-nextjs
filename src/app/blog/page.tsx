import styles from "./BlogPage.module.css";
import { blogPosts } from "../../data/blogPosts";
import {
  buildBlogListHref,
  filterPostsByCategory,
  getCategoriesWithCounts,
  parseBlogCategoryParam,
} from "../../data/blogCategories";
import Link from "next/link";
import EditorialBlogGallery from "./EditorialBlogGallery";
import PortfolioBlogGrid from "./PortfolioBlogGrid";
import BlogCategoryFilter from "./BlogCategoryFilter";

export const metadata = {
  title: "Blog | IM Solutions",
  description:
    "Insights, trends, and strategies from IM Solutions across SEO, branding, creative, and technology.",
};

const FILTERED_POSTS_PER_PAGE = 12;
const GRID_LEAD_SLUG = "top-seo-trends-2026-what-businesses-need-to-prepare-for";

type Props = {
  searchParams?:
    | Promise<{ page?: string | string[]; category?: string | string[] }>
    | { page?: string | string[]; category?: string | string[] };
};

export default async function BlogPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const rawPage = resolvedSearchParams?.page;
  const pageParam = Array.isArray(rawPage) ? rawPage[0] : rawPage;
  const parsedPage = Number.parseInt(pageParam ?? "1", 10);
  const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;

  const activeCategory = parseBlogCategoryParam(resolvedSearchParams?.category);
  const isFiltered = activeCategory !== "all";
  const categories = getCategoriesWithCounts(blogPosts);

  let featuredPosts: typeof blogPosts = [];
  let listedPosts: typeof blogPosts = [];
  let totalPages = 4;
  let clampedPage = currentPage;

  if (isFiltered) {
    const filtered = filterPostsByCategory(blogPosts, activeCategory);
    totalPages = Math.max(1, Math.ceil(filtered.length / FILTERED_POSTS_PER_PAGE));
    clampedPage = Math.min(Math.max(currentPage, 1), totalPages);
    const start = (clampedPage - 1) * FILTERED_POSTS_PER_PAGE;
    listedPosts = filtered.slice(start, start + FILTERED_POSTS_PER_PAGE);
  } else {
    clampedPage = Math.min(Math.max(currentPage, 1), totalPages);
    const postsForPage = blogPosts.filter((p) => (p.page ?? 1) === clampedPage);
    const gridLeadPost =
      clampedPage === 1 ? postsForPage.find((p) => p.slug === GRID_LEAD_SLUG) : undefined;
    const postsWithoutGridLead = gridLeadPost
      ? postsForPage.filter((p) => p.slug !== GRID_LEAD_SLUG)
      : postsForPage;
    featuredPosts = postsWithoutGridLead.slice(0, 3);
    listedPosts = gridLeadPost
      ? [gridLeadPost, ...postsWithoutGridLead.slice(3)]
      : postsWithoutGridLead.slice(3);
  }

  const activeCategoryLabel =
    categories.find((c) => c.slug === activeCategory)?.label ?? "All";

  return (
    <main className={styles.page}>
      <section className={styles.categoryFilterSection}>
        <div className={styles.portfolioInner}>
          <BlogCategoryFilter categories={categories} activeCategory={activeCategory} />
        </div>
      </section>

      {!isFiltered && <EditorialBlogGallery posts={featuredPosts} />}

      <section className={styles.portfolioSection}>
        <div className={styles.portfolioInner}>
          {isFiltered && (
            <p className={styles.categoryFilterSummary}>
              Showing <strong>{listedPosts.length}</strong> of{" "}
              <strong>
                {categories.find((c) => c.slug === activeCategory)?.count ?? listedPosts.length}
              </strong>{" "}
              posts in <strong>{activeCategoryLabel}</strong>
              {clampedPage > 1 ? ` · Page ${clampedPage}` : ""}
            </p>
          )}

          {listedPosts.length > 0 ? (
            <PortfolioBlogGrid posts={listedPosts} />
          ) : (
            <div className={styles.categoryEmpty}>
              <p>No posts found in this category yet.</p>
              <Link href="/blog" className={styles.categoryEmptyLink}>
                View all posts
              </Link>
            </div>
          )}

          {totalPages > 1 && (
            <nav className={styles.portfolioPagination} aria-label="Blog pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={buildBlogListHref(page, activeCategory)}
                  className={`${styles.portfolioPageNumber} ${page === clampedPage ? styles.portfolioPageNumberActive : ""}`}
                  aria-current={page === clampedPage ? "page" : undefined}
                >
                  {page}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </section>
    </main>
  );
}
