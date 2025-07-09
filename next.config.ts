import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json',
  },

  devIndicators: {
    buildActivity: false
  }
};

export default nextConfig;