"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryImages, galleryVideos } from "@/data/assets-data";
import { useLanguage } from "@/components/LanguageContext";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import MotionReveal from "@/components/MotionReveal";
import Parallax from "@/components/Parallax";

type Tile =
    | { kind: "video"; src: string; index: number }
    | { kind: "image"; src: string; index: number };

/** Deal tiles round-robin so column heights stay roughly even. */
function toColumns(tiles: Tile[], count: number): Tile[][] {
    const columns: Tile[][] = Array.from({ length: count }, () => []);
    tiles.forEach((tile, i) => columns[i % count].push(tile));
    return columns;
}

// Alternating signs read as depth: even columns recede, odd ones advance.
const COLUMN_SPEED = [0.18, -0.12, 0.24, -0.08];

export default function GalleryPreview() {
    const { t, localePath } = useLanguage();
    const isDesktop = useIsDesktop();

    const tiles: Tile[] = [
        ...galleryVideos.slice(0, 2).map((src, index) => ({ kind: "video" as const, src, index })),
        ...galleryImages.slice(0, 8).map((src, index) => ({ kind: "image" as const, src, index })),
    ];
    const columns = toColumns(tiles, 4);

    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-[1400px] px-4">
                <MotionReveal>
                    <div className="mb-16 flex flex-col items-end justify-between gap-8 sm:flex-row">
                        <div>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                                {t.gallery.subtitle}
                            </p>
                            <h2 className="text-4xl font-black uppercase leading-none text-white sm:text-6xl">
                                {t.gallery.title}
                            </h2>
                        </div>
                        <Link
                            href={localePath("/galeri")}
                            className="border-b border-primary pb-1 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:border-white hover:text-white"
                        >
                            {t.hero.cta_gallery} →
                        </Link>
                    </div>
                </MotionReveal>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {columns.map((column, colIdx) => (
                        <Parallax
                            key={colIdx}
                            speed={COLUMN_SPEED[colIdx]}
                            disabled={!isDesktop}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-6">
                                {column.map((tile) =>
                                    tile.kind === "video" ? (
                                        <div
                                            key={`vid-${tile.index}`}
                                            className="group relative overflow-hidden rounded-2xl bg-surface shadow-2xl"
                                        >
                                            <video
                                                src={tile.src}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="metadata"
                                                title={`JBA Cyprus Highlight Video ${tile.index + 1}`}
                                                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            key={`img-${tile.index}`}
                                            className="group relative overflow-hidden rounded-2xl shadow-2xl"
                                        >
                                            <Image
                                                src={tile.src}
                                                alt={`JBA Cyprus Portfolio ${tile.index + 1}`}
                                                width={500}
                                                height={700}
                                                loading="lazy"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100">
                                                <div className="flex h-12 w-12 scale-0 items-center justify-center rounded-full bg-white transition-transform duration-500 group-hover:scale-100">
                                                    <span className="text-xl text-black">+</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </Parallax>
                    ))}
                </div>
            </div>
        </section>
    );
}
