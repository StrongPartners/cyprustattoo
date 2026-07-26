import fs from 'fs';
import path from 'path';

const API_KEY = process.env.ANTHROPIC_API_KEY;
const BLOG_DATA_PATH = path.resolve('src/data/blog-posts.ts');
const POST_COUNT = parseInt(process.env.POST_COUNT || '1');
const MODEL = process.env.CLAUDE_MODEL || 'claude-opus-5';
const RECENT_SLUG_HISTORY = 120;

const REQUIRED_FIELDS = ['slug', 'title', 'description', 'category', 'readTime', 'content', 'imageAlt'];
const REQUIRED_LOCALES = ['tr', 'en'];

const bilingualString = {
  type: 'object',
  additionalProperties: false,
  properties: { tr: { type: 'string' }, en: { type: 'string' } },
  required: ['tr', 'en'],
};

const POST_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    slug: { type: 'string' },
    title: bilingualString,
    description: bilingualString,
    category: bilingualString,
    readTime: bilingualString,
    content: bilingualString,
    imageAlt: bilingualString,
  },
  required: REQUIRED_FIELDS,
};

function buildPrompt(existingSlugs) {
  const recentSlugs = existingSlugs.slice(-RECENT_SLUG_HISTORY);
  const studioInfo = `
- Studio Name: Cyprus Tattoo Ink
- Address: Emin Alpkaya Sk Şehit Emin Alpkaya Sokak Çelebi Apartmanı No:1, Girne 9000
- Phone/WhatsApp: +90 548 891 0673
- Website: https://cyprustattoo.ink
- Instagram: https://www.instagram.com/cyprustattoo
- Location: Girne (Kyrenia), North Cyprus
`;

  return `You are an expert tattoo culture blogger and SEO specialist for "Cyprus Tattoo Ink".
Your goal is to write a highly engaging, 1500+ word, professional, and informative blog post.

STUDIO DETAILS (USE THESE - NEVER USE PLACEHOLDERS):
${studioInfo}

CONSTRAINTS:
- Language: Provide content in both TURKISH and ENGLISH.
- Length: Turkish content MUST be 1500-2000 words. English version must be a full professional translation.
- Tone: High-authority, artistic, and welcoming.
- Structure: Use Markdown (##, ###, bold, lists). Do NOT include h1.
- No Placeholders: DO NOT use brackets like [Address] or placeholder text. Use the actual studio details provided.
- Uniqueness: DO NOT write about the same topic as any of these recent posts: ${recentSlugs.join(', ')}.
- Rich Content: Include sections like "Pro Tips", "Frequently Asked Questions", and detailed "Style Breakdowns".

OUTPUT REQUIREMENTS:
- slug: url-friendly-slug-in-turkish (lowercase, hyphens, no accents)
- category: Choose from Bakım, Rehber, Sanat, Trendler, Yerel (with English translation)
- readTime: format like "25 dk" / "25 min"

IMPORTANT: The closing section must be natural and invite the reader to the studio in Girne using the real contact info.`;
}

function extractText(data) {
  const parts = data?.content || [];
  return parts
    .filter((b) => b?.type === 'text' && typeof b.text === 'string')
    .map((b) => b.text)
    .join('');
}

function validatePost(post) {
  for (const field of REQUIRED_FIELDS) {
    if (post[field] == null) {
      throw new Error(`Generated post missing required field "${field}"`);
    }
    if (field === 'slug') {
      if (typeof post.slug !== 'string' || !post.slug.trim()) {
        throw new Error('Generated post missing/empty slug');
      }
      continue;
    }
    for (const locale of REQUIRED_LOCALES) {
      if (typeof post[field][locale] !== 'string' || post[field][locale].trim().length === 0) {
        throw new Error(`Generated post missing/empty "${field}.${locale}"`);
      }
    }
  }
}

