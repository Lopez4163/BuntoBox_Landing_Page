/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Let the build pass even if ESLint finds problems
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
