import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bookawayproject.com" }],
        destination: "https://bookawayproject.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "bookawayproject.lovable.app" }],
        destination: "https://bookawayproject.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
