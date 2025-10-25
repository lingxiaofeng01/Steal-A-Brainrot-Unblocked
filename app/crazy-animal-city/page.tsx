import { Metadata } from 'next';
import CrazyAnimalCityPage from '../../src/pages/CrazyAnimalCityPage';

export const metadata: Metadata = {
  title: 'Crazy Animal City - Play Free Online Unblocked Game',
  description: 'Unleash chaos in Crazy Animal City, a wild 3D sim packed with insane destruction and beastly rage. Smash, roar, and dominate the virtual jungle! Play free online!',
  keywords: ['crazy animal city', 'unblocked games', 'free online games', '3d games', 'animal games', 'simulation games', 'action games'],
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/crazy-animal-city',
  },
  openGraph: {
    title: 'Crazy Animal City - Play Free Online',
    description: 'Unleash chaos in Crazy Animal City, a wild 3D sim packed with insane destruction and beastly rage. Play free online!',
    url: 'https://www.stealabrainrotunblocked.com/crazy-animal-city',
    type: 'website',
    images: [
      {
        url: '/images/thumbnails/crazy-animal-city.webp',
        width: 1200,
        height: 630,
        alt: 'Crazy Animal City',
      },
    ],
  },
};

export default function Page() {
  return <CrazyAnimalCityPage />;
}

