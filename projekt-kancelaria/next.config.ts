import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
            // {
            //     source: '/api/google-reviews',
            //     destination: 'https://maps.googleapis.com/maps/api/place/details/json',
            // },
      {
        source: "/:locale/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
