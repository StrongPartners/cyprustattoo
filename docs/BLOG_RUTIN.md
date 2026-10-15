# Günlük blog rutini (Ekim 2026'dan itibaren)

Her gün **bir** yazı. Yazar Claude; bir Claude Code Routine her sabah bu dosyayı izler.
Yazı doğrudan `main`'e commit edilip push edilir, ardından `scripts/publish.sh` siteyi Cloudflare'e deploy eder
ve IndexNow'a bildirir (GitHub Actions yok; Sergen doğrudan yayın yetkisi verdi). Prosedürü burada değiştir, routine'de değil.

## Neden yeniden kuruldu
- Eski akış 23 Haziran 2026'da durdu (Gemini bakiyesi bitti, ardından kurulan routine silinmiş).
- Eski 278 yazının çoğu birbirinin tekrarı: 52 tanesi "Dövme sanatında kişisel…" ile başlıyor, 250'si "Sanat"
  kategorisinde, aynı 6 görsel 20-25 kez kullanılmış, hiç piercing yazısı yok. Google bunu zayıf içerik sayar.
- Yeni kural: **insanların gerçekten aradığı bir soruya** cevap veren, tekrar etmeyen, kendi görseli olan yazı.

## Kurallar
1. **Konu:** aşağıdaki listeden ilk kullanılmamış konu (kullanılınca `[x]` yap). Liste bitince aynı ölçütle 20 yeni konu ekle:
   Girne / Kuzey Kıbrıs / KKTC + dövme veya piercing + gerçek bir soru. Mevcut slug'larla (`grep 'slug:' src/data/blog-posts.ts`)
   aynı konuyu yazma.
2. **Marka:** "JBA Cyprus Tattoo & Piercing" (Girne). Adres: Emin Alpkaya Sk., Çelebi Apt. No:1, Girne.
   WhatsApp/telefon: +90 548 891 0673 (`https://wa.me/905488910673`). Eski yazılardaki "Cyprus Tattoo Ink" adını kullanma.
3. **Doğruluk:** fiyat, istatistik, müşteri sayısı, ödül, sağlık iddiası uydurma. Tıbbi konuda genel bilgi ver ve
   "şüphede doktora başvurun" de. Stüdyo politikası bilinmiyorsa (yaş sınırı, kapora vb.) "stüdyoya sorun" de.
4. **Uzunluk:** TR 800–1500 kelime (dolgu yok; soru cevaplanınca bitir), EN tam çeviri (kelime kelime değil, doğal İngilizce). `readTime` gerçek okuma süresi
   (~200 kelime/dk).
5. **Yapı:** Markdown, h1 yok. Kısa giriş → 4-6 `##` bölüm → "Sık Sorulan Sorular" (4-6 soru) → kısa kapanış + WhatsApp çağrısı.
   En az 2 iç bağlantı: `/galeri`, `/iletisim` ya da ilgili eski bir yazı (`/blog/<slug>`; EN içerikte `/en/...`).
6. **Kategori:** Rehber / Bakım / Piercing / Stiller / Yerel / Trendler (TR) — Guide / Aftercare / Piercing / Styles / Local / Trends (EN).
7. **Görsel:** her yazıya yeni görsel. Cloudflare Workers AI `@cf/black-forest-labs/flux-2-dev`, 1344x768,
   yazısız, logosuz, filigransız; dövme stüdyosu fotoğrafı gerçekçiliğinde ya da konuya uygun detay. ffmpeg ile
   1200x675 JPG (q 4) yap, `public/blog/<slug>.jpg` olarak kaydet. `imageAlt` görseli dürüstçe anlatsın.
   (Hesap: `CLOUDFLARE_API_TOKEN`. Ücretsiz kota başka işlerde biterse yedek: `public/gallery/` içinden son 30 yazıda
   kullanılmamış gerçek bir stüdyo fotoğrafı, 16:9 kırpılmış; stok/başka stüdyo görseli asla.)
