"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const navLeft = ["HOME", "MENU", "GALLERY"];
const navRight = ["ORDER", "ABOUT", "CONTACT"];

function BadgeLogo() {
  return (
    <div className="flex flex-col items-center select-none">
      {/* Outer badge frame */}
      <div className="relative border border-gold px-5 py-2 flex flex-col items-center gap-0.5"
        style={{ minWidth: 140 }}>
        {/* Corner decorations */}
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-gold text-[10px] leading-none">✦</span>
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-gold text-[10px] leading-none">✦</span>

        {/* Crown */}
        <svg viewBox="0 0 24 12" className="w-6 h-3 text-gold fill-gold mb-0.5" aria-hidden>
          <path d="M0 12 L3 3 L7 8 L12 0 L17 8 L21 3 L24 12 Z" />
        </svg>

        {/* Lavish — italic script */}
        <span
          className="text-pink-deep leading-none"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 400, fontSize: "1.1rem" }}
        >
          Lavish
        </span>

        {/* Thin gold rule */}
        <div className="w-full h-px bg-gold opacity-60 my-0.5" />

        {/* SACRED */}
        <span
          className="text-gray-800 tracking-[0.2em] leading-none font-black text-[0.7rem] uppercase"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          SACRED
        </span>

        {/* Thin gold rule */}
        <div className="w-full h-px bg-gold opacity-60 my-0.5" />

        {/* BUNS & SWEETS */}
        <span className="font-sans text-[8px] tracking-widest uppercase text-gray-500 leading-none">
          BUNS &amp; SWEETS
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
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

        {/* Center badge logo */}
        <BadgeLogo />

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
            className="flex items-center gap-1.5 border border-gray-300 text-gray-700 rounded-full px-5 py-2 text-xs font-sans tracking-widest uppercase hover:border-pink-brand hover:text-pink-brand transition-colors"
          >
            ORDER NOW
            <ShoppingCart className="w-3.5 h-3.5" />
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
