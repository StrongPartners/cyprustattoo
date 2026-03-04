import { submitToIndexNow } from "./indexnow";
import { submitToGoogleIndexing } from "./google-indexing";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = "https://cyprustattoo.ink";

export async function masterIndex(specificUrls?: string[]) {
    const urlsToIndex = specificUrls || [
        BASE_URL,
        `${BASE_URL}/blog`,
        `${BASE_URL}/galeri`,
        `${BASE_URL}/hakkimizda`,
        `${BASE_URL}/iletisim`,
        ...blogPosts.map((post) => `${BASE_URL}/blog/${post.slug}`)
    ];

    console.log(`Starting Master Indexing for ${urlsToIndex.length} URLs...`);

    const results = {
        indexNow: await submitToIndexNow(urlsToIndex),
        google: await submitToGoogleIndexing(urlsToIndex),
    };

    return results;
}
