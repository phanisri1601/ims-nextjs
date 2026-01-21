export const runtime = 'nodejs';

type VoiceAssistantRequest = {
  query?: string;
};

/* =========================
   FULL KNOWLEDGE BASE (UNCHANGED)
========================= */
const knowledgeBase = {
  company_info: {
    name: "IM Solutions",
    type: "Full-service advertising and digital agency",
    founded: "2013",
    location: "Bengaluru, India",
    team_size: "50+",
    offices: ["Bengaluru", "Alwar"],
  },
  journey: {
    "2013": "Founded with a team of 6 experts",
    "2014": "Expanded into BTL activities",
    "2015": "Reached 70+ team members",
    "2016": "Achieved 10,000+ happy customers",
    "2017": "Expanded operations and automated processes",
    "2018": "Formed strategic tie-ups",
    "2019": "Continued growth and innovation",
  },
  core_principles: [
    "Strategy: We define clear paths to accomplish set goals",
    "Creativity: We help businesses stand apart through innovative solutions",
    "Technology: We utilize the latest technology to design and implement solutions",
  ],
  services: {
    online_services: [
      "Digital Marketing Services",
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Optimization",
      "Social Media Marketing",
      "Website Design & Development",
      "Software Design & Development",
      "Geolocation Analytical SMS",
      "Creative Designing",
      "API Integration",
      "E-commerce Solutions",
      "Email Marketing",
      "Mobile Application Development",
      "Real Estate Online Marketing",
      "Display Advertisement",
      "Blog Articles",
      "Classified Portal Management",
      "Press Releases Services",
    ],
    offline_services: [
      "Bus Branding",
      "RWA Activation",
      "BTL Advertising",
      "Mall & Multiplex Advertising",
      "Tech Park Advertising",
      "Airport Advertising",
      "Paper Insertion",
      "Cafe, Gym & Supermarket Advertising",
      "ATM Advertising",
      "Auto Rickshaw Advertising",
      "Magazine Advertising",
      "Parking Lot Advertising",
      "Branding & Re-Branding",
      "Corporate Gifts",
      "Corporate Training",
      "Event Management",
      "FM Campaigns",
      "Fabrications",
      "Hoarding Services",
      "Marketing Collaterals",
      "Start-up Marketing",
      "Photographic Services",
      "PR Services",
      "Printing Services",
      "Retail Advertising",
      "Real Estate Videography",
      "Signage",
      "Washroom Advertising",
    ],
  },
  career_opportunities: [
    "Vice President – Corporate Sales",
    "Visual Content Creator",
    "Business Development Manager",
    "SEO Executive",
    "Social Media Marketing",
    "Web Design and Development",
    "Content Writing",
    "Graphic and Web Designing",
    "Digital Marketing Manager",
    "HR Executive",
  ],
  vision:
    "To be the best advertising company in the world by providing innovative and pertinent advertising solutions that help businesses reach their highest potential.",
  mission: [
    "Create stunning ads to inspire and impact viewers",
    "Develop effective marketing strategies for measurable results",
    "Provide the best advertising solutions for brands",
    "Build collaborations and client network for business excellence",
    "Make a lasting impression in the advertising world",
  ],
  values: [
    "Client-centric approach",
    "High quality standards",
    "Flexibility and reliability",
    "Customizable solutions",
    "Competitive edge with latest trends",
  ],
  blogs: {
    headings: [
      "Modern SEO strategies for AI-powered search",
      "How AI Is Transforming Website Design",
      "Top SEO Trends for 2025",
      "What is RWA Activation and why your business needs it?",
    ],
  },
  contact: {
    corporate_office: {
      address:
        "921, Laxmi Tower, 4th Floor, 5th Main Rd, Sector 7, HSR Layout, Bengaluru",
      phone: "+91-8880564488",
      email: "info@imsolutions.mobi",
    },
  },
};

/* =========================
   HELPERS
========================= */

function isSafeSuggestedPath(path: unknown): path is string {
  return (
    typeof path === "string" &&
    path.startsWith("/") &&
    !path.includes("://") &&
    !path.includes("..")
  );
}

/** 🔑 CRITICAL FIX: Safe JSON extraction */
function extractJson(text: string) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

/* =========================
   API HANDLER
========================= */

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Missing GEMINI_API_KEY" }, { status: 500 });
  }

  const body = (await req.json().catch(() => ({}))) as VoiceAssistantRequest;
  const query = body.query?.trim();

  if (!query) {
    return Response.json({ error: "Missing query" }, { status: 400 });
  }

  const allowedPaths = [
    "/",
    "/about",
    "/services",
    "/services/online",
    "/services/offline",
    "/clients",
    "/careers",
    "/blog",
    "/contact",
  ];

  /* =========================
     PROMPT (STRICT & SAFE)
  ========================= */

  const prompt = `
You are IM Solutions Voice Assistant.

Use ONLY the knowledge below to answer.
Do NOT invent facts.

Rules:
- Respond ONLY with valid JSON
- No markdown
- No extra text
- Keep answer short (1–3 sentences)

JSON format:
{
  "answer": string,
  "suggestedPath": string | null
}

Allowed paths:
${allowedPaths.join(", ")}

Knowledge:
${JSON.stringify(knowledgeBase)}

User question:
${query}
IMPORTANT: Output ONLY JSON.
`.trim();

  /* =========================
     GEMINI CALL (STABLE)
  ========================= */

  const url =
    `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const geminiRes = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 256,
      },
    }),
  });


  if (!geminiRes.ok) {
    const err = await geminiRes.text();
    return Response.json({ error: "Gemini failed", details: err }, { status: 500 });
  }

  const data = await geminiRes.json();
  const rawText =
    data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text).join("") || "";

  /* =========================
     PARSE RESPONSE
  ========================= */

  const parsed = extractJson(rawText);
  const answer =
    typeof parsed?.answer === "string" ? parsed.answer.trim() : "";

  const suggestedPath = isSafeSuggestedPath(parsed?.suggestedPath)
    ? parsed.suggestedPath
    : null;

  if (!answer) {
    return Response.json(
      { answer: "I don't have that information yet.", suggestedPath: null },
      { status: 200 }
    );
  }

  return Response.json(
    {
      answer,
      suggestedPath:
        suggestedPath && allowedPaths.includes(suggestedPath)
          ? suggestedPath
          : null,
    },
    { status: 200 }
  );
}
