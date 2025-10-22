# SEO 优化建议 - 详细实施指南

## 1. 页面加载性能优化

### 1.1 使用 Next.js Image 组件

**当前问题：** 使用 `<img>` 标签，无自动优化

**解决方案：**
```typescript
// src/components/GameCard.tsx
import Image from 'next/image';

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/${game.slug}`}>
      <div className="group relative bg-white rounded-xl overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={game.cover}
            alt={game.title}
            width={400}
            height={250}
            className="w-full h-full object-cover"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </Link>
  );
}
```

### 1.2 优化背景图片

**当前问题：** 背景图片未优化，影响 LCP

**解决方案：**
```typescript
// 使用 CSS 背景图片预加载
<style>{`
  .hero-background {
    background-image: url('https://images.unsplash.com/...');
    background-size: cover;
    background-position: center;
    content-visibility: auto;
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-background {
      filter: none;
    }
  }
`}</style>
```

### 1.3 Font 优化

**添加到 layout.tsx：**
```typescript
export const metadata: Metadata = {
  // ... 其他配置
  fonts: {
    google: [
      {
        name: 'Inter',
        variable: '--font-inter',
        preload: true,
        display: 'swap', // 关键！
      },
    ],
  },
};
```

---

## 2. 内容优化

### 2.1 增加游戏详情页内容

**目标：** 每个游戏页面 1500+ 字

**结构：**
```markdown
1. 游戏介绍 (200字)
2. 游戏特性 (300字)
3. 玩法指南 (300字)
4. 游戏模式 (200字)
5. 进度系统 (200字)
6. 社区信息 (200字)
7. 为什么玩这个游戏 (200字)
8. FAQ (300字)
```

### 2.2 添加 FAQ Schema

```typescript
// src/config/seo.ts
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
```

### 2.3 优化图片 Alt 文本

**当前：** `alt={game.name}`

**改进：**
```typescript
alt={`${game.name} - Free Online Unblocked Game | Play Now`}
```

---

## 3. 技术 SEO 优化

### 3.1 添加 Security Headers

**在 next.config.js 中：**
```javascript
const nextConfig = {
  // ... 其他配置
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### 3.2 优化 next.config.js

```javascript
const nextConfig = {
  reactStrictMode: true,
  compress: true, // 启用 Gzip
  poweredByHeader: false, // 移除 X-Powered-By
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'], // 现代格式
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    ignoreBuildErrors: false, // 修复类型错误
  },
  eslint: {
    ignoreDuringBuilds: false, // 修复 ESLint 错误
  },
};
```

### 3.3 创建 Image Sitemap

**public/sitemap-images.xml：**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://www.stealabrainrotunblocked.com/1v1-lol</loc>
    <image:image>
      <image:loc>https://cdn.example.com/1v1-lol.webp</image:loc>
      <image:title>1v1 LOL - Free Online Game</image:title>
      <image:caption>Play 1v1 LOL unblocked online</image:caption>
    </image:image>
  </url>
</urlset>
```

---

## 4. 链接策略

### 4.1 内部链接优化

**改进锚文本：**
```typescript
// 不好
<Link href="/1v1-lol">Click here</Link>

// 好
<Link href="/1v1-lol">Play 1v1 LOL - Free Online Unblocked Game</Link>
```

### 4.2 相关游戏链接

```typescript
// 在游戏详情页添加
<section>
  <h2>Related Games</h2>
  {relatedGames.map(game => (
    <Link href={`/${game.slug}`}>
      {game.name} - {game.category}
    </Link>
  ))}
</section>
```

---

## 5. 移动端优化

### 5.1 改进 Viewport Meta

```html
<meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
```

### 5.2 测试工具

- Google Mobile-Friendly Test
- PageSpeed Insights
- Lighthouse

---

## 6. 监控和维护

### 6.1 设置 Google Search Console

1. 验证网站所有权
2. 提交 Sitemap
3. 监控索引覆盖率
4. 检查搜索分析

### 6.2 定期审计

- 每月检查 Core Web Vitals
- 每周检查搜索排名
- 每季度进行完整 SEO 审计

---

## 📊 预期结果

| 指标 | 当前 | 目标 | 改进 |
|------|------|------|------|
| PageSpeed 评分 | 65 | 85+ | +20 |
| SEO 评分 | 6.5/10 | 8.5/10 | +2.0 |
| 搜索排名 | 中等 | 前3位 | 显著 |
| 用户体验 | 一般 | 优秀 | 显著 |

---

**优化周期：** 4-6 周  
**预期投入：** 40-60 小时  
**预期收益：** 30-50% 流量增长

