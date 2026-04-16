import { MetadataRoute } from "next";

const SITE_URL = "https://cyprustattoo.ink";

const AI_CRAWLERS = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Googlebot",
    "Bingbot",
    "Applebot",
    "Applebot-Extended",
    "CCBot",
    "cohere-ai",
    "Meta-ExternalAgent",
    "YouBot",
    "Amazonbot",
    "MistralAI-User",
    "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
            ...AI_CRAWLERS.map((agent) => ({
                userAgent: agent,
                allow: "/",
                disallow: ["/api/"],
            })),
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
