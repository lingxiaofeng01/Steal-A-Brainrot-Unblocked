import type { Metadata } from 'next';
import '../src/index.css';
import '../src/styles/background-optimization.css';
import '../src/styles/font-optimization.css';
import Sidebar from '../src/components/Sidebar';
import TopBar from '../src/components/TopBar';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stealabrainrotunblocked.com'),
  title: 'Steal a Brainrot Unblocked - Play Free 3D Puzzle Game Online | Steal a Brainrot Unblocked',
  description: 'Play Steal a Brainrot Unblocked and 100+ free online games in 2025. No downloads, no restrictions. Enjoy brainrot games, clicker games, puzzle games at school or work. Start playing now!',
  keywords: 'steal a brainrot unblocked, brainrot games, unblocked games, free online games, clicker games, puzzle games, idle games, no download games, school games, brainrot clicker, meme games',
  authors: [{ name: 'Steal a Brainrot Team' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Steal a Brainrot Unblocked',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.stealabrainrotunblocked.com',
    siteName: 'Steal a Brainrot Unblocked',
    title: 'Steal a Brainrot Unblocked - Play Free Online Games 2025',
    description: 'Play 100+ free unblocked games online. No downloads required. Accessible anywhere!',
    images: [
      {
        url: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Steal a Brainrot Unblocked',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steal a Brainrot Unblocked - Free Online Games',
    description: 'Play 100+ free unblocked games. No downloads, no restrictions!',
    images: ['https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#f43f5e" />
        <meta name="format-detection" content="telephone=no" />

        {/* Canonical tag for homepage - will be overridden by page-specific canonical in dynamic routes */}
        <link rel="canonical" href="https://www.stealabrainrotunblocked.com" />

        {/* Font Optimization - 预加载系统字体 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* 预加载关键字体 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Favicon and Icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Additional SEO Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Brainrot Games" />
        <meta name="application-name" content="Steal a Brainrot Unblocked" />

        {/* Windows Tile */}
        <meta name="msapplication-TileColor" content="#f43f5e" />
        <meta name="msapplication-TileImage" content="/favicon.svg" />

        {/* Additional SEO */}
        <meta name="color-scheme" content="light dark" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>
        <div className="min-h-screen flex bg-gradient-to-br from-pink-50 via-blue-50 to-cyan-50">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <TopBar />
            <main className="flex-1 lg:ml-0">
              {children}
            </main>
            <Footer />
          </div>
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}

