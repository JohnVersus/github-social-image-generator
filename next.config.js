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
  basePath: "/github-social-image-generator",
};

module.exports = nextConfig;
