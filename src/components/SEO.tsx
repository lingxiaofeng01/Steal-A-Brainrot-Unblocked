import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  content?: string; // 页面主要内容，用于Schema.org
}

export default function SEO({
  title = 'Steal a Brainrot Unblocked - Play Free Online Games 2025 | No Download',
  description = 'Play Steal a Brainrot Unblocked and 100+ free online games in 2025. No downloads, no restrictions. Enjoy brainrot games, clicker games, puzzle games and more at school or work!',
  keywords = ['steal a brainrot unblocked', 'brainrot games', 'unblocked games', 'free online games', 'clicker games', 'puzzle games', 'idle games', 'no download games', 'school games'],
  image = 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200',
  url,
  type = 'website',
  author = 'Steal a Brainrot Team',
  publishedTime,
  modifiedTime,
  canonical,
  content,
}: SEOProps) {
  useEffect(() => {
    // 设置页面标题
    document.title = title;

    // 设置canonical链接
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
    }

    const metaTags = [
      // 基础SEO标签
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { name: 'author', content: author },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },

      // Open Graph标签（Facebook、LinkedIn等）
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: 'Steal a Brainrot Unblocked' },
      { property: 'og:locale', content: 'en_US' },

      // Twitter Card标签
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:site', content: '@stealabrainrot' },

      // 移动端优化
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Steal a Brainrot' },
    ];

    if (url) {
      metaTags.push(
        { property: 'og:url', content: url },
        { name: 'twitter:url', content: url }
      );
    }

    if (publishedTime) {
      metaTags.push({ property: 'article:published_time', content: publishedTime });
    }

    if (modifiedTime) {
      metaTags.push({ property: 'article:modified_time', content: modifiedTime });
    }

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value!);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    // 增强的结构化数据（Schema.org）
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'VideoGame',
      name: title,
      description: description,
      image: image,
      applicationCategory: 'Game',
      operatingSystem: 'Web Browser',
      genre: ['Puzzle', 'Casual', 'Idle', 'Clicker'],
      gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
      author: {
        '@type': 'Organization',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Steal a Brainrot',
        logo: {
          '@type': 'ImageObject',
          url: image,
        },
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '15000',
        bestRating: '5',
        worstRating: '1',
      },
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      ...(url && { url }),
      ...(publishedTime && { datePublished: publishedTime }),
      ...(modifiedTime && { dateModified: modifiedTime }),
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(jsonLd);
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, canonical, content]);

  return null;
}
