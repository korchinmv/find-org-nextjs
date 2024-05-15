/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    KEY: process.env.KEY,
  },
};

module.exports = nextConfig;
