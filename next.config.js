/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Let builds pass even if ESLint finds issues (optional)
  eslint: { ignoreDuringBuilds: true },

  // ✅ App Router static export
  // output: 'export',

  // ✅ Required when using next/image without a running optimizer
  images: { unoptimized: true },


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
