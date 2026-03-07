"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryImages, galleryVideos } from "@/data/assets-data";
import { useLanguage } from "@/components/LanguageContext";

export default function GalleryPreview() {
    const { t } = useLanguage();
    // Show first 8 images as preview
    const previewImages = galleryImages.slice(0, 8);

    return (
        <section className="py-24 bg-background">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-end justify-between mb-16 gap-8">
                    <div>
                        <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4">{t.gallery.subtitle}</p>
                        <h2 className="text-4xl sm:text-6xl font-black text-white uppercase leading-none">{t.gallery.title}</h2>
                    </div>
                    <Link
                        href="/galeri"
                        className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1 hover:text-white hover:border-white transition-all"
                    >
                        {t.hero.cta_gallery} →
                    </Link>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
                    {/* Featured Videos */}
                    {galleryVideos.slice(0, 2).map((src, idx) => (
                        <div key={`vid-${idx}`} className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-2xl bg-surface">
                            <video
                                src={src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    ))}
                    {/* Images */}
                    {previewImages.map((src, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-2xl">
                            <Image
                                src={src}
                                alt={`Tattoo Portfolio ${idx + 1}`}
                                width={500}
                                height={700}
                                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                                    <span className="text-black text-xl">+</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
