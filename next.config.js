// filepath: /Users/andrewmakiev/Documents/ReactPortfolio/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: ".next",
  async rewrites() {
    return [
      {
        source: "/index.html",
        destination: "/200",
      },
    ];
  },
};

module.exports = nextConfig;
