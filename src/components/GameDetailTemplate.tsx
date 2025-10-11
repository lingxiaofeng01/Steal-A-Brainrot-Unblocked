import { useState, ReactNode } from 'react';
import { Maximize, ExternalLink } from 'lucide-react';
import Layout from './Layout';
import GamePreview from './GamePreview';
import StarRating from './StarRating';
import Comments from './Comments';
import NewBadge from './NewBadge';
import { hasTagPage, getTagSlug } from '../utils/tagUtils';
import { isRealGame } from '../data/games';
import { getRelatedGames, getLatestGames } from '../utils/gameUtils';

interface GameData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  playUrl: string;
  thumbnail: string;
  rating: number;
  playCount: number;
  tags: string[];
  backgroundColor: string;
  backgroundImage?: string;
}

interface GameDetailTemplateProps {
  game: GameData;
  aboutContent: ReactNode;
  howToPlayContent?: ReactNode;
  featuresContent?: ReactNode;
}

export default function GameDetailTemplate({
  game,
  aboutContent,
  howToPlayContent,
  featuresContent,
}: GameDetailTemplateProps) {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlayClick = () => {
    setShowGame(true);
  };

  const handleFullscreen = () => {
    const container = document.getElementById('game-container');
    if (!document.fullscreenElement && container) {
      container.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // 使用工具函数获取相关游戏和最新游戏
  const relatedGames = getRelatedGames(game.slug, game.tags, 6);
  const latestGames = getLatestGames(game.slug, 12);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* 1. 游戏展示区 */}
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
          {/* 背景图 */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: game.backgroundImage || 'url(https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop)',
              filter: 'blur(12px)',
            }}
          />

          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20" />

          {/* 游戏卡片 */}
          <div className="relative z-10 w-full max-w-6xl">
            {!showGame ? (
              <GamePreview
                title={game.title}
                description={game.description}
                thumbnail={game.thumbnail}
                onPlayClick={handlePlayClick}
                backgroundColor={game.backgroundColor}
              />
            ) : (
              <div id="game-container" className="relative bg-black rounded-3xl overflow-hidden border-4 border-cyan-400 shadow-2xl">
                <div className="aspect-video relative">
                  <iframe
                    id="game-frame"
                    src={game.playUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="fullscreen"
                    allowFullScreen
                    title={game.title}
                  />
                </div>
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button
                    onClick={handleFullscreen}
                    className="p-3 bg-gray-900/80 hover:bg-gray-800 rounded-lg transition-colors shadow-lg"
                    title="Fullscreen"
                  >
                    <Maximize className="w-5 h-5 text-white" />
                  </button>
                  <a
                    href={game.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/80 hover:bg-gray-800 rounded-lg transition-colors shadow-lg"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 白色背景区域 */}
        <div className="bg-white">
          {/* 2. 相关游戏（通过tag） */}
          {relatedGames.length > 0 && (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
              <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Related Games
                </h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {relatedGames.map((g, i) => (
                  <a
                    key={i}
                    href={isRealGame(g) ? `/${g.slug}` : '#'}
                    className="group cursor-pointer block"
                    onClick={(e) => !isRealGame(g) && e.preventDefault()}
                  >
                    <div className={`relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl ${isRealGame(g) ? 'bg-white' : `bg-gradient-to-br ${g.color}`}`}>
                      {isRealGame(g) ? (
                        <>
                          {g.releaseDate && <NewBadge releaseDate={g.releaseDate} />}
                          <img src={g.image} alt={g.name} className="w-full h-full object-cover" />
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl">
                          {g.emoji}
                        </div>
                      )}
                    </div>
                    <p className="text-center text-sm font-semibold text-gray-700 mt-2 truncate">{g.name}</p>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* 3. 游戏简介（名称、缩略图、评分、标签） */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-2xl p-6 border-4 border-cyan-400 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg border-2 border-white">
                    <img src={game.thumbnail} alt={game.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">{game.title}</h2>
                  <div className="mb-4">
                    <StarRating gameSlug={game.slug} />
                  </div>
                  <p className="text-gray-700 text-lg mb-4">{game.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag, i) => {
                      const isClickable = hasTagPage(tag);
                      const TagElement = isClickable ? 'a' : 'span';
                      return (
                        <TagElement
                          key={i}
                          {...(isClickable ? { href: `/tag/${getTagSlug(tag)}` } : {})}
                          className={`px-4 py-2 bg-gray-900 text-white font-semibold rounded-full shadow-md ${
                            isClickable ? 'hover:bg-gray-800 transition-colors cursor-pointer' : 'opacity-75 cursor-default'
                          }`}
                        >
                          {tag}
                        </TagElement>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. 游戏介绍 */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-br from-pink-100 via-blue-100 to-cyan-100 rounded-2xl p-8 border-4 border-cyan-400 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">📖</span>
                About {game.title}
              </h2>
              <div className="space-y-6 text-gray-700">
                {aboutContent}
                {howToPlayContent && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">🎮 How to Play</h3>
                    {howToPlayContent}
                  </div>
                )}
                {featuresContent && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">⭐ Game Features</h3>
                    {featuresContent}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 5. 游戏评论 */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <Comments gameSlug={game.slug} />
          </section>

          {/* 6. More Games（按时间排序） */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">🎮</span>
                More Games
              </h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {latestGames.map((g, i) => (
                <a
                  key={i}
                  href={isRealGame(g) ? `/${g.slug}` : '#'}
                  className="group cursor-pointer block"
                  onClick={(e) => !isRealGame(g) && e.preventDefault()}
                >
                  <div className={`relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl ${isRealGame(g) ? 'bg-white' : `bg-gradient-to-br ${g.color}`}`}>
                    {isRealGame(g) ? (
                      <>
                        {g.releaseDate && <NewBadge releaseDate={g.releaseDate} />}
                        <img src={g.image} alt={g.name} className="w-full h-full object-cover" />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl">
                        {g.emoji}
                      </div>
                    )}
                  </div>
                  <p className="text-center text-sm font-semibold text-gray-700 mt-2 truncate">{g.name}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

