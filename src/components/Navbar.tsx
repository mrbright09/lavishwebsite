"use client";

import { useState } from "react";
import Image from "@/components/Img";
import { ShoppingCart, Menu, X } from "lucide-react";
import { ORDER_URL } from "@/lib/menu-data";

const navLeft = [
  { label: "HOME",    href: "#" },
  { label: "MENU",    href: ORDER_URL },
  { label: "GALLERY", href: "#gallery" },
];
const navRight = [
  { label: "ORDER",   href: ORDER_URL },
  { label: "REVIEWS", href: "https://bakesy.shop/b/lavish-sacred-sweets/reviews" },
  { label: "CONTACT", href: "mailto:akajacinta@yahoo.com" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center relative">
        {/* Left nav — desktop only */}
        <nav className="hidden md:flex gap-8 flex-1 pr-16">
          {navLeft.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs tracking-widest uppercase text-gray-700 hover:text-pink-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Center logo — always centered */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="#">
            <Image
              src="/images/Logolavish2.png"
              alt="Lavish Sacred Buns & Sweets"
              width={90}
              height={90}
              className="object-contain"
              priority
            />
          </a>
        </div>

        {/* Right nav + CTA — desktop only */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-end pl-16">
          {navRight.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs tracking-widest uppercase text-gray-700 hover:text-pink-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-gray-300 text-gray-700 rounded-full px-5 py-2 text-xs font-sans tracking-widest uppercase hover:border-pink-brand hover:text-pink-brand transition-colors"
          >
            ORDER NOW
            <ShoppingCart className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile hamburger — right side */}
        <div className="flex md:hidden flex-1 justify-end">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-gray-700"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-pink-light px-6 py-4 flex flex-col gap-4">
          {[...navLeft, ...navRight].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs tracking-widest uppercase text-gray-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-pink-brand text-white rounded-full px-5 py-2 text-sm font-sans font-semibold"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            ORDER NOW
          </a>
        </div>
      )}
    </header>
  );
}
