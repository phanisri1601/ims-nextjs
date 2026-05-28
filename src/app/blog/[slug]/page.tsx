import Link from "next/link";
import type { Metadata } from "next";
import BlogSidebarPostLink from "../BlogSidebarPostLink";
import FAQ from "@/components/FAQ";
import { blogPosts, type BlogContentBlock, type BlogPost } from "@/data/blogPosts";
import BlogPostSidebar from "../BlogPostSidebar";
import BlogPostSplitBanner from "../BlogPostSplitBanner";
import styles from "../BlogPost.module.css";
import articleStyles from "../BlogPage.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found | IM Solutions" };

  return {
    title: `${post.title} | IM Solutions Blog`,
    description: post.excerpt,
  };
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
          <blockquote>&ldquo;{block.text}&rdquo;</blockquote>
          {block.author ? <figcaption>&mdash; {block.author}</figcaption> : null}
        </figure>
      );
    case "callout":
      return (
        <div key={key} className={styles.callout}>
          {block.title ? <h3 className={styles.calloutTitle}>{block.title}</h3> : null}
          <p>{block.text}</p>
        </div>
      );
    case "steps":
      return (
        <div key={key} className={styles.stepsBlock}>
          {block.items.map((step, idx) => (
            <div key={`${key}-step-${idx}`} className={styles.stepItem}>
              <span className={styles.stepNumber}>{step.label}</span>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function parseMarkdownArticle(markdown: string) {
  const lines = markdown.split("\n");
  const sections: { heading: string; blocks: BlogContentBlock[] }[] = [];
  const faqs: { q: string; a: string }[] = [];

  let inFaq = false;
  let currentSection: { heading: string; blocks: BlogContentBlock[] } | null = null;
  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];
  let currentFaq: { q: string; a: string[] } | null = null;

  const flushParagraph = () => {
    if (!currentSection || paragraphBuffer.length === 0) return;
    currentSection.blocks.push({
      type: "paragraph",
      text: paragraphBuffer.join(" ").trim(),
    });
    paragraphBuffer = [];
  };

  const flushList = () => {
    if (!currentSection || listBuffer.length === 0) return;
    currentSection.blocks.push({
      type: "list",
      items: [...listBuffer],
    });
    listBuffer = [];
  };

  const flushFaq = () => {
    if (!currentFaq) return;
    faqs.push({ q: currentFaq.q, a: currentFaq.a.join(" ").trim() });
    currentFaq = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line || line === "---") {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("# FAQs")) {
      flushParagraph();
      flushList();
      inFaq = true;
      continue;
    }

    if (inFaq) {
      if (/^##\s+\d+\./.test(line)) {
        flushFaq();
        currentFaq = { q: line.replace(/^##\s+\d+\.\s*/, "").trim(), a: [] };
      } else if (currentFaq) {
        currentFaq.a.push(line);
      }
      continue;
    }

    if (line.startsWith("# ")) {
      // Top H1 is already used as post title
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      if (currentSection) sections.push(currentSection);
      currentSection = { heading: line.replace(/^##\s+/, "").trim(), blocks: [] };
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      if (!currentSection) currentSection = { heading: "Overview", blocks: [] };
      currentSection.blocks.push({
        type: "callout",
        title: line.replace(/^###\s+/, "").trim(),
        text: "",
      });
      continue;
    }

    if (line.startsWith("* ")) {
      flushParagraph();
      listBuffer.push(line.replace(/^\*\s+/, "").trim());
      continue;
    }

    paragraphBuffer.push(line);
  }

  flushParagraph();
  flushList();
  if (currentSection) sections.push(currentSection);
  flushFaq();

  const normalizedSections = sections
    .map((section) => ({
      ...section,
      blocks: section.blocks
        .map((block) =>
          block.type === "callout" && !block.text
            ? { ...block, text: " " }
            : block
        )
        .filter((block) => {
          if (block.type === "paragraph") return block.text.trim().length > 0;
          if (block.type === "callout") return (block.text ?? "").trim().length >= 0;
          if (block.type === "list") return block.items.length > 0;
          return true;
        }),
    }))
    .filter((section) => section.blocks.length > 0);

  return { sections: normalizedSections, faqs };
}

function defaultArticleSections(post: BlogPost) {
  const category = post.tags?.[0] ?? "Strategy";
  return [
    {
      heading: `Why ${category.toLowerCase()} matters in 2026`,
      blocks: [
        {
          type: "paragraph" as const,
          text: post.excerpt,
        },
        {
          type: "list" as const,
          items: [
            "Clear goals aligned with measurable outcomes",
            "Data-informed decisions instead of guesswork",
            "Consistent execution across channels and teams",
            "Adaptability when market conditions shift",
          ],
        },
      ],
    },
    {
      heading: "Steps to build a sustainable growth strategy",
      blocks: [
        {
          type: "steps" as const,
          items: [
            {
              label: "step 1",
              title: "Assess current position",
              text: "Evaluate performance, market share, operational efficiency, and customer satisfaction to understand your starting point.",
            },
            {
              label: "step 2",
              title: "Define long-term objectives",
              text: "Establish growth targets that align with your capabilities, budget, and market opportunities.",
            },
            {
              label: "step 3",
              title: "Develop strategic initiatives",
              text: "Create targeted initiatives such as market expansion, product innovation, digital transformation, or partnership development.",
            },
            {
              label: "step 4",
              title: "Align teams and leadership",
              text: "Leadership must communicate the strategy clearly and ensure every team understands their role in execution.",
            },
          ],
        },
      ],
    },
    {
      heading: "Benefits for long-term success",
      blocks: [
        {
          type: "list" as const,
          items: [
            "Improved decision-making clarity",
            "Stronger competitive positioning",
            "Better forecasting and resource planning",
            "Enhanced operational efficiency",
            "Increased stakeholder confidence",
            "Long-term organizational resilience",
          ],
        },
        {
          type: "paragraph" as const,
          text: "Organizations that prioritize structured planning are better positioned to navigate uncertainty, seize opportunities, and build lasting success.",
        },
      ],
    },
  ];
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className={styles.notFound}>
        <h1>Post not found</h1>
        <p>The requested post was not found.</p>
        <Link href="/blog">← Back to blog</Link>
      </main>
    );
  }

  const relatedPosts = getRelatedPosts(post);
  const externalArticleHtml = await fetchExternalArticle(post);
  const parsedArticle = post.articleMarkdown ? parseMarkdownArticle(post.articleMarkdown) : null;
  const primaryCategory = post.tags?.[0] ?? "Insights";
  const sections = post.sections?.length
    ? post.sections
    : parsedArticle?.sections?.length
      ? parsedArticle.sections
      : externalArticleHtml
        ? []
        : defaultArticleSections(post);
  const faqs = post.faqs?.length
    ? post.faqs
    : parsedArticle?.faqs?.length
      ? parsedArticle.faqs
      : [];
  const metaParts = [post.date, post.readingTime, post.author].filter(Boolean);

  const bannerImage = post.image || "/blog_seo.png";

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.categoryBadge}>{primaryCategory}</span>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          {metaParts.length > 0 ? (
            <div className={styles.heroMeta}>
              {metaParts.map((part) => (
                <span key={part}>{part}</span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <BlogPostSplitBanner src={bannerImage} alt={post.title} />

      <div className={styles.layout}>
        <BlogPostSidebar currentPost={post} allPosts={blogPosts} relatedPosts={relatedPosts} />

        <article className={styles.article}>
          <p className={styles.intro}>{post.excerpt}</p>

          <div className={styles.prose}>
            {externalArticleHtml ? (
              <section
                className={`${styles.externalContent} ${articleStyles.externalContent}`}
                dangerouslySetInnerHTML={{ __html: externalArticleHtml }}
              />
            ) : null}

            {sections.map((section, idx) => (
              <section key={`${section.heading}-${idx}`} className={styles.contentSection}>
                <h2>{section.heading}</h2>
                {section.blocks.map((block, bIdx) => renderBlock(block, `${idx}-${bIdx}`))}
              </section>
            ))}

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

            {faqs.length ? (
              <div className={styles.faqWrap}>
                <FAQ
                  title="FAQ"
                  variant="plain"
                  animated={false}
                  items={faqs.map((f) => ({ question: f.q, answer: f.a }))}
                />
              </div>
            ) : null}
          </div>

          <div className={styles.ctaBand}>
            <p className={styles.ctaBrand}>IM Solutions.</p>
            <p className={styles.ctaText}>
              We partner with brands to solve complex marketing challenges through strategy, creative,
              and execution. Our approach is practical, data-driven, and focused on measurable results.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Start your growth journey
            </Link>
          </div>

          {relatedPosts.length > 0 ? (
            <section className={styles.mobileRelated} aria-label="Related posts">
              <h2 className={styles.mobileRelatedHeading}>Related post</h2>
              <div className={styles.mobileRelatedGrid}>
                {relatedPosts.map((rp) => (
                  <BlogSidebarPostLink
                    key={rp.slug}
                    post={rp}
                    className={styles.mobileRelatedCard}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </div>
    </main>
  );
}
