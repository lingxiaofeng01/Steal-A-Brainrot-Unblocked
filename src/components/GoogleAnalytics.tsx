'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
  // 清理旧的 MonetAg Service Worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          // 注销所有 Service Worker（MonetAg 残留）
          if (registration.active?.scriptURL.includes('sw.js')) {
            registration.unregister().then(() => {
              console.log('Removed legacy service worker:', registration.active?.scriptURL);
            });
          }
        });
      });
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NWGX0HSYFR"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NWGX0HSYFR');
          `,
        }}
      />
    </>
  );
}

