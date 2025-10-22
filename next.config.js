/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true, // 启用 Gzip 压缩
  poweredByHeader: false, // 移除 X-Powered-By 头
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // 现代图片格式支持
    formats: ['image/avif', 'image/webp'],
    // 设备尺寸优化
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // 图片尺寸优化
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 缓存优化
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 年缓存
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

