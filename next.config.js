/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true, // 启用 Gzip 压缩
  poweredByHeader: false, // 移除 X-Powered-By 头
  productionBrowserSourceMaps: false, // 禁用生产环境的 source maps
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
  // 优化 webpack 配置
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // 将 React 相关库分离
            react: {
              name: 'react',
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              priority: 10,
              reuseExistingChunk: true,
            },
            // 将其他 node_modules 分离
            common: {
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;

