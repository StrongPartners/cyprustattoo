import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Cyprus Tattoo - Kuzey Kıbrıs Dövme Sanatçısı",
  description:
    "Cyprus Tattoo hakkında. Kuzey Kıbrıs'ın en deneyimli dövme sanatçıları. Hikayemiz, değerlerimiz ve neden bizi seçmelisiniz.",
  alternates: { canonical: "https://cyprustattoo.ink/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Biz Kimiz?</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">HAKKIMIZDA</h1>
          <div className="w-12 h-0.5 bg-[#c9a96e] mx-auto" />
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <div className="aspect-square bg-[#111] rounded-lg border border-[#c9a96e]/15 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-[#c9a96e]/20 text-7xl mb-4">✦</div>
                <p className="text-white/20 text-sm">Stüdyo Fotoğrafı</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-white mb-5 leading-tight">
              Kuzey Kıbrıs&apos;ta
              <br />
              <span className="text-[#c9a96e]">Dövme Sanatı</span>
            </h2>
            <p className="text-white/60 text-sm leading-loose mb-4">
              Cyprus Tattoo olarak, Kuzey Kıbrıs&apos;ta dövme sanatını en üst seviyeye taşımak için
              çalışıyoruz. Her müşterimizin hikayesini, isteklerini ve bireyselliğini ön planda tutarak
              kalıcı bir sanat eseri ortaya koyuyoruz.
            </p>
            <p className="text-white/60 text-sm leading-loose mb-4">
              Deneyimli sanatçı kadromuzla custom tasarım, realistik portreler, minimalist çizgiler
              ve geleneksel dövme stillerinde yılların birikimini sunuyoruz.
            </p>
            <p className="text-white/60 text-sm leading-loose">
              Stüdyomuzda steril bir ortam, profesyonel ekipman ve samimi bir atmosfer sizi bekliyor.
              North Cyprus&apos;un kalbi gibi, işlerimiz de sonsuza kadar dayanır.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
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
              <div key={v.title} className="service-card bg-[#111] rounded-lg p-5">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-[#c9a96e] font-bold mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#111] border border-[#c9a96e]/20 rounded-lg p-10 text-center">
          <h3 className="text-2xl font-black text-white mb-3">
            Hikayeni Cildinize İşleyelim
          </h3>
          <p className="text-white/50 text-sm mb-6">
            Kuzey Kıbrıs&apos;ın en iyi dövme stüdyosuna hoş geldiniz.
          </p>
          <a
            href="https://wa.me/9005488910673?text=Merhaba%2C%20rezervasyon%20yapmak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c9a96e] hover:bg-[#e2c88a] text-black font-bold px-8 py-4 rounded text-sm uppercase tracking-widest transition-all"
          >
            WhatsApp ile İletişime Geç
          </a>
        </div>
      </div>
    </div>
  );
}
