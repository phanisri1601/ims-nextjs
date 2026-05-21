import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import { blogPosts, type BlogContentBlock, type BlogPost } from "../../../data/blogPosts";
import BlogPortfolioVideo from "../BlogPortfolioVideo";
import styles from "../BlogPage.module.css";

type Props = {
  params?: { slug?: string };
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function extractArticleHtml(html: string) {
  const match = html.match(/<article[\s\S]*?<\/article>/i);
  if (!match) return null;

  let articleHtml = match[0];
  articleHtml = articleHtml.replace(/<script[\s\S]*?<\/script>/gi, "");
  articleHtml = articleHtml.replace(/<style[\s\S]*?<\/style>/gi, "");
  articleHtml = articleHtml.replace(/<noscript[\s\S]*?<\/noscript>/gi, "");
  return articleHtml;
}

async function fetchExternalArticle(post: BlogPost) {
  if (!post.externalUrl) return null;

  try {
    const res = await fetch(post.externalUrl, {
      next: { revalidate: 3600 },
      headers: {
        "user-agent": "Mozilla/5.0",
        accept: "text/html,application/xhtml+xml",
      },
    });

    if (!res.ok) return null;
    const html = await res.text();
    return extractArticleHtml(html);
  } catch {
    return null;
  }
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
  const externalArticleHtml = await fetchExternalArticle(post);

  return (
    <main className={styles.page}>
      <section className={styles.gridSection}>
        <div className="container">
          <article className={styles.article}>
            <BlogPortfolioVideo title={post.title} className={styles.articleCoverVideo} />

            <h1>{post.title}</h1>
            <p className={styles.cardExcerpt}>{post.excerpt}</p>

            {externalArticleHtml ? (
              <section className={styles.externalContent} dangerouslySetInnerHTML={{ __html: externalArticleHtml }} />
            ) : null}

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
              <FAQ
                title="FAQ"
                items={post.faqs.map((f) => ({ question: f.q, answer: f.a }))}
              />
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
                  <article key={rp.slug} className={styles.portfolioCard}>
                    <Link href={`/blog/${rp.slug}`} className={styles.portfolioCardLink}>
                      <BlogPortfolioVideo title={rp.title} />
                      <div className={styles.portfolioMeta}>
                        <h3 className={styles.portfolioTitle}>{rp.title}</h3>
                        <div className={styles.portfolioTags}>
                          {(rp.tags ?? ["Blog"]).slice(0, 3).map((tag) => (
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
            </section>
          ) : null}
        </div>
      </section>
    </main>
  );
}
