export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "callout"; title?: string; text: string };

export type BlogContentSection = {
  heading: string;
  blocks: BlogContentBlock[];
};

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug: string;
  readingTime?: string;
  tags?: string[];
  animatedImages?: { src: string; alt: string }[];
  takeaways?: string[];
  faqs?: { q: string; a: string }[];
  sections?: BlogContentSection[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top SEO Trends for 2026: What You Need to Know",
    excerpt:
      "SEO keeps shifting, and the pace in 2026 is even quicker than last year. Businesses that want consistent visibility need to adjust faster, work smarter, and build strategies around how people now search.",
    image: "/blog_seo.png",
    date: "November 2025",
    author: "IM Solutions",
    slug: "top-seo-trends-2026",
    readingTime: "6 min read",
    tags: ["SEO", "Google", "Content", "2026"],
    animatedImages: [
      { src: "/blog_seo.png", alt: "SEO trends" },
      { src: "/blog_ai_seo.png", alt: "AI-powered SEO" },
      { src: "/wcu_growth.png", alt: "Growth insights" },
    ],
    takeaways: [
      "Build content that answers intent, not just keywords.",
      "Optimize for multi-format results (AI, video, snippets).",
      "Measure brand + conversions, not rankings alone.",
    ],
    sections: [
      {
        heading: "Why SEO is changing faster in 2026",
        blocks: [
          {
            type: "paragraph",
            text: "Search results are becoming more dynamic: AI summaries, short-form video, community answers, and product-led SERPs are compressing the journey from discovery to decision.",
          },
          {
            type: "callout",
            title: "What this means",
            text: "Winning SEO now means designing the entire experience: content quality, site speed, UX, and credibility signals.",
          },
        ],
      },
      {
        heading: "Trends to plan for",
        blocks: [
          {
            type: "list",
            items: [
              "Search intent clusters over single keywords",
              "Topical authority & content hubs",
              "Brand signals (mentions, reviews, links) as ranking accelerators",
              "Technical SEO: CWV, indexation hygiene, structured data",
              "Multimedia SEO: video + images that rank",
            ],
          },
          {
            type: "quote",
            text: "The best SEO strategy in 2026 is to be the most useful answer — consistently.",
            author: "IM Solutions",
          },
        ],
      },
      {
        heading: "A simple action plan",
        blocks: [
          {
            type: "paragraph",
            text: "Start with a technical health check, then build content pillars around your highest-value services. Finally, strengthen trust signals (case studies, reviews, author credibility).",
          },
          {
            type: "list",
            items: [
              "Audit: indexing, CWV, broken links, duplicates",
              "Map: keywords → intent → landing pages",
              "Create: hub pages + supporting articles",
              "Improve: on-page UX, internal linking, CTAs",
              "Track: conversions + assisted conversions",
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: "Is keyword research still important?", a: "Yes — but it’s now more about intent groups and journey stages than single terms." },
      { q: "How long does SEO take to work?", a: "Most sites see meaningful movement in 8–16 weeks, depending on competition and site health." },
    ],
  },
  {
    id: 2,
    title: "Modern SEO Strategies for AI-Powered Search",
    excerpt:
      "The world of SEO is evolving faster than ever, and AI-powered search engines are at the forefront of this transformation. Learn how to optimize for the future of search.",
    image: "/blog_ai_seo.png",
    date: "October 2025",
    author: "IM Solutions",
    slug: "modern-seo-ai-search",
    readingTime: "7 min read",
    tags: ["SEO", "AI Search", "Content"],
    animatedImages: [
      { src: "/blog_ai_seo.png", alt: "AI search" },
      { src: "/blog_content.png", alt: "Content strategy" },
      { src: "/blog_seo.png", alt: "SEO" },
    ],
    takeaways: [
      "Write for clarity and verifiable claims.",
      "Add structured data where it helps users.",
      "Use internal linking to show topical coverage.",
    ],
    sections: [
      {
        heading: "What AI-powered search changes",
        blocks: [
          {
            type: "paragraph",
            text: "AI-powered experiences summarize and compare answers. That means your page must be easy to extract, cite, and trust — not just rank.",
          },
          {
            type: "list",
            items: [
              "Clear headings and concise answers",
              "First-hand examples and proof",
              "Fast pages and clean indexation",
            ],
          },
        ],
      },
      {
        heading: "Content formats that perform",
        blocks: [
          {
            type: "paragraph",
            text: "Mix tutorials, comparisons, checklists, and case studies. The goal is to cover the topic deeply and support multiple search intents.",
          },
          {
            type: "callout",
            title: "Pro tip",
            text: "Add a “Key Takeaways” block near the top of your article — it improves scanning and can improve summary extraction.",
          },
        ],
      },
      {
        heading: "How to measure success",
        blocks: [
          {
            type: "list",
            items: [
              "Leads and pipeline from organic",
              "Engagement: scroll depth, time on page",
              "Non-brand vs brand growth",
              "Top pages that assist conversions",
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: "Do I need AI content?", a: "You need useful content. AI can help draft, but human review, expertise and examples are key." },
    ],
  },
  {
    id: 3,
    title: "How AI is Transforming Website Design: Future-Proofing Your Brand",
    excerpt:
      "Artificial Intelligence isn't coming to web design. It's already here—redefining how we create, interact, and evolve online. Discover the impact on modern design.",
    image: "/wcu_branding.png",
    date: "September 2025",
    author: "IM Solutions",
    slug: "ai-website-design",
    readingTime: "6 min read",
    tags: ["Web Design", "AI", "Brand"],
    animatedImages: [
      { src: "/wcu_branding.png", alt: "Branding" },
      { src: "/image.png", alt: "Design inspiration" },
      { src: "/wcu_marketing.png", alt: "Marketing" },
    ],
    sections: [
      {
        heading: "Design is becoming data-informed",
        blocks: [
          {
            type: "paragraph",
            text: "AI is helping teams test layouts, personalize experiences, and generate variations faster — but the fundamentals still matter: hierarchy, readability, trust, and speed.",
          },
        ],
      },
      {
        heading: "Where to use AI in your website workflow",
        blocks: [
          {
            type: "list",
            items: [
              "Copy drafts and tone alignment",
              "Image optimization and generation",
              "Accessibility checks",
              "User journey analysis and heatmap insights",
            ],
          },
        ],
      },
      {
        heading: "Future-proof checklist",
        blocks: [
          {
            type: "list",
            items: [
              "Mobile-first layout with fast load time",
              "Clear CTAs above the fold",
              "SEO-friendly structure and metadata",
              "Conversion tracking + analytics",
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Use AI to speed up iteration, not to remove strategy.",
      "Optimize UX and performance first — then personalize.",
    ],
  },
  {
    id: 4,
    title: "WordPress vs Webflow vs Custom Code: What's Right for Startups?",
    excerpt:
      "Choosing the right platform to build your website isn't just a technical decision—it's a strategic one. We break down the pros and cons of each approach.",
    image: "/blog_platforms.png",
    date: "August 2025",
    author: "IM Solutions",
    slug: "wordpress-webflow-custom",
    readingTime: "8 min read",
    tags: ["Web", "Startups", "WordPress", "Webflow"],
    animatedImages: [
      { src: "/blog_platforms.png", alt: "Website platforms" },
      { src: "/wcu_branding.png", alt: "Brand" },
      { src: "/wcu_growth.png", alt: "Growth" },
    ],
    sections: [
      {
        heading: "How to choose the right platform",
        blocks: [
          {
            type: "paragraph",
            text: "Start with your real constraints: speed to launch, budget, internal skills, and how often you’ll publish new content.",
          },
          {
            type: "list",
            items: [
              "If you publish weekly → prioritize editor experience",
              "If you need custom integrations → prioritize flexibility",
              "If you need speed → prioritize performance",
            ],
          },
        ],
      },
      {
        heading: "Quick comparison",
        blocks: [
          {
            type: "list",
            items: [
              "WordPress: best ecosystem, needs maintenance",
              "Webflow: fast builds, great design control",
              "Custom: maximum flexibility, higher investment",
            ],
          },
        ],
      },
      {
        heading: "Decision rule",
        blocks: [
          {
            type: "callout",
            title: "Rule of thumb",
            text: "Choose the simplest platform that lets you ship quickly and measure conversions reliably.",
          },
        ],
      },
    ],
    faqs: [
      { q: "Which is best for SEO?", a: "All can rank well if performance and content quality are strong. Custom gives the most control." },
    ],
  },
  {
    id: 5,
    title: "Top 7 ORM Strategies That Actually Work in 2025",
    excerpt:
      "Online reputation management is filtered through search engines, AI assistants, reviews, and social platforms. Here are the strategies that drive real results.",
    image: "/wcu_marketing.png",
    date: "July 2025",
    author: "IM Solutions",
    slug: "orm-strategies-2025",
    readingTime: "6 min read",
    tags: ["ORM", "Brand", "Reviews"],
    animatedImages: [
      { src: "/wcu_marketing.png", alt: "Online reputation" },
      { src: "/wcu_branding.png", alt: "Brand" },
      { src: "/blog_content.png", alt: "Content" },
    ],
    sections: [
      {
        heading: "What ORM really means now",
        blocks: [
          {
            type: "paragraph",
            text: "ORM is no longer just about suppressing negative results — it’s about building a consistent, credible footprint across platforms where people validate your brand.",
          },
        ],
      },
      {
        heading: "7 strategies you can start this week",
        blocks: [
          {
            type: "list",
            items: [
              "Claim and optimize brand profiles",
              "Build review generation into your process",
              "Publish proof: case studies and client wins",
              "Answer FAQs publicly",
              "Strengthen brand search results",
              "Monitor mentions and respond fast",
              "Create a crisis playbook",
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Consistency beats quick fixes.",
      "Reviews + proof content are ORM accelerators.",
    ],
  },
  {
    id: 6,
    title: "Video Shoots That Spark Cravings: The Recipe for Restaurant Marketing Success!",
    excerpt:
      "In the digital-first world, food is no longer just about taste; it's about visual storytelling that ignites cravings. Learn the secrets of successful restaurant marketing.",
    image: "/image copy.png",
    date: "June 2025",
    author: "IM Solutions",
    slug: "restaurant-marketing",
    readingTime: "5 min read",
    tags: ["Video", "Restaurants", "Social"],
    animatedImages: [
      { src: "/image copy.png", alt: "Restaurant video" },
      { src: "/wcu_growth.png", alt: "Growth" },
      { src: "/wcu_marketing.png", alt: "Marketing" },
    ],
    sections: [
      {
        heading: "Why visuals drive restaurant demand",
        blocks: [
          {
            type: "paragraph",
            text: "People choose with their eyes first. Great food videos compress the decision cycle — from craving to visit — in seconds.",
          },
        ],
      },
      {
        heading: "Shot list that works",
        blocks: [
          {
            type: "list",
            items: [
              "Hero shot (steam / sizzle / pour)",
              "Close-ups of texture",
              "Hands plating and serving",
              "Ambience + people enjoying",
              "Menu highlight + pricing cue",
            ],
          },
        ],
      },
      {
        heading: "Distribution checklist",
        blocks: [
          {
            type: "list",
            items: [
              "Reels/Shorts 3–5x per week",
              "Stories daily (behind the scenes)",
              "Local SEO: upload photos often",
              "Run offers with limited-time CTAs",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Revolutionizing Content Creation: How AI is Changing the Game",
    excerpt:
      "Content creation is entering a new era, and Artificial Intelligence is at the forefront of this transformation. Discover how AI is reshaping creative workflows.",
    image: "/blog_content.png",
    date: "May 2025",
    author: "IM Solutions",
    slug: "ai-content-creation",
    readingTime: "7 min read",
    tags: ["AI", "Content", "Marketing"],
    animatedImages: [
      { src: "/blog_content.png", alt: "Content creation" },
      { src: "/blog_ai_seo.png", alt: "AI" },
      { src: "/wcu_growth.png", alt: "Growth" },
    ],
    sections: [
      {
        heading: "What AI changes in content production",
        blocks: [
          {
            type: "paragraph",
            text: "AI speeds up drafts, research summaries, and variations — but strategy, positioning, and brand voice still need humans.",
          },
          {
            type: "callout",
            title: "Keep it real",
            text: "Always add first-hand insights, examples, and a clear CTA. That’s what turns content into leads.",
          },
        ],
      },
      {
        heading: "Where AI helps most",
        blocks: [
          {
            type: "list",
            items: [
              "Topic ideation and outlines",
              "Ad copy variations",
              "Email subject lines",
              "Content repurposing across platforms",
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: "Will AI replace writers?", a: "It will replace repetitive drafting. Brands still need human judgement and a distinct voice." },
    ],
  },
  {
    id: 8,
    title: "The Power of Personalization: How to Create Hyper-Targeted Marketing Campaigns",
    excerpt:
      "Imagine a world where every message, every ad, and every touchpoint feels tailor-made just for you. This isn't the future—it's happening now.",
    image: "/wcu_growth.png",
    date: "April 2025",
    author: "IM Solutions",
    slug: "personalization-marketing",
    readingTime: "6 min read",
    tags: ["Personalization", "Ads", "CRM"],
    animatedImages: [
      { src: "/wcu_growth.png", alt: "Personalization" },
      { src: "/blog_content.png", alt: "Campaign content" },
      { src: "/wcu_marketing.png", alt: "Marketing" },
    ],
    sections: [
      {
        heading: "Personalization without creeping people out",
        blocks: [
          {
            type: "paragraph",
            text: "Good personalization feels helpful, not invasive. Use intent signals and context, and always give users control.",
          },
        ],
      },
      {
        heading: "Campaign building blocks",
        blocks: [
          {
            type: "list",
            items: [
              "Segment by intent (not just demographics)",
              "Personalize creatives by pain point",
              "Landing pages that match the ad promise",
              "Automations: welcome, nurture, retarget",
            ],
          },
        ],
      },
      {
        heading: "Quick wins",
        blocks: [
          {
            type: "list",
            items: [
              "Dynamic headline by keyword group",
              "Email personalization by behavior",
              "Retarget by product/service interest",
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Personalize the message, keep the data minimal.",
      "Always align ad → landing page → CTA.",
    ],
  },
];

export default blogPosts;
