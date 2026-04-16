"use client";

import React, { createContext, useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { translations } from '@/data/translations';

type Language = 'tr' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.tr;
    localePath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function resolveLanguage(pathname: string | null): Language {
    if (!pathname) return 'tr';
    return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'tr';
}

function stripLocale(pathname: string | null): string {
    if (!pathname) return '/';
    if (pathname === '/en') return '/';
    if (pathname.startsWith('/en/')) return pathname.slice(3);
    return pathname;
}

function withLocale(path: string, language: Language): string {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    if (language !== 'en') return normalized;
    if (normalized === '/') return '/en';
    return `/en${normalized}`;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();

    const language = resolveLanguage(pathname);

    const setLanguage = (lang: Language) => {
        if (lang === language) return;
        const base = stripLocale(pathname);
        const target = withLocale(base, lang);
        router.push(target);
    };

    const localePath = (path: string) => withLocale(path, language);

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, localePath }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
