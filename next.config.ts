import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Repo is mrbright09/lavishwebsite → served at mrbright09.github.io/lavishwebsite
  basePath: "/lavishwebsite",
  images: {
    unoptimized: true,
  },
  // Expose base path to components that need it for raw <img> / CSS url()
  env: {
    NEXT_PUBLIC_BASE_PATH: "/lavishwebsite",
  },
};

export default nextConfig;
