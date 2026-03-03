"use client";

import { useLanguage } from "./LanguageContext";

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const label = language === 'tr' ? 'WhatsApp ile iletişime geç' : 'Contact via WhatsApp';

  return (
    <a
      href="https://wa.me/9005488910673"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-20 h-20 bg-[#25d366] rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all shadow-[#25d366]/40"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[#25d366] rounded-3xl animate-ping opacity-20" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        width="40"
        height="40"
        className="relative z-10"
      >
        <path d="M16.004 3C9.375 3 4 8.373 4 15.003c0 2.122.558 4.112 1.529 5.842L4 29l8.385-1.504A11.95 11.95 0 0016.004 28c6.629 0 12.003-5.374 12.003-11.997C28.007 8.373 22.633 3 16.004 3zm0 21.994a9.955 9.955 0 01-5.085-1.393l-.365-.216-3.784.679.718-3.682-.237-.378A9.953 9.953 0 016.006 15c0-5.516 4.484-10.001 9.998-10.001S26 9.484 26 15.003c0 5.514-4.484 9.998-9.996 9.998zm5.476-7.484c-.298-.15-1.766-.873-2.04-.972-.273-.099-.472-.149-.671.15-.199.298-.77.972-.944 1.17-.173.2-.348.224-.645.075-.298-.15-1.257-.464-2.394-1.477-.885-.788-1.48-1.762-1.655-2.059-.173-.299-.018-.46.13-.608.134-.133.298-.348.447-.523.15-.174.199-.298.299-.497.1-.199.05-.374-.025-.523-.075-.15-.671-1.618-.92-2.216-.241-.58-.487-.503-.671-.511l-.573-.01a1.098 1.098 0 00-.796.374c-.273.299-1.044 1.021-1.044 2.49 0 1.468 1.069 2.887 1.218 3.086.15.199 2.102 3.209 5.09 4.499.712.307 1.267.49 1.7.628.714.226 1.364.194 1.877.118.573-.085 1.766-.722 2.015-1.42.249-.697.249-1.295.174-1.42-.073-.123-.272-.198-.57-.347z" />
      </svg>
    </a>
  );
}
