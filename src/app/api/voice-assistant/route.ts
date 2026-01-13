export const runtime = 'nodejs';

type VoiceAssistantRequest = {
  query?: string;
};

const knowledgeBase = {
  company_info: {
    name: 'IM Solutions',
    type: 'Full-service advertising and digital agency',
    founded: '2013',
    location: 'Bengaluru, India',
    team_size: '50+',
    offices: ['Bengaluru', 'Alwar'],
  },
  journey: {
    '2013': 'Founded with a team of 6 experts',
    '2014': 'Expanded into BTL activities',
    '2015': 'Reached 70+ team members',
    '2016': 'Achieved 10,000+ happy customers',
    '2017': 'Expanded operations and automated processes',
    '2018': 'Formed strategic tie-ups',
    '2019': 'Continued growth and innovation',
  },
  core_principles: [
    'Strategy: We define clear paths to accomplish set goals',
    'Creativity: We help businesses stand apart through innovative solutions',
    'Technology: We utilize the latest technology to design and implement solutions',
  ],
  services: {
    online_services: [
      'Digital Marketing Services',
      'Search Engine Optimization (SEO)',
      'Search Engine Marketing (SEM)',
      'Social Media Optimization',
      'Social Media Marketing',
      'Website Design & Development',
      'Software Design & Development',
      'Geolocation Analytical SMS',
      'Creative Designing',
      'API Integration',
      'E-commerce Solutions',
      'Email Marketing',
      'Mobile Application Development',
      'Real Estate Online Marketing',
      'Display Advertisement',
      'Blog Articles',
      'Classified Portal Management',
      'Press Releases Services',
    ],
    offline_services: [
      'Bus Branding',
      'RWA Activation',
      'BTL Advertising',
      'Mall & Multiplex Advertising',
      'Tech Park Advertising',
      'Airport Advertising',
      'Paper Insertion',
      'Cafe, Gym & Supermarket Advertising',
      'ATM Advertising',
      'Auto Rickshaw Advertising',
      'Magazine Advertising',
      'Parking Lot Advertising',
      'Branding & Re-Branding',
      'Corporate Gifts',
      'Corporate Training',
      'Event Management',
      'FM Campaigns',
      'Fabrications',
      'Hoarding Services',
      'Marketing Collaterals',
      'Start-up Marketing',
      'Photographic Services',
      'PR Services',
      'Printing Services',
      'Retail Advertising',
      'Real Estate Videography',
      'Signage',
      'Washroom Advertising',
    ],
  },
  career_opportunities: [
    'Vice President – Corporate Sales',
    'Visual Content Creator',
    'Business Development Manager',
    'SEO Executive',
    'Social Media Marketing',
    'Web Design and Development',
    'Content Writing',
    'Graphic and Web Designing',
    'Digital Marketing Manager',
    'HR Executive',
  ],
  vision:
    'To be the best advertising company in the world by providing innovative and pertinent advertising solutions that help businesses reach their highest potential.',
  mission: [
    'Create stunning ads to inspire and impact viewers',
    'Develop effective marketing strategies for measurable results',
    'Provide the best advertising solutions for brands',
    'Build collaborations and client network for business excellence',
    'Make a lasting impression in the advertising world',
  ],
  values: [
    'Client-centric approach',
    'High quality standards',
    'Flexibility and reliability',
    'Customizable solutions',
    'Competitive edge with latest trends',
  ],
  contact: {
    corporate_office: {
      address:
        '921, Laxmi Tower, 4th Floor, 5th Main Rd, Sector 7, HSR Layout, Bengaluru, Karnataka 560102',
      phone: '+91-8880564488',
      email: 'info@imsolutions.mobi',
    },
    branch_offices: [
      {
        location: 'Alwar',
        address: '214, South West Block, Near Ram Mandir, Alwar, Rajasthan',
      },
      {
        location: 'Surat',
        address:
          '219, Nilkanth Plaza, Near Kiran Chowk, Varachha Road, Surat, Gujarat 395010',
      },
    ],
    social_media: [
      'Facebook',
      'Twitter',
      'LinkedIn',
      'Pinterest',
      'YouTube',
      'Instagram',
    ],
  },
} as const;

function isSafeSuggestedPath(path: unknown): path is string {
  return typeof path === 'string' && path.startsWith('/') && !path.includes('://') && !path.includes('..');
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: 'Missing GEMINI_API_KEY on server.' },
      { status: 500 }
    );
  }

  let body: VoiceAssistantRequest = {};
  try {
    body = (await req.json()) as VoiceAssistantRequest;
  } catch {
    body = {};
  }

  const query = (body.query || '').trim();
  if (!query) {
    return Response.json({ error: 'Missing query.' }, { status: 400 });
  }

  const allowedPaths = [
    '/',
    '/about',
    '/services',
    '/services/online',
    '/services/offline',
    '/clients',
    '/careers',
    '/blog',
    '/contact',
  ];

  const prompt = [
    'You are IM Solutions Voice Assistant.',
    'Answer the user strictly using the provided KNOWLEDGE_BASE. If the knowledge base does not contain the answer, say: "I don\'t have that information yet."',
    'Keep answers short (1-3 sentences) and direct.',
    'Return ONLY valid JSON with keys: answer (string), suggestedPath (string|null).',
    `suggestedPath must be one of: ${allowedPaths.join(', ')} or null.`,
    'KNOWLEDGE_BASE:',
    JSON.stringify(knowledgeBase),
    'USER_QUESTION:',
    query,
  ].join('\n');

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        topP: 0.8,
        maxOutputTokens: 256,
      },
    }),
  });

  if (!res.ok) {
    const raw = await res.text().catch(() => '');
    let message = raw;
    try {
      const parsed = JSON.parse(raw);
      message =
        parsed?.error?.message ||
        parsed?.message ||
        parsed?.error ||
        raw;
    } catch {
      // keep raw
    }

    return Response.json(
      {
        error: `Gemini request failed (HTTP ${res.status}).`,
        details: String(message).slice(0, 2000),
      },
      { status: 500 }
    );
  }

  const data = (await res.json()) as any;
  const rawText: string =
    data?.candidates?.[0]?.content?.parts?.map((p: any) => p?.text).join('') || '';

  let parsed: any = null;
  try {
    parsed = JSON.parse(rawText);
  } catch {
    parsed = null;
  }

  const answer = typeof parsed?.answer === 'string' ? parsed.answer.trim() : '';
  const suggestedPath = isSafeSuggestedPath(parsed?.suggestedPath)
    ? (parsed.suggestedPath as string)
    : null;

  if (!answer) {
    return Response.json(
      {
        answer: "I don't have that information yet.",
        suggestedPath: null,
      },
      { status: 200 }
    );
  }

  const finalSuggestedPath = suggestedPath && allowedPaths.includes(suggestedPath) ? suggestedPath : null;

  return Response.json(
    {
      answer,
      suggestedPath: finalSuggestedPath,
    },
    { status: 200 }
  );
}
