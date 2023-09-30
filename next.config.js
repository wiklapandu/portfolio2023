/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api_url: 'http://localhost:3004/api',
    url: 'http://localhost:3004'
  },
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        port: '3004',
      },
      {
        hostname: 'flowbite.s3.amazonaws.com',
      },
    ]
  }
}

module.exports = nextConfig
