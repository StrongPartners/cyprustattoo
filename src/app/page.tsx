import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cyprus Tattoo | Kuzey Kıbrıs Dövme Stüdyosu & Sanatı (KKTC)",
  description:
    "Kuzey Kıbrıs'ın (KKTC) en iyi dövme salonu. Lefkoşa ve Girne'de custom tasarım, realistik ve minimalist dövme. Güvenilir, hijyenik ve profesyonel tattoo sanatı.",
  alternates: { canonical: "https://cyprustattoo.ink" },
};

const services = [
  {
    icon: "✦",
    title: "Custom Tasarım",
    desc: "Sana özel, özgün ve bir daha tekrar edilmeyecek tasarımlar. Hayalindeki dövmeyi birlikte yaratıyoruz.",
    badge: "En Popüler",
  },
  {
    icon: "◆",
    title: "Realistik Dövme",
    desc: "Portre, doğa ve nesnelerin en gerçekçi biçimde cildinize aktarılması. Fotoğraftan dövmeye mükemmel sonuçlar.",
    badge: null,
  },
  {
    icon: "⬡",
    title: "Minimalist & Fine Line",
    desc: "İnce çizgiler ve sade geometrik tasarımlarla modern estetik. Minimal ama güçlü bir duruş.",
    badge: null,
  },
  {
    icon: "★",
    title: "Geleneksel & Neo-Trad",
    desc: "Kalın konturlar, canlı renkler ve zamansız desenlerle klasik dövme sanatı yeniden yorumlandı.",
    badge: null,
  },
  {
    icon: "◉",
    title: "Blackwork & Tribal",
    desc: "Güçlü siyah mürekkep çalışmaları. Tribal, geometrik ve karanlık estetik için mükemmel seçim.",
    badge: null,
  },
  {
    icon: "◈",
    title: "Cover-Up & Düzeltme",
    desc: "Eski veya beğenmediğin dövmelerini yeniden hayata döndürüyoruz. Kapama ve düzeltme uzmanı.",
    badge: null,
  },
];

const galleryImages = [
  { src: "/gallery/tattoo-1.jpg", alt: "Kuzey Kıbrıs dövme çalışması 1 - Cyprus Tattoo" },
  { src: "/gallery/tattoo-2.jpg", alt: "Kuzey Kıbrıs dövme çalışması 2 - Cyprus Tattoo" },
  { src: "/gallery/tattoo-3.jpg", alt: "North Cyprus tattoo work 3 - Cyprus Tattoo Studio" },
  { src: "/gallery/tattoo-4.jpg", alt: "North Cyprus tattoo work 4 - Cyprus Tattoo Studio" },
];

