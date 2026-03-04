import { NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";
import { syncSitemapToIndexNow } from "@/lib/sync-indexnow";

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({}));
        const { urls } = body;

        let result;
        if (urls && Array.isArray(urls)) {
            // Spesifik URL'ler gönderildiyse
            result = await submitToIndexNow(urls);
        } else {
            // Body boşsa veya urls yoksa tüm sitemap'i gönder
            result = await syncSitemapToIndexNow();
        }

        if (result.success) {
            return NextResponse.json({
                message: "İndeksleme isteği başarıyla gönderildi.",
                details: result
            });
        } else {
            return NextResponse.json(
                { error: "İndeksleme isteği başarısız oldu.", details: result },
                { status: 500 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { error: "Sunucu hatası oluştu.", details: error },
            { status: 500 }
        );
    }
}
