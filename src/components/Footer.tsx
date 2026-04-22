import { Mail, Phone, MapPin, Clock } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FooterLogo() {
  return (
    <div className="flex flex-col items-center select-none">
      <div className="relative border border-gold px-6 py-2 flex flex-col items-center gap-0.5" style={{ minWidth: 160 }}>
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-gold text-[10px] leading-none">✦</span>
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-gold text-[10px] leading-none">✦</span>
        <svg viewBox="0 0 24 12" className="w-7 h-3.5 text-gold fill-gold mb-0.5" aria-hidden>
          <path d="M0 12 L3 3 L7 8 L12 0 L17 8 L21 3 L24 12 Z" />
        </svg>
        <span className="text-pink-deep leading-none" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 400, fontSize: "1.25rem" }}>
          Lavish
        </span>
        <div className="w-full h-px bg-gold opacity-60 my-0.5" />
        <span className="text-gray-700 tracking-[0.2em] leading-none font-black text-[0.65rem] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
          SACRED
        </span>
        <div className="w-full h-px bg-gold opacity-60 my-0.5" />
        <span className="font-sans text-[7px] tracking-widest uppercase text-gray-400 leading-none">
          BUNS &amp; SWEETS
        </span>
      </div>
      <p className="text-gray-400 text-sm mt-3" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}>
        &ldquo;Lord, this is good.&rdquo;
      </p>
    </div>
  );
}

const navLinks = ["HOME", "MENU", "GALLERY", "ORDER", "ABOUT", "CONTACT"];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-pink-light py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        <FooterLogo />

        <div className="gold-divider w-full max-w-xs" />

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-xs tracking-widest uppercase text-gray-500 hover:text-pink-brand transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Info row */}
        <div className="grid sm:grid-cols-3 gap-6 text-center w-full max-w-2xl">
          <div className="flex flex-col items-center gap-1">
            <Phone className="w-4 h-4 text-gold" />
            <a href="tel:3343491193" className="font-sans text-sm text-gray-600 hover:text-pink-brand transition-colors">
              334-349-1193
            </a>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="font-sans text-sm text-gray-600">Birmingham, AL</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Clock className="w-4 h-4 text-gold" />
            <span className="font-sans text-sm text-gray-600">Hours: TBD</span>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center gap-3">
          <p className="font-sans text-xs tracking-widest uppercase text-gray-400">STAY CONNECTED</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/lavishsacredbuns" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-pink-brand hover:text-pink-deep transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="mailto:hello@lavishsacredbuns.com" aria-label="Email" className="text-pink-brand hover:text-pink-deep transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="gold-divider w-full max-w-xs" />

        <p className="font-sans text-xs text-gray-400 text-center">
          &copy; 2024 Lavish Sacred Buns &amp; Sweets. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
