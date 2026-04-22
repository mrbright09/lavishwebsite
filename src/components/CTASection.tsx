import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-pink-blush py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-gray-800 uppercase tracking-wide">
              READY TO
            </h2>
            <h2
              className="text-pink-brand leading-none"
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "clamp(3rem, 8vw, 5rem)",
              }}
            >
              INDULGE?
            </h2>
          </div>

          <p className="font-sans text-base text-gray-600 leading-relaxed max-w-md">
            Place your order today and treat yourself or someone you love!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-pink-brand text-white rounded-full px-7 py-3 font-sans font-semibold text-sm hover:bg-pink-deep transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              PLACE YOUR ORDER
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border border-pink-brand text-pink-brand rounded-full px-7 py-3 font-sans font-semibold text-sm hover:bg-white transition-colors"
            >
              CUSTOM ORDERS
            </a>
          </div>
        </div>

        {/* Right: image with drip overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/cta-bg.png"
            alt="Lavish Sacred luxury sweets"
            width={700}
            height={450}
            className="w-full object-cover"
          />
          {/* Pink icing drip overlay */}
          <div className="absolute top-0 inset-x-0">
            <img
              src="/images/drip-pink.svg"
              alt=""
              className="w-full"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
