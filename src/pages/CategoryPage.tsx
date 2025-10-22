'use client';

import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { isRealGame } from '../data/games';
import NewBadge from '../components/NewBadge';
import { getNewGames, getHotGames } from '../utils/gameUtils';

interface CategoryPageProps {
  slug: string;
}

export default function CategoryPage({ slug }: CategoryPageProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // 从 URL 查询参数读取页码
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get('page') || '1', 10);
    setCurrentPage(Math.max(1, page));
  }, []);

  // 当页码改变时更新 URL
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const url = new URL(window.location.href);
    if (page === 1) {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', page.toString());
    }
    window.history.replaceState({}, '', url.toString());
  };

  // 分类信息配置
  const categoryConfig: Record<string, { name: string; emoji: string; description: string }> = {
    all: {
      name: 'New Games',
      emoji: '🎮',
      description: 'Discover the latest and most exciting unblocked games. Play free online games without downloads or restrictions.',
    },
    puzzle: {
      name: 'Puzzle Games',
      emoji: '🧩',
      description: 'Challenge your mind with our collection of puzzle games. From classic brain teasers to modern logic games.',
    },
    '3d': {
      name: '3D Games',
      emoji: '🎯',
      description: 'Immerse yourself in stunning 3D gaming experiences. High-quality graphics and engaging gameplay.',
    },
    action: {
      name: 'Action Games',
      emoji: '⚡',
      description: 'Fast-paced action games that will keep you on the edge of your seat. Test your reflexes and skills.',
    },
    adventure: {
      name: 'Adventure Games',
      emoji: '🏆',
      description: 'Embark on epic adventures and explore new worlds. Story-driven games with exciting quests.',
    },
    featured: {
      name: 'Featured Games',
      emoji: '⭐',
      description: 'Our hand-picked selection of the best games. Top-rated and most popular titles.',
    },
    hot: {
      name: 'Hot Games',
      emoji: '🔥',
      description: 'The hottest and most popular games right now. Trending titles everyone is playing.',
    },
  };

  const category = categoryConfig[slug] || categoryConfig.all;

  // 根据分类获取游戏数据
  // - Hot Games: 按播放量降序，显示所有游戏
  // - New Games (all): 按发布日期降序，显示所有游戏
  const allGames = slug === 'hot' ? getHotGames(100) : getNewGames(undefined, 100);

  // 分页逻辑：每页显示18个游戏
  const gamesPerPage = 18;
  const totalPages = Math.ceil(allGames.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const placeholderGames = allGames.slice(startIndex, startIndex + gamesPerPage);

  return (
    <>
      <div className="min-h-screen bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* 分类标题 */}
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <span className="text-4xl">{category.emoji}</span>
              {category.name}
            </h1>
          </div>

          {/* 游戏网格 */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
                {placeholderGames.map((game, i) => (
                  <a
                    key={i}
                    href={isRealGame(game) ? `/${game.slug}` : '#'}
                    className="group cursor-pointer block"
                    onClick={(e) => !isRealGame(game) && e.preventDefault()}
                  >
                    <div className={`relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl ${isRealGame(game) ? 'bg-white' : `bg-gradient-to-br ${game.color}`}`}>
                      {isRealGame(game) ? (
                        <>
                          {game.releaseDate && <NewBadge releaseDate={game.releaseDate} />}
                          <img
                            src={game.image}
                            alt={game.name}
                            className="w-full h-full object-cover"
                          />
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl">
                          {game.emoji}
                        </div>
                      )}
                    </div>
                    <p className="text-center text-sm font-semibold text-gray-700 mt-2 truncate">
                      {game.name}
                    </p>
                  </a>
                ))}
            </div>

            {/* 分页 */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-8">
                  <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full bg-orange-200 hover:bg-orange-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-bold text-gray-700 transition-colors"
                  >
                    ‹
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                        currentPage === page
                          ? 'bg-orange-400 text-white'
                          : 'bg-orange-200 hover:bg-orange-300 text-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full bg-orange-200 hover:bg-orange-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-bold text-gray-700 transition-colors"
                  >
                    ›
                  </button>
              </div>
            )}

            {/* 文字介绍板块 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-3xl">{category.emoji}</span>
                  About {category.name}
                </h2>

                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
                    Why Play {category.name}?
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>100% Free to play - No downloads or registration required</li>
                    <li>Unblocked games - Play at school, work, or anywhere</li>
                    <li>Regular updates - New games added weekly</li>
                    <li>Safe and secure - Family-friendly content</li>
                    <li>Mobile compatible - Play on any device</li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
                    How to Play
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    Simply click on any game thumbnail to start playing instantly. Most games use keyboard controls
                    (Arrow keys or WASD) and mouse for interaction. Each game includes detailed instructions and
                    controls guide. No installation needed - just click and play!
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
                    Popular Games in This Category
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    Our {category.name.toLowerCase()} collection features some of the most popular titles including
                    action-packed adventures, brain-teasing puzzles, and competitive multiplayer games. Whether you're
                    looking for a quick gaming session or an immersive experience, you'll find the perfect game here.
                  </p>

                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 mt-6 border-l-4 border-cyan-400">
                    <p className="text-sm text-gray-700">
                      <strong>💡 Pro Tip:</strong> Bookmark this page to quickly access your favorite {category.name.toLowerCase()}.
                      We update our collection regularly with the latest and greatest games!
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
