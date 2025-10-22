import { Metadata } from 'next';
import HomePage from '../src/pages/HomePage';

export const metadata: Metadata = {
  title: 'Play Steal a Brainrot Unblocked - Free 3D Game Online',
  description: 'Play Steal a Brainrot Unblocked free online. Collect meme characters, build your empire, and steal from other players in this 3D idle adventure game. No downloads required.',
  keywords: [
    'steal a brainrot unblocked',
    'steal a brainrot online',
    'brainrot games',
    'unblocked games',
    'free online games',
    '3D games',
    'idle games',
    'multiplayer games',
  ],
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com',
  },
  openGraph: {
    title: 'Play Steal a Brainrot Unblocked - Free 3D Game Online',
    description: 'Collect meme characters and steal from other players in Steal a Brainrot Unblocked. Play free online now!',
    url: 'https://www.stealabrainrotunblocked.com',
    type: 'website',
    images: [
      {
        url: 'https://steal-brainrot.io/data/image/steal-a-brainrot-unblocked.jpg',
        width: 1200,
        height: 630,
        alt: 'Steal a Brainrot Unblocked - Free 3D Game',
      },
    ],
  },
};

export default function Home() {
  return <HomePage />;
}

