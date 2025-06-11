import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  images: {
    domains: ['images.pexels.com'],
  },
  // Disable strict mode to prevent double rendering in development
  reactStrictMode: false,
};

export default nextConfig;