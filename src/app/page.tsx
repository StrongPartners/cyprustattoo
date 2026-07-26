import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ManifestoSection from "@/components/ManifestoSection";
import ServicesSection from "@/components/ServicesSection";
import GalleryPreview from "@/components/GalleryPreview";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";

// Industry style names — deliberately untranslated; they read the same to a
// Turkish and an English visitor and function as a visual texture, not copy.
const MARQUEE_ITEMS = [
  "CUSTOM DESIGN",
  "REALISM",
  "FINE LINE",
  "TRADITIONAL",
  "BLACKWORK",
  "COVER-UP",
  "PIERCING",
  "KYRENIA · NORTH CYPRUS",
];

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <ManifestoSection />
      <ServicesSection />
      <GalleryPreview />
      <BlogPreview />
      <CTASection />
    </div>
  );
}
