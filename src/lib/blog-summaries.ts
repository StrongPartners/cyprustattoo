import { blogPosts, type BlogPost } from "@/data/blog-posts";

/**
 * Everything a card needs, nothing it doesn't. `blog-posts.ts` is ~2 MB because of the
 * article bodies; importing it from a client component shipped all of it to every
 * visitor (homepage included). Server components call these helpers and pass the
 * result down as props, so only the cards on screen reach the browser.
 */
export type BlogSummary = Omit<BlogPost, "content">;

function summarize({ content: _content, ...rest }: BlogPost): BlogSummary {
    void _content;
    return rest;
}

const ordered = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

export function getBlogSummaries(limit?: number): BlogSummary[] {
    return (limit ? ordered.slice(0, limit) : ordered).map(summarize);
}

/** Same category first, newest first, topped up with the latest posts. */
export function getRelatedSummaries(currentSlug: string, categoryTr: string | undefined, limit = 3): BlogSummary[] {
    const pool = ordered.filter((p) => p.slug !== currentSlug);
    const picked = categoryTr ? pool.filter((p) => p.category?.tr === categoryTr) : [];
    for (const p of pool) {
        if (picked.length >= limit) break;
        if (!picked.includes(p)) picked.push(p);
    }
    return picked.slice(0, limit).map(summarize);
}
