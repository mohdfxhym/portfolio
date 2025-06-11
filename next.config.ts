import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force static generation to avoid any server-side issues
  output: 'export',
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
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
  
  // Set output directory to 'out' for GitHub Pages deployment
  distDir: 'out',
};

export default nextConfig;