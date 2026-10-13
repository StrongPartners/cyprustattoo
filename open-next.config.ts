import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Every page is prerendered at build time and the site is redeployed on every change, so the
// prerendered HTML is served straight from Workers static assets (read-only cache).
export default defineCloudflareConfig({
    incrementalCache: staticAssetsIncrementalCache,
    enableCacheInterception: true,
});
