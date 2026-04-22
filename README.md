# Lavish Sacred Buns & Sweets

Official website for **Lavish Sacred Buns & Sweets** — handcrafted cinnamon rolls, gourmet cookies, and luxury sweets. Based in Birmingham, AL.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- **Lucide React** icons
- **Google Fonts** — Playfair Display, Cormorant Garamond, DM Sans

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/
    page.tsx          # Homepage — assembles all sections
    layout.tsx        # Root layout + Google Fonts
    globals.css       # Brand utility classes (drip, gold divider, font-script-italic)
  components/
    Navbar.tsx        # Sticky nav with badge logo + mobile hamburger
    HeroSection.tsx   # Full-bleed hero with floating product image
    FeatureStrip.tsx  # Handcrafted Daily / Luxury Flavors / Perfect for Every Occasion
    SignatureCreations.tsx  # 5 flavor cards with pink labels
    BrandStory.tsx    # "More Than Just a Treat" split layout
    InstagramGallery.tsx   # 6-photo gallery + @LAVISHSACREDBUNS
    CTASection.tsx    # "Ready to Indulge?" full-bleed CTA
    Footer.tsx        # Logo, nav, contact info, social icons
  lib/
    menu-data.ts      # Flavor list with names and image paths
public/
  images/            # Product photography goes here
```

## Adding Real Photos

Drop your product images into `public/images/` using these filenames:

| File | Section |
|------|---------|
| `hero-roll.png` | Hero — large featured roll |
| `roll-strawberry.png` | Strawberry Glaze card |
| `roll-biscoff.png` | Biscoff Dream card |
| `roll-pecan.png` | Pecan Caramel card |
| `roll-redvelvet.png` | Red Velvet Indulgence card |
| `roll-cookies.png` | Cookies & Cream card |
| `brand-box.png` | Brand Story section |
| `gallery-1.png` → `gallery-6.png` | Instagram gallery |
| `cta-bg.png` | CTA section background |

## Brand Colors

| Token | Hex |
|-------|-----|
| `pink-blush` | `#FDE8ED` |
| `pink-light` | `#F9C8D5` |
| `pink-brand` | `#D4567A` |
| `pink-deep` | `#B83060` |
| `gold` | `#C9A84C` |
| `cream` | `#FFF5F7` |

## Contact

📞 334-349-1193 · 📍 Birmingham, AL
