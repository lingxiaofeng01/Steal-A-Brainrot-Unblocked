import { useEffect, useRef } from 'react';

interface AdSenseProps {
  adSlot?: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  adLayout?: string;
  adStyle?: React.CSSProperties;
  className?: string;
  responsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdSense({
  adSlot,
  adFormat = 'auto',
  adLayout,
  adStyle = { display: 'block' },
  className = '',
  responsive = true,
}: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isAdPushed = useRef(false);

  useEffect(() => {
    // 防止重复推送广告
    if (isAdPushed.current) {
      return;
    }

    try {
      if (typeof window !== 'undefined' && adRef.current) {
        // 检查 ins 元素是否已经有广告
        const ins = adRef.current;
        if (ins && !ins.getAttribute('data-adsbygoogle-status')) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          isAdPushed.current = true;
        }
      }
    } catch (err) {
      // 忽略 AdSense 错误，避免控制台污染
      if (process.env.NODE_ENV === 'development') {
        console.warn('AdSense initialization skipped:', err);
      }
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-3701727349784910"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}

// 预定义的广告组件变体

// 横幅广告（适合页面顶部/底部）
export function AdSenseBanner({ className = '' }: { className?: string }) {
  return (
    <AdSense
      adFormat="horizontal"
      className={className}
      adStyle={{ display: 'block', minHeight: '90px' }}
    />
  );
}

// 矩形广告（适合侧边栏）
export function AdSenseRectangle({ className = '' }: { className?: string }) {
  return (
    <AdSense
      adFormat="rectangle"
      className={className}
      adStyle={{ display: 'block', minHeight: '250px' }}
    />
  );
}

// 文章内广告（适合内容中间）
export function AdSenseInArticle({ className = '' }: { className?: string }) {
  return (
    <AdSense
      adFormat="fluid"
      adLayout="in-article"
      className={className}
      adStyle={{ display: 'block', textAlign: 'center' }}
    />
  );
}

// 信息流广告（适合游戏列表之间）
export function AdSenseInFeed({ className = '' }: { className?: string }) {
  return (
    <AdSense
      adFormat="fluid"
      adLayout="in-feed"
      className={className}
      adStyle={{ display: 'block', minHeight: '200px' }}
    />
  );
}

// 自适应广告（通用）
export function AdSenseResponsive({ className = '' }: { className?: string }) {
  return (
    <AdSense
      adFormat="auto"
      className={className}
      adStyle={{ display: 'block' }}
      responsive={true}
    />
  );
}

