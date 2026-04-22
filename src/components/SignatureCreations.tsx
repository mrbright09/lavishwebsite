import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { flavors } from "@/lib/menu-data";

export default function SignatureCreations() {
  return (
    <section className="bg-pink-blush/40 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[380px_1fr] gap-16 items-center">
        {/* Left: text */}
        <div className="flex flex-col gap-5">
          <p className="font-sans text-xs tracking-widest uppercase text-gold">
            OUR SIGNATURE
          </p>
          <h2
            className="font-black tracking-wide text-gray-800 leading-none"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(3rem, 7vw, 4.5rem)",
            }}
          >
            CREATIONS
          </h2>

          {/* Gold divider with heart */}
          <div className="flex items-center gap-3 max-w-[200px]">
            <div className="gold-divider flex-1" />
            <Heart className="w-3.5 h-3.5 text-gold fill-gold flex-shrink-0" />
            <div className="gold-divider flex-1" />
          </div>

          <p className="font-sans text-base text-gray-600 leading-relaxed">
            Baked to perfection. Dripping with flavor.
          </p>
          <p
            className="text-xl text-gray-500"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            Made to indulge.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-pink-brand text-white rounded-full px-7 py-3 text-sm font-sans font-semibold hover:bg-pink-deep transition-colors w-fit shadow-sm"
          >
            EXPLORE THE MENU
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right: flavor cards */}
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory lg:overflow-visible lg:pb-0">
          {flavors.map((flavor) => (
            <div
              key={flavor.id}
              className="relative flex-shrink-0 w-44 lg:flex-1 rounded-2xl overflow-hidden snap-start shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="aspect-[3/4]">
                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  width={400}
                  height={530}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-pink-brand py-3 px-2">
                <p className="font-sans font-bold text-[10px] tracking-widest text-white uppercase text-center leading-tight">
                  {flavor.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
