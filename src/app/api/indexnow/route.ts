import { NextResponse } from "next/server";
import { masterIndex } from "@/lib/master-indexer";

export async function GET() {
    return handleIndexing();
}

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({}));
        const { urls } = body;
        return handleIndexing(urls);
    } catch (error) {
        return handleError(error);
    }
}

async function handleIndexing(urls?: string[]) {
    try {
        const results = await masterIndex(urls);
        return NextResponse.json({
            message: "İndeksleme işlemi tamamlandı.",
            details: results
        });
    } catch (error) {
        return handleError(error);
    }
}

function handleError(error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu";
    return NextResponse.json(
        { error: "Sunucu hatası oluştu.", details: errorMessage },
        { status: 500 }
    );
}
