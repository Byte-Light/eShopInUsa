import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use standalone mode to ensure the app runs properly on Netlify
  output: "standalone",
  reactStrictMode: true,
};

export default nextConfig;
