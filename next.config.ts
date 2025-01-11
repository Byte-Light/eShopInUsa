/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Required for Netlify
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
