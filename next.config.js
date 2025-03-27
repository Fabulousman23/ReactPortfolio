/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"], // Add external image domains
  },
};

module.exports = nextConfig;
