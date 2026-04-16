"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

type Props = {
    images: string[];
    index: number | null;
    onClose: () => void;
    onNavigate: (nextIndex: number) => void;
    alt?: (index: number) => string;
};

export default function ImageLightbox({
    images,
    index,
    onClose,
    onNavigate,
    alt,
}: Props) {
    const isOpen = index !== null;

    const handleKey = useCallback(
        (event: KeyboardEvent) => {
            if (index === null) return;
            if (event.key === "Escape") onClose();
            if (event.key === "ArrowRight") {
                onNavigate((index + 1) % images.length);
            }
            if (event.key === "ArrowLeft") {
                onNavigate((index - 1 + images.length) % images.length);
            }
        },
        [index, images.length, onClose, onNavigate]
    );

    useEffect(() => {
        if (!isOpen) return;
        window.addEventListener("keydown", handleKey);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen, handleKey]);

    if (index === null) return null;

    const current = images[index];
    const goNext = () => onNavigate((index + 1) % images.length);
    const goPrev = () =>
        onNavigate((index - 1 + images.length) % images.length);

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery viewer"
            onClick={onClose}
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-black transition-all flex items-center justify-center"
                aria-label="Close"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                </svg>
            </button>

            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-black transition-all flex items-center justify-center"
                aria-label="Previous"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-black transition-all flex items-center justify-center"
                aria-label="Next"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" />
                </svg>
            </button>

            <div
                className="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={current}
                    alt={alt?.(index) ?? `Cyprus Tattoo portfolio ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 90vw, 1200px"
                    className="object-contain"
                    priority
                />
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">
                {index + 1} / {images.length}
            </div>
        </div>
    );
}
