"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t, localePath } = useLanguage();
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: localePath("/"), label: t.nav.home },
    { href: localePath("/blog"), label: t.nav.blog },
    { href: localePath("/galeri"), label: t.nav.gallery },
    { href: localePath("/hakkimizda"), label: t.nav.about },
    { href: localePath("/iletisim"), label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/90 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_-20px_rgba(60,40,15,0.35)]"
        : "bg-background py-4"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href={localePath("/")} className="flex items-center group">
          <Image
            src="/logo-ink.png"
            alt="JBA Cyprus Tattoo & Piercing Logo"
            width={921}
            height={907}
            className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
            style={{ maxHeight: '56px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-2 md:gap-4" onMouseLeave={() => setHovered(null)}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            const lit = hovered ? hovered === link.href : active;
            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className={`relative rounded-full px-3 py-1.5 text-[10px] md:text-xs font-semibold tracking-wide uppercase transition-colors ${lit ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                {/* One pill that slides between links (shared layout animation). */}
                {lit && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/15 ring-1 ring-primary/30"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10 ml-2 md:ml-4">
            <button
              onClick={() => setLanguage('tr')}
              className={`text-[9px] md:text-[10px] font-black px-2 md:px-3 py-1 md:py-1.5 rounded-full transition-all duration-300 ${language === 'tr' ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'text-white/30 hover:text-white/60'}`}
            >
              TR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`text-[9px] md:text-[10px] font-black px-2 md:px-3 py-1 md:py-1.5 rounded-full transition-all duration-300 ${language === 'en' ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'text-white/30 hover:text-white/60'}`}
            >
              EN
            </button>
          </div>

          <a
            href="https://wa.me/905488910673"
            target="_blank"
            rel="noopener noreferrer"
            className="aurora-btn hidden lg:block text-black font-bold text-xs px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-primary/30 uppercase tracking-wide"
          >
            {t.nav.booking}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
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
        <div className="md:hidden bg-surface border-t border-primary/20 px-4 py-6 flex flex-col gap-4">
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
              className="text-white/80 hover:text-primary font-medium uppercase tracking-wide py-2 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/905488910673"
            target="_blank"
            rel="noopener noreferrer"
            className="aurora-btn text-black font-bold text-center px-5 py-3 rounded-full uppercase tracking-wide mt-2"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.booking}
          </a>
        </div>
      )}
    </header>
  );
}
