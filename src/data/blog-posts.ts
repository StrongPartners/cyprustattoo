import fs from "node:fs";
import path from "node:path";

export interface BlogPost {
  id: string;
  slug: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  content: { tr: string; en: string };
  date: string;
  author: string;
  category: { tr: string; en: string };
  readTime: { tr: string; en: string };
  image: string;
  imageAlt: { tr: string; en: string };
}

/**
 * Posts live as one JSON file each in content/blog/<id>.json (the daily routine adds a file).
 *
 * They are read from disk at build time only: every blog page is prerendered and served from
 * static assets on Cloudflare, so the ~6 MB of article text never ships inside the Worker
 * (it used to be a single 2 MB TypeScript array bundled into the server and, before that,
 * the browser). Never call this from code that runs per request.
 */
let cache: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (cache) return cache;
  const dir = path.join(process.cwd(), "content", "blog");
  cache = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as BlogPost);
  return cache;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
