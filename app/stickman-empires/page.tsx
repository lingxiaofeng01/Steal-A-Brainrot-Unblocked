import { Metadata } from 'next';
import StickmanEmpiresPage from '../../src/pages/StickmanEmpiresPage';

export const metadata: Metadata = {
  title: 'Stickman Empires - Play Free Tower Defense Strategy Game Online',
  description: 'Play Stickman Empires free online! Command stickman armies, mine resources, build defenses, and conquer enemies in this epic tower defense strategy game. Multiple game modes, diverse units, and strategic gameplay await!',
  keywords: [
    'stickman empires',
    'stickman empires game',
    'play stickman empires',
    'stickman empires online',
    'stickman empires free',
    'tower defense games',
    'strategy games',
    'stickman games',
    'war games',
    'unblocked games',
    'free online games',
    'multiplayer strategy',
    'army games',
  ],
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/stickman-empires',
  },
  openGraph: {
    title: 'Stickman Empires - Play Free Tower Defense Strategy Game Online',
    description: 'Command stickman armies, mine resources, and conquer enemies in Stickman Empires. Play free online with multiple game modes and strategic gameplay!',
    url: 'https://www.stealabrainrotunblocked.com/stickman-empires',
    type: 'website',
    images: [
      {
        url: '/images/thumbnails/stickman-empires.png',
        width: 1200,
        height: 630,
        alt: 'Stickman Empires - Tower Defense Strategy Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stickman Empires - Play Free Tower Defense Strategy Game',
    description: 'Command stickman armies and conquer enemies in this epic tower defense strategy game. Play Stickman Empires free online now!',
    images: ['/images/thumbnails/stickman-empires.png'],
  },
};

export default function Page() {
  return <StickmanEmpiresPage />;
}

