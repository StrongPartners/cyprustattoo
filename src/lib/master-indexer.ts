import { submitToIndexNow } from "./indexnow";
import { submitToGoogleIndexing } from "./google-indexing";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = "https://cyprustattoo.ink";

const STATIC_PATHS = ["", "/blog", "/galeri", "/hakkimizda", "/iletisim"];

function buildAllUrls(): string[] {
    const urls: string[] = [];
    for (const locale of ["", "/en"] as const) {
        for (const path of STATIC_PATHS) {
            const url = `${BASE_URL}${locale}${path}` || BASE_URL;
            urls.push(url);
        }
        for (const post of blogPosts) {
            urls.push(`${BASE_URL}${locale}/blog/${post.slug}`);
        }
    }
    return urls;
}

export async function masterIndex(specificUrls?: string[]) {
    const urlsToIndex = specificUrls || buildAllUrls();

    console.log(`Starting Master Indexing for ${urlsToIndex.length} URLs...`);

    const results = {
        indexNow: await submitToIndexNow(urlsToIndex),
        google: await submitToGoogleIndexing(urlsToIndex),
    };

    return results;
}
