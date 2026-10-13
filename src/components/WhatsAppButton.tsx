"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

/**
 * Contact dock (same pattern as bccreative.agency): WhatsApp stays one tap away, and the small
 * toggle opens phone and Instagram above it.
 */
export default function WhatsAppButton() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const tr = language === "tr";
  const label = tr ? "WhatsApp ile iletişime geç" : "Contact via WhatsApp";

  const extras = [
    { href: "tel:+905488910673", label: tr ? "Ara" : "Call", icon: (
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.6 1 1 0 01-.25 1z" />
    ) },
    { href: "https://www.instagram.com/cyprustatt00", label: "Instagram", icon: (
      <path d="M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8A3.6 3.6 0 007.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6A3.6 3.6 0 0016.4 4zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
    ) },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          extras.map((x, i) => (
            <motion.a
              key={x.href}
              href={x.href}
              target={x.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: (extras.length - i) * 0.04 } }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-surface py-2 pl-4 pr-2 text-sm font-semibold text-white shadow-lg"
            >
              {x.label}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">{x.icon}</svg>
              </span>
            </motion.a>
          ))}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={tr ? "Diğer iletişim seçenekleri" : "More ways to reach us"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface text-white shadow-lg transition-transform hover:scale-105"
        >
          <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-2xl leading-none">+</motion.span>
        </button>
        <a
          href="https://wa.me/905488910673"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-whatsapp shadow-2xl shadow-whatsapp/40 transition-all hover:scale-110 active:scale-95"
          aria-label={label}
        >
          <span className="absolute inset-0 animate-ping rounded-3xl bg-whatsapp opacity-20" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" width="34" height="34" className="relative z-10">
            <path d="M16.004 3C9.375 3 4 8.373 4 15.003c0 2.122.558 4.112 1.529 5.842L4 29l8.385-1.504A11.95 11.95 0 0016.004 28c6.629 0 12.003-5.374 12.003-11.997C28.007 8.373 22.633 3 16.004 3zm0 21.994a9.955 9.955 0 01-5.085-1.393l-.365-.216-3.784.679.718-3.682-.237-.378A9.953 9.953 0 016.006 15c0-5.516 4.484-10.001 9.998-10.001S26 9.484 26 15.003c0 5.514-4.484 9.998-9.996 9.998zm5.476-7.484c-.298-.15-1.766-.873-2.04-.972-.273-.099-.472-.149-.671.15-.199.298-.77.972-.944 1.17-.173.2-.348.224-.645.075-.298-.15-1.257-.464-2.394-1.477-.885-.788-1.48-1.762-1.655-2.059-.173-.299-.018-.46.13-.608.134-.133.298-.348.447-.523.15-.174.199-.298.299-.497.1-.199.05-.374-.025-.523-.075-.15-.671-1.618-.92-2.216-.241-.58-.487-.503-.671-.511l-.573-.01a1.098 1.098 0 00-.796.374c-.273.299-1.044 1.021-1.044 2.49 0 1.468 1.069 2.887 1.218 3.086.15.199 2.102 3.209 5.09 4.499.712.307 1.267.49 1.7.628.714.226 1.364.194 1.877.118.573-.085 1.766-.722 2.015-1.42.249-.697.249-1.295.174-1.42-.073-.123-.272-.198-.57-.347z" />
</svg>
        </a>
      </div>
    </div>
  );
}
