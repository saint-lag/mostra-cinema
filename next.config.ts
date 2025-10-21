import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === "true",
  },
};

export default nextConfig;
