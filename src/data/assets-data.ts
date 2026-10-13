// Unique portfolio shots, strongest work first. The /assets/images/* uploads were
// byte-for-byte or near duplicates of these and were dropped from the list (files kept);
// tattoo-3 (another artist's reposted Instagram post) and tattoo-18 (Instagram UI crop) are
// left out on purpose, as is tattoo-32 (a Pinterest screenshot). Studio/client photos sit at the end.
// tattoo-8 had a PhotoRoom badge cropped off the bottom.
export const galleryImages = [
    "/gallery/tattoo-4.jpg",
    "/gallery/tattoo-27.jpg",
    "/gallery/tattoo-14.jpg",
    "/gallery/tattoo-5.jpg",
    "/gallery/tattoo-1.jpg",
    "/gallery/tattoo-26.jpg",
    "/gallery/tattoo-20.jpg",
    "/gallery/tattoo-7.jpg",
    "/gallery/tattoo-35.jpg",
    "/gallery/tattoo-22.jpg",
    "/gallery/tattoo-40.jpg",
    "/gallery/tattoo-17.jpg",
    "/gallery/tattoo-36.jpg",
    "/gallery/tattoo-11.jpg",
    "/gallery/tattoo-8.jpg",
    "/gallery/tattoo-2.jpg",
    "/gallery/tattoo-10.jpg",
    "/gallery/tattoo-13.jpg",
    "/gallery/tattoo-15.jpg",
    "/gallery/tattoo-23.jpg",
    "/gallery/tattoo-24.jpg",
    "/gallery/tattoo-25.jpg",
    "/gallery/tattoo-28.jpg",
    "/gallery/tattoo-29.jpg",
    "/gallery/tattoo-30.jpg",
    "/gallery/tattoo-33.jpg",
    "/gallery/tattoo-37.jpg",
    "/gallery/tattoo-6.jpg",
    "/gallery/tattoo-9.jpg",
    "/gallery/tattoo-12.jpg",
    "/gallery/tattoo-16.jpg",
    "/gallery/tattoo-19.jpg",
    "/gallery/tattoo-21.jpg",
    "/gallery/tattoo-39.jpg",
    "/gallery/tattoo-41.jpg",
    "/gallery/tattoo-42.jpg",
];

/** Hand-picked work for the homepage hero and service cards. */
export const featuredWork = {
    hero: "/gallery/tattoo-27.jpg",
    manifesto: "/gallery/tattoo-14.jpg",
    // Clips without editor watermarks or another studio's signage in frame.
    heroClips: ["/assets/videos/optimized/IMG_8580.mp4", "/assets/videos/optimized/IMG_7285.mp4", "/assets/videos/optimized/IMG_8455.mp4", "/assets/videos/optimized/IMG_7216.mp4"],
    previewClips: ["/assets/videos/optimized/IMG_7081.mp4", "/assets/videos/optimized/IMG_8738.mp4"],
    services: {
        custom: "/gallery/tattoo-7.jpg",
        realism: "/gallery/tattoo-27.jpg",
        minimalist: "/gallery/tattoo-4.jpg",
        traditional: "/gallery/tattoo-11.jpg",
        blackwork: "/gallery/tattoo-40.jpg",
        coverup: "/gallery/tattoo-39.jpg",
    },
};

export const galleryVideos = [
    "/gallery/video-1.mp4",
    "/gallery/video-2.mp4",
    "/assets/videos/optimized/71fd659330624f9084a98461260ac14e.mp4",
    "/assets/videos/optimized/B6C55EE5-5FDE-49CC-9ECD-8030E2AD4788.mp4",
    "/assets/videos/optimized/IMG_6375.mp4",
    "/assets/videos/optimized/IMG_6837.mp4",
    "/assets/videos/optimized/IMG_6940.mp4",
    "/assets/videos/optimized/IMG_7081.mp4",
    "/assets/videos/optimized/IMG_7165.mp4",
    "/assets/videos/optimized/IMG_7216.mp4",
    "/assets/videos/optimized/IMG_7285.mp4",
    "/assets/videos/optimized/IMG_7341.mp4",
    "/assets/videos/optimized/IMG_7373.mp4",
    "/assets/videos/optimized/IMG_7457.mp4",
    "/assets/videos/optimized/IMG_7460.mp4",
    "/assets/videos/optimized/IMG_7479.mp4",
    "/assets/videos/optimized/IMG_7773.mp4",
    "/assets/videos/optimized/IMG_7793.mp4",
    "/assets/videos/optimized/IMG_7796.mp4",
    "/assets/videos/optimized/IMG_7914.mp4",
    "/assets/videos/optimized/IMG_7952.mp4",
    "/assets/videos/optimized/IMG_7958.mp4",
    "/assets/videos/optimized/IMG_7972.mp4",
    "/assets/videos/optimized/IMG_8201.mp4",
    "/assets/videos/optimized/IMG_8455.mp4",
    "/assets/videos/optimized/IMG_8531.mp4",
    "/assets/videos/optimized/IMG_8535.mp4",
    "/assets/videos/optimized/IMG_8536.mp4",
    "/assets/videos/optimized/IMG_8580.mp4",
    "/assets/videos/optimized/IMG_8581.mp4",
    "/assets/videos/optimized/IMG_8738.mp4",
    "/assets/videos/optimized/IMG_8849.mp4",
    "/assets/videos/optimized/IMG_9578.mp4",
    "/assets/videos/optimized/copy_228959E3-2DBD-4D78-A957-C01D5B9691AA.mp4",
    "/assets/videos/optimized/copy_91E7CD6E-0B7E-4EB1-B846-02F4158D53FB.mp4",
    "/assets/videos/optimized/copy_AAAE19C0-A46C-4754-9EBC-699903DA225C.mp4",
    "/assets/videos/optimized/copy_AC45C0DF-42E1-44C1-9FDA-43EA63FAB5F0.mp4",
    "/assets/videos/optimized/copy_CBC77694-67FA-4CEF-B4E6-E798B5F10005.mp4",
    "/assets/videos/optimized/copy_EB0D175C-5B89-47C5-A696-AEADD271A2DE.mp4",
];

export const featuredVideos = galleryVideos;

/** First-second still for a gallery clip (public/gallery/posters), shown until the clip loads. */
export function videoPoster(src: string): string {
    const name = src.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
    return `/gallery/posters/${name}.jpg`;
}