8. **Kayıt:** yeni dosya `content/blog/<id>.json` (id = en büyük id + 1, 4 haneye sıfırla doldurulmuş dosya adı:
   `0359.json`). Alanlar: id, slug, title{tr,en}, description{tr,en}, date (bugün, UTC), author ("JBA Cyprus"),
   category{tr,en}, readTime{tr,en}, image, imageAlt{tr,en}, content{tr,en}. Örnek: en son eklenen dosya.
   En büyük id ve slug kontrolü: `ls content/blog | tail -1`, `grep -h '"slug"' content/blog/*.json`.
9. **Kontrol:** `npm run build` geçmeli. Slug benzersiz, ASCII, küçük harf, tireli.
10. **Yayın:** `git fetch origin main && git checkout -B main origin/main`, dosyaları ekle, commit (`feat(blog): <TR başlık>`),
    `git push origin main`, sonra `bash scripts/publish.sh`. Canlı adresi curl ile kontrol et (200).
11. **Rapor:** Türkçe 2-3 satır: başlık, hedeflenen arama, canlı adres (`https://cyprustattoo.ink/blog/<slug>`).

## Konu listesi
- [x] Kuzey Kıbrıs'ta ilk piercing rehberi: türler, iyileşme süreleri, bakım
- [x] Kulak piercing türleri: lob, helix, tragus, conch, daith — hangisi kime uygun
- [x] Piercing takısı malzemeleri: implant titanyum, cerrahi çelik, altın — neden önemli
- [ ] Piercing enfeksiyonu mu, normal iyileşme mi? Belirtiler ve ne zaman doktora gidilir
- [ ] Burun piercing (nostril, septum) bakımı ve iyileşme takvimi
- [ ] Dövme gün gün nasıl iyileşir: ilk 30 gün takvimi
- [ ] Dövmeden sonra deniz, havuz ve güneş: Kıbrıs yazında dikkat edilecekler
- [ ] Dövme fiyatını ne belirler? Boyut, detay, yer, seans sayısı
- [ ] Girne'de dövme yaptırmadan önce stüdyoya sorulacak 10 soru
- [ ] Cover-up nasıl yapılır: eski dövme yeni tasarımla nasıl kapatılır
- [ ] Lazer silme mi cover-up mı? Hangi durumda hangisi
- [ ] Fine line dövmeler: neden zamanla yayılır, nasıl uzun ömürlü olur
- [ ] Dövme ağrı haritası: vücudun hangi bölgesi ne kadar acıtır
- [ ] Realistik portre dövme süreci: fotoğraf seçiminden son seansa
- [ ] Kol boyu (sleeve) dövme planlama: tema, akış, seans sayısı
- [ ] Yazı (lettering) dövmesinde font ve boyut seçimi
- [ ] Anı (memorial) dövmeleri: kayıpları anlamlı biçimde taşımak
- [ ] Çift ve arkadaş dövmeleri: fikirler ve dikkat edilecekler
- [ ] Dövme sonrası kaşıntı, kabuklanma ve soyulma: neler normal
- [ ] Dövme randevusundan önceki 24 saat: yeme, uyku, kıyafet
- [ ] Dövme ve spor: ne zaman antrenmana dönülür
- [ ] Blackwork ve dotwork: farkları ve kimlere uygun
- [ ] Geometrik ve mandala dövmeler: vücut hatlarına göre yerleşim
- [ ] Eski dövmeyi yenilemek: rötuş ne zaman gerekir
- [ ] Dövme yeri seçimi: görünürlük, iş hayatı, yaşlanma
- [ ] Dövme ve güneş koruması: SPF ile renkleri korumak
- [ ] Kıbrıs'a tatile gelirken dövme planlamak: randevu, iyileşme, uçuş
- [ ] Neo-traditional dövme: geleneksel stilden farkı
- [ ] İlk dövme için küçük ve anlamlı fikirler
- [ ] Hijyen ve sterilizasyon: iyi bir stüdyoyu nasıl anlarsınız
