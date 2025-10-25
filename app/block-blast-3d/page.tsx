import { Metadata } from 'next';
import BlockBlast3DPage from '../../src/pages/BlockBlast3DPage';

export const metadata: Metadata = {
  title: 'Block Blast 3D - Play Free Online Unblocked Game',
  description: 'Block Blast 3D delivers the perfect balance of strategy and relaxation in a block puzzle game designed to sharpen your logic while keeping your mind at ease. Play free online!',
  keywords: ['block blast 3d', 'unblocked games', 'free online games', 'puzzle games', '3d games', 'block games'],
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/block-blast-3d',
  },
  openGraph: {
    title: 'Block Blast 3D - Play Free Online',
    description: 'Block Blast 3D delivers the perfect balance of strategy and relaxation. Play free online!',
    url: 'https://www.stealabrainrotunblocked.com/block-blast-3d',
    type: 'website',
    images: [
      {
        url: '/images/thumbnails/block-blast-3d.webp',
        width: 1200,
        height: 630,
        alt: 'Block Blast 3D',
      },
    ],
  },
};

export default function Page() {
  return <BlockBlast3DPage />;
}

