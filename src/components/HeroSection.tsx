import Image from "@/components/Img";
import { Crown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden flex" style={{ background: "linear-gradient(135deg, #FDE8ED 0%, #F9C8D5 60%, #FDE8ED 100%)" }}>
      <div className="w-full grid lg:grid-cols-[1fr_1fr] items-stretch">
        {/* Left: text panel */}
        <div className="flex flex-col justify-center gap-6 px-10 xl:px-20 py-16 lg:py-0 z-10">
          {/* Brand name */}
          <div className="flex flex-col gap-0">
            <span
              className="text-pink-brand leading-none"
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(4rem, 9vw, 7rem)",
              }}
            >
              Lavish
            </span>
            <span
              className="text-gold tracking-widest leading-none"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              }}
            >
              SACRED
            </span>
            <span className="font-sans font-semibold text-lg md:text-2xl tracking-[0.3em] text-gray-600 uppercase mt-1">
              BUNS &amp; SWEETS
            </span>
          </div>

          {/* Tagline */}
          <p
            className="text-gray-700 leading-snug"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            }}
          >
            &ldquo;Lord, this is good.&rdquo;
          </p>

          {/* Body copy */}
          <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm">
            Indulge in handcrafted cinnamon rolls, gourmet cookies, and luxury sweets made with
            love in every bite.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-pink-brand text-white rounded-full px-8 py-3 font-sans font-semibold text-sm hover:bg-pink-deep transition-colors shadow-md"
            >
              <Crown className="w-4 h-4" />
              ORDER NOW
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border-2 border-pink-brand text-pink-brand rounded-full px-8 py-3 font-sans font-semibold text-sm hover:bg-pink-blush transition-colors"
            >
              VIEW MENU
            </a>
          </div>
        </div>

        {/* Right: full-bleed product image */}
        <div className="relative min-h-[50vh] lg:min-h-full">
          {/* Watermark */}
          <div className="absolute top-8 right-8 z-10 flex flex-col items-end opacity-20 pointer-events-none select-none">
            <span
              className="text-pink-deep text-xl leading-none"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              Lavish
            </span>
            <span
              className="text-gray-700 text-[10px] tracking-widest font-black"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              SACRED
            </span>
            <span className="font-sans text-[7px] tracking-widest text-gray-500 uppercase">
              BUNS &amp; SWEETS
            </span>
          </div>

          <Image
            src="/images/hero-roll.jpg"
            alt="Lavish Sacred signature cinnamon roll"
            fill
            className="object-cover animate-float"
            priority
          />
        </div>
      </div>
    </section>
  );
}
