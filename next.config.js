const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["crests.football-data.org"],
  },
  output: "standalone",
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/sapi/:path*",
        destination: "https://api.football-data.org/:path*",
      },
    ];
  },
  // rewrites
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === "development",
  },
});

