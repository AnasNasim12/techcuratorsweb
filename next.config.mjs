/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
    ],
  },
};

export default nextConfig;
