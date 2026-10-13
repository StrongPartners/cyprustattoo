import { submitToIndexNow } from "./indexnow";

const BASE_URL = "https://cyprustattoo.ink";

/**
 * Every URL the site publishes, read from its own sitemap. This runs per request on the
 * Worker, so it must not import the blog content (that only exists at build time).
 */
async function buildAllUrls(): Promise<string[]> {
    const res = await fetch(`${BASE_URL}/sitemap.xml`, { headers: { "user-agent": "cyprustattoo-indexer" } });
    if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
    const xml = await res.text();
    return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

export async function masterIndex(specificUrls?: string[]) {
    const urlsToIndex = specificUrls || (await buildAllUrls());

    console.log(`Starting Master Indexing for ${urlsToIndex.length} URLs...`);

    // Google is fed by the sitemap (Search Console). The Indexing API we used to call here is
    // only meant for JobPosting/BroadcastEvent pages and needed googleapis, which does not run
    // on Cloudflare Workers.
    const results = {
        indexNow: await submitToIndexNow(urlsToIndex),
    };

    return results;
}
