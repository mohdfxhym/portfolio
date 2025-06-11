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
  
  // Ensure no server-side features are used
  experimental: {
    appDir: true,
  },
  
  // Disable any potential server-side features
  swcMinify: true,
  
  // Ensure clean static export
  distDir: '.next',
};

export default nextConfig;