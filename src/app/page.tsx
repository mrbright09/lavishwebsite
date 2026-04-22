import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureStrip from "@/components/FeatureStrip";
import SignatureCreations from "@/components/SignatureCreations";
import BrandStory from "@/components/BrandStory";
import InstagramGallery from "@/components/InstagramGallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeatureStrip />
      <SignatureCreations />
      <BrandStory />
      <InstagramGallery />
      <CTASection />
      <Footer />
    </main>
  );
}
