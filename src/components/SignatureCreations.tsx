import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { flavors } from "@/lib/menu-data";

export default function SignatureCreations() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
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
          <div className="flex items-center gap-3">
            <div className="gold-divider flex-1" />
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <div className="gold-divider flex-1" />
          </div>

          <p className="font-sans text-base text-gray-600 leading-relaxed">
            Baked to perfection. Dripping with flavor.
          </p>
          <p
            className="text-lg text-gray-500"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            Made to indulge.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-pink-brand font-sans font-semibold text-sm tracking-widest uppercase hover:text-pink-deep transition-colors group"
          >
            EXPLORE THE MENU
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right: flavor cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:overflow-visible lg:grid lg:grid-cols-3 lg:pb-0">
          {flavors.map((flavor) => (
            <div
              key={flavor.id}
              className="relative flex-shrink-0 w-44 lg:w-auto rounded-2xl overflow-hidden snap-start shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer group"
            >
              <Image
                src={flavor.image}
                alt={flavor.name}
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-pink-brand py-2 px-3">
                <p className="font-sans font-bold text-xs tracking-widest text-white uppercase text-center leading-tight">
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
