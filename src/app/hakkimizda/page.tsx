import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda | Cyprus Tattoo - Kuzey Kıbrıs Dövme Sanatçısı",
  description:
    "Cyprus Tattoo hakkında. Kuzey Kıbrıs'ın en deneyimli dövme sanatçıları. KKTC dövme stüdyosu hikayemiz, değerlerimiz ve neden bizi seçmelisiniz.",
  alternates: { canonical: "https://cyprustattoo.ink/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Biz Kimiz?</p>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-4">HAKKIMIZDA</h1>
          <div className="w-12 h-0.5 bg-[#c9a96e] mx-auto" />
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] bg-[#111] rounded-2xl border border-[#c9a96e]/15 overflow-hidden">
              <Image
                src="/gallery/tattoo-1.jpg"
                alt="Cyprus Tattoo Studio Stüdyo"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c9a96e] rounded-full flex items-center justify-center text-black font-black text-center p-4 transform rotate-12 shadow-2xl">
              10+ Yıl Deneyim
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">
              Kuzey Kıbrıs&apos;ın
              <br />
              <span className="text-[#c9a96e]">Dövme Kültürüne</span> Yön Veriyoruz
            </h2>
            <p className="text-white/70 text-lg leading-loose mb-6 font-light">
              Cyprus Tattoo, Kuzey Kıbrıs&apos;ın kalbinde, dövme sanatını bir yaşam biçimi olarak gören profesyoneller tarafından kuruldu. Lefkoşa ve Girne başta olmak üzere tüm adaya uluslararası standartlarda hizmet veriyoruz.
            </p>
            <p className="text-white/70 text-lg leading-loose mb-6 font-light">
              Bizim için her dövme bir imzadır. Cildinize işlediğimiz her çizgi, yıllar süren teknik birikimin, sanatsal vizyonun ve en önemlisi sizin hikayenizin birleşimidir. Realistik çalışmalardan ince çizgi sanatına kadar her stilde uzman sanatçılarımızla, KKTC&apos;nin en güvenilir stüdyosu olmanın gururunu yaşıyoruz.
            </p>
            <p className="text-white/70 text-lg leading-loose font-light">
              Stüdyomuzda önceliğimiz her zaman sağlık ve hijyendir. Medikal seviyede sterilizasyon süreçlerimiz ve ödüllü sanatçı kadromuzla, hayalinizdeki tasarımı en güvenli şekilde gerçeğe dönüştürüyoruz.
            </p>
          </div>
        </div>

        {/* Experience & Quality */}
        <div className="bg-[#111] rounded-3xl p-8 sm:p-16 mb-24 border border-[#c9a96e]/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tighter">Neden Cyprus Tattoo?</h2>
            <p className="text-white/40 max-w-xl mx-auto">Biz sadece dövme yapmıyoruz; ömür boyu gururla taşıyacağınız bir sanat eseri sunuyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Uluslararası Standartlar",
                desc: "Kullandığımız tüm pigmentler ve ekipmanlar AB standartlarına uygun, en kaliteli markalardan oluşur. Solmayan renkler ve keskin çizgiler garantimizdir."
              },
              {
                title: "Tam Hijyen Garantisi",
                desc: "İğnelerden boya kaplarına kadar tüm sarf malzemeleri sizin önünüzde açılır ve tek kullanımlıktır. Stüdyo yüzeyleri her işlemden önce ve sonra dezenfekte edilir."
              },
              {
                title: "Custom Tasarım Süreci",
                desc: "Başka kimsede olmayan, sadece size özel bir tasarım mı istiyorsunuz? Sanatçılarımız fikirlerinizi dinler ve anatomik yapınıza en uygun eşsiz tasarımı hazırlar."
              },
              {
                title: "Ücretsiz Danışmanlık",
                desc: "Dövme yaptırma kararı ciddidir. İstediğiniz stil, boyut ve bölge hakkında merak ettiğiniz her şeyi bize sorabilir, profesyonel görüş alabilirsiniz."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center text-[#c9a96e] font-black text-xl border border-[#c9a96e]/20">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values - Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white gold-line">Değerlerimiz</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: "🏆", title: "Kalite", desc: "En iyi mürekkepleri ve ekipmanları kullanarak cilt sağlığını ön planda tutuyoruz." },
              { icon: "💎", title: "Özgünlük", desc: "Her tasarım, sadece size özel. Hiçbir çalışma birebir tekrarlanmaz." },
              { icon: "🛡️", title: "Hijyen", desc: "Medikal standartlarda steril ortam. Tek kullanımlık iğne ve malzeme garantisi." },
              { icon: "🤝", title: "Güven", desc: "Şeffaf fiyatlandırma, dürüst iletişim. Beklentinizi karşılamadan bitirmiyoruz." },
              { icon: "🎨", title: "Sanat", desc: "Dövme sadece bir işlem değil, bir sanat eseri. Her çizgide tutkumuzu hissedeceksiniz." },
              { icon: "⏰", title: "Dakiklik", desc: "Randevu zamanlarına saygı, hızlı dönüş. Vaktinize değer veriyoruz." },
            ].map((v) => (
              <div key={v.title} className="bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-[#c9a96e]/30 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-[#c9a96e] font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#c9a96e]/20 rounded-3xl p-10 sm:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a96e]/5 blur-3xl rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a96e]/5 blur-3xl rounded-full -ml-32 -mb-32" />

          <h3 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Hikayeni Cildine <br /><span className="text-[#c9a96e]">Birlikte İşleyelim</span>
          </h3>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto font-light">
            Kuzey Kıbrıs&apos;ın en çok tercih edilen dövme stüdyosunda yerini ayırtmak için
            bir mesaj uzağındayız.
          </p>
          <a
            href="https://wa.me/9005488910673?text=Merhaba%2C%20hakk%C4%B1m%C4%B1zda%20sayfas%C4%B1n%C4%B1%20okudum%20ve%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c9a96e] hover:bg-[#e2c88a] text-black font-black px-10 py-5 rounded-full text-base uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-[#c9a96e]/30"
          >
            WhatsApp ile Başla
          </a>
        </div>
      </div>
    </div>
  );
}
