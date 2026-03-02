import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galeri | Cyprus Tattoo - Kuzey Kıbrıs Dövme Çalışmaları",
  description:
    "Cyprus Tattoo stüdyosunun gerçek dövme çalışmaları. Kuzey Kıbrıs'ta custom tasarım, realistik, minimalist, blackwork ve geleneksel dövme örnekleri. 40+ özgün çalışma.",
  alternates: { canonical: "https://cyprustattoo.ink/galeri" },
};

const photos = Array.from({ length: 42 }, (_, i) => ({
  src: `/gallery/tattoo-${i + 1}.jpg`,
  alt: `Kuzey Kıbrıs dövme çalışması ${i + 1} - Cyprus Tattoo Studio`,
}));

const videos = [
  { src: "/gallery/video-1.mp4", poster: "/gallery/tattoo-1.jpg", label: "Dövme Süreç Videosu 1" },
  { src: "/gallery/video-2.mp4", poster: "/gallery/tattoo-2.jpg", label: "Dövme Süreç Videosu 2" },
];

export default function GaleriPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Portfolyo</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">GALERİ</h1>
          <div className="w-12 h-0.5 bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Kuzey Kıbrıs&apos;ta gerçekleştirdiğimiz özgün dövme çalışmaları.
            Her tasarım, müşterimizin hikâyesini taşıyor.
          </p>
          <p className="text-[#c9a96e]/70 text-xs mt-2 uppercase tracking-widest">
            {photos.length}+ Özgün Çalışma
          </p>
        </div>

        {/* Photo masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 mb-16">
          {photos.map((img, i) => (
            <div
              key={i}
              className="gallery-item break-inside-avoid mb-3 rounded overflow-hidden border border-[#c9a96e]/10 hover:border-[#c9a96e]/40 transition-all"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Video grid */}
        <div className="mb-16">
          <h2 className="text-[#c9a96e] uppercase tracking-widest text-xs mb-6 text-center">
            🎬 Süreç Videoları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {videos.map((vid, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-[#c9a96e]/15 bg-[#111]">
                <div className="aspect-video">
                  <video
                    src={vid.src}
                    controls
                    muted
                    playsInline
                    poster={vid.poster}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-white/50 text-xs">{vid.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#111] border border-[#c9a96e]/15 rounded-lg p-10">
          <h3 className="text-2xl font-black text-white mb-3">
            Beğendiğin Bir Stil Var mı?
          </h3>
          <p className="text-white/50 text-sm mb-6">
            WhatsApp&apos;tan bize ulaş, sana özel tasarımını birlikte yaratalım.
          </p>
          <a
            href="https://wa.me/9005488910673?text=Merhaba%2C%20galeriyi%20gördüm%20rezervasyon%20yapmak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c9a96e] hover:bg-[#e2c88a] text-black font-bold px-8 py-4 rounded text-sm uppercase tracking-widest transition-all hover:shadow-xl hover:shadow-[#c9a96e]/20"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 32 32">
              <path d="M16.004 3C9.375 3 4 8.373 4 15.003c0 2.122.558 4.112 1.529 5.842L4 29l8.385-1.504A11.95 11.95 0 0016.004 28c6.629 0 12.003-5.374 12.003-11.997C28.007 8.373 22.633 3 16.004 3zm0 21.994a9.955 9.955 0 01-5.085-1.393l-.365-.216-3.784.679.718-3.682-.237-.378A9.953 9.953 0 016.006 15c0-5.516 4.484-10.001 9.998-10.001S26 9.484 26 15.003c0 5.514-4.484 9.998-9.996 9.998z"/>
            </svg>
            WhatsApp Rezervasyon
          </a>
        </div>
      </div>
    </div>
  );
}
