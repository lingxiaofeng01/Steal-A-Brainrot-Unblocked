import { Metadata } from 'next';
import SlopeXtremePage from '@/src/pages/SlopeXtremePage';

export const metadata: Metadata = {
  title: 'Slope Xtreme - Play Free 3D Ball Racing Game Online | Neon Tunnel Challenge',
  description: 'Play Slope Xtreme free online! Race through neon tunnels in this fast-paced 3D ball game. Avoid obstacles, collect power-ups, and master the extreme slopes. No downloads required - start racing now!',
  keywords: ['slope xtreme', 'slope xtreme game', '3d ball game', 'neon tunnel racing', 'slope game', 'ball racing game', 'fast-paced arcade', 'skill game', 'avoid obstacles', 'endless runner', 'slope challenge', 'unblocked games', 'free online games', 'browser games', '1games.io', 'slope xtreme unblocked', 'slope xtreme no download', '3d racing game', 'arcade racing'],
  openGraph: {
    title: 'Slope Xtreme - Free 3D Ball Racing Game',
    description: 'Race through neon tunnels in Slope Xtreme! Fast-paced 3D ball game with challenging obstacles.',
    type: 'website',
    url: 'https://www.stealabrainrotunblocked.com/slope-xtreme',
    images: [
      {
        url: 'https://www.stealabrainrotunblocked.com/images/thumbnails/slope-xtreme.jpg',
        width: 300,
        height: 300,
        alt: 'Slope Xtreme Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slope Xtreme - Free 3D Ball Racing Game',
    description: 'Race through neon tunnels in Slope Xtreme! Fast-paced 3D ball game.',
    images: ['https://www.stealabrainrotunblocked.com/images/thumbnails/slope-xtreme.jpg'],
  },
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/slope-xtreme',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
  return <SlopeXtremePage />;
}

