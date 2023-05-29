/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'pngwing.com',
      'vecteezy.com'
    ]
  },
  env: {
    SECRET_JWT: 'LgqCLduPCCpVBEgzLamuaoZMwbcZjvOV'
  }
}

module.exports = nextConfig
