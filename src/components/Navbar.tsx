"use client";

import { useState } from "react";
import { Crown, ShoppingCart, Menu, X } from "lucide-react";

const navLeft = ["HOME", "MENU", "GALLERY"];
const navRight = ["ORDER", "ABOUT", "CONTACT"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Left nav */}
        <nav className="hidden md:flex gap-8">
          {navLeft.map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-xs tracking-widest uppercase text-gray-700 hover:text-pink-brand transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Center logo */}
        <div className="flex flex-col items-center leading-tight select-none">
          <Crown className="w-4 h-4 text-gold mb-0.5" />
          <span
            className="font-script-italic text-pink-deep text-lg leading-none"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Lavish Sacred
          </span>
          <span className="font-sans text-[9px] tracking-widest uppercase text-gray-500">
            Buns &amp; Sweets
          </span>
        </div>

        {/* Right nav + CTA */}
        <div className="hidden md:flex items-center gap-6">
          {navRight.map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-xs tracking-widest uppercase text-gray-700 hover:text-pink-brand transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="flex items-center gap-1.5 bg-pink-brand text-white rounded-full px-5 py-2 text-sm font-sans font-semibold hover:bg-pink-deep transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            ORDER NOW
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-pink-light px-6 py-4 flex flex-col gap-4">
          {[...navLeft, ...navRight].map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-xs tracking-widest uppercase text-gray-700"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
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
