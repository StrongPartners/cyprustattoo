import fs from 'fs';
import path from 'path';

const API_KEY = process.env.GEMINI_API_KEY;
const BLOG_DATA_PATH = path.resolve('src/data/blog-posts.ts');
const POST_COUNT = parseInt(process.env.POST_COUNT || '1');

async function generateSinglePost(existingSlugs, nextId) {
  const studioInfo = `
- Studio Name: Cyprus Tattoo Ink
- Address: Emin Alpkaya Sk Şehit Emin Alpkaya Sokak Çelebi Apartmanı No:1, Girne 9000
- Phone/WhatsApp: +90 548 891 0673
- Website: https://cyprustattoo.ink
- Instagram: https://www.instagram.com/cyprustattoo
- Location: Girne (Kyrenia), North Cyprus
`;

  const prompt = `You are an expert tattoo culture blogger and SEO specialist for "Cyprus Tattoo Ink".
Your goal is to write a highly engaging, 1500+ word, professional, and informative blog post.

STUDIO DETAILS (USE THESE - NEVER USE PLACEHOLDERS):
${studioInfo}

CONSTRAINTS:
- Language: Provide content in both TURKISH and ENGLISH.
- Length: Turkish content MUST be 1500-2000 words. English version must be a full professional translation.
- Tone: High-authority, artistic, and welcoming.
- Structure: Use Markdown (##, ###, bold, lists). Do NOT include h1.
- No Placeholders: DO NOT use brackets like [Address] or placeholder text. Use the actual studio details provided.
- Uniqueness: DO NOT write about these topics: ${existingSlugs.join(', ')}.
- Rich Content: Include sections like "Pro Tips", "Frequently Asked Questions", and detailed "Style Breakdowns".

OUTPUT FORMAT:
Return ONLY a valid JSON object matching this structure:
{
  "slug": "url-friendly-slug-in-turkish",
  "title": { "tr": "Title in TR (Authority Style)", "en": "Title in EN" },
  "description": { "tr": "Meta description in TR", "en": "Meta description in EN" },
  "category": { "tr": "Category Name (Bakım, Rehber, Sanat, Trendler, Yerel)", "en": "EN Category" },
  "readTime": { "tr": "25 dk", "en": "25 min" },
  "content": { "tr": "FULL CONTENT", "en": "FULL CONTENT EN" },
  "imageAlt": { "tr": "Alt text in TR", "en": "Alt text in EN" }
}

IMPORTANT: Ensure the closing section is natural and invites the reader to the studio in Girne using the real contact info.`;

  console.log(`Requesting content for post ID ${nextId} from Gemini (2.0 Flash)...`);
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        response_mime_type: 'application/json',
        candidate_count: 1,
        max_output_tokens: 8192,
        temperature: 0.85
      }
    })
  });

  const data = await response.json();
  if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
    throw new Error('Gemini API Error: ' + JSON.stringify(data, null, 2));
  }

  const generatedPost = JSON.parse(data.candidates[0].content.parts[0].text);

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
    "/blog/studio-checklist-hero.png"
  ];
  const randomImage = imagePool[Math.floor(Math.random() * imagePool.length)];

  return {
    id: nextId.toString(),
    ...generatedPost,
    image: randomImage,
    date: new Date().toISOString().split('T')[0]
  };
}

async function run() {
  console.log(`--- AI Blog Generator Started (Count: ${POST_COUNT}) ---`);

  if (!API_KEY) {
    console.error('Error: GEMINI_API_KEY is not set');
    process.exit(1);
  }

  for (let i = 0; i < POST_COUNT; i++) {
    const fileContent = fs.readFileSync(BLOG_DATA_PATH, 'utf-8');
    const existingSlugs = [...fileContent.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);
    const allIds = [...fileContent.matchAll(/id:\s*"(\d+)"/g)].map(m => parseInt(m[1]));
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

      // Check if we need to add a comma to the previous item
      let updatedContent = fileContent.trim();
      const lastBracketIndex = updatedContent.lastIndexOf('];');

      if (lastBracketIndex !== -1) {
        const leadingContent = updatedContent.substring(0, lastBracketIndex).trim();
        // If the leading content doesn't end with a comma and it's not the start of the array
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
