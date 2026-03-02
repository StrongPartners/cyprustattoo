import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galeri | Cyprus Tattoo - Kuzey Kıbrıs Dövme Çalışmaları",
  description:
    "Cyprus Tattoo stüdyosunun gerçek dövme çalışmaları. Kuzey Kıbrıs'ta custom tasarım, realistik, minimalist, blackwork ve geleneksel dövme örnekleri.",
  alternates: { canonical: "https://cyprustattoo.ink/galeri" },
};

const photos = [
  { src: "/gallery/tattoo-1.jpg", alt: "Kuzey Kıbrıs dövme - Cyprus Tattoo çalışması 1" },
  { src: "/gallery/tattoo-2.jpg", alt: "Kuzey Kıbrıs dövme - Cyprus Tattoo çalışması 2" },
  { src: "/gallery/tattoo-3.jpg", alt: "North Cyprus tattoo - Cyprus Tattoo work 3" },
  { src: "/gallery/tattoo-4.jpg", alt: "North Cyprus tattoo - Cyprus Tattoo work 4" },
];

const videos = [
  { src: "/gallery/video-1.mp4", poster: "/gallery/tattoo-1.jpg", label: "Dövme Süreç Videosu 1" },
  { src: "/gallery/video-2.mp4", poster: "/gallery/tattoo-2.jpg", label: "Dövme Süreç Videosu 2" },
];

export default function GaleriPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Portfolyo</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">GALERİ</h1>
          <div className="w-12 h-0.5 bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Kuzey Kıbrıs&apos;ta gerçekleştirdiğimiz özgün dövme çalışmaları.
            Her tasarım, müşterimizin hikâyesini taşıyor.
          </p>
        </div>

        {/* Photo grid */}
        <div className="mb-16">
          <h2 className="text-[#c9a96e] uppercase tracking-widest text-xs mb-6">
            📸 Fotoğraf Galeri
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {photos.map((img, i) => (
              <div key={i} className="gallery-item aspect-square rounded overflow-hidden border border-[#c9a96e]/10 hover:border-[#c9a96e]/30 transition-all">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Video grid */}
        <div className="mb-16">
          <h2 className="text-[#c9a96e] uppercase tracking-widest text-xs mb-6">
            🎬 Video Galeri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

        {/* More coming */}
        <div className="bg-[#111] border border-[#c9a96e]/15 rounded-lg p-8 text-center mb-10">
          <div className="text-[#c9a96e] text-3xl mb-3">✦</div>
          <h3 className="text-white font-bold text-lg mb-2">Daha Fazla Çalışma Yakında</h3>
          <p className="text-white/40 text-sm mb-5">
            Sürekli güncellenen portfolyomuz için takipte kalın.
            Instagram veya WhatsApp&apos;tan en güncel çalışmalarımıza ulaşabilirsiniz.
          </p>
          <a
            href="https://wa.me/9005488910673?text=Merhaba%2C%20çalışmalarınızı%20görmek%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] text-white font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-all hover:bg-[#20b858]"
          >
            WhatsApp&apos;tan Gör
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/50 mb-4 text-sm">Beğendiğin bir stil var mı?</p>
          <a
            href="https://wa.me/9005488910673?text=Merhaba%2C%20dövme%20rezervasyonu%20yapmak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c9a96e] hover:bg-[#e2c88a] text-black font-bold px-8 py-4 rounded text-sm uppercase tracking-widest transition-all"
          >
            Rezervasyon Yap
          </a>
        </div>
      </div>
    </div>
  );
}
