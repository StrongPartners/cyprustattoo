import { blogPosts } from "@/data/blog-posts";
import { submitToIndexNow } from "@/lib/indexnow";

/**
 * Bu fonksiyon, sitemap.ts'deki mantığı kullanarak tüm URL'leri toplar
 * ve IndexNow'a gönderir.
 */
export async function syncSitemapToIndexNow() {
    const baseUrl = "https://cyprustattoo.ink";

    const urls = [
        baseUrl,
        `${baseUrl}/blog`,
        `${baseUrl}/galeri`,
        `${baseUrl}/hakkimizda`,
        `${baseUrl}/iletisim`,
        ...blogPosts.map((post) => `${baseUrl}/blog/${post.slug}`)
    ];

    console.log(`${urls.length} adet URL IndexNow'a gönderiliyor...`);
    return await submitToIndexNow(urls);
}
