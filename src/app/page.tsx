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
      {/* Pink drip bar — very top of page */}
      <div
        className="w-full h-10 bg-pink-light"
        style={{
          backgroundImage: "url('/images/drip-pink.svg')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom center",
          backgroundSize: "auto 40px",
        }}
      />
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
