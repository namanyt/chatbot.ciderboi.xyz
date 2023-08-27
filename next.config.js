/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
  },
};
