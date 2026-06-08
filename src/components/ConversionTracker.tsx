"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

const CONVERSION_SEND_TO = "AW-17997372323/PTkxCLfWn7ocEKO36IVD";

/**
 * Fires the Google Ads "Randevu rezervasyonu" conversion when a visitor
 * clicks any wa.me link. The site has no thank-you page because the booking
 * flow leaves the site to WhatsApp; click-on-outbound is the accepted
 * workaround for off-site lead conversions.
 */
export default function ConversionTracker() {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target;
            if (!(target instanceof Element)) return;
            const anchor = target.closest<HTMLAnchorElement>('a[href*="wa.me"]');
            if (!anchor) return;
            if (typeof window.gtag !== "function") return;
            window.gtag("event", "conversion", {
                send_to: CONVERSION_SEND_TO,
                event_callback: undefined,
            });
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return null;
}
