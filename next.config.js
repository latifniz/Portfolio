/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@react-email/render"],
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: 'https',
    //       hostname: 'cdn.jsdelivr.net',
    //     }
    //   ]
    // }
  },
  // Add server configuration to use the port from the environment variable
  server: {
    port: process.env.PORT || 3000, // Default to port 3000 if PORT is not set
  },
};

module.exports = nextConfig;
