import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'api.dicebear.com',
        protocol: 'https',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
