import { Metadata } from 'next';
import PlanetBusterPage from '../../src/pages/PlanetBusterPage';

export const metadata: Metadata = {
  title: 'Planet Buster - Play Free One-Button Destruction Game Online | Destroy Planets & Upgrade Missiles',
  description: 'Play Planet Buster free online! One-button cosmic destruction game where you blast planets, upgrade missiles, and face boss battles. Addictive idle clicker with strategic upgrades. No downloads required - start destroying planets now!',
  keywords: [
    'planet buster',
    'planet buster game',
    'play planet buster',
    'planet buster online',
    'planet buster free',
    'destroy planets game',
    'one button game',
    'idle clicker game',
    'missile upgrade game',
    'casual destruction game',
    'asteroid destroyer',
    'planet destruction',
    'cosmic clicker',
    'space idle game',
    'unblocked games',
    'free online games',
    'browser games',
    '1games.io',
    'planet buster unblocked',
    'planet buster no download',
  ],
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/planet-buster',
  },
  openGraph: {
    title: 'Planet Buster - Free One-Button Cosmic Destruction Game',
    description: 'Blast planets, upgrade missiles, and conquer the universe in Planet Buster! Addictive one-button gameplay with strategic upgrades and boss battles.',
    url: 'https://www.stealabrainrotunblocked.com/planet-buster',
    type: 'website',
    images: [
      {
        url: 'https://www.stealabrainrotunblocked.com/images/thumbnails/planet-buster.jpg',
        width: 300,
        height: 300,
        alt: 'Planet Buster - Cosmic Destruction Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planet Buster - Free One-Button Cosmic Destruction Game',
    description: 'Blast planets, upgrade missiles, and conquer the universe! Play Planet Buster free online.',
    images: ['https://www.stealabrainrotunblocked.com/images/thumbnails/planet-buster.jpg'],
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
  return <PlanetBusterPage />;
}

