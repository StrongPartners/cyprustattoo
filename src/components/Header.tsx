"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/blog", label: "Blog" },
  { href: "/galeri", label: "Galeri" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <a
            href="https://www.instagram.com/cyprustatt00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#c9a96e] transition-colors"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://wa.me/9005488910673"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c9a96e] hover:bg-[#e2c88a] text-black font-bold text-sm px-5 py-2.5 rounded transition-all hover:shadow-lg hover:shadow-[#c9a96e]/30 uppercase tracking-wide"
          >
            Rezervasyon
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
            WhatsApp Rezervasyon
          </a>
        </div>
      )}
    </header>
  );
}
