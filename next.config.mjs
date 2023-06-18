// import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "static.martylouis.com",
      "avatars.githubusercontent.com",
      "images.unsplash.com",
    ],
  },
  experimental: {
    appDir: true,
  },
}

// export default withContentlayer(nextConfig)
export default nextConfig
