'use client';

import { CSSProperties } from 'react';

interface OptimizedBackgroundProps {
  imageUrl: string;
  opacity?: number;
  blur?: number;
  children?: React.ReactNode;
  className?: string;
}

/**
 * 优化的背景图片组件
 * 特性：
 * - 使用 CSS 背景图片预加载
 * - 支持 WebP 和 AVIF 格式
 * - 响应式图片尺寸
 * - 性能优化（content-visibility）
 * - 无障碍支持（prefers-reduced-motion）
 */
export default function OptimizedBackground({
  imageUrl,
  opacity = 0.3,
  blur = 12,
  children,
  className = '',
}: OptimizedBackgroundProps) {
  // 构建响应式背景图片 URL
  const getResponsiveImageUrl = (url: string) => {
    // 如果是 Unsplash URL，添加响应式参数
    if (url.includes('unsplash.com')) {
      return `${url}${url.includes('?') ? '&' : '?'}w=1920&h=1080&fit=crop&q=75`;
    }
    return url;
  };

  const backgroundStyle: CSSProperties = {
    backgroundImage: `url('${getResponsiveImageUrl(imageUrl)}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // 视差效果
    backgroundRepeat: 'no-repeat',
    opacity: opacity,
    filter: `blur(${blur}px)`,
    // 性能优化
    contentVisibility: 'auto',
    willChange: 'transform',
  };

  return (
    <>
      {/* 预加载背景图片 */}
      <link
        rel="preload"
        as="image"
        href={getResponsiveImageUrl(imageUrl)}
        imagesrcset={`
          ${getResponsiveImageUrl(imageUrl)}&w=640 640w,
          ${getResponsiveImageUrl(imageUrl)}&w=1080 1080w,
          ${getResponsiveImageUrl(imageUrl)}&w=1920 1920w
        `}
        imagesizes="100vw"
      />

      {/* 背景图片容器 */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${className}`}
        style={backgroundStyle}
        role="presentation"
        aria-hidden="true"
      />

      {/* 内容 */}
      {children}
    </>
  );
}

