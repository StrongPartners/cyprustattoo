import { google } from "googleapis";
import { blogPosts } from "@/data/blog-posts";

/**
 * Google Indexing API için gerekli olan JSON anahtar dosyasının içeriği
 * ÇEVRE DEĞİŞKENİNDEN (Process.env.GOOGLE_INDEXING_CREDENTIALS) gelmelidir.
 */
const getGoogleAuth = () => {
    const credentialsJson = process.env.GOOGLE_INDEXING_CREDENTIALS;

    if (!credentialsJson) {
        console.warn("Google Indexing Credentials not found in environment variables.");
        return null;
    }

    try {
        const credentials = JSON.parse(credentialsJson);
        return new google.auth.JWT(
            credentials.client_email,
            undefined,
            credentials.private_key,
            ["https://www.googleapis.com/auth/indexing"],
            undefined
        );
    } catch (error) {
        console.error("Error parsing Google credentials:", error);
        return null;
    }
};

export async function submitToGoogleIndexing(urls: string[]) {
    const auth = getGoogleAuth();
    if (!auth) return { success: false, error: "Auth configuration missing" };

    const indexing = google.indexing("v3");
    const results = [];

    for (const url of urls) {
        try {
            const res = await indexing.urlNotifications.publish({
                auth,
                requestBody: {
                    url: url,
                    type: "URL_UPDATED",
                },
            });
            results.push({ url, success: true, status: res.status });
        } catch (error: any) {
            console.error(`Error indexing ${url} on Google:`, error.message);
            results.push({ url, success: false, error: error.message });
        }
    }

    return { success: true, results };
}
