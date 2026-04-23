const BASE = "https://bakesy.shop/b/lavish-sacred-sweets";

export const ORDER_URL = `${BASE}/category/offerings`;
export const REVIEWS_URL = `${BASE}/reviews`;

export const flavors = [
  { id: 1, name: "Strawberry Glaze",      image: "/images/roll-strawberry.jpg", url: `${BASE}/products/strawberry-cinnamon-rolls` },
  { id: 2, name: "Biscoff Dream",          image: "/images/roll-biscoff.jpg",    url: `${BASE}/products/biscoff-cinnamon-rolls` },
  { id: 3, name: "Pecan Caramel",          image: "/images/roll-pecan.jpg",      url: `${BASE}/products/caramel-pecan-cinnamon-rolls` },
  { id: 4, name: "Red Velvet Indulgence",  image: "/images/roll-redvelvet.jpg",  url: `${BASE}/products/red-velvet-baby-cinnamon-roll` },
  { id: 5, name: "Cookies & Cream",        image: "/images/roll-cookies.jpg",    url: `${BASE}/products/cookies-cream-cinnamon-roll` },
];
