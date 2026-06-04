import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — deploys as plain files (Firebase Hosting). The site is fully
  // static (no SSR/API), so this is the cheapest, fastest target.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
