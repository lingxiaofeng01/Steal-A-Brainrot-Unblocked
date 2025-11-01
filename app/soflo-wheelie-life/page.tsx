import { Metadata } from 'next';
import SofloWheelieLifePage from '../../src/pages/SofloWheelieLifePage';

export const metadata: Metadata = {
  title: 'SoFlo Wheelie Life - Play Free Motorcycle Wheelie Game Online | Master Stunts',
  description: 'Play SoFlo Wheelie Life free online! Master motorcycle wheelies, perform epic stunts, and dominate the streets. Realistic physics, challenging gameplay. No downloads required - start riding now!',
  keywords: ['soflo wheelie life', 'wheelie game', 'motorcycle game', 'stunt game', 'bike wheelie', 'moto racing', 'scratch game', 'driving game', 'sport game', 'skill game', 'arcade racing', 'unblocked games', 'free online games', 'browser games', 'soflo wheelie unblocked', 'motorcycle stunts', 'wheelie challenge', 'bike racing'],
  openGraph: {
    title: 'SoFlo Wheelie Life - Free Motorcycle Wheelie Game',
    description: 'Master motorcycle wheelies and perform epic stunts in SoFlo Wheelie Life! Realistic physics and challenging gameplay.',
    type: 'website',
    url: 'https://www.stealabrainrotunblocked.com/soflo-wheelie-life',
    images: [
      {
        url: 'https://www.stealabrainrotunblocked.com/images/thumbnails/soflo-wheelie-life.png',
        width: 300,
        height: 300,
        alt: 'SoFlo Wheelie Life Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoFlo Wheelie Life - Free Motorcycle Wheelie Game',
    description: 'Master motorcycle wheelies and perform epic stunts!',
    images: ['https://www.stealabrainrotunblocked.com/images/thumbnails/soflo-wheelie-life.png'],
  },
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/soflo-wheelie-life',
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
  return <SofloWheelieLifePage />;
}

