import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel auto-detects Next.js — no special config needed.
  // We do NOT use `output: "standalone"` because that's for Docker.
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  // Allow remote images if you ever add an external CMS / CDN.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
