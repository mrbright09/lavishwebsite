import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Lavish Sacred Buns & Sweets",
  description:
    "Handcrafted cinnamon rolls, gourmet cookies, and luxury sweets made with love in every bite.",
  openGraph: {
    title: "Lavish Sacred Buns & Sweets",
    description: "Indulge in handcrafted cinnamon rolls, gourmet cookies, and luxury sweets.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} bg-cream font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
