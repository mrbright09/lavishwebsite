import { Crown, Gift } from "lucide-react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.5 0 1 .5 1 1v2M12 3c-.5 0-1 .5-1 1v2M9 7h6l1 4H8L9 7ZM6 11h12v2a6 6 0 01-12 0v-2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v4m-3 0h6" />
      </svg>
    ),
    heading: "HANDCRAFTED DAILY",
    sub: "Fresh, soft and made with love",
  },
  {
    icon: <Crown className="w-8 h-8" />,
    heading: "LUXURY FLAVORS",
    sub: "Unique, rich and unforgettable",
  },
  {
    icon: <Gift className="w-8 h-8" />,
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
              <div className="text-gold">{f.icon}</div>
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