async function callClaude(prompt) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 16000,
      output_config: {
        effort: 'low',
        format: { type: 'json_schema', schema: POST_SCHEMA },
      },
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Anthropic API HTTP ${response.status} ${response.statusText}: ${errorBody}`);
  }

  const data = await response.json();

  if (data.stop_reason === 'refusal') {
    const details = data.stop_details || {};
    throw new Error(
      `Claude refused this generation. category=${details.category ?? 'unknown'} explanation=${details.explanation ?? 'n/a'}`
    );
  }

  if (data.stop_reason === 'max_tokens') {
    throw new Error('Response truncated at max_tokens — raise max_tokens or lower effort.');
  }

  const text = extractText(data);
  if (!text) {
    throw new Error(`Anthropic returned no text content. Full response: ${JSON.stringify(data, null, 2)}`);
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    throw new Error(`Non-JSON response despite json_schema output. First 500 chars: ${text.slice(0, 500)}`);
  }
}

async function generateSinglePost(existingSlugs, nextId) {
  const prompt = buildPrompt(existingSlugs);
  console.log(`Requesting content for post ID ${nextId} from ${MODEL}...`);

  let generatedPost;
  let lastError;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      generatedPost = await callClaude(prompt);
      validatePost(generatedPost);
      if (existingSlugs.includes(generatedPost.slug)) {
        throw new Error(`Generated slug "${generatedPost.slug}" already exists`);
      }
      break;
    } catch (err) {
      lastError = err;
      console.warn(`Attempt ${attempt} failed: ${err.message}`);
      if (attempt < 2) await new Promise((r) => setTimeout(r, 2000));
    }
  }
  if (!generatedPost) throw lastError;

  const imagePool = [
    "/blog/studio-guide-hero.png",
    "/blog/aftercare-guide-hero.png",
    "/blog/first-tattoo-hero.png",
    "/blog/trends-2026-hero.png",
    "/blog/winter-tattoo-benefits-hero.png",
    "/blog/summer-tattoo-hero.png",
    "/blog/pricing-2026-hero.png",
    "/blog/pre-tattoo-prep-hero.png",
    "/blog/fineline-care-hero.png",
    "/blog/coverup-guide-hero.png",
    "/blog/removal-coverup-hero.png",
    "/blog/portfolio-reading-hero.png",
    "/blog/city-guide-hero.png",
    "/blog/tourist-guide-hero.png",
    "/blog/student-budget-hero.png",
    "/blog/studio-checklist-hero.png",
  ];
  const randomImage = imagePool[Math.floor(Math.random() * imagePool.length)];

  return {
    id: nextId.toString(),
    ...generatedPost,
    image: randomImage,
    date: new Date().toISOString().split('T')[0],
  };
}

async function run() {
  console.log(`--- AI Blog Generator Started (Count: ${POST_COUNT}, Model: ${MODEL}) ---`);

  if (!API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY is not set');
    process.exit(1);
  }

  for (let i = 0; i < POST_COUNT; i++) {
    const fileContent = fs.readFileSync(BLOG_DATA_PATH, 'utf-8');
    const existingSlugs = [...fileContent.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
    const allIds = [...fileContent.matchAll(/id:\s*"(\d+)"/g)].map((m) => parseInt(m[1]));
    const nextId = allIds.length > 0 ? Math.max(...allIds) + 1 : 1;

    try {
      const finalPost = await generateSinglePost(existingSlugs, nextId);

      console.log(`Writing new post: ${finalPost.title.tr}`);

      const newPostString = `  {
    id: "${finalPost.id}",
    slug: "${finalPost.slug}",
    title: {
      tr: "${finalPost.title.tr.replace(/"/g, '\\"')}",
      en: "${finalPost.title.en.replace(/"/g, '\\"')}"
    },
    description: {
      tr: "${finalPost.description.tr.replace(/"/g, '\\"')}",
      en: "${finalPost.description.en.replace(/"/g, '\\"')}"
    },
    date: "${finalPost.date}",
    author: "Cyprus Tattoo Specialist",
    category: { tr: "${finalPost.category.tr}", en: "${finalPost.category.en}" },
    readTime: { tr: "${finalPost.readTime.tr}", en: "${finalPost.readTime.en}" },
    image: "${finalPost.image}",
    imageAlt: {
      tr: "${finalPost.imageAlt.tr.replace(/"/g, '\\"')}",
      en: "${finalPost.imageAlt.en.replace(/"/g, '\\"')}"
    },
    content: {
      tr: \`${finalPost.content.tr.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,
      en: \`${finalPost.content.en.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`
    }
  },
`;

      let updatedContent = fileContent.trim();
      const lastBracketIndex = updatedContent.lastIndexOf('];');

      if (lastBracketIndex !== -1) {
        const leadingContent = updatedContent.substring(0, lastBracketIndex).trim();
        const endsWithComma = leadingContent.endsWith(',') || leadingContent.endsWith('[');
        const joiner = endsWithComma ? '' : ',';

        updatedContent = leadingContent + joiner + '\n' + newPostString + '];';
        fs.writeFileSync(BLOG_DATA_PATH, updatedContent);
        console.log(`Post ${i + 1}/${POST_COUNT} pushed successfully.`);
      } else {
        throw new Error('Could not find end of array in blog-posts.ts');
      }
    } catch (error) {
      console.error(`Failed to generate post ${i + 1}:`, error);
      process.exit(1);
    }
  }

  console.log('--- All Posts Generated Successfully ---');
}

run();
