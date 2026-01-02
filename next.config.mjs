/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async rewrites() {
    return [
      { source: "/portal/:path*", destination: '/:path*' },
    ]
  }
};

export default nextConfig;
