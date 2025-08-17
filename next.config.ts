import type { NextConfig } from "next";

const releaseConfig: NextConfig = {
  assetPrefix: './',
  basePath: '/anthyuwu.github.io',
  trailingSlash: true,
  output: 'export',
};

const debugConfig: NextConfig = {

};
export default process.env.NODE_ENV === 'production' ? releaseConfig : debugConfig;
