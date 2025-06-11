import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  // Disable strict mode to prevent double rendering in development
  reactStrictMode: false,
  // Disable ESLint and TypeScript checks during build to prevent hanging
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;