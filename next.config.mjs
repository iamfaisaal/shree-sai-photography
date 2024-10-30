/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // or http
        hostname: "img.freepik.com", // if your website has no www, drop it
      },
      {
        protocol: "https", // or http
        hostname: "images.unsplash.com", // if your website has no www, drop it
      },
    ],
  },
};

export default nextConfig;
