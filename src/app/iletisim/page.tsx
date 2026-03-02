import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Cyprus Tattoo - Rezervasyon & Bilgi",
  description:
    "Cyprus Tattoo ile iletişime geçin. WhatsApp rezervasyon: +90 548 891 0673. Kuzey Kıbrıs dövme stüdyosu. Hızlı yanıt garantisi.",
  alternates: { canonical: "https://cyprustattoo.ink/iletisim" },
};

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Ulaşın</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">İLETİŞİM</h1>
          <div className="w-12 h-0.5 bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Rezervasyon veya bilgi için WhatsApp&apos;tan bize ulaşın.
            Ortalama 10 dakika içinde yanıt veriyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp - Primary */}
          <a
            href="https://wa.me/9005488910673?text=Merhaba%2C%20rezervasyon%20yapmak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#111] border border-[#25d366]/30 hover:border-[#25d366] rounded-lg p-8 text-center transition-all hover:shadow-lg hover:shadow-[#25d366]/10"
          >
            <div className="w-16 h-16 bg-[#25d366]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#25d366]/20 transition-colors">
              <svg width="32" height="32" fill="#25d366" viewBox="0 0 32 32">
                <path d="M16.004 3C9.375 3 4 8.373 4 15.003c0 2.122.558 4.112 1.529 5.842L4 29l8.385-1.504A11.95 11.95 0 0016.004 28c6.629 0 12.003-5.374 12.003-11.997C28.007 8.373 22.633 3 16.004 3zm0 21.994a9.955 9.955 0 01-5.085-1.393l-.365-.216-3.784.679.718-3.682-.237-.378A9.953 9.953 0 016.006 15c0-5.516 4.484-10.001 9.998-10.001S26 9.484 26 15.003c0 5.514-4.484 9.998-9.996 9.998zm5.476-7.484c-.298-.15-1.766-.873-2.04-.972-.273-.099-.472-.149-.671.15-.199.298-.77.972-.944 1.17-.173.2-.348.224-.645.075-.298-.15-1.257-.464-2.394-1.477-.885-.788-1.48-1.762-1.655-2.059-.173-.299-.018-.46.13-.608.134-.133.298-.348.447-.523.15-.174.199-.298.299-.497.1-.199.05-.374-.025-.523-.075-.15-.671-1.618-.92-2.216-.241-.58-.487-.503-.671-.511l-.573-.01a1.098 1.098 0 00-.796.374c-.273.299-1.044 1.021-1.044 2.49 0 1.468 1.069 2.887 1.218 3.086.15.199 2.102 3.209 5.09 4.499.712.307 1.267.49 1.7.628.714.226 1.364.194 1.877.118.573-.085 1.766-.722 2.015-1.42.249-.697.249-1.295.174-1.42-.073-.123-.272-.198-.57-.347z"/>
              </svg>
            </div>
            <h2 className="text-white font-bold text-xl mb-2">WhatsApp</h2>
            <p className="text-[#25d366] font-bold text-lg mb-1">+90 548 891 0673</p>
            <p className="text-white/40 text-xs uppercase tracking-wide">⚡ Hızlı Yanıt · Rezervasyon</p>
            <div className="mt-5 bg-[#25d366] text-black font-bold text-sm px-6 py-2.5 rounded inline-block">
              Şimdi Yaz
            </div>
          </a>

          {/* Telefon */}
          <a
            href="tel:+9005488910673"
            className="group bg-[#111] border border-[#c9a96e]/15 hover:border-[#c9a96e]/40 rounded-lg p-8 text-center transition-all"
          >
            <div className="w-16 h-16 bg-[#c9a96e]/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" fill="none" stroke="#c9a96e" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h2 className="text-white font-bold text-xl mb-2">Telefon</h2>
            <p className="text-[#c9a96e] font-bold text-lg mb-1">+90 548 891 0673</p>
            <p className="text-white/40 text-xs uppercase tracking-wide">Pzt-Cts: 10:00 – 21:00</p>
            <div className="mt-5 border border-[#c9a96e]/30 text-[#c9a96e] font-bold text-sm px-6 py-2.5 rounded inline-block">
              Ara
            </div>
          </a>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: (
                <svg width="24" height="24" fill="none" stroke="#c9a96e" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              ),
              title: "Adres",
              value: "Kuzey Kıbrıs",
              sub: "Detay için WhatsApp",
            },
            {
              icon: (
                <svg width="24" height="24" fill="none" stroke="#c9a96e" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              ),
              title: "Çalışma Saatleri",
              value: "10:00 – 21:00",
              sub: "Pazartesi – Cumartesi",
            },
            {
              icon: (
                <svg width="24" height="24" fill="none" stroke="#c9a96e" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              ),
              title: "Yanıt Süresi",
              value: "~10 Dakika",
              sub: "WhatsApp üzerinden",
            },
          ].map((info) => (
            <div key={info.title} className="bg-[#111] border border-[#c9a96e]/10 rounded-lg p-5 text-center">
              <div className="flex justify-center mb-3">{info.icon}</div>
              <div className="text-[#c9a96e] font-semibold text-sm mb-1">{info.title}</div>
              <div className="text-white font-bold">{info.value}</div>
              <div className="text-white/30 text-xs mt-1">{info.sub}</div>
            </div>
          ))}
        </div>

        {/* SEO text */}
        <div className="bg-[#0d0d0d] border border-[#c9a96e]/10 rounded-lg p-8">
          <h2 className="text-[#c9a96e] font-bold text-lg mb-4">
            Kuzey Kıbrıs Dövme Salonu — Cyprus Tattoo
          </h2>
          <p className="text-white/40 text-sm leading-loose">
            Kuzey Kıbrıs (KKTC) bölgesinde dövme yaptırmak isteyenler için Cyprus Tattoo,
            North Cyprus&apos;un en güvenilir ve profesyonel tattoo stüdyosudur. Custom tasarım dövmeler,
            realistik portre çalışmaları, minimalist fine line dövmeler ve geleneksel tattoo stilleri
            konusunda uzman kadromuzla hizmet veriyoruz. WhatsApp rezervasyon sistemiyle
            hızlı ve kolay randevu almanız mümkün. Kıbrıs tatil dövmesi, KKTC sanat dövmesi veya
            profesyonel dövme için doğru adrestesiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
