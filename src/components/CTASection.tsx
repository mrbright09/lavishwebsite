import Image from "@/components/Img";
import { ShoppingCart } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-pink-blush overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[480px]">
        {/* Left: text */}
        <div className="flex flex-col justify-center gap-6 px-10 xl:px-20 py-16">
          <div>
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-gray-700 uppercase tracking-widest">
              READY TO
            </h2>
            <h2
              className="text-pink-brand leading-none"
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "clamp(3.5rem, 9vw, 6rem)",
              }}
            >
              INDULGE?
            </h2>
          </div>

          <p className="font-sans text-base text-gray-600 leading-relaxed max-w-sm">
            Place your order today and treat yourself or someone you love!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-pink-brand text-white rounded-full px-7 py-3 font-sans font-semibold text-sm hover:bg-pink-deep transition-colors shadow-md"
            >
              <ShoppingCart className="w-4 h-4" />
              PLACE YOUR ORDER
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border-2 border-pink-brand text-pink-brand rounded-full px-7 py-3 font-sans font-semibold text-sm hover:bg-white transition-colors"
            >
              CUSTOM ORDERS
            </a>
          </div>
        </div>

        {/* Right: full-height image */}
        <div className="relative min-h-[360px] lg:min-h-full">
          <Image
            src="/images/cta-bg.jpg"
            alt="Lavish Sacred luxury sweets"
            fill
            className="object-cover"
          />
          {/* Drip overlay at top of image */}
          <div className="absolute top-0 inset-x-0 z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/drip-pink.svg`} alt="" className="w-full" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
