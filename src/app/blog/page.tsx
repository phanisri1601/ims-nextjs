import styles from "./BlogPage.module.css";

export const metadata = {
  title: "Blog | IM Solutions",
  description:
    "Insights, trends, and strategies from IM Solutions across SEO, branding, creative, and technology.",
};

const recentPosts = [
  {
    title: "Video Shoots That Spark Cravings: The Recipe for Restaurant Marketing Success!",
    image: "/image copy.png",
  },
  {
    title: "Top SEO Trends for 2025: What You Need to Know",
    image: "/blog_seo.png",
  },
  {
    title: "Revolutionizing Content Creation: How AI is Changing the Game",
    image: "/wcu_branding.png",
  },
  {
    title: "The Power of Personalization: Hyper-Targeted Marketing Campaigns",
    image: "/wcu_marketing.png",
  },
  {
    title: "Building Bridges, Not Just Links: The Emotional Blueprint",
    image: "/wcu_growth.png",
  },
];

export default function BlogPage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroImage}>
        <img src="/image.png" alt="Blog hero" />
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.layout}>
            <article className={styles.article}>
              <p className={styles.breadcrumb}>Blogs</p>
              <h1>Top SEO Trends for 2026</h1>
              <p className={styles.intro}>
                SEO keeps shifting, and the pace in 2026 is even quicker than last year. Businesses
                that want consistent visibility need to adjust faster, work smarter, and build strategies
                around how people now search. AI, multimodal search, and SERP features are shaping how
                users find information, which means your approach needs to match those changes.
              </p>
              <p className={styles.intro}>
                For brands serious about growth, teaming up with a trusted SEO company in Bangalore like
                IM Solutions helps you stay aligned with what search engines expect while keeping your
                content and technical setup sharp.
              </p>

              <h2>1. AI-Guided SEO Becomes Standard Practice</h2>
              <p>
                AI is no longer just a useful add-on; it’s part of the day-to-day workflow for content
                planning, keyword research, audits, and forecasting. Tools like ChatGPT, Gemini, Jasper,
                and enterprise-grade SEO suites help teams spot search intent shifts, competitor gaps, and
                new ranking opportunities much faster.
              </p>
              <p>Businesses now lean on AI for:</p>
              <ul>
                <li>Predictive keyword and trend analysis</li>
                <li>Automated, deep on-page reviews</li>
                <li>Keyword grouping and clustering</li>
                <li>Content scoring and topic mapping</li>
                <li>Faster competitor intelligence</li>
              </ul>
              <p>
                The biggest advantage is that your decisions are backed by clear patterns, not guesswork.
                For a deeper look at how AI affects content and SEO strategy, explore our related guide on
                modern SEO strategies for AI-powered search.
              </p>

              <h2>2. Search Generative Experience (SGE) Shapes the New SERP</h2>
              <p>
                Google continues expanding SGE, and the influence on clicks is stronger than ever. Many
                users get a complete answer without scrolling, which means your content needs to be
                structured in a way that helps Google surface it inside these generated summaries.
              </p>
              <p>To stay visible in SGE-focused search:</p>
              <ul>
                <li>Add schema markup to highlight key details</li>
                <li>Write in a clear, conversational tone</li>
                <li>Use FAQ blocks to cover user questions</li>
                <li>Prioritize context, not just keywords</li>
              </ul>
              <p>
                If your content explains topics cleanly, SGE is more likely to pick it up. This is where
                depth, clarity, and structure matter more than ever.
              </p>

              <h2>3. Zero-Click Searches Grow Even Further</h2>
              <p>
                Zero-click searches didn’t slow down in 2025, and 2026 pushes it even further as SERPs
                surface answers directly. To earn visibility, brands need to:
              </p>
              <ul>
                <li>Use schema and structured data aggressively</li>
                <li>Capture People Also Ask intent with concise answers</li>
                <li>Pair informational snippets with strong brand signals</li>
              </ul>
              <p>
                You may not get a click every time, but you can still build authority and brand recall
                when your content is the reference answer.
              </p>
            </article>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Recent Posts</h3>
                <div className={styles.recentList}>
                  {recentPosts.map((post) => (
                    <a key={post.title} className={styles.recentItem} href="#">
                      <div className={styles.thumb}>
                        <img src={post.image} alt={post.title} />
                      </div>
                      <p>{post.title}</p>
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

