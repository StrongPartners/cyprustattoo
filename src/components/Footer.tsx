import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#c9a96e]/15 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-white font-bold text-xl tracking-wider">CYPRUS</span>
              <span className="text-[#c9a96e] font-bold text-xl tracking-wider ml-2">TATTOO</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Kuzey Kıbrıs&apos;ın en profesyonel dövme stüdyosu.
              Sanatı cildinize işliyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#c9a96e] font-semibold uppercase text-sm tracking-wider mb-4">
              Hızlı Linkler
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/galeri", label: "Galeri" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/iletisim", label: "İletişim" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 hover:text-[#c9a96e] text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#c9a96e] font-semibold uppercase text-sm tracking-wider mb-4">
              İletişim
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" fill="none" stroke="#c9a96e" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+9005488910673" className="hover:text-[#c9a96e] transition-colors">
                  +90 548 891 0673
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" fill="none" stroke="#c9a96e" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Kuzey Kıbrıs</span>
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" fill="none" stroke="#c9a96e" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Pzt-Cts: 10:00 - 21:00</span>
              </li>
              <li>
                <a
                  href="https://wa.me/9005488910673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25d366] text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-[#20b858] transition-colors mt-1"
                >
                  <svg width="14" height="14" fill="white" viewBox="0 0 32 32">
                    <path d="M16.004 3C9.375 3 4 8.373 4 15.003c0 2.122.558 4.112 1.529 5.842L4 29l8.385-1.504A11.95 11.95 0 0016.004 28c6.629 0 12.003-5.374 12.003-11.997C28.007 8.373 22.633 3 16.004 3zm0 21.994a9.955 9.955 0 01-5.085-1.393l-.365-.216-3.784.679.718-3.682-.237-.378A9.953 9.953 0 016.006 15c0-5.516 4.484-10.001 9.998-10.001S26 9.484 26 15.003c0 5.514-4.484 9.998-9.996 9.998z"/>
                  </svg>
                  WhatsApp Yaz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#c9a96e]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © 2025 Cyprus Tattoo. Tüm hakları saklıdır.
          </p>
          <p className="text-white/20 text-xs">
            Kuzey Kıbrıs&apos;ın #1 Dövme Stüdyosu — cyprustattoo.ink
          </p>
        </div>
      </div>
    </footer>
  );
}
