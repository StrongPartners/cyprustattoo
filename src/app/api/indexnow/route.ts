import { NextResponse } from "next/server";
import { masterIndex } from "@/lib/master-indexer";

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({}));
        const { urls } = body;

        // Hem Google hem IndexNow (Bing/Yandex) tetiklenir
        const results = await masterIndex(urls);

        const allSuccess = results.indexNow.success;
        // Google başarısı credential yoksa false dönebilir, o yüzden genel başarıyı IndexNow'a bağladık
        // Ancak response içinde detayları döneceğiz.

        return NextResponse.json({
            message: "İndeksleme işlemi tamamlandı.",
            details: results
        });

    } catch (error: any) {
        return NextResponse.json(
            { error: "Sunucu hatası oluştu.", details: error.message },
            { status: 500 }
        );
    }
}
