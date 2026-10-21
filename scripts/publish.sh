#!/usr/bin/env bash
# Publish the current main to production (Cloudflare Workers) and ping IndexNow.
# Run from a clean checkout of origin/main. Needs CLOUDFLARE_API_TOKEN in the environment;
# the account id is looked up from the token when CLOUDFLARE_ACCOUNT_ID is not set.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ -z "${CLOUDFLARE_ACCOUNT_ID:-}" ]; then
  CLOUDFLARE_ACCOUNT_ID=$(curl -fsS -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    https://api.cloudflare.com/client/v4/accounts | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.parse(s).result[0].id))')
  export CLOUDFLARE_ACCOUNT_ID
fi

npm ci --no-audit --no-fund
npx opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion   # Next 15 desteği 21 Eki 2026 bitti; Next 16 geçişine kadar geçici
npx opennextjs-cloudflare deploy

# Give the edge a moment, then tell IndexNow (Bing, Yandex…) about every URL in the sitemap.
sleep 10
curl -fsS -X POST https://cyprustattoo.ink/api/indexnow -H "Content-Type: application/json" -d '{}' >/dev/null \
  && echo "IndexNow pinged" || echo "IndexNow ping failed (site is still deployed)"
