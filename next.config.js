/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api_url: 'http://localhost:3004/api',
    url: 'http://localhost:3004',
    email_host: 'sandbox.smtp.mailtrap.io',
    email_port: '2525',
    email_user: 'acc02ebcfe90d2',
    email_pass: '1b4f23fac72b59',
    TOKEN_MAIL: 'e9851b8242ed65b0dfd108b0d2de4bc83fb0801ef8eb2894239e7d23194b545c7782344fdf11b05c3aa6ec17f93b0324193879013bfb666d646f9d30a2b73f347076b9395f06be0ebaa8f3a15611f0132514e92a6f47ec5127b45cb2e846af63ac651366529f0cfa350cd8600df21e7618420aeaac09d971304bea0d86fc32f8'
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
