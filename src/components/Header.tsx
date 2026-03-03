"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/blog", label: t.nav.blog },
    { href: "/galeri", label: t.nav.gallery },
    { href: "/hakkimizda", label: t.nav.about },
    { href: "/iletisim", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a96e]/20 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Cyprus Tattoo Logo"
            width={800}
            height={436}
            className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-white/80 hover:text-[#c9a96e] text-sm font-medium tracking-wide transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10 ml-4">
            <button
              onClick={() => setLanguage('tr')}
              className={`text-[10px] font-black px-3 py-1.5 rounded-full transition-all duration-300 ${language === 'tr' ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'text-white/30 hover:text-white/60'}`}
            >
              TR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`text-[10px] font-black px-3 py-1.5 rounded-full transition-all duration-300 ${language === 'en' ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'text-white/30 hover:text-white/60'}`}
            >
              EN
            </button>
          </div>

          <a
            href="https://wa.me/9005488910673"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c9a96e] hover:bg-[#e2c88a] text-black font-bold text-sm px-5 py-2.5 rounded transition-all hover:shadow-lg hover:shadow-[#c9a96e]/30 uppercase tracking-wide"
          >
            {t.nav.booking}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#c9a96e]/20 px-4 py-6 flex flex-col gap-4">
          <div className="flex justify-center mb-4">
            <div className="flex justify-center mb-6">
              <div className="flex items-center bg-white/5 rounded-2xl p-1.5 border border-white/10 w-full max-w-[280px]">
                <button
                  onClick={() => setLanguage('tr')}
                  className={`flex-1 text-xs font-black py-3 rounded-xl transition-all ${language === 'tr' ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'text-white/40'}`}
                >
                  TÜRKÇE
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 text-xs font-black py-3 rounded-xl transition-all ${language === 'en' ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'text-white/40'}`}
                >
                  ENGLISH
                </button>
              </div>
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#c9a96e] font-medium uppercase tracking-wide py-2 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/9005488910673"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c9a96e] text-black font-bold text-center px-5 py-3 rounded uppercase tracking-wide mt-2"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.booking}
          </a>
        </div>
      )}
    </header>
  );
}
