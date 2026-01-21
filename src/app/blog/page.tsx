import styles from "./BlogPage.module.css";
import { blogPosts } from "../../data/blogPosts";
import Image from "next/image";

export const metadata = {
  title: "Blog | IM Solutions",
  description:
    "Insights, trends, and strategies from IM Solutions across SEO, branding, creative, and technology.",
};

// blogPosts are now loaded from src/data/blogPosts.ts

export default function BlogPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Our Insights</p>
            <h1>Latest from our blog</h1>
            <p className={styles.lead}>
              Discover trends, strategies, and insights across SEO, digital marketing, design, and technology.
            </p>
          </div>
        </div>
        <div className={styles.heroGlow} aria-hidden />
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.contentWrapper}>
            <div className={styles.postsColumn}>
              <div className={styles.blogGrid}>
                {blogPosts.map((post) => (
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
            </div>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Recent Posts</h3>
                <div className={styles.recentPostsList}>
                  {blogPosts.slice(0, 5).map((post) => (
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
