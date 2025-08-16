import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: './',
  basePath: process.env.NODE_ENV === 'production' ? '/anthyuwu.github.io': undefined,
  trailingSlash: true,
  output: process.env.NODE_ENV === 'production' ? 'export': undefined,
};

export default nextConfig;
