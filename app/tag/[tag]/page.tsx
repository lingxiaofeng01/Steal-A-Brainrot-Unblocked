import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TagPage from '../../../src/pages/TagPage';
import { TAG_SEO } from '../../../src/config/seo';

interface Props {
  params: Promise<{
    tag: string;
  }>;
}

// Tag configuration mapping
const TAG_CONFIG: Record<string, { title: string; description: string; emoji: string; gradient: string }> = {
  brainrot: { title: 'Brainrot', description: 'Explore the latest brainrot games and memes', emoji: '🧠', gradient: 'from-purple-500 to-pink-500' },
  casual: { title: 'Casual', description: 'Relaxing casual games for everyone', emoji: '🎮', gradient: 'from-blue-500 to-cyan-500' },
  meme: { title: 'Meme', description: 'Funny meme-based games', emoji: '😂', gradient: 'from-yellow-500 to-orange-500' },
  clicker: { title: 'Clicker', description: 'Click-based games and idle games', emoji: '👆', gradient: 'from-green-500 to-teal-500' },
  roblox: { title: 'Roblox', description: 'Roblox-style games and experiences', emoji: '🎲', gradient: 'from-red-500 to-pink-500' },
  puzzle: { title: 'Puzzle', description: 'Brain-teasing puzzle games', emoji: '🧩', gradient: 'from-indigo-500 to-purple-500' },
  idle: { title: 'Idle', description: 'Idle and incremental games', emoji: '⏱️', gradient: 'from-pink-500 to-rose-500' },
  funny: { title: 'Funny', description: 'Hilarious and entertaining games', emoji: '🤣', gradient: 'from-orange-500 to-yellow-500' },
  strategy: { title: 'Strategy', description: 'Strategic and tactical games', emoji: '🎯', gradient: 'from-violet-500 to-purple-500' },
  adventure: { title: 'Adventure', description: 'Epic adventure games', emoji: '🏆', gradient: 'from-emerald-500 to-teal-500' },
  brain: { title: 'Brain', description: 'Brain training games', emoji: '🧠', gradient: 'from-cyan-500 to-blue-500' },
  arcade: { title: 'Arcade', description: 'Classic arcade games', emoji: '🕹️', gradient: 'from-red-500 to-yellow-500' },
  action: { title: 'Action', description: 'Fast-paced action games', emoji: '⚡', gradient: 'from-red-500 to-orange-500' },
  multiplayer: { title: 'Multiplayer', description: 'Multiplayer online games', emoji: '👥', gradient: 'from-blue-500 to-purple-500' },
  battle: { title: 'Battle', description: 'Battle and combat games', emoji: '⚔️', gradient: 'from-red-600 to-orange-600' },
  racing: { title: 'Racing', description: 'Racing and driving games', emoji: '🏎️', gradient: 'from-yellow-600 to-red-600' },
  sport: { title: 'Sport', description: 'Sport and athletic games', emoji: '⚽', gradient: 'from-green-600 to-teal-600' },
  io: { title: 'IO', description: 'IO multiplayer games', emoji: '🌐', gradient: 'from-green-600 to-blue-600' },
  shooter: { title: 'Shooter', description: 'Shooting games', emoji: '🎯', gradient: 'from-gray-700 to-red-700' },
  building: { title: 'Building', description: 'Building and construction games', emoji: '🏗️', gradient: 'from-amber-600 to-orange-600' },
  '3d': { title: '3D', description: '3D games and experiences', emoji: '🎮', gradient: 'from-cyan-600 to-purple-600' },
  horror: { title: 'Horror', description: 'Scary and terrifying horror games', emoji: '👻', gradient: 'from-purple-900 to-red-900' },
  zombie: { title: 'Zombie', description: 'Zombie survival and shooter games', emoji: '🧟', gradient: 'from-green-900 to-gray-900' },
  survival: { title: 'Survival', description: 'Survival and adventure games', emoji: '🏕️', gradient: 'from-green-700 to-brown-700' },
  '2d': { title: '2D', description: 'Classic 2D games and platformers', emoji: '🕹️', gradient: 'from-blue-600 to-indigo-600' },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const tagKey = resolvedParams.tag.toLowerCase();
  const seoConfig = TAG_SEO[tagKey as keyof typeof TAG_SEO];

  if (!seoConfig) {
    return {
      title: 'Tag Not Found',
      description: 'The tag you are looking for does not exist.',
    };
  }

  const canonicalUrl = `https://www.stealabrainrotunblocked.com/tag/${tagKey}`;

  return {
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoConfig.title,
      description: seoConfig.description,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return Object.keys(TAG_SEO).map((tag) => ({
    tag: tag,
  }));
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const tagKey = resolvedParams.tag.toLowerCase();
  const config = TAG_CONFIG[tagKey];

  if (!config || !TAG_SEO[tagKey as keyof typeof TAG_SEO]) {
    notFound();
  }

  return (
    <TagPage
      tag={tagKey}
      title={config.title}
      description={config.description}
      emoji={config.emoji}
      gradient={config.gradient}
    />
  );
}

