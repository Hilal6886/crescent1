/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
const { execSync } = require('child_process');

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      try {
        execSync('npx prisma generate');
        console.log('Prisma Client successfully generated.');
      } catch (error) {
        console.error('Failed to generate Prisma Client:', error);
      }
    }
    return config;
  },
};
