import fs from 'fs';
import path from 'path';

const API_KEY = process.env.GEMINI_API_KEY;
const BLOG_DATA_PATH = path.resolve('src/data/blog-posts.ts');

async function generateBlogPost() {
  console.log('--- AI Blog Generator Started ---');

  if (!API_KEY) {
    console.error('Error: GEMINI_API_KEY is not set');
    process.exit(1);
  }

  // 1. Read existing posts to avoid duplicates
  const fileContent = fs.readFileSync(BLOG_DATA_PATH, 'utf-8');
  const existingSlugs = [...fileContent.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);
  const lastIdMatch = fileContent.match(/id:\s*"(\d+)"/g);
  let nextId = 1;
  if (lastIdMatch) {
    const lastId = Math.max(...lastIdMatch.map(m => parseInt(m.match(/\d+/)[0])));
    nextId = lastId + 1;
  }

  console.log(`Current slug count: ${existingSlugs.length}. Next ID: ${nextId}`);

  // 2. Prepare Prompt
  const prompt = `You are an expert tattoo culture blogger and SEO specialist for "Cyprus Tattoo Ink", the premier tattoo studio in Girne, North Cyprus.
Your goal is to write a highly engaging, professional, and informative blog post that established the studio as a local authority.

CONSTRAINTS:
- Language: Provide content in both TURKISH and ENGLISH.
- Length: The Turkish content MUST be at least 1500 words. The English version should be a faithful translation.
- Tone: Professional, passionate about art, authoritative but welcoming.
- Structure: Use Markdown-like structure (h2, h3, bold, lists). Do NOT include h1 in the content body as it's handled by the UI.
- Uniqueness: DO NOT write about these topics (already covered): ${existingSlugs.join(', ')}.
- Topics to explore: Specific styles (Realism, Traditional, Japanese), psychological aspects of tattooing, detailed Girne travel tips for tattoo seekers, history of tattoos in Cyprus, choosing colors for Mediterranean skin, etc.

OUTPUT FORMAT:
Return ONLY a valid JSON object matching this structure:
{
  "slug": "url-friendly-slug-in-turkish",
  "title": { "tr": "Title in TR (Authority Style)", "en": "Title in EN" },
  "description": { "tr": "Meta description in TR", "en": "Meta description in EN" },
  "category": { "tr": "Category Name (Bakım, Rehber, Sanat, Trendler, Yerel)", "en": "EN Category" },
  "readTime": { "tr": "20 dk", "en": "20 min" },
  "content": { "tr": "FULL CONTENT IN TR (1500+ words, markdown)", "en": "FULL CONTENT IN EN (markdown)" },
  "imageAlt": { "tr": "Alt text in TR", "en": "Alt text in EN" }
}

IMPORTANT: The "content" must be rich, using ## for headers and properly formatted. Focus on high-value keywords like "Kuzey Kıbrıs dövme", "Girne tattoo", "KKTC dövme salonu".`;

  // 3. Call Gemini
  console.log('Requesting content from Gemini (2.0 Flash)...');
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        response_mime_type: 'application/json',
        candidate_count: 1,
        max_output_tokens: 8192,
        temperature: 0.7
      }
    })
  });

  const data = await response.json();
  if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
    console.error('Gemini API Error:', JSON.stringify(data, null, 2));
    process.exit(1);
  }

  const generatedPost = JSON.parse(data.candidates[0].content.parts[0].text);

  // 4. Assign Image & ID
  const imagePool = [
    "/blog/studio-guide-hero.png",
    "/blog/aftercare-guide-hero.png",
    "/blog/first-tattoo-hero.png",
    "/blog/trends-2026-hero.png"
  ];
  const randomImage = imagePool[Math.floor(Math.random() * imagePool.length)];

  const finalPost = {
    id: nextId.toString(),
    ...generatedPost,
    image: randomImage,
    date: new Date().toISOString().split('T')[0]
  };

  // 5. Inject into File
  console.log(`Writing new post: ${finalPost.title.tr}`);

  // Simple injection: before the last '];'
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

  const updatedContent = fileContent.replace(/\];\s*$/, `${newPostString}];`);
  fs.writeFileSync(BLOG_DATA_PATH, updatedContent);

  console.log('--- Success ---');
}

generateBlogPost();
