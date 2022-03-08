/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["qarea.com", "s8a8b5w5.stackpathcdn.com"],
  }
}

module.exports = nextConfig
