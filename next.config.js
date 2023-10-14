/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api_url: process.env.API_URL,
    url: process.env.URL,
    TOKEN_PUBLIC: process.env.TOKEN_PUBLIC,
    email_host: process.env.EMAIL_HOST,
    email_port: process.env.EMAIL_PORT,
    email_user: process.env.EMAIL_USER,
    email_pass: process.env.EMAIL_PASS,
    TOKEN_MAIL: process.env.TOKEN_MAIL
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
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  }
}

module.exports = nextConfig
