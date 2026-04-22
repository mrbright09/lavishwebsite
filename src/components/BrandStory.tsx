import Image from "@/components/Img";
import { Heart } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="bg-pink-blush py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: image */}
        <div className="relative flex justify-center">
          <div className="relative">
            <Image
              src="/images/brand-box.jpg"
              alt="Lavish Sacred buns in a luxury gift box"
              width={520}
              height={520}
              className="rounded-3xl object-cover shadow-xl"
            />
            {/* Watermark overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span
                className="text-pink-deep opacity-10 text-5xl font-black tracking-widest"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                LAVISH SACRED
              </span>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-4 lg:right-6 w-28 h-28 rounded-full border-2 border-gold flex items-center justify-center bg-white shadow-lg">
            <div className="text-center px-2">
              <p className="font-sans font-bold text-[8px] tracking-widest text-gold uppercase leading-tight">
                PREMIUM
                <br />
                INGREDIENTS
              </p>
              <Heart className="w-3 h-3 text-pink-brand fill-pink-brand mx-auto my-1" />
              <p className="font-sans font-bold text-[8px] tracking-widest text-gold uppercase leading-tight">
                MADE WITH
                <br />
                LOVE
              </p>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="flex flex-col gap-6">
          <p className="font-sans text-xs tracking-widest uppercase text-gold">
            MADE WITH PURPOSE
          </p>
          <h2
            className="font-black tracking-wide text-gray-800 leading-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            MORE THAN JUST A TREAT
          </h2>

          {/* Gold heart divider */}
          <div className="flex items-center gap-3">
            <div className="gold-divider flex-1" />
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <div className="gold-divider flex-1" />
          </div>

          <p className="font-sans text-base text-gray-600 leading-relaxed">
            At Lavish Sacred Buns &amp; Sweets, we don&apos;t just bake—we create experiences.
            Every swirl, every glaze, every bite is crafted with premium ingredients, passion,
            and a touch of luxury.
          </p>

          <p
            className="text-xl text-gray-500"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            &ldquo;Because you deserve the best.&rdquo;
          </p>

          {/* Script sign-off */}
          <p
            className="text-2xl text-gold"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Lavish ♡
          </p>
        </div>
      </div>
    </section>
  );
}
