/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/vibe-portfolio',
  assetPrefix: '/vibe-portfolio/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
