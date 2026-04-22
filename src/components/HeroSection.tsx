import Image from "next/image";
import { Crown, ShoppingCart, UtensilsCrossed } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] bg-gradient-to-r from-pink-blush to-cream flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left column */}
        <div className="flex flex-col gap-6 animate-fade-up">
          {/* Tag */}
          <div className="flex items-center gap-2">
            <div className="gold-divider w-8" />
            <span
              className="text-gold text-sm tracking-widest uppercase"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
            >
              Lavish
            </span>
            <div className="gold-divider w-8" />
          </div>

          {/* H1 stacked */}
          <div className="flex flex-col gap-1">
            <span
              className="text-pink-deep leading-none"
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: 400,
              }}
            >
              Lavish
            </span>
            <span
              className="text-gray-800 tracking-widest leading-none"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
              }}
            >
              SACRED
            </span>
            <span className="font-sans font-semibold text-xl md:text-2xl tracking-widest text-gray-600 uppercase">
              Buns &amp; Sweets
            </span>
          </div>

          {/* Tagline */}
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            &ldquo;Lord, this is good.&rdquo;
          </p>

          {/* Body copy */}
          <p className="font-sans text-base text-gray-600 leading-relaxed max-w-md">
            Indulge in handcrafted cinnamon rolls, gourmet cookies, and luxury sweets made with
            love in every bite.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-pink-brand text-white rounded-full px-7 py-3 font-sans font-semibold text-sm hover:bg-pink-deep transition-colors"
            >
              <Crown className="w-4 h-4" />
              ORDER NOW
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border border-pink-brand text-pink-brand rounded-full px-7 py-3 font-sans font-semibold text-sm hover:bg-pink-blush transition-colors"
            >
              <UtensilsCrossed className="w-4 h-4" />
              VIEW MENU
            </a>
          </div>
        </div>

        {/* Right column — product image */}
        <div className="relative flex justify-center items-center">
          {/* Watermark */}
          <span
            className="absolute top-4 right-4 text-pink-brand opacity-10 text-4xl font-black tracking-widest pointer-events-none select-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            LAVISH
          </span>

          <div className="relative animate-float drop-shadow-2xl">
            <Image
              src="/images/hero-roll.png"
              alt="Lavish Sacred signature cinnamon roll"
              width={540}
              height={420}
              className="rounded-3xl object-cover w-full max-w-lg"
              priority
            />
            {/* Decorative ring */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border-2 border-gold opacity-30" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border-2 border-pink-light opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
