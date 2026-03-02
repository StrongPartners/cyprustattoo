import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://cyprustattoo.ink/sitemap.xml",
    host: "https://cyprustattoo.ink",
  };
}
