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
      <div className="w-full bg-pink-light overflow-hidden leading-none" style={{ height: 40 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/drip-pink.svg`}
          alt=""
          aria-hidden="true"
          className="w-full block"
          style={{ height: 40 }}
        />
      </div>
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
