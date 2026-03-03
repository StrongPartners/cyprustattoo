import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import GalleryPreview from "@/components/GalleryPreview";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <ServicesSection />
      <GalleryPreview />
      <BlogPreview />
      <CTASection />
    </div>
  );
}
