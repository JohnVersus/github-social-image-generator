/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["webapi.johnversus.dev", "localhost"],
  },
  basePath: "/" + process.env.NEXT_PUBLIC_BASEPATH,
  assetPrefix: "/" + process.env.NEXT_PUBLIC_BASEPATH,
};

module.exports = nextConfig;
