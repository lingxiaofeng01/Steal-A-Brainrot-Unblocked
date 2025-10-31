'use client';

import { lazy, Suspense } from 'react';
import GameDetailTemplate from '../components/GameDetailTemplate';
import { allGames, isRealGame } from '../data/games';

interface GameDetailPageProps {
  slug: string;
}

// 游戏页面组件映射表 - 每个游戏对应一个专门的页面组件
const gamePageComponents: Record<string, React.ComponentType<any>> = {
  'soflo-wheelie-life': lazy(() => import('./SofloWheelieLifePage')),
  'undead-corridor': lazy(() => import('./UndeadCorridorPage')),
  'blendrix': lazy(() => import('./BlendrixPage')),
  'steal-brainrots': lazy(() => import('./StealBrainrotsPage')),
  'yokai-dungeon': lazy(() => import('./YokaiDungeonPage')),
  'a-pretty-odd-bunny-roast-it': lazy(() => import('./APrettyOddBunnyRoastItPage')),
  'zombotron-re-boot': lazy(() => import('./ZombotronReBootPage')),
  'crazy-chicken-3d': lazy(() => import('./CrazyChicken3DPage')),
  'humans-playground': lazy(() => import('./HumansPlaygroundPage')),
  'tung-sahur-clicker': lazy(() => import('./TungSahurClickerPage')),
  'cheese-chompers-3d': lazy(() => import('./CheeseChompers3DPage')),
  'fnaf-shooter': lazy(() => import('./FnafShooterPage')),
  'dude-theft-auto': lazy(() => import('./DudeTheftAutoPage')),
  'block-breaker': lazy(() => import('./BlockBreakerPage')),
  'colorbox-mustard': lazy(() => import('./ColorboxMustardPage')),
  'top-speed-racing-3d': lazy(() => import('./TopSpeedRacing3DPage')),
  'crazy-animal-city': lazy(() => import('./CrazyAnimalCityPage')),
  'spacebar-clicker-3': lazy(() => import('./SpacebarClicker3Page')),
  'wacky-flip': lazy(() => import('./WackyFlipPage')),
  'take-care-of-shadow-milk': lazy(() => import('./TakeCareOfShadowMilkPage')),
  'perfect-orbit': lazy(() => import('./PerfectOrbitPage')),
  'goodgame-empire': lazy(() => import('./GoodgameEmpirePage')),
  'crazy-sheep-3d': lazy(() => import('./CrazySheep3DPage')),
  'crazy-sprunki-3d': lazy(() => import('./CrazySprunki3DPage')),
  'crazy-cattle-3d': lazy(() => import('./CrazyCattle3DPage')),
  'little-big-snake': lazy(() => import('./LittleBigSnakePage')),
  'rocket-fortress': lazy(() => import('./RocketFortressPage')),
  'italian-neuro-animals': lazy(() => import('./ItalianNeuroAnimalsPage')),
  'las-sis-steal-brainrot': lazy(() => import('./LasSisStealBrainrotPage')),
  'steal-the-italian-brainrot': lazy(() => import('./StealTheItalianBrainrotPage')),
  'brainrot-hook-swing': lazy(() => import('./BrainrotHookSwingPage')),
  'brainrot-clicker': lazy(() => import('./BrainrotClickerPage')),
  'italian-brainrot-baby-clicker': lazy(() => import('./ItalianBrainrotBabyClickerPage')),
  'italian-brainrot-clicker-2': lazy(() => import('./ItalianBrainrotClicker2Page')),
  'steal-brainrot-new-animals': lazy(() => import('./StealBrainrotNewAnimalsPage')),
  '1v1-lol': lazy(() => import('./1v1LolPage')),
  'smash-karts': lazy(() => import('./SmashKartsPage')),
  'kart-bros': lazy(() => import('./KartBrosPage')),
  'fix-da-brainrot': lazy(() => import('./FixDaBrainrotPage')),
  'obby-my-singing-brainrot': lazy(() => import('./ObbyMySingingBrainrotPage')),
  'memory-brainrot': lazy(() => import('./MemoryBrainrotPage')),
  'plants-vs-brainrots': lazy(() => import('./PlantsVsBrainrotsPage')),
  'crazy-cattle-3d-unblocked': lazy(() => import('./CrazyCattle3DUnblockedPage')),
  'blocky-rush': lazy(() => import('./BlockyRushPage')),
  'the-freak-circus': lazy(() => import('./TheFreakCircusPage')),
  'no-im-not-a-human': lazy(() => import('./NoImNotAHumanPage')),
  'steal-the-brainrot-fish': lazy(() => import('./StealTheBrainrotFishPage')),
  'steal-brainrot-monsters': lazy(() => import('./StealBrainrotMonstersPage')),
  'steal-the-cool-brainrot-sprunki': lazy(() => import('./StealTheCoolBrainrotSprunkiPage')),
  'slope-xtreme': lazy(() => import('./SlopeXtremePage')),
};

export default function GameDetailPage({ slug }: GameDetailPageProps) {
  // 检查是否有专门的游戏页面组件
  const GamePageComponent = gamePageComponents[slug];
  if (GamePageComponent) {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900"><p className="text-white">Loading...</p></div>}>
        <GamePageComponent />
      </Suspense>
    );
  }

  // 根据 slug 查找真实游戏数据
  const gameData = allGames.find(g => isRealGame(g) && g.slug === slug);

  // 如果找不到游戏，返回占位符
  if (!gameData || !isRealGame(gameData)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Game Not Found</h1>
          <p className="text-gray-400 mb-8">The game you're looking for doesn't exist.</p>
          <a href="/" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  // 构建游戏数据对象 - 使用 games.ts 中配置的 URL
  const game = {
    slug: gameData.slug,
    title: gameData.name,
    subtitle: 'The Ultimate Unblocked Game',
    description: gameData.description || 'Experience the most addictive unblocked game! Navigate through challenging levels, collect items, and compete with friends.',
    playUrl: gameData.url || 'https://st.8games.net/9/8g/igra-ukradi-brejnrot-original-3d/',
    thumbnail: gameData.image,
    rating: gameData.rating || 4.8,
    playCount: gameData.playCount || 0,
    tags: gameData.tags || [],
    backgroundColor: 'from-cyan-400 via-blue-400 to-indigo-400',
  };

  // 通用内容 - 没有专门页面的游戏使用这个默认内容
  const aboutContent = (
    <p className="text-lg leading-relaxed">
      {game.title} is an exciting unblocked game that combines strategy, skill, and fun!
      Navigate through challenging levels, collect power-ups, and compete with players worldwide.
    </p>
  );

  return (
    <GameDetailTemplate
      game={game}
      aboutContent={aboutContent}
      howToPlayContent={undefined}
      featuresContent={undefined}
    />
  );
}
