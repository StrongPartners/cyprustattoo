import { NextResponse } from "next/server";
import { masterIndex } from "@/lib/master-indexer";

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({}));
        const { urls } = body;

        // Hem Google hem IndexNow (Bing/Yandex) tetiklenir
        const results = await masterIndex(urls);

        // Response içinde detayları döneceğiz.
        return NextResponse.json({
            message: "İndeksleme işlemi tamamlandı.",
            details: results
        });

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu";
        return NextResponse.json(
            { error: "Sunucu hatası oluştu.", details: errorMessage },
            { status: 500 }
        );
    }
}
