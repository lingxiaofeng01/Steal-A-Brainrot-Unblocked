import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = 'Steal a Brainrot Unblocked - Play Free 3D Puzzle Games Online',
  description = 'Play Steal a Brainrot Unblocked and other amazing puzzle games for free. Accessible anywhere, no downloads required. Challenge your mind with immersive 3D gaming experiences.',
  keywords = ['steal a brainrot', 'unblocked games', 'puzzle games', '3d games', 'brain teaser', 'free online games'],
  image = 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200',
  url,
  type = 'website',
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:type', content: type },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    if (url) {
      metaTags.push(
        { property: 'og:url', content: url },
        { name: 'twitter:url', content: url }
      );
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

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'VideoGame',
      name: title,
      description: description,
      image: image,
      applicationCategory: 'Game',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(jsonLd);
  }, [title, description, keywords, image, url, type]);

  return null;
}
