import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../index.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // 延迟加载非关键脚本
    const loadNonCriticalScripts = () => {
      // 这里可以添加第三方脚本的延迟加载
      // 例如：Google Analytics, Hotjar 等
    };

    // 在页面加载完成后加载非关键脚本
    if (document.readyState === 'complete') {
      loadNonCriticalScripts();
    } else {
      window.addEventListener('load', loadNonCriticalScripts);
      return () => window.removeEventListener('load', loadNonCriticalScripts);
    }
  }, []);

  return <Component {...pageProps} />;
}

