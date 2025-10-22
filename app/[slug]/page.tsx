import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GameDetailPage from '../../src/pages/GameDetailPage';
import { allGames } from '../../src/data/games';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const game = allGames.find(g => g.slug === resolvedParams.slug);

  if (!game) {
    return {
      title: 'Game Not Found',
      description: 'The game you are looking for does not exist.',
    };
  }

  const canonicalUrl = `https://www.stealabrainrotunblocked.com/${game.slug}`;

  return {
    title: `${game.name} - Play Free Online Unblocked Game`,
    description: `Play ${game.name} online for free! Unblocked game accessible anywhere. No downloads required. Join millions of players!`,
    keywords: [game.name.toLowerCase(), 'unblocked games', 'free online games', 'play online'],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${game.name} - Play Free Online`,
      description: `Play ${game.name} online for free! Unblocked and accessible anywhere.`,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: game.image || 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
          width: 1200,
          height: 630,
          alt: game.name,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return allGames.map((game) => ({
    slug: game.slug,
  }));
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const game = allGames.find(g => g.slug === resolvedParams.slug);

  if (!game) {
    notFound();
  }

  return <GameDetailPage slug={resolvedParams.slug} />;
}

