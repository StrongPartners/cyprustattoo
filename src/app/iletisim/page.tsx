"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function IletisimPage() {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4">{isEn ? "Contact Us" : "Ulaşın"}</p>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 uppercase tracking-tighter">{t.nav.contact}</h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {isEn
              ? "Contact us via WhatsApp for bookings or information. We usually respond within 10 minutes."
              : "Rezervasyon veya bilgi için WhatsApp'tan bize ulaşın. Ortalama 10 dakika içinde yanıt veriyoruz."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* WhatsApp - Primary */}
          <a
            href="https://wa.me/9005488910673"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-surface border border-[#25d366]/20 hover:border-[#25d366] rounded-[2.5rem] p-12 text-center transition-all hover:shadow-2xl hover:shadow-[#25d366]/10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#25d366]/5 rounded-full blur-3xl" />
            <div className="w-20 h-20 bg-[#25d366]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#25d366] group-hover:text-black transition-all">
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h2 className="text-white font-black text-2xl mb-2 uppercase tracking-tight">WhatsApp</h2>
            <p className="text-[#25d366] font-black text-xl mb-4 tracking-wider">+90 548 891 0673</p>
            <p className="text-white/20 text-xs uppercase font-bold tracking-[0.2em]">{isEn ? "⚡ Quick Response · Booking" : "⚡ Hızlı Yanıt · Rezervasyon"}</p>
            <div className="mt-8 bg-[#25d366] text-black font-black text-xs uppercase tracking-widest px-10 py-4 rounded-xl inline-block group-hover:scale-105 transition-transform">
              {isEn ? "Message Now" : "Şimdi Yaz"}
            </div>
          </a>

          {/* Telefon */}
          <a
            href="tel:+9005488910673"
            className="group bg-surface border border-primary/20 hover:border-primary rounded-[2.5rem] p-12 text-center transition-all hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-black transition-all">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 className="text-white font-black text-2xl mb-2 uppercase tracking-tight">{isEn ? "Line" : "Telefon"}</h2>
            <p className="text-primary font-black text-xl mb-4 tracking-wider">+90 548 891 0673</p>
            <p className="text-white/20 text-xs uppercase font-bold tracking-[0.2em]">{isEn ? "Mon-Sat: 10:00 – 21:00" : "Pzt-Cts: 10:00 – 21:00"}</p>
            <div className="mt-8 border border-primary/30 text-primary font-black text-xs uppercase tracking-widest px-10 py-4 rounded-xl inline-block group-hover:bg-primary group-hover:text-black transition-all group-hover:scale-105">
              {isEn ? "Call Now" : "Şimdi Ara"}
            </div>
          </a>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: isEn ? "Address" : "Adres",
              value: isEn ? "North Cyprus" : "Kuzey Kıbrıs",
              sub: isEn ? "Kyrenia & Nicosia" : "Girne & Lefkoşa"
            },
            {
              title: isEn ? "Hours" : "Saatler",
              value: "10:00 – 21:00",
              sub: isEn ? "Monday – Saturday" : "Pazartesi – Cumartesi"
            },
            {
              title: isEn ? "Email" : "E-posta",
              value: "info@cyprustattoo.ink",
              sub: isEn ? "Official Inquiry" : "Kurumsal İletişim"
            },
          ].map((info, i) => (
            <div key={i} className="bg-surface/50 border border-white/5 rounded-[2rem] p-8 text-center backdrop-blur-sm">
              <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4">{info.title}</p>
              <p className="text-white text-lg font-bold mb-1 break-all">{info.value}</p>
              <p className="text-white/20 text-xs font-medium">{info.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