const faqs = [
  {
    q: "Rezervasyon nasıl yapabilirim?",
    a: "WhatsApp üzerinden +90 548 891 0673 numaramıza mesaj atarak kolayca rezervasyon yapabilirsiniz. Müsaitlik durumuna göre en kısa sürede size dönüş yapıyoruz.",
  },
  {
    q: "Dövme yaptırmak ne kadar sürer?",
    a: "Tasarımın büyüklüğüne ve karmaşıklığına bağlıdır. Küçük dövmeler 1-2 saat sürerken, büyük projeler birden fazla seans gerektirebilir.",
  },
  {
    q: "Kendi tasarımımı getirebilir miyim?",
    a: "Evet! Kendi tasarımınızı getirebilir veya hayal ettiğiniz stili anlatabilirsiniz. Sanatçımız en uygun şekilde adapte eder.",
  },
  {
    q: "Dövme sonrası bakım nasıl yapılır?",
    a: "Rezervasyonunuz tamamlandıktan sonra detaylı bakım kılavuzu paylaşılır. Genel olarak ilk 2 haftada güneşten korunma ve nemlendirme önerilir.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a]/90 z-10" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#c9a96e]/5 rounded-full blur-3xl z-10" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#c9a96e]/5 rounded-full blur-3xl z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#c9a96e] uppercase tracking-[0.4em] text-xs sm:text-sm mb-6 font-medium">
            Kuzey Kıbrıs · North Cyprus
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-4 leading-none">
            CYPRUS
            <br />
            <span className="text-[#c9a96e]">TATTOO</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mt-6 mb-10 leading-relaxed">
            Kuzey Kıbrıs&apos;ın en profesyonel dövme stüdyosu. Cildinize sanat işliyoruz —
            custom tasarım, realistik, minimalist ve daha fazlası.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/9005488910673?text=Merhaba%2C%20d%C3%B6vme%20rezervasyonu%20yapmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#c9a96e] hover:bg-[#e2c88a] text-black font-bold px-8 py-4 rounded text-sm uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-[#c9a96e]/30"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16.004 3C9.375 3 4 8.373 4 15.003c0 2.122.558 4.112 1.529 5.842L4 29l8.385-1.504A11.95 11.95 0 0016.004 28c6.629 0 12.003-5.374 12.003-11.997C28.007 8.373 22.633 3 16.004 3zm0 21.994a9.955 9.955 0 01-5.085-1.393l-.365-.216-3.784.679.718-3.682-.237-.378A9.953 9.953 0 016.006 15c0-5.516 4.484-10.001 9.998-10.001S26 9.484 26 15.003c0 5.514-4.484 9.998-9.996 9.998z" />
              </svg>
              WhatsApp Rezervasyon
            </a>
            <Link
              href="/galeri"
              className="inline-flex items-center justify-center gap-2 border border-[#c9a96e]/40 hover:border-[#c9a96e] text-white hover:text-[#c9a96e] font-medium px-8 py-4 rounded text-sm uppercase tracking-widest transition-all"
            >
              Galeriyi Gör
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-12 mt-16">
            {[
              { num: "500+", label: "Mutlu Müşteri" },
              { num: "5★", label: "Ortalama Puan" },
              { num: "10+", label: "Yıl Deneyim" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#c9a96e]">{s.num}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Keşfet</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-[#c9a96e]/50 to-transparent" />
        </div>
      </section>

      {/* ─── WHY US ──────────────────────────────────────────────── */}
      <section className="bg-[#111] py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🛡️", title: "Steril Ortam", desc: "Tek kullanımlık malzeme, medikal standart hijyen" },
            { icon: "🎨", title: "Özgün Tasarım", desc: "Her müşteri için özel hazırlanmış yeni tasarım" },
            { icon: "⚡", title: "Hızlı Randevu", desc: "WhatsApp'tan dakikalar içinde rezervasyon" },
            { icon: "🌍", title: "Uluslararası Standart", desc: "Yurt dışı eğitimli, ödüllü sanatçı kadrosu" },
          ].map((item) => (
            <div key={item.title} className="p-5">
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-[#c9a96e] font-semibold text-sm mb-2">{item.title}</div>
              <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0a0a0a]" id="hizmetler">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Hizmetlerimiz</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white gold-line">
              Ne Yapıyoruz?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="service-card bg-[#111] rounded-lg p-6 relative">
                {s.badge && (
                  <span className="absolute top-4 right-4 bg-[#c9a96e] text-black text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                    {s.badge}
                  </span>
                )}
                <div className="text-[#c9a96e] text-2xl mb-4">{s.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0d0d0d]" id="galeri">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Çalışmalarımız</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white gold-line">Galeri</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item aspect-square rounded overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 text-[#c9a96e] hover:text-white font-medium text-sm uppercase tracking-wide transition-colors"
            >
              Tüm Galeriyi Gör
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── VIDEO SECTION ───────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Sürecimiz</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white gold-line">Video Galeri</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {["/gallery/video-1.mp4", "/gallery/video-2.mp4"].map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-[#c9a96e]/15 aspect-video bg-[#111]">
                <video
                  src={src}
                  controls
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster={`/gallery/tattoo-${i + 1}.jpg`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Nasıl Çalışıyoruz?</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white gold-line">
              Rezervasyon Süreci
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#c9a96e]/20" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "WhatsApp'tan Yaz", desc: "Fikir ve tarih tercihinle bize ulaş" },
                { step: "02", title: "Tasarım Görüşmesi", desc: "Sanatçımızla tasarımı konuşalım" },
                { step: "03", title: "Seansı Planla", desc: "Tarihi belirleyip randevunu oluştur" },
                { step: "04", title: "Dövmeni Yaptır", desc: "Stüdyoya gel, sanatı hisset" },
              ].map((p) => (
                <div key={p.step} className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#111] border-2 border-[#c9a96e]/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#c9a96e] font-black text-lg">{p.step}</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Sıkça Sorulan</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white gold-line">Sorular</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#111] border border-[#c9a96e]/10 rounded-lg p-5">
                <h3 className="text-white font-semibold mb-2 flex items-start gap-2">
                  <span className="text-[#c9a96e] mt-0.5">✦</span>
                  {faq.q}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LATEST BLOG POSTS ──────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Bilgi Merkezi</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white gold-line">
                Dövme Rehberi
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-[#c9a96e] hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold flex items-center gap-2 group"
            >
              Tüm Yazıları Gör
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                slug: "kuzey-kibris-dovme-studyosu-secim-rehberi",
                title: "Dövme Stüdyosu Seçim Rehberi",
                image: "/gallery/tattoo-1.jpg",
                desc: "Kuzey Kıbrıs'ta güvenilir stüdyo seçerken dikkat etmeniz gerekenler."
              },
              {
                slug: "kibris-ikliminde-dovme-bakimi",
                title: "Kıbrıs İkliminde Dövme Bakımı",
                image: "/gallery/tattoo-2.jpg",
                desc: "Güneş, deniz ve nemle doğru baş etme yöntemleri."
              },
              {
                slug: "2026-kibris-dovme-trendleri",
                title: "2026 Dövme Trendleri",
                image: "/gallery/tattoo-3.jpg",
                desc: "Kuzey Kıbrıs'ta en çok talep gören tarzlar ve tasarımlar."
              }
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden transition-all group-hover:border-[#c9a96e]/20">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c9a96e] transition-colors">{post.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">{post.desc}</p>
                    <span className="text-[#c9a96e] text-xs font-bold uppercase tracking-widest">Okumaya Başla →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #c9a96e 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c9a96e]/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-4 leading-tight">
            Hayalindeki Dövme
            <br />
            <span className="text-[#c9a96e]">Bir Adım Uzağında</span>
          </h2>
          <p className="text-white/50 mb-10 leading-relaxed">
            Kuzey Kıbrıs&apos;ın en iyi dövme stüdyosunda yerini ayırt.
            WhatsApp&apos;tan bize ulaş, 10 dakikada rezervasyonunu tamamla.
          </p>
          <a
            href="https://wa.me/9005488910673?text=Merhaba%2C%20rezervasyon%20yapmak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#c9a96e] hover:bg-[#e2c88a] text-black font-black px-10 py-5 rounded text-base uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-[#c9a96e]/30"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32">
              <path d="M16.004 3C9.375 3 4 8.373 4 15.003c0 2.122.558 4.112 1.529 5.842L4 29l8.385-1.504A11.95 11.95 0 0016.004 28c6.629 0 12.003-5.374 12.003-11.997C28.007 8.373 22.633 3 16.004 3zm0 21.994a9.955 9.955 0 01-5.085-1.393l-.365-.216-3.784.679.718-3.682-.237-.378A9.953 9.953 0 016.006 15c0-5.516 4.484-10.001 9.998-10.001S26 9.484 26 15.003c0 5.514-4.484 9.998-9.996 9.998z" />
            </svg>
            Şimdi Rezervasyon Yap
          </a>
          <p className="text-white/30 text-xs mt-4">
            +90 548 891 0673 · Kuzey Kıbrıs
          </p>
        </div>
      </section>
    </>
  );
}
