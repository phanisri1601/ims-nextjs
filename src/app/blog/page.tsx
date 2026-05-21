import styles from "./BlogPage.module.css";
import { blogPosts } from "../../data/blogPosts";
import Image from "next/image";
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
  const recentPosts = [...blogPosts].sort((a, b) => b.id - a.id).slice(0, 5);

  return (
    <main className={styles.page}>
      <EditorialBlogGallery posts={featuredPosts} />

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.contentWrapper}>
            <div className={styles.postsColumn}>
              <div className={styles.blogGrid}>
                {listedPosts.map((post) => (
                  <article key={post.id} className={styles.blogCard}>
                    <div className={styles.cardImage}>
                      <Image
                        src={post.image || "/blog_seo.png"}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardMeta}>
                        <span className={styles.date}>{post.date}</span>
                        <span className={styles.separator}>•</span>
                        <span className={styles.author}>Posted by {post.author}</span>
                      </div>
                      <h2 className={styles.cardTitle}>{post.title}</h2>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>
                      <a href={`/blog/${post.slug}`} className={styles.readMore}>
                        Continue Reading →
                      </a>
                    </div>
                  </article>
                ))}
              </div>


              <nav className={styles.pagination} aria-label="Blog pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <a
                    key={page}
                    href={page === 1 ? "/blog" : `/blog?page=${page}`}
                    className={`${styles.pageNumber} ${page === clampedPage ? styles.pageNumberActive : ""}`}
                    aria-current={page === clampedPage ? "page" : undefined}
                  >
                    {page}
                  </a>
                ))}
              </nav>
            </div>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Recent Posts</h3>
                <div className={styles.recentPostsList}>
                  {recentPosts.map((post) => (
                    <a key={post.id} href={`/blog/${post.slug}`} className={styles.recentPostItem}>
                      <div className={styles.recentPostThumb}>
                        <Image
                          src={post.image || "/blog_seo.png"}
                          alt={post.title}
                          fill
                          sizes="80px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <h4>{post.title}</h4>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
