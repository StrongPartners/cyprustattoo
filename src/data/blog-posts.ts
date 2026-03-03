export interface BlogPost {
  id: string;
  slug: string;
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  content: {
    tr: string;
    en: string;
  };
  date: string;
  author: string;
  category: {
    tr: string;
    en: string;
  };
  readTime: string;
  image: string;
  imageAlt: {
    tr: string;
    en: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "kuzey-kibris-dovme-studyosu-secim-rehberi",
    title: {
      tr: "Kuzey Kıbrıs Dövme Stüdyosu Seçim Rehberi: Güvenlik, Hijyen ve Güven",
      en: "North Cyprus Tattoo Studio Selection Guide: Safety, Hygiene, and Trust"
    },
    description: {
      tr: "Kuzey Kıbrıs'ta güvenilir dövme stüdyosu seçmek isteyenler için hijyen, portfolyo, sterilizasyon ve müşteri güveni odaklı kapsamlı rehber.",
      en: "A comprehensive guide focused on hygiene, portfolio, sterilization, and customer trust for choosing a reliable tattoo studio in North Cyprus."
    },
    date: "2026-03-03",
    author: "Cyprus Tattoo",
    category: { tr: "Rehber", en: "Guide" },
    readTime: "5 dk",
    image: "/assets/images/05042af7-c7ad-4eab-bb21-08200c6965f4.JPG",
    imageAlt: { tr: "Hijyen ve güvenlik rehberi", en: "Hygiene and safety guide" },
    content: {
      tr: `Kuzey Kıbrıs'ta dövme yaptırmak isteyen kullanıcıların büyük bölümü aramaya aynı soruyla başlar: “Güvenilir bir stüdyo nasıl anlaşılır?” Bu soru estetikten önce sağlıkla ilgilidir. Çünkü dövme işlemi, cilt bütünlüğünü doğrudan etkileyen ve yanlış uygulandığında enfeksiyon, iz, renk kaybı ve uzun vadeli memnuniyetsizlik yaratabilen kalıcı bir işlemdir. Profesyonel bir stüdyo seçerken dikkat etmeniz gereken temel kriterleri bu rehberde bulabilirsiniz.`,
      en: `Most people looking to get a tattoo in North Cyprus start with the same question: “How can you tell if a studio is reliable?” This question is about health before aesthetics. Because the tattooing process directly affects skin integrity, and when applied incorrectly, it can be a permanent procedure that causes infection, scarring, color loss, and long-term dissatisfaction.`
    }
  },
  {
    id: "2",
    slug: "kibris-ikliminde-dovme-bakimi",
    title: {
      tr: "Kıbrıs İkliminde Dövme Bakımı: Güneş, Deniz ve Nemle Doğru Baş Etme",
      en: "Tattoo Care in Cyprus: Sun, Sea, and Humidity"
    },
    description: {
      tr: "Kıbrıs'ın sıcak ikliminde yeni dövme bakımı nasıl yapılır? Güneş, deniz, havuz, terleme ve nem için adım adım bakım önerileri.",
      en: "How to take care of a new tattoo in the hot climate of Cyprus? Step-by-step recommendations for sun, sea, pool, and humidity."
    },
    date: "2026-03-03",
    author: "Cyprus Tattoo",
    category: { tr: "Bakım", en: "Care" },
    readTime: "4 dk",
    image: "/assets/images/86d47256-e2ab-4289-bcda-8e66baf8fdf7.JPG",
    imageAlt: { tr: "Kıbrıs dövme bakımı", en: "Cyprus tattoo care" },
    content: {
      tr: `Kıbrıs'ta yeni dövme yaptıran biri için iklim faktörü sıradan bir detay değildir. Ada yaşamının en belirgin özellikleri olan yoğun güneş, yaz aylarında artan nem, sık terleme, deniz ve havuz rutini; iyileşme sürecini doğrudan etkiler. Doğru bakım, dövmenin çizgi netliğini ve renk yoğunluğunu koruduğu gibi, gereksiz kabuk kaybı ve tahrişi de azaltır.`,
      en: `For someone getting a new tattoo in Cyprus, the climate factor is not just a detail. The most prominent features of island life—intense sun, high humidity, frequent sweating—directly affect the healing process.`
    }
  },
  {
    id: "3",
    slug: "2026-kibris-dovme-trendleri",
    title: {
      tr: "2026 Kıbrıs Dövme Trendleri: En Çok Talep Gören Tarzlar ve Tasarım Yönleri",
      en: "2026 Cyprus Tattoo Trends: Most Demanded Styles"
    },
    description: {
      tr: "Kıbrıs'ta 2026 dövme trendleri neler? Fine line, black and grey realism, minimalist ve cover-up trendlerini detaylı inceleyin.",
      en: "What are the 2026 tattoo trends in Cyprus? Examine fine line, black and grey realism, minimalist, and cover-up trends."
    },
    date: "2026-03-03",
    author: "Cyprus Tattoo",
    category: { tr: "Trendler", en: "Trends" },
    readTime: "4 dk",
    image: "/assets/images/66e60aa7-e0e8-431c-a061-1e610c5f81ef.JPG",
    imageAlt: { tr: "2026 Trend dövmeler", en: "2026 Trend tattoos" },
    content: {
      tr: `Dövme trendleri her yıl değişse de Kıbrıs gibi çok kültürlü pazarlarda trendler yalnızca sosyal medya etkisiyle şekillenmez. Turizm, öğrenci nüfusu, sahil yaşamı ve uluslararası sanatçı etkisi de estetik tercihleri dönüştürür. İşte 2026 yılında Kıbrıs'ta en çok göreceğimiz dövme stilleri.`,
      en: `Although tattoo trends change every year, in multicultural markets like Cyprus, trends are not shaped solely by social media influence. Tourism, student population, and coastal life also transform aesthetic preferences.`
    }
  },
  {
    id: "4",
    slug: "kibris-dovme-fiyatlari-2026",
    title: {
      tr: "Kıbrıs Dövme Fiyatları 2026: Bütçe Planlaması ve Maliyet Mantığı",
      en: "Cyprus Tattoo Prices 2026: Budget Planning"
    },
    description: {
      tr: "Kıbrıs'ta dövme fiyatları nasıl belirlenir? Boyut, sanatçı deneyimi, seans süresi ve hijyen altyapısının fiyata etkisini öğrenin.",
      en: "How are tattoo prices determined in Cyprus? Learn about the effect of size, artist experience, and hygiene on cost."
    },
    date: "2026-03-03",
    author: "Cyprus Tattoo",
    category: { tr: "Fiyatlar", en: "Prices" },
    readTime: "5 dk",
    image: "/assets/images/6f90a71c-4f71-4604-a7b5-be1f14377e6a.JPG",
    imageAlt: { tr: "Fiyat ve bütçe planlama", en: "Price and budget planning" },
    content: {
      tr: `Kıbrıs'ta dövme fiyatları, kullanıcıların en çok merak ettiği konuların başındadır. Ancak fiyatı sadece rakam olarak değil; kalite, hijyen ve sanat seviyesiyle karşılaştırmak gerekir. Başarılı bir fiyatlandırma mantığı, işlemin neden belli bir maliyeti olduğunu anlamaktan geçer.`,
      en: `The subject of tattoo prices in Cyprus is a top curiosity. However, price should be compared with quality, hygiene, and artistic level rather than just figures.`
    }
  },
  {
    id: "5",
    slug: "kis-aylarinda-dovme-yaptirmak",
    title: {
      tr: "Kış Aylarında Dövme Yaptırmak Neden Daha Mantıklı?",
      en: "Why Winter is Better for Getting a Tattoo"
    },
    description: {
      tr: "Kıbrıs'ta dövme için en iyi mevsim hangisi? Kış aylarında dövme yaptırmanın iyileşme ve güneşten korunma avantajlarını keşfedin.",
      en: "What is the best season for a tattoo in Cyprus? Discover the healing advantages of winter months."
    },
    date: "2026-03-03",
    author: "Cyprus Tattoo",
    category: { tr: "Rehber", en: "Guide" },
    readTime: "3 dk",
    image: "/assets/images/9eae8f4a-754d-493f-b410-ce40c9208ebc.JPG",
    imageAlt: { tr: "Kışın dövme yaptırmanın avantajları", en: "Benefits of getting a tattoo in winter" },
    content: {
      tr: `Kıbrıs'ta dövme yaptırmak için en doğru mevsim sorulduğunda çoğu kişi yazı düşünür. Oysa profesyonel bakışla değerlendirildiğinde kış ayları çoğu kullanıcı için daha avantajlıdır. Bunun temel sebebi, dövme sonrası bakım sürecinin daha kolay yönetilmesidir. Güneş maruziyeti azalır, deniz-havuz baskısı düşer ve terleme daha kontrollü hale gelir.`,
      en: `When asked about the right season to get a tattoo in Cyprus, most think of summer. However, winter is more advantageous for most users due to easier aftercare management.`
    }
  },
  {
    id: "6",
    slug: "dovme-sonrasi-iyilesme-sureci",
    title: {
      tr: "Dövme Sonrası İyileşme Süreci: Gün Gün Bakım Takvimi",
      en: "Tattoo Healing Process: Day-by-Day Care"
    },
    description: {
      tr: "Yeni dövme sonrası bakım nasıl olmalı? İlk gün, ilk hafta ve ilk ay için pratik ve anlaşılır bakım takvimi burada.",
      en: "How should post-tattoo care be? A practical day-by-day care calendar for the first day, week, and month."
    },
    date: "2026-03-03",
    author: "Cyprus Tattoo",
    category: { tr: "Bakım", en: "Care" },
    readTime: "5 dk",
    image: "/assets/images/6ed7a27a-85bc-4286-a979-373854caf003.JPG",
    imageAlt: { tr: "İyileşme süreci takvimi", en: "Healing process calendar" },
    content: {
      tr: `Dövme sonrası bakım hakkında içerik arayan kullanıcıların büyük bölümü aslında zamana göre cevap ister. Genel tavsiyeler faydalıdır ama yeterli değildir; insanlar ilk gün ne yapılacağını, üçüncü gün kaşıntının normal olup olmadığını ve ikinci haftada ne beklenmesi gerektiğini bilmek ister.`,
      en: `Most users looking for post-tattoo care want time-based answers. General advice is useful, but people want to know what to do on day one, day three, and beyond.`
    }
  },
  {
    id: "7",
    slug: "renkli-vs-siyah-beyaz-dovme-kibris",
    title: {
      tr: "Renkli Dövme mi Siyah-Beyaz mı? Kıbrıs Güneşinde Pigment Dayanıklılığı",
      en: "Color vs. Black & White Tattoos in the Cyprus Sun"
    },
    description: {
      tr: "Kıbrıs güneşinde hangi dövme daha dayanıklı? Renkli ve siyah-beyaz dövmelerin pigment, bakım ve solma farklarını inceleyin.",
      en: "Which tattoo is more durable in the Cyprus sun? Examine pigment, care, and fading differences."
    },
    date: "2026-03-03",
    author: "Cyprus Tattoo",
    category: { tr: "Sanat", en: "Art" },
    readTime: "4 dk",
    image: "/assets/images/3c57da63-0063-40e0-8b25-6bf83e71ca81.JPG",
    imageAlt: { tr: "Renkli vs siyah-beyaz karşılaştırması", en: "Color vs black-and-white comparison" },
    content: {
      tr: `Dövme yaptırmak isteyen kullanıcıların çoğu tasarım kadar renk kararında da kararsızdır. Renkli dövmeler dikkat çekici ve enerjik görünürken, siyah-beyaz işler daha zamansız ve dayanıklı algılanır. Kıbrıs gibi güneş yoğunluğu yüksek bir bölgede bu tartışma sadece estetik değil, teknik bir konudur.`,
      en: `Most users getting a tattoo are indecisive about color. While color tattoos are vibrant, black-and-white works are felt to be more timeless and durable.`
    }
  },
  {
    id: "8",
    slug: "girne-dovme-rehberi",
    title: {
      tr: "Girne'de Dövme: Öğrenci ve Turistlere Özel Karar Rehberi",
      en: "Kyrenia Tattoo Guide: For Students and Tourists"
    },
    description: {
      tr: "Girne'de dövme yaptıracak öğrenciler ve turistler için lokasyon, planlama, güven ve bakım odaklı rehber.",
      en: "A guide for students and tourists getting a tattoo in Kyrenia, focusing on location, planning, and care."
    },
    date: "2026-03-03",
    author: "Cyprus Tattoo",
    category: { tr: "Yerel", en: "Local" },
    readTime: "4 dk",
    image: "/assets/images/79d80d42-4e67-4ac5-b6d2-b679ee753677.JPG",
    imageAlt: { tr: "Girne dövme stüdyosu rehberi", en: "Kyrenia tattoo studio guide" },
    content: {
      tr: `Kuzey Kıbrıs'ın incisi Girne'de dövme pazarı çok çeşitli bir kullanıcıya hitap eder. Girne, özellikle turistlerin, kısa dönem ziyaretçilerin ve dinamik öğrenci nüfusunun merkezidir.`,
      en: `Kyrenia, the pearl of North Cyprus, appeals to a diverse tattoo market. It is the hub for tourists, short-term visitors, and students.`
    }
  },
  {
    id: "9",
    slug: "dovme-agri-yonetimi-anestezi",
    title: {
      tr: "Dövme Sırasında Ağrı Yönetimi: Anestezi, Krem ve Gerçekler",
      en: "Pain Management During Tattooing: Facts and Tips"
    },
    description: {
      tr: "Dövme sırasında ağrı yönetimi nasıl olmalı? Uyuşturucu kremler, cilt tepkisi ve güvenli hazırlık süreci hakkında bilmeniz gerekenler.",
      en: "How to manage pain during a tattoo? Learn about numbing creams, skin reactions, and safe preparation."
    },
    date: "2026-03-03",
    author: "Cyprus Tattoo",
    category: { tr: "Rehber", en: "Guide" },
    readTime: "4 dk",
    image: "/assets/images/f24085ab-ccf8-4427-b222-a79fed96fb87.JPG",
    imageAlt: { tr: "Ağrı yönetimi rehberi", en: "Pain management guide" },
    content: {
      tr: `Dövme yaptırmak isteyen kullanıcıların en büyük endişelerinden biri ağrıdır. Bu nedenle ağrı yönetimi, belirsizliğini azaltan kritik bir konudur. Kullanıcı çoğu zaman “çok acır mı?” diye sorar; fakat asıl cevap doğru hazırlık ve gerçekçi beklentilerden geçer.`,
      en: `One of the biggest concerns for potential tattoo clients is pain. Pain management is a critical topic that reduces uncertainty.`
    }
  },
  {
    id: "10",
    slug: "kktc-dovme-sildirme-cover-up",
    title: {
      tr: "Kuzey Kıbrıs'ta Dövme Sildirme ve Cover-Up Seçenekleri",
      en: "Tattoo Removal and Cover-Up Options in North Cyprus"
    },
    description: {
      tr: "Eski dövmesini sildirmek ya da kapatmak isteyenler için lazer, fading ve cover-up sürecini açıklayan detaylı rehber.",
      en: "A detailed guide explaining laser removal, fading, and cover-up processes for those wanting to change old tattoos."
    },
    date: "2026-03-03",
    author: "Cyprus Tattoo",
    category: { tr: "Sanat", en: "Art" },
    readTime: "5 dk",
    image: "/assets/images/eea9da0f-c9b3-4695-a1ed-3fdf7ee4bfca.JPG",
    imageAlt: { tr: "Dövme sildirme ve cover-up", en: "Tattoo removal and cover-up" },
    content: {
      tr: `Eski dövmesini artık istemeyen kullanıcılar genellikle estetik rahatsızlık yaşar ve doğru çözümü ararlar. Kuzey Kıbrıs'ta dövme sildirme ve cover-up seçenekleri, eskiyi yeniyle dönüştürmek isteyenler için dürüstçe değerlendirilmelidir.`,
      en: `Users who no longer want an old tattoo often seek aesthetic solutions. Removal and cover-up options should be evaluated honestly.`
    }
  },

  // --- EK 10 BLOG (PAKET 2) ---
  {
    id: "11",
    slug: "ilk-dovme-kuzey-kibris-rehberi",
    title: {
      tr: "İlk Dövmesini Yaptıracaklar İçin Kuzey Kıbrıs Rehberi: Karar Aşamasından İlk Bakıma",
      en: "North Cyprus Guide for First-Time Tattoos"
    },
    description: {
      tr: "Kuzey Kıbrıs'ta ilk dövmesini yaptıracaklar için stüdyo seçimi, tasarım kararı, hijyen kontrolleri ve ilk bakım süreci.",
      en: "A guide for those getting their first tattoo in North Cyprus, from studio choice to initial aftercare."
    },
    date: "2026-03-04",
    author: "Cyprus Tattoo",
    category: { tr: "Rehber", en: "Guide" },
    readTime: "6 dk",
    image: "/assets/images/IMG_6214.JPG",
    imageAlt: { tr: "İlk dövme hazırlığı", en: "First tattoo prep" },
    content: {
      tr: `İlk dövme kararı çoğu kişi için yalnızca estetik bir tercih değildir; aynı zamanda kalıcı bir uygulama olduğu için güven, planlama ve doğru beklenti yönetimi gerektirir.`,
      en: `The first tattoo decision is more than aesthetics; it requires trust, planning, and solid expectation management for a permanent change.`
    }
  },
  {
    id: "12",
    slug: "girne-turistler-icin-dovme-rehberi",
    title: {
      tr: "Girne'de Turistler İçin Dövme Yaptırma Rehberi: Tatili Bozmadan Doğru Planlama",
      en: "Tattoo Guide for Tourists in Kyrenia: Planning Your Holiday"
    },
    description: {
      tr: "Girne'de turist olarak dövme yaptırmak isteyenler için zamanlama, hijyen, bakım ve tatil planını bozmadan doğru hareket etme rehberi.",
      en: "How to get a tattoo as a tourist in Kyrenia without ruining your vacation plans."
    },
    date: "2026-03-04",
    author: "Cyprus Tattoo",
    category: { tr: "Yerel", en: "Local" },
    readTime: "5 dk",
    image: "/assets/images/86d47256-e2ab-4289-bcda-8e66baf8fdf7.JPG",
    imageAlt: { tr: "Turist dövme planlaması", en: "Tourist tattoo planning" },
    content: {
      tr: `Girne, Kuzey Kıbrıs'ın en yoğun turist çeken noktalarından biri olduğu için dövme yaptırmak isteyen ziyaretçilerin ilk baktığı şehirlerden biridir. Tatil seyrini bozmamak için doğru zamanlama şarttır.`,
      en: `Kyrenia is a tourism hotspot, making it a popular place for tattoos. Proper timing is essential to ensure your holiday isn't compromised.`
    }
  },
  {
    id: "13",
    slug: "ogrenciler-icin-guvenli-butce-dovme",
    title: {
      tr: "Öğrenciler İçin Güvenli ve Bütçe Dostu Dövme Rehberi: Ucuza Kaçmadan Doğru Seçim",
      en: "Safe and Budget-Friendly Tattoo Guide for Students"
    },
    description: {
      tr: "Kuzey Kıbrıs'ta öğrenciler için güvenli, hijyenik ve bütçe dostu dövme seçimi nasıl yapılır?",
      en: "How to choose a safe, hygienic, and budget-friendly tattoo as a student in North Cyprus."
    },
    date: "2026-03-04",
    author: "Cyprus Tattoo",
    category: { tr: "Rehber", en: "Guide" },
    readTime: "4 dk",
    image: "/assets/images/05042af7-c7ad-4eab-bb21-08200c6965f4.JPG",
    imageAlt: { tr: "Öğrenci dövme bütçesi", en: "Student tattoo budget" },
    content: {
      tr: `Kuzey Kıbrıs'ta büyük öğrenci nüfusu nedeniyle dövme talebi her yıl artıyor. Ancak sınırlı bütçe nedeniyle fiyat odaklı hareket etmek riskli olabilir. Akıllı bütçe yönetimini öğrenin.`,
      en: `With a large student population in North Cyprus, tattoo demand is high. But budget constraints shouldn't compromise safety and quality.`
    }
  },
  {
    id: "14",
    slug: "fineline-dovme-kibris-ikliminde-bakim",
    title: {
      tr: "Fineline Dövme Kıbrıs İkliminde Nasıl Korunur? İnce Çizgiler İçin Uzun Ömürlü Bakım",
      en: "Caring for Fineline Tattoos in the Cyprus Climate"
    },
    description: {
      tr: "Fineline dövmeler Kıbrıs'ın sıcak ve güneşli ikliminde nasıl korunmalı? İnce çizgili dövmeler için bakım ve uzun ömür rehberi.",
      en: "Protecting zarif fineline tattoos from the intense Cyprus sun and heat for long-lasting results."
    },
    date: "2026-03-04",
    author: "Cyprus Tattoo",
    category: { tr: "Bakım", en: "Care" },
    readTime: "4 dk",
    image: "/assets/images/66e60aa7-e0e8-431c-a061-1e610c5f81ef.JPG",
    imageAlt: { tr: "Fineline dövme bakımı", en: "Fineline tattoo care" },
    content: {
      tr: `Fineline dövmeler son yıllarda en çok talep gören tarzlardan biri haline geldi. Ancak, teknik yapıları gereği Kıbrıs'ın yoğun güneşi karşısında daha hassastırlar.`,
      en: `Fineline tattoos are highly sought after but delicate. The Cyprus sun requires specific care to keep those thin lines sharp.`
    }
  },
  {
    id: "15",
    slug: "dovme-oncesi-yapilmamasi-gerekenler",
    title: {
      tr: "Dövme Öncesi Yapılmaması Gerekenler: Alkol, İlaç, Güneş ve Spor",
      en: "What NOT to Do Before Your Tattoo Appointment"
    },
    description: {
      tr: "Dövme öncesi alkol tüketimi, bazı ilaçlar, yoğun spor ve güneşlenme neden risklidir? Sağlıklı işlem öncesi hazırlık rehberi.",
      en: "Why alcohol, certain meds, intense exercise, and sun exposure are risky before getting inked."
    },
    date: "2026-03-04",
    author: "Cyprus Tattoo",
    category: { tr: "Rehber", en: "Guide" },
    readTime: "4 dk",
    image: "/assets/images/f24085ab-ccf8-4427-b222-a79fed96fb87.JPG",
    imageAlt: { tr: "Dövme öncesi hazırlık", en: "Pre-tattoo prep" },
    content: {
      tr: `Birçok kişi dövme yaptırırken asıl odağını tasarıma verir; oysa işlem öncesi hazırlık da en az tasarım kadar önemlidir. Cildin durumu işlem kalitesini doğrudan etkiler.`,
      en: `Preparation is as vital as the design. Your skin's condition directly impacts the final quality of the tattoo.`
    }
  },
  {
    id: "16",
    slug: "healed-vs-fresh-dovme-portfolyo-okuma",
    title: {
      tr: "Healed vs Fresh: Dövme Portfolyosu Nasıl Doğru Okunur?",
      en: "Healed vs Fresh: Learning to Read a Tattoo Portfolio"
    },
    description: {
      tr: "Taze ve iyileşmiş dövme fotoğrafları arasındaki fark nedir? Güvenilir stüdyo seçimi için portfolyo okuma rehberi.",
      en: "Understanding the difference between fresh and healed tattoos to pick a reliable studio."
    },
    date: "2026-03-04",
    author: "Cyprus Tattoo",
    category: { tr: "Sanat", en: "Art" },
    readTime: "5 dk",
    image: "/assets/images/6f90a71c-4f71-4604-a7b5-be1f14377e6a.JPG",
    imageAlt: { tr: "Portfolyo inceleme", en: "Portfolio review" },
    content: {
      tr: `Bir dövme stüdyosunun kalitesini anlamak için ilk bakılan yer portfolyodur. Ancak taze çekilmiş fotoğraflar bazen yanıltıcı olabilir. İyileşmiş işleri görmek asıl kalitedir.`,
      en: `Portfolios are the first look at a studio's quality. Fresh photos are great, but healed works show the true skill of the artist.`
    }
  },
  {
    id: "17",
    slug: "cover-up-dovme-planlama-rehberi",
    title: {
      tr: "Cover-up Dövme Planlarken Bilinmesi Gerekenler: Hangi Eski Dövmeler Kapanır?",
      en: "Planning a Cover-up: Which Tattoos Can Be Hidden?"
    },
    description: {
      tr: "Cover-up dövme her eski tasarımda mümkün mü? Eski dövmeyi kapatma planı yaparken bilmeniz gerekenler.",
      en: "Is a cover-up possible for every design? Key considerations for hiding an old tattoo."
    },
    date: "2026-03-04",
    author: "Cyprus Tattoo",
    category: { tr: "Sanat", en: "Art" },
    readTime: "5 dk",
    image: "/assets/images/eea9da0f-c9b3-4695-a1ed-3fdf7ee4bfca.JPG",
    imageAlt: { tr: "Cover-up rehberi", en: "Cover-up guide" },
    content: {
      tr: `Eski bir dövmeyi kapatma fikri estetik bir çözüm gibi görünür. Ancak her dövme her tasarımla kapanmaz. Eski işin yoğunluğu yeni planı belirler.`,
      en: `Covering an old tattoo seems like an easy fix, but it's technical. The old ink's density dictates what's possible for the new design.`
    }
  },
  {
    id: "18",
    slug: "dovme-sildirme-mi-cover-up-mi",
    title: {
      tr: "Dövme Sildirme mi, Cover-up mı? Kuzey Kıbrıs'ta Karar Vermek İçin Rehber",
      en: "Tattoo Removal or Cover-up? Deciding in North Cyprus"
    },
    description: {
      tr: "Dövme sildirme ile cover-up arasında nasıl seçim yapılır? Süreç, maliyet ve estetik sonuçlar karşılaştırması.",
      en: "Choosing between laser removal and a cover-up: comparing process, cost, and results."
    },
    date: "2026-03-04",
    author: "Cyprus Tattoo",
    category: { tr: "Rehber", en: "Guide" },
    readTime: "5 dk",
    image: "/assets/images/9eae8f4a-754d-493f-b410-ce40c9208ebc.JPG",
    imageAlt: { tr: "Sildirme vs Kapatma karşılaştırması", en: "Removal vs Cover-up comparison" },
    content: {
      tr: `İstenmeyen bir dövme ile karşı karşıya kalan kişilerin önünde iki yol vardır: lazerle silme ya da kapatma. Karar verirken hedeflerinizi doğru belirlemelisiniz.`,
      en: `Faced with an unwanted tattoo, you have two paths: laser removal or a cover-up. Your decision depends on your long-term aesthetic goals.`
    }
  },
  {
    id: "19",
    slug: "yazin-dovme-yaptilir-mi-kibris",
    title: {
      tr: "Yazın Dövme Yaptırılır mı? Kıbrıs Sıcağında Bakım Taktikleri",
      en: "Getting a Tattoo in Summer? Cyprus Heat Aftercare Tactics"
    },
    description: {
      tr: "Yaz aylarında Kuzey Kıbrıs'ta dövme yaptırmak mümkün mü? Sıcak hava, terleme ve güneş açısından detaylı rehber.",
      en: "Is it possible to get inked in a Cyprus summer? A guide to dealing with heat, sweat, and sun."
    },
    date: "2026-03-04",
    author: "Cyprus Tattoo",
    category: { tr: "Rehber", en: "Guide" },
    readTime: "4 dk",
    image: "/assets/images/79d80d42-4e67-4ac5-b6d2-b679ee753677.JPG",
    imageAlt: { tr: "Yazın dövme yaptırmak", en: "Tattooing in summer" },
    content: {
      tr: `Yazın dövme yaptırmak imkansız değildir; ancak Kıbrıs gibi güneşli bölgelerde daha planlı olmak gerekir. Deniz ve havuz kısıtlamalarına dikkat!`,
      en: `Summer tattoos aren't impossible, but in sun-drenched Cyprus, they require extra planning and discipline regarding sun and water.`
    }
  },
  {
    id: "20",
    slug: "guvenilir-dovme-studyosu-soru-listesi",
    title: {
      tr: "Güvenilir Dövme Stüdyosu Soru Listesi: Randevu Öncesi Rehber",
      en: "Reliable Tattoo Studio Checklist: Questions to Ask Before Booking"
    },
    description: {
      tr: "Dövme stüdyosundan randevu almadan önce sorulması gereken kritik hijyen ve portfolyo soruları.",
      en: "Critical questions about hygiene and portfolio to ask your artist before committing to a session."
    },
    date: "2026-03-04",
    author: "Cyprus Tattoo",
    category: { tr: "Rehber", en: "Guide" },
    readTime: "4 dk",
    image: "/assets/images/IMG_6214.JPG",
    imageAlt: { tr: "Stüdyo sorgulama listesi", en: "Studio inquiry checklist" },
    content: {
      tr: `Bir dövme stüdyosunun ne kadar güvenilir olduğunu anlamanın en etkili yollarıdan biri doğru soruları sormaktır. Profesyonel bir sanatçı şeffaf bilgiden kaçınmaz.`,
      en: `The best way to gauge a studio's reliability is to ask the right questions. Professional artists are always happy to share their hygiene and process details.`
    }
  },

  // --- RESTORED OLD BLOGS ---
  {
    id: "101",
    slug: "ilk-dovme-icin-ipaclari",
    title: {
      tr: "İlk Dövme İçin Altın İpuçları",
      en: "Golden Tips for Your First Tattoo"
    },
    description: {
      tr: "İlk dövmenizi yaptırırken bilmeniz gereken her şey.",
      en: "Everything you need to know when getting your first tattoo."
    },
    date: "2024-02-15",
    author: "Cyprus Tattoo",
    category: { tr: "Rehber", en: "Guide" },
    readTime: "3 dk",
    image: "/assets/images/IMG_6260.JPG",
    imageAlt: { tr: "İlk dövme ipuçları", en: "First tattoo tips" },
    content: {
      tr: `İlk dövmenizi yaptırmak heyecan verici bir deneyimdir. Ancak doğru hazırlık süreci, bu deneyimin sorunsuz geçmesini sağlar...`,
      en: `Getting your first tattoo is an exciting experience. However, the right preparation ensures a smooth and satisfactory result.`
    }
  }
];
