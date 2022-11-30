/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ['antd-mobile'],
  },
};

module.exports = nextConfig;
