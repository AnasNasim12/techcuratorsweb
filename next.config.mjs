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
      {
        protocol: 'https',
        hostname: 'prbadeuavftimzjiiybf.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // ✅ added this line
      },
      {
        protocol: 'https',
        hostname: 'static.semrush.com',
      },
      {
        protocol: 'https',
        hostname: 'prbadeuavftimzjiiybf.supabase.co',
      },
    ],
  },
};

export default nextConfig;
