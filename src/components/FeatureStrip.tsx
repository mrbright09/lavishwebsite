import Image from "@/components/Img";

const features = [
  {
    icon: "/images/logolavish7.png",
    heading: "HANDCRAFTED DAILY",
    sub: "Fresh, soft and made with love",
  },
  {
    icon: "/images/logolavish5.png",
    heading: "LUXURY FLAVORS",
    sub: "Unique, rich and unforgettable",
  },
  {
    icon: "/images/logolavish9.png",
    heading: "PERFECT FOR EVERY OCCASION",
    sub: "From cravings to celebrations",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-white border-y border-pink-light py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-0">
          {features.map((f, i) => (
            <div
              key={f.heading}
              className={`flex flex-col items-center text-center gap-3 py-4 px-6 ${
                i < features.length - 1 ? "md:border-r md:border-pink-light" : ""
              }`}
            >
              <Image
                src={f.icon}
                alt={f.heading}
                width={56}
                height={56}
                className="object-contain"
              />
              <h3 className="font-sans font-bold text-xs tracking-widest uppercase text-gray-800">
                {f.heading}
              </h3>
              <p className="font-sans text-sm text-gray-500">{f.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
