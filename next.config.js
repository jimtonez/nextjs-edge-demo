/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
    appDir: true
  },
  images: {
    domains: ["media.api-sports.io", "lh3.googleusercontent.com"]
  }
}

module.exports = nextConfig
