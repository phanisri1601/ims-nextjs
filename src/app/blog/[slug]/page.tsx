import Link from "next/link";
import Image from "next/image";
import { blogPosts, type BlogContentBlock, type BlogPost } from "../../../data/blogPosts";
import styles from "../BlogPage.module.css";

type Props = {
  params?: { slug?: string };
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function getRelatedPosts(current: BlogPost, limit = 3) {
  const currentTags = new Set((current.tags ?? []).map((t) => t.toLowerCase()));
  const scored = blogPosts
    .filter((p) => p.slug !== current.slug)
    .map((p) => {
      const tags = (p.tags ?? []).map((t) => t.toLowerCase());
      const score = tags.reduce((acc, t) => acc + (currentTags.has(t) ? 1 : 0), 0);
      return { post: p, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.post.id - a.post.id;
    });

  const nonZero = scored.filter((x) => x.score > 0).map((x) => x.post);
  const fallback = scored.map((x) => x.post);
  return (nonZero.length ? nonZero : fallback).slice(0, limit);
}

function renderBlock(block: BlogContentBlock, key: string) {
  switch (block.type) {
    case "paragraph":
      return <p key={key}>{block.text}</p>;
    case "list":
      return (
        <ul key={key}>
          {block.items.map((item, idx) => (
            <li key={`${key}-${idx}`}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <figure key={key} className={styles.quote}>
          <blockquote>“{block.text}”</blockquote>
          {block.author ? <figcaption>— {block.author}</figcaption> : null}
        </figure>
      );
    case "callout":
      return (
        <div key={key} className={styles.callout}>
          {block.title ? <h3 className={styles.calloutTitle}>{block.title}</h3> : null}
          <p>{block.text}</p>
        </div>
      );
    default:
      return null;
  }
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

  const relatedPosts = getRelatedPosts(post);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.breadcrumb}>
              <Link href="/blog">Blog</Link> <span aria-hidden>→</span> {post.title}
            </p>
            <h1>{post.title}</h1>
            <p className={styles.cardMeta}>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.separator}>·</span>
              <span className={styles.author}>Posted by {post.author}</span>
              {post.readingTime ? (
                <>
                  <span className={styles.separator}>·</span>
                  <span className={styles.author}>{post.readingTime}</span>
                </>
              ) : null}
            </p>
            {post.tags?.length ? (
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <article className={styles.article}>
            <div className={styles.articleCover}>
              <Image
                src={post.image || "/blog_seo.png"}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <p className={styles.cardExcerpt}>{post.excerpt}</p>

            {post.animatedImages?.length ? (
              <section className={styles.animatedGallery}>
                <h2>Highlights</h2>
                <div className={styles.animatedGalleryGrid}>
                  {post.animatedImages.map((img, idx) => (
                    <div
                      key={`${img.src}-${idx}`}
                      className={styles.animatedGalleryItem}
                      style={{ animationDelay: `${idx * 0.12}s` }}
                    >
                      <Image
                        src={img.src || "/blog_seo.png"}
                        alt={img.alt}
                        width={600}
                        height={360}
                        style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {post.takeaways?.length ? (
              <section className={styles.takeawaysSection}>
                <h2>Key takeaways</h2>
                <ul className={styles.takeawaysList}>
                  {post.takeaways.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {post.sections?.length
              ? post.sections.map((section, idx) => (
                  <section key={`${section.heading}-${idx}`} className={styles.contentSection}>
                    <h2>{section.heading}</h2>
                    {section.blocks.map((block, bIdx) => renderBlock(block, `${idx}-${bIdx}`))}
                  </section>
                ))
              : null}

            {post.faqs?.length ? (
              <section className={styles.faqSection}>
                <h2>FAQ</h2>
                <div className={styles.faqList}>
                  {post.faqs.map((f, idx) => (
                    <details key={idx} className={styles.faqItem}>
                      <summary className={styles.faqQuestion}>{f.q}</summary>
                      <div className={styles.faqAnswer}>
                        <p>{f.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            <p className={styles.backLink}>
              <Link href="/blog">← Back to blog</Link>
            </p>
          </article>

          {relatedPosts.length ? (
            <section className={styles.relatedSection}>
              <h2 className={styles.relatedTitle}>Related posts</h2>
              <div className={styles.relatedGrid}>
                {relatedPosts.map((rp) => (
                  <article key={rp.slug} className={styles.blogCard}>
                    <div className={styles.cardImage}>
                      <Image
                        src={rp.image || "/blog_seo.png"}
                        alt={rp.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardMeta}>
                        <span className={styles.date}>{rp.date}</span>
                        <span className={styles.separator}>•</span>
                        <span className={styles.author}>Posted by {rp.author}</span>
                      </div>
                      <h3 className={styles.cardTitle}>{rp.title}</h3>
                      <p className={styles.cardExcerpt}>{rp.excerpt}</p>
                      <Link href={`/blog/${rp.slug}`} className={styles.readMore}>
                        Continue Reading →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  );
}
