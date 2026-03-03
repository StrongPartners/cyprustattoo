"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function HakkimizdaPage() {
  const { t, language } = useLanguage();

  const isEn = language === 'en';

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4">{isEn ? "Who We Are" : "Biz Kimiz?"}</p>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 uppercase tracking-tighter">{t.nav.about}</h1>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-20 mb-32 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] bg-surface rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/05042af7-c7ad-4eab-bb21-08200c6965f4.JPG"
                alt="Cyprus Tattoo Studio"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full flex items-center justify-center text-primary font-black text-center p-6 transform hover:rotate-12 transition-transform shadow-2xl">
              <div className="flex flex-col items-center">
                <span className="text-4xl">12+</span>
                <span className="text-[10px] uppercase tracking-widest">{t.hero.stats_experience}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight uppercase">
              {isEn ? "Pioneering" : "Kuzey Kıbrıs'ın"}
              <br />
              <span className="text-primary italic">{isEn ? "Tattoo Culture" : "Dövme Kültürüne"}</span> {isEn ? "in North Cyprus" : "Yön Veriyoruz"}
            </h2>
            <div className="space-y-8 text-white/50 text-lg sm:text-xl font-light leading-relaxed">
              <p>
                {isEn
                  ? "Cyprus Tattoo was founded in the heart of North Cyprus by professionals who see tattoo art as a way of life. We provide services at international standards throughout the island, especially in Nicosia and Kyrenia."
                  : "Cyprus Tattoo, Kuzey Kıbrıs'ın kalbinde, dövme sanatını bir yaşam biçimi olarak gören profesyoneller tarafından kuruldu. Lefkoşa ve Girne başta olmak üzere tüm adaya uluslararası standartlarda hizmet veriyoruz."}
              </p>
              <p>
                {isEn
                  ? "For us, every tattoo is a signature. Every line we ink on your skin is a combination of years of technical accumulation, artistic vision, and most importantly, your story. We are proud to be the most reliable studio in the TRNC with our expert artists in every style, from realistic works to fine line art."
                  : "Bizim için her dövme bir imzadır. Cildinize işlediğimiz her çizgi, yıllar süren teknik birikimin, sanatsal vizyonun ve en önemlisi sizin hikayenizin birleşimidir. Realistik çalışmalardan ince çizgi sanatına kadar her stilde uzman sanatçılarımızla, KKTC'nin en güvenilir stüdyosu olmanın gururunu yaşıyoruz."}
              </p>
            </div>
          </div>
        </div>

        {/* Quality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            {
              title: isEn ? "Global Standards" : "Dünya Standartları",
              desc: isEn ? "We use top-quality pigments matching EU standards." : "AB standartlarında en iyi pigment ve ekipmanları kullanıyoruz.",
              icon: "🌍"
            },
            {
              title: isEn ? "Full Hygiene" : "Tam Hijyen",
              desc: isEn ? "Medical grade sterilization for your safety." : "Medikal seviyede sterilizasyon ve tek kullanımlık malzemeler.",
              icon: "🛡️"
            },
            {
              title: isEn ? "Custom Art" : "Özgün Sanat",
              desc: isEn ? "Unique designs created specifically for you." : "Sadece size özel, bir eşi daha olmayan tasarımlar.",
              icon: "🎨"
            },
            {
              title: isEn ? "Free Consult" : "Ücretsiz Danışmanlık",
              desc: isEn ? "Expert advice for your next masterpiece." : "Hayalindeki dövme için profesyonel görüş alanı.",
              icon: "🤝"
            },
          ].map((item, i) => (
            <div key={i} className="bg-surface p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all group shadow-xl">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-surface/30 rounded-[3rem] p-12 sm:p-24 border border-white/5 relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-20 uppercase text-center tracking-tight">
              {isEn ? "Our Core Values" : "Temel Değerlerimiz"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: isEn ? "Quality" : "Kalite", desc: isEn ? "Only the best reach our studio." : "En iyi mürekkep ve modern ekipman kullanımı." },
                { title: isEn ? "Authenticity" : "Özgünlük", desc: isEn ? "No copy-paste, only original art." : "Kopya değil, kişiye özel sanatsal yaklaşım." },
                { title: isEn ? "Trust" : "Güven", desc: isEn ? "Transparent pricing, honest work." : "Şeffaf süreçler ve dürüst iletişim." }
              ].map((v, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-2xl font-black text-primary mb-6 uppercase tracking-widest">— {v.title} —</h3>
                  <p className="text-white/40 text-lg leading-relaxed font-light italic">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32">
          <div className="bg-surface rounded-[3rem] p-12 sm:p-24 border border-primary/10 text-center relative overflow-hidden shadow-2xl">
            <h3 className="text-4xl sm:text-7xl font-black text-white mb-8 tracking-tighter uppercase">
              {isEn ? "Ready for your" : "Sanatla Buluşmaya"}
              <br />
              <span className="text-primary">{isEn ? "First Session?" : "Hazır Mısın?"}</span>
            </h3>
            <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
              {isEn
                ? "Contact us now to discuss your ideas and book your slot in the best tattoo studio of North Cyprus."
                : "Hayalindeki dövme için bugün ilk adımı at. WhatsApp üzerinden bize ulaş ve randevunu oluştur."}
            </p>
            <a
              href="https://wa.me/9005488910673"
              className="inline-flex items-center gap-4 bg-primary text-black font-black px-12 py-6 rounded-2xl text-sm uppercase tracking-widest transition-all hover:bg-secondary hover:scale-105 shadow-2xl shadow-primary/20"
            >
              {isEn ? "Start with WhatsApp" : "WhatsApp ile Başla"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
