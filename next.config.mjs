
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      // If you plan to use other image sources later, add them here
    ],
  },

  async rewrites() {
    return [
      { source: "/portal/:path*", destination: '/:path*' },
    ]
  }
};

export default nextConfig;
