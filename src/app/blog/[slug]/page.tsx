import Link from "next/link";
import { blogPosts } from "../../../data/blogPosts";
import styles from "../BlogPage.module.css";

type Props = {
  params?: { slug?: string };
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug ?? "";
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className={styles.page}>
        <div className="container">
          <h1>Post not found</h1>
          <p>The requested post was not found.</p>
          <Link href="/blog">← Back to blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>{post.title}</h1>
            <p className={styles.cardMeta}>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.separator}>·</span>
              <span className={styles.author}>Posted by {post.author}</span>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <article className={styles.article}>
            <div style={{ marginBottom: 20 }}>
              <img src={post.image} alt={post.title} style={{ width: "100%", maxHeight: 420, objectFit: "cover" }} />
            </div>
            <p className={styles.cardExcerpt}>{post.excerpt}</p>
            <p>
              This is a placeholder/dummy page for the post <strong>{post.title}</strong>. Replace this
              with the real article content when available.
            </p>
            <p>
              <Link href="/blog">← Back to blog</Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
