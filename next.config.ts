import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/porfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/porfolio/' : '',
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json',
  },
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;