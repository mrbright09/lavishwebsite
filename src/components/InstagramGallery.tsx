import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const galleryImages = [
  { src: "/images/gallery-1.png", alt: "Lavish Sacred gallery 1" },
  { src: "/images/gallery-2.png", alt: "Lavish Sacred gallery 2" },
  { src: "/images/gallery-3.png", alt: "Lavish Sacred gallery 3" },
  { src: "/images/gallery-4.png", alt: "Lavish Sacred gallery 4" },
  { src: "/images/gallery-5.png", alt: "Lavish Sacred gallery 5" },
  { src: "/images/gallery-6.png", alt: "Lavish Sacred gallery 6" },
];

export default function InstagramGallery() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Header */}
        <div className="text-center flex flex-col gap-2">
          <p className="font-sans text-xs tracking-widest uppercase text-gray-500">
            MADE TO SHARE. MADE TO CRAVE.
          </p>
          <a
            href="https://instagram.com/lavishsacredbuns"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-3xl md:text-4xl text-pink-brand hover:text-pink-deep transition-colors"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            @LAVISHSACREDBUNS
          </a>
        </div>

        {/* Gallery grid */}
        <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative flex-shrink-0 w-40 lg:w-auto rounded-lg overflow-hidden cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="w-full aspect-square object-cover transition-all duration-300 group-hover:opacity-90 group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="https://instagram.com/lavishsacredbuns"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-pink-brand text-pink-brand rounded-full px-8 py-3 font-sans font-semibold text-sm hover:bg-pink-blush transition-colors"
        >
          <InstagramIcon className="w-4 h-4" />
          FOLLOW FOR SWEET INSPIRATION
        </a>
      </div>
    </section>
  );
}
