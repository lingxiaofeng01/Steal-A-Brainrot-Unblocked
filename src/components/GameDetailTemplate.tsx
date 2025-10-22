'use client';

import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import { Maximize, ExternalLink } from 'lucide-react';
import GamePreview from './GamePreview';
import StarRating from './StarRating';
import Comments from './Comments';
import GameFAQ from './GameFAQ';
import NewBadge from './NewBadge';
import { hasTagPage, getTagSlug } from '../utils/tagUtils';
import { isRealGame } from '../data/games';
import { getRelatedGames, getLatestGames } from '../utils/gameUtils';
import { incrementPlayCount, incrementViewCount } from '../services/gameStatsService';

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

  // 页面加载时增加浏览量
  useEffect(() => {
    incrementViewCount(game.slug);
  }, [game.slug]);

  // 点击 Play 按钮时增加播放量
  const handlePlayClick = async () => {
    setShowGame(true);

    // 异步增加播放量（不阻塞UI）
    try {
      const newCount = await incrementPlayCount(game.slug);
      if (newCount > 0) {
        console.log(`✅ Play count for ${game.slug}: ${newCount}`);
      }
    } catch (err) {
      console.error('Failed to increment play count:', err);
    }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* 1. 游戏展示区 */}
      <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
        {/* 背景图 - 优化版本 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 hero-background blur-background"
          style={{
            backgroundImage: game.backgroundImage || 'url(https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop&q=75)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            contentVisibility: 'auto',
            willChange: 'transform',
          }}
          role="presentation"
          aria-hidden="true"
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
                  id="iframehtml5"
                  src={game.playUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; camera; microphone; fullscreen; geolocation; payment; midi;"
                  allowFullScreen
                  title={game.title}
                  sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-pointer-lock allow-orientation-lock allow-presentation allow-downloads"
                  scrolling="auto"
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
              {relatedGames.map((g, i) => {
                const bgClass = isRealGame(g) ? 'bg-white' : `bg-gradient-to-br ${g.color}`;
                return (
                  <a
                    key={i}
                    href={isRealGame(g) ? `/${g.slug}` : '#'}
                    className="group cursor-pointer block"
                    onClick={(e) => !isRealGame(g) && e.preventDefault()}
                  >
                    <div className={`relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl ${bgClass}`}>
                      {isRealGame(g) ? (
                        <>
                          {g.releaseDate && <NewBadge releaseDate={g.releaseDate} />}
                          <img
                            src={g.image}
                            alt={`Play ${g.name} - Free Online Game`}
                            className="w-full h-full object-cover"
                          />
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl">
                          {g.emoji}
                        </div>
                      )}
                    </div>
                    <p className="text-center text-sm font-semibold text-gray-700 mt-2 truncate">{g.name}</p>
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {/* 3. 游戏简介（名称、缩略图、评分、标签） */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-2xl p-4 sm:p-6 border-4 border-cyan-400 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-lg border-2 border-white">
                  <img
                    src={game.thumbnail}
                    alt={`${game.title} - Free Online Game Thumbnail | Play Unblocked`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 break-words">{game.title}</h1>
                <div className="mb-3 sm:mb-4">
                  <StarRating gameSlug={game.slug} />
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">{game.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {game.tags.map((tag, i) => {
                    const isClickable = hasTagPage(tag);
                    const TagElement = isClickable ? 'a' : 'span';
                    const tagProps = isClickable ? { href: `/tag/${getTagSlug(tag)}` } : {};
                    const tagClass = isClickable
                      ? 'hover:bg-gray-800 transition-colors cursor-pointer'
                      : 'opacity-75 cursor-default';
                    return (
                      <TagElement
                        key={i}
                        {...tagProps}
                        className={`px-2 sm:px-4 py-1 sm:py-2 bg-gray-900 text-white font-semibold text-xs sm:text-sm rounded-full shadow-md whitespace-nowrap ${tagClass}`}
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">🎮 How to Play</h2>
                  {howToPlayContent}
                </div>
              )}
              {featuresContent && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">⭐ Game Features</h2>
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

        {/* 6. FAQ 常见问题 */}
        <GameFAQ gameSlug={game.slug} gameTitle={game.title} />

        {/* 7. More Games（按时间排序） */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="text-3xl">🎮</span>
              More Games
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {latestGames.map((g, i) => {
              const bgClass = isRealGame(g) ? 'bg-white' : `bg-gradient-to-br ${g.color}`;
              return (
                <a
                  key={i}
                  href={isRealGame(g) ? `/${g.slug}` : '#'}
                  className="group cursor-pointer block"
                  onClick={(e) => !isRealGame(g) && e.preventDefault()}
                >
                  <div className={`relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl ${bgClass}`}>
                    {isRealGame(g) ? (
                      <>
                        {g.releaseDate && <NewBadge releaseDate={g.releaseDate} />}
                        <Image
                          src={g.image}
                          alt={`Latest Game: ${g.name} - Free Online | Play Unblocked`}
                          width={150}
                          height={150}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          quality={70}
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl">
                        {g.emoji}
                      </div>
                    )}
                  </div>
                  <p className="text-center text-sm font-semibold text-gray-700 mt-2 truncate">{g.name}</p>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

