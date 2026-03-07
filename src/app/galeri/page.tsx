"use client";

import Image from "next/image";
import { galleryImages, galleryVideos } from "@/data/assets-data";
import { useLanguage } from "@/components/LanguageContext";

export default function GaleriPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4">{t.gallery.subtitle}</p>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 uppercase tracking-tighter">{t.gallery.title}</h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            {t.gallery.desc}
          </p>
        </div>

        {/* Video grid - Featured */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-white text-xl font-bold uppercase tracking-widest">{t.gallery.process_videos}</h2>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryVideos.map((vid, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden border border-white/5 bg-surface transition-all hover:border-primary/20 relative">
                <div className="aspect-[9/16] sm:aspect-video relative bg-black">
                  <video
                    src={vid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo masonry grid */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-white text-xl font-bold uppercase tracking-widest">{t.gallery.our_works}</h2>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl border border-white/5 hover:border-primary/20 transition-all break-inside-avoid"
              >
                <Image
                  src={img}
                  alt={`Cyprus Tattoo Portfolio ${i + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest">@cyprustatt00</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center bg-surface border border-primary/10 rounded-[3rem] p-12 sm:p-20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <h3 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            {t.gallery.cta_title}
          </h3>
          <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
            {t.gallery.cta_desc}
          </p>
          <a
            href="https://wa.me/9005488910673"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-primary text-black font-black px-12 py-6 rounded-2xl text-sm uppercase tracking-widest transition-all hover:bg-secondary hover:scale-105 shadow-2xl shadow-primary/20"
          >
            {t.cta_banner.button}
          </a>
        </div>
      </div>
    </div>
  );
}
